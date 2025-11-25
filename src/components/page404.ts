
export function page404(): string {
  const head = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Primary SEO -->
    <title>1DES — Intelligent Trading, AI Automation & Real-Time Signals</title>
    <meta name="title" content="1DES — Intelligent Trading, AI Automation & Real-Time Signals" />
    <meta name="description" content="1DES builds AI-powered trading automation with real-time data, ML-driven signals, and tools that democratize finance. Explore our products and academy." />
    <link rel="canonical" href="https://1des.com/" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="author" content="1DES" />
    <meta name="theme-color" content="#00030A" />
    <meta name="color-scheme" content="dark light" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="1DES" />
    <meta property="og:url" content="https://1des.com/" />
    <meta property="og:title" content="1DES — Intelligent Trading, AI Automation & Real-Time Signals" />
    <meta property="og:description" content="AI-first trading automation with real-time stream processing and ML-powered signals. Learn more on the 1DES site and our AI & Trading Academy." />

    <meta property="og:image" content="https://1des.com/images/1des-og.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="800" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="1DES — Intelligent Trading, AI Automation & Real-Time Signals" />
    <meta name="twitter:description" content="AI-powered trading automation. Real-time data pipelines. ML-driven signals. Democratizing finance." />
    <meta name="twitter:image" content="https://1des.com/images/1des-og.jpg" />
    <meta name="twitter:site" content="@the1des" />

    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">
    <link rel="manifest" href="/images/site.webmanifest">


    <!-- Resource Hints -->
    <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <!-- Fonts (Inter) -->
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
    <noscript>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    </noscript>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" media="print" onload="this.media='all'" />
    <noscript>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </noscript>

    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
      integrity="sha384-HtMZLkYo+pR5/u7zCzXxMJP6QoNnQJt1qkHM0EaOPvGDIzaVZbmYr/TlvUZ/sKAg"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" href="/css/styles.css" />

    <!-- Structured Data (Organization + Website) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "1DES",
      "url": "https://1des.com/",
      "logo": "https://1des.com/images/logo-1des.png",
      "description": "1DES builds AI-powered trading automation: real-time data pipelines, ML-driven signals, and tools that democratize finance.",
      "sameAs": [
        "https://www.linkedin.com/company/1des",
        "https://twitter.com/the1des",
        "https://github.com/the1des",
        "https://www.youtube.com/@1destradingsolutions497",
        "https://t.me/The1DES"
      ]
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://1des.com/",
      "name": "1DES"
    }
    </script>

    <link rel="alternate" href="https://1des.com/" hreflang="en" />
  </head>
  <body>
  <section class="site-header text-center">
  <!-- logo -->
  <div class="mb-md">
    <a href="/" aria-label="Go to homepage">
      <img src="/images/1des-logo-flat.svg" alt="1DES Logo" class="mx-auto" style="width:300px;height:120px;" />
    </a>
  </div>

  <!-- headline -->
  <h1 class="mt-md text-4xl font-bold">
    Oops! Page not found (404)
  </h1>

  <!-- short subtext -->
  <p class="mt-sm muted">
    The page you’re looking for doesn’t exist or may have been moved.<br/>
    But don’t worry — markets adapt, and so do we.
  </p>

  <div class="feature-graphic mt-md">
    <div class="rounded-full p-8 feature-graphic-outer">
      <div class="rounded-full p-6 feature-graphic-inner">
        <span class="material-icons text-5xl text-red-500">error_outline</span>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="mt-lg">
    <a href="/" class="btn btn-primary">
      ← Back to Home
    </a>
  </div>
</section>
</body>
</html>

  `;

  return [
    head,
  ].join('\n');
}
