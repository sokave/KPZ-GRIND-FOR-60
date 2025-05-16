export default class LightNode {
    constructor() {
        if (new.target === LightNode) {
            throw new Error('LightNode — абстрактний, не можна створювати напряму');
        }
    }
    get innerHTML() { throw new Error('innerHTML мають реалізувати підкласи'); }
    get outerHTML() { throw new Error('outerHTML мають реалізувати підкласи'); }
}
