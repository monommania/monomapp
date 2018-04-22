import m from 'mithril';
import Languages from '../../../models/languages';
import CartModel from '../../../models/cart';
import ApplicationState from '../../../models/application';

const newTransaction = () => {
    CartModel.new();
    ApplicationState.showDialogNewTransaction = false;
};

const openPostponed = () => {
    CartModel.openFromPostponed();
    ApplicationState.showDialogNewTransaction = false;
}

const saveToPostponed = () => {
    CartModel.addToPostponed();
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