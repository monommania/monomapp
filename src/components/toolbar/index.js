import m from 'mithril';
import Languages from '../../models/languages';
import {Qty} from '../summary';
import {PickSearch} from '../search';
import {Carts} from '../../models/cart';
import ApplicationState from '../../models/application';
import { Checkout } from '../checkout';


const addItem = () => {
    const modal = document.getElementById("dialog-pick");
    modal.style.display = "block";
};

const newTransaction = () => {
    if (Carts.current.summary.qty>0) {
        ApplicationState.showDialogNewTransaction = window.confirm(Languages.dialogs.newTransaction);
    } else {
        ApplicationState.showDialogNewTransaction = true;
    }
};

const checkOut = () => {
    console.log("000 checkOut");
    if (Carts.current.summary.qty>0) {
        m.route.set("/checkout");
    }
}

export const Toolbar = (vnode) => {
    return {
        view: () =>
            <div class="cf bg-near-white pt2">
                <Qty />
                <div class="fl w-80">
                    <button 
                        class="bg-dark-green white pv3 w-30 mt1 mr3 bw0 br-pill tc dim pointer fr"
                        onclick={addItem}
                    >
                        <span style="font-size: 1.5rem" class="f5 fw6"> &#10010; </span>
                    </button>
                    <button 
                        class="bg-dark-green white pv3 w-30 mt1 mr1 bw0 br-pill tc dim pointer fr"
                        onclick={newTransaction}
                    >
                        <span style="font-size: 1.5rem" class="f5 fw6"> &#8709; </span>
                    </button>
                    <button 
                        class="bg-dark-green white pv3 w-30 mt1 mr1 bw0 br-pill tc dim pointer fr"
                        onclick={checkOut}
                    >
                        <span style="font-size: 1.5rem" class="f5 fw6"> $ </span>
                    </button>
                </div>
                <PickSearch />
            </div>
    }
}