export default class EBook {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getDescription() {
        return `${this.brand} ${this.model} E-Book Reader`;
    }
}
