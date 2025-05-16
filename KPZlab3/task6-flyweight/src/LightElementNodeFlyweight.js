import LightNode from './LightNode.js';

export default class LightElementNodeFlyweight extends LightNode {
    constructor(style) {
        super();
        this.style = style;
        this.children = [];
    }

    addChild(node) {
        if (!(node instanceof LightNode))
            throw new Error('Child мусить бути LightNode');
        this.children.push(node);
        return this;
    }

    get innerHTML() {
        return this.children.map(c => c.outerHTML).join('');
    }

    get outerHTML() {
        const { tagName, closingType, classes } = this.style;
        const cls = classes.length ? ` class="${classes.join(' ')}"` : '';
        if (closingType === 'selfClosing') {
            return `<${tagName}${cls}/>`;
        }
        return `<${tagName}${cls}>${this.innerHTML}</${tagName}>`;
    }
}
