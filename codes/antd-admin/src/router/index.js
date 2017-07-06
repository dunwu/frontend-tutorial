import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../views/Layout';
import Login from '../views/Login';

import Home from '@/views/Home';
import Form from '@/views/Form';
import Table from '@/views/Table';
import Navigation from '@/views/components/Navigation';
import General from '@/views/components/General';
import DataDisplay from '@/views/components/DataDisplay';
import Feedback from '@/views/components/Feedback';
import Mailbox from '@/views/Mailbox';
import Page2 from '@/views/Page2';

const validate = function (next, replace, callback) {
  const isLoggedIn = !!window.localStorage.getItem('uid')
  if (!isLoggedIn && next.location.pathname != '/login') {
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
    'path': '/form',
    'component': Form
  },
  {
    'path': '/table',
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
  },
  {
    'path': '/page2',
    'component': Page2
  }
];

const routes = (
  <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/" component={Layout}/>
  </Switch>
);

export default routes
