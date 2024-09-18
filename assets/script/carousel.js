// referencia o container com os itens do carrossel
const wrapperCarousel = document.querySelector('#wrapperCarousel');

//referencia as div que contem o carrossel
const listCarousel = document.querySelectorAll('.carousel__item');

let count = 0;
export function carousel() {

    count++;

    if (count > listCarousel.length  - 1) {
        count = 0;
    }

}

