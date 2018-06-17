<template>
  <div>
    <button v-on:click='show= !show'></button>
    <transition name="box" duration='5000'>
      <!--过渡5s后结束，结束就是表示v-enter等标签移除-->
      <div v-if="show" class="box">
        <p></p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TransitinendDuration',
  data () {
    return {
      show: false
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
.box p {
  width: 50px;
  height: 50px;
  background: #fff;
}
.box-enter-to {
  width: 500px;
}
.box-enter-active {
  transition: all 1s;
}
.box-enter-to p {
  width: 500px;
}
.box-enter-active p {
  transition: all 5s;
}
</style>
