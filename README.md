# React 爬坑指南

初学 React 的时候，相信大部分人都有这样的体会：React 技术栈水太深，涉及的技术点太多了。

如今网上有不少 React 相关的教程，但多的是是完整的 React 项目，少的是庖丁解牛式的、一步步的搭建 React 项目框架的教程。而且，React 涉及的技术点很多，常常让人有种无从入手的感觉。

如果，你也有这样的困惑，不妨阅读一下 [如何学习React(react-howto)](https://github.com/petehunt/react-howto/blob/master/README-zh.md) 。这篇文章提出了一个合理的学习 React 技术栈的顺序，我认为很有道理。

本教程采用 react-howto 中提出的 React 技术栈学习路线，由浅入深，循序渐进的为你一一讲解 React 。

如果，你有任何疑问或建议，欢迎在 Issues 中提出。

![node](https://raw.githubusercontent.com/atlantis1024/react-step-by-step/master/docs/assets/images/logo/node.png)
![webpack](https://raw.githubusercontent.com/atlantis1024/react-step-by-step/master/docs/assets/images/logo/webpack.png)
![babel](https://raw.githubusercontent.com/atlantis1024/react-step-by-step/master/docs/assets/images/logo/babel.png)
![react](https://raw.githubusercontent.com/atlantis1024/react-step-by-step/master/docs/assets/images/logo/react.png)
![react-router](https://raw.githubusercontent.com/atlantis1024/react-step-by-step/master/docs/assets/images/logo/react-router.png)
![redux](https://raw.githubusercontent.com/atlantis1024/react-step-by-step/master/docs/assets/images/logo/redux.png)

## :memo: 内容

![react-stack](https://raw.githubusercontent.com/atlantis1024/react-step-by-step/master/docs/assets/images/react-stack.png)

* [***Chapter01 - React***](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/README.md)
    * [React入门](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/React入门.md)
    * [React 官方教程基础篇](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/react-basic-lessons.md)
        * [安装](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/01.installation.md)
        * [JSX 简介](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/02.introducing-jsx.md)
        * [元素渲染](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/03.rendering-elements.md)
        * [组件（component）和属性（props）](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/04.components-and-props.md)
        * [状态（State）和生命周期](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/05.state-and-lifecycle.md)
        * [事件处理](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/06.handling-events.md)
        * [条件渲染](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/07.conditional-rendering.md)
        * [列表 & Keys](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/08.lists-and-keys.md)
        * [表单](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/09.forms.md)
        * [状态提升](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/10.lifting-state-up.md)
        * [组合 vs 继承](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/11.composition-vs-inheritance.md)
        * [思考 React](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter01/react/basic/12.thinking-in-react.md)
* [***Chapter02 - Node, Npm, Yarn***](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter02/README.md)
    * [Node入门](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter02/node/Node入门.md)
    * [Node代码组织](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter02/node/Node代码组织.md)
    * [Node的IO操作](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter02/node/Node的IO操作.md)
    * [Npm入门](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter02/npm/Npm入门.md)
* [***Chapter03 - Webpack***](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter03/README.md)
    * [如何学习 Webpack](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter03/webpack/webpack-howto.md)
    * [Webpack 概念](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter03/webpack/concept.md)
    * [Webpack 入门](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter03/webpack/webpack-tutorial.md)
    * [Webpack 资源管理](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter03/webpack/asset-management.md)
    * [Webpack 代码分离](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter03/webpack/code-splitting.md)
    * [Webpack 开发工具](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter03/webpack/development.md)
* [***Chapter04 - ES6, Babel***](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter04/README.md)
    * [Babel 入门](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter04/babel/babel-tutorial.md)
    * [ES6 入门](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter04/es6/es6-tutorial.md)
* [***Chapter05 - React Router***](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter05/README.md)
    * [React Router v4 简介](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter05/react-router-v4/react-router-introduction.md)
    * [React Router v4 基础](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter05/react-router-v4/react-router-basic.md)
    * [React Router v4 进阶](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter05/react-router-v4/react-router-advanced.md)
    * [React Router v4 API](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter05/react-router-v4/react-router-api.md)
* [***Chapter06 - Flux, Redux***](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter06/README.md)
    * [Flux入门](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter06/flux/Flux入门.md)
    * [Redux入门](https://github.com/atlantis1024/react-step-by-step/tree/master/docs/chapter06/redux/Redux入门.md)

**Editing...**

## :triangular_ruler: 约定

正所谓无规矩不成方圆，一个画风严肃的项目应该有一套完整的规范，才不至于长歪了。

- **codes** ：所有示例代码存放于 `codes` 目录。

  我在学习 React 过程中，发现网上大部分示例动不动就是一大堆 React 技术整合在一起。这让初学者经常感觉很无力：一个技术还没搞懂，就要学另外一个技术，立不动心啊。

  所以，我建立了一个连续性项目: `jigsaw（拼图）` 。之所以叫连续性项目，是因为它是一步步引入 React 技术。

  每个 `jsgsaw` 目录，都是基于前面 chapter 的基础上，引入本 chapter 重点学习的技术。我觉得，通过这种方式，能更加晰的理解，如何搭建一个完整的 React 项目。


- **docs** ：所有文档存放于 `docs` 目录。并且文档遵循 [**GitBook**](https://github.com/GitbookIO/gitbook) 规范。为了取得更好的阅读效果，建议参照 [**docs 说明**](https://github.com/atlantis1024/react-step-by-step/tree/master/docs) 阅读本教程。


- **Git** ：使用 [gitmoji](https://github.com/carloscuesta/gitmoji/) 规范填写提交信息（带图标的提示信息很有趣）。
