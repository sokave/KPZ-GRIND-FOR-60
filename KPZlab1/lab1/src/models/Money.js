export default class Money {
    constructor(units = 0, cents = 0) {
        this.set(units, cents);
    }
    set(units, cents) {
        const total = units * 100 + cents;
        this.units = Math.floor(total / 100);
        this.cents = total % 100;
    }
    toString() {
        return `${this.units}.${this.cents.toString().padStart(2, '0')}`;
    }
}
