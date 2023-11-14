const state = () => {
    return {
        amount: null,
        quotas: null,
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
    SET_QUOTAS(state, data) {
        state.quotas = data
    },
    SET_FORM(state, data) {
        state.form = data
    },
    SET_BIRTHDATE(state, data) {
        state.form.birthdate = data
    }
}

export default {
    state,
    mutations
}