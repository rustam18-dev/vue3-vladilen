export default {
    namespaced: true,
    state() {
        return {
            counter: 1
        }
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        add(state, payload) {
            state.counter += payload.value;
        }
    },
    actions: {
        incrementAsync({ commit }, payload) {
            setTimeout(() => {
                commit('add', payload)
            }, payload.delay);
        }
    },
    getters: {
        counter(state) {
            return state.counter
        },
        doubleCounter(_, getters, rootState, rootGetters) {
            // console.log(rootState.appTitle)
            // console.log(rootGetters["count/counter"])
            return getters.counter * 2;
        }
    },
}
