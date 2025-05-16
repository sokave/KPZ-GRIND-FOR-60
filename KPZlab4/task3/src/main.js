import LightTextNode    from './LightTextNode.js';
import LightElementNode from './LightElementNode.js';

function main() {
    // Створимо список
    const ul = new LightElementNode({
        tagName: 'ul',
        displayType: 'block',
        closingType: 'normal',
        classes: ['menu']
    });

    ['Home', 'About', 'Contact'].forEach(text => {
        const li = new LightElementNode({
            tagName: 'li',
            displayType: 'block',
            closingType: 'normal',
            classes: []
        });
        li.addChild(new LightTextNode(text));
        ul.addChild(li);
    });

    // Підпишемося на click для всіх <li>
    ul.children.forEach(li => {
        li.on('click', () => {
            console.log(`🖱 Ви натиснули на пункт: "${li.innerHTML}"`);
        });
    });

    console.log('--- Симуляція натискання на пункти меню ---');
    ul.children.forEach(li => {
        li.emit('click');
    });
}

main();
