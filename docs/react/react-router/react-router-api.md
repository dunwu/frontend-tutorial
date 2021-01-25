# React Router4 API

> ​:warning: **注意：**
>
> React Router v4 有重大改变，很多 API 不兼容以往版本。
>
> 如果你的项目中使用了老版本的 React Router ，升级到 React Router v4 有不小的工作量，请慎重。

## Router

1. **`Router` 通常不会被直接使用**

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

2. **`Router` 常用方式是与Redux 或者 Mobx 之类的状态管理库深度集成**

最常见的使用底层的 `<Router>` 的情形就是用来与 Redux 或者 Mobx 之类的状态管理库的定制的 history 保持同步。注意不是说使用状态管理库就必须使用 `<Router>`，它仅用作于深度集成。

### history

用来导航的 `history` 对象。

### children

需要渲染的单一组件。

**Router 使用示例**

```
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

<Router history={history}>
  <App/>
</Router>

/****************************************************************/
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()
<Router history={customHistory}/>

/****************************************************************/
<Router>
  <App/>
</Router>
```

## Route

`Route` 可以说是 React Router 最重要的组件。

`Route` 组件主要的作用就是当一个 `location` 匹配路由的 `path` 时，渲染某些 UI。

**Route 使用示例：**

```
import { BrowserRouter as Router, Route } from 'react-router-dom'

<Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/news" component={NewsFeed}/>
  </div>
</Router>

<div>
  <Home/>
  <!-- react-empty: 2 -->
</div>

<div>
  <!-- react-empty: 1 -->
  <NewsFeed/>
</div>
```

### Route 渲染方法

使用 `<Route>` 有三种渲染内容的方法：

- `<Route component>`
- `<Route render>`
- `<Route children>`

在不同的情况下每个都特别有用，对于某个 `<Route>`，你只能使用这些 props 其中的一个，绝大多数的时候会使用 `component`。

#### component

只有在地址匹配的时候React的组件才会被渲染，Route 属性(props) 也会随着一起被渲染。

如果使用 `component`，路由会根据指定的组件使用 `React.createElement` 来创建一个新的 React element。这就意味着如果你提供的是一个内联的函数的话，会带来很多意料之外的重新挂载。所以，对于内联渲染，要使用 `render` 属性。

使用示例：

```jsx
<Route path="/user/:username" component={User}/>
```

#### render

这种方式对于内联渲染和包装组件却不引起意料之外的重新挂载特别方便。

使用`render`属性，你可以选择传一个在地址匹配时被调用的函数，而不是像使用 `component` 属性那样得到一个新建的 React element。使用 `render` 属性会获得跟使用 `component` 属性一样的Route 属性(props)。

使用示例：

```jsx
<Route path="/home" render={() => <div>Home</div>}/>

// 包装/合成
const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <FadeIn>
      <Component {...props}/>
    </FadeIn>
  )}/>
)

<FadingRoute path="/cool" component={Something}/>
```

#### children

有时候你可能想不管地址是否匹配都渲染一些内容，这种情况你可以使用 `children` 属性。它与 `render` 属性的工作方式基本一样，除了它是不管地址匹配与否都会被调用。

除了在路径不匹配URL时 `match` 的值为 `null` 之外，`children` 渲染属性会获得与 `component` 和 `render` 一样的Route 属性(props)。这就允许你根据是否匹配路由来动态地调整 UI 了。

> ⚠️ **注意：**
>
> 优先级从高到低：`component` > `render` > `children`，所以不要在 `<Route>` 中同时使用一个以上的属性。

### Route 属性(props)

