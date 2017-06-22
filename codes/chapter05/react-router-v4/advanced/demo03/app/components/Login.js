import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthUtil from '../utils/AuthUtil';

class Login extends React.PureComponent {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    AuthUtil.authenticate(() => {
      console.log("login");
      this.setState({ redirectToReferrer: true })
    })
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      console.log("redirect to " + JSON.stringify(from));
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <h1>Login 页面</h1>
        <p>若想访问 {from.pathname} ，你需要先登录</p>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}
export default Login;

