import Shape from './Shape.js';

export default class Square extends Shape {
    draw() {
        this.renderer.draw('Square');
    }
}
