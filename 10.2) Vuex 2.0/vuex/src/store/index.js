import {createStore} from "vuex";
import counterModule from "@/store/modules/counter";

export default createStore({
    modules: {
        count: counterModule
    },
    state() {
        return {
            appTitle: 'Vuex Working!',
        }
    },
    getters: {
        uppercaseTitle(state) {
           return  state.appTitle.toUpperCase()
        }
    }
})
