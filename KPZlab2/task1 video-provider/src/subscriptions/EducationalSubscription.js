import Subscription from './Subscription.js';

export default class EducationalSubscription extends Subscription {
    constructor() {
        super(
            5,
            6,
            ['Documentaries', 'Kids'],
            ['HD', 'Parental Control']
        );
    }
}
