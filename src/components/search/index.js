import m from 'mithril';
import ProductModel from '../../models/product';
import CartModel from '../../models/cart';
import { ItemButton } from './item-button';

export const PickSearch = () => {
    const closeModal = () => {
        const modal = document.getElementById("dialog-pick");
        modal.style.display = "none";
    };
    const ItemsMap = () => {
        return ProductModel.list.map((product, index) => {
            const item = CartModel.current.list.filter(item => item.id==product.id);
            item.length>0 ? product.qty = item[0].qty : product.qty = 0;
            return <ItemButton key={index} product={product}/>
        });
    };
    return {
        oncreate: () => {
            const modal = document.getElementById("dialog-pick");
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        },
        
        view: () => 
            <div id="dialog-pick" class="modal">
                <div class="modal-content">
                    <span onclick={closeModal} class="close">&times;</span>
                    <div>
                        { 
                            ItemsMap()
                        }
                    </div>
                </div>
            </div>
    }
}