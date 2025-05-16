import Money from './models/Money.js';
import Product from './models/Product.js';
import Warehouse from './models/Warehouse.js';
import Reporting from './models/Reporting.js';
import OrderCart from './models/OrderCart.js';

function main() {
    console.log('=== Демонстрація роботи ===');

    const price = new Money(120, 50); // 120.50
    console.log(`Початкова ціна: ${price.toString()}`);

    const product = new Product('Ноутбук', price);
    console.log(`Товар: ${product.name}, ціна: ${product.price.toString()}`);

    const discount = new Money(20, 0);
    product.decreasePrice(discount);
    console.log(`Ціна після знижки: ${product.price.toString()}`);

    const warehouse = new Warehouse();
    warehouse.addProduct(product, 'шт.', 10);
    console.log('Інвентар на складі після надходження:');
    console.log(warehouse.getInventory());

    const reporting = new Reporting(warehouse);
    reporting.registerInbound(product.name, 10);
    reporting.registerOutbound(product.name, 2);
    console.log('Залишки після відвантаження:');
    console.log(reporting.inventoryReport());

    const cart = new OrderCart();
    cart.addItem(product, 3);
    console.log(`Сума до оплати за 3 одиниці: ${cart.total().toString()}`);
}

main();
