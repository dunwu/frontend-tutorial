/**
 * Created by zhangpeng0913 on 2017/5/26.
 */
import React from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
// 开始引入各种自定义的组件
import App from '../container/App/App';
import Welcome from '../views/Welcome/Welcome';
import Error from '../views/Error/Error';
import Hello from '../views/Hello/Hello';

// 路由表, 只要menu.js中所有的叶子节点配置了路由就可以了
// 我本来想根据menu.js自动生成路由表, 但那样太不灵活了, 还是自己配置好些
export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>

      <Route path="daohang">
        <Route path="555" component={Hello}/>
        <Route path="sanji">
          <Route path="666" component={Hello}/>
          <Route path="777" component={Hello}/>
          <Route path="888" component={Hello}/>
          <Route path="999" component={Hello}/>
        </Route>
      </Route>

      <Route path="test">
        <Route path="aaa" component={Hello}/>
        <Route path="bbb" component={Hello}/>
        <Route path="ccc" component={Hello}/>
        <Route path="sanjiaaa">
          <Route path="666aa" component={Hello}/>
        </Route>
        <Route path="sanjibbb">
          <Route path="666bb" component={Hello}/>
        </Route>
      </Route>

      <Route path="headerMenu5">
        <Route path="headerMenu5000000" component={Hello}/>
        <Route path="headerMenu51111">
          <Route path="headerMenu51111aa" component={Hello}/>
          <Route path="headerMenu51111bb" component={Hello}/>
        </Route>
        <Route path="headerMenu52222">
          <Route path="headerMenu52222aa" component={Hello}/>
          <Route path="headerMenu52222bb" component={Hello}/>
        </Route>
      </Route>

      <Route path="headerMenu4" component={Hello}/>
      <Route path="alone" component={Hello}/>
      <Route path="alone2" component={Hello}/>

      <Route path="*" component={Error}/>

    </Route>
  </Router>
);
