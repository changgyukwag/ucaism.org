/* Phase E-2 Schema Health Check
   Optional local browser-console helper. Include temporarily on a page or paste into DevTools.
   It reports JSON-LD blocks and basic Schema.org readiness. */
(function () {
  const blocks = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
  const results = blocks.map((block, index) => {
    try {
      const parsed = JSON.parse(block.textContent.trim());
      return {
        index: index + 1,
        valid: true,
        type: parsed['@type'] || '(missing @type)',
        id: parsed['@id'] || '(missing @id)',
        name: parsed.name || '(missing name)'
      };
    } catch (error) {
      return { index: index + 1, valid: false, error: error.message };
    }
  });
  console.table(results);
  if (!blocks.length) console.warn('No JSON-LD Schema.org blocks found on this page.');
})();
