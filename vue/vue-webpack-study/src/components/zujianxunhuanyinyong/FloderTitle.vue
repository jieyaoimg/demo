<template>
  <ul>
    <li v-for="i in parentFloder" v-bind:key="i.id">
      <h1>{{i.tit}}</h1>
      <FloderContent v-if="i.con" v-bind:parentFloderCon="i.con"></FloderContent>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'FloderTitle',
  data () {
    return {}
  },
  props: ['parentFloder'],
  components: {
  },
  beforeCreate: function () {
    this.$options.components.FloderContent = require('./FloderContent.vue').default // 测试了下，换成import()会报错
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
