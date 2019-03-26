import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import {
    Button,
    Icon,
    Popup,
    Search,
    Dialog,
    Toast,
    Lazyload,
} from 'vant'

Vue.use(Button).use(Icon).use(Popup).use(Search).use(Dialog).use(Toast).use(Lazyload);

//样式
import 'vant/lib/index.css';
//pxToRem
import './untils/pxToRem.js'
// console.log(Vue)

Vue.config.productionTip = false
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
