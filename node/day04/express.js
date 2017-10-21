/**
 * Created by jieyao on 2017/6/19.
 */
const fs=require('fs');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    const filePath=req.originalUrl;
    fs.readFile(__dirname+filePath,(err, data)=>{
        if(err){
            next();
            return;
        }else {
            res.send(data.toString());
        }
    });
});
app.listen(4000,'127.0.1.2');

