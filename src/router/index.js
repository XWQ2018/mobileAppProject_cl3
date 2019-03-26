import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);
const router = [
    {
        path: '/',
        component: resolve => require(['@/views/login'], resolve),
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['@/views/login'], resolve),
    }
]
export default new vueRouter({
    routes: router
})