import m from 'mithril';

export const NavBar = (vnode) => {
    const {backroute, title} = vnode.attrs;
    
    return {
        view: () => {
            return (
                <div class="cf w-100 ba b--light-silver shadow-3">
                    <div class="fl">
                        <button 
                            style="font-size: 1.5rem" class="dib bg-near-white pv2 ph4 f3 b bw0 shadow-1"
                            onclick={() => {m.route.set(backroute)}}
                        >
                            &#8592;
                        </button>
                    </div>
                    <div class="fl">
                        <legend class="ml3 pt3 b fl">
                            {title}
                        </legend>
                    </div>
                </div>
            );
        }
    }
}