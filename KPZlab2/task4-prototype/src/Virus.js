export default class Virus {
    constructor(name, type, weight, age) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.age = age;
        this.children = [];
    }

    addChild(childVirus) {
        this.children.push(childVirus);
    }

    // Глибоке клонування себе та всіх нащадків
    clone() {
        const cloned = new Virus(this.name, this.type, this.weight, this.age);
        for (const child of this.children) {
            cloned.addChild(child.clone());
        }
        return cloned;
    }
}
