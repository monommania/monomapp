import { Product, IStorage } from 'poscore';
import Guid from '../../providers/guid';
import Storage from '../../providers/local-storage';

const CartModel = {
    init: () => {

    },
    current: {
        transactionID: "",
        list: []
    },
    postponed: [],
    new: () => {
        CartModel.current.transactionID = Guid();
        CartModel.current.list.length=0;
    },
    addToPostponed: () => {
        CartModel.postponed.push(CartModel.current);
        Storage.save('postponed', CartModel.postponed);
    },

    openFromPostponed: () => {
        const postponed = Storage.open('postponed');
        // NOTE currently we only get the first transaction from the array of postponed
        CartModel.current.transactionID = postponed[0].transactionID;
        CartModel.current.list = postponed[0].list;
    },

    addItem: ({plu, name, price}) => {
        let current = CartModel.current.list.filter(item => {
            if (item.plu==plu) {
                item.qty++;
                item.subtotal = item.qty*item.price;
                return item;
            }
            return null;
        });
        if (current.length<=0) {
            CartModel.current.list.push({plu: plu, name: name, price: price, qty: 1, subtotal: 1*price})
        };
    },
    summary: {
        count: () => {
            let n = 0;
            CartModel.current.list.map(item => {
                n = n + item.qty
            });
            return n;
        },
        total: () => {
            var temp = 0;
            CartModel.current.list.map(item => temp += item.subtotal);
            return temp;
        }
    }
}

export default CartModel;