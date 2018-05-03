import m from 'mithril';
import CartModel from '../../models/cart';
import {isBrowserMobile, textNumber} from '../../providers/helper';


export const Checkout = (vnode) => {
    const transaction = CartModel.current;
    const {id, items, summary} = transaction;
    
    const printReceipt = () => {
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
        const summaryQty = `;;QTY:;;${textNumber(summary.qty)}<br>`; 
        const summaryTotal = `;;QTY:;;${textNumber(summary.total)}<br>`; 

        var text = title;
        items.map(item => {
            text += `<left>${item.name}<br>
                    ;;${item.qty}x${textNumber(item.price)};;${textNumber(item.subtotal)}<br>`;
        });
        text += dline;
        text += summaryQty;
        text += summaryTotal;
        text += starLine;
        text += farewellText;
        console.log(text);
        var textEncoded = encodeURI(text);
        if (isBrowserMobile()) {
            window.location.href="intent://"+textEncoded+"#Intent;scheme=quickprinter;package=pe.diegoveloper.printerserverapp;end;";
        }
    }

    const checkOutAndPrint = () => {
        console.log("checkOut");
        if (CartModel.current.summary.qty>0) {
            const transaction = CartModel.checkOut();
            printReceipt();
            CartModel.new();
            // m.redraw();
            m.route.set("/");
            transaction
                .then(result => result)
                .catch(error => error);
        }
    }

    // payment calculation
    var cashReturn = 0;
    const calculatePayment = (value) => {
        cashReturn = value - summary.total;
    }
    return {
        view: () =>  (
            <div class="bg-near-white pt3 ph3 pb4">
                <div id="receipt-form-area" class="overflow-auto">
                    <legend class="dark-green baskerville i b underline f4 fw6 ph0 mh0">Checkout</legend>
                    <div class="cf mt3 mb2">
                        
                        <div class="fl w-50">
                            <label class="db fw6 lh-copy f6" for="email-address">Total</label>
                            <legend class="black-70 f3 fw6 ph0 mh0"> {textNumber(summary.total)}</legend>
                        </div>
                    </div>
                    <div class="cf db w-100">
                        <label class="db fw6 lh-copy f6" for="email-address">Cash</label>
                        <div>
                            <div class="dib fl w-50">
                                <input 
                                    class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="email-address"  id="email-address"
                                    oninput={m.withAttr("value", calculatePayment)}
                                />
                            </div>
                            <div class="dib fl w-50">
                                <button class="pv2 ph4">...</button>
                            </div>
                        </div>
                    </div>
                    <div class="cf mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Kembalian</label>
                        <legend class="black-70 f3 fw6 ph0 mh0"> {textNumber(cashReturn)}</legend>
                    </div> 
                </div>
                <div class="mt3">
                    <input 
                        class="b ph4 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Back" 
                        // onclick={}
                    />
                    <input 
                        class="b ph4 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Print" 
                        onclick={checkOutAndPrint}
                    />
                </div>
            </div>
        )
    }
}