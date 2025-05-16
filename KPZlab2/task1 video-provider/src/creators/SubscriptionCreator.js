export default class SubscriptionCreator {
    createSubscription(type) {
        this.logStart(type);
        const subscription = this.factoryMethod(type);
        this.logEnd(subscription);
        return subscription;
    }

    factoryMethod(type) {
        throw new Error('factoryMethod() must be implemented by subclass');
    }

    logStart(type) {
        console.log(`[${this.constructor.name}] Creating "${type}" subscription`);
    }

    logEnd(subscription) {
        console.log(
            `[${this.constructor.name}] Subscription created:`,
            subscription.describe()
        );
    }
}
