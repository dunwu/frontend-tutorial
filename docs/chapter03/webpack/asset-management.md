# 资源管理

> :pushpin: **提示：**
>
> 本文基于 webpack2 版本。

## 加载 React

很多浏览器并不识别 React 语法，为了让浏览器支持，你需要使用 **babel-loader** 解释器来转义 React 语法为普通的 Javascript 语法。

> :warning: **注意：**
>
> 官方推荐 babel-loader 和 webpack 的对应版本
>
> webpack 1.x | babel-loader <= 6.x
>
> webpack 2.x | babel-loader >= 7.x （推荐）（^6.2.10 也可以运行，但会有不赞成的警告(deprecation warnings)）

首先，安装需要使用的库：

```bash
$ npm install --save-dev babel-loader babel-preset-es2015 babel-preset-react
```

babel-preset-xxx 表示你希望转义的语法。

webpack.config.js 中的模块配置如下：

```js
// 关于模块配置
module: {

  // 模块规则（配置 loader、解析器等选项）
  rules: [
    // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
    // test 和 include 具有相同的作用，都是必须匹配选项
    // exclude 是必不匹配选项（优先于 test 和 include）
    // 最佳实践：
    // - 只在 test 和 文件名匹配 中使用正则表达式
    // - 在 include 和 exclude 中使用绝对路径数组
    // - 尽量避免 exclude，更倾向于使用 include
    {
      // 语义解释器，将 js/jsx 文件中的 es2015/react 语法自动转为浏览器可识别的 Javascript 语法
      test: /\.jsx?$/,
      include: path.resolve(__dirname, "app"),

      // 应该应用的 loader，它相对上下文解析
      // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
      // 查看 webpack 1 升级指南。
      loader: "babel-loader",

      // loader 的可选项
      options: {
        presets: ["es2015", "react"]
      },
    },
  ]
},
```

> ​:flashlight:​  **示例DEMO04：** ([**DEMO**](https://atlantis1024.github.io/react-step-by-step/chapter03/webpack2/demo04/dist/index.html) / [**SOURCE**](https://github.com/atlantis1024/react-step-by-step/tree/master/codes/chapter03/webpack2/demo04))

## 加载 CSS

为了从 JavaScript 模块中 `import` 一个 CSS 文件，你只需要在 module 中安装并添加 [style-loader](https://doc.webpack-china.org/loaders/style-loader) 和 [css-loader](https://doc.webpack-china.org/loaders/css-loader) 。

```bash
$ npm install --save-dev style-loader css-loader
```

**webpack.config.js**

```js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'style-loader'
        ]
      }
    ]
  },
  //...
}
```

好了，此时你就可以在代码中通过 `import './style.css'` 的方式引入 CSS 文件。

其余，加载 less，sass 等样式文件也是大同小异，不一一细说。

> :flashlight: **示例DEMO06：** ([**DEMO**](https://atlantis1024.github.io/react-step-by-step/chapter03/webpack2/demo06/dist/index.html) / [**SOURCE**](https://github.com/atlantis1024/react-step-by-step/tree/master/codes/chapter03/webpack2/demo06))

## 加载图片

如何打包、加载图片呢？你可以使用 file-loader来指定要加载的图片。

```bash
$ npm install --save-dev file-loader
```

**webpack.config.js**

```js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  //...
}
```

然后，你可以通过 `import imgBig from './lion.png'` 的方式引入图片。例：

```jsx
import React from 'react';
import imgBig from './lion.png';

class Welcome extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <img src={imgBig} />
      </div>
    );
  }
}
export default Welcome;
```

### 压缩图片

这还不算完，日常开发中，经常会遇到有些图片文件过大的问题，这会影响你的 app 的加载速度。webpack 提供了压缩图片的方法帮你解决图片大的问题。

首先，你需要安装 **image-webpack-loader**

```bash
$ npm i --save-dev image-webpack-loader
```

接下来，修改 webpack.config.js 

```js
{
  // 图片加载 + 图片压缩
  test: /\.(png|svg|jpg|gif)$/,
  loaders: [
    "file-loader",
    {
      loader: "image-webpack-loader",
      query: {
        progressive: true,
        pngquant: {
          quality: "65-90",
          speed: 4
        }
      }
    }
  ]
}
```

> :flashlight: **示例DEMO07：** ([**DEMO**](https://atlantis1024.github.io/react-step-by-step/chapter03/webpack2/demo07/dist/index.html) / [**SOURCE**](https://github.com/atlantis1024/react-step-by-step/tree/master/codes/chapter03/webpack2/demo07))

## 加载字体

那么，像字体这样的其他资源如何处理呢？file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录。这就是说，我们可以将它们用于任何类型的文件，包括字体：

**webpack.config.js**

```js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  //...
}
```

一切就绪后，你可以在 css 文件中这样引入字体：

```css
@font-face {
  font-family: 'MyDiyFont';
  src: url('./font/iconfont.eot'); /* IE9*/
  src: url('./font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('./font/iconfont.woff') format('woff'), /* chrome、firefox */
  url('./font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('./font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}

h1 {
  font-family: 'MyDiyFont';
  font-size: 24px;
}

p {
  font-family: 'MyDiyFont';
  font-size: 18px;
}
```

然后，相对路径，会被替换为构建目录中的完整路径/文件名。

> :flashlight: **示例DEMO08：** ([**DEMO**](https://atlantis1024.github.io/react-step-by-step/chapter03/webpack2/demo08/dist/index.html) / [**SOURCE**](https://github.com/atlantis1024/react-step-by-step/tree/master/codes/chapter03/webpack2/demo08))
