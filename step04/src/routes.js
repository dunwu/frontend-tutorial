/**
 * Created by victor zhang on 2017/4/24.
 */
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
// 引入单个页面（包括嵌套的子页面）
import App from "./components/App.js";
import Home from "./views/Home/Home.js";
import CardBox from "./views/CardBox/CardBox.js";
import NoMatch from "./views/NoMatch/NoMatch.js";

const MyRouter = () => (
  <HashRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cardbox" component={CardBox}/>
        <Route component={NoMatch}/>
      </Switch>
    </App>
  </HashRouter>
);
export default MyRouter;