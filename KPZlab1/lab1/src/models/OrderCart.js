import Money from './Money.js';

export default class OrderCart {
    constructor() { this.items = []; }
    addItem(product, qty) { this.items.push({ product, qty }); }
    removeItem(idx) { this.items.splice(idx, 1); }
    total() {
        const sum = this.items.reduce((accCents, { product, qty }) =>
                accCents + (product.price.units * 100 + product.price.cents) * qty
            , 0);
        const m = new Money();
        m.set(0, sum);
        return m;
    }
}
