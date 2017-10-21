/**
 * Created by jieyao on 2017/6/9.
 */
require('../day01/2.js');
const path=require('path');
const dir=path.join('d:','www','node','.');
console.log(dir);
const dir2=path.dirname('d:/www/node');
console.log(dir2);
const dir3=path.basename('d:/www/node/day01/node.js','.css');
console.log(dir3);
//清空缓存：
for(let i in require.cache){
    delete  require.cache[i];
}
console.log(require.cache);
const objPath=path.resolve('../day01','','./day02/node01.js');
console.log(objPath);












