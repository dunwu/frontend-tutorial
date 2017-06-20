# React Router Tutorial

## 简介

[React Router Tutorial](https://github.com/reactjs/react-router-tutorial) 是官方的示例教程。

示例代码精炼易懂，非常适合学习 react-router 的新手。

这里，将其搬迁过来，并翻译为中文。水平有限，翻译不当之处，敬请指出。

### 运行环境

先确定你本地安装了最新的 [<u>Node.js</u>](https://nodejs.org/en/)（npm会随Node.js一起安装）。

### 使用方法

本目录下的所有示例 app ，如果没有特殊说明，使用方法都遵照下面步骤：

1. **npm install**

   官方的示例教程分为多个 lesson，每个 lesson 都可视为一个独立的 app （都含有 `package.json` 和 `webpack.config.js`）。

   这意味着：每次运行不同的示例，你都需要先执行 `npm install` 来安装依赖库。但是这些示例中使用的很多库都是重复的，这就很浪费时间了。因此，我将所有依赖统一放在外部目录的 `package.json` 文件中。

   现在，你只要在 example 目录下执行一次 `npm install` 。

2. **webpack-dev-server**

   在不同示例 app 的目录下直接执行 `webpack-dev-server` 就可以启动 app。

3. **访问 url**

   接下来，打开 [http://localhost:9000](http://localhost:9000) 

## 示例说明

### demo01

> Setting up the Project(设置项目)
>
> 本例将展示如何用 `webpack` + `npm` 来建立一个简单的 web 服务。
>

按照 `简介 - 使用方法` 步骤执行。

应该可以在浏览器中看到 `Hello, React Router` 消息。

### demo02

> Rendering a Route(渲染一个路由)

首先，`Router` 是一个组件。

```jsx
render(<Router/>, document.getElementById("root"))
```

如果不配置 `Route`，什么也不会展示。

修改 `app/index.js` 文件如下：

1. 导入 `HashRouter` 、`Route`
2. 渲染一个 `Router` 来替代 `App` 

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './components/App';

ReactDOM.render((
  // 注意：Router 只能有一个子元素
  <Router>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById("root"));
```

> ​:warning: **注意：**
>
> react-router4 新增了 `HashRouter` 、`BrowserRouter` 组件，你无需再自己引入用于导航的 `history` 。

按照 `简介 - 使用方法` 步骤执行。

应该可以在浏览器中看到与 `demo01` 相同的屏幕内容，但这次URL中存在一些垃圾我们使用hashHistory  - 它使用URL的哈希部分管理路由历史。它会在浏览器使用真正的网址时时产生额外的垃圾（形式如：http://127.0.0.1:9000/#）。

你可以试着使用 `BrowserRouter` ，用法与 `HashRouter` 相同，url 中将不会出现 `#` 符号。

### demo03

> Navigating with Link(使用链接导航)
>
> 也许在您应用中最常用的组件是 `Link`。它几乎与您惯用的 `<a/>` 标记完全相同，除了它知道被它渲染的 `Router`。
>
> 让我们为我们的 App 组件创建几个导航。

修改 `app/components/App.js` 文件如下：

让我们为 `App` 组件添加几个导航链接。

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
    )
  }
}
export default App;
```

按照 `简介 - 使用方法` 步骤执行。

尝试点击超链接，应该可以跳转到指定的页面了。

### demo04

> Nested Routes(嵌套路由)
>
> 我们添加到应用程序的导航应该可能存在于每个屏幕上。没有 React Router，我们可以将 `ul` 包装到一个组件中，例如 `Nav`，并在我们的每个屏幕上渲染一个 `Nav`。
>
> 这种方法不像应用程序增长那么干净。React Router 提供了另一种方式来与嵌套路由共享 UI。
>

#### 嵌套 UI 和 URL

你注意到你的 App 就像是一组层层包装的盒子吗？你是否也注意到你的 URL 也是有层级的呢？举一个url 例子， `/repos/123` ，我们的组件可能是像这样的：

```js
<App>       {/*  /          */}
  <Repos>   {/*  /repos     */}
    <Repo/> {/*  /repos/123 */}
  </Repos>
</App>
```

而我们的 UI 可能是这样的：

```
         +-------------------------------------+
         | Home Repos About                    | <- App
         +------+------------------------------+
         |      |                              |
Repos -> | repo |  Repo 1                      |
         |      |                              |
         | repo |  Boxes inside boxes          |
         |      |  inside boxes ...            | <- Repo
         | repo |                              |
         |      |                              |
         | repo |                              |
         |      |                              |
         +------+------------------------------+
```

React Router 通过嵌套路由，让你的 UI 自动成为嵌套的UI。

#### 分享我们的导航

让我们把 About 和 Repos 组件嵌套进 App 中，这样，我们就可以在任意地方复用 App 这个导航组件了。我们需要做两步：

1. 修改 `app/index.js` 文件内容

首先，为 App 创建子节点，并将隶属于它的 Route 移过来。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Repos from './components/Repos';

ReactDOM.render((
  // 注意：Router 只能有一个子元素
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
), document.getElementById("root"));
```

2. 修改 `app/components/App.js` 文件

接下来，渲染 App 内部的子节点。

```diff
import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Hello, React Router!</h1>
        <ul role="nav">
          <li><Link to="/about">About Page</Link></li>
          <li><Link to="/repos">Repos Page</Link></li>
        </ul>
+        {this.props.children}        
      </div>
    )
  }
}
export default App;
```

好了，现在尝试点击链接，然后留意 App 组件，可以发现子路由组件现在被 `this.props.children` 所包裹。

由 React Router 构建的 UI 就像这样：

```js
// at /about
<App>
  <About/>
</App>

// at /repos
<App>
  <Repos/>
</App>
```

> **路由与分治**
>
> 构建大家伙的最好方法是将小的事物拼在一起。
>
> 这就是“分治”思想。同时也是 React Router 的真正强大之处。所有的 Route 可以被作为独立应用去开发。你的路由配置可以按照你的需要随意组合。应用就像是大盒子中包含着多个小盒子，小盒子中又包含着更小的盒子。
>
> 如果将 About 移到 App 之外，会发生什么？

demo05
demo06
demo07
demo08
demo09
demo10
demo11
demo12
demo13
demo14




