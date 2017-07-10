import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavPath from '@/components/NavPath';
import Sidebar from '@/components/Sidebar';
import { fetchProfile, logout } from '@/redux/actions';
import { childRoutes } from '@/routes';
import authHOC from '@/utils/auth';

import { Layout } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import './App.less';

const {Content} = Layout;

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    const {actions} = this.props;
    actions.fetchProfile();
  }

  render () {
    const {auth, navpath, actions} = this.props;

    return (
      <Layout className="ant-layout-has-sider">
        <Sidebar />
        <Layout>
          <Header profile={auth} logout={actions.logout}/>
          <Content style={{margin: '0 16px'}}>
            <NavPath data={navpath}/>
            <div style={{minHeight: 360}}>
              <Redirect to="/pages/dashboard"/>
              {childRoutes.map((route, index) => (
                <Route key={index} path={route.path} component={authHOC(route.component)} exactly={route.exactly}/>
              ))}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object,
  navpath: PropTypes.array
};

const mapStateToProps = (state) => {
  const {auth, menu} = state;
  return {
    auth: auth ? auth : null,
    navpath: menu.navpath
  };
};

function mapDispatchToProps (dispatch) {
  return {actions: bindActionCreators({fetchProfile, logout}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
