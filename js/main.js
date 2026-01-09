document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("formContacto");
  if (!form) return;

  const campos = ["nombre", "proyecto", "mensaje"];

  form.addEventListener("submit", (e) => {
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
      } else {
        input.classList.remove("error");
        error.textContent = "";
        error.style.display = "none";
      }
    });

    if (!valido) return;

    const nombre = document.getElementById("nombre").value;
    const proyecto = document.getElementById("proyecto").value;
    const mensaje = document.getElementById("mensaje").value;

    const texto = `Hola Mylo Soul Studio 

Nombre: ${nombre}
Proyecto: ${proyecto}

Mensaje:
${mensaje}`;

    const url = `https://wa.me/5492344412474?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");

    form.reset();
  });

  // Limpia errores en tiempo real
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
