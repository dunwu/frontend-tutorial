import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthUtil from '../utils/AuthUtil';

const AuthButton = withRouter(({ history }) => (
  AuthUtil.isAuthenticated ? (
    <p>
      欢迎!
      <button onClick={() => {
        AuthUtil.signout(() => history.push('/'))
        console.log("logout");
      }}>登出
      </button>
    </p>
  ) : (
    <p>请先登录</p>
  )
));
export default AuthButton;
