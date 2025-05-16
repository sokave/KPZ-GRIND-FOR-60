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
            throw new Error('Child must be instance of LightNode');
        }
        this.children.push(node);
        return this;
    }

    get childCount() {
        return this.children.length;
    }

    get innerHTML() {
        return this.children.map(child => child.outerHTML).join('');
    }

    get outerHTML() {
        const classAttr = this.classes.length ? ` class="${this.classes.join(' ')}"` : '';
        if (this.closingType === 'selfClosing') {
            return `<${this.tagName}${classAttr}/>`;
        } else {
            return `<${this.tagName}${classAttr}>${this.innerHTML}</${this.tagName}>`;
        }
    }
}
