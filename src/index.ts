// src/index.ts
import { homepage } from './components/homepage';
import { page404 } from './components/page404';

interface Env {
  DB: D1Database;
  TURNSTILE_SECRET: string;
  TURNSTILE_SITEKEY?: string;
}

// Simple in-memory rate limiter per IP (best-effort within a single isolate)
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 20;
type Bucket = { count: number; reset: number };
const rateBuckets = new Map<string, Bucket>();

function allowRequest(key: string): boolean {
  const now = Date.now();
  const entry = rateBuckets.get(key);
  if (entry && entry.reset > now) {
    if (entry.count >= RATE_MAX) return false;
    entry.count += 1;
    return true;
  }
  rateBuckets.set(key, { count: 1, reset: now + RATE_WINDOW_MS });
  // opportunistic cleanup to avoid unbounded growth
  if (rateBuckets.size > 1000) {
    for (const [k, v] of rateBuckets) {
      if (v.reset <= now) rateBuckets.delete(k);
    }
  }
  return true;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const ip = request.headers.get("CF-Connecting-IP");
    const rateKey = ip ?? "unknown";
    const host = url.hostname.toLowerCase();
    const isLocalHost = host === "localhost" || host === "127.0.0.1";
    const canonicalHost = "1des.com";

    if (!isLocalHost && host === `www.${canonicalHost}`) {
      const target = `${url.protocol}//${canonicalHost}${url.pathname}${url.search}`;
      return Response.redirect(target, 301);
    }

    // === API endpoint to save email ===
    // src/index.ts (only the /api/waitlist branch shown)
    if (url.pathname === "/api/waitlist" && request.method === "POST") {
      try {
        if (!allowRequest(rateKey)) {
          return json(
            { ok: false, error: "rate_limited" },
            429,
            { "Retry-After": String(Math.ceil(RATE_WINDOW_MS / 1000)) }
          );
        }

        const ct = request.headers.get("content-type") || "";
        let email = "";
        let turnstileToken = "";

        if (ct.includes("application/json")) {
          const body = await request.json().catch(() => ({} as any));
          email = String(body.email || "");
          turnstileToken = String(
            body.turnstileToken ||
            body["cf-turnstile-response"] ||
            ""
          );
        } else if (ct.includes("application/x-www-form-urlencoded")) {
          const form = await request.formData();
          email = String(form.get("email") || "");
          turnstileToken = String(
            form.get("turnstileToken") ||
            form.get("cf-turnstile-response") ||
            ""
          );
        } else {
          // tolerate raw JSON posted without header (local tests)
          try {
            const raw = await request.text();
            const parsed = JSON.parse(raw);
            email = String(parsed?.email || "");
            turnstileToken = String(
              parsed?.turnstileToken ||
              parsed?.["cf-turnstile-response"] ||
              ""
            );
          } catch {
            // ignore
          }
        }

        const cleaned = email.trim().toLowerCase();
        const valid =
          cleaned.length >= 5 &&
          cleaned.length <= 254 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned);
        if (!valid) return json({ ok: false, error: "invalid_email" }, 400);

        if (!turnstileToken) {
          return json({ ok: false, error: "turnstile_required" }, 400);
        }

        if (!env.TURNSTILE_SECRET) {
          console.error("TURNSTILE_SECRET is not configured");
          return json({ ok: false, error: "server_misconfigured" }, 500);
        }

        const turnstileOk = await verifyTurnstile(env.TURNSTILE_SECRET, turnstileToken, ip);
        if (!turnstileOk) {
          return json({ ok: false, error: "challenge_failed" }, 400);
        }

        // sanity-check binding
        if (!env.DB || typeof env.DB.prepare !== "function") {
          console.error("D1 binding missing: env.DB is undefined or invalid");
          return json({ ok: false, error: "d1_binding_missing" }, 500);
        }

        // optional: probe DB connection
        await env.DB.prepare("SELECT 1").first();

        const ua = request.headers.get("User-Agent") ?? null;

        try {
          await env.DB.prepare(
            "INSERT INTO waitlist (email, ip, user_agent) VALUES (?, ?, ?)"
          ).bind(cleaned, ip ?? null, ua).run();
          return json({ ok: true }, 200);
        } catch (e: any) {
          const msg = String(e?.message || e);
          if (msg.includes("no such table: waitlist")) {
            console.error("D1 error:", msg);
            return json({ ok: false, error: "table_missing" }, 500);
          }
          if (msg.includes("UNIQUE") || msg.includes("constraint")) {
            // Hide dedup signal to avoid address enumeration
            return json({ ok: true }, 200);
          }
          console.error("D1 insert error:", msg);
          return json({ ok: false, error: "db_error" }, 500);
        }
      } catch (e: any) {
        const msg = String(e?.message || e);
        console.error("API crash:", msg);
        return json({ ok: false, error: "server_error" }, 500);
      }
    }


    // === Homepage ===
    if (url.pathname === "/") {
      return new Response(homepage(env.TURNSTILE_SITEKEY || ""), {
        headers: { "Content-Type": "text/html; charset=UTF-8" },
      });
    }

    // === Redirect blog ===
    if (url.pathname.startsWith("/blog")) {
      return Response.redirect("https://cognitrade.1des.com/", 302);
    }

    // === Fallback ===
    return new Response(page404(), {
      status: 404,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "X-Robots-Tag": "noindex",
      },
    });
  },
} satisfies ExportedHandler<Env>;

// helper for JSON responses
function json(
  data: unknown,
  status = 200,
  headers: Record<string, string> = {}
) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...headers,
    },
  });
}

async function verifyTurnstile(
  secret: string,
  token: string,
  remoteip: string | null
): Promise<boolean> {
  try {
    const form = new FormData();
    form.append("secret", secret);
    form.append("response", token);
    if (remoteip) form.append("remoteip", remoteip);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      console.error("Turnstile verify failed with HTTP", res.status);
      return false;
    }

    const outcome = await res.json() as { success: boolean; ["error-codes"]?: string[] };
    if (!outcome.success) {
      console.warn("Turnstile challenge failed", outcome["error-codes"] || []);
    }
    return !!outcome.success;
  } catch (err) {
    console.error("Turnstile verify crash:", err);
    return false;
  }
}
