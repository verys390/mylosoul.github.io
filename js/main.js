const form = document.getElementById("formContacto");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita envío tradicional

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  const texto = `
Hola Mylo Soul Studio

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}

Mensaje:
${mensaje}
  `;

  const url = `https://wa.me/5492344412474?text=${encodeURIComponent(texto)}`;

  // Abrir WhatsApp
  window.open(url, "_blank");

  // Feedback visual
  Swal.fire({
    title: 'Redirigiendo a WhatsApp 📲',
    text: 'Tu mensaje ya está listo para enviar.',
    icon: 'success',
    confirmButtonText: 'Perfecto',
    confirmButtonColor: '#7C6EE6' // violeta Mylo
  });

  form.reset();
});

  