import m from 'mithril';
import { Layout } from './components/layout';
import { Checkout } from './components/checkout';
import { Login } from './components/login';
import { Transaction } from './components/transaction';
import { TransactionDetail } from './components/transaction/detail';

const App = () => {
    return {
        view: () => 
            <div class="mw8 center">
                <Layout />
            </div>         
    };
};

const root = document.getElementById("root");

// m.mount(root, App);
m.route(document.body, "/login", {
    "/": App,
    "/login": Login,
    "/checkout": Checkout,
    "/transaction": Transaction,
    "/transaction-detail": TransactionDetail,
})