// src/components/team.ts
export function teamSection(): string {
  return `
  <section id="team" class="light-section" aria-labelledby="team-title">
    <div class="container mx-auto px-6">

      <!-- ===== MOBILE VERSION ===== -->
      <div class="team-mobile text-center">
        <p class="muted team-kicker">Our mission</p>
        <h3 id="team-title" class="mt-sm team-headline">Build intelligent trading for everyone</h3>
        <p class="muted mt-sm m-intro">
          Finance should be <strong>fair, fast, accessible</strong>. We turn market data into real-time ML decisions.
        </p>

        <h4 class="mt-md">Team</h4>

        <div class="m-list mt-sm">
          <!-- Bahman -->
          <article class="m-card">
            <div class="m-left">
              <div class="m-name">Bahman</div>
              <div class="m-badges">
                <span class="chip m-chip-soft">Co-founder</span>
                <span class="chip m-chip-line">Team Lead</span>
              </div>
            </div>
            <img src="/images/Bahman.jpg" alt="Bahman" class="m-avatar" />
          </article>

          <!-- K1 -->
          <article class="m-card">
            <div class="m-left">
              <div class="m-name">K1</div>
              <div class="m-badges">
                <span class="chip m-chip-soft">Co-founder</span>
                <span class="chip m-chip-line">Tech Lead</span>
              </div>
            </div>
            <img src="/images/K1.jpg" alt="K1" class="m-avatar" />
          </article>

          <!-- Mehdi -->
          <article class="m-card">
            <div class="m-left">
              <div class="m-name">Mehdi</div>
              <div class="m-badges">
                <span class="chip m-chip-soft">Co-founder</span>
                <span class="chip m-chip-line">Senior Developer</span>
              </div>
            </div>
            <img src="/images/Mehdi.jpg" alt="Mehdi" class="m-avatar" />
          </article>

          <!-- Kasra -->
          <article class="m-card">
            <div class="m-left">
              <div class="m-name">Kasra</div>
              <div class="m-badges">
                <span class="chip m-chip-line">Developer</span>
              </div>
            </div>
            <img src="/images/Kasra.jpg" alt="Kasra" class="m-avatar" />
          </article>
        </div>

        <div class="mt-md">
          <p class="muted">Want to collaborate or invest?</p>
          <a class="link-primary" href="mailto:hello@1des.com">hello@1des.com</a>
        </div>
      </div>

      <!-- ===== DESKTOP/TABLET VERSION ===== -->
      <div class="team-desktop text-center">
        <p class="muted" style="letter-spacing:.15em;text-transform:uppercase;font-size:.8rem;">Our mission</p>
        <h3 class="mt-sm">Build intelligent trading for everyone</h3>
        <p class="muted mt-md" style="max-width:760px;margin:0 auto;">
          We believe finance should be <strong>fair, fast, and accessible</strong>.
          1DES turns market data into decisions — using ML that adapts, tests, and executes in real time.
          We ship small, learn fast, and keep it honest.
        </p>

        <h4 class="mt-xl">Team</h4>
        <div class="team-grid mt-md">
          <!-- Bahman -->
          <article class="member-card text-center">
            <span class="founder-badge">Co-founder</span>
            <img src="/images/Bahman.jpg" alt="Bahman" class="member-avatar" />
            <h5 class="mt-sm mb-xs">Bahman</h5>
            <span class="role-badge">Team Lead</span>
            <p class="muted mt-sm">Dreams big, builds fast, always curious.</p>
          </article>

          <!-- K1 -->
          <article class="member-card text-center">
            <span class="founder-badge">Co-founder</span>
            <img src="/images/K1.jpg" alt="K1" class="member-avatar" />
            <h5 class="mt-sm mb-xs">K1</h5>
            <span class="role-badge">Tech Lead</span>
            <p class="muted mt-sm">Connector of ideas, keeps vision sharp.</p>
          </article>

          <!-- Mehdi -->
          <article class="member-card text-center">
            <span class="founder-badge">Co-founder</span>
            <img src="/images/Mehdi.jpg" alt="Mehdi" class="member-avatar" />
            <h5 class="mt-sm mb-xs">Mehdi</h5>
            <span class="role-badge">Senior Developer</span>
            <p class="muted mt-sm">Calm under pressure, code with heart.</p>
          </article>

          <!-- Kasra -->
          <article class="member-card text-center">
            <img src="/images/Kasra.jpg" alt="Kasra" class="member-avatar" />
            <h5 class="mt-sm mb-xs">Kasra</h5>
            <span class="role-badge">Developer</span>
            <p class="muted mt-sm">Curious learner, brings fresh energy.</p>
          </article>
        </div>

        <div class="mt-xl">
          <p class="muted">Want to collaborate or invest?</p>
          <a class="link-primary" href="mailto:hello@1des.com">hello@1des.com</a>
        </div>
      </div>
    </div>

    <!-- glow -->
    <div aria-hidden="true" class="team-glow"></div>
  </section>
  `;
}
