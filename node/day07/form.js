/**
 * Created by jieyao on 2017/6/29.
 */
const express=require('express');
const app=express();
const MongoClient=require('mongodb').MongoClient;
const formidable=require('formidable');
const url='mongodb://localhost:27017/teacher';


app.set('view engine','ejs');
app.use('/',(req,res)=>{
    const form=new formidable.IncomingForm();

})

app.listen(3000);