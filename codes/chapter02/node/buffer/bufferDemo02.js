/**
 * buf.write 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
 * Created by Zhang Peng on 2017/6/5.
 */
var buf1 = new Buffer(10);
console.log("buf1 写入字节数: " + buf1.write("0123456789"));

var buf2 = new Buffer(5);
console.log("buf2 写入字节数: " + buf2.write("0123456789"));
