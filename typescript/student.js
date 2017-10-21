/**
 * Created by jieyao on 2017/8/23.
 */
var student = (function () {
    function student() {
    }
    student.prototype.printStudent = function (name, age) {
        this.name = name;
        this.age = age;
        console.log(this.name + this.age);
    };
    return student;
}());
//# sourceMappingURL=student.js.map