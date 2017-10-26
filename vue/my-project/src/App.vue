<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">首页</router-link>
    <li>
      <router-link to="/counter">counter</router-link>
    </li>
    <router-view></router-view>
    <h3></h3>
    <h4></h4>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  methods: {}
};
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
</style>
