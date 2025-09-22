// src/components/features.ts

export function featuresSection(): string {
  return `
  <!-- DARK: Join Waitlist / Contact -->
  <section id="waitlist" class="dark-section" aria-labelledby="cta-title">
    <div class="container mx-auto px-6 text-center waitlist-inner">

      <p class="muted cta-kicker">Get early access</p>
      <h3 id="cta-title" class="mt-sm">Join the 1DES waitlist</h3>
      <p class="muted mt-sm cta-sub">Be first to try our AI-powered strategies and get product updates.</p>

      <form id="waitlistForm" class="mt-md max-ctaw" novalidate>
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
  </section>

  <script>
    (function(){
      const form   = document.getElementById('waitlistForm');
      const email  = document.getElementById('wl-email');
      const submit = document.getElementById('wl-submit');
      const ok     = document.getElementById('wl-success');
      const bad    = document.getElementById('wl-error');

      const show = (el) => el.removeAttribute('hidden');
      const hide = (el) => el.setAttribute('hidden','');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        hide(ok); hide(bad);

        const value = email.value.trim();
        if (!value) { show(bad); return; }

        submit.disabled = true;
        const prev = submit.textContent;
        submit.textContent = 'Joining…';

        try {
          const res = await fetch('/api/waitlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: value })
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
