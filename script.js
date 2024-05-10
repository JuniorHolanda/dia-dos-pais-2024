import {circleRotation} from './assets/script/circleRotation.js'

const containerForCarousel = document.getElementById('containerForCarousel');
let position = 0;
const itemWidth = containerForCarousel.firstElementChild.clientWidth;
const totalItems = containerForCarousel.childElementCount;

function moveCarousel() {
    position -= 1; // Move o carrossel para a esquerda
    containerForCarousel.style.transform = `translateX(${position}px)`;

    // Verifica se o carrossel alcançou o fim e reinicia se necessário
    if (Math.abs(position) >= itemWidth) {
        containerForCarousel.appendChild(containerForCarousel.firstElementChild.cloneNode(true)); // Clonar o primeiro elemento
        containerForCarousel.removeChild(containerForCarousel.firstElementChild); // Remover o primeiro elemento original
        position += itemWidth;
    }

    // Solicita a próxima animação
    requestAnimationFrame(moveCarousel);
}