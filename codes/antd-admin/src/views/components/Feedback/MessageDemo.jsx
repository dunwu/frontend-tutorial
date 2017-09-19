/**
 * Message 全局提示
 * 参考：https://ant.design/components/message-cn/
 * Created by Zhang Peng on 2017/7/5.
 */
import React from 'react';
import { Button, Card, message } from 'antd';

class MessageAction {
  success = () => {
    message.success('This is a message of success');
  };

  error = () => {
    message.error('This is a message of error');
  };

  warning = () => {
    message.warning('This is message of warning');
  };

  progress = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };

  timeout = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  };
}
let messageAction = new MessageAction();

export default class MessageDemo extends React.PureComponent {
  render() {
    return (
      <Card title="Message 全局提示">
        <Button onClick={messageAction.success}>Success</Button>
        <Button onClick={messageAction.error}>Error</Button>
        <Button onClick={messageAction.warning}>Warning</Button>
        <Button onClick={messageAction.progress}>Display a loading indicator</Button>
        <Button onClick={messageAction.timeout}>Customized display duration</Button>
      </Card>
    )
  }
}
