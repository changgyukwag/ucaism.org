document.addEventListener('DOMContentLoaded', () => {
  const copyTargets = document.querySelectorAll('[data-copy]');
  copyTargets.forEach((button) => {
    button.addEventListener('click', async () => {
      const text = button.getAttribute('data-copy') || '';
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = 'Copied';
        setTimeout(() => { button.textContent = 'Copy'; }, 1600);
      } catch (error) {
        button.textContent = 'Select text';
      }
    });
  });
});
