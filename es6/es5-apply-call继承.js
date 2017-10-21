//通过apply或call只是改变了父类的作用域（this指向），因此产生了类似继承的效果，用这种方法只能继承父类中this.xxx形式的属性和方法，而person.xxx这种是肯定继承不到的,并且,父类this.prototype上的属性方法也是继承不到的
function Person(name,age){
  this.name=name
  this.age=age
  this.showName=function(){
    return this.name
  }
  this.showAge=function(){
    return this.age
  }
}
function Student(name,age,weight){
  this.weight=weight
  this.showWeight=function(){
    return this.weight
  }
  Person.apply(this,arguments)  //apply()的第一个参数是一个对象或函数，即要把Prson类的作用域改变到这个对象，第二个参数是该对象的参数；该句的作用是把Person类的作用域（this指向）和参数改变成Student类的；
}
const student01=new Student('tom',20,'60kg')
console.log(student01.showName())    //tom
console.log(student01.showAge())     //20
console.log(student01.showWeight())  //60kg