document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Here you would normally send the form data to your server
    // For the purpose of this example, we'll just display a message

    formMessage.innerText = `Thank you, ${name}. Your message has been sent!`;
    formMessage.style.color = "green";

    // Optionally clear the form
    contactForm.reset();
  });
});
