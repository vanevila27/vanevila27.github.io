document.addEventListener('DOMContentLoaded', function () {
  const carrusel = document.querySelector('.carrusel');
  const imagenes = document.querySelectorAll('.carrusel img');
  const anteriorBtn = document.querySelector('.anterior');
  const siguienteBtn = document.querySelector('.siguiente');
  let currentIndex = 0;

  // Solo si el carrusel existe y tiene imágenes
  if (carrusel && imagenes.length > 0) {
    const imagenAncho = imagenes[0].offsetWidth; // Obtiene el ancho de la imagen

    function moverCarrusel(index) {
      // Desplaza el carrusel horizontalmente a la posición de la imagen actual
      carrusel.scrollLeft = imagenAncho * index;
    }

    anteriorBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
      moverCarrusel(currentIndex);
    });

    siguienteBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imagenes.length;
      moverCarrusel(currentIndex);
    });
  }
});

// Mapa
const mapa = document.getElementById('mapa');
// Puedes utilizar una API de mapas como Google Maps o Leaflet para mostrar el mapa

// Mapa
const mapa = document.getElementById('mapa');
// Puedes utilizar una API de mapas como Google Maps o Leaflet para mostrar el mapa

const cancion = document.getElementById("cancion");

// Comenzar desde 30 segundos
cancion.currentTime = 30;

// Reproducir hasta 60 segundos y detener
cancion.addEventListener("timeupdate", () => {
  if (cancion.currentTime >= 60) {
    cancion.pause();
  }
});

// Botones de música
const botones = document.querySelectorAll(".playBtn");
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    if (cancion.paused) {
      cancion.play();
      botones.forEach(b => b.textContent = "⏸️ Pausar música");
    } else {
      cancion.pause();
      botones.forEach(b => b.textContent = "🎵 Reproducir música");
    }
  });
});




