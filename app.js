const { heroes, heroRates } = window.OVERWATCH_DATA;

const heroGrid = document.getElementById('heroGrid');
const totalHeroes = document.getElementById('totalHeroes');
const shownHeroes = document.getElementById('shownHeroes');
const heroesWithRates = document.getElementById('heroesWithRates');
const searchInput = document.getElementById('searchInput');
const roleFilter = document.getElementById('roleFilter');
const sortOrder = document.getElementById('sortOrder');
const resetFilters = document.getElementById('resetFilters');
const resultsSummary = document.getElementById('resultsSummary');
const cardTemplate = document.getElementById('heroCardTemplate');
const roleChips = [...document.querySelectorAll('.chip')];

function toHeroSlug(heroName) {
  return heroName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

totalHeroes.textContent = heroes.length;
heroesWithRates.textContent = Object.keys(heroRates).length;

function sortHeroes(heroList, selectedSort) {
  const sorted = [...heroList];

  if (selectedSort === 'name-desc') {
    sorted.sort((a, b) => b.name.localeCompare(a.name));
  } else if (selectedSort === 'role-name') {
    sorted.sort((a, b) => a.role.localeCompare(b.role) || a.name.localeCompare(b.name));
  } else {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  return sorted;
}

function setActiveChip(roleValue) {
  roleChips.forEach((chip) => {
    chip.classList.toggle('is-active', chip.dataset.role === roleValue);
  });
}

function updateResultsSummary(count, role) {
  const roleText = role === 'all' ? 'all roles' : `${role} heroes`;
  const filterState = searchInput.value.trim() ? ` matching “${searchInput.value.trim()}”` : '';
  resultsSummary.textContent = `Showing ${count} of ${heroes.length} heroes across ${roleText}${filterState}.`;
}

function renderHeroes() {
  const query = searchInput.value.trim().toLowerCase();
  const role = roleFilter.value;
  const selectedSort = sortOrder.value;

  const filtered = heroes.filter((hero) => {
    const matchesRole = role === 'all' || hero.role === role;
    const matchesQuery =
      hero.name.toLowerCase().includes(query) ||
      hero.role.toLowerCase().includes(query) ||
      hero.origin.toLowerCase().includes(query);

    return matchesRole && matchesQuery;
  });

  const sorted = sortHeroes(filtered, selectedSort);

  shownHeroes.textContent = sorted.length;
  updateResultsSummary(sorted.length, role);
  setActiveChip(role);
  heroGrid.innerHTML = '';

  if (sorted.length === 0) {
    heroGrid.innerHTML = '<p class="empty-state">No heroes match your current filters. Try resetting or searching by role or region.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();

  sorted.forEach((hero) => {
    const card = cardTemplate.content.cloneNode(true);
    const heroLink = card.querySelector('.hero-card');
    heroLink.querySelector('.hero-name').textContent = hero.name;
    heroLink.querySelector('.hero-role').textContent = hero.role;
    heroLink.querySelector('.hero-origin').textContent = `Origin: ${hero.origin}`;
    heroLink.href = `hero.html?hero=${toHeroSlug(hero.name)}`;

    const rates = heroRates[hero.name];
    const heroHint = heroLink.querySelector('.hero-hint');

    if (rates) {
      heroHint.textContent = `Win: ${rates.winRate} • Pick: ${rates.pickRate}`;
      heroHint.classList.add('hero-hint--rates');
    }

    heroLink.setAttribute('aria-label', `Open details page for ${hero.name}`);
    fragment.append(card);
  });

  heroGrid.append(fragment);
}

function resetDashboardFilters() {
  searchInput.value = '';
  roleFilter.value = 'all';
  sortOrder.value = 'name-asc';
  renderHeroes();
}

roleChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    roleFilter.value = chip.dataset.role;
    renderHeroes();
  });
});

searchInput.addEventListener('input', renderHeroes);
roleFilter.addEventListener('change', renderHeroes);
sortOrder.addEventListener('change', renderHeroes);
resetFilters.addEventListener('click', resetDashboardFilters);

renderHeroes();
