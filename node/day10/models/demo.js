const mongoose=require('mongoose');
mongoose.Promise = global.Promise;   //这一句是用来兼容最新版本的mongoose不支持callback的语法
const db=mongoose.createConnection('mongodb://127.0.0.1:27017/demo')

const introSchema=new mongoose.Schema({    //子Schema
    hobby:{type:String},
    motto:{type:String}
});
const teacherSchema=new mongoose.Schema({    //父Schema
    name:{
        type:String,       //类型
        required:true,     //非空
    },
    age:Number,
    type:String,
    intro:[introSchema]   //Schema可以嵌套Schema，此处[]是一个数组，里面放入子Schema

})
teacherSchema.statics.findByName=function(name,callback){      //创建一个Schema的静态方法
   return this.find({"name":name},callback)       //根据type查找，callback参数有两个：err,result
}
teacherSchema.methods.findByAge=function(callback){          //创建一个Schema的实例方法
    return this.model('teacher').find({"age":this.age},callback)     //根据age查找，callback参数有两个：err,result
}
const teacher=db.model('teacher',teacherSchema);       //创建一个teacherSchema的model（模型）
const xiaoming=new teacher({        //创建一个teacher模型的实例（即entity实体）
    "name":"xiaoming",
    "age":29,
    "type":"后勤",
});
xiaoming.save();
xiaoming.findByAge(function (err,result) {   //实例调用了teacherSchema的实例方法，查找所有与hanmeimei自己年龄相同的老师。
    console.log(result);
})