import {createStore} from "vuex";
import acme from "../modules/Acme/index";

const store = createStore({
    modules: {
        acme
    }
})

export default store
