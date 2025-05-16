import Character from '../product/Character.js';

export default class CharacterBuilder {
    constructor() {
        this.character = new Character();
    }

    setName(name) {
        this.character.name = name;
        return this;
    }
    setHeight(height) {
        this.character.height = height;
        return this;
    }
    setBuild(build) {
        this.character.build = build;
        return this;
    }
    setHairColor(color) {
        this.character.hairColor = color;
        return this;
    }
    setEyeColor(color) {
        this.character.eyeColor = color;
        return this;
    }
    setClothing(clothing) {
        this.character.clothing = clothing;
        return this;
    }
    addInventory(item) {
        this.character.inventory.push(item);
        return this;
    }
    addAction(action) {
        this.character.actions.push(action);
        return this;
    }

    build() {
        return this.character;
    }
}
