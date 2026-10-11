const FAV_KEY = 'gallery_favorites';

export function getFavorites() {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
}

export function toggleFavorite(artId) {
    let favorites = getFavorites();
    if (favorites.includes(artId)) {
        favorites = favorites.filter(id => id !== artId);
    } else {
        favorites.push(artId);
    }
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    return favorites;
}

export function isFavorite(artId) {
    return getFavorites().includes(artId);
}