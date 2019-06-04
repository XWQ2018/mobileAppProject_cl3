import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './untils/request'
import Vconsole from 'vconsole';  //移动端log控制台输出测试插件
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
} from 'vant'

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

const vConsole = new Vconsole();
Vue.use(vConsole);
//样式
import 'vant/lib/index.css';
import '@css/commonCss.css';
//pxToRem
import 'amfe-flexible/index.js';
// import './untils/pxToRem.js'
// console.log(Vue)

Vue.config.productionTip = false

if (process.env.NODE_ENV != 'production') {
    // eslint-disable-next-line no-console
    console.log(process.env);
}

new Vue({
    store,
    router,
    render: h => h(App),
    data() {
        return {

        }
    },
    created() {
        // eslint-disable-next-line no-console
        console.log(777)
    },
    mounted() {

    }
}).$mount('#app')
