document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("nom");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("nom", nameInput.value);
    formData.append("email", emailInput.value);
    formData.append("message", messageInput.value);
    const url = "https://formspree.io/f/xvovylnw";
    const options = {
      method: "POST",
      mode: "no-cors",
      body: formData,
    };
    fetch(url, options);
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    const messageContainer = document.getElementById("messageContainer");
    const alertElement = document.getElementById("alert");
    alertElement.textContent =
      "Bien reçu, je reviens vers vous dans les meilleurs délais !";
    messageContainer.style.opacity = 1;
    setTimeout(function () {
      messageContainer.style.opacity = 0;
    }, 5000);
  });
});
