import m from 'mithril';
import {Header} from '../header';
import {Toolbar} from '../toolbar';
import {DialogNewTransaction} from '../toolbar/dialog-new-transaction';
import {Cart} from '../cart';
import ApplicationState from '../../models/application';
import Store from '../../models/store';
import TransactionModel from '../../models/transaction';


export const Layout = () => {
    const title = Store.name;
    const tgl = (new Date()).toDateString();
    const reloadMonomApp = () => {
        window.location.reload(true);
    }
    const showTransaction = () => {
        // const date = (new Date("2018-05-05"));
        const date = (new Date());
        TransactionModel.fetchByDate(date).then(result => {
            m.route.set('/transaction');
        });
    }
    return {
        oninit: () => {
            const isLogin = ApplicationState.isLogin;
            if (!isLogin) m.route.set("/login");
        },
        view: () =>
            <div class="pa2 avenir">
                {/* Header */}
                <Header title={title} info={tgl}/>
                
                <hr style="border: 0;height: 2px;background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));"/>

                {/* Toolbar */}
                <Toolbar />

                {/* dialog */}
                {
                    ApplicationState.showDialogNewTransaction ?
                    <DialogNewTransaction /> : null
                }

                {/* content */}
                <Cart />
                
                {/* footer */}
                <div class="cf bg-black-80">
                    <div class="fl">
                        <button 
                            style="font-size: 1.5rem"
                            class="bg-black-90 white mt1 ml1 pv1 ph4 fw6 lh-copy bw0 br2 dim"
                            onclick={reloadMonomApp}
                        >
                            &#8635;
                            {/* Reload */}
                        </button>
                        <button 
                            style="font-size: 1.5rem"
                            class="bg-black-90 white mt1 ml1 pv1 ph4 fw6 lh-copy bw0 br2 dim"
                            onclick={showTransaction}
                        >
                            &#9636;
                        </button>
                    </div>
                    <div class="cf fr white pr3 f6 lh-copy">
                        <p class="tc">Powered by: <span class="i b"> MonommaniaPOS </span></p>
                    </div>
                </div>
            </div>
    }
}