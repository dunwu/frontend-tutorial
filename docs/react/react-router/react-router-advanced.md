# React Router v4 进阶

## 渐进式的示例

### Active Links(激活的链接)

1. 修改 `app/index.js` ，引入 css

```react
import "./index.css";
```

3. 修改 `app/components/Topics.js` 文件，内容如下：

```react
class Topics extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>主题</h2>
        <ul role="nav">
          <li>
            <NavLink to="/topics/one" activeClassName="active">
              主题一
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/topics/two"
              activeStyle={{ fontWeight: "bold", color: "red" }}
            >
              主题二
            </NavLink>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/topics" />
          <Route path="/topics/:id" component={Topic} />
        </Switch>
      </div>
    );
  }
}
```

### Ambiguous Match(模糊匹配)

1. 修改 `app/components/Topics.js` 文件，内容如下：

```react
import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

class Topic extends React.PureComponent {
  render() {
    return (
      <div>
        <h3>ID: {this.props.match.params.id}</h3>
      </div>
    );
  }
}

class Three extends React.PureComponent {
  render() {
    return (
      <div>
        <h3>主题三</h3>
      </div>
    );
  }
}

class Topics extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>主题</h2>
        <ul role="nav">
          <li>
            <NavLink
              to="/topics/one"
              activeStyle={{ fontWeight: "bold", color: "red" }}
            >
              主题一
            </NavLink>
          </li>
          <li>
            <NavLink to="/topics/two" activeClassName="active">
              主题二
            </NavLink>
          </li>
          <li>
            <NavLink to="/topics/three" activeClassName="active">
              主题三
            </NavLink>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/topics" />
          <Route path="/topics/three" component={Three} />
          <Route path="/topics/:id" component={Topic} />
        </Switch>
      </div>
    );
  }
}
export default Topics;
```

## 知识点

### NavLink

`<NavLink>` 是 `<Link>` 的一个特定版本，会在匹配上当前 URL 的时候会给已经渲染的元素添加样式参数。

`activeClassName` 表示当元素匹配上当前 URL 的时候, 这个类会被赋予给这个元素. 其默认值为  `active`, 这个值会被添加到  `className`  属性的后面(追加)

`activeStyle` 表示当元素被选中时, 为此元素添加样式。
