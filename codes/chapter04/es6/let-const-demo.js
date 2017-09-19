/**
 * Created by Zhang Peng on 2017/6/16.
 */

/*demo01*/
// ES5
var name1 = 'zach';
while (true) {
  var name1 = 'obama';
  console.log(name1);  //obama
  break
}
console.log(name1);  //obama

// ES6
let name2 = 'zach';
while (true) {
  let name2 = 'obama';
  console.log(name2);  //obama
  break
}
console.log(name2);  //zach

/*demo02*/
var arr1 = [];
for (var i = 0; i < 10; i++) {
  arr1[i] = function () {
    console.log(i);
  };
}
arr1[6](); // 10

var arr2 = [];
for (let i = 0; i < 10; i++) {
  arr2[i] = function () {
    console.log(i);
  };
}
arr2[6](); // 6

/*demo03*/
const PI = Math.PI;
// PI = 23; //Module build failed: SyntaxError: /es6/app.js: "PI" is read-only
console.log("PI = " + PI);
