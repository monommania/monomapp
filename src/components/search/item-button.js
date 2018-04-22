import m from 'mithril';
import CartModel from '../../models/cart';

export const ItemButton = (vnode) => {
    const product = vnode.attrs.product;
    const addItem = () => {
        CartModel.addItem(product);
    }
    return {
        view: () => 
            <button 
                class={`f6 lh-copy db fl w-30-ns w-30-m w-100 pv2 bl bt b--near-white br2 dim pointer ${product.qty>0 ? "bg-gold" : ""}`}
                onclick={addItem}
            >
                {product.name} {product.qty>0 ? `(${product.qty})` : ''}
            </button>
    }
}