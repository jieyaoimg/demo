/**
 * Created by jieyao on 2017/7/30.
 */
const express=require('express');
const app=express();

app.listen(3000,'127.0.0.1');
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.send('你好');
})