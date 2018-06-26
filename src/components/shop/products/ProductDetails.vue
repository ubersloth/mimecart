<template>
  <div>
    <router-link style="color:inherit" :to="{ name: 'home' }">      
      <h3 class="mb-3">&lt; Products</h3> 
    </router-link>
    <div class="card mr-5 mb-5">
      <b-carousel id="carousel1" controls indicators :interval="6000" img-width="800" img-height="680">
          <b-carousel-slide v-for="image in product.imageUrls" :img-src="image" :key="image">
          </b-carousel-slide>
      </b-carousel>
      <div class="card-body">
        <div class="container">
          <div class="row">
          <h5 class="card-title col-md-auto p-0">{{product.name}}</h5>
          <div class="card-title col-md-auto align-bottom"><h6 class="price-text align-text-bottom">{{product.price | formatMoney}}</h6></div>
          </div>
        </div>
        <p class="card-text pull-left"><small class="text-muted">{{product.inventory}} left in stock</small></p>
        <p class="card-text">{{product.longDescription}}</p>
        <div style="float:right">
          <AddToCart :product="product" />
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import AddToCart from './AddToCart'
import Vue from 'vue'
import { Carousel } from 'bootstrap-vue/es/components'
import { mapActions, mapState } from 'vuex'
import { GET_PRODUCTS } from '@/store/shop/actions.type'

Vue.use(Carousel)

export default {
  name: 'ProductDetails',
  props: {
    id: Number
  },
  computed: mapState({
    product: function (state) { return state.products.all.find(product => product.id === this.id) }
  }),
  methods: mapActions({
    getProducts: GET_PRODUCTS
  }),
  created () {
    this.getProducts()
  },
  components: { AddToCart }
}
</script>

<style scoped>
  .price-text {
    display: inline;
    color: maroon;
    font-weight: bold;
  }
</style>