//importa a função do circulo girando na primeira página
import { circleRotation } from './assets/script/circleRotation.js';
import { renderCarousel } from './assets/script/controllerCarousel.js';
import { cloneCarousel } from './assets/script/controllerCarousel.js';
import { handleCardHover } from './assets/script/controllerCarousel.js';

//renderiza os cards do carousel
renderCarousel();

//clona os cards do renderCarousel
cloneCarousel();

// cria interatividade nos cards do carousel
handleCardHover();

