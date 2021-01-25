# JavaScript 对象

**JavaScript 中的所有事物都是对象：字符串、数字、数组、日期，等等。**

**在 JavaScript 中，对象是拥有属性和方法的数据。**

## 属性和方法

属性是与对象相关的值。

方法是能够在对象上执行的动作。

举例：汽车就是现实生活中的对象。

汽车的属性：

```
car.name=Fiat
car.model=500
car.weight=850kg
car.color=white 
```

汽车的方法：

```
car.start()
car.drive()
car.brake()
```

汽车的属性包括名称、型号、重量、颜色等。

所有汽车都有这些属性，但是每款车的属性都不尽相同。

汽车的方法可以是启动、驾驶、刹车等。

所有汽车都拥有这些方法，但是它们被执行的时间都不尽相同。

## JavaScript 中的对象

在 JavaScript 中，对象是数据（变量），拥有属性和方法。

当您像这样声明一个 JavaScript 变量时：

```
var txt = "Hello";
```

您实际上已经创建了一个 JavaScript 字符串对象。字符串对象拥有内建的属性 length。对于上面的字符串来说，length 的值是 5。字符串对象同时拥有若干个内建的方法。

属性：

```
txt.length=5
```

方法：

```
txt.indexOf()

txt.replace()

txt.search()

```

提示：在面向对象的语言中，属性和方法常被称为对象的成员。

在本教程稍后的章节中，您将学到有关字符串对象的更多属性和方法。

## 创建 JavaScript 对象

JavaScript 中的几乎所有事务都是对象：字符串、数字、数组、日期、函数，等等。

你也可以创建自己的对象。

本例创建名为 "person" 的对象，并为其添加了四个属性：

**实例**

```
person=new Object();
person.firstname="Bill";
person.lastname="Gates";
person.age=56;
person.eyecolor="blue";
```

创建新 JavaScript 对象有很多不同的方法，并且您还可以向已存在的对象添加属性和方法。

您将在本教程稍后的章节学到更多相关的内容。

## 访问对象的属性

访问对象属性的语法是：

```
objectName.propertyName
```

本例使用 String 对象的 length 属性来查找字符串的长度：

```
var message="Hello World!";
var x=message.length;
```

在以上代码执行后，x 的值是：

```
12
```

## 访问对象的方法

您可以通过下面的语法调用方法：

```
objectName.methodName()
```

这个例子使用 String 对象的 toUpperCase() 方法来把文本转换为大写：

```
var message="Hello world!";
var x=message.toUpperCase();

```

在以上代码执行后，x 的值是：

```
HELLO WORLD!
```

## 您知道吗？

提示：在面向对象的语言中，使用 camel-case 标记法的函数是很常见的。您会经常看到 someMethod() 这样的函数名，而不是 some_method()。