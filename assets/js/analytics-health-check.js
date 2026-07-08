/* Phase E-6 — UCAISM.org analytics and verification health check */
(function () {
  const report = [];

  function add(status, message) {
    report.push({ status, message });
  }

  const googleVerification = document.querySelector('meta[name="google-site-verification"]');
  const bingVerification = document.querySelector('meta[name="msvalidate.01"]');
  const naverVerification = document.querySelector('meta[name="naver-site-verification"]');

  add(googleVerification ? 'ok' : 'info', googleVerification ? 'Google Search Console verification meta tag found.' : 'Google Search Console verification meta tag not found. This is fine until verification is activated.');
  add(bingVerification ? 'ok' : 'info', bingVerification ? 'Bing Webmaster Tools verification meta tag found.' : 'Bing verification meta tag not found. This is fine until verification is activated.');
  add(naverVerification ? 'ok' : 'info', naverVerification ? 'Naver verification meta tag found.' : 'Naver verification meta tag not found. This is optional.');

  const scripts = Array.from(document.scripts).map((script) => script.src || 'inline-script');
  const hasGA4 = scripts.some((src) => src.includes('googletagmanager.com/gtag/js')) || typeof window.gtag === 'function';
  const hasPlausible = scripts.some((src) => src.includes('plausible.io/js/script.js')) || typeof window.plausible === 'function';
  const hasSimpleAnalytics = scripts.some((src) => src.includes('simpleanalyticscdn.com'));

  add(hasGA4 || hasPlausible || hasSimpleAnalytics ? 'ok' : 'info', hasGA4 || hasPlausible || hasSimpleAnalytics ? 'An analytics script appears to be present.' : 'No analytics script detected. This is expected before activation.');

  const canonical = document.querySelector('link[rel="canonical"]');
  add(canonical ? 'ok' : 'warning', canonical ? `Canonical URL found: ${canonical.href}` : 'Canonical URL missing. Add one before final SEO launch.');

  console.table(report);
  return report;
})();
