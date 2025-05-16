export default class Smartphone {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getDescription() {
        return `${this.brand} ${this.model} Smartphone`;
    }
}
