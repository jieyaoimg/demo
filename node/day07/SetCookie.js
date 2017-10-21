/**
 * Created by jieyao on 2017/6/29.
 */
const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const session=require('express-session');
app.use(session({
    name:'',
    secret: 'bbc',
    cookie: { path: '/', httpOnly: true,secure: false, maxAge:  60000 },
    resave: true,
    saveUninitialized: true
}));
app.get('/', function(req, res, next) {
    var sess = req.session;
    sess.face='heihei';
    console.log(sess);
    if (sess.views) {
        sess.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>欢迎第 ' + sess.views + '次访问       ' + 'expires in:' + (sess.cookie.maxAge / 1000) + 's</p>')
        res.end();
    } else {
        sess.views = 1
        res.end('welcome to the session demo. refresh!')
    }
});

app.use(cookieParser());
app.use('/',(req,res)=>{
    res.cookie('name','tom');
    res.cookie('age','99',{path:'/student'});
    res.send('你好');
    console.log(req.sessionID)
    console.log(req.session.cookie)
});
app.listen(2000);


