<template>
  <div class="sticky-top">
    <h3 class="mb-3">Cart</h3>

    <ShoppingCartItem
      v-for="item in items"
      :item="item"
      :key="item.id" />

    <ShoppingCartSummary />

    <div class="mt-3 text-center">
      <button class="btn btn-success"
        @click="buy">
        Checkout
      </button>
    </div>
  </div>
</template>

<style scoped>
.sticky-top { top: 5em; }
</style>

<script>
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartSummary from './ShoppingCartSummary'
import { mapGetters, mapActions, mapState } from 'vuex'
import { CLEAR_CART } from '@/store/shop/actions.type'

export default {
  name: 'ShoppingCart',
  computed: {
    ...mapGetters({
      items: 'cartProducts',
      total: 'total'
    }),
    ...mapState({
      firstName: state => state.profile.data.firstName
    })
  },
  components: {
    ShoppingCartItem,
    ShoppingCartSummary
  },
  methods: {
    buy () {
      if (this.total === 0) {
        window.alert('Nothing to buy')
      } else {
        window.alert(`Thank you for your purchase, ${this.firstName}!`)
        this.clearCart()
      }
    },
    ...mapActions({
      'clearCart': CLEAR_CART
    })
  }
}
</script>
