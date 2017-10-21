/**
 * Created by jieyao on 2017/6/19.
 */
const express=require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','sta');
app.use('/list',express.static(__dirname+'/pub'));
app.all('/news/', function (req, res) {
    res.render('news',{
        'news':['窗前明月光','阿法尔第三方','耳热二二而']
    });
});
app.listen(2000, '127.0.0.2');















