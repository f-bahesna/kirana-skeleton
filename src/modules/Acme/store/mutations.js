import * as types from "./mutation-types";

export default {
    [types.ADD_USER](state, item) {
        state.items.push(item);
    },

    [types.REMOVE_USER](state, id) {
        state.items = state.items.filter(item => item.id !== id);
    }
};