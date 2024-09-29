import { CreateCardCarousel } from "./models/CreateCardCarousel.js";
const carouselContainer = document.querySelector('#carouselContainer')

function imprimir(arg) {
    return console.log(arg)
}


const listCardCarousel = [
    'bolsaAcademia',
    'bolsaPst',
    'mochilaSacola',
    'mochilaAdv',
    'estojoAdv',
    'sBag'
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


// clona os cards para criar o efeito de carousel infinito
export function cloneCarousel() {
    const ListCarouselItem = selectImg('.carousel__item');
    ListCarouselItem.forEach(element => {
        // clona o item do carousel
        const clone = element.cloneNode(true);
        carouselContainer.appendChild(clone);
    });
}


// cria interatividade nos cards do carousel
export function handleCardHover() {
    const ListCarouselItem = selectImg('.carousel__item');

    //EM TESTE PARA VER SE CONSIGO SUMIR COM A IMAGEM PRIMARIA QUANDO ELA FOR SOBREPOSTA
    const firstImg = document.querySelectorAll('.carousel__img');
    imprimir(firstImg)

    ListCarouselItem.forEach(element => {
        const secondImg = element.querySelector('.carousel__second-img--hidden');
        const firstImg = element.querySelector('#firstImg')
        
        element.addEventListener('mouseenter', () => {
            //mostra o ca imagem secundaria
            secondImg.classList.remove('carousel__second-img--hidden');
            secondImg.classList.add('carousel__second-img');
            
            //esconde a imagem principal
            firstImg.classList.remove('carousel__img');
            firstImg.classList.add('carousel__first-img--hidden');
        })

        element.addEventListener('mouseleave', () => {
            // esconde a imagem secundária
            secondImg.classList.remove('carousel__second-img');
            secondImg.classList.add('carousel__second-img--hidden');

            //mostra a imgem principal
            firstImg.classList.remove('carousel__first-img--hidden');
            firstImg.classList.add('carousel__img');
        })
    });
}


// seleciona as diferentes img
function selectImg(classImg) {
    return document.querySelectorAll(classImg);
}

