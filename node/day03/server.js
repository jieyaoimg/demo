/**
 * Created by jieyao on 2017/6/13.
 */
const hp=require("http");
const serv=hp.createServer();
serv.listen(8989,'localhost');
serv.on('request',(req,res)=>{
    console.log("欢迎访问");
    res.write("<h1>hello</h1>");
    res.end();

})


















