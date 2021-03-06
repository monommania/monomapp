import m from 'mithril';
import {Total} from '../summary';

export const Header = (vnode) => {
    const {title, info} = vnode.attrs
    return {
        view: () => 
            <div class="cf bg-white black flex flex-wrap br2 br--top nt2-ns">
                <div class="w-40-ns w-100-m w-100 pt2-ns tl-ns tc-m tc">
                    <p style="font-size: 3rem" class="baskerville i dark-green f1-ns f1-m f4 pl3-ns lh-solid b"> {title}  &reg; </p>
                </div>
                <div class="w-40-ns w-60-m w-40 pa0-m pt3-ns pt3-m">
                    <p class="f3-ns f4-m f4 pl3 mr4-ns pt0-ns tr-ns tl-m tl"> {info} </p>
                </div>
                <Total />
            </div>
    }
}