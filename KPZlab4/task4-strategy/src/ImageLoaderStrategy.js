export default class ImageLoaderStrategy {
    load(href) {
        throw new Error('load() must be implemented by subclass');
    }
}
