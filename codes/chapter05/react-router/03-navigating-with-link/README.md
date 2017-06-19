# Navigating with Link(使用链接导航)

也许在您应用中最常用的组件是 `Link`。它几乎与您惯用的 `<a/>` 标记完全相同，除了它知道被它渲染的 `Router`。

让我们为我们的 App 组件创建几个导航。

修改 `app/index.js` 文件如下：

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Repos from './components/Repos';

ReactDOM.render((
  // 注意：Router 只能有一个子元素
  <Router>
    <div>
      <ul role="nav">
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/about">About Page</Link></li>
        <li><Link to="/repos">Repos Page</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
), document.getElementById('root'));

```

现在访问 [http://localhost:9000](http://localhost:9000) ，并点击超链接，应该可以跳转到制定页面了。
