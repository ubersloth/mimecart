import Vue from 'vue'
import accounting from 'accounting'
import pluralize from 'pluralize'
import store from './store'
import router from './router'

import VueLazyload from 'vue-lazyload'
import App from './components/App'
import ApiService from './api/api.service'

Vue.config.productionTip = false

Vue.filter('formatMoney', accounting.formatMoney)
Vue.filter('pluralize', pluralize)

ApiService.init()

Vue.use(VueLazyload, {
  preLoad: 2,
  loading: 'https://cdn-images-1.medium.com/max/1600/1*inYwyq37FdvRPLRphTqwBA.gif',
  error: 'https://cdn-images-1.medium.com/max/1600/1*inYwyq37FdvRPLRphTqwBA.gif',
  throttleWait: 1000,
  attempt: 10
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    this.$store.commit('initializeStore')
  }
})
