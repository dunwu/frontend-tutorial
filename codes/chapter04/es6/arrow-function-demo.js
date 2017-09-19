/**
 * 本例展示 arrow function（箭头函数）
 * Created by Zhang Peng on 2017/6/16.
 */

/*demo01*/
// ES5
function es5AddOne(i) {
  return i + 1;
}
// ES6
es6AddOne = (i) => i + 1;
console.log("es5AddOne(5) = " + es5AddOne(5));
console.log("es6AddOne(5) = " + es6AddOne(5));

/*demo02*/
// ES5
function es5Calc(x, y) {
  x++;
  y--;
  return x + y;
}
// ES6
// 如果方法较复杂，则需要用{}把代码包起来
es6Calc = (x, y) => {
  x++;
  y--;
  return x + y
};
console.log("es5Calc(3, 2) = " + es5Calc(3, 2));
console.log("es5Calc(3, 2) = " + es6Calc(3, 2));

/*demo03*/
/*
 注意：运行下面的代码会报错，这是因为setTimeout中的this指向的是全局对象。

 class Animal {
 constructor(){
 this.type = 'animal'
 }
 says(say){
 setTimeout(function(){
 console.log(this.type + ' says ' + say)
 }, 1000)
 }
 }
 var animal = new Animal();
 animal.says('hi');  //undefined says hi
 */

// ES5 解决方法1
class Animal1 {
  constructor() {
    this.type = 'animal'
  }

  says(say) {
    var self = this;
    setTimeout(function () {
      console.log(self.type + ' says ' + say)
    }, 1000)
  }
}
var animal1 = new Animal1();
animal1.says('hi');  //undefined says hi

// ES5 解决方法2
class Animal2 {
  constructor() {
    this.type = 'animal'
  }

  says(say) {
    setTimeout(function () {
      console.log(this.type + ' says ' + say)
    }.bind(this), 1000)
  }
}
var animal2 = new Animal2();
animal2.says('hi');  //undefined says hi

// ES6 解决方法
class Animal3 {
  constructor(){
    this.type = 'animal'
  }
  says(say){
    setTimeout( () => {
      console.log(this.type + ' says ' + say)
    }, 1000)
  }
}
let animal3 = new Animal3();
animal3.says('hi');  //animal says hi
