<template>
  <div>
    <button v-on:click="sameAsynAdd">sameAsynAdd增加</button>
    <button v-on:click="asynAdd({num: 20})">asynAdd增加</button>
    <p>actions: {{$store.state.a}}</p>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'ActionsMapactions',
  data: function () {
    return {
    }
  },
  methods: {
    // 手写dispatch提交
    sameAsynAdd: function () {
      this.$store.dispatch('asynAdd', {num: 5})
    },
    // mapActions辅助函数提交
    ...mapActions(['asynAdd'])
  }
}
</script>
<style scoped>

</style>
