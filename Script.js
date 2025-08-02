// Cronómetro
window.onload = function() {
const fechaBoda = new Date('2025-10-11T19:00:00'); // Fecha y hora de la boda
const contador = document.getElementById('contador');
console.log(contador);
    
setInterval(() => {
    const ahora = new Date();
    const diferencia = fechaBoda - ahora;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    contador.innerHTML = dias + " días " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
}, 1000);
    }
    

// Mapa
const mapa = document.getElementById('mapa');
// Puedes utilizar una API de mapas como Google Maps o Leaflet para mostrar el mapa

