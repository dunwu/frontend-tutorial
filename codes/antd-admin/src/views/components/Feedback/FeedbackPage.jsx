/**
 * Created by victor zhang on 2017/7/5.
 */
import React from 'react';
import AlertDemo from './AlertDemo';
import MessageDemo from './MessageDemo';
import NotificationDemo from './NotificationDemo';

export default class FeedbackPage extends React.PureComponent {

  render() {
    return (
      <div>
        <AlertDemo/>
        <br/><br/>
        <MessageDemo/>
        <br/><br/>
        <NotificationDemo/>
      </div>
    )
  }
}
