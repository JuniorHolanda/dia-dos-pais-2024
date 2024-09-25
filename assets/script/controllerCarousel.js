import { CreateCardCarousel } from "./models/CreateCardCarousel.js";
const carouselContainer = document.querySelector('#carouselContainer')


const listCardCarousel = [
    'Bandeja',
    'SqueezeSport',
    'GarrafaPot',
    'GarrafaTank',
    'MalaRedon',
    'SqueezeD',
    'MochilaAdv',
    'MochilaSacola',
    'TermicaMiu'
]


//renderiza os cards na tela
export function renderCarousel() {
    listCardCarousel.forEach(element => {
        const src = `assets/img/carousel/${element}.jpg`
        const secondImgSrc = `assets/img/carousel/secondImg/${element}.jpg`
        const cardCarousel = new CreateCardCarousel(element, src, secondImgSrc);

        //renderiza os cards na tela
        carouselContainer.innerHTML += cardCarousel.renderCard();
    });
}


// cria interatividade nos cards do carousel
export function handleCardHover() {
    // referencia as imagens do carousel__second-imag
    const listCardCarouselRenderized = document.querySelectorAll('.carousel__second-img');

    listCardCarouselRenderized.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.add('carousel__second-img')
            element.classList.remove('carousel__second-img--hidden')
        })
    });
}


// clona os cards para criar o efeito de carousel infinito
export function cloneCarousel() {
    const ListCarouselItem = newFunction();
    console.log(ListCarouselItem)
    ListCarouselItem.forEach(element => {
        // clona o item do carousel
        const clone = element.cloneNode(true);
        carouselContainer.appendChild(clone);
    });
}

function newFunction() {
    return document.querySelectorAll('.carousel__item');
}

