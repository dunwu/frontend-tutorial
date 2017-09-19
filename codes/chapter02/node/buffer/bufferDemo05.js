/**
 * 返回一个多个成员合并的新 Buffer 对象
 * Created by Zhang Peng on 2017/6/5.
 */
var buffer1 = new Buffer('Nothing is ');
var buffer2 = new Buffer('impossible');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
