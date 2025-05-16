import InventoryDecorator from './InventoryDecorator.js';

export default class WeaponDecorator extends InventoryDecorator {
    constructor(hero, weapon) {
        super(hero);
        this.weapon = weapon;
    }

    getInventory() {
        return [...super.getInventory(), this.weapon];
    }
}
