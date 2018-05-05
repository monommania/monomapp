import m from 'mithril';
import {NavBar} from '../navbar';
import {timeString, textNumber} from '../../providers/helper';

export const TransactionDetail = (vnode) => {
    const transaction = vnode.attrs;
    let Qty = transaction.summary.qty;
    let Total = transaction.summary.total;
    return {
        view: () => (
            <div>
                <NavBar backroute={"/transaction"} title="Detail Transaksi"/>
                <div>
                    <div class="w-100 mw8 center tl mt3">
                        <button class = "pa2 ph4">
                            PRINT
                        </button>
                    </div>
                    <div class="overflow-auto pa3">
                        <table class="f6 w-100 mw8 center" cellspacing="0">
                            <thead>
                                <tr>
                                    <th class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
                                    <th class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-white">Quantity</th>
                                    <th class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-white tr">Price</th>
                                    <th class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-white tr">SubTotal</th>
                                </tr>
                            </thead>
                            <tbody class="lh-copy">
                                {
                                    transaction.items.map((item, index) => {
                                        return (
                                            <tr>
                                                <td key={index} class="f4 pv3 pr3 bb b--black-20">{ item.name }</td>
                                                <td key={index} class="f4 pv3 pr3 bb b--black-20">{ item.qty }</td>
                                                <td key={index} class="f4 pv3 pr3 bb b--black-20 tr">{ textNumber(item.price) }</td>
                                                <td key={index} class="f4 pv3 pr3 bb b--black-20 tr">{textNumber(item.subtotal)}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot class="lh-copy">
                                <tr class="">
                                    <td class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-near-black white"></td>
                                    <td class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-near-black white">TOTAL</td>
                                    <td class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-near-black white tr">{Qty}</td>
                                    <td class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-near-black white tr">{textNumber(Total)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}