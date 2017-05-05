# Flux

Flux 是 Facebook 用于构建客户端 Web 应用程序的应用程序架构。它通过使用单向数据流补充了 React 的可组合视图组件。它更多的是一种模式而不是一个正式的框架。

## 基本概念

### 结构

Flux 将一个应用分成四个部分：

- **View**： 视图层
- **Action**（动作）：视图层发出的消息（比如mouseClick）
- **Dispatcher**（派发器）：用来接收Actions、执行回调函数
- **Store**（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面

### 数据流

**Flux模式的核心就是数据的"单向流动"。**

![flux-simple-f8-diagram-explained.png](images/flux-simple-f8-diagram-explained.png)

数据流动说明：

```
1. 用户访问 View
2. View 发出用户的 Action
3. Dispatcher 收到 Action，要求 Store 进行相应的更新
4. Store 更新后，发出一个"change"事件
5. View 收到"change"事件后，更新页面
```

## 参考资料

[Flux 官网](https://facebook.github.io/flux/)

[Flux 架构入门教程](http://www.ruanyifeng.com/blog/2016/01/flux.html)

## :door: 传送门
| [回首頁](https://github.com/atlantis1024/react-step-by-step) |