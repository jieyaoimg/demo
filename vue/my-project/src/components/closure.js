//axios拦截器
axios.interceptors.request.use(function(){/*...*/});
//axios实例拦截器
var instance = axios.create();
instance.interceptors.request.use(function(){/*...*/});
//移除拦截器：
axios.interceptors.rquest.eject(myInterceptor);

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
    //在请求发送之前做一些事
    return config;
},function(error){
    //当出现请求错误是做一些事
    return Promise.reject(error);
});

//添加一个返回拦截器
axios.interceptors.response.use(function(response){
    //对返回的数据进行一些处理
    return response;
},function(error){
    //对返回的错误进行一些处理
    return Promise.reject(error);
});


axios.get('user/12345')
.catch(function(error){
    if(error.response){
        //存在请求，但是服务器的返回一个状态码
        //他们都在2xx之外
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }else{
        //一些错误是在设置请求时触发的
        console.log('Error',error.message);
    }
    console.log(error.config);
});

//使用qs库来格式化数据
import qs from 'qs'
axios.post('/foo', qs.stringify({'bar': 123}))
//使用URLSearchParams格式化数据（URLSearchParams是web的一个新API，有些浏览器不支持，需要安装一个polyfill：url-search-params）
var params = new URLSearchParams()
params.append('param1', 'value1')
params.append('param2', 'value2')
axios.post('/foo', params)

//使用node.js的querystring模块：
var querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({foo:'bar'}));
//使用qs库来格式化数据
import qs from 'qs'
axios.post('/foo', qs.stringify({'bar': 123}))

//发起 POST请求
axios({
    method:'post',//方法
    url:'/user/12345',//地址
    data:{//参数
        firstName:'Fred',
        lastName:'Flintstone'
    }
});


//发起一个get请求，参数为给定的ID
axios.get('/user?ID=1234')
.then(function(respone){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});
//发起一个post请求
axios.post('/user',{
    firstName:'friend',
    lastName:'Flintstone'
})
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});

//发起一个多重并发请求
function getUserAccount () {
  return axios.get('?counter')
}
function getUserPermissions () {
  return axios.get('?counter')
}
axios.all([getUserAccount(), getUserPermissions()])//axios.all()参数是一个数组，数组的每一项都是一个axios()或axios.get()之类的API,依次被遍历执行
  .then(axios.spread(function (res1, res2) { //对应axios.all()里数组的每一项，依次返回它们的response。spread中文翻译：传播
     console.log('res1:'+res1)
     console.log('res2:'+res2)
  }))


axios.get('/user/12345')
  .then(function(response){
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

const newAxios=axios.create({//创建一个axios实例，newAxios有了axios的一部分属性和方法
})
newAxios.get('?counter')
  .then(function (res) {
    console.log(res)
  })


//全局默认设置
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

//实例中自定义默认设置
var instance = axios.create({
    baseURL:'https://api.example.com'  //给实例一个默认设置
});
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;//改变实例的默认设置


var instance = axios.create(); //此处timeout优先级低
instance.defaults.timeout = 2500;//覆盖掉上一行的timeout，此处优先级中
instance.get('/longRequest',{////覆盖掉上一行的timeout，此处优先级高
    timeout:5000
});

//举个简单的例子，假设我们想让一个数组里的数值翻倍。
//用命令式编程风格实现，像下面这样：
var numbers = [1,2,3,4,5]
var doubled = []
for(var i = 0; i < numbers.length; i++) {
  var newNumber = numbers[i] * 2
  doubled.push(newNumber)
}
console.log(doubled) //=> [2,4,6,8,10]
//而使用声明式编程方法，我们可以用 Array.map 函数，像下面这样：
var numbers = [1,2,3,4,5]
var doubled = numbers.map(function(n) {
  return n * 2
})
console.log(doubled) //=> [2,4,6,8,10]


const pro=new Promise(function(resolv,reject){

})
pro.then(function(){

},function(){

})
//Promise.all用法
Promise
.all([runAsync1(), runAsync2(), runAsync3()])
.then(function(results){
    console.log(results);
});
//Promise.race、Promise.resolve、Promise.reject用法
const runAsync1=Promise.resolve(data)
const runAsync2=Promise.resolve(data)
const runAsync3=Promise.resolve(data)
Promise
.race([runAsync1(), runAsync2(), runAsync3()])
.then(function(results){
  console.log(results);
});

//




