import SupportHandler from './SupportHandler.js';

export default class SalesHandler extends SupportHandler {
    async handle(rl) {
        console.log('\n─ Вітаємо у службі підтримки');
        console.log('Питання 1: Потрібна відділ продажів?');
        console.log('1) Так');
        console.log('2) Ні, далі');
        const choice = await SupportHandler.ask(rl, '> ');
        if (choice.trim() === '1') {
            console.log('Переключаю вас на відділ продажів…');
            return true;
        }
        return this.next ? this.next.handle(rl) : false;
    }
}
