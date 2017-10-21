/**
 * Created by jieyao on 2017/6/15.
 */
const http=require('http');
const fs=require('fs');
const  url=require('url');
const server=http.createServer((req,res)=>{
    fs.readFile('./test.html',(err,data)=>{
        res.writeHead(200,{'Content-Type': 'text/html,charset:utf-8'});
        res.end(data);
        console.log(data);
    });
}).listen(8585,'127.0.0.2');

const server2=http.createServer((req,res)=>{
    const getUrl=req.url;
    const objUrl=url.parse(getUrl,true);
    const name=objUrl.query.name;
    const age=objUrl.query.age;
    const boy=objUrl.query.boy;
    const girl=objUrl.query.girl;
    console.log('你已提交成功：'+name+age+boy+girl);
}).listen(8585,'127.0.0.3')
























