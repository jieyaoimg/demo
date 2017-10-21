/**
 * Created by jieyao on 2017/6/28.
 */
const express=require('express');
const app=express();
const MongoClient=require('mongodb').MongoClient;
const url='mongodb://localhost:27017/teacher';

app.use('/',(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if(err){throw new error(err)}
        db.collection('teacher').updateMany({"name":"tom01"},{$set:{"work":"study"}},(er,result)=>{
            res.send(result);
        })
        db.collection('teacher').find({}).forEach((data)=>{
            console.log(data.age);
            db.close();
        })
    })
})


app.listen(3000);