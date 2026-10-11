import { toggleFavorite, isFavorite } from './storage.js';

export function setupModal(updateFavCountCallback) {
    const modal = document.getElementById('art-modal');
    const closeBtn = document.getElementById('close-modal');
    const favBtn = document.getElementById('fav-toggle-btn');
    let currentArtId = null;

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    favBtn.addEventListener('click', () => {
        if (currentArtId) {
            toggleFavorite(currentArtId);
            updateModalFavButton(currentArtId);
            if (updateFavCountCallback) updateFavCountCallback();
        }
    });

    return function openModal(art) {
        currentArtId = art.id;
        document.getElementById('modal-img').src = art.image;
        document.getElementById('modal-title').textContent = art.title;
        document.getElementById('modal-artist').textContent = `By ${art.artist}`;
        document.getElementById('modal-description').textContent = art.description;
        
        updateModalFavButton(art.id);
        modal.classList.remove('hidden');
    };
}

function updateModalFavButton(artId) {
    const favBtn = document.getElementById('fav-toggle-btn');
    if (isFavorite(artId)) {
        favBtn.textContent = 'Remove from Favorites 💔';
        favBtn.style.backgroundColor = '#ef4444';
    } else {
        favBtn.textContent = 'Add to Favorites ❤️';
        favBtn.style.backgroundColor = '#38bdf8';
    }
}