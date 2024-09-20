let containerCarousel = document.querySelector('#containerCarousel');
const ListCarouselItem = document.querySelectorAll('.carousel__item');

export function cloneCarousel() {
    ListCarouselItem.forEach(element => {
        // clona o item do carousel
        const clone = element.cloneNode(true);

        containerCarousel.appendChild(clone)
    });

    console.log(containerCarousel)
}