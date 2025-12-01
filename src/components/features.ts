// src/components/features.ts

export function featuresSection(turnstileSiteKey = ""): string {
  return `
  <!-- DARK: Join Waitlist / Contact -->
  <section id="waitlist" class="dark-section" aria-labelledby="cta-title">
    <div class="container mx-auto px-6 text-center waitlist-inner">

      <p class="muted cta-kicker">Get early access</p>
      <h3 id="cta-title" class="mt-sm">Join the 1DES waitlist</h3>
      <p class="muted mt-sm cta-sub">Be first to try our AI-powered strategies and get product updates.</p>

      <form
        id="waitlistForm"
        class="mt-md max-ctaw"
        novalidate
        data-turnstile-sitekey="${turnstileSiteKey}"
      >
        <label for="wl-email" class="sr-only">Email address</label>
        <input
          id="wl-email"
          name="email"
          type="email"
          required
          placeholder="you@domain.com"
          class="form-input"
          inputmode="email"
          autocomplete="email"
          autocapitalize="none"
          spellcheck="false"
        />
        <button type="submit" class="btn btn-primary btn-block mt-sm" id="wl-submit">
          Join →
        </button>

        <p class="muted mt-xs cta-legal">
          We’ll send occasional updates. No spam. Unsubscribe anytime.
        </p>

        <div id="wl-success" class="mt-sm cta-success" role="status" aria-live="polite" hidden>
          ✅ Thanks! You’re on the list.
        </div>
        <div id="wl-error" class="mt-sm cta-error" role="alert" aria-live="assertive" hidden>
          ⚠️ Something went wrong. Please try again or email us.
        </div>
      </form>

      <div class="mt-md">
        <p class="muted">Questions? Partnerships?</p>
        <a class="link-primary" href="mailto:hello@1des.com">hello@1des.com</a>
      </div>
    </div>

    <!-- soft background glow -->
    <div aria-hidden="true" class="waitlist-glow"></div>
    <div id="turnstile-container" data-sitekey="${turnstileSiteKey}" hidden></div>
  </section>

  <script>
    (function(){
      const form   = document.getElementById('waitlistForm');
      const email  = document.getElementById('wl-email');
      const submit = document.getElementById('wl-submit');
      const ok     = document.getElementById('wl-success');
      const bad    = document.getElementById('wl-error');
      const tsContainer = document.getElementById('turnstile-container');

      const show = (el) => el.removeAttribute('hidden');
      const hide = (el) => el.setAttribute('hidden','');

      const waitForTurnstile = () => new Promise((resolve, reject) => {
        let attempts = 0;
        const step = () => {
          if (typeof window.turnstile !== 'undefined') return resolve();
          if (++attempts > 30) return reject(new Error('turnstile_not_loaded'));
          setTimeout(step, 150);
        };
        step();
      });

      const sitekey = form?.getAttribute('data-turnstile-sitekey') || '';
      let widgetId = null;
      let resolveToken = null;
      let rejectToken = null;

      const ensureTurnstile = async () => {
        if (!sitekey) throw new Error('turnstile_sitekey_missing');
        await waitForTurnstile();
        if (widgetId) return widgetId;
        if (!tsContainer) throw new Error('turnstile_container_missing');
        widgetId = window.turnstile.render('#turnstile-container', {
          sitekey,
          size: 'invisible',
          callback: (token) => { resolveToken?.(token); },
          'error-callback': () => { rejectToken?.(new Error('turnstile_error')); },
          'expired-callback': () => { if (widgetId) window.turnstile.reset(widgetId); }
        });
        return widgetId;
      };

      const executeTurnstile = () => new Promise((resolve, reject) => {
        resolveToken = resolve;
        rejectToken = reject;
        window.turnstile.execute(widgetId);
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        hide(ok); hide(bad);

        const value = email.value.trim();
        if (!value) { show(bad); return; }

        submit.disabled = true;
        const prev = submit.textContent;
        submit.textContent = 'Joining…';

        try {
          await ensureTurnstile();
          const token = await executeTurnstile();
          const res = await fetch('/api/waitlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: value, turnstileToken: token })
          });
          if (res.ok) {
            form.reset();
            show(ok);
          } else {
            show(bad);
          }
        } catch {
          show(bad);
        } finally {
          submit.disabled = false;
          submit.textContent = prev || 'Join →';
        }
      });
    })();
  </script>
  `;
}
