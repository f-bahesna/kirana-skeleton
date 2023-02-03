import * as types from "./mutation-types";

export default {
    [types.FETCH_ACME](state, item) {
        state.acme.push(item);
    },

    [types.SET_ACME](state, acme){
        state.acme = acme
    }
};