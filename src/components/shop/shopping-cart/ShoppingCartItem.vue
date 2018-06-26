<template>
  <div class="media mb-3">
    <div class="media-left">
      <div class="media-object rounded product-icon" :style="`background-image:url(${item.imageUrls[0]})`"></div>
    </div>
    <div class="media-body ml-3">
      <strong class="d-block">{{item.name}}</strong>
      <span v-if="item.quantity > 1">{{item.price | formatMoney}} x {{item.quantity}} ({{item.price*item.quantity | formatMoney}})</span>
      <span v-else>{{item.price | formatMoney}}</span>
    </div>
    <div class="media-right align-middle">
      <RemoveFromCart :product="item" />
    </div>
  </div>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart'

export default {
  name: 'ShoppingCartItem',
  props: {
    item: Object
  },
  components: { RemoveFromCart }
}
</script>

<style scoped>
  .product-icon {
    height: 50px;
    width: 50px;
    background-size: cover
  }
</style>
