import m from 'mithril';
import Languages from '../../../models/languages';
import {Carts} from '../../../models/cart';
import ApplicationState from '../../../models/application';

const newTransaction = () => {
    Carts.new();
    ApplicationState.showDialogNewTransaction = false;
};

const openPostponed = () => {
    Carts.openFromPostponed();
    ApplicationState.showDialogNewTransaction = false;
}

const saveToPostponed = () => {
    Carts.addToPostponed();
    newTransaction();
}

export const DialogNewTransaction = (vnode) => {
    return {
        view: () =>
            <div class="cf bg-near-white tc">
                <button
                    onclick={newTransaction}
                >
                    {Languages.buttons.newTransaction}
                </button>
                <button
                    onclick = {saveToPostponed}
                >
                    {Languages.buttons.saveToPostponed}
                </button>
                <button
                    onclick = {openPostponed}
                >
                    {Languages.buttons.openFromPostponed}
                </button>        
            </div>
    }
}