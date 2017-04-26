import React from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";

const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
);

const NewMatch = () => (
  <div>
    <h2>重定向后的页面</h2>
  </div>
);

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


const NoMatch = ({location}) => (
  <div>
    <h3>未找到的路径： <code>{location.pathname}</code></h3>
  </div>
);


const Topics = ({match}) => (
  <div>
    <h2>标题组</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          标题1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          标题2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          标题3
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>请选择一个标题</h3>
    )}/>
  </div>
);

const MyRoute = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/old-match">重定向前</Link></li>
        <li><Link to="/new-match">重定向后</Link></li>
        <li><Link to="/topics">标题组</Link></li>
        <li><Link to="/none">找不到的路由地址</Link></li>
      </ul>

      <hr/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Redirect from="/old-match" to="/new-match"/>
        <Route path="/new-match" component={NewMatch}/>
        <Route path="/topics" component={Topics}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
);
export default MyRoute