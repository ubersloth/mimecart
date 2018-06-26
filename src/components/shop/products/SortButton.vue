<template>
  <button :sort="'name'" class="btn btn-outline-secondary" :class="{ asc: asc, desc: desc }" @click="sortProducts(sort)">{{ caption }}</button> 
</template>

<style scoped>
.asc,.desc {
  font-weight: bold
}
.asc:after {
  content: ' ▴';
}

.desc:after {
  content: ' ▾';
  font-weight: bolder
}
</style>

<script>
import { mapActions, mapState } from 'vuex'
import { SORT_PRODUCTS } from '@/store/shop/actions.type'

export default {
  name: 'SortButton',
  props: {
    sort: String,
    caption: String
  },
  computed: {
    ...mapState({
      sortState: state => state.products.sort
    }),
    active () {
      return this.sortState.field === this.sort
    },
    asc () {
      return this.active && this.sortState.dir === 1
    },
    desc () {
      return this.active && this.sortState.dir === -1
    }
  },
  methods: mapActions({
    'sortProducts': SORT_PRODUCTS
  })
}
</script>
