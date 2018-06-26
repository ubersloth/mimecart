<template>
  <ul class="list-group">
    <li class="list-group-item">
      Subtotal ({{itemsQuantity}} {{'item' | pluralize(itemsQuantity) }}): {{subtotal | formatMoney}}
    </li>

    <li class="list-group-item">
      Shipping:
      <span v-if="shipping > 0 || !itemsQuantity"> {{shipping | formatMoney}}</span>
      <em v-else> Free Shipping</em>
    </li>

    <li class="list-group-item">Taxes: {{taxes | formatMoney}}</li>

    <li class="list-group-item">
      <strong>Total:</strong>
      <strong> {{total | formatMoney}} </strong>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ShoppingCartSummary',
  computed: {
    ...mapGetters([
      'itemsQuantity',
      'subtotal',
      'taxes',
      'shipping',
      'total'
    ])
  }
}
</script>
