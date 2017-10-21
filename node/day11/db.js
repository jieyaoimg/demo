/**
 * Created by jieyao on 2017/7/31.
 */
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/jieyao',{useMongoClient: true});   //新版本的mongoose需要加入{useMongoClient: true}
const db=mongoose.connection;

const phoneSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    brand:{
        type: String,
        required:true
    },
    price:{type:Number}
})
phoneSchema.statics.findByName=function(name,callback){      //创建一个Schema的静态方法
    return this.find({name:name},callback)       //根据type查找，callback参数有两个：err,result
}

const phone = db.model('phone', phoneSchema);
/*const oppo = new phone({
    name:'oppo r16',
    brand:'oppo',
    price:2999
})
oppo.save()*/
phone.findByName("oppo r11",function (err,result) {
    console.log(result[0].id)
})
phone.findByIdAndRemove('597fb060859538036c2ad6c2',function (err,result) {
    console.log(result.id)
})
