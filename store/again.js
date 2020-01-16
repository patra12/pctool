export const state = () => ({
    counter: 2,
    pagex: ''
})

export const mutations = {
    increment(state) {
        state.counter++;
    },
    decrement(state) {
        if (state.counter != 2)
            state.counter--;
    },
    setpage(state, pageData) {
        state.pagex = pageData;
    },
    delpage(state, givenId) {
        const indexas = state.pagex.findIndex(pos => pos.pageId === givenId)
        state.pagex.splice(indexas, 1);
        console.log(indexas);

    }
}
export const actions = {
    async getpageData({ commit }) {

        await this.$axios({
            method: "GET",
            url: "/getpage"
        })
            .then(row => {
                commit('setpage', row.data);

            })
            .catch(err => {
                console.log(err);
            })
    },
    async delete({ commit }, { id }) {
        console.log("/delpage/" + id);
        await this.$axios({
            method: "DELETE",
            url: "/delpage/" + id,
        })
            .then(res => {
                console.log('data deleted');
                commit('delpage', id);
            })
            .catch(err => {
                console.log(err);
            })
    }
}


