import m from 'mithril';

export const Item = (vnode) => {
    const Item = vnode.attrs.Item;
    
    const textNumber = (n) => {
        let result = n.toLocaleString();
        result = (navigator.language || navigator.userLanguage)==="id-ID" ?
            result.replace(",", ".") : result;    
        return result;
    }

    return {
        view: () => 
            <tr class="stripe-dark">
                <td style="font-size: 1.5rem" class="pv3 pa2 f6"> {Item.name} </td>
                <td class="pv3 pa2 f5"> {Item.qty}x {textNumber(Item.price)}  </td>
                <td class="pv3 pa2 f5 fw6 tr"> {textNumber(Item.subtotal)} </td>
            </tr>
    }
}

