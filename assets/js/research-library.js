(function () {
  const searchInput = document.getElementById('library-search');
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const cards = Array.from(document.querySelectorAll('.resource-card'));
  const count = document.getElementById('resource-count');
  const noResults = document.getElementById('no-results');

  if (!searchInput || !filterButtons.length || !cards.length) return;

  let activeFilter = 'all';

  function normalize(value) {
    return String(value || '').trim().toLowerCase();
  }

  function applyFilters() {
    const query = normalize(searchInput.value);
    let shown = 0;

    cards.forEach((card) => {
      const type = card.dataset.type || '';
      const text = normalize(card.innerText + ' ' + (card.dataset.keywords || ''));
      const matchesType = activeFilter === 'all' || type === activeFilter;
      const matchesQuery = !query || text.includes(query);
      const visible = matchesType && matchesQuery;

      card.hidden = !visible;
      if (visible) shown += 1;
    });

    count.textContent = shown;
    noResults.hidden = shown !== 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));
      applyFilters();
    });
  });

  searchInput.addEventListener('input', applyFilters);
  applyFilters();
})();
