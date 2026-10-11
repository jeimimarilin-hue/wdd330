import { fetchArtworks } from './artApi.js';
import { renderGallery } from './gallery.js';
import { setupModal } from './modal.js';
import { getFavorites } from './storage.js';

let artworks = [];
let showingFavoritesOnly = false;

document.addEventListener('DOMContentLoaded', async () => {
    const gridContainer = document.getElementById('gallery-grid');
    const searchInput = document.getElementById('search-input');
    const filterSelect = document.getElementById('filter-select');
    const favoritesBtn = document.getElementById('favorites-btn');

    const updateFavCount = () => {
        document.getElementById('fav-count').textContent = getFavorites().length;
    };

    const openModal = setupModal(updateFavCount);
    artworks = await fetchArtworks();
    
    const applyFilters = () => {
        let filtered = artworks;

        if (showingFavoritesOnly) {
            const favs = getFavorites();
            filtered = filtered.filter(art => favs.includes(art.id));
        }

        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(art => 
                art.title.toLowerCase().includes(searchTerm) || 
                art.artist.toLowerCase().includes(searchTerm)
            );
        }

        const category = filterSelect.value;
        if (category !== 'all') {
            filtered = filtered.filter(art => art.category === category);
        }

        renderGallery(gridContainer, filtered, openModal);
    };

    searchInput.addEventListener('input', applyFilters);
    filterSelect.addEventListener('change', applyFilters);
    
    favoritesBtn.addEventListener('click', () => {
        showingFavoritesOnly = !showingFavoritesOnly;
        favoritesBtn.textContent = showingFavoritesOnly ? "View All Artworks" : `View Favorites ❤️ (${getFavorites().length})`;
        applyFilters();
    });

    updateFavCount();
    renderGallery(gridContainer, artworks, openModal);
});