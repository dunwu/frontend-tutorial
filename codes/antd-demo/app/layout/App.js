/**
 * Created by victor zhang on 2017/6/8.
 */
import React from 'react';
import './App.less';
import { Icon, Layout, Menu } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import MyFooter from './MyFooter/MyFooter';
import MyHeader from './MyHeader/MyHeader';
import MyContent from './MyContent/MyContent';
import NavPath from './NavPath/NavPath';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


class App extends React.PureComponent {
  state = {
    collapsed: false,
    mode: 'inline',
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  };

  render() {
    return (
      <Layout style={{ height: '100vh' }}>

        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo"/>
          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user"/><span className="nav-text">User</span></span>}
            >
              <Menu.Item key="1">Tom</Menu.Item>
              <Menu.Item key="2">Bill</Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2"
                     title={<span><Icon type="tags"/><span className="nav-text">主题</span></span>}
            >
              <Menu.Item key="4">
                <Link to='/topics/one'>
                  <Icon type="tag"/>主题一
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to='/topics/two'>
                  <Icon type="tag"/>主题一
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              <Link to='/about'>
                <Icon type="bulb"/>关于
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <MyHeader/>
          <Layout style={{ padding: '0 50px' }}>
            <NavPath/>
            <MyContent>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                ...
                <br />
                Really
                <br />...<br />...<br />...<br />
                long
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />
                content
              </div>
            </MyContent>
          </Layout>
          <MyFooter/>
        </Layout>
      </Layout>
    );
  }
}
export default App;
