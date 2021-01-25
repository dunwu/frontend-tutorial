<p align="center">
    <a href="https://dunwu.github.io/frontend-tutorial/" target="_blank" rel="noopener noreferrer">
        <img src="http://dunwu.test.upcdn.net/common/logo/dunwu-logo.png" alt="logo" width="150px"/>
    </a>
</p>

<p align="center">
    <img src="https://badgen.net/github/license/dunwu/frontend-tutorial" alt="license">
    <img src="https://travis-ci.com/dunwu/frontend-tutorial.svg?branch=master" alt="build">
</p>

<h1 align="center">FRONTEND-TUTORIAL</h1>

> 一个后端程序员的前端技术总结。
>
> - 🔁 项目同步维护：[Github](https://github.com/dunwu/frontend-tutorial/) | [Gitee](https://gitee.com/turnon/frontend-tutorial/)
> - 📖 电子书阅读：[Github Pages](https://dunwu.github.io/frontend-tutorial/) | [Gitee Pages](http://turnon.gitee.io/frontend-tutorial/)

## 📖 内容

![react-stack](https://raw.githubusercontent.com/dunwu/frontend-tutorial/master/docs/assets/images/react-stack.jpg)

### Html, Css, JavaScript

> 前端基础 - Html, Css, JavaScript

- [Html 入门](docs/base/html.md) - 关键词： `标签`, `元素`, `属性`
- [Css 入门](docs/css)
- [JavaScript 入门](docs/js)

### Nodejs

- [Node.js 入门](docs/nodejs/nodejs.md)
- [Npm 入门](docs/nodejs/npm.md) - 关键词： `nodejs`, `包管理`, `npm`, `cnpm`
- [Yarn 入门](docs/nodejs/yarn.md) - 关键词： `nodejs`, `包管理`, `yarn`

### Webpack

> [Webpack](docs/webpack) 是一个模组打包工具（module bundler）。其主要目的是将 JavaScript 文件捆绑在浏览器中，但它也能够转换，捆绑或打包任何资源文件。
>
> webpack 允许根据需要去加载应用程序的部件。使得 Javascript 应用可以高度复用。

- [如何学习 Webpack](docs/webpack/webpack-howto.md)
- [Webpack 概念](docs/webpack/concept.md)
- [Webpack 入门](docs/webpack/webpack-tutorial.md)
- [Webpack 资源管理](docs/webpack/asset-management.md)
- [Webpack 代码分离](docs/webpack/code-splitting.md)
- [Webpack 开发工具](docs/webpack/development.md)

### ES6, Babel, ESLint

- [Babel 入门](docs/es6/babel/babel-quickstart.md)
- [ES6 入门](docs/es6/es6/es6-quickstart.md)
- [ESLint 快速入门](docs/es6/eslint/eslint-quickstart.md)
- [ESLint 配置](docs/es6/eslint/eslint-configuration.md)
- [ESLint 命令](docs/es6/eslint/eslint-command.md)

### React 技术生态

- [React 入门](docs/react/react-quickstart.md)
- React Router
  - [React Router 简介](docs/react/react-router/react-router-introduction.md)
  - [React Router 基础](docs/react/react-router/react-router-basic.md)
  - [React Router 进阶](docs/react/react-router/react-router-advanced.md)
  - [React Router API](docs/react/react-router/react-router-api.md)
- Redux
  - [Flux 入门](docs/react/redux/Flux入门.md)
  - [Redux 入门](docs/react/redux/Redux入门.md)

## 📌 说明

- **docs** ：所有文档存放于 `docs` 目录。
- **codes** ：所有示例代码存放于 `codes` 目录。

我在学习 React 过程中，发现网上大部分示例动不动就是一大堆 React 技术整合在一起。这让初学者经常感觉很无力：一个技术还没搞懂，就要学另外一个技术，立不动心啊。

所以，我建立了一个连续性项目: `jigsaw（拼图）` 。之所以叫连续性项目，是因为它是一步步引入 React 技术。

每个 `jsgsaw` 目录，都是基于前面 chapter 的基础上，引入本 chapter 重点学习的技术。我觉得，通过这种方式，能更加晰的理解，如何搭建一个完整的 React 项目。
