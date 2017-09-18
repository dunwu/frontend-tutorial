# Webpack 入门

> :pushpin: **提示：**
>
> 本文所有示例基于 webpack2。
>
> 文中的示例代码说明可以参考：[Webpack 示例代码说明](https://github.com/zp1024/react-step-by-step/tree/master/codes/chapter03)

## 安装

### 本地安装

```bash
$ npm install --save-dev webpack
$ npm install --save-dev webpack@<version>
```

如果你在项目中使用了 `npm` ，`npm` 首先会在本地模块中寻找 `webpack`。这是一个实用的小技巧。

```json
"scripts": {
    "start": "webpack --config mywebpack.config.js"
}
```

上面是 `npm` 的标准配置，也是我们推荐的实践。

>  当你在本地安装 webpack 后，你能够从 `node_modules/.bin/webpack` 访问它的 bin 版本。

### 全局安装

```bash
$ npm install --global webpack
```

`webpack` 命令现在可以全局执行了。

## 创建一个 bundle 文件

创建一个 `app/index.js` 文件。

```js
document.write('<h1>Hello World</h1>');
```

创建一个 `index.html` 文件。

```html
<html>
<body>
<script type="text/javascript" src="./dist/bundle.js"></script>
</body>
</html>
```

执行命令

```bash
$ webpack ./app/index.js ./dist/bundle.js
```

这条命令的第一个参数为输入文件，第二个参数为输出文件。

会在目录下生成一个 `dist/bundle.js` 文件，它已打包所需的所有代码的输出文件。

在浏览器中打开 `index.html` 文件。

> :flashlight: **示例：** ([**DEMO00**](https://github.com/zp1024/react-step-by-step/tree/master/codes/chapter03/webpack2/demo00))

## webpack.config.js

`webpack.config.js` 为 `webpack` 默认的配置文件，当执行 `webpack` 命令时，`webpack` 会在当前目录下自动搜索 `webpack.config.js` 文件。

### 单入口(Entry)

基于 ([**DEMO00**](https://github.com/zp1024/react-step-by-step/tree/master/codes/chapter03/webpack2/demo00)) 的代码，新建一个 `webpack.config.js` 文件，内容如下：

```js
const path = require('path');

module.exports = {

  // 这里应用程序开始执行
  // webpack 开始打包
  entry: "./app/index.js",

  // webpack 如何输出结果的相关选项
  output: {
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    path: path.resolve(__dirname, "dist"),

    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
    filename: "bundle.js",
  }
};
```

执行命令

```bash
$ webpack
```

在浏览器中打开 `index.html` 文件。

> :flashlight: **示例：** ([**DEMO01**](https://github.com/zp1024/react-step-by-step/tree/master/codes/chapter03/webpack2/demo01))

### 多入口(Entry)

如果有多个入口文件怎么办？很简单，我们来看一个示例：

新建 app/about.js 文件

```js
document.write('<h2>ABOUT</h2>');
```

新建 app/home.js 文件

```js
document.write('<h1>HOME</h1>');
```

新建 index.html 文件

```html
<html>
<body>
<script src="dist/home.js"></script>
<script src="dist/about.js"></script>
</body>
</html>
```

新建 webpack.config.js 文件

```js
const path = require('path');

module.exports = {

  // 这里应用程序开始执行
  // webpack 开始打包
  // 本例中 entry 为多入口
  entry: {
    home: './app/home.js',
    about: './app/about.js'
  },

  // webpack 如何输出结果的相关选项
  output: {
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    path: path.resolve(__dirname, "dist"),

    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
    // filename: "bundle.js", // 用于多个入口点(entry point)（出口点？）
    filename: "[name].js", // 用于多个入口点(entry point)（出口点？）
    // filename: "[chunkhash].js", // 用于长效缓存
    // filename: "[name].[chunkhash].js", // 用于长效缓存
  }
};
```

执行命令

```bash
$ webpack
```

在浏览器中打开 `index.html` 文件。


> :flashlight: **示例：** ([**DEMO02**](https://github.com/zp1024/react-step-by-step/tree/master/codes/chapter03/webpack2/demo02))

# Webpack 系列教程

欢迎阅读其它内容：

* [Webpack 概念](https://github.com/zp1024/react-step-by-step/tree/master/docs/chapter03/webpack/concept.md)
* [Webpack 入门](https://github.com/zp1024/react-step-by-step/tree/master/docs/chapter03/webpack/webpack-tutorial.md)
* [Webpack 资源管理](https://github.com/zp1024/react-step-by-step/tree/master/docs/chapter03/webpack/asset-management.md)
* [Webpack 代码分离](https://github.com/zp1024/react-step-by-step/tree/master/docs/chapter03/webpack/code-splitting.md)
* [Webpack 开发工具](https://github.com/zp1024/react-step-by-step/tree/master/docs/chapter03/webpack/development.md)
