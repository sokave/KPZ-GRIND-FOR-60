export default class LightNode {
    constructor() {
        if (new.target === LightNode) {
            throw new Error('Cannot instantiate abstract LightNode');
        }
        this._listeners = new Map();
    }

    on(eventType, handler) {
        if (!this._listeners.has(eventType)) {
            this._listeners.set(eventType, []);
        }
        this._listeners.get(eventType).push(handler);
        return this;
    }

    off(eventType, handler) {
        const list = this._listeners.get(eventType) || [];
        this._listeners.set(
            eventType,
            list.filter(h => h !== handler)
        );
        return this;
    }

    emit(eventType, ...args) {
        const list = this._listeners.get(eventType) || [];
        for (const h of list) h(...args);
    }

    get innerHTML() {
        throw new Error('innerHTML must be implemented');
    }
    get outerHTML() {
        throw new Error('outerHTML must be implemented');
    }
}
