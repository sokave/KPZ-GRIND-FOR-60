import Logger from './logger.js';
import FileWriter from './FileWriter.js';
import FileLoggerAdapter from './FileLoggerAdapter.js';
import fs from 'fs';

function main() {
    console.log('--- ConsoleLogger (кольоровий) ---');
    const consoleLogger = new Logger();
    consoleLogger.Log('This is a normal log');
    consoleLogger.Warn('This is a warning');
    consoleLogger.Error('This is an error');

    console.log('\n--- FileLoggerAdapter → log.txt ---');
    const fileWriter = new FileWriter('log.txt');
    const fileLogger = new FileLoggerAdapter(fileWriter);
    fileLogger.Log('Logged to file');
    fileLogger.Warn('Warning in file');
    fileLogger.Error('Error in file');

    console.log('\n--- Contents of log.txt ---');
    const contents = fs.readFileSync(fileWriter.filePath, 'utf-8');
    console.log(contents);
}

main();
