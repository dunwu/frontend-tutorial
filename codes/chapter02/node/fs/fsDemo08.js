/**
 * 删除文件
 * Created by victor zhang on 2017/6/5.
 */
var fs = require("fs");

console.log("准备删除文件！");
fs.unlink('input.txt', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("文件删除成功！");
});
