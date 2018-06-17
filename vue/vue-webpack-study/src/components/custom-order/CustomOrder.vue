<template>
  <div>
    <p v-border:a:b:c.x.y.y='{say:mes}'><input type="text" v-focus/></p>
    <!--这是一个对象字面量的值，mes是Vue实例的数据-->
    {{name}}:{{age}}
  </div>
</template>
<script>
import Vue from 'vue'
Vue.directive('focus', {
  inserted: function (el, arg) {
    el.focus()
  }
})

Vue.directive('border', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.style += ';border:3px solid #ddd; text-align:left; padding:10px;'
    el.innerHTML =
      'name: ' +
      s(binding.name) +
      '<br>' +
      'value: ' +
      s(binding.value) +
      '<br>' +
      'expression: ' +
      s(binding.expression) +
      '<br>' +
      'arg: ' +
      s(binding.arg) +
      '<br>' +
      'modifiers: ' +
      s(binding.modifiers) +
      '<br>' +
      'vnode keys: ' +
      Object.keys(vnode).join(', ')
  }
})
export default {
  name: 'CustomOrder',
  data: function () {
    return {
      mes: 'hello'
    }
  },
  props: ['name', 'age'],
  mounted: function () {
    console.log(this.$data.mes)
  }
}
</script>
<style scoped>
.router-link-active{border: 10px solid #ab0003;}

</style>
