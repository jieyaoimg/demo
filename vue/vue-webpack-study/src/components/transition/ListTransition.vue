<template>
  <div class="add-comp">
    <input value="" type="text" id="studentInput" />
    <button v-on:click="addStudent">增加</button>
    <transition-group name="student-transition" tag="ul">
      <!--
        （1）:key不能是index,这是因为在for循环中每一项li标签结构都是相同的，由于虚拟DOM的diff机制，不管你删除哪个li,diff都认为只是数量的变化，
             最后反应到实体DOM上都是删除最后面的LI。
        （2）使用:key="item"的话，如果出现item内容完全一样的情况，那么又出现了类似（1）中使用index的情况，即最后反应到实体DOM上都是删除相同item中最后面的那个。
        （3）按说使用:key="item.id"才是最理想的，但是这里不知道为什么会报错。
      -->
      <li v-for="(item, index) in studentList" class="student-li" :key="item" v-on:click="delStudent(index)">
        <a>{{item}}</a>
        <span>X</span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'ListTransition',
  data () {
    return {
      studentList: ['111', '222', '333', '444'] // 存放学生的数组
    }
  },
  methods: {
    addStudent: function () { // 增加学生
      this.studentList.push(document.querySelector('#studentInput').value)
    },
    delStudent: function (index) { // 删除学生
      this.studentList.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  border: 10px solid #ddd;
  text-align: left;
}
ul .student-li{
  font: bold 20px/30px microsoft yahei;
  height: 30px;
  overflow: hidden;
  width: 100%;
}
ul span {
  float: right;
  color: #f00;
}
ul .student-transition-enter-active,
ul .student-transition-leave-active {
  transition: all 1s}
ul .student-transition-leave-active{
  position: absolute
}
ul .student-transition-enter,
ul .student-transition-leave-to {
  width: 0%;
}
ul .student-transition-move{
  transition: all 1s;
}
</style>
