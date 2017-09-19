/**
 * 创建目录
 * Created by Zhang Peng on 2017/6/5.
 */
var fs = require("fs");

console.log("创建目录 temp");
fs.mkdir("temp", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("目录创建成功。");
});
