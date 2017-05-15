/**
 * Created by victor zhang on 2017/4/24.
 */
import React from "react";
import {Link} from "react-router-dom";
import {Icon, Layout, Menu} from "antd";
import "./Full.less";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavPath from "../../components/NavPath/NavPath";
const SubMenu = Menu.SubMenu;
const {Content, Sider} = Layout;

export default class Full extends React.Component {

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      current: '',
      username: '',
      collapsed: false,
      mode: 'inline'
    }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  };

  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    this.setState({
      username: 'victor zhang'
    })
  };

  render() {
    return (
      <Layout className="ant-layout">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <img alt="logo" src={require('../../assets/images/logo.png')} id="logo"/>
          <Menu theme="dark"
                onClick={this.handleClick}
                defaultOpenKeys={['1', '2']}
                defaultSelectedKeys={[this.state.current]}
                mode={this.state.mode}
          >
            <SubMenu key="1" title={<span><Icon type="bars"/><span className="nav-text">导航一</span></span>}>
              <Menu.Item key="11"><Link to="/">首页</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="2" title={<span><Icon type="appstore"/><span className="nav-text">导航二</span></span>}>
              <Menu.Item key="21"><Link to="/cardbox">关于</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout>
          <Header/>
          <Content style={{margin: '0 16px'}}>
            <NavPath/>
            <div style={{padding: 24, background: '#fff', minHeight: 750}}>
              { this.props.children }
            </div>
          </Content>
          <Footer/>
        </Layout>

      </Layout>
    )
  }
}
