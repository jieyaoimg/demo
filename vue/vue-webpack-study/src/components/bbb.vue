<template>
<div>
  <p>{{ms}}</p>
  <div>
    <aaa></aaa>
  </div>
</div>

</template>

<script>
import Vue from 'vue'
const aaa = Vue.component('aaa', require('./aaa.vue'))
// import aaa from './aaa'

export default {
  name: 'bbb',
  data () {
    return {
      ms: '二级标题',
      show: false
    }
  },
  props: ['childtit'],
  methods: {
    toggle: function () {
      this.show = !this.show
    }
  },
  components: {
    aaa
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
