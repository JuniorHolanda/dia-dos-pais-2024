//importa a função do circulo girando na primeira página
import {circleRotation} from './assets/script/circleRotation.js'

//duplicando os itens do carrossel para o loop infinito
let copy = document.querySelector("#containerForCarousel").cloneNode(true);
document.querySelector(".weapper-carousel").appendChild(copy);

