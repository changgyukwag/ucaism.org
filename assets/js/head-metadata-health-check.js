(function () {
  const checks = [];
  const q = (selector) => document.querySelector(selector);
  const qa = (selector) => Array.from(document.querySelectorAll(selector));

  function add(name, pass, detail) {
    checks.push({ check: name, pass: Boolean(pass), detail: detail || "" });
  }

  add("Title exists", Boolean(document.title && document.title.trim().length > 10), document.title || "Missing title");
  const description = q('meta[name="description"]');
  add("Meta description exists", Boolean(description && description.content && description.content.length >= 50), description ? description.content : "Missing description");
  const canonical = q('link[rel="canonical"]');
  add("Canonical URL exists", Boolean(canonical && canonical.href), canonical ? canonical.href : "Missing canonical");
  add("Only one canonical URL", qa('link[rel="canonical"]').length === 1, String(qa('link[rel="canonical"]').length));
  add("Open Graph title exists", Boolean(q('meta[property="og:title"]')), "");
  add("Open Graph description exists", Boolean(q('meta[property="og:description"]')), "");
  add("Open Graph image exists", Boolean(q('meta[property="og:image"]')), "");
  add("Twitter card exists", Boolean(q('meta[name="twitter:card"]')), "");
  add("JSON-LD exists", qa('script[type="application/ld+json"]').length >= 1, String(qa('script[type="application/ld+json"]').length));
  add("No duplicate descriptions", qa('meta[name="description"]').length <= 1, String(qa('meta[name="description"]').length));

  console.table(checks);
  const failed = checks.filter((item) => !item.pass);
  if (failed.length) {
    console.warn("UCAISM head metadata QA found issues:", failed);
  } else {
    console.info("UCAISM head metadata QA passed.");
  }
})();
