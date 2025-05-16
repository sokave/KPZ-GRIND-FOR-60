import Virus from './Virus.js';

function main() {
    // три покоління
    const root    = new Virus('Alpha', 'RNA',   100,   1.0);
    const child1  = new Virus('Beta',  'DNA',    50,   0.5);
    const child2  = new Virus('Gamma', 'Retro',  60,   0.7);
    const grand1  = new Virus('Delta', 'RNA',    25,   0.2);
    const great1  = new Virus('Epsilon','DNA',   10,   0.1);

    // дерево
    grand1.addChild(great1);      // Delta → Epsilon
    child1.addChild(grand1);      // Beta → Delta
    root.addChild(child1);         // Alpha → Beta
    root.addChild(child2);         // Alpha → Gamma

    console.log('--- Original tree ---');
    console.log(JSON.stringify(root, null, 2));

    //Клонуємо корінь
    const cloneRoot = root.clone();
    console.log('\n--- Cloned tree ---');
    console.log(JSON.stringify(cloneRoot, null, 2));

    console.log('\nIndependence checks:');
    console.log('root !== cloneRoot:', root !== cloneRoot);
    console.log(
        'root.children[0] !== cloneRoot.children[0]:',
        root.children[0] !== cloneRoot.children[0]
    );

    //Модифікуємо клон
    cloneRoot.addChild(new Virus('Zeta', 'RNA', 80, 0.3));
    console.log('\nAfter adding Zeta to clone:');
    console.log('Original children count:', root.children.length);
    console.log('Cloned   children count:', cloneRoot.children.length);
}

main();
