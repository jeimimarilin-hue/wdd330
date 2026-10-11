const FAVORITES_KEY = 'art_gallery_favorites';
const THEME_KEY = 'art_gallery_theme';

export function getFavorites() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

export function toggleFavorite(artwork) {
  let favorites = getFavorites();
  const exists = favorites.some(item => item.id === artwork.id);
  if (exists) {
    favorites = favorites.filter(item => item.id !== artwork.id);
  } else {
    favorites.push(artwork);
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  return favorites;
}

export function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || 'light';
}

export function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}