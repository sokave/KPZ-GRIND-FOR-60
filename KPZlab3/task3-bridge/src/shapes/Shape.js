export default class Shape {
    constructor(renderer) {
        this.renderer = renderer;
    }

    draw() {
        throw new Error('draw() має бути реалізовано в підкласі Shape');
    }
}
