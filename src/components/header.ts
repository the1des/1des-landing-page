// src/components/header.ts
export function headerSection(): string {
  return `
    <section class="site-header text-center">
      <!-- logo -->
      <div class="mb-md">
        <img src="/images/1des-logo-flat.svg" alt="1DES Logo" class="mx-auto" style="width:300px;height:120px;" />
      </div>

      <!-- headline -->
      <h1 class="mt-md">
        Markets change. 1DES adapts. You win.
      </h1>

      <!-- short subtext -->
      <p class="mt-sm muted">
        AI-powered insights that drive automated trading.
      </p>

      <div class="feature-graphic mt-md">
        <div class="rounded-full p-8 feature-graphic-outer">
          <div class="rounded-full p-6 feature-graphic-inner">
            <span class="material-icons text-5xl">bar_chart</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
