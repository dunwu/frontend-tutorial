import { Icon, Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { matchPath, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { refreshMenu, refreshNavPath } from '../../redux/actions/menu';
import './Sidebar.less';
import logoImg from './antd.svg';

const { Sider } = Layout;

const isActive = (path, history) => {
  return matchPath(path, {
    path: history.location.pathname,
    exact: true,
    strict: false
  })
};

class Sidebar extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array
  };
  static defaultProps = {
    items: []
  };

  state = {
    openKey: "sub0",
    activeKey: "menu0",
    collapsed: false,
    mode: 'inline',
  };

  componentDidMount() {
    this.props.getAllMenu()
  }

  componentWillReceiveProps(nextProps) {
    Array.isArray(nextProps.items) && nextProps.items.map((item, i) => {
      Array.isArray(item.child) && item.child.map((node) => {
        if (node.url && isActive(node.url, this.props.history)) {
          this.menuClickHandle({
            key: 'menu' + node.key,
            keyPath: ['menu' + node.key, 'sub' + item.key]
          })
        }
      })
    });
  }

  menuClickHandle = (item) => {
    this.setState({
      activeKey: item.key
    });
    this.props.updateNavPath(item.keyPath, item.key)
  };

  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: !this.state.collapsed ? 'vertical' : 'inline',
    });
  };

  render() {
    const { items, history } = this.props;
    let { activeKey, openKey } = this.state;

    const _menuProcess = (nodes, pkey) => {
      return Array.isArray(nodes) && nodes.map((item, i) => {
          const menu = _menuProcess(item.child, item.key);
          if (item.url && isActive(item.url, history)) {
            activeKey = 'menu' + item.key;
            openKey = 'sub' + pkey
          }
          if (menu.length > 0) {
            return (
              <Menu.SubMenu
                key={'sub' + item.key}
                title={<span><Icon type={item.icon} /><span className="nav-text">{item.name}</span></span>}
              >
                {menu}
              </Menu.SubMenu>
            )
          } else {
            return (
              <Menu.Item key={'menu' + item.key}>
                {
                  item.url ? <Link to={item.url}>{item.icon && <Icon type={item.icon} />}{item.name}</Link> :
                    <span>{item.icon && <Icon type={item.icon} />}{item.name}</span>
                }
              </Menu.Item>
            )
          }
        });
    };

    const menu = _menuProcess(items);

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="ant-layout-logo">
          <div className="logo-container">
            <img src={logoImg} />
            <span>Ant Design</span>
          </div>
        </div>
        <Menu
          mode={this.state.mode} theme="dark"
          selectedKeys={[activeKey]}
          defaultOpenKeys={[openKey]}
          onClick={this.menuClickHandle}
        >
          {menu}
        </Menu>
      </Sider>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.menu.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllMenu: bindActionCreators(refreshMenu, dispatch),
    updateNavPath: bindActionCreators(refreshNavPath, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar))
