import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);
const router = [
    {
        path: '/',
        // component: resolve => require(['@/views/login'], resolve),
        redirect: { name: 'login' }
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['@/views/login'], resolve),
        meta: {
            title: '登入页面',
            keepAlive: false
        }
    },
    {
        path: '/home',
        name: 'home',
        component: resolve => require(['@/views/home'], resolve),
        meta: {
            title: '首页',
            keepAlive: false
        }
    }
]
export default new vueRouter({
    routes: router
})