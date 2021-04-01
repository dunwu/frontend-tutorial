# Prettier 入门

Prettier 是一个前端代码格式化工具。

Prettier 的优势：

- Prettier 支持多种语言
- Prettier 集成了大部分 IDE
- Prettier 配置项很简洁

<!-- TOC depthFrom:2 depthTo:3 -->

- [1. QuickStart](#1-quickstart)
- [2. 集成 IDE](#2-集成-ide)
- [3. 集成 Lint](#3-集成-lint)
- [4. Prettier 配置](#4-prettier-配置)
  - [4.1. 配置文件](#41-配置文件)
  - [4.2. 配置选项](#42-配置选项)
- [5. 参考资料](#5-参考资料)

<!-- /TOC -->

## 1. QuickStart

安装：`npm i -D prettier`

然后，在项目中添加一个 `prettier.config.js` 文件，其中设置 Prettier 的配置项。

下面是一份仅供参考的 Vue 项目的 Prettier 配置。

```javascript
module.exports = {
  printWidth: 120, // 每行最大代码长度（默认80）
  useTabs: false, // 缩进不使用tab，使用空格
  tabWidth: 2, // tab字符相当于多少个空格
  semi: false, // 句尾不添加分号
  singleQuote: true, // 使用单引号代替双引号
  proseWrap: "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  jsxBracketSameLine: false, // 在jsx中把 > 是否单独放一行
  trailingComma: "none", // 在对象或数组最后一个元素后面是否加逗号
  arrowParens: "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  // disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
  endOfLine: "auto", // 结尾是 \n \r \n\r auto
  htmlWhitespaceSensitivity: "ignore",
  jsxSingleQuote: true, // 在jsx中使用单引号代替双引号
};
```

执行 `prettier --write src/index.js` ，即可以将 `src/index.js` 文件的代码格式化。

## 2. 集成 IDE

以 WebStorm 为例。

（1）安装 Prettier 插件

![](https://raw.githubusercontent.com/dunwu/images/dev/snap/20210331150050.png)

（2）配置自动格式化

![](https://raw.githubusercontent.com/dunwu/images/dev/snap/20210331150202.png)

## 3. 集成 Lint

Prettier 可以集成各种 Lint 工具去做静态检查，如： eslint、tslint 等。

根据实际项目需要去集成即可，集成方法参考：https://prettier.io/docs/en/integrating-with-linters.html

## 4. Prettier 配置

### 4.1. 配置文件

`.prettierignore` 文件可以忽略指定的文件和文件夹。

Prettier 支持的配置文件

- `package.json` 文件中的 `"prettier"` 配置项
- `.prettierrc` 文件，内容格式为 JSON 或 YAML
- `.prettierrc.json`、`.prettierrc.yml`、`.prettierrc.yaml` 或 `.prettierrc.json5` 文件
- `.prettierrc.js`、`.prettierrc.cjs`、`prettier.config.js` 或 `prettier.config.cjs` 文件，使用 `module.exports`输出一个配置对象
- `.prettierrc.toml` 文件

### 4.2. 配置选项

详细配置请参考：https://prettier.io/docs/en/options.html

【示例】`prettier.config.js` 示例

```javascript
module.exports = {
  printWidth: 120, // 每行最大代码长度（默认80）
  useTabs: false, // 缩进不使用tab，使用空格
  tabWidth: 2, // tab字符相当于多少个空格
  semi: false, // 句尾不添加分号
  singleQuote: true, // 使用单引号代替双引号
  proseWrap: "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  jsxBracketSameLine: false, // 在jsx中把 > 是否单独放一行
  trailingComma: "none", // 在对象或数组最后一个元素后面是否加逗号
  arrowParens: "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  // disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
  endOfLine: "auto", // 结尾是 \n \r \n\r auto
  htmlWhitespaceSensitivity: "ignore",
  jsxSingleQuote: true, // 在jsx中使用单引号代替双引号
};
```

## 5. 参考资料

- [Prettier 官网](https://prettier.io/)
- [Prettier Github](https://github.com/prettier/prettier)
- [Prettier 看这一篇就行了](https://zhuanlan.zhihu.com/p/81764012?from_voters_page=true)
