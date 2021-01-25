# Redux入门

`Redux` 是 JavaScript 状态容器，提供可预测化的状态管理。

可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。不仅于此，它还提供 超爽的开发体验，比如有一个[时间旅行调试器（redux-devtools）](https://github.com/gaearon/redux-devtools)可以编辑后实时预览。

Redux 除了和 [React](https://facebook.github.io/react/) 一起用外，还支持其它界面库。

Redux 由 [Flux](http://facebook.github.io/flux/) 演变而来，但受 [Elm](http://elm-lang.org/guide/architecture) 的启发，避开了 Flux 的复杂性。

## 概念

### 动机

JavaScript 中管理状态的难点：

- **JavaScript 需要管理比任何时候都要多的 state （状态）**。
- 管理不断变化的 state 非常困难：**state 在什么时候，由于什么原因，如何变化已然不受控制。**
- **来自前端开发领域的新需求**，如更新调优、服务端渲染、路由跳转前请求数据等等。

> **Redux 试图让 state 的变化变得可预测**。

### 三大原则

#### 单一数据源

整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

#### State 是只读的

惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

#### 使用纯函数来执行修改

为了描述 action 如何改变 state tree ，你需要编写 reducers。