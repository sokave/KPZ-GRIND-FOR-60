import Renderer from './Renderer.js';

export default class RasterRenderer extends Renderer {
    draw(shapeName) {
        console.log(`Drawing ${shapeName} as pixels`);
    }
}
