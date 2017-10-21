/**
 * Created by jieyao on 2017/8/23.
 */
class student{
    age:number;
    name:string;
    printStudent(name:string,age:number){
        this.name=name;
        this.age=age;
        console.log(this.name+this.age)
    }
}