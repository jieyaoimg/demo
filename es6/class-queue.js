class Queue{
  constructor(arr=[]){
    this.arr=[...arr]
  }
  shift(){
    this.arr.shift()
    return this.arr
  }
  push(a){
    this.arr.push(a)
    return this.arr
  }
}
const examp=new Queue([1,2,3])
console.log(examp.arr)
console.log(examp.shift())
console.log(examp.push(4))