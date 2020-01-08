import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './utils/request';
import Vconsole from 'vconsole';  //移动端log控制台输出测试插件
import './utils/androidBack'; //引入Hbuilder打包app监听物理键返回的处理方法
// import './utils/getGolacation'; //引入Hbuilder打包定位的处理方法
import 'amfe-flexible/index.js';
import Storage from 'vue-web-storage';
import {
    Cell,
    CellGroup,
    Button,
    Icon,
    Popup,
    Search,
    Dialog,
    Toast,
    Lazyload,
    Row,
    Col,
} from 'vant';

Vue.use(Cell)
    .use(CellGroup)
    .use(Button)
    .use(Icon)
    .use(Popup)
    .use(Search)
    .use(Dialog)
    .use(Toast)
    .use(Lazyload)
    .use(Row)
    .use(Col);

//实例化插件
const vConsole = new Vconsole();
Vue.use(vConsole);
//本地缓存插件
Vue.use(Storage, {
    prefix: 'APPInfo',// default `app_`
    drivers: ['session', 'local'], // default 'local'
});

Vue.prototype.$local = Vue.$localStorage;
Vue.prototype.$session = Vue.$sessionStorage;
//样式
import 'vant/lib/index.css';
import '@css/commonCss.css';
import '@css/reset.css';
import('vant/lib/icon/local.css');

Vue.config.productionTip = false;

if (process.env.NODE_ENV != 'production') {
    console.log(process.env);
}
router.beforeEach((to, from, next) => {

    const { path, query } = to;

    if (path == '/notFound') {
        return;
    }

    next();

});

new Vue({
    store,
    router,
    render: h => h(App),
    data() {
        return {

        };
    },
    created() {
        // eslint-disable-next-line no-console
        // console.log(777)
    },
    mounted() {
        // window.andriodApiFuc = andriodApi;
    }
}).$mount('#app');
