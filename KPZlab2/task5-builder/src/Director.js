export default class Director {
    static constructHero(builder) {
        return builder
            .setName('Дуся')
            .setHeight(170)
            .setBuild('Athletic')
            .setHairColor('Brown')
            .setEyeColor('Green')
            .setClothing('Leather Armor')
            .addInventory('Sword')
            .addInventory('Healing Potion')
            .addGoodDeed('Saved the village')
            .build();
    }

    static constructEnemy(builder) {
        return builder
            .setName('Буся')
            .setHeight(180)
            .setBuild('Bulky')
            .setHairColor('Black')
            .setEyeColor('Red')
            .setClothing('Dark Robes')
            .addInventory('Axe')
            .addInventory('Dark Scroll')
            .addEvilDeed('Destroyed the town')
            .build();
    }
}
