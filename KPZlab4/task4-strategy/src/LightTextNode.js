import LightNode from './LightNode.js';

export default class LightTextNode extends LightNode {
    constructor(text) {
        super();
        this.text = text;
    }
    get innerHTML() { return this.text; }
    get outerHTML() { return this.text; }
}
