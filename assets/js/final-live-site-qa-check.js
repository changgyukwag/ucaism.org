(function () {
  const report = {
    url: window.location.href,
    title: document.title || null,
    description: document.querySelector('meta[name="description"]')?.content || null,
    canonical: document.querySelector('link[rel="canonical"]')?.href || null,
    openGraphTitle: document.querySelector('meta[property="og:title"]')?.content || null,
    openGraphImage: document.querySelector('meta[property="og:image"]')?.content || null,
    twitterCard: document.querySelector('meta[name="twitter:card"]')?.content || null,
    jsonLdBlocks: document.querySelectorAll('script[type="application/ld+json"]').length,
    imagesWithoutAlt: Array.from(document.images).filter((img) => !img.alt).length,
    internalLinks: Array.from(document.links).filter((a) => a.href.includes('ucaism.org') || a.getAttribute('href')?.startsWith('/')).length,
    emptyLinks: Array.from(document.links).filter((a) => !a.getAttribute('href') || a.getAttribute('href') === '#').length,
    horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth
  };

  console.table(report);
  console.log('UCAISM Final Live Site QA report:', report);
})();
