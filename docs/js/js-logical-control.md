# JavaScript 逻辑控制

## 条件语句

> **条件语句用于基于不同的条件来执行不同的动作。**
>

通常在写代码时，您总是需要为不同的决定来执行不同的动作。您可以在代码中使用条件语句来完成该任务。

在 JavaScript 中，我们可使用以下条件语句：

- **if 语句** - 只有当指定条件为 true 时，使用该语句来执行代码
- **if...else 语句** - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
- **if...else if....else 语句** - 使用该语句来选择多个代码块之一来执行
- **switch 语句** - 使用该语句来选择多个代码块之一来执行

### if 语句

只有当指定条件为 true 时，该语句才会执行代码。

**语法**

```javascript
if (condition) {
  // 只有当条件为 true 时执行的代码
}
```

> 注意：请使用小写的 if。使用大写字母（IF）会生成 JavaScript 错误！
>

**实例**

当时间小于 20:00 时，生成一个“Good day”问候：

```javascript
if (time < 20) {
  x = "Good day";
}
```

x 的结果是：

```
Good day
```

请注意，在这个语法中，没有 ..else..。您已经告诉浏览器只有在指定条件为 true 时才执行代码。

### if...else 语句

请使用 if....else 语句在条件为 true 时执行代码，在条件为 false 时执行其他代码。

语法

```javascript
if (condition) {
  // 当条件为 true 时执行的代码
} else {
  // 当条件不为 true 时执行的代码
}
```

实例

当时间小于 20:00 时，将得到问候 "Good day"，否则将得到问候 "Good evening"。

```javascript
if (time < 20) {
  x = "Good day";
}
else {
  x = "Good evening";
}
```

x 的结果是：

```
Good day
```

### if...else if...else 语句

使用 if....else if...else 语句来选择多个代码块之一来执行。

语法

```javascript
if (condition1) {
  // 当条件 1 为 true 时执行的代码
}
else if (condition2) {
  // 当条件 2 为 true 时执行的代码
}
else {
  // 当条件 1 和 条件 2 都不为 true 时执行的代码
}
```

实例

如果时间小于 10:00，则将发送问候 "Good morning"，否则如果时间小于 20:00，则发送问候 "Good day"，否则发送问候 "Good evening"：

```javascript
if (time < 10) {
  x = "Good morning";
}
else if (time < 20) {
  x = "Good day";
}
else {
  x = "Good evening";
}
```

x 的结果是：

```
Good day
```

### swich

**switch 语句用于基于不同的条件来执行不同的动作。**

请使用 switch 语句来选择要执行的多个代码块之一。

**语法**

```javascript
switch (n) {
  case 1:
    // 执行代码块 1
    break;
  case 2:
    // 执行代码块 2
    break;
  default:
  // n 与 case 1 和 case 2 不同时执行的代码
}
```

工作原理：首先设置表达式 n（通常是一个变量）。随后表达式的值会与结构中的每个 case 的值做比较。如果存在匹配，则与该 case 关联的代码块会被执行。请使用 *break* 来阻止代码自动地向下一个 case 运行。

**实例**

显示今日的周名称。请注意 Sunday=0, Monday=1, Tuesday=2, 等等：

```javascript
var day = new Date().getDay();
switch (day) {
  case 0:
    x = "Today it's Sunday";
    break;
  case 1:
    x = "Today it's Monday";
    break;
  case 2:
    x = "Today it's Tuesday";
    break;
  case 3:
    x = "Today it's Wednesday";
    break;
  case 4:
    x = "Today it's Thursday";
    break;
  case 5:
    x = "Today it's Friday";
    break;
  case 6:
    x = "Today it's Saturday";
    break;
}
```

x 的结果：

```
Today it's Wednesday
```

#### default 关键词

请使用 default 关键词来规定匹配不存在时做的事情：

**实例**

如果今天不是周六或周日，则会输出默认的消息：

```javascript
var day = new Date().getDay();
switch (day) {
  case 6:
    x = "Today it's Saturday";
    break;
  case 0:
    x = "Today it's Sunday";
    break;
  default:
    x = "Looking forward to the Weekend";
}
```

x 的结果：

```
Looking forward to the Weekend
```

## 循环语句

**循环可以将代码块执行指定的次数。**

如果您希望一遍又一遍地运行相同的代码，并且每次的值都不同，那么使用循环是很方便的。

我们可以这样输出数组的值：

```javascript
document.write(cars[0] + "<br>");
document.write(cars[1] + "<br>");
document.write(cars[2] + "<br>");
document.write(cars[3] + "<br>");
document.write(cars[4] + "<br>");
document.write(cars[5] + "<br>");
```

不过通常我们这样写：

```javascript
for (var i = 0; i < cars.length; i++) {
  document.write(cars[i] + "<br>");
}
```

JavaScript 支持不同类型的循环：

- *for* - 循环代码块一定的次数
- *for/in* - 循环遍历对象的属性
- *while* - 当指定的条件为 true 时循环指定的代码块
- *do/while* - 同样当指定的条件为 true 时循环指定的代码块

### for 循环

