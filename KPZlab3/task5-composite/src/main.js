import LightTextNode     from './LightTextNode.js';
import LightElementNode  from './LightElementNode.js';

function main() {
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

    console.log('List child count:', ul.childCount);
    console.log('InnerHTML:', ul.innerHTML);
    console.log('OuterHTML:', ul.outerHTML);

    const img = new LightElementNode({
        tagName: 'img',
        displayType: 'inline',
        closingType: 'selfClosing',
        classes: ['logo']
    });
    console.log('Image tag:', img.outerHTML);
}

main();
