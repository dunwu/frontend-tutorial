/**
 * Created by Zhang Peng on 2017/6/16.
 */

// ES5
var name = 'frontend-tutorial';
var desc = 'react 技术栈教程';
var html1 = function (name, desc) {
  var tpl = 'name: ' + name + '\n' +
    'desc: ' + desc;
  return tpl;
};
console.log("html1:\n" + html1(name, desc));

// ES6
var html2 = `name: ${name}\ndesc: ${desc}`;
console.log("html2:\n" + html2);
