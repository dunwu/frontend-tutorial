/**
 * 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同
 * Created by zhangpeng0913 on 2017/6/5.
 */
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);
if (result < 0) {
  console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
  console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
  console.log(buffer1 + " 在 " + buffer2 + "之后");
}
