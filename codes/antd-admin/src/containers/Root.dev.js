import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import route from '../router';
import ReduxDevTools from './ReduxDevTools';

export default class Root extends React.Component {
  render() {
    const { store } = this.props;
    if (!this.route) this.route = route;
    return (
      <Provider store={store}>
        <div>
          <Router children={this.route}/>
          <ReduxDevTools />
        </div>
      </Provider>
    );
  }
}
