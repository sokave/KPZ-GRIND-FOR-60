import IProneFactory  from './factories/IProneFactory.js';
import KiaomiFactory  from './factories/KiaomiFactory.js';
import BalaxyFactory  from './factories/BalaxyFactory.js';

function demo(factory) {
    console.log(`\n--- ${factory.constructor.name} ---`);
    console.log( factory.createLaptop().getDescription() );
    console.log( factory.createNetbook().getDescription() );
    console.log( factory.createEBook().getDescription() );
    console.log( factory.createSmartphone().getDescription() );
}

function main() {
    demo(new IProneFactory());
    demo(new KiaomiFactory());
    demo(new BalaxyFactory());
}

main();
