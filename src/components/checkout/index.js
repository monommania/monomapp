import m from 'mithril';
import CartModel from '../../models/cart';
import {isBrowserMobile} from '../../providers/helper';

const chekOutLine = (vnode) => {
    const Item = vnode.attrs.Item
    return {
        view: () => (
            <tr class="stripe-dark">
                <td style="font-size: 1.5rem" class="pv3 pa2 f6"> {Item.name} </td>
                <td class="pv3 pa2 f5"> {Item.qty}x {textNumber(Item.price)}  </td>
                <td class="pv3 pa2 f5 fw6 tr"> {textNumber(Item.subtotal)} </td>
            </tr>
        )
    }
}
export const Checkout = (vnode) => {
    const transaction = vnode.attrs.transaction;
    const printReceipt = (transaction) => {
        const {id, items, summary} = transaction;
        const line = "<line><br>";
        const dline = "<dline><br>";
        const endLine = "<br><cut>";
        const starLine = "<center>****************************<br>";
        const title = "<center><big>Daily Coffee.<br>" +
            starLine +
            "id: " + id + "<br>"
            "timestamp: " + (new Date()).toLocaleString() + "<br>" +
            line;
        const farewellText = "<center>We will always welcome you again!"
        const summaryQty = `;;QTY:;;${summary.qty}<br>`; 
        const summaryTotal = `;;QTY:;;${summary.total}<br>`; 

        var text = title;
        items.map(item => {
            text += `<left>${item.name}<br>
                    ;;${item.price}x${item.price};;${item.subtotal}<br>`;
        });
        text += dline;
        text += summaryQty;
        text += summaryTotal;
        text += starLine;
        text += farewellText;
        // var text = title +
        // "<left>Marlboro<br>" +
        // ";;2x50.000;;100.000<br>" +
        // "<left>Cappuchino<br>" +
        // ";;3x20.000;;50.000<br>" +
        // "<dline>" + "<br>" +
        // ";;QTY:;;5<br>"+
        // ";;TOTAL:;;150.000<br>"+
        // "<cut>";
        console.log(text);
        var textEncoded = encodeURI(text);
        if (isBrowserMobile()) {
            window.location.href="intent://"+textEncoded+"#Intent;scheme=quickprinter;package=pe.diegoveloper.printerserverapp;end;";
        }
    }
    return {
        view: () =>  
            <div class="bg-near-white pt3 ph3 pb4">
                <div id="receipt-form-area" class="overflow-auto">
                    <table class="f6 w-100 mw8 center" cellspacing="0">
                        <tbody class="lh-copy">
                            <Item Item={{name: "Quantity: "}}/>
                        </tbody>
                    </table>
                </div>
                <button onclick={printReceipt(transaction)}>
                    PRINT
                </button>
            </div>
    }
}