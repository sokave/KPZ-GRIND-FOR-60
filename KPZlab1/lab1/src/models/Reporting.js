export default class Reporting {
    constructor(warehouse) {
        this.warehouse = warehouse;
        this.inbound = [];
        this.outbound = [];
    }
    registerInbound(name, qty, date = new Date()) {
        this.inbound.push({ name, qty, date });
    }
    registerOutbound(name, qty, date = new Date()) {
        this.outbound.push({ name, qty, date });
    }
    inventoryReport() {
        return this.warehouse.getInventory();
    }
}
