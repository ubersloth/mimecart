<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="form-group form-inline">
        <div class="col p-0">
          <input class="form-control" placeholder="Qty" v-model="qty">
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary"
            :disabled="!product.inventory || !qty"
            @click="addToCart({ product: product, qty: qty })">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-control {
  padding: 0.25rem;
  height: 100%;
  width: 3rem;
  float: left;
}
</style>

<script>
import { mapActions } from 'vuex'
import { ADD_TO_CART } from '@/store/shop/actions.type'

export default {
  name: 'AddToCart',
  props: {
    product: Object
  },
  data () {
    return {
      qty: 1
    }
  },
  watch: {
    qty: function (newValue) {
      newValue = Number(newValue)
      newValue = isNaN(newValue) ? 1 : newValue
      this.qty = newValue > this.product.inventory ? this.product.inventory : newValue
    }
  },
  methods: mapActions({
    'addToCart': ADD_TO_CART
  })
}
</script>
