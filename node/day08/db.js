/**
 * Created by jieyao on 2017/7/15.
 */
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/jieyao',{useMongoClient: true});
const db=mongoose.connection;
db.on('open',()=>{
    console.log("sucess")
})
db.on('error',(err)=>{
    console.log("出错了")
})
var teacherSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number}
})
var teacher=mongoose.model('teac',teacherSchema);
module.exports=teacher;













