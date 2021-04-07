import Vue from 'vue'
import Vuex from 'vuex'
import createdPersistedState from 'vuex-persistedstate';
import todo from './modules/todo';
import user from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        
    },
    mutations: {
        // 2. state 변경
        
    },
    actions: {
        // 1. 비동기 작업하여 서버 처리 후
        
    },
    getters: {
        
    },
    modules: {
        todo,
        user
    },
    plugins: [
        createdPersistedState({
            paths: ['todo', 'user']
        })
    ]
})
