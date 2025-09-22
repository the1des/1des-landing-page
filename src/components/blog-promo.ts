// src/components/blog-promo.ts
export function blogPromoSection(): string {
  return `
  <section id="blog" class="dark-section blog-promo" aria-labelledby="blog-title">
    <div class="container mx-auto px-6">
      <div class="blog-grid">
        <!-- Header -->
        <div class="blog-head">
          <div class="blog-brand">
            <img src="/images/cognitrade-logo.png" alt="Cognitrade" class="blog-logo" />
            <span class="chip">Blog</span>
          </div>

          <h1 id="blog-title" class="blog-title">Cognitrade</h1>
          <p class="muted blog-sub">Navigating crypto markets with AI insights</p>

          <!-- CTAs -->
          <div class="blog-ctas">
            <a class="btn btn-primary blog-cta" href="https://cognitrade.1des.com/" target="_blank" rel="noopener">
              Read the latest insights
            </a>
          </div>

          <!-- Featured articles -->
          <div class="featured-articles">
            <a class="fa-card" href="https://cognitrade.1des.com/posts/10-enhance-algo-trading-win-rate-ml-part-1-labelling-data" target="_blank" rel="noopener">
              <h3>How to Improve Algo Trading Win Rate with ML</h3>
              <p class="muted">Practical labelling techniques and backtesting workflows for boosting win rate.</p>
            </a>

            <a class="fa-card" href="https://cognitrade.1des.com/posts/18-feature-store-architecture-real-time-ml-trading-pipelines" target="_blank" rel="noopener">
              <h3>Feature Store: The Key to MLOps for Trading Bots</h3>
              <p class="muted">How feature stores enable reliable, real-time pipelines for ML-driven trading.</p>
            </a>
          </div>

          <!-- quick points -->
          <div class="stat-chips mt-md">
            <span class="chip">AI • ML • Trading</span>
            <span class="chip">Guides & Tutorials</span>
            <span class="chip">Case Studies</span>
          </div>
        </div>
      </div>
    </div>

    <!-- subtle glow -->
    <div aria-hidden="true" class="blog-glow"></div>
  </section>
  `;
}
