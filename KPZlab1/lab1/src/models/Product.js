import Money from './Money.js';

export default class Product {
    constructor(name, price /* Money */) {
        this.name = name;
        this.price = price;
    }
    decreasePrice(amount /* Money */) {
        const oldCents = this.price.units * 100 + this.price.cents;
        const decCents = amount.units * 100 + amount.cents;
        this.price.set(0, Math.max(oldCents - decCents, 0));
    }
}
