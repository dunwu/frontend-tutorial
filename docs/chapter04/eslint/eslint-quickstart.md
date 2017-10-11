# ESLint 快速入门

> ESLint 是一种用于识别和报告 ECMAScript / JavaScript 代码中发现的模式的工具，目的是使代码更加一致并避免错误。

## 安装

### 本地安装

如果要将 ESLint 作为项目构建系统的一部分，我们建议在本地进行安装。你可以使用 npm：

```sh
$ npm install eslint --save-dev
```

然后您应该设置一个配置文件：

```sh
$ ./node_modules/.bin/eslint --init
```

之后，您可以在项目的根目录中运行 ESLint，如下所示：

```sh
$ ./node_modules/.bin/eslint yourfile.js
```

您使用的任何插件或可共享配置也必须在本地安装以与本地安装的 ESLint 配合使用。

### 全局安装

如果要使 ESLint 可用于跨所有项目运行的工具，我们建议在全局安装 ESLint。你可以使用 npm：

```sh
$ npm install -g eslint
```

然后您应该设置一个配置文件：

```sh
$ eslint --init
```

之后，您可以在任何文件或目录下运行ESLint，如下所示：

```sh
$ eslint yourfile.js
```

您使用的任何插件或可共享配置也必须全局安装，才能使用全局安装的 ESLint。

> 注意：eslint --init 旨在根据每个项目设置和配置 ESLint，并将 ESLint 及其插件的本地安装运行在其运行的目录中。如果您希望使用 ESLint 的全局安装，则配置中使用的任何插件也必须全局安装
>

## 配置

运行 `eslint --init` 后，您的目录中将有一个 `.eslintrc` 文件。在其中，您将看到一些如下配置的规则：

```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

`"semi"` 和 `"quotes"` 是ESLint中规则的名称。第一个值是规则的错误级别，可以是以下值之一：

`"off"` or `0` - 关闭规则

`"warn"` or `1` - 将规则作为警告（不影响退出代码）

`"error"` or `2` - 将规则作为错误（退出代码将为1）

这三个错误级别允许您细分控制ESLint如何应用规则（有关更多配置选项和详细信息，请参阅[配置文档](https://eslint.org/docs/user-guide/configuring)）。

您的 `.eslintrc` 配置文件也将包括以下行：

```json
"extends": "eslint:recommended"
```

由于这一行，[规则页面](https://eslint.org/docs/rules/)上的所有打钩的规则都将被打开。或者，您可以通过在 [npmjs.com](https://www.npmjs.com/search?q=eslint-config) 上搜索 “eslint-config” 来使用其他人创建的配置。 ESLint 不会删除您的代码，除非您从共享配置中扩展或在配置中明确地打开规则。

## 实战

React 项目中，通常会使用 React、JSX、ES6 等特性，所以 ESLint  推荐的检查规则可能还不能满足我们对代码检查的需要。

### ESLint 集成 Airbnb

业界比较流行的 [Airbnb JavaScript Style](https://github.com/airbnb/javascript) 可以说是一个不错的选择。

**那么如何让 ESLint 支持 Airbnb 呢？**

下面将一一道来。

#### eslint-config-airbnb

[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 该包将 Airbnb 的规则作为 ESLint 可扩展的共享配置。

**安装方法一**

执行 `eslint --init` 命令，依次选择 **Use a popular style guide** -> **Airbnb**

ESLint 会自动下载 Airbnb 扩展所需的所有插件。

**安装方法二**

ESLint 默认的下载地址是 https://registry.npmjs.org/ ，由于是外网，可能会很慢。

如果你使用淘宝的 cnpm，也可以自己下载 Airbnb 扩展所需的插件：

- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)


执行安装命令：

```sh
$ cnpm i -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-airbnb
```

#### babel-eslint

由于 React 项目往往会使用 ES6 特性。ES6 若想识别 ES6  特性，需要相应的解析器，[babel-eslint](https://github.com/babel/babel-eslint) 是比较流行的选择。

执行安装命令：

```sh
$ cnpm i -D babel-eslint
```

#### 配置

ESLint 支持几种格式的配置文件，个人推荐使用 `.eslintrc.js` ，这是官方优先级最高的配置文件。

配置文件中配置 Airbnb 有几个重点项：

```js
{
  // 指定校验的环境
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'commonjs': true
  },
  // 指定扩展标准
  'extends': ['airbnb'],
  // 指定解析器
  'parser': 'babel-eslint',
  // 指定插件
  'plugins': [
    'import',
    'jsx-a11y',
    'react'
  ],
  'rules': {
    ...
  }
}
```

Airbnb 的检查规则是比较严格的，如果你认为有些检查项没有必要，也可以自行在 `rules` 中修改。

#### 实例

这里，我抛砖引玉一下，给大家提供一个我自己的 DEMO 项目：[Demo](https://github.com/dunwu/react-step-by-step/tree/master/codes/chapter04/jigsaw)

我在 `config/.eslintrc.js` 中基于 [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 修改了一些定制的规则。
