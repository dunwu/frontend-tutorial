/**
 * Created by Zhang Peng on 2017/6/16.
 */
/*demo01*/
// ES5
var cat1 = 'ken';
var dog1 = 'lili';
var zoo1 = { cat1: cat1, dog1: dog1 };
console.log(zoo1);  //Object {cat1: "ken", dog1: "lili"}

// ES6
let cat2 = 'ken';
let dog2 = 'lili';
let zoo2 = { cat2, dog2 };
console.log(zoo2);  //Object {cat2: "ken", dog2: "lili"}
// ES6 反过来写
let dog3 = { type: 'animal', many: 2 };
let { type, many } = dog3;
console.log(type, many); //animal 2
