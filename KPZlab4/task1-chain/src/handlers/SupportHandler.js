export default class SupportHandler {
    constructor(next) {
        this.next = next;
    }

    async handle(rl) {
        throw new Error('handle() must be implemented by subclass');
    }

    static ask(rl, question) {
        return new Promise(resolve => rl.question(question, resolve));
    }
}
