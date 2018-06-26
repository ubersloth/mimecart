<template>
  <button type="button" class="close"
    @click="removeFromCart(product)">
    &times;
  </button>
</template>

<script>
import { mapActions } from 'vuex'
import { REMOVE_FROM_CART } from '@/store/shop/actions.type'

export default {
  name: 'RemoveFromCart',
  props: {
    product: Object
  },
  methods: mapActions({
    'removeFromCart': REMOVE_FROM_CART
  })
}
</script>
