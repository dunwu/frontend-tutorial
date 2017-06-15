# Babel 入门指南

> ​:warning: **注意：**
>
> Babel 可以与很多构建工具（如 `Browserify`、`Grunt`、`Gulp` 等）进行集成。由于本教程选择 `Webpack` ，所以只讲解与 `Webpack` 的集成。想了解如何与其它工具集成，请参考：[**官方文档 - installation**](https://babeljs.io/docs/setup/#installation)

## 简介

## 安装 Babel

### `babel-cli`

Babel 的 CLI 是一种在命令行下使用 Babel 编译文件的简单方法。

让我们先全局安装它来学习基础知识。

```bash
$ npm install --global babel-cli
```

我们可以这样来编译我们的第一个文件：

```bash
$ babel example.js
```

这将把编译后的结果直接输出至终端。使用 `--out-file` 或着 `-o` 可以将结果写入到指定的文件。.

```bash
$ babel example.js --out-file compiled.js
# 或
$ babel example.js -o compiled.js
```

如果我们想要把一个目录整个编译成一个新的目录，可以使用 `--out-dir` 或者 `-d`。.

```bash
$ babel src --out-dir lib
# 或
$ babel src -d lib
```

#### 在项目内运行 Babel CLI

尽管你*可以*把 Babel CLI 全局安装在你的机器上，但是按项目逐个安装在**本地**会更好。

有两个主要的原因。

1. 在同一台机器上的不同项目或许会依赖不同版本的 Babel 并允许你有选择的更新。
2. 这意味着你对工作环境没有隐式依赖，这让你的项目有很好的可移植性并且易于安装。

要在（项目）本地安装 Babel CLI 可以运行：

```
$ npm install --save-dev babel-cli
```

> **注意：**因为全局运行 Babel 通常不是什么好习惯所以如果你想要卸载全局安装的 Babel 的话，可以运行：
>
> `$ npm uninstall --global babel-cli`

```
安装完成后，你的 `package.json` 应该如下所示：

​```json
{
  "name": "my-project",
  "version": "1.0.0",
  "devDependencies": {
    "babel-cli": "^6.0.0"
  }
}

```

现在，我们不直接从命令行运行 Babel 了，取而代之我们将把运行命令写在 **npm scripts** 里，这样可以使用 Babel 的本地版本。

只需将 `"scripts"` 字段添加到你的 `package.json` 文件内并且把 babel 命令写成 `build` 字段。.

```
  {
    "name": "my-project",
    "version": "1.0.0",
+   "scripts": {
+     "build": "babel src -d lib"
+   },
    "devDependencies": {
      "babel-cli": "^6.0.0"
    }
  }
```

现在可以在终端里运行：

```
npm run build
```

这将以与之前同样的方式运行 Babel，但这一次我们使用的是本地副本。

### 与 webpack 集成

```bash
$ npm install --save-dev babel-loader babel-core
```

通过配置

```js
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```

通过 loader

```js
var Person = require("babel!./Person.js").default;
new Person();
```

### `babel-core`

如果你需要以编程的方式来使用 Babel，可以使用 `babel-core` 这个包。

首先安装 `babel-core`。.

```
$ npm install babel-core
```

```js
var babel = require("babel-core");
```

字符串形式的 JavaScript 代码可以直接使用 `babel.transform` 来编译。.

```jsx
babel.transform("code();", options);
// => { code, map, ast }
```

如果是文件的话，可以使用异步 api：

```js
babel.transformFile("filename.js", options, function(err, result) {
  result; // => { code, map, ast }
});
```

或者是同步 api：

```js
babel.transformFileSync("filename.js", options);
// => { code, map, ast }
```

要是已经有一个 Babel AST（抽象语法树）了就可以直接从 AST 进行转换。

```js
babel.transformFromAst(ast, code, options);
// => { code, map, ast }
```

## 配置 Babel

你或许已经注意到了，目前为止通过运行 Babel 自己我们并没能“翻译”代码，而仅仅是把代码从一处拷贝到了另一处。

这是因为我们还没告诉 Babel 要做什么。

> 由于 Babel 是一个可以用各种花样去使用的通用编译器，因此默认情况下它反而什么都不做。你必须明确地告诉 Babel 应该要做什么。

你可以通过安装**插件（plugins）**或**预设（presets，也就是一组插件）**来指示 Babel 去做什么事情。

### `.babelrc`

在我们告诉 Babel 该做什么之前，我们需要创建一个配置文件。你需要做的就是在项目的根路径下创建 `.babelrc` 文件。然后输入以下内容作为开始：

```
{
  "presets": [],
  "plugins": []
}
```

这个文件就是用来让 Babel 做你要它做的事情的配置文件。

> **注意：**尽管你也可以用其他方式给 Babel 传递选项，但 `.babelrc` 文件是约定也是最好的方式。

#### `babel-preset-es2015`

我们先从让 Babel 把 ES2015（最新版本的 JavaScript 标准，也叫做 ES6）编译成 ES5（现今在大多数 JavaScript 环境下可用的版本）开始吧。

我们需要安装 "es2015" Babel 预设：

```
$ npm install --save-dev babel-preset-es2015
```

我们修改 `.babelrc` 来包含这个预设。

```
  {
    "presets": [
+     "es2015"
    ],
    "plugins": []
  }
```

#### `babel-preset-react`

设置 React 一样容易。只需要安装这个预设：

```
$ npm install --save-dev babel-preset-react
```

然后在 `.babelrc` 文件里补充：

```
  {
    "presets": [
      "es2015",
+     "react"
    ],
    "plugins": []
  }
```

#### `babel-preset-stage-x`

JavaScript 还有一些提案，正在积极通过 TC39（ECMAScript 标准背后的技术委员会）的流程成为标准的一部分。

这个流程分为 5（0－4）个阶段。 随着提案得到越多的关注就越有可能被标准采纳，于是他们就继续通过各个阶段，最终在阶段 4 被标准正式采纳。

以下是4 个不同阶段的（打包的）预设：

- `babel-preset-stage-0`
- `babel-preset-stage-1`
- `babel-preset-stage-2`
- `babel-preset-stage-3`

> 注意 stage-4 预设是不存在的因为它就是上面的 `es2015` 预设。

以上每种预设都依赖于紧随的后期阶段预设。例如，`babel-preset-stage-1` 依赖 `babel-preset-stage-2`，后者又依赖`babel-preset-stage-3`。.

使用的时候只需要安装你想要的阶段就可以了：

```
$ npm install --save-dev babel-preset-stage-2
```

然后添加进你的 `.babelrc` 配置文件。

```
  {
    "presets": [
      "es2015",
      "react",
+     "stage-2"
    ],
    "plugins": []
  }
```

## 执行 Babel 生成的代码

即便你已经用 Babel 编译了你的代码，但这还不算完。

### `babel-polyfill`

Babel 几乎可以编译所有时新的 JavaScript 语法，但对于 APIs 来说却并非如此。

比方说，下列含有箭头函数的需要编译的代码：

```
function addAll() {
  return Array.from(arguments).reduce((a, b) => a + b);
}
```

最终会变成这样：

```
function addAll() {
  return Array.from(arguments).reduce(function(a, b) {
    return a + b;
  });
}
```

然而，它依然无法随处可用因为不是所有的 JavaScript 环境都支持 `Array.from`。

```
Uncaught TypeError: Array.from is not a function

```

为了解决这个问题，我们使用一种叫做 [Polyfill（代码填充，也可译作兼容性补丁）](https://remysharp.com/2010/10/08/what-is-a-polyfill) 的技术。 简单地说，polyfill 即是在当前运行环境中用来复制（意指模拟性的复制，而不是拷贝）尚不存在的原生 api 的代码。 能让你提前使用还不可用的 APIs，`Array.from` 就是一个例子。

Babel 用了优秀的 [core-js](https://github.com/zloirock/core-js) 用作 polyfill，并且还有定制化的 [regenerator](https://github.com/facebook/regenerator) 来让 generators（生成器）和 async functions（异步函数）正常工作。

要使用 Babel polyfill，首先用 npm 安装它：

```
$ npm install --save babel-polyfill
```

然后只需要在文件顶部导入 polyfill 就可以了：

```
import "babel-polyfill";
```

### `babel-runtime`

为了实现 ECMAScript 规范的细节，Babel 会使用“助手”方法来保持生成代码的整洁。

由于这些助手方法可能会特别长并且会被添加到每一个文件的顶部，因此你可以把它们统一移动到一个单一的“运行时（runtime）”中去。

通过安装 `babel-plugin-transform-runtime` 和 `babel-runtime` 来开始。

```
$ npm install --save-dev babel-plugin-transform-runtime
$ npm install --save babel-runtime
```

然后更新 `.babelrc`：

```
  {
    "plugins": [
+     "transform-runtime",
      "transform-es2015-classes"
    ]
  }
```

现在，Babel 会把这样的代码：

```
class Foo {
  method() {}
}
```

编译成：

```
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";

let Foo = function () {
  function Foo() {
    _classCallCheck(this, Foo);
  }

  _createClass(Foo, [{
    key: "method",
    value: function method() {}
  }]);

  return Foo;
}();
```

这样就不需要把 `_classCallCheck` 和 `_createClass` 这两个助手方法放进每一个需要的文件里去了。