(function () {
  const filterButtons = document.querySelectorAll('[data-citation-filter]');
  const cards = document.querySelectorAll('.citation-card');
  const search = document.getElementById('citationSearch');
  let activeFilter = 'all';

  function normalize(value) {
    return (value || '').toLowerCase().trim();
  }

  function applyFilters() {
    const query = normalize(search ? search.value : '');

    cards.forEach((card) => {
      const type = card.dataset.type || '';
      const keywords = normalize(card.dataset.keywords + ' ' + card.textContent);
      const matchesFilter = activeFilter === 'all' || type === activeFilter;
      const matchesSearch = !query || keywords.includes(query);
      card.style.display = matchesFilter && matchesSearch ? '' : 'none';
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      activeFilter = button.dataset.citationFilter || 'all';
      applyFilters();
    });
  });

  if (search) {
    search.addEventListener('input', applyFilters);
  }
})();
