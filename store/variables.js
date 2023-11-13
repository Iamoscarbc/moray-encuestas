const state = () => {
    return {
        amount: null,
        form: {
            name: '',
            lastNameP: '',
            lastNameM: '',
            birthdate: ''
        }
    }
}

const mutations = {
    SET_AMOUNT(state, data) {
        state.amount = data
    },
    SET_FORM(state, data) {
        state.form = data
    },
}

export default {
    state,
    mutations
}