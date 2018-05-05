import m from 'mithril';
import {NavBar} from '../navbar';
import {timeString, textNumber} from '../../providers/helper';
import TransactionModel from '../../models/transaction';


export const Transaction = (vnode) => {
    const transactions = TransactionModel.current;
    let totalQty = 0;
    let totalTotal = 0;
    const showDetail = (transaction) => {
        if (parseFloat  (transaction.summary.qty)>0) {
            m.route.set('/transaction-detail', transaction);
        };
    }
    return {
        view: () => {
            return (
                <div class = "f4">
                    <NavBar backroute={"/"} title="Daftar Transaksi"/>
                    {/* <Summary /> */}
                    <div class="pa4">
                        <div class="overflow-auto">
                            <table class="f6 w-100 mw8 center" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-white">Jam</th>
                                        <th class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-white">Items</th>
                                        <th class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-white tr">Quantity</th>
                                        <th class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-white tr">Total</th>
                                    </tr>
                                </thead>
                                <tbody class="lh-copy">
                                    {
                                        transactions.map((transaction, index) => {
                                            totalQty += parseFloat(transaction.summary.qty);
                                            totalTotal += parseFloat(transaction.summary.total);
                                            return (
                                                <tr 
                                                    class="hover-bg-light-silver hover-white pointer"
                                                    onclick={()=>{showDetail(transaction)}}
                                                >
                                                    <td key={index} class="f4 pv3 pr3 bb b--black-20">{ timeString(transaction.time) }</td>
                                                    <td key={index} class="f4 pv3 pr3 bb b--black-20">{transaction.items[0].name}, ...</td>
                                                    <td key={index} class="f4 pv3 pr3 bb b--black-20 tr">{transaction.summary.qty}</td>
                                                    <td key={index} class="f4 pv3 pr3 bb b--black-20 tr">{textNumber(transaction.summary.total)}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot class="lh-copy">
                                    <tr class="">
                                        <td class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-near-black white"></td>
                                        <td class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-near-black white">TOTAL</td>
                                        <td class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-near-black white tr">{totalQty}</td>
                                        <td class="f4 fw6 bb b--black-20 tl pb3 pr3 bg-near-black white tr">{textNumber(totalTotal)}</td>
                                    </tr>
                                </tfoot>
                            </table>    
                        </div>
                    </div>
                </div>
            );
        }
    }
}