import { getProducts, getBrands } from '@/requests/requests'
const initialState = {
    items: [],
    items_brands: [{
        id: 0,
        title: 'All brands'
    }],
    items_variants: [],
    idBrand: null,
}

const products = {
    state: {
        ...initialState
    },
    getters: {
        all: state => state.items.filter(item => {
            if(!state.idBrand){
                return item
            }else if (state.idBrand && state.idBrand === item.brand){
                return item
            }
        }),
        brands: state => state.items_brands
    },
    mutations: {
        setProducts(state, value) {
            state.items = value
        },
        setBrands(state, value) {
            state.items_brands = [...state.items_brands, ...value]
        },
        setIdBrand(state, value) {
            state.idBrand = value
        }
    },
    actions: {
        loadingProducts({commit}) {
            getProducts().then(response => {
                console.log(response)
                commit('setProducts', response)
            })
        },
        loadingBrands({commit}) {
            getBrands().then(response => {
                commit('setBrands' , response)
            })
        }
    }
}

export default products