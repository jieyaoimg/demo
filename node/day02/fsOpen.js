/**
 * Created by jieyao on 2017/6/12.
 */
const fs = require('fs');
const pat = __dirname+'\\buffer.js';
console.log(pat);
fs.open(pat,'r+',(err,fd)=>{
    fs.writeFile(fd,"哈哈哈",(err)=>{});
})














