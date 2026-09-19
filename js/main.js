document.addEventListener("DOMContentLoaded", () => {
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
});