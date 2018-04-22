import m from 'mithril';
import CartModel from '../../models/cart';

export const Total = (vnode) => {
    return {
        view: () =>
                <div class="w-20-ns w-40-m w-60 pr2 tc">
                    <button class="cf bg-near-white mw5 fr-ns ba bw1 br-pill ml5-m mr2-m ph2 pv0 mt2-ns mt2-m mb2 fr dim pointer">
                        <p class="f4-ns f5-m f6 fw6"> {CartModel.summary.total()} </p>
                    </button>
                </div>
    }
}

export const Qty = (vnode) => {
    return {
        view: () => 
            <div class="fl w-50 tl pl3 nt2">
                <p> <span class="fl bg-gold pa2 f6 br4"> Qty: {CartModel.summary.count()} </span> </p>
            </div>
    }
} 
