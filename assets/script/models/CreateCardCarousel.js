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
            'BolsaAcademia': 'Bolsa personalizada, ideal para brindes corporativos.',
            'bolsaPst': 'Uma bolsa pratica e moderna para todos os clientes',
            'bolsaAcademia':'Uma bolsa transversal espaçosa e resistente',
            'mochilaSacola': 'Mochila sacola versátil, perfeita para o dia a dia e eventos.',
            'mochilaAdv': 'Mochila personalizada, ideal para viagens e uso diário.',
            'estojoAdv': 'Um estojo prático para todas ocasiões',
            'sBag': 'uma pequena pag transversal que pode ser usada tambemn como pochete',
        };
        return descriptionMap[title] || 'Produto não encontrado';
    }

    getCategories(title) {
        const categoryMap = {
            'BolsaAcademia': ['Academia', 'Esportes'],
            'bolsaPst': ['Esportes', 'Escolas'],
            'bolsaAcademia': ['Esportes', 'Escolas'],
            'mochilaSacola':  ['Esportes', 'Escolas', 'eventos'],
            'mochilaAdv': ['eventos', 'Escolas', 'corporativo'],
            'estojoAdv': ['diversos', 'Escolas', 'corporativo'],
            'sBag': ['Escolas', 'esporte']
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
            <img class="carousel__img" id='firstImg' src="${this.img}" alt="${this.alt}">
            <img class="carousel__img carousel__second-img--hidden" src="${this.secondImg}" alt="${this.alt}">
        </div>
        `;
    }
}
