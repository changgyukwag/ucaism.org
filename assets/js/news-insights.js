document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-news-filter]');
  const cards = document.querySelectorAll('.insight-card');
  const search = document.getElementById('newsSearch');
  let activeFilter = 'all';

  function applyFilters() {
    const query = (search?.value || '').trim().toLowerCase();

    cards.forEach((card) => {
      const type = card.dataset.type || '';
      const keywords = card.dataset.keywords || '';
      const text = card.textContent.toLowerCase();
      const matchesFilter = activeFilter === 'all' || type === activeFilter;
      const matchesSearch = !query || text.includes(query) || keywords.includes(query);
      card.style.display = matchesFilter && matchesSearch ? '' : 'none';
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      activeFilter = button.dataset.newsFilter || 'all';
      applyFilters();
    });
  });

  if (search) {
    search.addEventListener('input', applyFilters);
  }
});
