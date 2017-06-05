/**
 * 剪切缓冲区
 * Created by zhangpeng0913 on 2017/6/5.
 */
var buffer1 = new Buffer('goodbye');
var buffer2 = buffer1.slice(0, 2);
console.log("buffer2 内容: " + buffer2.toString());
