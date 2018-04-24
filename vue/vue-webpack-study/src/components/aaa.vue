<template>
 <div>
   <p>{{msg}}</p>
   <div>
     <bbb></bbb>
   </div>
 </div>
</template>

<script>
export default {
  name: 'aaa',
  data () {
    return {
      msg: '一级标题',
      show: false
    }
  },
  components: {},
  methods: {
    toggle: function () {
      this.show = !this.show
    }
  },
  beforeCreate: function () {
    this.$options.components.bbb = require('./bbb.vue').default // 测试了下，换成import()会报错
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
