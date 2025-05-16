import DocumentMemento from './DocumentMemento.js';
export default class TextEditor {
    constructor(document) {
        this.document = document;
        this._history = [];
    }

    write(text) {
        this.document.appendText(text);
        console.log(`Appended: "${text}"`);
    }

    // Зберігає поточний стан у стек
    save() {
        const m = new DocumentMemento(this.document.getText());
        this._history.push(m);
        console.log('State saved.');
    }

    undo() {
        if (this._history.length === 0) {
            console.log('No states to restore.');
            return;
        }
        const m = this._history.pop();
        this.document.setText(m.getContent());
        console.log('State restored.');
    }

    show() {
        console.log('Current document:', this.document.getText());
    }
}
