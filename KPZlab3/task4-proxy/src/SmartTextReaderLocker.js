export default class SmartTextReaderLocker {
    constructor(reader, pattern) {
        this.reader = reader;
        this.regex = pattern instanceof RegExp ? pattern : new RegExp(pattern);
    }

    read(filePath) {
        if (this.regex.test(filePath)) {
            console.log('Access denied!');
            return null;
        }
        return this.reader.read(filePath);
    }
}
