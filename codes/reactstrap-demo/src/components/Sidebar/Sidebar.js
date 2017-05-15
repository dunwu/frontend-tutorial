import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> 报表 <span className="badge badge-info">NEW</span></Link>
            </li>
            <li className="nav-title">
              UI 组件
            </li>
            <li className={this.activeRoute("/components")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> 组件</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/components/buttons'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> 按钮</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/social-buttons'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> 社区按钮</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/cards'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> 卡片</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/forms'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> 表单</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/modals'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> 语气</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/switches'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> 开关</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/tables'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> 表格</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/tabs'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> 标签</Link>
                </li>
              </ul>
            </li>
            <li className={this.activeRoute("/icons")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-star"></i> 图标</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/icons/font-awesome'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Font Awesome 图标</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/icons/simple-line-icons'} className="nav-link" activeClassName="active"><i className="icon-star"></i> 单行图标</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={'/widgets'} className="nav-link" activeClassName="active"><i className="icon-calculator"></i> 部件<span className="badge badge-info">NEW</span></Link>
            </li>
            <li className="nav-item">
              <Link to={'/charts'} className="nav-link" activeClassName="active"><i className="icon-pie-chart"></i> 报表</Link>
            </li>
            <li className="divider"></li>
            <li className="nav-title">
              扩展
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-support"></i> 页面</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/pages/login'} className="nav-link" activeClassName="active"><i className="icon-login"></i> 登录</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/pages/register'} className="nav-link" activeClassName="active"><i className="icon-user"></i> 注册</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/pages/404'} className="nav-link" activeClassName="active"><i className="icon-close"></i> Error 404</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/pages/500'} className="nav-link" activeClassName="active"><i className="icon-close"></i> Error 500</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
