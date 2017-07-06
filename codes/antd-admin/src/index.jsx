/**
 * 参考 React Hot Loader：http://gaearon.github.io/react-hot-loader/getstarted/
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'react-hot-loader/patch';
import Root from './containers/Root';
import configureStore from './redux/store/configureStore';
const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Root store={ store }/>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootContainer = require('./containers/Root');
    ReactDOM.render(
      <AppContainer>
        <RootContainer store={ store }/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
