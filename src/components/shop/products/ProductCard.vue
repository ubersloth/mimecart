<template>
  <div class="card">
    <b-carousel id="carousel1" controls indicators :interval="0" background="#ababab">
      <router-link :to="{ name: 'productdetails', params: { 'id': product.id } }">      
        <b-carousel-slide v-for="image in product.imageUrls" :key="image">
          <div slot="img" class="carousel-image" v-lazy:background-image="image"></div>
        </b-carousel-slide>
      </router-link>        
    </b-carousel>


    <div class="card-body">
      <h5 class="text-truncate" :title="product.name"><router-link class="card-title" :to="{ name: 'productdetails', params: { 'id': product.id } }">{{product.name}}</router-link></h5>
      <p class="card-text">{{product.price | formatMoney}} - Stock: {{product.inventory}}</p>
      <p class="product-short-desc">{{ product.shortDescription  }}</p>
      <AddToCart :product="product" />
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'
import Vue from 'vue'
import { Carousel } from 'bootstrap-vue/es/components'

Vue.use(Carousel)

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  components: { AddToCart, Carousel }
}
</script>

<style scoped>
  .product-short-desc {
    min-height: 4rem;
  }

  .card-title {
    color: #2b4060;
  }

  .carousel-image {
    background-size: cover;
    
  }

  @media screen and (max-width: 574px) {
    .carousel-image {
      height: 100vw;
      width: 100vw;
      background-size: cover;
    }    
  }

  @media screen and (min-width: 574px) {
    .carousel-image {
      height: 215px;
      width: 253px;
      background-position: center center
    }    
  }
</style>
