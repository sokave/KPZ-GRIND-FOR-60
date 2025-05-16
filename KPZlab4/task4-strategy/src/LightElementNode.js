import LightNode from './LightNode.js';

export default class LightElementNode extends LightNode {
    constructor({ tagName, displayType = 'block', closingType = 'normal', classes = [] }) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
        this.classes = classes;
        this.children = [];
    }

    addChild(node) {
        if (!(node instanceof LightNode)) {
            throw new Error('Child must be LightNode');
        }
        this.children.push(node);
        return this;
    }

    get innerHTML() {
        return this.children.map(c => c.outerHTML).join('');
    }

    get outerHTML() {
        const cls = this.classes.length ? ` class="${this.classes.join(' ')}"` : '';
        if (this.closingType === 'selfClosing') {
            return `<${this.tagName}${cls}/>`;
        }
        return `<${this.tagName}${cls}>${this.innerHTML}</${this.tagName}>`;
    }
}
