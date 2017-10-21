/**
 * Created by jieyao on 2017/6/20.
 */
const express=require('express');
const app=express();
const http=require('http');

var html='';
http.get('http://www.baidu.com/',(res)=>{
    // console.log(res);
    res.on('data',(chunk)=>{
        html+=chunk;
    })
    res.on('end',()=>{
        console.log(html);
    })
}).end();




var router = express.Router();

router.param('user_id', function(req, res, next, id) {
    // sample user, would actually fetch from DB, etc...
    req.user = {
        id: id,
        name: 'TJ'
    };
    next();
});











