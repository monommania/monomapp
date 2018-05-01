import m from 'mithril';
import { Item } from '../cart/item';
import CartModel from '../../models/cart';
import 'print-js';

export const Checkout = (vnode) => {
    console.log(printJS);
    const transaction = vnode.attrs.transaction;
    const printReceipt = () => {
        printJS('receipt-form-area', 'html');
    }
    return {
        view: () =>  
            <div class="bg-near-white pt3 ph3 pb4">
                <div id="receipt-form-area" class="overflow-auto">
                    <table class="f6 w-100 mw8 center" cellspacing="0">
                        <tbody class="lh-copy">
                            { transaction.items.map(item => <Item Item={item}/>) }
                        </tbody>
                    </table>
                </div>
                <button onclick={printReceipt}>
                    PRINT
                </button>
            </div>
    }
}