export default class ElementStyleFactory {
    constructor() {
        this._styles = new Map();
    }
    getStyle({ tagName, displayType, closingType, classes }) {
        const key = `${tagName}|${displayType}|${closingType}|${classes.join(',')}`;
        if (!this._styles.has(key)) {
            this._styles.set(key, { tagName, displayType, closingType, classes });
        }
        return this._styles.get(key);
    }

    getStyleCount() {
        return this._styles.size;
    }
}
