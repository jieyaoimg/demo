<template>
  <div>
    <p>getterA:{{getterA}}</p>
    <p>getterB:{{getterB}}</p>
    <p>getterC:{{getterC(888)}}</p><!--调用的时候传个参数-->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GettersMapgetters',
  data: function () {
    return {
    }
  },
  computed: {
    // getterA () {
    //   return this.$store.getters.getterA
    // },
    // getterB () {
    //   return this.$store.getters.getterB
    // },
    ...mapGetters(['getterA', 'getterB', 'getterC'])// 利用mapGetters更简洁
  }
}
</script>
<style scoped>

</style>
