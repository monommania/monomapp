import { CartService, CartModelFirestore } from 'poscore';
import Store from '../../models/store';

var Carts;
const initCartService = () => {
    let store = Store;
    const model = new CartModelFirestore(store);
    Carts = new CartService(model);
}

initCartService();

export {Carts, initCartService};