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

const heroLore = {
  'D.Va': 'Hana Song is a former pro gamer who now pilots a state-of-the-art mech to defend South Korea from omnic threats emerging from the sea.',
  Doomfist: 'Akande Ogundimu believes conflict is the catalyst for human evolution, and he seeks to forge a stronger future through force as a Talon leader.',
  'Junker Queen': 'Odessa Stone seized control of Junkertown through brutal arena combat and now rules the irradiated outback with charisma and steel.',
  Mauga: 'A heavy assault specialist from Samoa, Mauga thrives on chaos and destruction while carrying out Talon operations with an intimidating grin.',
  Orisa: 'Built by Efi Oladele from the remains of OR15 defense bots, Orisa protects Numbani with adaptive intelligence and a steadfast sense of duty.',
  Ramattra: 'Once a monk advocating peace, Ramattra embraced revolution and formed Null Sector after seeing omnics denied justice and equal rights.',
  Reinhardt: 'A crusader of honor from Germany, Reinhardt Wilhelm fights with a rocket hammer and unbreakable spirit to protect those who cannot protect themselves.',
  Roadhog: 'Mako Rutledge became the ruthless enforcer Roadhog after Australia\'s omnium catastrophe, roaming as a masked outlaw from Junkertown.',
  Sigma: 'Brilliant astrophysicist Siebren de Kuiper was transformed by a gravity experiment gone wrong, leaving Talon to weaponize his fractured genius.',
  Winston: 'A super-intelligent gorilla from Horizon Lunar Colony, Winston became a scientist and hero inspired by Overwatch\'s ideals of hope.',
  'Wrecking Ball': 'Hammond, a genetically engineered hamster from the lunar colony, built a mechanized ball and fought his way to freedom in Junkertown.',
  Zarya: 'Aleksandra Zaryanova is a celebrated Russian soldier who turned her strength toward defending her homeland from omnic invasion.',
  Ashe: 'Elizabeth Caledonia Ashe leads the Deadlock Gang with sharp aim and sharper ambition, enforcing her own outlaw code in the American Southwest.',
  Bastion: 'An E54 Bastion unit once built for war, this curious omnic now wanders nature with its bird companion Ganymede, searching for purpose.',
  Cassidy: 'Cole Cassidy, a former Deadlock gunslinger, now travels the world trying to right wrongs with a revolver and hard-earned resolve.',
  Echo: 'Created by Dr. Mina Liao, Echo is an advanced adaptive robot designed to learn and evolve while carrying forward Overwatch\'s hopeful mission.',
  Genji: 'After near-fatal betrayal, Genji Shimada was rebuilt with cybernetics and later found peace through Zenyatta\'s teachings.',
  Hanzo: 'Heir to the Shimada empire, Hanzo abandoned his clan after a tragic duel and now seeks redemption for his past.',
  Junkrat: 'Jamison Fawkes is an explosives-obsessed anarchist from the Australian outback who turned accidental treasure into global chaos.',
  Mei: 'Dr. Mei-Ling Zhou is a climatologist who survived cryostasis in Antarctica and now fights to protect the world\'s future.',
  Pharah: 'Fareeha Amari serves as a decorated security captain in Raptora armor, striving to honor both her duty and her family legacy.',
  Reaper: 'Gabriel Reyes, once Overwatch\'s strike commander, became the shadowy mercenary Reaper after being twisted by deathly experiments.',
  Sojourn: 'Vivian Chase, known as Sojourn, is a disciplined former Overwatch captain whose cybernetic enhancements support precise tactical leadership.',
  'Soldier: 76': 'The vigilante Soldier: 76 is Jack Morrison, former Overwatch commander, uncovering conspiracies while dispensing justice on his own terms.',
  Sombra: 'A master hacker from Mexico, Sombra manipulates global powers from the shadows in pursuit of secrets and control.',
  Symmetra: 'Satya Vaswani, an architect of hard-light technology, seeks to bring order to chaos while questioning the world she helps shape.',
  Torbjörn: 'Master engineer Torbjörn Lindholm designs powerful weapons systems and fights to ensure technology serves humanity responsibly.',
  Tracer: 'Lena Oxton, the chronal-jumping Tracer, is an upbeat adventurer who became one of Overwatch\'s most recognizable heroes.',
  Venture: 'Venture is a daring archeologist and explorer who combines cutting-edge drilling tech with a passion for unearthing hidden history.',
  Widowmaker: 'Amélie Lacroix was transformed by Talon into the emotionless assassin Widowmaker, using lethal precision from afar.',
  Ana: 'Ana Amari, one of Overwatch\'s founding members, returned from hiding as a sniper and strategist to protect a new generation.',
  Baptiste: 'Jean-Baptiste Augustin escaped Talon and now uses his combat medic training to save lives where the world has turned its back.',
  Brigitte: 'Brigitte Lindholm, a gifted engineer and shield bearer, continues Reinhardt\'s mission of protecting the innocent.',
  Illari: 'Illari is the last of the Inti Warriors after a solar ritual tragedy, wielding sun-forged power while carrying immense guilt.',
  Juno: 'Raised in a Mars colony, Juno journeys to Earth as a brilliant young scientist determined to reconnect isolated communities.',
  Kiriko: 'Kiriko Kamori balances shrine traditions with modern heroism, defending Kanezaka with swift movement and healing ofuda.',
  Lifeweaver: 'Niran Pruksamanee developed biolight technology to heal and create, using his inventions to protect life in all forms.',
  'Lúcio': 'Lúcio Correia dos Santos is a musician-activist who amplifies hope and resistance through sound in the streets of Rio.',
  Mercy: 'Dr. Angela Ziegler, known as Mercy, is a brilliant healer whose medical breakthroughs and compassion save countless lives.',
  Moira: 'Moira O\'Deorain is a controversial geneticist pursuing scientific advancement without ethical limits under Talon\'s patronage.',
  Zenyatta: 'Zenyatta is an omnic monk who travels the world to teach harmony between humans and omnics through empathy and mindfulness.'
};

