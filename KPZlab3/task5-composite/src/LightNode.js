export default class LightNode {
    constructor() {
        if (new.target === LightNode) {
            throw new Error('Cannot instantiate abstract class LightNode');
        }
    }

    get innerHTML() {
        throw new Error('innerHTML must be implemented');
    }
    get outerHTML() {
        throw new Error('outerHTML must be implemented');
    }
}
