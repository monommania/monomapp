import m from 'mithril';
import { Layout } from './components/layout';
import { Checkout } from './components/checkout';

const App = () => {
    const transaction = {
        id: "xxxxx",
        items: [
            {
                plu: "0001",
                name: "Marlboro",
                price: 50000,
                qty: 2,
                subtotal: 100000
            },
            {
                plu: "0002",
                name: "Sampoerna",
                price: 1500,
                qty: 3,
                subtotal: 4500
            }
        ],
        summary: {
            qty: 15,
            total: 10000
        }
    }
    return {
        view: () => 
            <div class="mw8 center">
                {/* <Layout /> */}
                <Checkout transaction={transaction}/>
            </div>         
    };
};

const root = document.getElementById("root");

m.mount(root, App);