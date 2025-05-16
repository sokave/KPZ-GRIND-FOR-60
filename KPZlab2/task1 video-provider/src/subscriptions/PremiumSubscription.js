import Subscription from './Subscription.js';

export default class PremiumSubscription extends Subscription {
    constructor() {
        super(
            20,
            1,
            ['All Channels'],
            ['HD', 'Ultra HD', 'Offline Downloads', 'Multi-screen']
        );
    }
}
