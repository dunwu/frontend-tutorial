# Chapter03 - Webpack 示例代码

> ​:open_book: 本章节教程文档：[Chapter03 - Webpack](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter03)

## webpack2

> **使用方法：**
>
> 在 `codes/chapter03/webpack2` 目录下执行命令
>
> ```bash
> $ npm install
> $ npm run build
> ```
>
> 编译结束后，会在每个 demo 目录下生成 dist 目录，其中包含了 webpack 的输出文件。此时，直接在浏览器打开 `index.html` 文件，就可以看到展示。
>
> 此外，在各 demo 目录下，直接执行 `webpack-dev-server` 命令，启动一个 web app。其中，`demo02`，`demo03` 的示例，需要打开 http://localhost:8080/ 进行访问。其它示例，因为配置了 `OpenBrowserPlugin` ，会直接打开浏览器访问。
>
> 如果需要清除编译输出文件，执行以下命令
>
> ```bash
> $ npm run clean
> ```

### demo00

**使用方法**

1. 执行命令

```bash
$ webpack ./app/index.js ./dist/bundle.js
```
2. 在浏览器中打开 index.html 文件。

### demo01

单入口的 webpack 示例。

### demo02

多入口的 webpack 示例。

### demo03

HtmlWebpackPlugin + OpenBrowserPlugin 根据 Html 模板生成包含 bundle 的 html 文件，并且自动打开浏览器。

### demo04

webpack + react：webpack 自动将 js 中的 React 语法转义为浏览器可以识别的 JavaScript 语法。

### demo05

使用 webpack.optimize.UglifyJsPlugin 插件，压缩 js 文件。

### demo06

打包、加载 css 文件。

### demo07

打包、压缩图片文件。

### demo08

添加字体

### demo09

代码分离 - CSS

### demo10

代码分离 - Libraries

### demo11

代码分离 - 异步

### demo12

webpack 开发工具 webpack-dev-server 的使用

### demo13

webpack 热替换

## jigsaw

### 使用说明

1. 执行以下命令：

```
npm install
npm start
```

2. 在浏览器中打开：http://localhost:3000

### **项目说明**

**上次内容：**

`codes/chapter01/jigsaw` 的示例中，我们看到了如何使用 React 。

但是，可以看到有许多的不足之处：

- 直接下载并管理 React 等 JavaScript 库很不方便；
- React 语法在一些浏览器上无法识别，需要解析器去解析；
- 如果要启动一个 web app，还需要解决打包、装载等问题。

在学习了 [Chapter02 - Node, Npm, Yarn](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter02) 和 [Chapter03 - Webpack](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter03) 之后，我们可以解决上述问题了。

**本次内容：**

让我们来看看 `codes/chapter03/jigsaw` 示例：

`package.json` 文件中的 `dependencies` 和 `devDependencies` 属性列举了本项目需要使用的各种 JavaScript 库。你可以轻松通过 **Npm** 或 **Yarn** 来自动下载对应版本的包。`scripts` 属性指定了可以运行的命令：`npm start` ，在本文件中，这条命令等价于执行 `webpack-dev-server --hot --inline --content-base` 命令。它会启动一个 web app。

Webpack 会根据 `webpack.config.js` 文件中的配置去打包、装载资源模块和代码模块。

**下次内容：**

也许，你已经留意到在 webpack.config.js 中，使用了 `babel-loader` 。由于浏览器无法直接识别 React 语法，所以需要使用 Babel 来转义 React 语法为浏览器可以识别的 JavaScript 语法。Chapter04 将介绍这部分内容，并给出示例。
