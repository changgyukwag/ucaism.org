(() => {
  const required = [
    'meta[property="og:title"]',
    'meta[property="og:description"]',
    'meta[property="og:url"]',
    'meta[property="og:image"]',
    'meta[name="twitter:card"]',
    'meta[name="twitter:title"]',
    'meta[name="twitter:description"]',
    'meta[name="twitter:image"]'
  ];

  const results = required.map((selector) => ({
    selector,
    found: Boolean(document.querySelector(selector))
  }));

  console.table(results);

  const missing = results.filter((item) => !item.found);
  if (missing.length) {
    console.warn('Missing social metadata:', missing.map((item) => item.selector));
  } else {
    console.info('Open Graph and Twitter Card metadata appear complete for this page.');
  }
})();
