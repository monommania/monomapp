import m from 'mithril';

export const Item = (vnode) => {
    const Item = vnode.attrs.Item;
    return {
        view: () => 
            <tr class="stripe-dark">
                <td class="pa3"> {Item.name} </td>
                <td class="pa3"> {Item.qty}x {Item.price}  </td>
                <td class="pa3 tr"> {Item.subtotal} </td>
            </tr>
    }
}

