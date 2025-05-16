import SubscriptionCreator from './SubscriptionCreator.js';
import DomesticSubscription from '../subscriptions/DomesticSubscription.js';
import EducationalSubscription from '../subscriptions/EducationalSubscription.js';
import PremiumSubscription from '../subscriptions/PremiumSubscription.js';

export default class ManagerCallSubscriptionCreator extends SubscriptionCreator {
    factoryMethod(type) {
        let sub;
        switch (type) {
            case 'domestic':
                sub = new DomesticSubscription();
                break;
            case 'educational':
                sub = new EducationalSubscription();
                break;
            case 'premium':
                sub = new PremiumSubscription();
                break;
            default:
                throw new Error(`Unknown subscription type: ${type}`);
        }
        // 10% знижка на перший місяць
        sub.firstMonthDiscount = 0.1;
        return sub;
    }
}
