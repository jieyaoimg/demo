/**
 * Created by jieyao on 2017/6/10.
 */
const rl=require('readline');
require('events');
const rl1 = rl.createInterface(process.stdin, process.stdout);
const rl2 = rl.createInterface(process.stdin, process.stdout);
rl1.setPrompt(true);
rl1.prompt();
rl1.on('line', (input) => {
    console.log(`rl1接收到：${input}`);
});
rl2.on('line', (input) => {
    console.log(`rl2接收到：${input}`);
});


































