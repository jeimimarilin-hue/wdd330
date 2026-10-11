export function renderGallery(artworks, container, onCardClick) {
  if (!container) return;
  container.innerHTML = '';

  if (artworks.length === 0) {
    container.innerHTML = '<p>No artworks found matching your criteria.</p>';
    return;
  }

  artworks.forEach(art => {
    const card = document.createElement('div');
    card.className = 'art-card';
    
    card.innerHTML = `
      <img src="${art.imageUrl}" alt="${art.title}" loading="lazy">
      <div class="art-info">
        <h3>${art.title}</h3>
        <p>${art.artist}</p>
      </div>
    `;

    card.addEventListener('click', () => onCardClick(art));
    container.appendChild(card);
  });
}