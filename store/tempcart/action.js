/***
 * This file is for sending ajax request via axios
 * and commit modified or non modified data to mutation
 */

`use strict`;

export default {

    // inserting data to tempcart of current user session
    async addTempdata ({ commit }, page) {
        const dbData = (await this.$axios.post(
            "/addProductId", page
        )).data;
        commit("m_addSingleTempData", dbData);
        return true;
    },


    // Fetching inserted data of 
    // current user session to get total price and item selected 
    async getTempDataBySession ({ commit }, data) {
        const dataBySession = (await this.$axios.get(
            "/getTempDataBySession/" + data.sessionId
        )).data;
        commit("m_addMultipleTempData", dataBySession);
        return true;
    },


    // Fetching all product of current user session 
    async getTempOrderProductDataBySession ({ commit }, payload) {
        let tempProductData = (await this.$axios.get(
            `/getDataCartpage/${payload}`
        )).data;
        commit("m_addTempCartProductData", tempProductData);
    },


    // Update temp_cart quantity of product as user
    async updateProductQuantity ({ commit }, payload) {
        let updatedQuantity = (await this.$axios.put(
            "/updatequantity", payload
        )).data;

        if (updatedQuantity) {
            commit("m_updateProductQuantity", payload);
            return true;
        }
    },


    // Delete temp_cart row of product 
    async deleteTempOrder ({ commit }, payload) {
        let deleted = (await this.$axios.delete(
            `/delData/${payload}`,
        )).data;

        if (deleted) {
            commit("m_deleteTemporderRow", payload);
        }
    }

};
