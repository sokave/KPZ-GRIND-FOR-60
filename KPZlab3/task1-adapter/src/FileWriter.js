import fs from 'fs';
import path from 'path';

export default class FileWriter {
    constructor(filename) {
        this.filePath = path.resolve(process.cwd(), filename);
        fs.writeFileSync(this.filePath, '');
    }

    Write(text) {
        fs.appendFileSync(this.filePath, text);
    }

    WriteLine(text) {
        this.Write(text + '\n');
    }
}
