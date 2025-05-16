import ImageLoaderStrategy from './ImageLoaderStrategy.js';

export default class NetworkImageLoader extends ImageLoaderStrategy {
    load(href) {
        console.log(`▶ Loading image from network: ${href}`);
        // У цьому прикладі просто симулюємо мережеве завантаження
        return `<ImageData from ${href}>`;
    }
}