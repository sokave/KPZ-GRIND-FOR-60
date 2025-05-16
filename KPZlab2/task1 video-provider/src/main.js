import WebsiteSubscriptionCreator from './creators/WebsiteSubscriptionCreator.js';
import MobileAppSubscriptionCreator from './creators/MobileAppSubscriptionCreator.js';
import ManagerCallSubscriptionCreator from './creators/ManagerCallSubscriptionCreator.js';

function main() {
    const website = new WebsiteSubscriptionCreator();
    const mobileApp = new MobileAppSubscriptionCreator();
    const manager = new ManagerCallSubscriptionCreator();

    console.log('=== WebSite ===');
    website.createSubscription('domestic');
    website.createSubscription('premium');

    console.log('\n=== MobileApp ===');
    mobileApp.createSubscription('educational');
    mobileApp.createSubscription('premium');

    console.log('\n=== ManagerCall ===');
    manager.createSubscription('domestic');
    manager.createSubscription('educational');
}

main();
