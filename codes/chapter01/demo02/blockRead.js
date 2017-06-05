/**
 * 阻塞式代码示例
 * Created by victor zhang on 2017/6/5.
 */
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束!");
