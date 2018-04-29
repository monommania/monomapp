import m from 'mithril';
import Products from '../../models/product';
import CartModel from '../../models/cart';
import { ItemButton } from './item-button';

export const PickSearch = () => {
    const closeModal = () => {
        const modal = document.getElementById("dialog-pick");
        modal.style.display = "none";
    };
    const ItemsMap = () => {
        return Products.list.map((product, index) => {
            const item = CartModel.current.list.find(item => item.plu==product.plu);
            product.qty =  item ? item.qty : 0;
            return <ItemButton key={index} product={product}/>
        });
    };
    const updateData = (message, data) => {
        Products.fetchAll().then(function(result){
            console.log(message, data);
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
        oninit: () => {
            Products.fetchAll(updateData);
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