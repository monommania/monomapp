import m from 'mithril';
import ApplicationState from '../../models/application';
import ApplicationLocalStorage from '../../models/local-storage';

export const Login = () => {
    return {
        view: () => (
            <section class="ph3 ph5-ns pv5">
                <article class="mw8 center br2 pointer ba b--light-green">
                    <div class="dt-ns dt--fixed-ns w-100">
                    <div class="pa3 pa4-ns dtc-ns v-mid">
                        <div>
                        <h2 class="fw4 dark-green mt0 mb3"> Daily Coffee Point Of Sales </h2>
                        <p class="black-70 measure lh-copy mv0">
                            Untuk menginput transaksi klik <strong>Kasir</strong>. <br/>
                            Untuk mencoba aplikasi klik <strong>Test</strong>. <br/>
                        </p>
                        </div>
                    </div>
                    <div class="pa3 pa4-ns dtc-ns v-mid">
                        <a 
                            class="no-underline f6 tc db w-100 pv3 bg-animate bg-green hover-bg-dark-green white br2 pointer"
                            onclick={() => {
                                ApplicationState.setApplicationMode("production");
                                ApplicationState.isLogin = true;
                                m.route.set("/");
                            }}
                        >
                            Kasir
                        </a>
                        <a 
                            class="no-underline f6 tc db w-100 pv3 bg-animate bg-yellow hover-bg-gold black br2 pointer"
                            onclick={() => {
                                ApplicationState.setApplicationMode("test");
                                ApplicationState.isLogin = true;
                                m.route.set("/");
                            }}
                        >
                            Test
                        </a>
                    </div>
                    </div>
                </article>
            </section>
        )
    }
}