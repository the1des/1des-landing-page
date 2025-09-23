// src/index.ts
import { homepage } from './components/homepage';
import { page404 } from './components/page404';

interface Env {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // === API endpoint to save email ===
    // src/index.ts (only the /api/waitlist branch shown)
    if (url.pathname === "/api/waitlist" && request.method === "POST") {
      try {
        const ct = request.headers.get("content-type") || "";
        let email = "";

        if (ct.includes("application/json")) {
          const body = await request.json().catch(() => ({} as any));
          email = String(body.email || "");
        } else if (ct.includes("application/x-www-form-urlencoded")) {
          const form = await request.formData();
          email = String(form.get("email") || "");
        } else {
          // tolerate raw JSON posted without header (local tests)
          try {
            const raw = await request.text();
            const parsed = JSON.parse(raw);
            email = String(parsed?.email || "");
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

        // sanity-check binding
        if (!env.DB || typeof env.DB.prepare !== "function") {
          console.error("D1 binding missing: env.DB is undefined or invalid");
          return json({ ok: false, error: "d1_binding_missing" }, 500);
        }

        // optional: probe DB connection
        await env.DB.prepare("SELECT 1").first();

        const ip = request.headers.get("CF-Connecting-IP") ?? null;
        const ua = request.headers.get("User-Agent") ?? null;

        try {
          await env.DB.prepare(
            "INSERT INTO waitlist (email, ip, user_agent) VALUES (?, ?, ?)"
          ).bind(cleaned, ip, ua).run();
          return json({ ok: true }, 201);
        } catch (e: any) {
          const msg = String(e?.message || e);
          // helpful hints
          if (msg.includes("no such table: waitlist")) {
            console.error("D1 error:", msg);
            return json({ ok: false, error: "table_missing" }, 500);
          }
          if (msg.includes("UNIQUE") || msg.includes("constraint")) {
            return json({ ok: true, deduped: true }, 200);
          }
          console.error("D1 insert error:", msg);
          return json({ ok: false, error: "db_error", detail: msg }, 500);
        }
      } catch (e: any) {
        const msg = String(e?.message || e);
        console.error("API crash:", msg);
        return json({ ok: false, error: "server_error", detail: msg }, 500);
      }
    }


    // === Homepage ===
    if (url.pathname === "/") {
      return new Response(homepage(), {
        headers: { "Content-Type": "text/html; charset=UTF-8" },
      });
    }

    // === Redirect blog ===
    if (url.pathname.startsWith("/blog")) {
      return Response.redirect("https://cognitrade.1des.com/", 302);
    }

    // === Fallback ===
    return new Response(page404(), {
      headers: { "Content-Type": "text/html; charset=UTF-8" },
    });
  },
} satisfies ExportedHandler<Env>;

// helper for JSON responses
function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
