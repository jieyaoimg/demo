/**
 * Created by jieyao on 2017/7/7.
 */
const formidable = require('formidable');
const express=require('express');
const app=express();
const crypto=require('crypto');
const MD5=crypto.createHash('MD5');



app.listen(2000);
app.set('view engine','ejs');
app.get('/reg',(req,res,next)=>{
    res.render('reg');
    /*    const form=formidable.IncomingForm();
     form.parse(req,(err,fields,files)=>{

     })*/
})
app.post('/doReg',(req,res)=>{

})

