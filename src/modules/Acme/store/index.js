import state from "@/modules/Acme/store/state.js";
import mutations from "@/modules/Acme/store/mutations.js";
import actions from "@/modules/Acme/store/actions.js";
import getters from "@/modules/Acme/store/getters.js";

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}