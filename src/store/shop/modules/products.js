import { GET_PRODUCTS, SORT_PRODUCTS } from '@/store/shop/actions.type'
import { RECEIVE_PRODUCTS, CHANGE_PRODUCTS_ORDER, CART_ADD, CART_REMOVE } from '@/store/shop/mutations.type'
import { ProductsService } from '@/api/api.service'

const initialState = {
  all: [],
  sort: {
    field: 'name',
    dir: 1
  }
}

const sortFunctions = {
  name: (a, b) => a.name.localeCompare(b.name),
  price: (a, b) => a.price - b.price,
  stock: (a, b) => a.inventory - b.inventory
}

const actions = {
  [GET_PRODUCTS] ({ commit, state }, payload) {
    payload = payload || {}
    ProductsService.query({ '_sort': state.sort.field }).then(({ data }) => {
      commit(RECEIVE_PRODUCTS, data)
    })
  },

  [SORT_PRODUCTS] ({ commit }, sort) {
    commit(CHANGE_PRODUCTS_ORDER, sort)
  }
}

const mutations = {
  [RECEIVE_PRODUCTS] (state, products) {
    state.all = products
  },

  [CHANGE_PRODUCTS_ORDER] (state, sort) {
    state.sort.dir = state.sort.field === sort ? -state.sort.dir : initialState.sort.dir
    state.sort.field = sort
    const sortFunction = sortFunctions[sort] || (() => {})
    state.all.sort((a, b) => state.sort.dir * sortFunction(a, b))
  },

  [CART_ADD] (state, { productId, qty }) {
    const product = state.all
      .find(product => product.id === productId)
    product.inventory -= Math.min(qty, product.inventory)
  },

  [CART_REMOVE] (state, removedProduct) {
    state.all
      .find(product => product.id === removedProduct.id)
      .inventory += removedProduct.quantity
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
