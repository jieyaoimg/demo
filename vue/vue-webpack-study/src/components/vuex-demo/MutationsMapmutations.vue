<template>
  <div>
    <button v-on:click="sameAdd">sameAdd增加</button>
    <button v-on:click="add({num: 100})">add增加</button>
    <p>store-mutations: {{$store.state.a}}</p>
    <p>moduleA-mutations: {{$store.state.moduleA.a}}</p>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'MutationsMapmutations',
  data: function () {
    return {
    }
  },
  methods: {
    // 手写commit提交
    sameAdd: function () {
      this.$store.commit('add', {num: 2})
    },
    // mapMutations辅助函数提交
    ...mapMutations(['add'])
  }
}
</script>
<style scoped>

</style>
