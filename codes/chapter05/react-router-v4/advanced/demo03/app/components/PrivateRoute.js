import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthUtil from '../utils/AuthUtil';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    props => (
      AuthUtil.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
);
export default PrivateRoute;
