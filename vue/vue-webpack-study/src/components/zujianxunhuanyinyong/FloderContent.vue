<template>
  <ul>
    <li v-for="i in parentFloderCon" v-bind:key="i.id">
      <h1>{{i.tit}}</h1>
      <FloderTitle v-if="i.con"  v-bind:parentFloder="i.con"></FloderTitle>
    </li>
  </ul>
</template>

<script>
import FloderTitle from './FloderTitle.vue'
// import Vue from 'vue'
// const FloderTitle = Vue.component('FloderTitle', require('./FloderTitle.vue'))

export default {
  name: 'FloderContent',
  data () {
    return {
    }
  },
  props: ['parentFloderCon'],
  components: {
    FloderTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
