import Renderer from './Renderer.js';

export default class VectorRenderer extends Renderer {
    draw(shapeName) {
        console.log(`Drawing ${shapeName} as vector`);
    }
}
