<template>
  <div>
    <button v-on:click='show= !show'></button>
    <transition name="box">
      <div v-if="show" class="box" >
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TransitinendAnimationend',
  data () {
    return {
      show: false
    }
  },
  updated: () => { // 注意这里我把事件监控器挂载在了updated钩子上，这不是固定的，具体挂载在哪里，要根据过渡动画的触发方式来决定，也有可能挂载在mounted/methods等
    if (document.querySelector('.box')) { // 由于过渡动画的DOM上有v-if指令，所以有时候页面上过渡动画的DOM并不存在，所以要判断一下，不然会报错
      document.querySelector('.box').addEventListener('animationend', function () {
        console.log('111')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{width: 100px; height: 50px;}
.box {
  width: 100px;
  height: 100px;
  background: #ddd;
}
.box-enter-to{
  background: #ab0003;
}
.box-enter-active {
  animation: box-move 2s;
  transition: all 1s;
}
@keyframes box-move {
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(200px, 200px);
  }
  50% {
    transform: translate(500px, 200px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
