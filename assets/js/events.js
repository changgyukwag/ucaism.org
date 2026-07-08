(() => {
  const buttons = Array.from(document.querySelectorAll('[data-event-filter]'));
  const cards = Array.from(document.querySelectorAll('.event-card'));
  const search = document.getElementById('eventsSearch');
  let activeFilter = 'all';

  function normalize(value) {
    return (value || '').toLowerCase().trim();
  }

  function applyFilters() {
    const query = normalize(search ? search.value : '');
    cards.forEach((card) => {
      const type = normalize(card.dataset.type);
      const keywords = normalize(card.dataset.keywords + ' ' + card.textContent);
      const matchesFilter = activeFilter === 'all' || type === activeFilter;
      const matchesSearch = !query || keywords.includes(query);
      card.style.display = matchesFilter && matchesSearch ? '' : 'none';
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.eventFilter;
      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      applyFilters();
    });
  });

  if (search) {
    search.addEventListener('input', applyFilters);
  }
})();
