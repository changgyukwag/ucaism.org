(function () {
  const switchers = document.querySelectorAll('[data-language-switcher]');
  if (!switchers.length) return;

  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  switchers.forEach((switcher) => {
    const links = switcher.querySelectorAll('a[href]');
    links.forEach((link) => {
      const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') || '/';
      if (linkPath === currentPath) {
        link.setAttribute('aria-current', 'true');
      }
    });
  });
})();
