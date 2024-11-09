// contact.js

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Variables del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Usa EmailJS para enviar el formulario
    emailjs.init("R5t_kEJnz9W_cdIUe"); // Reemplaza con tu userID de EmailJS

    emailjs
      .send("service_ikjnndm", "template_12qulwd", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function (response) {
          alert("Mensaje enviado con éxito!");
          console.log("SUCCESS", response.status, response.text);
        },
        function (error) {
          alert("Hubo un problema al enviar el mensaje, intenta nuevamente.");
          console.log("FAILED", error);
        }
      );
  });
