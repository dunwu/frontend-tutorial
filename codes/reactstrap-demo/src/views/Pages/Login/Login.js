import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group mb-0">
              <div className="card p-4">
                <div className="card-block">
                  <h1>登录</h1>
                  <p className="text-muted">登录到您的帐户</p>
                  <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input type="text" className="form-control" placeholder="Username"/>
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button type="button" className="btn btn-primary px-4">登录</button>
                    </div>
                    <div className="col-6 text-right">
                      <button type="button" className="btn btn-link px-0">忘记密码？</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                <div className="card-block text-center">
                  <div>
                    <h2>注册</h2>
                    <p>轻轻松松，快速注册。</p>
                    <button type="button" className="btn btn-primary active mt-3">现在注册！</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
