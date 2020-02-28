`use strict`;

export default {
    async addTempdata ({ commit }, page) {
        const dbData = (await this.$axios.post("/addProductId", page)).data;
        commit("m_addTempData", dbData);
        return true;
    },
};
