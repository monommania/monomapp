import Store from '../../models/store';
import {initCartService} from '../../models/cart';
import {initProductService} from '../../models/product';

const ApplicationState = {
    showDialogNewTransaction: false,
    applicationMode: "production",
    setApplicationMode: function(mode) {
        this.applicationMode = mode;
        if (mode === "production") {
            Store.id = "store-0000001";
            Store.name =  "Daily Coffeee Toraja";
        } else {
            Store.id = "store-0000000";
            Store.name= "Testing Mode"
        }
        initProductService();
        initCartService();
    },
    isLogin: false
}

export default ApplicationState;