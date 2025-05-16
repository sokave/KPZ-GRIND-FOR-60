import Logger from './logger.js';

export default class FileLoggerAdapter extends Logger {
    constructor(fileWriter) {
        super();
        this.writer = fileWriter;
    }

    Log(message) {
        this.writer.WriteLine(`[LOG]   ${message}`);
    }

    Warn(message) {
        this.writer.WriteLine(`[WARN]  ${message}`);
    }

    Error(message) {
        this.writer.WriteLine(`[ERROR] ${message}`);
    }
}
