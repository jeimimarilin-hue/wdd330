import { fetchArtworks } from './artApi.js';
import { renderGallery } from './gallery.js';
import { setupModal, openModal } from './modal.js';
import { getFavorites, toggleFavorite, getSavedTheme, saveTheme } from './storage.js';

document.addEventListener('DOMContentLoaded', async () => {
  const galleryGrid = document.getElementById('gallery-grid');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const themeToggle = document.getElementById('theme-toggle');
  const modalElement = document.getElementById('art-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const favCount = document.getElementById('fav-count');

  // Load initial theme
  const currentTheme = getSavedTheme();
  if (currentTheme === 'dark') document.body.classList.add('dark-mode');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    saveTheme(newTheme);
  });

  // Setup Modal
  setupModal(modalElement, closeModalBtn);

  // Initial Fetch & Hero Banner Setup
  const initialArtworks = await fetchArtworks('masterpiece', 12);
  if (initialArtworks.length > 0) {
    const hero = initialArtworks[0];
    document.getElementById('hero-img').src = hero.imageUrl;
    document.getElementById('hero-title').textContent = hero.title;
    document.getElementById('hero-artist').textContent = hero.artist;
  }

  renderGallery(initialArtworks, galleryGrid, (art) => openModal(art, modalElement));

  // Search Logic
  const handleSearch = async () => {
    const query = searchInput.value.trim() || 'art';
    galleryGrid.innerHTML = '<p>Loading artworks...</p>';
    const results = await fetchArtworks(query, 12);
    renderGallery(results, galleryGrid, (art) => openModal(art, modalElement));
  };

  searchBtn.addEventListener('click', handleSearch);

  // Quick Tag Buttons
  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const query = e.target.getAttribute('data-query');
      searchInput.value = query;
      await handleSearch();
    });
  });

  // Favorites Count
  favCount.textContent = getFavorites().length;
});