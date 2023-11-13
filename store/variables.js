const state = {
    amount: null
}

const mutations = {
    SET_AMOUNT(state, data) {
        state.amount = data
    }
}

export default {
    state,
    mutations
}