import {createStore} from "vuex";
import AcmeModule from "../modules/Acme/store/index";

const store = createStore({
    modules: {
        acme: AcmeModule
    }
})

export default store
