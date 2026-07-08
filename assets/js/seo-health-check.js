/* Phase E-1 optional local SEO health checker.
   This does not change SEO. It helps editors identify missing page metadata in the browser console. */
(function () {
  const checks = [
    { name: 'title', ok: !!document.title && document.title.length > 10 },
    { name: 'meta description', ok: !!document.querySelector('meta[name="description"]') },
    { name: 'canonical', ok: !!document.querySelector('link[rel="canonical"]') },
    { name: 'robots', ok: !!document.querySelector('meta[name="robots"]') }
  ];

  const missing = checks.filter((check) => !check.ok).map((check) => check.name);
  if (missing.length) {
    console.info('[UCAISM SEO] Missing or weak metadata:', missing.join(', '));
  }
}());
