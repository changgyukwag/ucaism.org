const policyFilters = document.querySelectorAll('.policy-filter');
const policyCards = document.querySelectorAll('.policy-brief-card');

policyFilters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    policyFilters.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');

    policyCards.forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.track === filter;
      card.hidden = !shouldShow;
    });
  });
});
