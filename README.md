# react-step-by-step
首先，要声明一下，我是一名后端程序员。

React不仅仅是一个优秀的Javascript框架，而是一个整个技术栈。要发挥它的真正威力，不得不学习一大堆的技术。讲真，第一次接触时，光是一堆术语就可以直接让人晕菜。

网上有很多丰富的资料，但是，一步步将这些技术串起来的教程较少。react-step-by-step，是本人结合自身的学习过程，展示如何一步步搭建一个react脚手架。

限于二手的前端水平，肯定有很多不足之处，欢迎指正。

## step01 - html中使用react

> **关键点**
>
> - `react`

React 是一个用于构建用户界面的 JAVASCRIPT 库。

React可以直接在html中使用。

React 的安装包，可以到[官网](https://github.com/facebook/react/releases)下载。

使用`<script>`标签引入`react.min.js`和`react-dom.min.js` ，就可以使用react的语法。

需要注意，react的语法在很多浏览器中无法直接识别，为此，需要使用`browser.min.js`来进行解释。

```html
<script src="./lib/react.min.js"></script>
<script src="./lib/react-dom.min.js"></script>
<script src="./lib/browser.min.js"></script>
```

直接在浏览其中打开 [step01](https://github.com/atlantis1024/react-step-by-step/blob/master/step01) 目录下的 hello.html 和 ajax.html 可以看到使用react的演示效果。
