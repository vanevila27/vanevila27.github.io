document.addEventListener('DOMContentLoaded', function () {
    const fotos = document.querySelector('.fotos');
    const imagenes = document.querySelectorAll('.fotos img');
    const anterior = document.querySelector('.anterior');
    const siguiente = document.querySelector('.siguiente');

let current = 0;

if (imagenes.length > 0) {
    imagenes[current].style.display = 'block';

    anterior.addEventListener('click', () => {
        imagenes[current].style.display = 'none';
        current = (current - 1 + imagenes.length) % imagenes.length;
        imagenes[current].style.display = 'block';
    });
    siguiente.addEventListener('click', () => {
        imagenes[current].style.display = 'none';
        current = (current + 1) % imagenes.length;
        imagenes[current].style.display = 'block';
    });
}

// Mapa
const mapa = document.getElementById('mapa');
// Puedes utilizar una API de mapas como Google Maps o Leaflet para mostrar el mapa
