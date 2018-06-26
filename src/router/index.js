import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/components/shop/Shop'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/components/shop/products/ProductList')
        },
        {
          path: 'products/:id',
          name: 'productdetails',
          component: () => import('@/components/shop/products/ProductDetails'),
          props: (route) => { return { id: Number(route.params.id) } }
        }
      ]
    }
  ]
})
