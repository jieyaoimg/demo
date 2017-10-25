<template>
  <div class="counter">
    <h1>{{ msg }}</h1>
    <div class="search"><input id="inputBookName" placeholder="请输入书名"/></div>
    <button @click="axiosTxt">点击</button>
    <ul ID="booklist" class="booklist">
    </ul>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data () {
    return {
      msg: '6666666666666'
    }
  },
  methods:{
    axiosTxt: function () {
      const oScript1 = document.createElement('script');
      oScript1.innerHTML= `fn=function(data){
        const getbooks=data.books
        let getUl=document.getElementById('booklist')
        let allLi=''
        getbooks.map(function(value){
          allLi+='<li><h3>'+value.title+'</h3><img width="105" height="140" src="'+value.image+'"/></li>'
        })
        getUl.innerHTML=allLi
      };`;
      const getBookName=document.getElementById('inputBookName').value;
      document.body.appendChild(oScript1);
      const oScript2 = document.createElement('script');
      oScript2.src = 'https://api.douban.com/v2/book/search?q='+getBookName+'&callback=fn';
      document.body.appendChild(oScript2);
    }
  }
}
</script>
<style>
  .search input{width:200px; height: 40px; margin:10px auto; font:20px/40px microsoft yahei;}
  button{width:200px; height: 60px; background: #00a0e9;font:24px/60px microsoft yahei; color: #fff; border: none; cursor:pointer}
  .booklist li{float: left; width: 105px; height: 180px; padding: 20px; overflow: hidden; border: 1px solid #ddd;}
  .booklist li h3{font:14px/20px microsoft yahei;}
</style>
