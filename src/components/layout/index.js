import m from 'mithril';
import {Header} from '../header';
import {Toolbar} from '../toolbar';
import {DialogNewTransaction} from '../toolbar/dialog-new-transaction';
import {Cart} from '../cart';

import ApplicationState from '../../models/application';

export const Layout = () => {
    const title = 'Daily Coffee Toraja';
    const tgl = (new Date()).toDateString();
    const reloadMonomApp = () => {
        window.location.reload(true);
    }
    return {
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
                    <div class="fl w-30">
                        <button 
                            style="font-size: 1.5rem"
                            class="bg-black-90 white mt1 ml1 pv1 ph4 fw6 lh-copy bw0 br2 dim"
                            onclick={reloadMonomApp}
                        >
                            &#x267C;
                            {/* Reload */}
                        </button>
                    </div>
                    <div class="cf fl w-70 white pr3 f6 tr lh-copy">
                        <p>Powered by: <span class="i b"> MonommaniaPOS </span></p>
                    </div>
                </div>
            </div>
    }
}