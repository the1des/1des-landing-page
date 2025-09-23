export function problemSection(): string {
  return `
<section id="problem-solution" class="light-section" aria-labelledby="metrics-title">
  <div class="container mx-auto px-6 pos-rel">
    <!-- Top-left label -->
    <div class="pv-label pill">Problem <span class="vs-sep">→</span> Solution</div>

    <h2 id="metrics-title" class="sr-only">Trading outcomes: baseline vs 1DES (last 3 months)</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start pv-grid">
      <!-- Problem -->
      <div class="stat-block stat-block--problem pv-fade-problem">
        <p class="eyebrow">Without 1DES (last 3 months)</p>
        <p class="stat-number" data-problem-return>-18.4%</p>
        <p class="muted mt-sm">median retail return over the period.</p>
        <div class="stat-chips mt-sm">
          <span class="chip">Win rate&nbsp;<span data-problem-win>34.1%</span></span>
          <span class="chip">Profit factor&nbsp;<span data-problem-pf>0.74</span></span>
        </div>
        <button type="button" class="action-pill mt-sm" data-modal-open="methodology">
          Methodology &amp; sources
        </button>
      </div>

      <!-- Arrow -->
      <div class="pv-arrow" aria-hidden="true"></div>

      <!-- Solution -->
      <div class="stat-block stat-block--solution pv-fade-solution">
        <p class="eyebrow">With 1DES (last 3 months)</p>
        <p class="stat-number accent" data-solution-return>+63.95%</p>
        <p class="muted mt-sm">total return over the period.</p>
        <div class="stat-chips mt-sm">
          <span class="chip">Win rate&nbsp;<span data-solution-win>39.22%</span></span>
          <span class="chip">Profit factor&nbsp;<span data-solution-pf>2.63</span></span>
        </div>
        <button type="button" class="action-pill mt-sm" data-modal-open="performance">
          Open performance report
        </button>
      </div>
    </div>

    <p class="caption muted mt-md">
      * Past performance is not indicative of future results. Trading involves risk.
    </p>
  </div>
</section>

<!-- Modal: Methodology -->
<div class="modal" id="modal-methodology" aria-hidden="true">
  <div class="modal__backdrop" data-modal-close></div>
  <div class="modal__panel">
    <button class="modal__close" data-modal-close>&times;</button>
    <h3>Methodology &amp; Sources</h3>
    <p>
      Results reflect typical retail trading outcomes observed in recent industry reports and
      aggregated exchange statistics. The figures illustrate the median retail return, win rate,
      and profit factor commonly seen across active traders.
    </p>
    <ul>
      <li><strong>Median retail return:</strong> Average profit and loss across sampled retail accounts within comparable time windows.</li>
      <li><strong>Win rate:</strong> Share of closed trades that were profitable (greater than 0%).</li>
      <li><strong>Profit factor:</strong> Ratio of gross profits to gross losses. Values below 1.0 indicate that losses outweigh gains.</li>
      <li><strong>Data sources:</strong> ESMA &amp; FCA broker transparency reports, exchange-level trade data, and peer-reviewed studies on retail trading performance.</li>
      <li><strong>Baseline construction:</strong> Figures are calculated consistently across sources without leverage adjustment and are intended to represent typical conditions.</li>
    </ul>
    <p class="muted">
      These benchmarks are provided for context and may vary by market, region, and trading period.
    </p>
  </div>
</div>


<!-- Modal: Performance -->
<div class="modal" id="modal-performance" aria-hidden="true">
  <div class="modal__backdrop" data-modal-close></div>
  <div class="modal__panel">
    <button class="modal__close" data-modal-close>&times;</button>
    <h3>1DES Performance</h3>
    <ul>
      <li><strong>Return:</strong> <span data-solution-return>+63.95%</span></li>
      <li><strong>Win rate:</strong> <span data-solution-win>39.22%</span></li>
      <li><strong>Profit factor:</strong> <span data-solution-pf>2.63</span></li>
    </ul>
    <p>
      These results are based on a combination of live trading data and extensive backtesting.
      Our models are trained on large-scale historical datasets and validated against real market
      conditions to ensure consistency and reliability.
    </p>
    <p>
      <strong>Return</strong> measures the total account growth over the observed period.
      <strong>Win rate</strong> indicates how often trades closed in profit.
      <strong>Profit factor</strong> is the ratio of gross profits to gross losses, with values above 2.0
      generally considered strong in systematic trading.
    </p>
    <p class="muted">
      Performance may vary depending on market volatility, asset classes, and execution conditions,
      but these benchmarks demonstrate the effectiveness of the 1DES approach compared to typical
      retail trading outcomes.
    </p>
  </div>
</div>


<script>
(function () {
  let scrollY = 0;

  const lockScroll = () => {
    scrollY = window.scrollY || window.pageYOffset;
    document.documentElement.classList.add('modal-open'); // disable snap
    document.body.style.position = 'fixed';
    document.body.style.top = \`-\${scrollY}px\`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  };

  const unlockScroll = () => {
    document.documentElement.classList.remove('modal-open');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollY);
  };

  const closeAny = () => {
    const open = document.querySelector('.modal[aria-hidden="false"]');
    if (open) open.setAttribute('aria-hidden','true');
    unlockScroll();
  };

  document.addEventListener('click', function (e) {
    const openBtn    = e.target.closest('[data-modal-open]');
    const closeBtn   = e.target.closest('[data-modal-close]');
    const isBackdrop = e.target.classList.contains('modal__backdrop');

    if (openBtn) {
      e.preventDefault();
      e.stopPropagation();
      const id = openBtn.getAttribute('data-modal-open');
      const m  = document.getElementById('modal-' + id);
      if (m) {
        m.setAttribute('aria-hidden','false');
        lockScroll();
      }
    }
    if (closeBtn || isBackdrop) {
      e.preventDefault();
      closeAny();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAny();
  });
})();
</script>
  `;
}
