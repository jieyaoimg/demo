<template>
  <div class="hello">
    <h1>
      <span class="iconfont icon-search"></span>{{ msg }}</h1>
    <h1>初始化需要加载的文件：</h1>
    <div>
      <p class="init-con border clearfix">
        <span>安装scss</span>
        <span>varibless.scss（scss变量）</span>
        <span>reset.css</span>
        <span>border.css（1px）</span>
        <span>fastclick（300毫秒延迟）</span>
        <span>iconfont（图标库）</span>
      </p>
    </div>
    <input type="text" value="请输入" />
    <Form01></Form01>
  </div>
</template>

<script>
import Form01 from './Form01.vue'

export default {
  name: 'HelloWorld',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {Form01}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/varibles.scss";
a {
  color: #42b983;
  color: $bgColor;
}
h1 {
  font: bold 20px/40px microsoft yahei;
}
.init-con {
  padding: 10px;
}
.init-con span {
  padding: 0 10px;
  margin: 5px 0;
  display: block;
  float: left;
  border-right: 1px solid #ab0003;
}
</style>
