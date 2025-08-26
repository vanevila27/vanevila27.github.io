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

// Fecha de la boda
const fechaBoda = new Date("September 25, 2025 00:00:00").getTime();

const timer = setInterval(function() {
  const ahora = new Date().getTime();
  const distancia = fechaBoda - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("dias").innerText = dias.toString().padStart(2, '0');
  document.getElementById("horas").innerText = horas.toString().padStart(2, '0');
  document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
  document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');

  if (distancia < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "¡Hoy es nuestra boda! 💍";
  }
}, 1000);


 

