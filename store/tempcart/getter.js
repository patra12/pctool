/***
 * This file is responsible for
 * filtering or refining data from state data set
 * which are require for forntend or any process
 * for further refinement.
 */

`use strict`;
export default {

    G_tempOrderCount (state) {
        return state.tempCartData.length;
    },

    // Calculating total price
    G_tempOrderPrice (state) {
        let totalPriceTest = 0;
        const allTempdata = state.tempCartData
        for (let item in allTempdata) {
            totalPriceTest += (
                allTempdata[item].price * allTempdata[item].qty
            )
        }
        return totalPriceTest;
    },

    // Checking that same product is present in state or not
    G_checkProductInTempProduct (state) {
        return (id) => {
            const value = state.tempCartData.findIndex(
                index => index.productId == id
            );
            return (value == -1) ? false : true;
        }
    },

    // Returning row basedon product id
    G_gettingProductInTempProduct (state) {
        return (id) => {
            const value = state.tempCartData.findIndex(
                index => index.productId == id
            );
            if (value != -1) {
                console.info(state.tempCartData[value]);
                return state.tempCartData[value];
            }
        }
    }



}