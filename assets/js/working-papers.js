const workingFilters = document.querySelectorAll('.working-filter');
const workingCards = document.querySelectorAll('.working-paper-card');

workingFilters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    workingFilters.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');

    workingCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.track === filter;
      card.hidden = !matches;
    });
  });
});
