import m from 'mithril';
import { Layout } from './components/layout';
import { Checkout } from './components/checkout';

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
m.route(document.body, "/", {
    "/": App,
    "/checkout": Checkout,
})