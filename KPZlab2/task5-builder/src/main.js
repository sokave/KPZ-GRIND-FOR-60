import HeroBuilder from './builders/HeroBuilder.js';
import EnemyBuilder from './builders/EnemyBuilder.js';
import Director    from './Director.js';

function main() {
    const duchka = Director.constructHero(new HeroBuilder());
    console.log('Hero Дуся:', duchka.describe());

    const buska = Director.constructEnemy(new EnemyBuilder());
    console.log('Enemy Буся:', buska.describe());
}

main();
