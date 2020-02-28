`use strict`;

export default {
    m_addTempData (state, payload) {
        state.tempCartData.push(payload);
    }
}