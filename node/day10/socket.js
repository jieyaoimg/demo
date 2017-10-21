const fs = require('fs');
const express=require('express');
const app=express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
server.listen(3001,'127.0.0.3');

app.get("/socket",function (req,res) {
    if(req.url == "/socket"){
        fs.readFile("./socket.html",function(err,data){
            res.end(data);
        });
    }
})


io.on('connection', function(socket){
    socket.emit("serQue1","吃了么？");
    socket.emit("serQue2","吃的啥？");
    socket.on("webQue1",(mes)=>{
        console.log(mes);
        console.log("蜡笔小新！");
    });
});

