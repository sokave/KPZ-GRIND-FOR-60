export default class Netbook {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getDescription() {
        return `${this.brand} ${this.model} Netbook`;
    }
}
