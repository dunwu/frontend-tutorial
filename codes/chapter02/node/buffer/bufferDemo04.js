/**
 * 返回 JSON 对象
 * Created by Zhang Peng on 2017/6/5.
 */
var buf = new Buffer('goodbye');
var json = buf.toJSON(buf);
console.log(json);
