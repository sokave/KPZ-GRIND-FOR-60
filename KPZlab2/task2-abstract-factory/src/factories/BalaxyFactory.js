import DeviceFactory from './DeviceFactory.js';
import Laptop      from '../devices/Laptop.js';
import Netbook     from '../devices/Netbook.js';
import EBook       from '../devices/EBook.js';
import Smartphone  from '../devices/Smartphone.js';

export default class BalaxyFactory extends DeviceFactory {
    createLaptop() {
        return new Laptop('Balaxy', 'Book Z');
    }
    createNetbook() {
        return new Netbook('Balaxy', 'NetGo 11');
    }
    createEBook() {
        return new EBook('Balaxy', 'E-Note');
    }
    createSmartphone() {
        return new Smartphone('Balaxy', 'Galaxy Ultra');
    }
}
