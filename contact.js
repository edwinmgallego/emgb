// Inicia EmailJS
(function () {
  emailjs.init("R5t_kEJnz9W_cdIUe"); // Sustituye con tu User ID de EmailJS
})();

// Captura el formulario y agrega el evento de envío
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Envia el formulario a través de EmailJS
    emailjs.sendForm("default_service", "template_tx67guk", this).then(
      function (response) {
        alert("¡Mensaje enviado con éxito!", response);
      },
      function (error) {
        alert("Hubo un error al enviar el mensaje.", error);
      }
    );
  });
