export function getFavorites() {
  const favs = localStorage.getItem('art_favorites');
  return favs ? JSON.parse(favs) : [];
}

export function saveFavorite(art) {
  const favs = getFavorites();
  if (!favs.some(f => f.id === art.id)) {
    favs.push(art);
    localStorage.setItem('art_favorites', JSON.stringify(favs));
  }
}

export function getSavedTheme() {
  return localStorage.getItem('art_theme') || 'light';
}

export function saveTheme(theme) {
  localStorage.setItem('art_theme', theme);
}