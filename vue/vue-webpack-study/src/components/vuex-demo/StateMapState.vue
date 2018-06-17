<template>
  <div>
    <p>MapState:{{a}}</p>
    <p>MapState:{{b}}</p>
    <p>MapState:{{getc}}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MapState',
  data: function () {
    return {
      c: 3
    }
  },
  computed: {
    getc: function () { // 组件的私有计算属性
      return this.c + 100
    },
    ...mapState(['a', 'b'])// 对象展开运算符可以展开mapState辅助函数返回的对象的每一项
  }
}

</script>
<style scoped>

</style>
