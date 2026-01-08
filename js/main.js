document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("formContacto");
  const campos = ["nombre", "proyecto", "mensaje"];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valido = true;

    campos.forEach(id => {
      const input = document.getElementById(id);
      const error = input.nextElementSibling;

      if (!input.value.trim()) {
        input.classList.add("error");
        error.textContent = "Este campo es obligatorio";
        error.style.display = "block";
        valido = false;
      }
    });

    if (!valido) return;

    const texto = `Hola Mylo Soul Studio 👋

Nombre: ${nombre.value}
Proyecto: ${proyecto.value}

Mensaje:
${mensaje.value}`;

    const url = `https://wa.me/5492344412474?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");

    form.reset();
  });

  
  campos.forEach(id => {
    const input = document.getElementById(id);
    const error = input.nextElementSibling;

    input.addEventListener("input", () => {
      input.classList.remove("error");
      error.textContent = "";
      error.style.display = "none";
    });
  });

});
