// Phase F-2 Navigation Consolidation helper
// Works with docs/navigation-consolidated-header-snippet.html.
(function () {
  const shell = document.querySelector('[data-ucaism-nav]');
  if (!shell) return;

  const mobileToggle = shell.querySelector('[data-nav-mobile-toggle]');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = shell.getAttribute('data-mobile-open') === 'true';
      shell.setAttribute('data-mobile-open', String(!isOpen));
      mobileToggle.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  shell.querySelectorAll('[data-nav-dropdown]').forEach(function (item) {
    const button = item.querySelector('button');
    if (!button) return;
    button.addEventListener('click', function () {
      const isOpen = item.getAttribute('data-open') === 'true';
      shell.querySelectorAll('[data-nav-dropdown]').forEach(function (other) {
        other.setAttribute('data-open', 'false');
        const otherButton = other.querySelector('button');
        if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
      });
      item.setAttribute('data-open', String(!isOpen));
      button.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  document.addEventListener('click', function (event) {
    if (shell.contains(event.target)) return;
    shell.querySelectorAll('[data-nav-dropdown]').forEach(function (item) {
      item.setAttribute('data-open', 'false');
      const button = item.querySelector('button');
      if (button) button.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    shell.setAttribute('data-mobile-open', 'false');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    shell.querySelectorAll('[data-nav-dropdown]').forEach(function (item) {
      item.setAttribute('data-open', 'false');
      const button = item.querySelector('button');
      if (button) button.setAttribute('aria-expanded', 'false');
    });
  });
})();
