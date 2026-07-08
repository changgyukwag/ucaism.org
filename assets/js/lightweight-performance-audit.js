/* UCAISM.org Phase F-5 Lightweight Performance Audit
 * Optional QA helper. Run in the browser console after loading a page.
 */
(function () {
  const scripts = Array.from(document.scripts).map((script) => ({
    src: script.src || '[inline]',
    defer: script.defer,
    async: script.async,
    type: script.type || 'classic'
  }));

  const images = Array.from(document.images).map((img) => ({
    src: img.currentSrc || img.src,
    alt: img.getAttribute('alt'),
    widthAttr: img.getAttribute('width'),
    heightAttr: img.getAttribute('height'),
    loading: img.getAttribute('loading'),
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight
  }));

  const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map((link) => link.href);
  const duplicateTitles = document.querySelectorAll('title').length;
  const duplicateDescriptions = document.querySelectorAll('meta[name="description"]').length;
  const duplicateCanonicals = document.querySelectorAll('link[rel="canonical"]').length;

  const missingImageDimensions = images.filter((img) => !img.widthAttr || !img.heightAttr);
  const missingAlt = images.filter((img) => img.alt === null);
  const blockingExternalScripts = scripts.filter((script) => script.src !== '[inline]' && !script.defer && !script.async);

  console.group('UCAISM Phase F-5 Lightweight Performance Audit');
  console.log('Stylesheets:', stylesheets);
  console.log('Scripts:', scripts);
  console.log('Images:', images);
  console.log('Missing image dimensions:', missingImageDimensions);
  console.log('Missing alt attributes:', missingAlt);
  console.log('Blocking external scripts:', blockingExternalScripts);
  console.log('Metadata counts:', {
    titles: duplicateTitles,
    descriptions: duplicateDescriptions,
    canonicals: duplicateCanonicals
  });
  console.groupEnd();

  return {
    stylesheets,
    scripts,
    images,
    missingImageDimensions,
    missingAlt,
    blockingExternalScripts,
    metadataCounts: {
      titles: duplicateTitles,
      descriptions: duplicateDescriptions,
      canonicals: duplicateCanonicals
    }
  };
})();
