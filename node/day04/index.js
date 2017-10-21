/**
 * Created by jieyao on 2017/6/19.
 */
var express=require('express');
var index=express();
index.use(express.static('./pub'));
index.use((req,res)=>{
    console.log(req.originalUrl)
});
index.get('/name/:lucy/:lily', function (req, res) {
    res.send('Hello World!'+req.params['lucy']+req.params.lily);
});
index.engine('.html',require('ejs').renderFile);
index.set('view engine','html');
index.all('/news/', function (req, res) {
    res.render('index.html',{
        'news':['窗前明月光','阿法尔第三方','耳热二二而']
    });
});
index.listen(3000, '127.0.0.2');
