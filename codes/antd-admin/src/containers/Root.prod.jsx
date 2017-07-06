import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

export default class Root extends Component {
  render () {
    const {store} = this.props;
    if (!this.routes) this.routes = routes;
    return (
      <Provider store={store}>
        <Router children={this.routes}/>
      </Provider>
    );
  }
}
