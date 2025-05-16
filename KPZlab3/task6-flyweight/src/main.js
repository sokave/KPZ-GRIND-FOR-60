import fs from 'fs';
import path from 'path';

import LightTextNode               from './LightTextNode.js';
import LightElementNode            from './LightElementNode.js';
import LightElementNodeFlyweight   from './LightElementNodeFlyweight.js';
import ElementStyleFactory         from './ElementStyleFactory.js';

function classifyTag(line, index) {
    if (index === 0) {
        return { tagName: 'h1', displayType: 'block', closingType: 'normal', classes: [] };
    }
    if (line.length < 20) {
        return { tagName: 'h2', displayType: 'block', closingType: 'normal', classes: [] };
    }
    if (/^\s/.test(line)) {
        return { tagName: 'blockquote', displayType: 'block', closingType: 'normal', classes: [] };
    }
    return { tagName: 'p', displayType: 'block', closingType: 'normal', classes: [] };
}

function buildTree(lines, useFlyweight = false) {
    const factory = useFlyweight ? new ElementStyleFactory() : null;
    const roots = lines.map((line, idx) => {
        const info = classifyTag(line, idx);
        const textNode = new LightTextNode(line);
        if (!useFlyweight) {
            const el = new LightElementNode(info);
            return el.addChild(textNode);
        } else {
            const style = factory.getStyle(info);
            const el = new LightElementNodeFlyweight(style);
            el.addChild(textNode);
            return el;
        }
    });
    return { roots, factory };
}

function measure(lines) {
    global.gc?.();
    const before = process.memoryUsage().heapUsed;

    const { roots: normal } = buildTree(lines, false);
    global.gc?.();
    const mid = process.memoryUsage().heapUsed;

    const { roots: fly, factory } = buildTree(lines, true);
    global.gc?.();
    const after = process.memoryUsage().heapUsed;

    console.log('Lines processed:', lines.length);
    console.log('Heap delta without Flyweight:', (mid - before).toLocaleString(), 'bytes');
    console.log('Heap delta with    Flyweight:', (after - mid).toLocaleString(), 'bytes');
    console.log('Flyweight styles count:', factory.getStyleCount());
    console.log('JSON size without Flyweight:', JSON.stringify(normal).length);
    console.log('JSON size with    Flyweight:', JSON.stringify(fly).length);
}

function main() {
    let lines;
    try {
        const txt = fs.readFileSync(path.resolve(process.cwd(), 'book.txt'), 'utf-8');
        lines = txt.split(/\r?\n/);
    } catch {
        lines = [
            'ACT V. Mantua. A Street.',
            'Scene I. Friar Lawrence’s Cell.',
            'Scene II. A churchyard; in it a Monument belonging to the Capulets',
            'Dramatis Personæ',
            'ESCALUS, Prince of Verona.',
            '   An indented quote line.',
            'Short line.',
            'A fairly long line that should be paragraph because it has more than twenty characters.'
        ];
    }

    console.log('--- Flyweight for LightHTML ---');
    measure(lines);
}

main();
