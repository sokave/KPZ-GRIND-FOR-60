import InventoryDecorator from './InventoryDecorator.js';

export default class ArtifactDecorator extends InventoryDecorator {
    constructor(hero, artifact) {
        super(hero);
        this.artifact = artifact;
    }

    getInventory() {
        return [...super.getInventory(), this.artifact];
    }
}
