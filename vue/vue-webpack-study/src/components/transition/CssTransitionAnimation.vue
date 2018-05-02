<template>
  <div>
    <button v-on:click='show= !show'></button>
    <transition name="box">
      <div v-if="show" class="box">
      </div>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'CssTransitionAnimation',
  data () {
    return {
      show: false
    }
  },
  methods: {
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
.box-enter-to,.box-leave{background: #000; width: 300px; height: 300px;}
.box-enter-active,.box-leave-active {
  animation: box-move 2s;
  transition: all 2s
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
