import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        doneCount(state) {
            return state.count + 1;
        }
    },
    mutations: {
        setShopInfoHandle(state, val) {
            state.count = val;
        }
    },
    actions: {
        addFunc(context, val) {
            context.commit('setShopInfoHandle', val);
        }
    }
});
