# 开发工具

> ​:warning:  **注意：**
> 永远不要在生产环境中使用这些工具，永远不要。

## devtool

当 JavaScript 异常抛出时，你常会想知道这个错误发生在哪个文件的哪一行。然而因为 webpack 将文件输出为一个或多个 bundle，所以 追踪这一错误会很不方便。

**Source maps** 试图解决这一问题。它有很多选择，各有优劣：

| devtool                      | build | rebuild | production | quality                       |
| ---------------------------- | ----- | ------- | ---------- | ----------------------------- |
| eval                         | +++   | +++     | no         | generated code                |
| cheap-eval-source-map        | +     | ++      | no         | transformed code (lines only) |
| cheap-source-map             | +     | o       | yes        | transformed code (lines only) |
| cheap-module-eval-source-map | o     | ++      | no         | original source (lines only)  |
| cheap-module-source-map      | o     | -       | yes        | original source (lines only)  |
| eval-source-map              | --    | +       | no         | original source               |
| source-map                   | --    | --      | yes        | original source               |
| nosources-source-map         | --    | --      | yes        | without source content        |

>  `+` 表示较快，`-` 表示较慢，`o` 表示时间相同

对于开发环境，通常希望更快速的 Source Map，需要添加到 bundle 中以增加体积为代价，但是对于生产环境，则希望更精准的 Source Map，需要从 bundle 中分离并独立存在。

个人建议：开发环境使用 `cheap-module-eval-source-map` ；开发环境使用 `cheap-module-source-map` 。

使用方式非常简单，在 `webpack.config.js` 中配置如下：

```js
module.exports = {
  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // devtool: "eval", // 没有模块映射，而是命名模块。以牺牲细节达到最快。
  // devtool: "source-map", // 牺牲了构建速度的 `source-map' 是最详细的
  // devtool: "inline-source-map", // 嵌入到源文件中
  // devtool: "eval-source-map", // 将 SourceMap 嵌入到每个模块中
  // devtool: "hidden-source-map", // SourceMap 不在源文件中引用
  // devtool: "cheap-source-map", // 没有模块映射(module mappings)的 SourceMap 低级变体(cheap-variant)
  // devtool: "cheap-module-source-map", // 有模块映射(module mappings)的 SourceMap 低级变体
  devtool: "cheap-module-eval-source-map",
};
```

## webpack-dev-server

**webpack-dev-server** 可以提供了一个服务器和实时重载（live reloading） 功能。

在开始前，确定你有一个 `index.html` 文件指向你的 bundle。假设 `output.filename` 是 `bunlde.js`。

```html
<html>
<body>
<script type="text/javascript" src="./dist/bundle.js"></script>
</body>
</html>
```

首先从 npm 安装 `webpack-dev-server`：

```bash
$ npm install --save-dev webpack-dev-server
```

安装完成之后，你应该可以使用 `webpack-dev-server` 了，方式如下：

```bash
$ webpack-dev-server --open
```

上述命令应该自动在浏览器中打开 `http://localhost:8080`。

在你的文件中做一点更改并且保存。你应该可以在控制台中看到正在编译。编译完成之后，页面应该会刷新。如果控制台中什么都没发生，你可能需要调整下 [`watchOptions`](https://doc.webpack-china.org/configuration/dev-server#devserver-watchoptions-)。

现在你有了实时重载功能，你甚至可以更进一步：Hot Module Replacement（热模块替换）。这是一个接口，使得你可以替换模块**而不需要刷新页面**。查看如何[配置 HMR](https://doc.webpack-china.org/guides/hmr-react)。

默认情况下 webpack 会使用**inline mode**（内联模式）。这种模式在你的 bundle 中注入客户端（用来 live reloading 和展示构建错误）。Inline 模式下，你会在你的 DevTools 控制台中看到构建错误。

webpack-dev-server 可以做很多事情，比如转发请求到你的后端服务器。更多配置项，请参阅 [**devServer documentation**](https://doc.webpack-china.org/configuration/dev-server)。

## webpack-dev-middleware

webpack-dev-middleware 适用于基于链接的中间件环境（connect-based middleware stacks）。如果你已经有一个 Node.js 服务器或者你想要完全控制服务器，这将很实用。

这个中间件会导致 webpack 在内存中编译文件。当一个编译正在执行的时候，它会将对于文件的请求延迟，直到编译完成。

>  该中间件是为进阶用户使用的。对于一般用户，webpack-dev-server 更容易使用。

首先从 npm 上安装依赖：

```
npm install --save-dev express webpack-dev-middleware

```

安装完成后，可以按如下所示使用该中间件：

```
var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/" // 大部分情况下和 `output.publicPath`相同
}));

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});

```

根据你在 `output.publicPath` 和 `output.filename` 中设置的内容，你的 bundle 现在应该在 `http://localhost:3000/bundle.js` 中可以看到了。

默认情况下会使用**watch mode**。也可以使用 **lazy mode**，这使得 webpack 只在对入口点进行请求时再进行重新编译。

设置仅在对入口 `bundle.js` 请求时进行编译：

```
app.use(webpackDevMiddleware(compiler, {
  lazy: true,
  filename: "bundle.js" // Same as `output.filename` in most cases.
}));

```

还有许多其他的选项可以设置。所有的设置项请查阅 [**devServer 文档**](https://doc.webpack-china.org/configuration/dev-server)。
