import fs from 'fs';
import LightImageNode from './LightImageNode.js';
import LightElementNode from './LightElementNode.js';
import LightTextNode from './LightTextNode.js';

function main() {
    fs.writeFileSync('local.png', 'PNG-DATA-BYTES', 'utf-8');

    console.log('\n--- Strategy Demo: Image Loading ---');

    const imgFile = new LightImageNode('local.png', 'Локальна картинка');
    const dataFile = imgFile.load();
    console.log('File load returned buffer length:', dataFile.length);
    console.log('OuterHTML:', imgFile.outerHTML);

    const imgNet = new LightImageNode('https://example.com/picture.jpg', 'Мережева картинка');
    const dataNet = imgNet.load();
    console.log('Network load returned:', dataNet);
    console.log('OuterHTML:', imgNet.outerHTML);

    const div = new LightElementNode({
        tagName: 'div',
        classes: ['gallery']
    });
    div
        .addChild(new LightTextNode('Галерея: '))
        .addChild(imgFile)
        .addChild(imgNet);

    console.log('\nRendered HTML:');
    console.log(div.outerHTML);
}

main();

//Запускайте через node src/main.js