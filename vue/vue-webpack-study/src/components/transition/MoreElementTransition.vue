<template>
  <div>
    <button v-on:click='show=!show'>运动</button>
    <transition name="list"  mode="out-in">
      <ul class="list-news" v-if="show" key="hot">
        <li>床前明月光</li>
        <li>床前明月光</li>
      </ul>
      <ul class="list-news" v-else key='new'>
        <li>疑是地上霜</li>
        <li>疑是地上霜</li>
      </ul>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'MoreElementTransition',
  data: function () {
    return {
      show: true
    }
  }
}
</script>
<style scoped>
.list-news{position: absolute}
.list-news li {
  font: 16px/30px microsoft yahei;
  text-align: left;
}
.list-enter {
  transform: translate(0, 60px);
  opacity: 0;
}
.list-enter-to {
  transform: translate(0, 0);
  opacity: 1;
}
.list-enter-active,
.list-leave-active {
  transition: all .5s;
}
.list-leave-to {
  transform: translate(0, -60px);
  opacity: 0;
}
</style>
