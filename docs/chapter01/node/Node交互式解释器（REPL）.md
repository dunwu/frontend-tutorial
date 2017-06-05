# Node交互式解释器（REPL）

Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。

Node 自带了交互式解释器，可以执行以下任务：

- **读取** - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
- **执行** - 执行输入的数据结构
- **打印** - 输出结果
- **循环** - 循环操作以上步骤直到用户两次按下 **ctrl-c** 按钮退出。

Node 的交互式解释器可以很好的调试 Javascript 代码。

我们可以输入以下命令来启动 Node 的终端：

```sh
$ node
>
```

## 简单的表达式运算

```sh
$ node
> 1 + 4
5
> 1 + ( 2 * 3 ) - 4
2.5
```

## 使用变量

你可以将数据存储在变量中，并在你需要的时候使用它。

变量声明需要使用 `var` 关键字，如果没有使用 `var` 关键字变量会直接打印出来。

使用 `var` 关键字的变量可以使用 `console.log()` 来输出变量。

```sh
$ node
> x = 10
10
> var y = 10
undefined
> x + y
20
> console.log("Hello World")
Hello World
undefined
> console.log("www.runoob.com")
www.runoob.com
undefined
```

## 多行表达式

Node REPL 支持输入多行表达式，这就有点类似 JavaScript。接下来让我们来执行一个 do-while 循环：

```
$ node
> var x = 0
undefined
> do {
... x++;
... console.log("x: " + x);
... } while ( x < 5 );
x: 1
x: 2
x: 3
x: 4
x: 5
undefined
>
```

**...** 三个点的符号是系统自动生成的，你回车换行后即可。Node 会自动检测是否为连续的表达式。

 不会打乱对象原有的继承关系。
