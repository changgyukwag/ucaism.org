(function () {
  const checks = [];
  const count = (selector) => document.querySelectorAll(selector).length;
  const get = (selector, attr) => {
    const el = document.querySelector(selector);
    return el ? (attr ? el.getAttribute(attr) : el.textContent.trim()) : null;
  };

  checks.push({ item: 'title', count: count('title'), value: get('title') });
  checks.push({ item: 'meta description', count: count('meta[name="description"]'), value: get('meta[name="description"]', 'content') });
  checks.push({ item: 'canonical', count: count('link[rel="canonical"]'), value: get('link[rel="canonical"]', 'href') });
  checks.push({ item: 'robots', count: count('meta[name="robots"]'), value: get('meta[name="robots"]', 'content') });
  checks.push({ item: 'og:title', count: count('meta[property="og:title"]'), value: get('meta[property="og:title"]', 'content') });
  checks.push({ item: 'og:description', count: count('meta[property="og:description"]'), value: get('meta[property="og:description"]', 'content') });
  checks.push({ item: 'og:url', count: count('meta[property="og:url"]'), value: get('meta[property="og:url"]', 'content') });
  checks.push({ item: 'og:image', count: count('meta[property="og:image"]'), value: get('meta[property="og:image"]', 'content') });
  checks.push({ item: 'twitter:card', count: count('meta[name="twitter:card"]'), value: get('meta[name="twitter:card"]', 'content') });
  checks.push({ item: 'json-ld', count: count('script[type="application/ld+json"]'), value: count('script[type="application/ld+json"]') + ' block(s)' });

  console.table(checks);

  const warnings = checks.filter((check) => check.count === 0 || check.count > 1);
  if (warnings.length) {
    console.warn('Priority head metadata warnings:', warnings);
  } else {
    console.info('Priority head metadata check passed: one instance of each core tag was found.');
  }
})();
