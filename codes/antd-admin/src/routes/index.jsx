import DataDisplay from '@/views/components/DataDisplay';
import Feedback from '@/views/components/Feedback';
import General from '@/views/components/General';

import Navigation from '@/views/components/Navigation';
import Form from '@/views/pages/Form';
import Home from '@/views/pages/Home';
import Login from '@/views/pages/Login';
import Chart from '@/views/pages/Chart';
import Mailbox from '@/views/pages/Mailbox';
import Table from '@/views/pages/Table';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../components/App';

const validate = function (next, replace, callback) {
  const isLoggedIn = !!window.localStorage.getItem('uid');
  if (!isLoggedIn && next.location.pathname !== '/login') {
    replace('/login')
  }
  callback()
};

export const childRoutes = [
  {
    'path': '/home',
    'component': Home,
    'exactly': true
  },
  {
    'path': '/pages/chart',
    'component': Chart
  },
  {
    'path': '/pages/form',
    'component': Form
  },
  {
    'path': '/pages/table',
    'component': Table
  },
  {
    'path': '/components/navigation',
    'component': Navigation
  },
  {
    'path': '/components/dataDisplay',
    'component': DataDisplay
  },
  {
    'path': '/components/general',
    'component': General
  },
  {
    'path': '/components/feedback',
    'component': Feedback
  },
  {
    'path': '/mailbox',
    'component': Mailbox
  }
];

const routes = (
  <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/" component={App}/>
  </Switch>
);

export default routes
