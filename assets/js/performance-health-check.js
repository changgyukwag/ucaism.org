/* UCAISM.org Phase E-5 Performance Health Check
   Optional local browser-console helper for GitHub Pages static pages.
   Usage: include temporarily in a page or paste into DevTools console. */
(function () {
  const report = {
    page: window.location.href,
    checkedAt: new Date().toISOString(),
    imagesWithoutLazyLoading: [],
    imagesWithoutDimensions: [],
    renderBlockingStylesheets: [],
    scriptsWithoutDeferOrAsync: [],
    missingPreconnects: [],
    largeDomWarning: false
  };

  document.querySelectorAll('img').forEach((img) => {
    if (!img.hasAttribute('loading')) report.imagesWithoutLazyLoading.push(img.src || img.alt || '(inline image)');
    if (!img.hasAttribute('width') || !img.hasAttribute('height')) report.imagesWithoutDimensions.push(img.src || img.alt || '(inline image)');
  });

  document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    if (!link.media || link.media === 'all') report.renderBlockingStylesheets.push(link.href || link.getAttribute('href'));
  });

  document.querySelectorAll('script[src]').forEach((script) => {
    if (!script.defer && !script.async && script.type !== 'module') {
      report.scriptsWithoutDeferOrAsync.push(script.src || script.getAttribute('src'));
    }
  });

  const preconnects = Array.from(document.querySelectorAll('link[rel="preconnect"]')).map((l) => l.href);
  ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'].forEach((host) => {
    if (document.documentElement.innerHTML.includes(host) && !preconnects.some((p) => p.startsWith(host))) {
      report.missingPreconnects.push(host);
    }
  });

  report.largeDomWarning = document.querySelectorAll('*').length > 1500;
  console.table(report);
  console.log('UCAISM Performance Health Check:', report);
  return report;
})();
