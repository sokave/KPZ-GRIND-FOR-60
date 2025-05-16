export default class Warehouse {
    constructor() {
        this.inventory = new Map();
    }
    addProduct(product, unit, quantity, date = new Date()) {
        this.inventory.set(product.name, { product, unit, quantity, lastDelivery: date });
    }
    shipProduct(name, quantity) {
        const item = this.inventory.get(name);
        if (!item || item.quantity < quantity) throw new Error('Недостатня кількість');
        item.quantity -= quantity;
        return item;
    }
    getInventory() {
        return [...this.inventory.values()].map(i => ({
            name: i.product.name,
            unit: i.unit,
            quantity: i.quantity,
            price: i.product.price.toString(),
            lastDelivery: i.lastDelivery,
        }));
    }
}
