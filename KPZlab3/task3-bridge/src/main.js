import VectorRenderer from './renderers/VectorRenderer.js';
import RasterRenderer from './renderers/RasterRenderer.js';

import Circle   from './shapes/Circle.js';
import Square   from './shapes/Square.js';
import Triangle from './shapes/Triangle.js';

function main() {
    const vector = new VectorRenderer();
    const raster = new RasterRenderer();

    console.log('--- Vector Rendering ---');
    new Circle(vector).draw();
    new Square(vector).draw();
    new Triangle(vector).draw();

    console.log('\n--- Raster Rendering ---');
    new Circle(raster).draw();
    new Square(raster).draw();
    new Triangle(raster).draw();
}

main();
