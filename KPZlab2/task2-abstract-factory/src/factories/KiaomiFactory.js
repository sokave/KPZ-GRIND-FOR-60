import DeviceFactory from './DeviceFactory.js';
import Laptop      from '../devices/Laptop.js';
import Netbook     from '../devices/Netbook.js';
import EBook       from '../devices/EBook.js';
import Smartphone  from '../devices/Smartphone.js';

export default class KiaomiFactory extends DeviceFactory {
    createLaptop() {
        return new Laptop('Kiaomi', 'NoteBook Air');
    }
    createNetbook() {
        return new Netbook('Kiaomi', 'LiteBook 8');
    }
    createEBook() {
        return new EBook('Kiaomi', 'ReadPad');
    }
    createSmartphone() {
        return new Smartphone('Kiaomi', 'Mi Phone');
    }
}
