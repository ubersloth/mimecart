import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = 'http://localhost:3000/'
  },

  query (resource, params) {
    return Vue.axios
      .get(resource, params)
      .catch((error) => {
        throw new Error(`ApiService ${error}`)
      })
  },

  get (resource, id = '') {
    return Vue.axios
        .get(`${resource}/${id}`)
        .catch((error) => {
          throw new Error(`ApiService ${error}`)
        })
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  update (resource, id, params) {
    return Vue.axios.put(`${resource}/${id}`, params)
  },

  put (resource, params) {
    return Vue.axios
      .put(`${resource}`, params)
  },

  delete (resource) {
    return Vue.axios
      .delete(resource)
      .catch((error) => {
        throw new Error(`ApiService ${error}`)
      })
  }
}

export default ApiService

export const ProductsService = {
  query (params) {
    return ApiService
      .query('products', { params: params })
  },
  get (id = '') {
    return ApiService.get('products', id)
  }
}

export const ProfileService = {
  get () {
    return ApiService.get('profile')
  }
}
