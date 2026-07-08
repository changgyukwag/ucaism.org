(function () {
  const report = {
    title: document.title || null,
    canonical: document.querySelector('link[rel="canonical"]')?.href || null,
    description: document.querySelector('meta[name="description"]')?.content || null,
    ogTitle: document.querySelector('meta[property="og:title"]')?.content || null,
    ogImage: document.querySelector('meta[property="og:image"]')?.content || null,
    twitterCard: document.querySelector('meta[name="twitter:card"]')?.content || null,
    jsonLdCount: document.querySelectorAll('script[type="application/ld+json"]').length,
    stylesheetCount: document.querySelectorAll('link[rel="stylesheet"]').length,
    blockingScripts: Array.from(document.querySelectorAll('script[src]')).filter((script) => !script.defer && !script.async).map((script) => script.src),
    internalLinks: Array.from(document.querySelectorAll('a[href^="/"]')).length,
    emptyLinks: Array.from(document.querySelectorAll('a[href="#"], a[href=""]')).length,
    imagesWithoutAlt: Array.from(document.querySelectorAll('img')).filter((img) => !img.alt).map((img) => img.src),
    h1Count: document.querySelectorAll('h1').length
  };

  console.group('UCAISM.org Phase F integration health check');
  console.table(report);

  if (!report.title) console.warn('Missing document title.');
  if (!report.description) console.warn('Missing meta description.');
  if (!report.canonical) console.warn('Missing canonical URL.');
  if (report.h1Count !== 1) console.warn('Expected exactly one H1 per page. Found:', report.h1Count);
  if (report.blockingScripts.length) console.warn('Blocking scripts found:', report.blockingScripts);
  if (report.imagesWithoutAlt.length) console.warn('Images missing alt text:', report.imagesWithoutAlt);
  if (report.emptyLinks) console.warn('Empty or placeholder links found:', report.emptyLinks);

  console.groupEnd();
  return report;
})();
