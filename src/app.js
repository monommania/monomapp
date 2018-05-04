import m from 'mithril';
import { Layout } from './components/layout';
import { Checkout } from './components/checkout';
import { Login } from './components/login';

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
})