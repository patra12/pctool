export const state = () => ({
    pages: [],
    // title: "",
    // menuTitle: "",
    // showTitle: "",
    // seoUrl: "",
    // pageDescription: "",
    // metaTitle: "",
    // metaKeyword: "",
    // metaDescription: "",
    // displayOrder: "",
    // status: "",
})

export const mutations = {
    // add(state, text) {
    //     state.list.push({
    //         text,
    //         done: false
    //     })
    // },
    // remove(state, { todo }) {
    //     state.list.splice(state.list.indexOf(todo), 1)
    // },
    // toggle(state, todo) {
    //     todo.done = !todo.done
    // },
    setPageData(state, pages) {
        state.pages = pages
    }
}

export const actions = {
    //get page data
    async getpage(context) {
        const page = (await this.$axios.get('/getcategory')).data;
        context.commit('stePageData', page);
    }
}