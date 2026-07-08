/* UCAISM.org Phase F-6 Site QA Helper
   Run in the browser console on a live page.
   This helper does not send data anywhere. */
(function () {
  const report = {
    url: window.location.href,
    titleCount: document.querySelectorAll('title').length,
    descriptionCount: document.querySelectorAll('meta[name="description"]').length,
    canonicalCount: document.querySelectorAll('link[rel="canonical"]').length,
    ogTitleCount: document.querySelectorAll('meta[property="og:title"]').length,
    twitterCardCount: document.querySelectorAll('meta[name="twitter:card"]').length,
    jsonLdCount: document.querySelectorAll('script[type="application/ld+json"]').length,
    imagesWithoutAlt: Array.from(document.images).filter(img => !img.alt).length,
    imagesWithoutDimensions: Array.from(document.images).filter(img => !img.width || !img.height).length,
    scripts: Array.from(document.scripts).map(s => s.src || '[inline]'),
    stylesheets: Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href)
  };
  console.table(report);
  console.log('UCAISM Phase F-6 QA report:', report);
  return report;
})();
