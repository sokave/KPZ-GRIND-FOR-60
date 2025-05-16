import Shape from './Shape.js';

export default class Circle extends Shape {
    draw() {
        this.renderer.draw('Circle');
    }
}
