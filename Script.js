const fotos = document.querySelector('.fotos');
const imagenes = document.querySelectorAll('.fotos img');
const anterior = document.querySelector('.anterior');
const siguiente = document.querySelector('.siguiente'); 

let current = 0;


if (fotos.length > 0) {
    fotos[current].style.display = 'block';
    anterior.addEventListener('click', () => {
        fotos[current].style.display = 'none';
        current = (current - 1 + fotos.length) % fotos.length;
        fotos[current].style.display = 'block';
    });
    siguiente.addEventListener('click', () => {
        fotos[current].style.display = 'none';
        current = (current + 1) % fotos.length;
        fotos[current].style.display = 'block';
    });
}
// Mapa
const mapa = document.getElementById('mapa');
// Puedes utilizar una API de mapas como Google Maps o Leaflet para mostrar el mapa
}





