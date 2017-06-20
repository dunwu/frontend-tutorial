# React Router Tutorial

## 简介

> 本示例教程参考 [React Router Tutorial](https://github.com/reactjs/react-router-tutorial) 和 [React Router4 官方示例](https://reacttraining.com/react-router/web/example/basic) ，基于 React Router 4.x 编写。
>
> 需要注意的是：React Router 4.x 与以前版本有非常大的差异。
>
> 示例代码精炼易懂，非常适合学习 react-router 的新手。
>

### 运行环境

先确定你本地安装了最新的 [<u>Node.js</u>](https://nodejs.org/en/)（npm会随Node.js一起安装）。

### 使用方法

> ​:pushpin: **提示：**
>
>  `codes/chapter05/react-router` 所有示例中需要的依赖已添加到目录下的 `package.json` 文件中。因此，你只需要执行 `npm install` 命令一次，就可以使用所有示例。

1. 使用 webpack-dev-server 启动一个 web app

   执行命令：

   ```bash
   $ npm install -g webpack-dev-server@2.x # 如果你没有在全局安装 webpack-dev-server2，请安装一下吧
   $ webpack-dev-server
   ```

2. 在浏览器中访问 http://localhost:9000


## 示例说明

### demo01 - Setting up the Project

> **Setting up the Project(设置项目)**
>
> 本例将展示如何用 `webpack` + `npm` 来建立一个简单的 web 服务。
>

按照 `简介 - 使用方法` 步骤执行。

应该可以在浏览器中看到 `Hello, React Router` 消息。

### demo02 - Rendering a Route

> **Rendering a Route(渲染一个路由)**

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

### demo03 - Navigating with Link

> **Navigating with Link(使用链接导航)**
>
> 也许在您应用中最常用的组件是 `Link`。它几乎与您惯用的 `<a/>` 标记完全相同，除了它知道被它渲染的 `Router`。
>
> 让我们为我们的 App 组件创建几个导航。

修改 `app/index.js` 文件：

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Topics from './components/Topics';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
), document.getElementById("root"));
```

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
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/topics">主题</Link></li>
        </ul>
      </div>
    )
  }
}
export default App;
```

按照 `简介 - 使用方法` 步骤执行。

尝试点击超链接，应该可以跳转到指定的页面了。

### demo04 - Nested Routes

> **Nested Routes(嵌套路由)**
>
> 我们添加到应用程序的导航应该可能存在于每个屏幕上。没有 React Router，我们可以将 `ul` 包装到一个组件中，例如 `Nav`，并在我们的每个屏幕上渲染一个 `Nav`。
>
> 这种方法不像应用程序增长那么干净。React Router 提供了另一种方式来与嵌套路由共享 UI。
>

#### 嵌套 UI 和 URL

你注意到你的 App 就像是一组层层包装的盒子吗？你是否也注意到你的 URL 也是有层级的呢？举一个url 例子， `/topics/topicA` ，我们的组件可能是像这样的：

```jsx
<App>       {/*  /          */}
  <Topics>   {/*  /topics     */}
    <TopicA/> {/*  /topics/topicA */}
  </Topics>
</App>
```

而我们的 UI 可能是这样的：

```
          +--------------------------------------+
          | Home Topics About                    | <- App
          +-------+------------------------------+
          |       |                              |
Topics -> | topic |  Topic A                     |
          |       |                              |
          | topic |  Boxes inside boxes          |
          |       |  inside boxes ...            | <- Topic
          | topic |                              |
          |       |                              |
          | topic |                              |
          |       |                              |
          +------+-------------------------------+
```

React Router 通过嵌套路由，让你的 UI 自动成为嵌套的UI。

#### 分享我们的导航

让我们把 TopicA 和 TopicB 组件嵌套进 Topics 中，这样，我们就可以在任意地方复用 Topics 这个导航组件了。我们需要做两步：

1. 修改 `app/components/Topics.js` 文件

接下来，渲染 App 内部的子节点。

