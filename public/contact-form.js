(function () {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("contact-status");
  if (!form || !status) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var accessKey = window.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      status.className = "contact-status error";
      status.textContent =
        "El formulario no esta configurado todavia. Escribenos directo por WhatsApp o correo.";
      return;
    }

    var submitButton = form.querySelector("button[type=submit]");
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
    status.className = "contact-status";
    status.textContent = "";

    var formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "Nuevo contacto desde el sitio web");

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
          status.textContent =
            "Gracias por escribirnos. Te contactaremos a la brevedad.";
        } else {
          throw new Error("web3forms error");
        }
      })
      .catch(function () {
        status.className = "contact-status error";
        status.textContent =
          "No pudimos enviar tu mensaje. Escribenos directo a contacto@htc.lat.";
      })
      .finally(function () {
        submitButton.disabled = false;
        submitButton.textContent = "Enviar mensaje";
      });
  });
})();
