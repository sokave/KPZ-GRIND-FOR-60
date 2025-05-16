export default class SmartTextChecker {
    constructor(reader) {
        this.reader = reader;
    }

    read(filePath) {
        console.log(`Opening file: ${filePath}`);
        let data;
        try {
            data = this.reader.read(filePath);
            console.log(`Successfully read file: ${filePath}`);
            const totalLines = data.length;
            const totalChars = data.reduce((sum, row) => sum + row.length, 0);
            console.log(`Total lines: ${totalLines}, Total characters: ${totalChars}`);
        } catch (e) {
            console.log(`Error reading file: ${filePath} — ${e.message}`);
            throw e;
        } finally {
            console.log(`Closing file: ${filePath}`);
        }
        return data;
    }
}
