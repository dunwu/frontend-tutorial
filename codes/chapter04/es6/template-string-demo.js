/**
 * Created by victor zhang on 2017/6/16.
 */

// ES5
var name = 'react-step-by-step';
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
