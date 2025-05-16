import SupportHandler from './SupportHandler.js';

export default class IssueHandler extends SupportHandler {
    async handle(rl) {
        console.log('Питання 2: Яка у вас проблема?');
        console.log('1) Технічна');
        console.log('2) Білінгова');
        console.log('3) Інше (далі)');
        const choice = await SupportHandler.ask(rl, '> ');
        if (choice.trim() === '1') {
            console.log('Переключаю вас на технічну підтримку…');
            return true;
        }
        if (choice.trim() === '2') {
            console.log('Переключаю вас на білінгову підтримку…');
            return true;
        }
        return this.next ? this.next.handle(rl) : false;
    }
}
