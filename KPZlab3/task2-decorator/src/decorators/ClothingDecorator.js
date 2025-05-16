import InventoryDecorator from './InventoryDecorator.js';

export default class ClothingDecorator extends InventoryDecorator {
    constructor(hero, clothing) {
        super(hero);
        this.clothing = clothing;
    }

    getInventory() {
        return [...super.getInventory(), this.clothing];
    }
}
