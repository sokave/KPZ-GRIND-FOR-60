import Shape from './Shape.js';

export default class Triangle extends Shape {
    draw() {
        this.renderer.draw('Triangle');
    }
}
