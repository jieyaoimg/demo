/**
 * Created by jieyao on 2017/6/22.
 */
const express=require('express');
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/static'));
app.use((req,res,next)=>{
    console.log(req.body);
    next();
})
app.set('view engine','pug');
app.get('/news',(req,res)=>{
    res.render('news.pug');
})
app.listen('5454','127.0.0.1');








