export function setupModal(modalElement, closeBtn) {
  closeBtn.addEventListener('click', () => {
    modalElement.classList.add('hidden');
  });

  modalElement.addEventListener('click', (e) => {
    if (e.target === modalElement) {
      modalElement.classList.add('hidden');
    }
  });
}

export function openModal(artwork, modalElement) {
  document.getElementById('modal-img').src = artwork.imageUrl;
  document.getElementById('modal-title').textContent = artwork.title;
  document.getElementById('modal-artist').textContent = `Artist: ${artwork.artist}`;
  document.getElementById('modal-date').textContent = `Date: ${artwork.date}`;
  document.getElementById('modal-medium').textContent = `Medium: ${artwork.medium}`;
  document.getElementById('modal-department').textContent = `Department: ${artwork.department}`;

  modalElement.classList.remove('hidden');
}