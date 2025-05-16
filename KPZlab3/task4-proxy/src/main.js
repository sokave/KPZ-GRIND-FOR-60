import fs from 'fs';
import SmartTextReader from './SmartTextReader.js';
import SmartTextChecker from './SmartTextChecker.js';
import SmartTextReaderLocker from './SmartTextReaderLocker.js';

function main() {
    fs.writeFileSync('file1.txt', 'Hello World\nThis is a test\nLine 3');
    fs.writeFileSync('secret_data.txt', 'Top Secret\nDo not share');

    console.log('--- SmartTextChecker Proxy Demo ---');
    const reader = new SmartTextReader();
    const checker = new SmartTextChecker(reader);
    const data1 = checker.read('file1.txt');
    console.log('2D array:', data1);

    console.log('\n--- SmartTextReaderLocker Proxy Demo ---');
    const locker = new SmartTextReaderLocker(reader, '^secret_.*\\.txt$');

    console.log('Attempt to read secret_data.txt:');
    const blocked = locker.read('secret_data.txt');

    console.log('Attempt to read file1.txt:');
    const allowed = locker.read('file1.txt');
    console.log('2D array:', allowed);
}

main();
