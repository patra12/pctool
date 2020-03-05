/***
 * This file is the central data store 
 * from here data can be store retrive or modify 
 * via setter,getter and mutation 
 * not directly form the application.
 */


`use strict`;

import actions from "./action"
import mutations from "./mutations";
import getters from "./getter";

const state = () => ({

    // source form temp_order table form database.
    tempCartData: [],

    // temp_order and product table joined data.
    tempCartProductData: []
});



export default {
    namespace: true,
    state,
    mutations,
    getters,
    actions
}