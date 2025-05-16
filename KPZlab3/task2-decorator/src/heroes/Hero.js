export default class Hero {
    constructor(name) {
        this.name = name;
    }

    getInventory() {
        return [];
    }

    describe() {
        console.log(
            `${this.name} inventory: ${this.getInventory().join(', ') || '[empty]'}`
        );
    }
}
