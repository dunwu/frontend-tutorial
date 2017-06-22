# React Router 入门

## 简介

React Router 是一个基于 [React](http://facebook.github.io/react/) 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。

React Router v4 是一个纯粹的 React 重写的库。以前版本所需的路由配置已被删除，现在所有的配置都是“只是组件”。

React Router v4 被分为三个包：`react-router`，`react-router-dom` 和 `react-router-native`。`react-router` 提供核心路由组件和功能，而另外两个应用于特定工作环境：`react-router-dom` 用于浏览器，`react-router-native` 用于 `react-native`。

## 安装

### Web

```bash
$ npm install react-router-dom
# or
$ yarn add react-router-dom
```

所有的封装模块都可以从顶部导入：

```jsx
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link
  // etc.
} from 'react-router-dom'
```

### Native

```bash
$ yarn add react-router-native
# or if not using the react-native cli
$ npm install react-router-native
```

所有的封装模块都可以从顶部导入：

```jsx
import {
  NativeRouter as Router,
  DeepLinking,
  AndroidBackButton,
  Link,
  Route
  // etc.
} from 'react-router-native'
```

### Core

```bash
$ yarn add react-router
# or if not using the react-native cli
$ npm install react-router
```

所有的封装模块都可以从顶部导入：

```jsx
import {
  MemoryRouter as Router,
  Route
  // etc.
} from 'react-router'
```

## Router

启动新项目时，需要确定要使用的路由器类型。对于基于浏览器的项目，有<BrowserRouter>和<HashRouter>组件。当您有服务器来处理动态请求时，应使用<BrowserRouter>，而<HashRouter>应用于静态网站。

通常最好使用<BrowserRouter>，但如果您的网站将托管在仅提供静态文件的服务器上，则<HashRouter>是一个很好的解决方案。

对于我们的项目，我们将假设网站将由动态服务器支持，因此我们选择的路由器组件是<BrowserRouter>。

### History

每个 Router 会创建一个 [history](https://github.com/ReactTraining/history) 对象，它用于跟踪当前位置，并在每次更新时重新渲染网站。 React Router提供的组件依赖于通过上下文使历史对象可用，因此它们必须在路由器内部呈现。React Router如果没有一个 router 作为入口，那么其他组件将无法正常工作。