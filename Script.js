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
document.addEventListener("DOMContentLoaded", function() {
  // Cronómetro
  const fechaBoda = new Date("October 11, 2025 18:30:00").getTime();

  const timerInterval = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;

    if(distancia <= 0){
      clearInterval(timerInterval);
      document.getElementById("timer").innerHTML = "¡Hoy es nuestra boda! 💍";
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias.toString().padStart(2,'0');
    document.getElementById("horas").textContent = horas.toString().padStart(2,'0');
    document.getElementById("minutos").textContent = minutos.toString().padStart(2,'0');
    document.getElementById("segundos").textContent = segundos.toString().padStart(2,'0');
  }, 1000);

  // Carrusel (puntos)
  const carrusel = document.querySelector('.carrusel');
  const puntos = document.querySelectorAll('.punto');

  carrusel.addEventListener('scroll', () => {
    const index = Math.round(carrusel.scrollLeft / carrusel.offsetWidth);
    puntos.forEach((p, i) => p.classList.toggle('activo', i === index));
  });
});




 




