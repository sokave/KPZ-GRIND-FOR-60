export default class DocumentMemento {
    constructor(content) {
        this._content = content;
    }

    getContent() {
        return this._content;
    }
}
