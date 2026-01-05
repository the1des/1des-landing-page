export function problemSection(): string {
  return `
<section id="problem-solution" class="light-section" aria-labelledby="metrics-title">
  <div class="container mx-auto px-6 pos-rel">
    <!-- Top-left label -->
    <div class="pv-label pill">Problem <span class="vs-sep">→</span> Solution</div>

    <h2 id="metrics-title" class="sr-only">Watch the 1DES core flow</h2>

    <div class="pv-video">
      <div class="pv-video__frame">
        <iframe
          src="https://www.youtube.com/embed/MTvRgaOo4sA"
          title="1DES core flow"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</section>
  `;
}
