const heroes = [
  { name: 'D.Va', role: 'Tank', origin: 'South Korea' },
  { name: 'Doomfist', role: 'Tank', origin: 'Nigeria' },
  { name: 'Junker Queen', role: 'Tank', origin: 'Australia' },
  { name: 'Mauga', role: 'Tank', origin: 'Samoa' },
  { name: 'Orisa', role: 'Tank', origin: 'Nigeria' },
  { name: 'Ramattra', role: 'Tank', origin: 'Nepal' },
  { name: 'Reinhardt', role: 'Tank', origin: 'Germany' },
  { name: 'Roadhog', role: 'Tank', origin: 'Australia' },
  { name: 'Sigma', role: 'Tank', origin: 'Netherlands' },
  { name: 'Winston', role: 'Tank', origin: 'Horizon Lunar Colony' },
  { name: 'Wrecking Ball', role: 'Tank', origin: 'Horizon Lunar Colony' },
  { name: 'Zarya', role: 'Tank', origin: 'Russia' },
  { name: 'Ashe', role: 'Damage', origin: 'United States' },
  { name: 'Bastion', role: 'Damage', origin: 'Germany' },
  { name: 'Cassidy', role: 'Damage', origin: 'United States' },
  { name: 'Echo', role: 'Damage', origin: 'Singapore' },
  { name: 'Genji', role: 'Damage', origin: 'Japan' },
  { name: 'Hanzo', role: 'Damage', origin: 'Japan' },
  { name: 'Junkrat', role: 'Damage', origin: 'Australia' },
  { name: 'Mei', role: 'Damage', origin: 'China' },
  { name: 'Pharah', role: 'Damage', origin: 'Egypt' },
  { name: 'Reaper', role: 'Damage', origin: 'United States' },
  { name: 'Sojourn', role: 'Damage', origin: 'Canada' },
  { name: 'Soldier: 76', role: 'Damage', origin: 'United States' },
  { name: 'Sombra', role: 'Damage', origin: 'Mexico' },
  { name: 'Symmetra', role: 'Damage', origin: 'India' },
  { name: 'Torbjörn', role: 'Damage', origin: 'Sweden' },
  { name: 'Tracer', role: 'Damage', origin: 'United Kingdom' },
  { name: 'Venture', role: 'Damage', origin: 'Canada' },
  { name: 'Widowmaker', role: 'Damage', origin: 'France' },
  { name: 'Ana', role: 'Support', origin: 'Egypt' },
  { name: 'Baptiste', role: 'Support', origin: 'Haiti' },
  { name: 'Brigitte', role: 'Support', origin: 'Sweden' },
  { name: 'Illari', role: 'Support', origin: 'Peru' },
  { name: 'Juno', role: 'Support', origin: 'Mars Colony' },
  { name: 'Kiriko', role: 'Support', origin: 'Japan' },
  { name: 'Lifeweaver', role: 'Support', origin: 'Thailand' },
  { name: 'Lúcio', role: 'Support', origin: 'Brazil' },
  { name: 'Mercy', role: 'Support', origin: 'Switzerland' },
  { name: 'Moira', role: 'Support', origin: 'Ireland' },
  { name: 'Zenyatta', role: 'Support', origin: 'Nepal' }
];

const heroGrid = document.getElementById('heroGrid');
const totalHeroes = document.getElementById('totalHeroes');
const shownHeroes = document.getElementById('shownHeroes');
const searchInput = document.getElementById('searchInput');
const roleFilter = document.getElementById('roleFilter');
const cardTemplate = document.getElementById('heroCardTemplate');

totalHeroes.textContent = heroes.length;

function renderHeroes() {
  const query = searchInput.value.trim().toLowerCase();
  const role = roleFilter.value;

  const filtered = heroes.filter((hero) => {
    const matchesRole = role === 'all' || hero.role === role;
    const matchesQuery =
      hero.name.toLowerCase().includes(query) ||
      hero.role.toLowerCase().includes(query) ||
      hero.origin.toLowerCase().includes(query);

    return matchesRole && matchesQuery;
  });

  shownHeroes.textContent = filtered.length;
  heroGrid.innerHTML = '';

  if (filtered.length === 0) {
    heroGrid.innerHTML = '<p class="empty-state">No heroes match your current filters.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach((hero) => {
    const card = cardTemplate.content.cloneNode(true);
    card.querySelector('.hero-name').textContent = hero.name;
    card.querySelector('.hero-role').textContent = hero.role;
    card.querySelector('.hero-origin').textContent = `Origin: ${hero.origin}`;
    fragment.append(card);
  });

  heroGrid.append(fragment);
}

searchInput.addEventListener('input', renderHeroes);
roleFilter.addEventListener('change', renderHeroes);

renderHeroes();
