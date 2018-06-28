<template>
  <div>
    <button v-on:click="moduleAAction01({num: 100})">+++++</button>
    <p>moduleA-actions: {{$store.state.moduleA.a}}</p>
    <p>store-actions: {{$store.state.a}}</p>
    <p>moduleB-state: {{$store.state.moduleB.a}}</p>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'StoreModulesDemo',
  data: function () {
    return {
    }
  },
  computed: {

  },
  activated () {
    console.log('如果你看到我，说明我被keep-alive缓存了')
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions({
      moduleAAction01: 'moduleA/moduleAAction01'// 路径格式
    })
  }
}
</script>
<style scoped>

</style>
