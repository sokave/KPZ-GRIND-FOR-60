export default class Subscription {
    constructor(monthlyFee, minPeriodMonths, channels = [], features = []) {
        this.monthlyFee = monthlyFee;
        this.minPeriodMonths = minPeriodMonths;
        this.channels = channels;
        this.features = features;
    }

    describe() {
        return {
            monthlyFee: this.monthlyFee,
            minPeriodMonths: this.minPeriodMonths,
            channels: this.channels,
            features: this.features
        };
    }
}
