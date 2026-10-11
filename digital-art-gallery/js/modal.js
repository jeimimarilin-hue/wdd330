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

export function openModal(art, modalElement) {
  const modalBody = document.getElementById('modal-body');
  if (!modalBody || !modalElement) return;

  modalBody.innerHTML = `
    <img src="${art.imageUrl}" alt="${art.title}" style="width:100%; max-height:300px; object-fit:contain; margin-bottom:1rem; border-radius:4px;">
    <h2>${art.title}</h2>
    <p><strong>Artist:</strong> ${art.artist}</p>
    <p><strong>Date:</strong> ${art.date}</p>
    <p><strong>Medium:</strong> ${art.medium}</p>
    <p><strong>Department:</strong> ${art.department}</p>
  `;

  modalElement.classList.remove('hidden');
}