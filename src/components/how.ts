// src/components/how.ts
export function howSection(): string {
  return `
  <section id="how" class="light-section" aria-labelledby="how-title">
    <div class="container mx-auto px-6 text-left">

      <!-- Section heading -->
      <div class="flex items-center gap-sm mb-md">
        <h2 id="how-title" class="m-0">How?</h2>
        <span class="material-icons text-primary" style="font-size:2.25rem; line-height:1;">arrow_forward</span>
      </div>

      <!-- Desktop version -->
      <div class="how-desktop">
        <ol class="how-list">
          <li>
            <h3>1) Data → Features</h3>
            <p class="muted">Stream OHLCV for all tradable pairs and engineer technical features (EMA, RSI, volatility, regimes).
            Our lab pipeline is plug-and-play for order book depth, funding, news, on-chain and sentiment signals.</p>
          </li>
          <li>
            <h3>2) Learn</h3>
            <p class="muted">Train <strong>LSTM</strong> and <strong>binary classifiers</strong> on rolling windows.
            We optimize algorithmic trading performance with strict validation and walk-forward testing.</p>
          </li>
          <li>
            <h3>3) Backtest</h3>
            <p class="muted">Cost-aware backtests on historical streams; only robust strategies pass the bar and move to shadow mode.</p>
          </li>
          <li>
            <h3>4) Shadow Mode</h3>
            <p class="muted">Paper-trade live to verify signal quality vs. backtests before real execution and capital allocation.</p>
          </li>
          <li>
            <h3>5) Decide → Execute (sub-½s)</h3>
            <p class="muted">Event-driven platform watches markets continuously and reacts in <strong>&lt; 0.5s</strong>.
            Models output <strong>long/short</strong> with <strong>TP/SL</strong>, executed on Binance with resource-optimized routing.</p>
          </li>
        </ol>
        <div class="stat-chips mt-md">
          <span class="chip">Market: Crypto (multi-pair)</span>
          <span class="chip">Data: OHLCV + indicators</span>
          <span class="chip">Models: LSTM + Classifier</span>
          <span class="chip">Modes: Backtest → Shadow → Live</span>
          <span class="chip">Exchange: Binance</span>
          <span class="chip">Latency: &lt; 0.5s</span>
        </div>
      </div>

      <!-- Mobile version -->
      <div class="how-mobile">
        <ol class="how-list">
          <li><h3>1) Data</h3><p class="muted">Stream OHLCV, indicators, plus depth/news/sentiment.</p></li>
          <li><h3>2) Learn</h3><p class="muted">LSTM + classifiers on rolling windows.</p></li>
          <li><h3>3) Backtest</h3><p class="muted">Only robust strategies move forward.</p></li>
          <li><h3>4) Shadow</h3><p class="muted">Paper-trade live to validate.</p></li>
          <li><h3>5) Execute</h3><p class="muted">Signals fire in &lt;0.5s on Binance.</p></li>
        </ol>
        <div class="stat-chips mt-md">
          <span class="chip">Crypto multi-pair</span>
          <span class="chip">OHLCV + indicators</span>
          <span class="chip">LSTM + Classifier</span>
          <span class="chip">Backtest → Live</span>
          <span class="chip">&lt;0.5s latency</span>
        </div>
      </div>

    </div>
  </section>
  `;
}
