/************向前端返回一个html文件**************/
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    fs.readFile('./test.html',(err,data)=>{
        res.writeHead(200,{'Content-Type': 'text/html,charset:utf-8'});
        res.end(data);
        console.log(data);
    });
}).listen(8585,'127.0.0.2')
/************向前端返回一个html文件**************/
/************表单提交**************/

/************表单提交**************/




















