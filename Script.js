document.addEventListener("DOMContentLoaded", function () {
  // 🎠 Carrusel
  const carrusel = document.querySelector(".carrusel");
  const imagenes = document.querySelectorAll(".carrusel img");
  const anteriorBtn = document.querySelector(".anterior");
  const siguienteBtn = document.querySelector(".siguiente");
  let currentIndex = 0;

  if (carrusel && imagenes.length > 0) {
    const imagenAncho = imagenes[0].offsetWidth;

    function moverCarrusel(index) {
      carrusel.scrollLeft = imagenAncho * index;
    }

    anteriorBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
      moverCarrusel(currentIndex);
    });

    siguienteBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % imagenes.length;
      moverCarrusel(currentIndex);
    });
  }

  // 🗺️ Mapa (en caso de que lo uses después con API)
  const mapa = document.getElementById("mapa");

  // 🎵 Música
  const cancion = document.getElementById("cancion");
  const boton = document.querySelector(".playBtn");

  if (cancion && boton) {
    boton.addEventListener("click", () => {
      if (cancion.paused) {
        cancion.play();
        boton.textContent = "⏸️ Pausar música";
      } else {
        cancion.pause();
        boton.textContent = "🎵 Reproducir música";
      }
    });
  }
});