for 循环是您在希望创建循环时常会用到的工具。

下面是 for 循环的语法：

```javascript
for (语句 1; 语句 2; 语句 3) {
  // 被执行的代码块
}
```

*语句 1* 在循环（代码块）开始前执行

*语句 2* 定义运行循环（代码块）的条件

*语句 3* 在循环（代码块）已被执行之后执行

**实例**

```javascript
for (var i = 0; i < 5; i++) {
  x = x + "The number is " + i + "<br>";
}
```

从上面的例子中，您可以看到：

Statement 1 在循环开始之前设置变量 (var i=0)。

Statement 2 定义循环运行的条件（i 必须小于 5）。

Statement 3 在每次代码块已被执行后增加一个值 (i++)。

- **语句 1**

通常我们会使用语句 1 初始化循环中所用的变量 (var i=0)。

语句 1 是可选的，也就是说不使用语句 1 也可以。

您可以在语句 1 中初始化任意（或者多个）值：

**实例:**

```javascript
for (var i = 0, len = cars.length; i < len; i++) {
  document.write(cars[i] + "<br>");
}
```

同时您还可以省略语句 1（比如在循环开始前已经设置了值时）：

**实例:**

```javascript
var i = 2, len = cars.length;
for (; i < len; i++) {
  document.write(cars[i] + "<br>");
}
```

- **语句 2**

通常语句 2 用于评估初始变量的条件。

语句 2 同样是可选的。

如果语句 2 返回 true，则循环再次开始，如果返回 false，则循环将结束。

提示：如果您省略了语句 2，那么必须在循环内提供 *break*。否则循环就无法停下来。这样有可能令浏览器崩溃。请在本教程稍后的章节阅读有关 break 的内容。

- **语句 3**

通常语句 3 会增加初始变量的值。

语句 3 也是可选的。

语句 3 有多种用法。增量可以是负数 (i--)，或者更大 (i=i+15)。

语句 3 也可以省略（比如当循环内部有相应的代码时）：

**实例:**

```javascript
var i = 0, len = cars.length;
for (; i < len;) {
  document.write(cars[i] + "<br>");
  i++;
}
```

### for/in 循环

JavaScript for/in 语句循环遍历对象的属性：

**实例**

```javascript
var person = {fname: "John", lname: "Doe", age: 25};
for (x in person) {
  txt = txt + person[x];
}
```

您将在有关 JavaScript 对象的章节学到更多有关 for / in 循环的知识。

### while 循环

**只要指定条件为 true，循环就可以一直执行代码。**

While 循环会在指定条件为真时循环执行代码块。

**语法**

```javascript
while (condition) {
  // 需要执行的代码
}
```

**实例**

本例中的循环将继续运行，只要变量 i 小于 5：

```javascript
while (i < 5) {
  x = x + "The number is " + i + "<br>";
  i++;
}
```

提示：如果您忘记增加条件中所用变量的值，该循环永远不会结束。该可能导致浏览器崩溃。

### do/while 循环

do/while 循环是 while 循环的变体。该循环会执行一次代码块，在检查条件是否为真之前，然后如果条件为真的话，就会重复这个循环。

**语法**

```javascript
do
{
  // 需要执行的代码
}
while (condition);
```

**实例**

下面的例子使用 do/while 循环。该循环至少会执行一次，即使条件是 false，隐藏代码块会在条件被测试前执行：

```javascript
do
{
  x = x + "The number is " + i + "<br>";
  i++;
}
while (i < 5);
```

别忘记增加条件中所用变量的值，否则循环永远不会结束！

### 比较 for 和 while

如果您已经阅读了前面那一章关于 for 循环的内容，您会发现 while 循环与 for 循环很像。

**for 语句实例**

本例中的循环使用 for 循环来显示 cars 数组中的所有值：

```javascript
cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
for (; cars[i];) {
  document.write(cars[i] + "<br>");
  i++;
}
```

**while 语句实例**

本例中的循环使用使用 while 循环来显示 cars 数组中的所有值：

```javascript
cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
while (cars[i]) {
  document.write(cars[i] + "<br>");
  i++;
}
```

## 跳出循环语句

**break 语句用于跳出循环。**

**continue 用于跳过循环中的一个迭代。**

### break

我们已经在本教程稍早的章节中见到过 break 语句。它用于跳出 switch() 语句。

break 语句可用于跳出循环。

break 语句跳出循环后，会继续执行该循环之后的代码（如果有的话）：

**实例**

```javascript
for (i = 0; i < 10; i++) {
  if (i == 3) {
    break;
  }
  x = x + "The number is " + i + "<br>";
}
```

由于这个 if 语句只有一行代码，所以可以省略花括号：

```javascript
for (i = 0; i < 10; i++) {
  if (i == 3) break;
  x = x + "The number is " + i + "<br>";
}
```

### continue

continue 语句中断循环中的迭代，如果出现了指定的条件，然后继续循环中的下一个迭代。

该例子跳过了值 3：

实例

```javascript
for (i = 0; i <= 10; i++) {
  if (i == 3) continue;
  x = x + "The number is " + i + "<br>";
}
```
