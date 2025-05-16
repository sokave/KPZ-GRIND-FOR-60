import SupportHandler from './SupportHandler.js';

export default class AccountHandler extends SupportHandler {
    async handle(rl) {
        console.log('Питання 3: Маєте проблеми з акаунтом?');
        console.log('1) Так');
        console.log('2) Ні, далі');
        const choice = await SupportHandler.ask(rl, '> ');
        if (choice.trim() === '1') {
            console.log('Переключаю вас на підтримку акаунтів…');
            return true;
        }
        return this.next ? this.next.handle(rl) : false;
    }
}
