export default class Logger {
    Log(message) {
        // зелений
        console.log('\x1b[32m%s\x1b[0m', message);
    }
    Warn(message) {
        // оранжевий
        console.log('\x1b[33m%s\x1b[0m', message);
    }
    Error(message) {
        // червоний
        console.log('\x1b[31m%s\x1b[0m', message);
    }
}
