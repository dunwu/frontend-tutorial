/**
 * 获取文件信息
 * Created by victor zhang on 2017/6/5.
 */
var fs = require("fs");

console.log("准备打开文件！");
fs.stat('input.txt', function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("读取文件信息成功！");

  // 检测文件类型
  console.log("是否为文件(isFile) ? " + stats.isFile());
  console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
});

