/*
 * @Description: Description
 * @Author: xwq
 * @Date: 2019-08-21 14:57:26
 */
import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);

const login = () => import('@/views/login');
const home = () => import('@/views/home');
const userRegister = () => import('@/views/userRegister');
const agreement = () => import('@/views/agreement');
const torch = () => import('@/views/torch');
const cityList = () => import('@/views/cityList');
const test = () => import('@/views/testComponents/test');
const touchMove = () => import('@/views/touchMove');
const notFound = () => import('@/components/notFound');

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
            title: '登入',
            keepAlive: false
        }
    },
    {
        path: '/userRegister',
        name: 'userRegister',
        component: userRegister,
        meta: {
            title: '用户注册',
            keepAlive: false
        }
    },
    {
        path: '/agreement',
        name: 'agreement',
        component: agreement,
        meta: {
            title: '协议内容',
            keepAlive: true
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
        path: '/cityList',
        name: 'cityList',
        component: cityList,
        meta: {
            title: '城市列表',
            keepAlive: false
        }
    },
    {
        path: '/torch',
        name: 'torch',
        component: torch,
        /* 路由独享守卫 */
        beforeEnter: (to, from, next) => {
            // console.log(to, from);
            next();
        },
        meta: {
            title: '热销商品',
            keepAlive: false
        }
    },
    {
        path: '/notFound',
        name: 'notFound',
        component: notFound,
        meta: {
            title: '页面丢失了',
            keepAlive: true,

        }
    },
    {
        path: '/test',
        name: 'test',
        component: test,
    },
    {
        path: '/touchMove',
        name: 'touchMove',
        component: touchMove,
    },
    {
        path: '*',
        redirect: { name: 'notFound' }
    }
];

export default new vueRouter({
    routes: router,
});