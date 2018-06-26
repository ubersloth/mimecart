import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '@/store/shop/actions.type'
import { CART_ADD, CART_REMOVE, CART_CLEAR } from '@/store/shop/mutations.type'

const state = {
  added: []
}

const actions = {
  [ADD_TO_CART] ({ commit }, payload) {
    if (payload.product.inventory >= payload.qty && payload.qty > 0) {
      commit(CART_ADD, { productId: payload.product.id, qty: payload.qty })
    }
  },

  [REMOVE_FROM_CART] ({ commit }, product) {
    commit(CART_REMOVE, product)
  },

  [CLEAR_CART] ({ commit }) {
    commit(CART_CLEAR)
  }
}

const mutations = {
  [CART_ADD] (state, { productId, qty }) {
    const record = state.added.find(item => item.productId === productId)

    if (!record) {
      const item = {
        productId,
        qty
      }
      state.added.push(item)
    } else {
      record.qty += qty
    }
  },

  [CART_REMOVE] (state, item) {
    const index = state.added.findIndex(added => added.productId === item.id)
    state.added.splice(index, 1)
  },

  [CART_CLEAR] (state) {
    state.added = []
  }
}

export default {
  state,
  actions,
  mutations
}
