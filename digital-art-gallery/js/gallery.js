export function renderGallery(container, artworks, onCardClick) {
    container.innerHTML = '';

    if (artworks.length === 0) {
        container.innerHTML = `<p class="no-results">No artworks found.</p>`;
        return;
    }

    artworks.forEach(art => {
        const card = document.createElement('div');
        card.className = 'art-card fade-in';
        card.innerHTML = `
            <img src="${art.image}" alt="${art.title}">
            <div class="art-info">
                <h3>${art.title}</h3>
                <p>Artist: ${art.artist}</p>
            </div>
        `;

        card.addEventListener('click', () => onCardClick(art));
        container.appendChild(card);
    });
}