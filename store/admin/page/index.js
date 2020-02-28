import Vue from 'vue';
export const state = () => ({
    pages: [],
});

export const mutations = {
    //setting all data for listing at first time
    setPageData (state, pageData) {
        state.pages = pageData
    },
    delApage (state, delId) {
        const index_of_object_array = state.pages.findIndex(index => index.pageId == delId);
        state.pages.splice(index_of_object_array, 1);
    },
    addpage (state, page) {
        state.pages.push(page);
    },
    editpage (state, page) {
        const index_of_object_array = state.pages.findIndex(index => index.pageId == page.pageId);
        Vue.set(state.pages, index_of_object_array, page)
    }
}

export const getters = {
    findPage: (state) => (id) => {
        return state.pages.find(pos => pos.pageId == id)
    }
}

// await this.$axios.get("/getpage")
//     .then(row => {
//         commit('setPageData', row.data);
//     })
//     .catch(err => {
//         console.log(err);
//     })
export const actions = {
    async getPageData ({ commit }) {
        const getdata = (await this.$axios.get("/getpage")).data;
        commit('setPageData', getdata);
    },
    async delpage ({ commit }, id) {
        const x = await this.$axios.delete("/delpage/" + id);
        commit('delApage', id);
        return 1;
    },
    async addpage ({ commit }, page) {
        const x = (await this.$axios.post("/addpage", page)).data;
        console.log("x==>", x);
        console.log("page==>", x);
        commit("addpage", x);
        return true;
    },
    async editpage ({ commit }, id) {
        const y = (await this.$axios.put("/putpage/" + id.id, id.data)).data;
        commit('editpage', y);
    }
}