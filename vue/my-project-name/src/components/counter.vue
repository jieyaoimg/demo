<template>
  <div class="counter">
    <h1>{{msg}}</h1>
    <h3>{{$store.state.reNum}}</h3>
    <h4>555</h4>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    data () {
      return {
        msg: '欢迎光临'
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
