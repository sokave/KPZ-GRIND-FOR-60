import SupportHandler from './SupportHandler.js';

export default class GeneralHandler extends SupportHandler {
    async handle(rl) {
        console.log('Питання 4: Потрібна загальна підтримка?');
        console.log('1) Так');
        console.log('2) Ні, почати спочатку');
        const choice = await SupportHandler.ask(rl, '> ');
        if (choice.trim() === '1') {
            console.log('Переключаю вас на загальну підтримку…');
            return true;
        }
        return false;
    }
}
