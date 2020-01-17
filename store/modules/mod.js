export const state = () => ({
    counter: 3,
})

export const mutations = {
    add(state) {
        state.counter++;
    },
    sub(state) {
        if (state.counter != 3)
            state.counter--;
    }
}