<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Shop from '@/components/shop/Shop'

export default {
  name: 'App',
  components: {
    Shop
  }
}
</script>

<style>
</style>
