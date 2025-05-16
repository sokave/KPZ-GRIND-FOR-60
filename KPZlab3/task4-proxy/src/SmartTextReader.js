import fs from 'fs';

export default class SmartTextReader {
    read(filePath) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split(/\r?\n/);
        return lines.map(line => line.split(''));
    }
}
