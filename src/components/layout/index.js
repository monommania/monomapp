import m from 'mithril';
import {Header} from '../header';
import {Toolbar} from '../toolbar';
import {DialogNewTransaction} from '../toolbar/dialog-new-transaction';
import {Cart} from '../cart';

import ApplicationState from '../../models/application';

export const Layout = () => {
    const title = "Daily Coffee";
    const tgl = (new Date()).toDateString();
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
                <div class="cf bg-black-70 white pr3 f6 tr lh-copy">
                    <p>Powered by: <span class="i b"> MonommaniaPOS </span></p>
                </div>
            </div>
    }
}