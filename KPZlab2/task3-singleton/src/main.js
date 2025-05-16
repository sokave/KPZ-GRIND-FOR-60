import Authenticator from './Authenticator.js';

class SubAuthenticator extends Authenticator {}

function main() {
    const a1 = Authenticator.getInstance();
    const a2 = Authenticator.getInstance();
    console.log('a1 === a2 ?', a1 === a2); // true

    const b1 = new SubAuthenticator();
    const b2 = SubAuthenticator.getInstance();
    console.log('b1 === a1 ?', b1 === a1); // true
    console.log('b2 === a1 ?', b2 === a1); // true

    console.log('Auth admin/1234 →', a1.authenticate('admin', '1234'));
    console.log('Auth guest/0000 →', a1.authenticate('guest', '0000'));
}

main();