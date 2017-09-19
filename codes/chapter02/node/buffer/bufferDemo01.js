/**
 * 创建缓存的三种方式
 * Created by Zhang Peng on 2017/6/5.
 */
var buf1 = new Buffer(10); // 创建指定长度的的 Buffer 实例
var buf2 = new Buffer([10, 20, 30, 40, 50]); // 通过给定的数组创建 Buffer 实例
var buf3 = new Buffer("How are you?", "utf-8"); // 通过一个字符串来创建 Buffer 实例
