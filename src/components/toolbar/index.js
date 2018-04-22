import m from 'mithril';
import Languages from '../../models/languages';
import {Qty} from '../summary';
import {PickSearch} from '../search';
import CartModel from '../../models/cart';
import ApplicationState from '../../models/application';


const addItem = () => {
    const modal = document.getElementById("dialog-pick");
    modal.style.display = "block";
};

const newTransaction = () => {
    if (CartModel.summary.count()>0) {
        ApplicationState.showDialogNewTransaction = window.confirm(Languages.dialogs.newTransaction);
    } else {
        ApplicationState.showDialogNewTransaction = true;
    }
};

export const Toolbar = (vnode) => {
    return {
        view: () =>
            <div class="cf bg-near-white pt2">
                <Qty />
                <div class="fl w-50">
                    <button 
                        class="bg-gold black pv2 ph3 mt1 mr3 bw0 br-pill tc dim pointer fr"
                        onclick={addItem}
                    >
                        <span class="fw6"> &#10010; </span>
                    </button>
                    <button 
                        class="bg-gold black pv2 ph3 mt1 mr1 bw0 br-pill tc dim pointer fr"
                        onclick={newTransaction}
                    >
                        <span class="fw6"> &#9728; </span>
                    </button>
                </div>
                <PickSearch />
            </div>
    }
}