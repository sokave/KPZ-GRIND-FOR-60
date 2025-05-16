export default class TextDocument {
    constructor(initial = '') {
        this._text = initial;
    }

    setText(text) {
        this._text = text;
    }

    appendText(text) {
        this._text += text;
    }

    getText() {
        return this._text;
    }
}
