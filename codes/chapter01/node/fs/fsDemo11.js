/**
 * 删除目录
 * Created by victor zhang on 2017/6/5.
 */
var fs = require("fs");
// 执行前创建一个空的 temp 目录
console.log("准备删除目录 temp");
fs.rmdir("temp", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("读取 temp 目录");
  fs.readdir("temp", function (err, files) {
    if (err) {
      return console.error(err);
    }
    files.forEach(function (file) {
      console.log(file);
    });
  });
});
