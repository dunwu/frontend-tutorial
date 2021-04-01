# Lodash 入门

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

Lodash 封装了很多实用的 JavaScript 方法，能大大提高开发效率，堪称 JavaScript 首选工具包。

<!-- TOC depthFrom:2 depthTo:3 -->

- [1. Lodash 的优点](#1-lodash-的优点)
- [2. Lodash 安装](#2-lodash-安装)
- [3. 参考资料](#3-参考资料)

<!-- /TOC -->

## 1. Lodash 的优点

Lodash 通过降低 array、number、objects、string 等等数据类型的使用难度，从而让 JavaScript 编程变得更简单。 Lodash 的模块化方法 非常适用于：

- 遍历 array、object 和 string
- 对值进行操作和检测
- 创建符合功能的函数

## 2. Lodash 安装

浏览器环境：

```html
<script src="lodash.js"></script>
```

通过 npm：

```
$ npm i -g npm
$ npm i --save lodash
```

Node.js：

```javascript
// Load the full build.
var _ = require("lodash");
// Load the core build.
var _ = require("lodash/core");
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require("lodash/fp");

// Load method categories.
var array = require("lodash/array");
var object = require("lodash/fp/object");

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require("lodash/at");
var curryN = require("lodash/fp/curryN");
```

ES6：

```javascript
import _ from "lodash";

_.defaults({ a: 1 }, { a: 3, b: 2 });
// → { 'a': 1, 'b': 2 }
_.partition([1, 2, 3, 4], (n) => n % 2);
// → [[1, 3], [2, 4]]
```

## 3. 参考资料

- [Lodash 官方文档](https://lodash.com/)
- [Lodash Github](https://github.com/lodash/lodash)
- [Lodash 中文文档](https://www.lodashjs.com/)
