import m from 'mithril';
import { Layout } from './components/layout';

const App = () => {
    return {
        view: () => 
            <div class="mw8 center">
                <Layout />
            </div>         
    };
};

const root = document.getElementById("root");

m.mount(root, App)