import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './shop/getters'
import products from './shop/modules/products'
import profile from './shop/modules/profile'
import shoppingCart from './shop/modules/shopping-cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  getters,
  mutations: {
    initializeStore (state) {
      if (localStorage.getItem('store')) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))))
      }
    }
  },
  modules: {
    products,
    profile,
    shoppingCart
  },
  strict: debug
})

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})

export default store
