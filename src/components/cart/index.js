import m from 'mithril';
import { Item } from './item';
import CartModel from '../../models/cart';

export const Cart = () => {
    return {
        oninit: () => {
            // CartModel.new();
        },
        view: () =>  
            <div class="bg-near-white pt3 ph3 pb4">
                <div class="overflow-auto">
                    <table class="f6 w-100 mw8 center" cellspacing="0">
                        <tbody class="lh-copy">
                            { CartModel.current.items.map(item => <Item Item={item}/>) }
                        </tbody>
                    </table>
                </div>
            </div>
    }
}