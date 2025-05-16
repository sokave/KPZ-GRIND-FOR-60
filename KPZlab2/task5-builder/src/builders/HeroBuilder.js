import CharacterBuilder from './CharacterBuilder.js';

export default class HeroBuilder extends CharacterBuilder {
    constructor() {
        super();
        this.character.alignment = 'good';
    }

    addGoodDeed(deed) {
        this.character.actions.push(`Good deed: ${deed}`);
        return this;
    }
}