```jsx
import React from 'react';
import { Link, Route } from 'react-router-dom';
import TopicA from './TopicA';
import TopicB from './TopicB';

class Topics extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>主题</h1>
        <ul>
          <li><Link to="/topics/topicA">主题A</Link></li>
          <li><Link to="/topics/topicB">主题B</Link></li>
        </ul>

        <hr/>

        <Route path="/topics/topicA" component={TopicA}/>
        <Route path="/topics/topicB" component={TopicB}/>
      </div>
    )
  }
}
export default Topics;
```

好了，现在尝试点击链接，然后留意 App 组件，可以发现子路由组件现在被 `this.props.children` 所包裹。

由 React Router 构建的 UI 就像这样：

```jsx
<App>
  <About/>
</App>

<App>
  <Topics>
    <TopicA/>
    <TopicB/>
  </Topics>
</App>
```

> **路由与分治**
>
> 构建大家伙的最好方法是将小的事物拼在一起。
>
> 这就是“分治”思想。同时也是 React Router 的真正强大之处。所有的 Route 可以被作为独立应用去开发。你的路由配置可以按照你的需要随意组合。应用就像是大盒子中包含着多个小盒子，小盒子中又包含着更小的盒子。
>
> 如果将 About 移到 App 之外，会发生什么？

### demo05 - Url Params

> **Url Params(URL 参数)**
>
> 观察一下下面的 URL：
>
> ```
> /topics/topicA/react
> /topics/topicB/react-router
> ```
>
> 这些 URL 可能匹配这样的路由路径：
>
> ```
> /topics/:topicId/:topicName
> ```
>
> 以 `:` 开始的部分是 URL 参数，这些参数的值将被解析出来并用于 `match.params.xxx` 上的路由组件。

现在，我们来改造一下 `demo04` 的 `Topics` 组件：

修改 `app/components/Topics.js` 文件如下：

```jsx
import React from 'react';
import { Link, Route } from 'react-router-dom';

const Topic = ({ match }) => (
  <div>
    <h3>主题ID: {match.params.topicId}</h3>
    <h3>主题名: {match.params.topicName}</h3>
  </div>
);

class Topics extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>主题列表</h1>
        <ul>
          <li><Link to="/topics/topicA/react">主题A</Link></li>
          <li><Link to="/topics/topicB/react-router">主题B</Link></li>
        </ul>

        <hr/>

        <Route path="/topics/:topicId/:topicName" component={Topic}/>
      </div>
    )
  }
}
export default Topics;

```

### demo06 - Ambiguous Matches

> **Ambiguous Matches(模糊匹配)**
>
> `demo05` 中，我们学习了React Router如何使用 url 参数。基于此，我们可以更进一步：使用模糊匹配。

有时你想要允许类似 `/about` 和 `/company` 的这种静态路径，而且同时需要允许类似 `/:user` 这种对于路径参数的匹配。

那么，问题来了： `/about` 在这里是模糊的，它会同时匹配 `/about` 和 `/:user` 。大多数路由系统都有一套自己的算法来决定哪些路径可以匹配哪些不能匹配，从而匹配到一个确定的路由 route 。

你可以使用 React Router 在很多不同的地方匹配路径。例如：sidebars，breadcrumbs 等等。当你你想匹配 `/about` 而不想同时也匹配到 `/:user` 时，你可以使用 `<Switch>` 来把你的 `<Route>` 包一层，在  `<Switch>` 里的第一个匹配对象就会被渲染出来。

`<Switch>` 的独特之处在于它仅仅渲染一个路由。相反地，每一个包含匹配地址(location)的 `<Route>` 都会被渲染。

下面就是一个例子：

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';

const About = () => <h2>关于</h2>;
const Company = () => <h2>公司</h2>;
const User = ({ match }) => (
  <div>
    <h2>用户：{match.params.user}</h2>
  </div>
);

ReactDOM.render((
  <Router>
    <div>
      <ul>
        <li><Link to="/about">关于(static)</Link></li>
        <li><Link to="/company">公司(static)</Link></li>
        <li><Link to="/kim">Kim (dynamic)</Link></li>
        <li><Link to="/chris">Chris (dynamic)</Link></li>
      </ul>

      <hr/>

      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/company" component={Company}/>
        <Route path="/:user" component={User}/>
      </Switch>
    </div>
  </Router>
), document.getElementById("root"));
```

demo07
demo08
demo09
demo10
demo11
demo12
demo13
demo14




