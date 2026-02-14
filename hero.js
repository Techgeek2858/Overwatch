const { heroes, heroLore, heroRates } = window.OVERWATCH_DATA;

const heroName = document.getElementById('heroName');
const heroRole = document.getElementById('heroRole');
const heroOrigin = document.getElementById('heroOrigin');
const heroLoreText = document.getElementById('heroLore');
const heroMeta = document.getElementById('heroMeta');
const heroProfile = document.getElementById('heroProfile');

function toHeroSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getHeroFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const heroSlug = params.get('hero');

  return heroes.find((hero) => toHeroSlug(hero.name) === heroSlug) || null;
}

function getMeta(hero) {
  const rates = heroRates[hero.name];

  if (!rates) {
    return `${hero.role} • ${hero.origin} • No tracked rates yet.`;
  }

  return `${hero.role} • ${hero.origin} • Win ${rates.winRate} • Pick ${rates.pickRate}`;
}

const hero = getHeroFromUrl();

if (!hero) {
  heroRole.textContent = 'Hero not found';
  heroName.textContent = 'Unknown hero';
  heroOrigin.textContent = 'Use the dashboard to select a hero.';
  heroLoreText.textContent = 'We could not find that hero profile.';
  heroMeta.textContent = '';
  heroProfile.classList.add('hero-profile--missing');
} else {
  document.title = `${hero.name} | Overwatch Hero Details`;
  heroRole.textContent = hero.role;
  heroName.textContent = hero.name;
  heroOrigin.textContent = `Origin: ${hero.origin}`;
  heroLoreText.textContent = heroLore[hero.name] || 'Lore coming soon for this hero.';
  heroMeta.textContent = getMeta(hero);
}