const heroRates = {
  Ana: { winRate: '45.2%', pickRate: '9.2%' },
  Ashe: { winRate: '51.1%', pickRate: '8.1%' },
  Baptiste: { winRate: '44.4%', pickRate: '2.7%' },
  Bastion: { winRate: '50.8%', pickRate: '11%' },
  Brigitte: { winRate: '52.2%', pickRate: '2.2%' },
  Cassidy: { winRate: '49.2%', pickRate: '10.7%' },
  'D.Va': { winRate: '47.9%', pickRate: '7%' },
  Doomfist: { winRate: '50.8%', pickRate: '3.9%' }
};

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
const loreName = document.getElementById('loreName');
const loreText = document.getElementById('loreText');

let selectedHeroName = null;

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
  resultsSummary.textContent = `Showing ${sorted.length} of ${heroes.length} heroes${role === 'all' ? '' : ` in ${role}`}.`;
  heroGrid.innerHTML = '';

  if (sorted.length === 0) {
    heroGrid.innerHTML = '<p class="empty-state">No heroes match your current filters.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();

  sorted.forEach((hero) => {
    const card = cardTemplate.content.cloneNode(true);
    const heroCard = card.querySelector('.hero-card');
    heroCard.querySelector('.hero-name').textContent = hero.name;
    heroCard.querySelector('.hero-role').textContent = hero.role;
    heroCard.querySelector('.hero-origin').textContent = `Origin: ${hero.origin}`;
    const rates = heroRates[hero.name];
    const heroHint = heroCard.querySelector('.hero-hint');

    if (rates) {
      heroHint.textContent = `Win: ${rates.winRate} • Pick: ${rates.pickRate}`;
      heroHint.classList.add('hero-hint--rates');
    }

    heroCard.setAttribute('aria-label', `View lore for ${hero.name}`);

    if (hero.name === selectedHeroName) {
      heroCard.classList.add('is-selected');
    }

    const showLore = () => updateLorePanel(hero.name);

    heroCard.addEventListener('click', showLore);
    heroCard.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showLore();
      }
    });

    fragment.append(card);
  });

  heroGrid.append(fragment);
}

function updateLorePanel(heroName) {
  selectedHeroName = heroName;
  loreName.textContent = heroName;
  loreText.textContent = heroLore[heroName] || 'Lore coming soon for this hero.';
  renderHeroes();
}

function resetDashboardFilters() {
  searchInput.value = '';
  roleFilter.value = 'all';
  sortOrder.value = 'name-asc';
  renderHeroes();
}

searchInput.addEventListener('input', renderHeroes);
roleFilter.addEventListener('change', renderHeroes);
sortOrder.addEventListener('change', renderHeroes);
resetFilters.addEventListener('click', resetDashboardFilters);

renderHeroes();
