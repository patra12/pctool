`use strict`;

export const state = () =>({
    isSessionPrestnt:Boolean,
});

export const mutations = {
    setSession(state,sessionBool){
        state.commit(sessionBool)
    },
}