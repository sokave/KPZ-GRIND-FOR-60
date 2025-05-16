import TextDocument from './TextDocument.js';
import TextEditor   from './TextEditor.js';

function main() {
    const doc = new TextDocument();
    const editor = new TextEditor(doc);

    console.log('--- Initial state ---');
    editor.show();

    editor.write('Hello');
    editor.show();
    editor.save();

    editor.write(', world!');
    editor.show();
    editor.save();

    editor.write(' This is a Memento demo.');
    editor.show();

    console.log('\n--- Undo 1 ---');
    editor.undo();
    editor.show();

    console.log('\n--- Undo 2 ---');
    editor.undo();
    editor.show();

    console.log('\n--- Undo 3 ---');
    editor.undo();
    editor.show();
}

main();
