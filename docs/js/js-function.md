# JavaScript 函数

> **函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。**

## 函数定义

JavaScript 使用关键词 **function** 定义函数。

函数可以通过声明定义，也可以是一个表达式。

### 函数声明

函数就是包裹在花括号中的代码块，前面使用了关键词 `function` ，函数声明后不会立即执行，会在我们需要的时候调用到。

```
function functionName(params) {
  // 执行的代码
}
```

> 提示：
>
> JavaScript 对大小写敏感。关键词 `function` 必须是小写的，并且必须以与函数名称相同的大小写来调用函数。
>
> 分号是用来分隔可执行JavaScript语句。 由于函数声明不是一个可执行语句，所以不以分号结束。

### 函数表达式

JavaScript 函数可以通过一个表达式定义。

函数表达式可以存储在变量中：

实例

```
var x = function (a, b) {return a * b};
```

在函数表达式存储在变量后，变量也可作为一个函数使用：

实例

```
var x = function (a, b) {return a * b};
var z = x(4, 3);
```

以上函数实际上是一个 **匿名函数** (函数没有名称)。

函数存储在变量中，不需要函数名称，通常通过变量名来调用。

> 提示：上述函数以分号结尾，因为它是一个执行语句。

### 构造函数

在以上实例中，我们了解到函数通过关键字 **function** 定义。

函数同样可以通过内置的 JavaScript 函数构造器（Function()）定义。

实例

```
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
```

实际上，你不必使用构造函数。上面实例可以写成：

```
var myFunction = function (a, b) {return a * b}
var x = myFunction(4, 3);
```

> 提示：在 JavaScript 中，很多时候，你需要避免使用 **new** 关键字。

### 带有返回值的函数

有时，我们会希望函数将值返回调用它的地方。

通过使用 return 语句就可以实现。

在使用 return 语句时，函数会停止执行，并返回指定的值。

语法

```
function myFunction()
{
var x=5;
return x;
}
```

上面的函数会返回值 5。

注释：整个 JavaScript 并不会停止执行，仅仅是函数。JavaScript 将继续执行代码，从调用函数的地方。

函数调用将被返回值取代：

```
var myVar=myFunction();
```

myVar 变量的值是 5，也就是函数 "myFunction()" 所返回的值。

即使不把它保存为变量，您也可以使用返回值：

```
document.getElementById("demo").innerHTML=myFunction();
```

"demo" 元素的 innerHTML 将成为 5，也就是函数 "myFunction()" 所返回的值。

您可以使返回值基于传递到函数中的参数：

实例

计算两个数字的乘积，并返回结果：

```
function myFunction(a,b)
{
return a*b;
}

document.getElementById("demo").innerHTML=myFunction(4,3);
```

"demo" 元素的 innerHTML 将是：

```
12
```

在您仅仅希望退出函数时 ，也可使用 return 语句。返回值是可选的：

```
function myFunction(a,b)
{
if (a>b)
  {
  return;
  }
x=a+b
}
```

如果 a 大于 b，则上面的代码将退出函数，并不会计算 a 和 b 的总和。

## 函数调用

JavaScript 函数有 4 种调用方式。

每种方式的不同在于 **this** 的初始化。

### this 关键字

一般而言，在Javascript中，this指向函数执行时的当前对象。

> 注：注意 **this** 是保留关键字，你不能修改 **this** 的值。

### 作为一个函数调用

实例

```
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2);           // myFunction(10, 2) 返回 20
```

以上函数不属于任何对象。但是在 JavaScript 中它始终是默认的全局对象。

在 HTML 中默认的全局对象是 HTML 页面本身，所以函数是属于 HTML 页面。

在浏览器中的页面对象是浏览器窗口(window 对象)。以上函数会自动变为 window 对象的函数。

myFunction() 和 window.myFunction() 是一样的：

实例

```
function myFunction(a, b) {
    return a * b;
}
window.myFunction(10, 2);    // window.myFunction(10, 2) 返回 20
```

> 注：这是调用 JavaScript 函数常用的方法， 但不是良好的编程习惯。全局变量，方法或函数容易造成命名冲突的bug。

### 全局对象

当函数没有被自身的对象调用时， **this** 的值就会变成全局对象。

在 web 浏览器中全局对象是浏览器窗口（window 对象）。

该实例返回 **this** 的值是 window 对象:

实例

```
function myFunction() {
    return this;
}
myFunction();                // 返回 window 对象
```

> 注：函数作为全局对象调用，会使 **this** 的值成为全局对象。使用 window 对象作为一个变量容易造成程序崩溃。

### 函数作为方法调用

在 JavaScript 中你可以将函数定义为对象的方法。

以下实例创建了一个对象 (**myObject**), 对象有两个属性 (**firstName** 和 **lastName**), 及一个方法 (**fullName**):

实例

```
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();         // 返回 "John Doe"
```

**fullName** 方法是一个函数。函数属于对象。 **myObject** 是函数的所有者。

**this**对象，拥有 JavaScript 代码。实例中 **this** 的值为 **myObject** 对象。

测试一下！修改 **fullName** 方法并返回 **this** 值：

实例

```
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this;
    }
}
myObject.fullName();          // 返回 [object Object] (所有者对象)
```

> 注：函数作为对象方法调用，会使得 **this** 的值成为对象本身。

### 使用构造函数调用函数

如果函数调用前使用了 **new** 关键字, 则是调用了构造函数。

这看起来就像创建了新的函数，但实际上 JavaScript 函数是重新创建的对象：

实例

```
// 构造函数:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}

// This creates a new object
var x = new myFunction("John","Doe");
x.firstName;                             // 返回 "John"
```

构造函数的调用会创建一个新的对象。新对象会继承构造函数的属性和方法。

