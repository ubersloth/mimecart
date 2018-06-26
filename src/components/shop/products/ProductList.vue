<template>
  <div>
    <div class="row mb-2">
      <div class="col">
        <h3>Products</h3>
      </div>
      <div class="col-md-auto">        
        Sort by: 
        <SortButton sort="name" caption="Name"></SortButton>
        <SortButton sort="price" caption="Price"></SortButton>
        <SortButton sort="stock" caption="Stock"></SortButton>
      </div>
    </div>
    <div class="row mb-3" v-for="(row, index) in productRows" :key="index">
      <div class="col-sm-4" v-for="product in row" :key="product.id">
        <ProductCard class="mb-3" :product="product" track-by="id" />
      </div>
    </div>
  </div>
</template>

<script>
import chunk from 'chunk'
import ProductCard from './ProductCard'
import SortButton from './SortButton'
import { mapActions, mapState } from 'vuex'
import { GET_PRODUCTS } from '@/store/shop/actions.type'

export default {
  name: 'ProductList',
  computed: mapState({
    productRows: state => chunk(state.products.all, 3)
  }),
  methods: mapActions({
    getProducts: GET_PRODUCTS
  }),
  components: { ProductCard, SortButton },
  created () {
    this.getProducts()
  }
}
</script>
