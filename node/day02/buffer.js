const buf1 = Buffer.from('我不愿意');
console.log(buf1.byteLength);
console.log(buf1[11]);
const newBuf1 = buf1.write("9999", 2, 2, "utf-8");
console.log(newBuf1);  //返回length参数，即写入的字节数
console.log(buf1.toString()); //返回ab99efg













