document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-newsletter-filter]');
  const cards = document.querySelectorAll('.archive-card');
  const search = document.getElementById('newsletterSearch');

  let activeFilter = 'all';

  function normalize(value) {
    return (value || '').toLowerCase().trim();
  }

  function applyFilters() {
    const query = normalize(search ? search.value : '');

    cards.forEach((card) => {
      const type = card.dataset.type || '';
      const text = normalize(card.textContent + ' ' + (card.dataset.keywords || ''));
      const matchesFilter = activeFilter === 'all' || type === activeFilter;
      const matchesSearch = !query || text.includes(query);
      card.style.display = matchesFilter && matchesSearch ? '' : 'none';
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      activeFilter = button.dataset.newsletterFilter || 'all';
      applyFilters();
    });
  });

  if (search) {
    search.addEventListener('input', applyFilters);
  }
});
