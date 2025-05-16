import SubscriptionCreator from './SubscriptionCreator.js';
import DomesticSubscription from '../subscriptions/DomesticSubscription.js';
import EducationalSubscription from '../subscriptions/EducationalSubscription.js';
import PremiumSubscription from '../subscriptions/PremiumSubscription.js';

export default class WebsiteSubscriptionCreator extends SubscriptionCreator {
    factoryMethod(type) {
        switch (type) {
            case 'domestic':
                return new DomesticSubscription();
            case 'educational':
                return new EducationalSubscription();
            case 'premium':
                return new PremiumSubscription();
            default:
                throw new Error(`Unknown subscription type: ${type}`);
        }
    }
}
