import DeviceFactory from './DeviceFactory.js';
import Laptop      from '../devices/Laptop.js';
import Netbook     from '../devices/Netbook.js';
import EBook       from '../devices/EBook.js';
import Smartphone  from '../devices/Smartphone.js';

export default class IProneFactory extends DeviceFactory {
    createLaptop() {
        return new Laptop('IProne', 'ProBook 15');
    }
    createNetbook() {
        return new Netbook('IProne', 'MiniBook 10');
    }
    createEBook() {
        return new EBook('IProne', 'Reader X');
    }
    createSmartphone() {
        return new Smartphone('IProne', 'X Phone');
    }
}
