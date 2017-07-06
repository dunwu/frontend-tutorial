import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import routes from '../routes';
import ReduxDevTools from './ReduxDevTools';

export default class Root extends React.Component {
  render () {
    const {store} = this.props;
    if (!this.routes) this.routes = routes;
    return (
      <Provider store={store}>
        <div>
          <Router children={this.routes}/>
          <ReduxDevTools />
        </div>
      </Provider>
    );
  }
}
