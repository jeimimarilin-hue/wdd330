document.addEventListener("DOMContentLoaded", () => {
  // --- Newsletter Form ---
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = document.getElementById("email");
      const emailValue = emailInput.value;

      if (emailValue) {
        let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
        subscribers.push(emailValue);
        localStorage.setItem("subscribers", JSON.stringify(subscribers));

        newsletterForm.innerHTML = `<p style="color: #d97706; font-weight: bold; margin-top: 1rem;">Thank you for subscribing, ${emailValue}!</p>`;
      }
    });
  }

  // --- Live Product Search ---
  const searchInput = document.getElementById("search-input");
  const productCards = document.querySelectorAll(".product-card");
  const noResultsMsg = document.getElementById("no-results");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      let visibleCount = 0;

      productCards.forEach((card) => {
        const productName = card.getAttribute("data-name");
        if (productName.includes(query)) {
          card.style.display = "block";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (noResultsMsg) {
        noResultsMsg.style.display = visibleCount === 0 ? "block" : "none";
      }
    });
  }
});