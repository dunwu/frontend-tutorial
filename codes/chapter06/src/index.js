import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import MyRoute from './route';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <MyRoute/>
  </Provider>,
  document.getElementById('app')
);
