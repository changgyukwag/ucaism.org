(function () {
  const buttons = Array.from(document.querySelectorAll('.foundation-filter'));
  const cards = Array.from(document.querySelectorAll('.foundation-paper-card'));

  function setFilter(track) {
    cards.forEach((card) => {
      const match = track === 'all' || card.dataset.track === track;
      card.hidden = !match;
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');
      setFilter(button.dataset.filter);
    });
  });
})();
