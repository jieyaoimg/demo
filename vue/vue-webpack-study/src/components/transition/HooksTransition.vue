<template>
  <div>
    <button v-on:click='show= !show'></button>
    <transition name="box"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-bind:css="false"
    >
      <div v-if="show" class="box"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HooksTransition',
  data () {
    return {
      show: false
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.width = '100px'
    },
    enter: function (el, done) {
      // VUE官方文档说在enter和leave钩子中回调函数done是必须的，否则，它们会被同步调用，过渡会立即完成。但是我测试发现done什么屁效果都没有
      // 这里把样式放在定时器里才会有过渡效果，否则不过渡而是直接渲染为300px。甚至在样式前面添加一句console.log(el.offsetWidth)也可以让过渡出现，日了狗！
      setTimeout(function () {
        el.style.width = '300px'
        el.style.transition = 'all 2s'
      }, 30)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 100px;
  height: 50px;
}
.box {
  width: 100px;
  height: 100px;
  background: #ddd;
  border: 2px solid #000;
}
</style>
