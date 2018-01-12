import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';//刷新保存状态

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({//配置vuex-persist
    storage: window.sessionStorage
});

export default new Vuex.Store({
    state: {
        loading: false,
        showBack: true,
        title: ''
    },
    mutations: {
        updateLoading(state, loading) {
            state.loading = loading
        },
        updateShowBack(state, showBack) {
            state.showBack = showBack
        },
        updateTitle(state, title) {
            state.title = title
        }
    },
    plugins: [vuexLocal.plugin]
})
