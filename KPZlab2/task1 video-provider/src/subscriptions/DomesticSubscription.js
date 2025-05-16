import Subscription from './Subscription.js';

export default class DomesticSubscription extends Subscription {
    constructor() {
        super(
            10,                  // щомісячна плата
            3,                   // мінімальний період
            ['News', 'Sports'],  // канали
            ['HD']               // можливості
        );
    }
}
