/**
 * 写入流示例
 * Created by zhangpeng0913 on 2017/6/5.
 */
var fs = require("fs");
var data = '醉里挑灯看剑，梦回吹角连营';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
  console.log("写入完成。");
});

writerStream.on('error', function(err){
  console.log(err.stack);
});

console.log("程序执行完毕");
