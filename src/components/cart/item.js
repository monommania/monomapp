import m from 'mithril';

export const Item = (vnode) => {
    const Item = vnode.attrs.Item;
    Item.sprice = Item.price.toLocaleString();
    Item.sprice = (navigator.language || navigator.userLanguage)==="id-ID" ?
        Item.sprice.replace(",", ".") : Item.sprice;
    
    Item.ssubtotal = Item.subtotal.toLocaleString();
    Item.ssubtotal = (navigator.language || navigator.userLanguage)==="id-ID" ?
        Item.ssubtotal.replace(",", ".") : Item.ssubtotal;    
    return {
        view: () => 
            <tr class="stripe-dark">
                <td style="font-size: 1.5rem" class="pv3 pa2 f6"> {Item.name} </td>
                <td class="pv3 pa2 f5"> {Item.qty}x {Item.sprice}  </td>
                <td class="pv3 pa2 f5 fw6 tr"> {Item.ssubtotal} </td>
            </tr>
    }
}

