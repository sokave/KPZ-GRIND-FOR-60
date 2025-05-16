export default class Character {
    constructor() {
        this.name = '';
        this.height = 0;
        this.build = '';
        this.hairColor = '';
        this.eyeColor = '';
        this.clothing = '';
        this.inventory = [];
        this.alignment = '';
        this.actions = [];
    }

    describe() {
        return {
            name: this.name,
            height: this.height,
            build: this.build,
            hairColor: this.hairColor,
            eyeColor: this.eyeColor,
            clothing: this.clothing,
            inventory: this.inventory,
            alignment: this.alignment,
            actions: this.actions
        };
    }
}