> 注：构造函数中 **this** 关键字没有任何的值。**this** 的值在函数调用时实例化对象(new object)时创建。

### 作为函数方法调用函数

在 JavaScript 中, 函数是对象。JavaScript 函数有它的属性和方法。

**call()** 和 **apply()** 是预定义的函数方法。 两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。

实例

```
function myFunction(a, b) {
    return a * b;
}
myFunction.call(myObject, 10, 2);      // 返回 20
```

实例

```
function myFunction(a, b) {
    return a * b;
}
myArray = [10,2];
myFunction.apply(myObject, myArray);   // 返回 20
```

两个方法都使用了对象本身作为第一个参数。 两者的区别在于第二个参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。

在 JavaScript 严格模式(strict mode)下, 在调用函数时第一个参数会成为 **this** 的值， 即使该参数不是一个对象。

在 JavaScript 非严格模式(non-strict mode)下, 如果第一个参数的值是 null 或 undefined, 它将使用全局对象替代。

> 注：通过 call() 或 apply() 方法你可以设置 **this** 的值, 且作为已存在对象的新方法调用。
>

### 自调用函数

函数表达式可以 "自调用"。

自调用表达式会自动调用。

如果表达式后面紧跟 () ，则会自动调用。

不能自调用声明的函数。

通过添加括号，来说明它是一个函数表达式：

```
(function () {
    var x = "Hello!!";      // 我将调用自己
})();
```

以上函数实际上是一个 **匿名自我调用的函数** (没有函数名)。

## 函数参数

在调用函数时，您可以向其传递值，这些值被称为参数。

这些参数可以在函数中使用。

您可以发送任意多的参数，由逗号 (,) 分隔：

```
myFunction(argument1,argument2)
```

当您声明函数时，请把参数作为变量来声明：

```
function myFunction(var1,var2)
{
这里是要执行的代码
}
```

变量和参数必须以一致的顺序出现。第一个变量就是第一个被传递的参数的给定的值，以此类推。

实例

```
<button onclick="myFunction('Bill Gates','CEO')">点击这里</button>

<script>
function myFunction(name,job)
{
alert("Welcome " + name + ", the " + job);
}
</script>
```

上面的函数会当按钮被点击时提示 "Welcome Bill Gates, the CEO"。

函数很灵活，您可以使用不同的参数来调用该函数，这样就会给出不同的消息：

实例

```
<button onclick="myFunction('Harry Potter','Wizard')">点击这里</button>
<button onclick="myFunction('Bob','Builder')">点击这里</button>
```

根据您点击的不同的按钮，上面的例子会提示 "Welcome Harry Potter, the Wizard" 或 "Welcome Bob, the Builder"。

JavaScript 函数对参数的值(arguments)没有进行任何的检查。

### 显式参数与隐藏参数

函数显式参数在函数定义时列出。

函数隐藏参数(arguments)在函数调用时传递给函数真正的值。

### 参数规则

JavaScript 函数定义时参数没有指定数据类型。

JavaScript 函数对隐藏参数(arguments)没有进行检测。

JavaScript 函数对隐藏参数(arguments)的个数没有进行检测。

### 默认参数

如果函数在调用时缺少参数，参数会默认设置为： **undefined**

有时这是可以接受的，但是建议最好为参数设置一个默认值：

```
function myFunction(x, y) {
    if (y === undefined) {
          y = 0;
    } 
}
```

或者，更简单的方式：

```
function myFunction(x, y) {
    y = y || 0;
}
```

### Arguments 对象

JavaScript 函数有个内置的对象 arguments 对象.

argument 对象包含了函数调用的参数数组。

通过这种方式你可以很方便的找到最后一个参数的值：

```
x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
  var i, max = arguments[0];
  if (arguments.length < 2) {
    return max;
  }

  for (i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
```

### 通过值传递参数

在函数中调用的参数是函数的参数。

如果函数修改参数的值，将不会修改参数的初始值（在函数外定义）。

**实例**

```
var x = 1;
// 通过值传递参数
function myFunction(x) {
    x++; //修改参数x的值，将不会修改在函数外定义的变量 x
    console.log(x);
}
myFunction(x); // 2
console.log(x); // 1
```

### 通过对象传递参数

在JavaScript中，可以引用对象的值。

因此我们在函数内部修改对象的属性就会修改其初始的值。

修改对象属性可作用于函数外部（全局变量）。

**实例**

```
var obj = {x:1};
// 通过对象传递参数
function myFunction(obj) {
    obj.x++; //修改参数对象obj.x的值，函数外定义的obj也将会被修改
    console.log(obj.x);
}
myFunction(obj); // 2
console.log(obj.x); // 2
```

## JavaScript 内嵌函数

所有函数都能访问全局变量。  

实际上，在 JavaScript 中，所有函数都能访问它们上一层的作用域。

JavaScript 支持嵌套函数。嵌套函数可以访问上一层的函数变量。

该实例中，内嵌函数 **plus()** 可以访问父函数的 **counter** 变量：

实例

```
function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();    
    return counter; 
}
```

如果我们能在外部访问 **plus()** 函数，这样就能解决计数器的困境。

我们同样需要确保 **counter = 0** 只执行一次。

**我们需要闭包。**

## JavaScript 闭包

还记得函数自我调用吗？该函数会做什么？

实例

```
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

// 计数器为 3
```

说明

变量 **add** 指定了函数自我调用的返回字值。

自我调用函数只执行一次。设置计数器为 0。并返回函数表达式。

add变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。

这个叫作 JavaScript **闭包。**它使得函数拥有私有变量变成可能。

计数器受匿名函数的作用域保护，只能通过 add 方法修改。

> 提示：闭包是可访问上一层函数作用域里变量的函数，即便上一层函数已经关闭。

