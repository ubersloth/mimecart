<template>
  <nav class="navbar navbar-light bg-light sticky-top">
    <div class="container">
      <a class="navbar-brand" href="/">Mimecart</a>

      <span class="navbar-text float-xs-right" v-show="fullName.length">
        Hello, <strong>{{fullName}}</strong>
      </span>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { GET_PROFILE } from '@/store/shop/actions.type'

export default {
  name: 'PageHeader',
  computed: mapGetters([
    'fullName'
  ]),
  methods: mapActions({
    getProfile: GET_PROFILE
  }),
  created () {
    this.getProfile()
  }
}
</script>
