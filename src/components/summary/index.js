import m from 'mithril';
import CartModel from '../../models/cart';

const textTotal = (n) => {
    let result = n.toLocaleString();
    result = (navigator.language || navigator.userLanguage)==="id-ID" ?
        result.replace(",", ".") : result; 
    return result;
}
export const Total = (vnode) => {
    
    return {
        view: () =>
                <div class="w-20-ns w-40-m w-60 pr2 tc">
                    <button class="cf bg-gold mw5 fr-ns ba bw1 br-pill ml5-m mr2-m ph2 pv0 mt2-ns mt2-m mb2 fr dim pointer">
                        <p style="font-size: 1.5rem" class="f4-ns f4-m f5 fw6"> {textTotal(CartModel.current.summary.total)} </p>
                    </button>
                </div>
    }
}

export const Qty = (vnode) => {
    return {
        view: () => 
            <div class="fl w-20 tl pl3 nt2">
                <p> <span class="fl bg-gold pa3 f5 fw6 br4"> Qty: {CartModel.current.summary.qty} </span> </p>
            </div>
    }
} 
