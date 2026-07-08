/* UCAISM.org Phase E-7 Final SEO QA helper
   Optional browser-console script for local page checks. */
(function () {
  const get = (selector, attr) => {
    const node = document.querySelector(selector);
    return node ? (attr ? node.getAttribute(attr) : node.textContent || "") : "";
  };

  const all = (selector) => Array.from(document.querySelectorAll(selector));

  const report = {
    url: window.location.href,
    title: document.title || "",
    metaDescription: get('meta[name="description"]', "content"),
    canonical: get('link[rel="canonical"]', "href"),
    robots: get('meta[name="robots"]', "content"),
    openGraph: {
      title: get('meta[property="og:title"]', "content"),
      description: get('meta[property="og:description"]', "content"),
      image: get('meta[property="og:image"]', "content"),
      url: get('meta[property="og:url"]', "content")
    },
    twitter: {
      card: get('meta[name="twitter:card"]', "content"),
      title: get('meta[name="twitter:title"]', "content"),
      description: get('meta[name="twitter:description"]', "content"),
      image: get('meta[name="twitter:image"]', "content")
    },
    structuredDataBlocks: all('script[type="application/ld+json"]').length,
    hreflangLinks: all('link[rel="alternate"][hreflang]').map((link) => ({
      hreflang: link.getAttribute("hreflang"),
      href: link.getAttribute("href")
    })),
    imagesWithoutAlt: all("img").filter((img) => !img.getAttribute("alt")).length,
    blockingScripts: all("script[src]").filter((script) => !script.defer && !script.async && script.type !== "module").map((script) => script.src),
    stylesheets: all('link[rel="stylesheet"]').map((link) => link.href)
  };

  const recommendations = [];
  if (!report.metaDescription) recommendations.push("Add a meta description.");
  if (!report.canonical) recommendations.push("Add a canonical URL.");
  if (!report.openGraph.title || !report.openGraph.image) recommendations.push("Add complete Open Graph metadata.");
  if (!report.twitter.card) recommendations.push("Add Twitter Card metadata.");
  if (report.structuredDataBlocks === 0) recommendations.push("Add JSON-LD structured data.");
  if (report.imagesWithoutAlt > 0) recommendations.push("Add alt text to all meaningful images.");
  if (report.blockingScripts.length > 0) recommendations.push("Consider defer or async for non-critical scripts.");

  console.group("UCAISM.org Final SEO QA");
  console.table(report);
  if (recommendations.length) {
    console.warn("Recommendations:", recommendations);
  } else {
    console.info("No immediate page-level issues detected by this helper.");
  }
  console.groupEnd();
})();
