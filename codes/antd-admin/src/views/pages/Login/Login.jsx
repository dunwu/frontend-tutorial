import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Form, Icon, Input, message, Row } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../../redux/actions/auth';

import './Login.less';

const FormItem = Form.Item;

const propTypes = {
  user: PropTypes.object,
  loggingIn: PropTypes.bool,
  loginErrors: PropTypes.string
};
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      loading: true
    });

    const data = this.props.form.getFieldsValue();
    this.props.login(data.user, data.password).payload.promise.then(res => {
      this.setState({
        loading: false
      });
      if (res.error) {
        message.error(res.payload.response.data.message);
      }
      if (!res.error && res.payload.data) {
        message.success('Welcome ' + res.payload.data.name);
        this.props.history.replace('/');
      }
    }).catch(err => {
      this.setState({
        loading: false
      });
    });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, setFieldsValue } = this.props.form;
    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Row className="login-row" type="flex" justify="space-around" align="middle">
        <Card className="login-form">
          <Row gutter={12} type="flex" justify="space-around" align="middle">
            <Col span="{6}">
            </Col>
            <Col span="{6}">
              <img src="http://cdn.instantlogosearch.com/svg/svgporn/react.svg" style={{ width: 50, height: 50 }}/>
            </Col>
            <Col span="{6}">
              <h1>React 管理系统</h1>
            </Col>
            <Col span="{6}">
            </Col>
          </Row>
          <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
            <FormItem validateStatus={userNameError ? 'error' : ''}
                      help={userNameError || ''}>
              {getFieldDecorator('user', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  className="input"
                  prefix={<Icon type="user" style={{ fontSize: 18 }}/>}
                  ref={node => this.userNameInput = node}
                  placeholder="admin"
                />
              )}
            </FormItem>
            <FormItem validateStatus={passwordError ? 'error' : ''}
                      help={passwordError || ''}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(
                <Input className="input" size="large"
                       prefix={<Icon type="lock" style={{ fontSize: 18 }}/>}
                       type='password'
                       placeholder='123456'/>
              )}
            </FormItem>
            <p>
              <Button className="btn-login" type='primary' size="large" icon="poweroff"
                      loading={this.state.loading}
                      htmlType='submit'
                      disabled={hasErrors(getFieldsError())}>确定</Button>
            </p>
          </Form>
        </Card>
      </Row>
    )
  }
}

Login.propTypes = propTypes;

Login = Form.create()(Login);

function mapStateToProps(state) {
  const { auth } = state;
  if (auth.user) {
    return { user: auth.user, loggingIn: auth.loggingIn, loginErrors: '' };
  }

  return { user: null, loggingIn: auth.loggingIn, loginErrors: auth.loginErrors };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
