import fs from 'fs';
import path from 'path';
import ImageLoaderStrategy from './ImageLoaderStrategy.js';

export default class FileImageLoader extends ImageLoaderStrategy {
    load(href) {
        const fullPath = path.resolve(process.cwd(), href);
        console.log(`▶ Loading image from file: ${fullPath}`);
        return fs.readFileSync(fullPath);
    }
}
