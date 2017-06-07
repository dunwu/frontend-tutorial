/**
 * 拷贝缓冲区
 * Created by victor zhang on 2017/6/5.
 */
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 内容: " + buffer2.toString());
