<template>
  <div>
    <transition  appear appear-class="box-appear" appear-active-class="box-appear-active" appear-to-class="box-appear-to">
      <div class="box"></div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'AppearTransition'
}
</script>
<style scoped>
.box{width: 500px; height: 10px; background: #ab0003} /*过渡动画还没开始和过渡动画已经结束的状态*/
.box-appear{width: 100px; height: 100px; background: #000} /*过渡动画头部状态,.box-appear会覆盖.box默认样式*/
.box-appear-active{transition: all 2s} /*过渡动画过程*/
.box-appear-to{width: 500px; height: 10px; background: #ab0003;} /*过渡动画尾部状态*/
</style>
