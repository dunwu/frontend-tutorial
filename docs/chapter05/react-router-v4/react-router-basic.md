# React Router v4 基础

> ​:warning: **注意：**
>
> React Router v4 有重大改变，很多 API 不兼容以往版本。
>
> 如果你的项目中使用了老版本的 React Router ，升级到 React Router v4 有不小的工作量，请慎重。

## 教程使用说明

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

### 示例

本文中的示例都有线上示例和源码，如需要查看，请分别点击 **DEMO** 和 **SOURCE** 链接。

### 知识点

本人一向信奉实践出真知，所以本文先展示 React Router 各种简单应用，不在示例中穿插较多的知识点讲述。示例中用到的 React Router v4 组件都可以在 [React Router v4 API](https://github.com/dunwu/react-step-by-step/tree/master/docs/chapter05/react-router-v4/react-router-api.md) 中找到说明。

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

> ​:flashlight: **示例DEMO01：** ([**DEMO**](https://dunwu.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo01/dist/index.html) / [**SOURCE**](https://github.com/dunwu/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo01))
>
> 在浏览器中访问 http://localhost:9000/，应该可以看到 `React Router Tutorial` 消息。

### Basic Route(基本路由)

1. 修改 `app/index.js` 文件，内容如下：

```jsx
ReactDOM.render((<Routes/>), document.getElementById("root"));
```

`Routes` 是我们将要自定义的路由容器。

如果向下面的代码一样，仅仅引入 `Router` ，而没有在 `Router` 中定义 `Route`，将什么也不会展示。

```jsx
ReactDOM.render((<Router/>), document.getElementById("root"));
```
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

> ​:flashlight: **示例DEMO02：** ([**DEMO**](https://dunwu.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo02/dist/index.html) / [**SOURCE**](https://github.com/dunwu/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo02))
>
> 在浏览器中访问 http://localhost:9000/，应该可以看到与 `DEMO01` 相同的结果。但是，由于我们使用了 `HashRouter` ，地址栏显示的地址中会含有 `#` 符号（形式如：http://localhost:9000/#）。你可以试着使用 `BrowserRouter` ，用法与 `HashRouter` 相同，url 中将不会出现 `#` 符号。
>
> 你可以在访问地址后面添加上下文路径 about (http://localhost:9000/#/about) 和 topic  (http://localhost:9000/#/topics)  ，来分别访问 About 页面和 Topics 页面。
>
> 线上示例，添加上下文路径一样可以访问对应页面。

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

> ​:flashlight: **示例DEMO03：** ([**DEMO**](https://dunwu.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo03/dist/index.html) / [**SOURCE**](https://github.com/dunwu/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo03))
>
> `DEMO02` 可以访问的页面，在 `DEMO03` 中都可以访问。
>
> 此外，新增了可访问页面：
>
> http://localhost:9000/#/topics/one
>
> http://localhost:9000/#/topics/two
>
> 线上示例，添加上下文路径一样可以访问对应页面。

### Navigating with link(使用链接导航)

前面的示例中，我们学习了使用基本路由、嵌套路由的配置，来控制我们访问的页面。

但是，很明显，每次在地址栏中输入访问路径非常麻烦。我们需要使用链接，React Router 提供了 Link 组件，功能和使用方式都与 `<a>` 十分相似。不同的是，`Link` 可以感知被它渲染的 `Router` 。

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

> ​:flashlight: **示例DEMO04：** ([**DEMO**](https://dunwu.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo04/dist/index.html) / [**SOURCE**](https://github.com/dunwu/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo04))
>
> 在浏览器中访问 http://localhost:9000/ ，此时页面中已经有了链接，点击链接可以跳转相应页面了。

### Redirect and No Match(重定向和未匹配)

React Router v4 可以通过 `Redirect` 组件来支持重定向功能。

此外，可以利用 `Switch` 组件和 `Route` 组件来处理未匹配路径。

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

> ​:flashlight:​ **示例DEMO05：** ([**DEMO**](https://dunwu.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo05/dist/index.html) / [**SOURCE**](https://github.com/dunwu/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo05))
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

> ​:flashlight: **示例DEMO06：** ([**DEMO**](https://dunwu.github.io/react-step-by-step/chapter05/react-router-v4/basic/demo06/dist/index.html) / [**SOURCE**](https://github.com/dunwu/react-step-by-step/tree/master/codes/chapter05/react-router-v4/basic/demo06))
>
