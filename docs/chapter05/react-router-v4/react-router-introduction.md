# React Router v4 简介

![react-router-website](https://raw.githubusercontent.com/zp1024/react-step-by-step/master/docs/assets/images/react-router-website.png)

## 概述

> [React Router](https://github.com/ReactTraining/react-router) 是一个基于 [React](http://facebook.github.io/react/) 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。
>

React Router v4 的核心理念是**声明式可组合性（declarative composability）**。

相比于之前的 React Router 版本，**React Router v4 的每个功能都被组件化了**。这导致了大量的 API 变动，也就是说，**React Router v4 不兼容以往版本**。

React Router v4 被分为三个包：`react-router`，`react-router-dom` 和 `react-router-native`。

- `react-router` 提供核心路由组件和功能。
- `react-router-dom` 用于浏览器。
- `react-router-native` 用于 `react-native`。

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
