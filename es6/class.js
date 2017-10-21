class Person {  //类名要大写
  constructor (name, age = 0) { //构造方法，通过new命令生成对象实例时，自动调用该方法，另外，在js中，方法的参数是可以设置默认值的，比如此处的age=0
    this.name = name
    this.age = age
  }
  showName () {
    console.log(this.name)
  }
}
const teacher = new Person('tom', 20)
teacher.showName()   //tom