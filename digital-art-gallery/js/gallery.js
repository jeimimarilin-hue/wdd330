export function renderGallery(artworks, container, onCardClick) {
  container.innerHTML = '';
  if (!artworks || artworks.length === 0) {
    container.innerHTML = `<p class="no-results">No artworks found. Try searching for something else!</p>`;
    return;
  }

  artworks.forEach(art => {
    const card = document.createElement('div');
    card.className = 'art-card';
    card.innerHTML = `
      <img src="${art.imageUrl}" alt="${art.title}" loading="lazy" />
      <div class="art-card-body">
        <h4 class="art-card-title">${art.title}</h4>
        <p class="art-card-artist">${art.artist}</p>
      </div>
    `;
    card.addEventListener('click', () => onCardClick(art));
    container.appendChild(card);
  });
}