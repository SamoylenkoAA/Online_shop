const initialState = {
    items: []
}

const cart = {
    state: {
        ...initialState
    },
    getters: {
        cart: state => state.items,
        has: state => (id) => state.items.some(item => item.id === id),
        countInCart: state => state.items.length
    },
    mutations: {
        addInCart(state, value) {
            state.items.push({
                id: value.id,
                cnt: 1,
                color: value.color || null,
                size: value.size || null
            })
        },
        removeInCart(state, value) {
           state.items = state.items.filter(item => item.id !== value)
        }
    }
}

export default cart;