document.addEventListener('DOMContentLoaded', function () {
  // ======= CARRUSEL =======
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

  // Actualizar puntos al hacer scroll manual
  carrusel.addEventListener('scroll', () => {
    const index = Math.round(carrusel.scrollLeft / carrusel.offsetWidth);
    puntos.forEach((p, i) => p.classList.toggle('activo', i === index));
  });

  // ======= CRONÓMETRO =======
  const fechaBoda = new Date("2025-10-11T18:30:00").getTime();

  function actualizarCronometro() {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;

    if (distancia <= 0) {
      document.getElementById("timer").innerHTML = "¡Hoy es nuestra boda! 💍";
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias.toString().padStart(2, '0');
    document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0');
  }

  // Ejecutar inmediatamente y luego cada segundo
  actualizarCronometro();
  const intervalo = setInterval(actualizarCronometro, 1000);
// ======= MÚSICA (robusto) =======
const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('miAudio');

if (!audio) {
  console.error('No existe <audio id="miAudio"> en el HTML.');
}

const START_AT = 10;   // empezar en el segundo 10
const END_OFFSET = 20; // cortar 20s antes del final

// Por si hay errores de carga/ruta:
audio.addEventListener('error', () => {
  const codes = {1:'ABORTED', 2:'NETWORK', 3:'DECODE', 4:'SRC_NOT_SUPPORTED'};
  console.error('Error de audio:', audio.error && (codes[audio.error.code] || audio.error.code), audio.currentSrc);
});

// Evita acumular listeners si el usuario hace muchos clics
function removeStopListener(fn) {
  audio.removeEventListener('timeupdate', fn);
}

playBtn.addEventListener('click', async () => {
  if (!audio) return;

  // callback para detener antes del final (se quita solo)
  const stopOnTimeUpdate = () => {
    const cutoff = Number.isFinite(audio.duration) ? (audio.duration - END_OFFSET) : Infinity;
    if (audio.currentTime >= cutoff) {
      audio.pause();
      audio.currentTime = 0;
      removeStopListener(stopOnTimeUpdate);
    }
  };

  // Función para iniciar una vez haya metadatos
  const startPlayback = async () => {
    // Si la duración ya está disponible, calculamos y hacemos seek seguro
    try {
      const dur = audio.duration; // puede ser NaN si aún no hay metadatos
      const target = Number.isFinite(dur) ? Math.min(START_AT, Math.max(0, dur - 0.1)) : START_AT;
      audio.currentTime = target; // en algunos navegadores el seek se programa si ya hay metadatos
    } catch (_) { /* algunos navegadores tiran excepción si no hay metadatos */ }

    // Reproducir con manejo del Promise
    try {
      await audio.play();
    } catch (err) {
      console.error('No se pudo reproducir. ¿Hubo interacción real? ¿Ruta correcta?', err);
      return;
    }

    // Activar corte antes del final
    audio.addEventListener('timeupdate', stopOnTimeUpdate);
  };

  // Si ya hay metadatos, reproducimos; si no, esperamos a que estén (una sola vez)
  if (audio.readyState >= 1) { // HAVE_METADATA
    startPlayback();
  } else {
    audio.addEventListener('loadedmetadata', startPlayback, { once: true });
    audio.load(); // asegura que empiece a cargar metadatos
  }
});
