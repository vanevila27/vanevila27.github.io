document.addEventListener('DOMContentLoaded', function () {
  const carrusel = document.querySelector('.carrusel');
  const imagenes = document.querySelectorAll('.carrusel img');
  const puntosContainer = document.getElementById('puntos');

  let currentIndex = 0;

  // Crear los puntos
  imagenes.forEach((_, index) => {
    const punto = document.createElement('span');
    punto.classList.add('punto');
    if (index === 0) punto.classList.add('activo');
    punto.addEventListener('click', () => {
      currentIndex = index;
      moverCarrusel(index);
      actualizarPuntos();
    });
    puntosContainer.appendChild(punto);
  });

  const puntos = document.querySelectorAll('.punto');

  function moverCarrusel(index) {
    const imagenAncho = imagenes[0].offsetWidth;
    carrusel.scrollLeft = imagenAncho * index;
  }

  function actualizarPuntos() {
    puntos.forEach((p, i) => {
      p.classList.toggle('activo', i === currentIndex);
    });
  }
});

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

