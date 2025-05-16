import Money from '../src/models/Money.js';
import Product from '../src/models/Product.js';
import Warehouse from '../src/models/Warehouse.js';
import Reporting from '../src/models/Reporting.js';
import OrderCart from '../src/models/OrderCart.js';

describe('Лабораторна: Тестування класів', () => {
    test('Money: коректна нормалізація копійок', () => {
        const m = new Money(1, 150);
        expect(m.units).toBe(2);
        expect(m.cents).toBe(50);
        expect(m.toString()).toBe('2.50');
    });

    test('Product: знижка зменшує ціну, але не опускає нижче нуля', () => {
        const price = new Money(10, 0);
        const product = new Product('Товар', price);
        product.decreasePrice(new Money(15, 0));
        expect(product.price.units).toBe(0);
        expect(product.price.cents).toBe(0);
    });

    test('Warehouse: додає товар та дозволяє відвантаження', () => {
        const product = new Product('Книга', new Money(5, 0));
        const warehouse = new Warehouse();
        warehouse.addProduct(product, 'шт.', 10);

        const inv = warehouse.getInventory();
        expect(inv[0].name).toBe('Книга');
        expect(inv[0].quantity).toBe(10);

        warehouse.shipProduct('Книга', 3);
        const updated = warehouse.getInventory();
        expect(updated[0].quantity).toBe(7);
    });

    test('Reporting: реєструє надходження та відвантаження', () => {
        const product = new Product('Миша', new Money(3, 0));
        const warehouse = new Warehouse();
        const reporting = new Reporting(warehouse);

        warehouse.addProduct(product, 'шт.', 5);
        reporting.registerInbound('Миша', 5);
        reporting.registerOutbound('Миша', 2);

        const inventory = reporting.inventoryReport();
        expect(inventory[0].quantity).toBe(5);
    });

    test('OrderCart: обраховує загальну суму', () => {
        const price = new Money(4, 50);
        const product = new Product('Флешка', price);
        const cart = new OrderCart();

        cart.addItem(product, 3);
        const total = cart.total();
        expect(total.toString()).toBe('13.50');
    });
});
