import { ProductService, ProductModelFirestore } from 'poscore';
import Store from '../../models/store';

var Products;
const initProductService =  () => {
    let store = Store;
    const model = new ProductModelFirestore(store);
    Products = new ProductService(model);
}

initProductService();

export {Products, initProductService};