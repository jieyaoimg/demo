<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to='floder'>floder</router-link>
    <router-link to='Mixins01'>Mixins01</router-link>
    <router-link to='HooksTransition'>HooksTransition</router-link>
    <router-link to='StateMapState'>StateMapState</router-link>
    <router-link to='GettersMapgetters'>GettersMapgetters</router-link>
    <router-link to='MutationsMapmutations'>MutationsMapmutations</router-link>
    <router-link to='ActionsMapactions'>ActionsMapactions</router-link>
    <router-link to='StoreModulesDemo'>StoreModulesDemo</router-link>
    <transition name="fade">
      <keep-alive :include="['a']"><!--name为a的组件将会被缓存-->
        <router-view class="fade" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app a {
  padding: 5px 10px;
  border: 1px solid #ab0003;
  font: 16px/40px microsoft yahei;
}
.router-link-active {
  background: #ab0003;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 2s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
