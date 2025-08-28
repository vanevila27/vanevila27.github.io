// ======= MÚSICA =======
const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('audio'); // 👈 coincide con tu HTML

const START_AT = 10;   // empieza desde el segundo 10
const END_OFFSET = 20; // termina 20s antes del final

playBtn.addEventListener('click', () => {
  // esperar a que se carguen los metadatos (duración, etc.)
  if (audio.readyState >= 1) {
    iniciarMusica();
  } else {
    audio.addEventListener('loadedmetadata', iniciarMusica, { once: true });
    audio.load();
  }
});

function iniciarMusica() {
  const stopTime = audio.duration - END_OFFSET;

  // saltar al segundo 10 (o al máximo disponible)
  audio.currentTime = Math.min(START_AT, audio.duration - 0.1);

  audio.play().catch(err => {
    console.error("No se pudo reproducir el audio:", err);
  });

  // detener 20s antes del final
  const stopOnTimeUpdate = () => {
    if (audio.currentTime >= stopTime) {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener('timeupdate', stopOnTimeUpdate);
    }
  };
  audio.addEventListener('timeupdate', stopOnTimeUpdate);
}



