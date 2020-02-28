`use strict`;

import actions from "./action"
import mutations from "./mutations";

const state = () => ({
    tempCartData: []
});

export default {
    namespace: true,
    state,
    mutations,
    actions
}