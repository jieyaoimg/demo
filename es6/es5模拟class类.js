function Person(name,age){
  this.name=name
  this.age=age
}
Person.prototype.showName=function(){
  return this.name
}
Person.prototype.showAge=function(){
  return this.age
}
const student=new Person('tom',20)
console.log(student.showName())
