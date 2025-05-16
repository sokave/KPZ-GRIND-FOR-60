import CharacterBuilder from './CharacterBuilder.js';

export default class EnemyBuilder extends CharacterBuilder {
    constructor() {
        super();
        this.character.alignment = 'evil';
    }

    addEvilDeed(deed) {
        this.character.actions.push(`Evil deed: ${deed}`);
        return this;
    }
}
