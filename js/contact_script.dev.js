"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append("nom", nameInput.value);
    formData.append("email", emailInput.value);
    formData.append("message", messageInput.value);
    var url = "https://formspree.io/f/xvovylnw";
    var options = {
      method: "POST",
      mode: "no-cors",
      body: formData
    };
    fetch(url, options);
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    var messageContainer = document.getElementById("messageContainer");
    var alertElement = document.getElementById("alert");
    alertElement.textContent = window.i18next.t("contact.message");
    messageContainer.style.opacity = 1;
    setTimeout(function () {
      messageContainer.style.opacity = 0;
    }, 5000);
  });
});