这三种[渲染方法](https://reacttraining.cn/web/api/Route/route-render-methods)都会获得相同的三个的属性：

- match
- location
- history

#### match

`match` 对象包含了 `<Route path>`  如何与URL匹配的信息。`match` 对象包含以下属性：

- `params` -（ object 类型）即路径参数，通过解析URL中动态的部分获得的键值对。
- `isExact` - 当为 `true` 时，整个URL都需要匹配。
- `path` -（ string 类型）用来做匹配的路径格式。在需要嵌套 `` 的时候用到。
- `url` -（ string 类型）URL匹配的部分，在需要嵌套 `` 的时候会用到。

你可以在以下地方获取 `match` 对象：

- 在 [Route component](https://reacttraining.cn/web/api/Route/component) 中，以 `this.props.match` 方式。
- 在 [Route render](https://reacttraining.cn/web/api/Route/render-func) 中，以 `({ match }) => ()` 方式。
- 在 [Route children](https://reacttraining.cn/web/api/Route/children-func) 中，以 `({ match }) => ()` 方式
- 在 [withRouter](https://reacttraining.cn/web/api/withRouter) 中，以 `this.props.match` 方式
- [matchPath](https://reacttraining.cn/web/api/withRouter) 的返回值

当一个 Route 没有 `path` 时，它会匹配一切路径，你会匹配到最近的父级。在`withRouter` 里也是一样的。

#### location

Location 是指你当前的位置，下一步打算去的位置，或是你之前所在的位置，形式大概就像这样：

可以使用以下几种方式来获取 location 对象：

- 在 [Route component](https://reacttraining.cn/web/api/Route/component) 中，以 `this.props.location` 的方式获取，

- 在 [Route render](https://reacttraining.cn/web/api/Route/render-func) 中，以 `({ location }) => ()` 的方式获取，

- 在 [Route children](https://reacttraining.cn/web/api/Route/children-func) 中，以 `({ location }) => ()` 的方式获取，

- 在 [withRouter](https://reacttraining.cn/web/api/withRouter) 中，以 `this.props.location` 的方式获取。

> ​:warning: 你也可以在 history.location 中获取 location 对象，但是别那么写，因为 history 是可变的。

location 对象不会发生改变，因此你可以在生命周期的钩子函数中使用 location 对象来查看当前页面的位置是否发生改变，这种技巧在获取远程数据以及使用动画时非常有用。

通常情况下，你只需要给一个字符串当做 location ，但是，当你需要添加一些 location 的状态时，你可以对象的形式使用 location 。并且当你需要多个 UI ，而这些 UI 取决于历史时，例如弹出框（modal），使用location 对象会有很大帮助。

使用示例：

```jsx
// 通常你只需要这样使用 location
<Link to="/somewhere"/>

// 但是你同样可以这么用
const location = {
  pathname: '/somewhere'
  state: { fromDashboard: true }
}

<Link to={location}/>
<Redirect to={location}/>
history.push(location)
history.replace(location)
```
#### history

每个 `Router` 会创建一个 [`history`](https://github.com/ReactTraining/history) 对象，history 可以管理 session 记录。 `Router` 使用 `history` 的 API (`pushState`, `replaceState` 和 `popstate` 事件) 来保持 UI 和 URL 的同步。

History 是 React Router 的两大重要依赖之一（除去 React 本身），在不同的 Javascript 环境中，`history` 以多种形式实现了对于 session 历史的管理。

React Router 会经常使用以下术语：

- `browser history` - history 在 DOM 上的实现，经常使用于支持 HTML5 history API 的浏览器端。
- `hash history` - history 在 DOM 上的实现，经常使用于旧版本浏览器端。
- `memory history` - 一种存储于内存的 history 实现，经常用于测试或是非 DOM 环境（例如 React Native）。

history 对象通常会具有以下属性和方法：

- length -（ number 类型）指的是 history 堆栈的数量。

- action -（ string 类型）指的是当前的动作（action），例如 PUSH，REPLACE 以及 POP 。
- location -（ object类型）是指当前的位置（location），location 会具有如下属性：
  - pathname -（ string 类型）URL路径。
  - search -（ string 类型）URL中的查询字符串（query string）。
  - hash -（ string 类型）URL的 hash 分段。
  - state -（ string 类型）是指 location 中的状态，例如在 push(path, state) 时，state会描述什么时候 location 被放置到堆栈中等信息。这个 state 只会出现在 browser history 和 memory history 的环境里。
- push(path, [state]) -（ function 类型）在 hisotry 堆栈顶加入一个新的条目。
- replace(path, [state]) -（ function 类型）替换在 history 堆栈中的当前条目。
- go(n) -（ function 类型）将 history 对战中的指针向前移动 n 。
- goBack() -（ function 类型）等同于 go(-1) 。
- goForward() -（ function 类型）等同于 go(1) 。
- block(prompt) -（ function 类型）阻止跳转

> ​:pushpin: **提示：**
>
> **history 是可变的（mutable）**
>
> history 对象是可变的，因此我们建议从 `Route` 的 prop里来获取 [`location`](https://reacttraining.cn/web/api/location) ，而不是从 `history.location` 直接获取。这样做可以保证 React 在生命周期中的钩子函数正常执行。
>

### path

可以是任何 path-to-regexp 能理解的有效URL。
没有 `path` 属性的 Route 总是会匹配。

### exact

当值为 true 时，则要求路径与 `location.pathname` 必须 *完全* 匹配。

### strict

当设为 true 的时候，有结尾斜线的路径只能匹配有斜线的 `location.pathname`，这个值并不会对`location.pathname` 中有其他的片段有影响。

## Redirect

渲染 `<Redirect>` 的时候将会导航到一个新的地址（location）。这个新的地址（location）将会覆盖在访问历史记录里面的原地址，就像服务端的重定向（HTTP 3XX）一样。

### to

重定向目标URL或目标地址(location)

### push

当设置为 true 时，重定向（redirecting）将会把新地址加入访问历史记录里面，而不是替换掉目前的地址。

### from

需要被重定向的路径（pathname）。当渲染一个包含在 `<Switch>` 里面的 `<Redirect>` 的时候，这可以用作匹配一个地址（location）。

## Link

为应用提供声明式的、无障碍导航。

也许在你的应用中最常用的 React Router 组件是 `Link`。它几乎与您惯用的 `<a/>` 标记完全相同。不同的是，`Link` 可以感知被它渲染的 `Router` 。

### to

需要跳转到的路径(pathname)或地址（location）。

### replace

当设置为 `true` 时，点击链接后将使用新地址替换掉访问历史记录里面的原地址。

当设置为 `false` 时，点击链接后将在原有访问历史记录的基础上添加一个新的纪录。

默认为 `false`。

### Link 使用示例

```jsx
<Link to="/about">关于</Link>

<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}/>
```

## Switch

渲染匹配地址(location)的第一个 `<Route>` 或者 `<Redirect>` 。

`<Switch>` 的独特之处是独它仅仅渲染一个路由。

思考下面的代码：

```jsx
<Route path="/about" component={About}/>
<Route path="/:user" component={User}/>
<Route component={NoMatch}/>
```

如果现在的URL是 `/about` ，那么 `<About>`, `<User>`, 还有 `<NoMatch>` 都会被渲染，因为它们都与路径(path)匹配。这种设计，允许我们以多种方式将多个 `<Route>` 组合到我们的应用程序中，例如侧栏(sidebars)，面包屑(breadcrumbs)，bootstrap tabs 等等。

 然而，有时候我们只想选择一个 `<Route>` 来渲染。如果我们现在处于 `/about` ，我们也不希望匹配 /:user （或者显示我们的 “404” 页面 ）。以下是使用 Switch 的方法来实现：

```jsx
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
```