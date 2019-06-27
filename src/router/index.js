import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);

const login = () => import('@/views/login');
const home = () => import('@/views/home');
const test = () => import('@/views/test');
const NotFound = () => import('@/components/notFound');

const router = [
    {
        path: '/',
        redirect: { name: 'login' }
    },
    {
        path: '/login',
        name: 'login',
        // component: resolve => require(['@/views/login'], resolve),
        component: login,
        meta: {
            title: '登入页面',
            keepAlive: false
        }
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            title: '首页',
            keepAlive: false
        }
    },
    {
        path: '/test',
        name: 'test',
        component: test,
        meta: {
            title: 'test',
            keepAlive: false
        }
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
]

export default new vueRouter({
    routes: router
})