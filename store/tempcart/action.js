`use strict`;

export default {
    async addpage ({ commit }, page) {
        const x = (await this.$axios.post("/addProductId", page)).data;
        commit("m_addTempData", x);
        return true;
    },
};
