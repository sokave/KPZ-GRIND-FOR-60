import Hero from '../heroes/Hero.js';

export default class InventoryDecorator extends Hero {
    constructor(hero) {
        super(hero.name);
        this.hero = hero;
    }

    getInventory() {
        return this.hero.getInventory();
    }
}
