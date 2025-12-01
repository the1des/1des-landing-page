// src/components/footer.ts
export function footerSection(): string {
  return `
  <footer class="dark-section footer" aria-labelledby="ft-title">
    <div class="container mx-auto px-6">

      <div class="footer-grid">
        <!-- Brand -->
        <div class="ft-brand">
          <h6 id="ft-title" class="sr-only">1DES footer</h6>
          <img src="/images/1des-logo-flat.svg" alt="1DES" class="ft-logo" />
          <p class="muted mt-sm ft-tagline">
            AI-powered insights that drive automated trading. Built in Barcelona, for everyone.
          </p>
          <div class="ft-social" aria-label="Social links">
            <a aria-label="X" href="https://x.com/the1des" title="X" target="_blank">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 3l18 18M21 3 3 21" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/1des" target="_blank" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9h3v9H6zM7.5 6.5A1.5 1.5 0 107.5 3a1.5 1.5 0 000 3.5zM11 9h3v1.6c.5-.9 1.7-1.8 3.4-1.8 3 0 3.6 1.8 3.6 4.1V18h-3v-4c0-1.1 0-2.6-1.7-2.6-1.7 0-2 1.2-2 2.5V18h-3z" fill="currentColor"/>
              </svg>
            </a>
            <a aria-label="GitHub" href="https://github.com/the1des" target="_blank" title="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 3 1.3 3.7 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C17.7 5 18.7 5.2 18.7 5.2c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.4 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z"/>
              </svg>
            </a>
            <a aria-label="YouTube" href="https://www.youtube.com/@1destradingsolutions497" target="_blank" title="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1A31.8 31.8 0 000 12a31.8 31.8 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.8 31.8 0 0024 12a31.8 31.8 0 00-.5-5.8zM9.8 15.4V8.6L15.8 12l-6 3.4z"/>
              </svg>
            </a>
            <a aria-label="Telegram" href="https://t.me/The1DES" target="_blank" title="Telegram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.999 15.6l-.4 3.9c.6 0 .9-.3 1.2-.6l2.9-2.8 6 4.3c1.1.6 1.8.3 2.1-1l3.8-17.8c.4-1.6-.6-2.2-1.7-1.8L1.3 9.7c-1.6.6-1.6 1.5-.3 1.9l5.7 1.8 13.2-8.4c.6-.4 1.1-.2.7.2"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Product -->
        <nav class="ft-col" aria-label="Product">
          <h6>Product</h6>
          <a href="#how">How it works</a>
          <a href="#problem-solution">1DES Solutions</a>
          <a href="https://cognitrade.1des.com" target="_blank">Cognitrade 1DES Blog</a>
          <a href="https://funding.1des.com/" target="_blank">Funding Program</a>
        </nav>

        <!-- Company -->
        <nav class="ft-col" aria-label="Company">
          <h6>Company</h6>
          <a href="#team">Team</a>
          <a href="mailto:hello@1des.com">Contact</a>
          <a href="#waitlist">Join waitlist</a>
        </nav>

        <!-- Legal -->
        <nav class="ft-col" aria-label="Legal">
          <h6>Legal</h6>
          <button class="link-like modal-trigger" data-modal="privacy">Privacy</button>
          <button class="link-like modal-trigger" data-modal="terms">Terms</button>
          <button class="link-like modal-trigger" data-modal="cookies">Cookies</button>
        </nav>
      </div>

      <div class="ft-bottom">

        <div class="ft-meta">
        <span>© 2020–<span id="year">2025</span> 1DES</span>
          <span>Barcelona, Spain</span>
        </div>
      </div>
    </div>

    <!-- soft glow -->
    <div aria-hidden="true" class="ft-glow"></div>
  </footer>

  <!-- Modals -->
  <div id="modal-privacy" class="modal" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
  <div class="modal__panel">
    <h2 id="privacy-title">Privacy Policy</h2>
    <p>We value your privacy. This website may collect limited information such as your name, email, or usage data when you interact with our services. We use this information only to improve your experience, provide requested features, and maintain the security of our systems.</p>
    <p>We do not sell, rent, or share your personal information with third parties, except when required by law or to provide essential services (such as hosting or analytics).</p>
    <p>By using this website, you agree to the collection and use of information in line with this policy. Updates to this policy may be made from time to time, and the latest version will always be available here.</p>
    <p>If you have any questions about how we handle your data, please contact us.</p>
    <button class="modal__close" data-close>Close</button>
  </div>
</div>


<div id="modal-terms" class="modal" role="dialog" aria-modal="true" aria-labelledby="terms-title">
<div class="modal__panel">
  <h2 id="terms-title">Terms &amp; Conditions</h2>
  <p>By accessing or using this website, you agree to comply with these Terms &amp; Conditions. If you do not agree, please discontinue use of the site.</p>
  <p>All content provided here is for informational purposes only. We reserve the right to modify, update, or remove content at any time without prior notice.</p>
  <p>You agree not to misuse the site, interfere with its operation, or attempt to gain unauthorized access to any part of the system.</p>
  <p>We are not liable for any damages or losses arising from the use or inability to use this website or its services.</p>
  <p>These Terms may be updated from time to time, and continued use of the site indicates your acceptance of the latest version.</p>
  <button class="modal__close" data-close>Close</button>
</div>
</div>


<div id="modal-cookies" class="modal" role="dialog" aria-modal="true" aria-labelledby="cookies-title">
  <div class="modal__panel">
    <h2 id="cookies-title">Cookies Policy</h2>
    <p>This website uses cookies to ensure the best browsing experience and to help us understand how our site is used. Cookies are small text files stored on your device when you visit a website.</p>
    <p>We use cookies for essential site functions, to improve performance, and to analyze traffic. Some cookies may also be set by third-party services integrated into our site.</p>
    <p>You can control and manage cookies in your browser settings. Please note that disabling certain cookies may affect the functionality of this website.</p>
    <p>By continuing to use this site, you consent to the use of cookies as described in this policy.</p>
    <button class="modal__close" data-close>Close</button>
  </div>
</div>


  <script>
    // Year
    (function(){ const y=document.getElementById('year'); if(y) y.textContent=String(new Date().getFullYear()); })();

    // Simple modal open/close
    document.querySelectorAll('.modal-trigger').forEach(b=>{
      b.addEventListener('click', ()=>{
        const id=b.getAttribute('data-modal');
        document.getElementById('modal-'+id)?.classList.add('open');
        document.documentElement.classList.add('modal-open');
      });
    });
    document.querySelectorAll('[data-close]').forEach(b=>{
      b.addEventListener('click', ()=> {
        b.closest('.modal')?.classList.remove('open');
        document.documentElement.classList.remove('modal-open');
      });
    });
    document.querySelectorAll('.modal').forEach(m=>{
      m.addEventListener('click', (e)=> {
        if(e.target===m){ m.classList.remove('open'); document.documentElement.classList.remove('modal-open'); }
      });
    });
  </script>
  `;
}
