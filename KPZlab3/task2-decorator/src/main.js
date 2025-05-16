import Warrior from './heroes/Warrior.js';
import Mage from './heroes/Mage.js';
import Palladin from './heroes/Palladin.js';

import WeaponDecorator from './decorators/WeaponDecorator.js';
import ClothingDecorator from './decorators/ClothingDecorator.js';
import ArtifactDecorator from './decorators/ArtifactDecorator.js';

function main() {
    console.log('--- Warrior equips multiple items ---');
    let warrior = new Warrior();
    warrior.describe();
    warrior = new WeaponDecorator(warrior, 'Sword');
    warrior = new ClothingDecorator(warrior, 'Iron Armor');
    warrior = new ArtifactDecorator(warrior, 'Ring of Strength');
    warrior.describe();

    console.log('\n--- Mage equips multiple items ---');
    let mage = new Mage();
    mage.describe();
    mage = new WeaponDecorator(mage, 'Staff of Wisdom');
    mage = new ArtifactDecorator(mage, 'Amulet of Mana');
    mage = new ClothingDecorator(mage, 'Cloak of Invisibility');
    mage.describe();

    console.log('\n--- Palladin equips multiple items ---');
    let pal = new Palladin();
    pal.describe();
    pal = new WeaponDecorator(pal, 'Hammer');
    pal = new ClothingDecorator(pal, 'Plate Armor');
    pal = new ArtifactDecorator(pal, 'Holy Symbol');
    pal.describe();
}

main();
