/**
 * 非阻塞式代码示例
 * Created by victor zhang on 2017/6/5.
 */
var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log("程序执行结束!");
