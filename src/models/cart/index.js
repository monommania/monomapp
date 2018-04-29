import { CartService, CartModelFirestore } from 'poscore';

const model = new CartModelFirestore({id: "store-0000001", name: "Daily Coffee"});
const Carts = new CartService(model);
export default  Carts;