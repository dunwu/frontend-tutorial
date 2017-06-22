# React Router4 基础

## 本教程使用说明

### 运行环境

先确定你本地安装了最新的 [<u>Node.js</u>](https://nodejs.org/en/)（npm会随Node.js一起安装）。

### 使用方法

> :pushpin: **提示：**
>
>  `react-router-v4` 所有示例中需要的依赖已添加到目录下的 `package.json` 文件中。因此，你只需要执行 `npm install` 命令一次，就可以使用所有示例。

1. 使用 webpack-dev-server 启动一个 web app

   执行命令：

   ```bash
   $ npm install -g webpack-dev-server@2.x # 如果你没有在全局安装 webpack-dev-server2，请安装一下吧
   $ webpack-dev-server
   ```

2. 在浏览器中访问 http://localhost:9000

## 渐进式的示例

### Setting up the Project(设置项目)

让我们先从一个最简单的 React App 开始。

1. 新建 `app/index.js` 文件，内容如下：

```jsx
ReactDOM.render(<App/>, document.getElementById("root"));
```

以上代码表示 React 用一个名为 `<App/>` 组件去渲染 html 页面上的 id 为 `root` 的元素。

2. 新建 `app/App.js` 文件，内容如下：

```jsx
import React from 'react';

class App extends React.PureComponent {
  render() {
    return <h1>React Router Tutorial</h1>
  }
}
export default App;
```

以上代码定义了一个 App 组件，组件中的内容就是一个 `<h1>` 元素。

3. 按照 `本教程使用说明 - 使用方法` 步骤执行。

在浏览器中访问 http://localhost:9000/，应该可以看到 `React Router Tutorial` 消息。

> ​:flashlight:​ **示例DEMO01：** ([**DEMO**](https://atlantis1024.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo01/dist/index.html) / [**SOURCE**](https://github.com/atlantis1024/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo01))

### Basic Route(基本路由)

1. 修改 `app/index.js` 文件，内容如下：

```jsx
ReactDOM.render((<Routes/>), document.getElementById("root"));
```

`Routes` 是我们将要自定义的路由容器。

2. 新增 `app/routes.js` 文件，内容如下：

```jsx
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Topics from './components/Topics';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </Switch>
  </Router>
);
export default Routes;
```

以上代码中，我们定义了 `Routes` 组件，它包含了 `Router` 。

3. 新增组件 About 和 Topics

**About 组件**

```jsx
class About extends React.PureComponent {
  render() {
    return <h2>关于</h2>
  }
}
```

**Topics 组件**

```jsx
class Topics extends React.PureComponent {
  render() {
    return <h2>主题</h2>
  }
}
```


4. 按照 `本教程使用说明 - 使用方法` 步骤执行。

在浏览器中访问 http://localhost:9000/，应该可以看到与 `demo01` 相同的结果。但是，由于我们使用了 `HashRouter` ，地址栏显示的地址中会含有 `#` 符号。你可以试着使用 `BrowserRouter` ，用法与 `HashRouter` 相同，url 中将不会出现 `#` 符号。

访问 http://localhost:9000/#/about ，可以看到 About 页面

访问 http://localhost:9000/#/topics ，可以看到 Topics 页面

> ​:flashlight:​ **示例DEMO02：** ([**DEMO**](https://atlantis1024.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo02/dist/index.html) / [**SOURCE**](https://github.com/atlantis1024/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo02))

### Nested Routes(嵌套路由)

1. 修改 `app/routes.js` 文件，内容如下：

```jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const One = () => (
  <h3>主题一</h3>
);

const Two = () => (
  <h3>主题二</h3>
);

class Topics extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>主题</h2>
        <Switch>
          <Route exact path='/topics'/>
          <Route path='/topics/one' component={One}/>
          <Route path='/topics/two' component={Two}/>
        </Switch>
      </div>
    )
  }
}
```

2. 按照 `本教程使用说明 - 使用方法` 步骤执行。

> ​:flashlight:​ **示例DEMO03：** ([**DEMO**](https://atlantis1024.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo03/dist/index.html) / [**SOURCE**](https://github.com/atlantis1024/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo03))
>

### Navigating with link(使用链接导航)

1. 修改 `app/components/App.js` 文件，内容如下：

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

2. 修改 `app/components/Topics.js` 文件，内容如下：

```jsx
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const One = () => (
  <h3>主题一</h3>
);

const Two = () => (
  <h3>主题二</h3>
);

class Topics extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>主题</h2>
        <ul role="nav">
          <li><Link to="/topics/one">主题一</Link></li>
          <li><Link to="/topics/two">主题二</Link></li>
        </ul>

        <hr/>

        <Switch>
          <Route exact path='/topics'/>
          <Route path='/topics/one' component={One}/>
          <Route path='/topics/two' component={Two}/>
        </Switch>
      </div>
    )
  }
}
export default Topics;
```

3. 按照 `本教程使用说明 - 使用方法` 步骤执行。

> ​:flashlight: **示例DEMO04：** ([**DEMO**](https://atlantis1024.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo04/dist/index.html) / [**SOURCE**](https://github.com/atlantis1024/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo04))
>

### Redirect and No Match(重定向和未匹配)

1. 修改 `app/routes.js` 文件，内容如下：

```jsx
import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Topics from './components/Topics';
import NoMatch from './components/NoMatch';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Redirect from="/redirect" to="/about"/>
      <Route component={NoMatch}/>
    </Switch>
  </Router>
);
export default Routes;
```

2. 修改 `app/components/App.js` 文件，内容如下：

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
          <li><Link to="/redirect">重定向到关于页面</Link></li>
          <li><Link to="/nomatch">无法匹配的页面</Link></li>
        </ul>
      </div>
    )
  }
}
export default App;
```

3. 新增 `app/components/NoMatch.js` 文件，内容如下：

```jsx
import React from 'react';

class NoMatch extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>无法匹配 <code>{this.props.location.pathname}</code></h2>
      </div>
    )
  }
}
export default NoMatch;
```

4. 按照 `本教程使用说明 - 使用方法` 步骤执行。

> ​:flashlight:​ **示例DEMO05：** ([**DEMO**](https://atlantis1024.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo05/dist/index.html) / [**SOURCE**](https://github.com/atlantis1024/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo05))
>

### Url Params(Url 参数)

1. 修改 `app/components/Topics.js` 文件，内容如下：

```jsx
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Topic extends React.PureComponent {
  render() {
    return (
      <div>
        <h3>ID: {this.props.match.params.id}</h3>
      </div>
    )
  }
}

class Topics extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>主题</h2>
        <ul role="nav">
          <li><Link to="/topics/one">主题一</Link></li>
          <li><Link to="/topics/two">主题二</Link></li>
        </ul>

        <hr/>

        <Switch>
          <Route exact path='/topics'/>
          <Route path='/topics/:id' component={Topic}/>
        </Switch>
      </div>
    )
  }
}
export default Topics;
```

2. 按照 `本教程使用说明 - 使用方法` 步骤执行。

> ​:flashlight: **示例DEMO06：** ([**DEMO**](https://atlantis1024.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo06/dist/index.html) / [**SOURCE**](https://github.com/atlantis1024/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo06))
>

## 知识点

### Router

`Router` 是所有路由组件共用的底层接口，一般应用并不会直接使用这个接口，而是使用高级的路由：

- `<BrowserRouter>`
- `<HashRouter>`
- `<NativeRouter>`
- `<MemoryRouter>`
- `<StaticRouter>`

启动新项目时，需要根据实际场景选择路由器类型。

对于基于浏览器的项目，`react-router-dom` 提供了 `<BrowserRouter>` 和 `<HashRouter>` 组件。当您有服务器来处理动态请求时，应使用 `<BrowserRouter>` ，而 `<HashRouter>` 应用于静态网站。通常最好使用 `<BrowserRouter>` ，但如果您的网站将托管在仅提供静态文件的服务器上，则 `<HashRouter>` 是一个很好的解决方案。

对于使用 [React Native](https://facebook.github.io/react-native/) 的移动端项目，`react-router-native` 提供了 `<NativeRouter>` 组件。

`react-router` 提供了 `<MemoryRouter>` 和 `<StaticRouter>` 组件。 `<MemoryRouter>` 组件将 url 的历史记录保存在内存中（不读取或写入地址栏），在测试和非浏览器环境（如React Native）中较有用。`<StaticRouter>` 是静态路由，顾名思义，就是从来不会改变地址的路由。

如果向下面的代码一样，仅仅引入 `Router` ，而没有在 `Router` 中定义 `Route`，将什么也不会展示。

```jsx
ReactDOM.render((<Router/>), document.getElementById("root"));
```

### History

每个 `Router` 会创建一个 [`history`](https://github.com/ReactTraining/history) 对象，history 可以管理 session 记录。 `Router` 使用 `history` 的 API (`pushState`, `replaceState` 和 `popstate` 事件) 来保持 UI 和 URL 的同步。

History 是 React Router 的两大重要依赖之一（除去 React 本身），在不同的 Javascript 环境中，`history` 以多种形式实现了对于 session 历史的管理。

> :pushpin: **提示：**
>
> React Router v4 以前的版本中，创建 `Router` 时，总是需要为其引入一个 `history` 对象。如下：
>
> ```jsx
> import { browserHistory } from 'react-router';
> ReactDOM.render(
>   <Router history={browserHistory} routes={routes} />,
>   document.getElementById("root")
> )
> ```
>
> React Router v4 的 `Router` 不用再显示的引入 `history` ，因为组件内部已经为其创建了合适的 `history` 对象。

### Route

要理解并使用好 React Router，最重要的可能就是 `Route` 组件了。

`Route` 组件主要的作用就是当一个location 匹配路由的 path 时，渲染某些 UI。

#### Route渲染方法

使用 `<Route>` 有三种渲染内容的方法：

- `<Route component>`
- `<Route render>`
- `<Route children>`

在不同的情况下每个都特别有用，对于某个 `<Route>`，你只能使用这些 props 其中的一个，绝大多数的时候会使用 `component`。

### Redirect

渲染 `<Redirect>` 的时候将会导航到一个新的地址（location）。这个新的地址（location）将会覆盖在访问历史记录里面的原地址，就像服务端的重定向（HTTP 3XX）一样。

### Link

为应用提供声明式的、无障碍导航。

也许在你的应用中最常用的 React Router 组件是 `Link`。它几乎与您惯用的 `<a/>` 标记完全相同，除了它知道被它渲染的 `Router`。

### Switch

渲染匹配地址(location)的第一个 `<Route>` 或者 `<Redirect>` 。

`<Switch>` 的独特之处是独它仅仅渲染一个路由。