import LightNode from './LightNode.js';
import FileImageLoader from './FileImageLoader.js';
import NetworkImageLoader from './NetworkImageLoader.js';

export default class LightImageNode extends LightNode {
    constructor(href, alt = '') {
        super();
        this.href = href;
        this.alt = alt;
        // Обираємо стратегію за префіксом
        if (/^https?:\/\//i.test(href)) {
            this.loader = new NetworkImageLoader();
        } else {
            this.loader = new FileImageLoader();
        }
    }


    load() {
        return this.loader.load(this.href);
    }

    // Для LightHTML ми вважаємо, що <img> — завжди selfClosing
    get innerHTML() { return ''; }
    get outerHTML() {
        return `<img src="${this.href}" alt="${this.alt}"/>`;
    }
}
