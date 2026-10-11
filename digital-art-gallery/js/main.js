import { fetchArtworks } from './artApi.js';
import { renderGallery } from './gallery.js';
import { setupModal, openModal } from './modal.js';
import { getFavorites, getSavedTheme, saveTheme } from './storage.js';

document.addEventListener('DOMContentLoaded', async () => {
  const galleryGrid = document.getElementById('gallery-grid');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const themeToggle = document.getElementById('theme-toggle');
  const modalElement = document.getElementById('art-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const favCount = document.getElementById('fav-count');

  const currentTheme = getSavedTheme();
  if (currentTheme === 'dark') document.body.classList.add('dark-mode');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      saveTheme(newTheme);
    });
  }

  if (modalElement && closeModalBtn) {
    setupModal(modalElement, closeModalBtn);
  }

  const initialArtworks = await fetchArtworks('', 12);
  
  if (initialArtworks.length > 0) {
    const hero = initialArtworks[0];
    const heroImg = document.getElementById('hero-img');
    const heroTitle = document.getElementById('hero-title');
    const heroArtist = document.getElementById('hero-artist');
    
    if (heroImg) heroImg.src = hero.imageUrl;
    if (heroTitle) heroTitle.textContent = hero.title;
    if (heroArtist) heroArtist.textContent = hero.artist;

    renderGallery(initialArtworks.slice(1), galleryGrid, (art) => openModal(art, modalElement));
  } else {
    if (galleryGrid) galleryGrid.innerHTML = '<p>No artworks found.</p>';
  }

  const handleSearch = async () => {
    const query = searchInput ? searchInput.value.trim() : '';
    if (galleryGrid) galleryGrid.innerHTML = '<p>Loading artworks...</p>';
    const results = await fetchArtworks(query, 12);
    renderGallery(results, galleryGrid, (art) => openModal(art, modalElement));
  };

  if (searchBtn) searchBtn.addEventListener('click', handleSearch);
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSearch();
    });
  }

  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const query = e.target.getAttribute('data-query');
      if (searchInput) searchInput.value = query;
      await handleSearch();
    });
  });

  if (favCount) {
    favCount.textContent = getFavorites().length;
  }
});