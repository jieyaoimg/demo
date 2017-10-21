class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  showName () {
    return this.name
  }
  showAge () {
    return this.age
  }
}
class Student extends Person {  //通过extends继承
  constructor (name, age, weight) {
    super(name, age)     //此处相当于调用父类Person的constructor(name, age)，不然的话，子类的constructor会完全覆盖父类的constructor
    this.weight = weight
  }
  showWeight () {
    return this.weight
  }
}
const student01 = new Student('tom', 20, '60kg')
console.log(student01.showName())  //tom
console.log(student01.showAge())  //20
console.log(student01.showWeight())  //60kg