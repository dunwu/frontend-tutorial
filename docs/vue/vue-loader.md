# Vue Loader

<!-- TOC depthFrom:2 depthTo:3 -->

- [1. 简介](#1-简介)
- [2. 起步](#2-起步)
  - [2.1. Vue CLI](#21-vue-cli)
  - [2.2. 手动设置](#22-手动设置)
- [3. 处理资源路径](#3-处理资源路径)
  - [3.1. 转换规则](#31-转换规则)
  - [3.2. 相关的 Loader](#32-相关的-loader)
  - [3.3. 为什么](#33-为什么)
- [4. 使用预处理器](#4-使用预处理器)
  - [4.1. Sass](#41-sass)
  - [4.2. Less](#42-less)
  - [4.3. Stylus](#43-stylus)
  - [4.4. PostCSS](#44-postcss)
  - [4.5. Babel](#45-babel)
  - [4.6. TypeScript](#46-typescript)
  - [4.7. Pug](#47-pug)
- [5. Scoped CSS](#5-scoped-css)
  - [5.1. 混用本地和全局样式](#51-混用本地和全局样式)
  - [5.2. 子组件的根元素](#52-子组件的根元素)
  - [5.3. 深度作用选择器](#53-深度作用选择器)
  - [5.4. 动态生成的内容](#54-动态生成的内容)
  - [5.5. 还有一些要留意](#55-还有一些要留意)
- [6. CSS Modules](#6-css-modules)
  - [6.1. 用法](#61-用法)
  - [6.2. 可选用法](#62-可选用法)
  - [6.3. 和预处理器配合使用](#63-和预处理器配合使用)
  - [6.4. 自定义的注入名称](#64-自定义的注入名称)
- [7. 热重载](#7-热重载)
  - [7.1. 状态保留规则](#71-状态保留规则)
  - [7.2. 用法](#72-用法)
  - [7.3. 关闭热重载](#73-关闭热重载)
- [8. 函数式组件](#8-函数式组件)
- [9. 自定义块](#9-自定义块)
  - [9.1. Example](#91-example)
- [10. CSS 提取](#10-css-提取)
  - [10.1. webpack 4](#101-webpack-4)
  - [10.2. webpack 3](#102-webpack-3)
- [11. 代码校验](#11-代码校验)
  - [11.1. ESLint](#111-eslint)
  - [11.2. stylelint](#112-stylelint)
- [12. 测试](#12-测试)
- [13. 参考资料](#13-参考资料)

<!-- /TOC -->

## 1. 简介

Vue Loader 是一个 [webpack](https://webpack.js.org/) 的 loader，它允许你以一种名为[单文件组件 (SFCs)](https://vue-loader.vuejs.org/zh/spec.html)的格式撰写 Vue 组件：

```vue
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world!",
    };
  },
};
</script>

<style>
.example {
  color: red;
}
</style>
```

Vue Loader 还提供了很多酷炫的特性：

- 允许为 Vue 组件的每个部分使用其它的 webpack loader，例如在 `<style>` 的部分使用 Sass 和在 `<template>` 的部分使用 Pug；
- 允许在一个 `.vue` 文件中使用自定义块，并对其运用自定义的 loader 链；
- 使用 webpack loader 将 `<style>` 和 `<template>` 中引用的资源当作模块依赖来处理；
- 为每个组件模拟出 scoped CSS；
- 在开发过程中使用热重载来保持状态。

简而言之，webpack 和 Vue Loader 的结合为你提供了一个现代、灵活且极其强大的前端工作流，来帮助撰写 Vue.js 应用。

## 2. 起步

### 2.1. Vue CLI

如果你不想手动设置 webpack，我们推荐使用 [Vue CLI](https://github.com/vuejs/vue-cli) 直接创建一个项目的脚手架。通过 Vue CLI 创建的项目会针对多数常见的开发需求进行预先配置，做到开箱即用。

如果 Vue CLI 提供的内建没有满足你的需求，或者你乐于从零开始创建你自己的 webpack 配置，那么请继续阅读这篇指南。

### 2.2. 手动设置

#### 安装

你应该将 `vue-loader` 和 `vue-template-compiler` 一起安装——除非你是使用自行 fork 版本的 Vue 模板编译器的高阶用户：

```bash
npm install -D vue-loader vue-template-compiler
```

`vue-template-compiler` 需要独立安装的原因是你可以单独指定其版本。

每个 `vue` 包的新版本发布时，一个相应版本的 `vue-template-compiler` 也会随之发布。编译器的版本必须和基本的 `vue` 包保持同步，这样 `vue-loader` 就会生成兼容运行时的代码。这意味着**你每次升级项目中的 `vue` 包时，也应该匹配升级 `vue-template-compiler`。**

#### webpack 配置

Vue Loader 的配置和其它的 loader 不太一样。除了通过一条规则将 `vue-loader` 应用到所有扩展名为 `.vue` 的文件上之外，请确保在你的 webpack 配置中添加 Vue Loader 的插件：

```js
// webpack.config.js
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
  ],
};
```

**这个插件是必须的！** 它的职责是将你定义过的其它规则复制并应用到 `.vue` 文件里相应语言的块。例如，如果你有一条匹配 `/\.js$/` 的规则，那么它会应用到 `.vue` 文件里的 `<script>` 块。

一个更完整的 webpack 配置示例看起来像这样：

```js
// webpack.config.js
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
  ],
};
```

你也可以在[选项参考](https://vue-loader.vuejs.org/zh/options.html)查阅所有可用的 loader 选项。

> 警告
>
> 如果你在开发一个库或多项目仓库 (monorepo)，请注意导入 CSS **是具有副作用的**。请确保在 `package.json` 中**移除** `"sideEffects": false`，否则 CSS 代码块会在生产环境构建时被 webpack 丢掉。

## 3. 处理资源路径

当 Vue Loader 编译单文件组件中的 `<template>` 块时，它也会将所有遇到的资源 URL 转换为 **webpack 模块请求**。

例如，下面的模板代码片段：

```vue
<img src="../image.png">
```

将会被编译成为：

```js
createElement("img", {
  attrs: {
    src: require("../image.png"), // 现在这是一个模块的请求了
  },
});
```

默认下列标签/特性的组合会被转换，且这些组合时可以使用 [transformAssetUrls](https://vue-loader.vuejs.org/zh/options.html#transformasseturls) 选项进行配置的。

```js
{
  video: ['src', 'poster'],
  source: 'src',
  img: 'src',
  image: ['xlink:href', 'href'],
  use: ['xlink:href', 'href']
}
```

此外，如果你配置了为 `<style>` 块使用 [css-loader](https://github.com/webpack-contrib/css-loader)，则你的 CSS 中的资源 URL 也会被同等处理。

### 3.1. 转换规则

资源 URL 转换会遵循如下规则：

- 如果路径是绝对路径 (例如 `/images/foo.png`)，会原样保留。

- 如果路径以 `.` 开头，将会被看作相对的模块依赖，并按照你的本地文件系统上的目录结构进行解析。

- 如果路径以 `~` 开头，其后的部分将会被看作模块依赖。这意味着你可以用该特性来引用一个 Node 依赖中的资源：

  ```html
  <img src="~some-npm-package/foo.png" />
  ```

- 如果路径以 `@` 开头，也会被看作模块依赖。如果你的 webpack 配置中给 `@` 配置了 alias，这就很有用了。所有 `vue-cli` 创建的项目都默认配置了将 `@` 指向 `/src`。

### 3.2. 相关的 Loader

因为像 `.png` 这样的文件不是一个 JavaScript 模块，你需要配置 webpack 使用 [file-loader](https://github.com/webpack/file-loader) 或者 [url-loader](https://github.com/webpack/url-loader) 去合理地处理它们。通过 Vue CLI 创建的项目已经把这些预配置好了。

### 3.3. 为什么

转换资源 URL 的好处是：

1. `file-loader` 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。此外，这意味着 **你可以就近管理图片文件，可以使用相对路径而不用担心部署时 URL 的问题**。使用正确的配置，webpack 将会在打包输出中自动重写文件路径为正确的 URL。
2. `url-loader` 允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 `file-loader` 处理。

## 4. 使用预处理器

在 webpack 中，所有的预处理器需要匹配对应的 loader。Vue Loader 允许你使用其它 webpack loader 处理 Vue 组件的某一部分。它会根据 `lang` 特性以及你 webpack 配置中的规则自动推断出要使用的 loader。

### 4.1. Sass

例如，为了通过 Sass/SCSS 编译我们的 `<style>` 标签：

```bash
npm install -D sass-loader node-sass
```

在你的 webpack 配置中：

```js
module.exports = {
  module: {
    rules: [
      // ... 忽略其它规则

      // 普通的 `.scss` 文件和 `*.vue` 文件中的
      // `<style lang="scss">` 块都应用它
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // 插件忽略
};
```

现在，除了能够 `import 'style.scss'`，我们还可以在 Vue 组件中使用 SCSS：

```html
<style lang="scss">
  /* 在这里撰写 SCSS */
</style>
```

这个块里的任何内容都会被 webpack 当作在一个 `*.scss` 文件中一样被处理。

#### Sass vs SCSS

注意 `sass-loader` 会默认处理不基于缩进的 `scss` 语法。为了使用基于缩进的 `sass` 语法，你需要向这个 loader 传递选项：

```js
// webpack.config.js -> module.rules
{
  test: /\.sass$/,
  use: [
    'vue-style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        indentedSyntax: true,
        // sass-loader version >= 8
        sassOptions: {
          indentedSyntax: true
        }
      }
    }
  ]
}
```

#### 共享全局变量

`sass-loader` 也支持一个 `prependData` 选项，这个选项允许你在所有被处理的文件之间共享常见的变量，而不需要显式地导入它们：

```js
// webpack.config.js -> module.rules
{
  test: /\.scss$/,
  use: [
    'vue-style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        // 你也可以从一个文件读取，例如 `variables.scss`
        // 如果 sass-loader 版本 = 8，这里使用 `prependData` 字段
        // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
        additionalData: `$color: red;`
      }
    }
  ]
}
```

### 4.2. Less

```bash
npm install -D less less-loader
// webpack.config.js -> module.rules
{
  test: /\.less$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'less-loader'
  ]
}
```

### 4.3. Stylus

```bash
npm install -D stylus stylus-loader
// webpack.config.js -> module.rules
{
  test: /\.styl(us)?$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'stylus-loader'
  ]
}
```

### 4.4. PostCSS

TIP

Vue Loader v15 不再默认应用 PostCSS 变换。你需要通过 `postcss-loader` 使用 PostCSS。

```bash
npm install -D postcss-loader
// webpack.config.js -> module.rules
{
  test: /\.css$/,
  use: [
    'vue-style-loader',
    {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    'postcss-loader'
  ]
}
```

PostCSS 的配置可以通过 `postcss.config.js` 或 `postcss-loader` 选项来完成。其更多细节请查阅 [postcss-loader 文档](https://github.com/postcss/postcss-loader)。

`postcss-loader` 也可以和上述其它预处理器结合使用。

### 4.5. Babel

```bash
npm install -D babel-core babel-loader
// webpack.config.js -> module.rules
{
  test: /\.js?$/,
  loader: 'babel-loader'
}
```

Babel 的配置可以通过 `.babelrc` 或 `babel-loader` 选项来完成。

#### 排除 node_modules

`exclude: /node_modules/` 在应用于 `.js` 文件的 JS 转译规则 (例如 `babel-loader`) 中是蛮常见的。鉴于 v15 中的推导变化，如果你导入一个 `node_modules` 内的 Vue 单文件组件，它的 `<script>` 部分在转译时将会被排除在外。

为了确保 JS 的转译应用到 `node_modules` 的 Vue 单文件组件，你需要通过使用一个排除函数将它们加入白名单：

```js
{
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: file => (
    /node_modules/.test(file) &&
    !/\.vue\.js/.test(file)
  )
}
```

### 4.6. TypeScript

```bash
npm install -D typescript ts-loader
// webpack.config.js
module.exports = {
  resolve: {
    // 将 `.ts` 添加为一个可解析的扩展名。
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      // ... 忽略其它规则
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      }
    ]
  },
  // ...plugin omitted
}
```

TypeScript 的配置可以通过 `tsconfig.json` 来完成。你也可以查阅 [ts-loader](https://github.com/TypeStrong/ts-loader) 的文档。

### 4.7. Pug

模板的处理会稍微有些不同，因为绝大多数 webpack 的模板类 loader，诸如 `pug-loader`，会返回一个模板函数而不是一个编译好的 HTML 字符串。所以我们需要使用一个返回原始的 HTML 字符串的 loader，例如 `pug-plain-loader`，而不是使用 `pug-loader`。

```bash
npm install -D pug pug-plain-loader
// webpack.config.js -> module.rules
{
  test: /\.pug$/,
  loader: 'pug-plain-loader'
}
```

然后你可以写：

```html
<template lang="pug"> div h1 Hello world! </template>
```

如果你还打算使用它在 JavaScript 中将 `.pug` 文件作为字符串导入，你需要在这个预处理 loader 之后链上 `raw-loader`。注意添加 `raw-loader` 会破坏 Vue 组件内的用法，所以你需要定义两条规则，其中一条指向使用了一个 `resourceQuery` 的 Vue 文件，另一条指向 (回退到) JavaScript 导入：

```js
// webpack.config.js -> module.rules
{
  test: /\.pug$/,
  oneOf: [
    // 这条规则应用到 Vue 组件内的 `<template lang="pug">`
    {
      resourceQuery: /^\?vue/,
      use: ['pug-plain-loader']
    },
    // 这条规则应用到 JavaScript 内的 pug 导入
    {
      use: ['raw-loader', 'pug-plain-loader']
    }
  ]
}
```

## 5. Scoped CSS

当 `<style>` 标签有 `scoped` 属性时，它的 CSS 只作用于当前组件中的元素。这类似于 Shadow DOM 中的样式封装。它有一些注意事项，但不需要任何 polyfill。它通过使用 PostCSS 来实现以下转换：

```html
<style scoped>
  .example {
    color: red;
  }
</style>

<template>
  <div class="example">hi</div>
</template>
```

转换结果：

```html
<style>
  .example[data-v-f3f3eg9] {
    color: red;
  }
</style>

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
```

### 5.1. 混用本地和全局样式

你可以在一个组件中同时使用有 scoped 和非 scoped 样式：

```html
<style>
  /* 全局样式 */
</style>

<style scoped>
  /* 本地样式 */
</style>
```

### 5.2. 子组件的根元素

使用 `scoped` 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

### 5.3. 深度作用选择器

如果你希望 `scoped` 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 `>>>` 操作符：

```html
<style scoped>
  .a >>> .b {
    /* ... */
  }
</style>
```

上述代码将会编译成：

```css
.a[data-v-f3f3eg9] .b {
  /* ... */
}
```

有些像 Sass 之类的预处理器无法正确解析 `>>>`。这种情况下你可以使用 `/deep/` 或 `::v-deep` 操作符取而代之——两者都是 `>>>` 的别名，同样可以正常工作。

### 5.4. 动态生成的内容

通过 `v-html` 创建的 DOM 内容不受 scoped 样式影响，但是你仍然可以通过深度作用选择器来为他们设置样式。

### 5.5. 还有一些要留意

- **Scoped 样式不能代替 class**。考虑到浏览器渲染各种 CSS 选择器的方式，当 `p { color: red }` 是 scoped 时 (即与特性选择器组合使用时) 会慢很多倍。如果你使用 class 或者 id 取而代之，比如 `.example { color: red }`，性能影响就会消除。
- **在递归组件中小心使用后代选择器!** 对选择器 `.a .b` 中的 CSS 规则来说，如果匹配 `.a` 的元素包含一个递归子组件，则所有的子组件中的 `.b` 都将被这个规则匹配。

## 6. CSS Modules

[CSS Modules](https://github.com/css-modules/css-modules) 是一个流行的，用于模块化和组合 CSS 的系统。`vue-loader` 提供了与 CSS Modules 的一流集成，可以作为模拟 scoped CSS 的替代方案。

### 6.1. 用法

首先，CSS Modules 必须通过向 `css-loader` 传入 `modules: true` 来开启：

```js
// webpack.config.js
{
  module: {
    rules: [
      // ... 其它规则省略
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              // 开启 CSS Modules
              modules: true,
              // 自定义生成的类名
              localIdentName: "[local]_[hash:base64:8]",
            },
          },
        ],
      },
    ];
  }
}
```

然后在你的 `<style>` 上添加 `module` 特性：

```vue
<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
```

这个 `module` 特性指引 Vue Loader 作为名为 `$style` 的计算属性，向组件注入 CSS Modules 局部对象。然后你就可以在模板中通过一个动态类绑定来使用它了：

```vue
<template>
  <p :class="$style.red">This should be red</p>
</template>
```

因为这是一个计算属性，所以它也支持 `:class` 的对象/数组语法：

```vue
<template>
  <div>
    <p :class="{ [$style.red]: isRed }">Am I red?</p>
    <p :class="[$style.red, $style.bold]">Red and bold</p>
  </div>
</template>
```

你也可以通过 JavaScript 访问到它：

```vue
<script>
export default {
  created() {
    console.log(this.$style.red);
    // -> "red_1VyoJ-uZ"
    // 一个基于文件名和类名生成的标识符
  },
};
</script>
```

你可以查阅 [CSS Modules 规范](https://github.com/css-modules/css-modules)了解更多细节，诸如 [global exceptions](https://github.com/css-modules/css-modules#exceptions) 和 [composition](https://github.com/css-modules/css-modules#composition) 等。

### 6.2. 可选用法

如果你只想在某些 Vue 组件中使用 CSS Modules，你可以使用 `oneOf` 规则并在 `resourceQuery` 字符串中检查 `module` 字符串：

```js
// webpack.config.js -> module.rules
{
  test: /\.css$/,
  oneOf: [
    // 这里匹配 `<style module>`
    {
      resourceQuery: /module/,
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]_[hash:base64:5]'
          }
        }
      ]
    },
    // 这里匹配普通的 `<style>` 或 `<style scoped>`
    {
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }
  ]
}
```

### 6.3. 和预处理器配合使用

CSS Modules 可以与其它预处理器一起使用：

```js
// webpack.config.js -> module.rules
{
  test: /\.scss$/,
  use: [
    'vue-style-loader',
    {
      loader: 'css-loader',
      options: { modules: true }
    },
    'sass-loader'
  ]
}
```

### 6.4. 自定义的注入名称

在 `.vue` 中你可以定义不止一个 `<style>`，为了避免被覆盖，你可以通过设置 `module` 属性来为它们定义注入后计算属性的名称。

```html
<style module="a">
  /* 注入标识符 a */
</style>

<style module="b">
  /* 注入标识符 b */
</style>
```

## 7. 热重载

“热重载”不只是当你修改文件的时候简单重新加载页面。启用热重载后，当你修改 `.vue` 文件时，该组件的所有实例将在**不刷新页面**的情况下被替换。它甚至保持了应用程序和被替换组件的当前状态！当你调整模版或者修改样式时，这极大地提高了开发体验。

### 7.1. 状态保留规则

- 当编辑一个组件的 `<template>` 时，这个组件实例将就地重新渲染，并保留当前所有的私有状态。能够做到这一点是因为模板被编译成了新的无副作用的渲染函数。
- 当编辑一个组件的 `<script>` 时，这个组件实例将就地销毁并重新创建。(应用中其它组件的状态将会被保留) 是因为 `<script>` 可能包含带有副作用的生命周期钩子，所以将重新渲染替换为重新加载是必须的，这样做可以确保组件行为的一致性。这也意味着，如果你的组件带有全局副作用，则整个页面将会被重新加载。
- `<style>`  会通过  `vue-style-loader`  自行热重载，所以它不会影响应用的状态。

### 7.2. 用法

当使用脚手架工具 `vue-cli` 时，热重载是开箱即用的。

当手动设置你的工程时，热重载会在你启动 `webpack-dev-server --hot` 服务时自动开启。

高阶用户可能希望移步 `vue-loader` 内部使用的 [vue-hot-reload-api](https://github.com/vuejs/vue-hot-reload-api) 继续查阅。

### 7.3. 关闭热重载

热重载默认是开启的，除非遇到以下情况：

- webpack 的 `target` 的值是 `node` (服务端渲染)
- webpack 会压缩代码
- `process.env.NODE_ENV === 'production'`

你可以设置 `hotReload: false` 选项来显式地关闭热重载：

```js
module: {
  rules: [
    {
      test: /\.vue$/,
      loader: "vue-loader",
      options: {
        hotReload: false, // 关闭热重载
      },
    },
  ];
}
```

## 8. 函数式组件

在一个 `*.vue` 文件中以单文件形式定义的函数式组件，现在对于模板编译、scoped CSS 和热重载也有了良好的支持。

要声明一个应该编译为函数式组件的模板，请将 `functional` 特性添加到模板块中。这样做以后就可以省略 `<script>` 块中的 `functional` 选项。

模板中的表达式会在[函数式渲染上下文](https://cn.vuejs.org/v2/guide/render-function.html#函数式组件)中求值。这意味着在模板中，prop 需要以 `props.xxx` 的形式访问：

```vue
<template functional>
  <div>{{ props.foo }}</div>
</template>
```

你可以在 `parent` 上访问 `Vue.prototype` 全局定义的属性：

```vue
<template functional>
  <div>{{ parent.$someProperty }}</div>
</template>
```

## 9. 自定义块

在 `.vue` 文件中，你可以自定义语言块。应用于一个自定义块的 loader 是基于这个块的 `lang` 特性、块的标签名以及你的 webpack 配置进行匹配的。

如果指定了一个 `lang` 特性，则这个自定义块将会作为一个带有该 `lang` 扩展名的文件进行匹配。

你也可以使用 `resourceQuery` 来为一个没有 `lang` 的自定义块匹配一条规则。例如为了匹配自定义块 `<foo>`：

```js
{
  module: {
    rules: [
      {
        resourceQuery: /blockType=foo/,
        loader: "loader-to-use",
      },
    ];
  }
}
```

如果找到了一个自定义块的匹配规则，它将会被处理，否则该自定义块会被默默忽略。

此外，如果这个自定义块被所有匹配的 loader 处理之后导出一个函数作为最终结果，则这个 `*.vue` 文件的组件会作为一个参数被这个函数调用。

### 9.1. Example

这里有一个向组件内注入 `<docs>` 自定义块的示例，且它是在运行时可用的。

为了注入自定义块的内容，我们将会撰写一个自定义 loader：

```js
module.exports = function (source, map) {
  this.callback(
    null,
    `export default function (Component) {
      Component.options.__docs = ${JSON.stringify(source)}
    }`,
    map
  );
};
```

现在我们将会配置 webpack 来使用为 `<docs>` 自定义块撰写的自定义 loader。

```js
// wepback.config.js
module.exports = {
  module: {
    rules: [
      {
        resourceQuery: /blockType=docs/,
        loader: require.resolve("./docs-loader.js"),
      },
    ],
  },
};
```

现在我们可以在运行时访问被导入组件的 `<docs>` 块内容了。

```vue
<!-- ComponentB.vue -->
<template>
  <div>Hello</div>
</template>

<docs>
This is the documentation for component B.
</docs>
<!-- ComponentA.vue -->
<template>
  <div>
    <ComponentB />
    <p>{{ docs }}</p>
  </div>
</template>

<script>
import ComponentB from "./ComponentB.vue";

export default {
  components: { ComponentB },
  data() {
    return {
      docs: ComponentB.__docs,
    };
  },
};
</script>
```

## 10. CSS 提取

> 提示
>
> 请只在生产环境下使用 CSS 提取，这将便于你在开发环境下进行热重载。

### 10.1. webpack 4

```bash
npm install -D mini-css-extract-plugin
// webpack.config.js
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // 其它选项...
  module: {
    rules: [
      // ... 忽略其它规则
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // ... 忽略 vue-loader 插件
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
```

你还可以查阅 [mini-css-extract-plugin 文档](https://github.com/webpack-contrib/mini-css-extract-plugin)。

### 10.2. webpack 3

```bash
npm install -D extract-text-webpack-plugin
// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  // 其它选项...
  module: {
    rules: [
      // ...其它规则忽略
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader'
        })
      }
    ]
  },
  plugins: [
    // ...vue-loader 插件忽略
    new ExtractTextPlugin("style.css")
  ]
}
```

你也可以查阅 [extract-text-webpack-plugin 文档](https://github.com/webpack-contrib/extract-text-webpack-plugin)。

## 11. 代码校验

### 11.1. ESLint

官方的 [eslint-plugin-vue](https://eslint.vuejs.org/) 同时支持在 Vue 单文件组件的模板和脚本部分的代码校验。

请确认在你的 ESLint 配置文件中使用该插件要导入的配置：

```js
// .eslintrc.js
module.exports = {
  extends: ["plugin:vue/essential"],
};
```

接下来从命令行运行：

```bash
eslint --ext js,vue MyComponent.vue
```

另一个选项是使用 [eslint-loader](https://github.com/MoOx/eslint-loader) 那么你的 `*.vue` 文件在开发过程中每次保存的时候就会自动进行代码校验：

```bash
npm install -D eslint eslint-loader
```

请确保它是作为一个 pre-loader 运用的：

```js
// webpack.config.js
module.exports = {
  // ... 其它选项
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
```

### 11.2. stylelint

[stylelint](https://stylelint.io/) 支持在 Vue 单文件组件的样式部分的代码校验。

[请确认在你的 stylelint 配置文件正确。](https://stylelint.io/user-guide/configuration/)

接下来从命令行运行：

```bash
stylelint MyComponent.vue
```

另一个选项是使用 [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin):

```bash
npm install -D stylelint-webpack-plugin
```

请确保它是作为一个插件运用的：

```js
// webpack.config.js
const StyleLintPlugin = require("stylelint-webpack-plugin");
module.exports = {
  // ... 其它选项
  plugins: [
    new StyleLintPlugin({
      files: ["**/*.{vue,htm,html,css,sss,less,scss,sass}"],
    }),
  ],
};
```

## 12. 测试

- [Vue CLI](https://github.com/vuejs/vue-cli) 提供了预配置的单元测试和 e2e 测试安装。
- 如果你有兴趣为 `*.vue` 文件手动设置单元测试，请查询 [@vue/test-utils](https://vue-test-utils.vuejs.org/zh/) 的文档，这份文档涵盖了对 [mocha-webpack](https://vue-test-utils.vuejs.org/zh/guides/#用-mocha-和-webpack-测试单文件组件) 或 [Jest](https://vue-test-utils.vuejs.org/zh/guides/#用-jest-测试单文件组件) 的设置。

## 13. 参考资料

- [Vue Loader 官网](https://vue-loader.vuejs.org/zh/)
- [Vue Loader Github](https://github.com/vuejs/vue-loader)
