/**
 * Created by victor zhang on 2017/4/24.
 */
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
// 引入单个页面（包括嵌套的子页面）
import Full from "./layouts/Full/Full";
import Home from "./views/Home/Home";
import CardBox from "./views/CardBox/CardBox";
import NoMatch from "./views/NoMatch/NoMatch";

const MyRouter = () => (
  <HashRouter>
    <Full>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cardbox" component={CardBox}/>
        <Route component={NoMatch}/>
      </Switch>
    </Full>
  </HashRouter>
);
export default MyRouter;
