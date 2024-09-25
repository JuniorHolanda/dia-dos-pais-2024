export class CreateCardCarousel {

    constructor(title, img, secondImg) {
        this.title = title,
        this.text = this.determineText(title),
        this.img = img,
        this.alt = this.determineText(title),
        this.categories = this.getCategories(title),
        this.secondImg = secondImg
    }


    determineText(title) {
        const descriptionMap = {
            'Bandeja': 'Bandeja personalizada, ideal para brindes corporativos.',
            'SqueezeSport': 'Garrafa esportiva personalizável, prática e durável.',
            'GarrafaPot': 'Garrafa térmica personalizada, mantém a temperatura ideal.',
            'GarrafaTank': 'Garrafa resistente e personalizável, para eventos.',
            'MalaRedon': 'Mala personalizável, ideal para campanhas promocionais.',
            'SqueezeD': 'Squeeze durável com design moderno para esportes.',
            'MochilaAdv': 'Mochila versátil e personalizada para aventuras diárias.',
            'MochilaSacola': 'Mochila sacola leve e prática, ideal para eventos.',
            'TermicaMiu': 'Bolsa térmica compacta e útil, ideal para personalizar.'
        };
        return descriptionMap[title] || 'Produto não encontrado';
    }

    getCategories(title) {
        const categoryMap = {
            'Bandeja': ['Casa'],
            'SqueezeSport': ['Esportes', 'Escolas'],
            'GarrafaPot': ['Academia', 'Esportes', 'Escolas'],
            'GarrafaTank': ['Academia', 'Esportes', 'Escolas'],
            'MalaRedon': ['Academia', 'Esportes'],
            'SqueezeD': ['Academia', 'Esportes', 'Escolas'],
            'MochilaAdv': ['Corporativo', 'Congresso'],
            'MochilaSacola': ['Academia', 'Esportes', 'Escolas'],
            'TermicaMiu': ['Casa', 'Picnique']
        };
        return categoryMap[title] || [];
    }

    renderCard() {
        const categoriesList = this.categories.map(category => `<li class="carousel__type">${category}</li>`).join('');

        return `
        <div class="carousel__item" >
            <h3 class="carousel__title">${this.title}</h3>
            <p class="carousel__text">${this.text}</p>
            <ul class="carousel__category">
                ${categoriesList}
            </ul>
            <img class="carousel__img" src="${this.img}" alt="${this.alt}">
            <img class=" carousel__second-img--hidden" src="${this.secondImg}" alt="${this.alt}">
        </div>
        `;
    }
}
