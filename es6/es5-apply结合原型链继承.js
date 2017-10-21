//使用原型链继承，子类可以继承父类所有的属性和方法以及父类prototype上的属性和方法，但是，父类中的this始终是父类中的this,并没有因为继承而跟着变化，所有我们还需要用apply改变父类的this作用域
function Person(name,age){
  this.name=name
  this.age=age
  Person.prototype.showName=function(){ 
    return this.name  //this并不能被继承，需要通过apply设置成子类作用域
  }
  Person.prototype.show=function(){ 
    return 666    //这个方法没有用到this,所以即使没有apply,也可以直接被子类继承到。
  }
}
Person.prototype.showAge=function(){
  return this.age  //this并不能被继承，需要通过apply设置成子类作用域
}
function Student(name,age,weight){
  this.weight=weight
  Person.apply(this,arguments)   //apply()的第一个参数是一个对象或函数，即要把Prson类的作用域改变到这个对象，第二个参数是该对象的参数；该句的作用是把Person类的作用域（this指向）改变成Student类的；
}
Student.prototype=new Person()  //Student继承Person，这句是继承的关键
const student01=new Student('tom',20,'60kg')
console.log(student01.showName())  //tom
console.log(student01.showAge())   //20
console.log(student01.show())      //666