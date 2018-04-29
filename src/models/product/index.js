import { ProductService, ProductModelFirestore } from 'poscore';

const model = new ProductModelFirestore({id: "store-0000001", name: "Daily Coffee"});
const Products = new ProductService(model);

export default  Products;