(function () {
  const buttons = document.querySelectorAll('[data-community-filter]');
  const search = document.getElementById('communitySearch');
  const cards = document.querySelectorAll('.pathway-card');

  let activeFilter = 'all';

  function normalize(value) {
    return (value || '').toLowerCase().trim();
  }

  function updateCards() {
    const query = normalize(search ? search.value : '');

    cards.forEach((card) => {
      const type = card.getAttribute('data-type');
      const keywords = normalize(card.getAttribute('data-keywords'));
      const text = normalize(card.textContent);
      const matchesFilter = activeFilter === 'all' || type === activeFilter;
      const matchesSearch = !query || keywords.includes(query) || text.includes(query);

      card.style.display = matchesFilter && matchesSearch ? '' : 'none';
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      activeFilter = button.getAttribute('data-community-filter') || 'all';
      updateCards();
    });
  });

  if (search) {
    search.addEventListener('input', updateCards);
  }
})();
