const Authenticator = (() => {
    let instance = null;

    return class Authenticator {
        constructor() {
            if (instance) {
                return instance;
            }
            this.token = Math.random().toString(36).slice(2);
            console.log('--Authenticator initialized with token:--', this.token);
            instance = this;
            return instance;
        }

        static getInstance() {
            if (!instance) {
                instance = new Authenticator();
            }
            return instance;
        }

        authenticate(user, password) {
            console.log(`Authenticating ${user} with token ${this.token}…`);
            return user === 'admin' && password === '1234';
        }
    };
})();

export default Authenticator;