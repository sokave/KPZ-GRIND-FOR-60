import readline from 'readline';
import SalesHandler   from './handlers/SalesHandler.js';
import IssueHandler   from './handlers/IssueHandler.js';
import AccountHandler from './handlers/AccountHandler.js';
import GeneralHandler from './handlers/GeneralHandler.js';

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const chain = new SalesHandler(
        new IssueHandler(
            new AccountHandler(
                new GeneralHandler(null)
            )
        )
    );

    let handled = false;
    do {
        handled = await chain.handle(rl);
        if (!handled) {
            console.log('\nНе вдалося знайти потрібний відділ. Починаємо спочатку...');
        }
    } while (!handled);

    rl.close();
}

main();
