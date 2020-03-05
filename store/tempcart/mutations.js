/***
 * This file reacts as a guard to central store.
 * this file is responsible for modifing altering
 * and deleting data form store or more persisely 
 * state of tempcart and tempCartProductData.
 */

`use strict`;

export default {

    m_addSingleTempData (state, payload) {
        state.tempCartData.push(payload);
    },

    m_addMultipleTempData (state, payload) {
        // pushing multipal data one by one in tempCartData
        for (const item in payload) {
            state.tempCartData.push(payload[item]);
        }
    },


    m_addTempCartProductData (state, payload) {
        state.tempCartProductData = payload
    },

    m_updateProductQuantity (state, payload) {
        // Finding the index of the row in state
        const index_of_object_array = state.tempCartProductData.findIndex(
            index => index.productId == payload.productId
        );

        // Setting the quentity both state 
        state.tempCartData[index_of_object_array].qty = payload.quantity;
        state.tempCartProductData[index_of_object_array].qty = payload.quantity;
    },

    m_deleteTemporderRow (state, payload) {
        // Finding the index of the row in state
        const index_of_object_array = state.tempCartProductData.findIndex(
            index => index.productId == payload
        );

        // Finding and removing the row from state;
        state.tempCartData.splice(index_of_object_array, 1);
        state.tempCartProductData.splice(index_of_object_array, 1);
    },
}
