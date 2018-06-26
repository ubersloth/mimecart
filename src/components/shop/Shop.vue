<template>
  <div>
    <PageHeader />

    <div class="container">
      <div class="row mt-4">
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
        <div class="col-sm-3">
          <ShoppingCart />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import PageHeader from './../shared/PageHeader'
import ProductList from './products/ProductList'
import ShoppingCart from './shopping-cart/ShoppingCart'

export default {
  name: 'Shop',
  components: {
    PageHeader,
    ProductList,
    ShoppingCart
  }
}
</script>
