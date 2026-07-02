import { CONTACT_EMAIL, CONTACT_FORM_MESSAGES } from "./site-content.js";

(function () {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("contact-status");
  if (!form || !status) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var accessKey = window.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      status.className = "contact-status error";
      status.textContent = CONTACT_FORM_MESSAGES.notConfigured;
      return;
    }

    var submitButton = form.querySelector("button[type=submit]");
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
    status.className = "contact-status";
    status.textContent = "";

    var formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", CONTACT_FORM_MESSAGES.subject);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        if (result.success) {
          form.reset();
          status.className = "contact-status success";
          status.textContent = CONTACT_FORM_MESSAGES.success;
        } else {
          throw new Error("web3forms error");
        }
      })
      .catch(function () {
        status.className = "contact-status error";
        status.textContent =
          CONTACT_FORM_MESSAGES.errorPrefix + " " + CONTACT_EMAIL + ".";
      })
      .finally(function () {
        submitButton.disabled = false;
        submitButton.textContent = "Enviar mensaje";
      });
  });
})();
