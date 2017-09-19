/**
 * Notification 通知提醒框
 * 参考：https://ant.design/components/notification-cn/
 * Created by Zhang Peng on 2017/7/5.
 */
import React from 'react';
import { Button, Card, Col, Icon, notification, Row, Select } from 'antd';

const { Option } = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

class NotifyAction {
  notifyWithAutoClose = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  notifyWithNotClose = () => {
    const args = {
      message: 'Notification Title',
      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0,
    };
    notification.open(args);
  };

  notifyWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  notifyWithDiyIcon = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <Icon type="smile-circle" style={{ color: '#108ee9' }}/>,
    });
  };

  notifyWithDiyButton = () => {
    const key = `open${Date.now()}`;
    const btnClick = function () {
      // to hide notification box
      notification.close(key);
    };
    const btn = (
      <Button type="primary" size="small" onClick={btnClick}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Notification Title',
      description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
  };

  notifyWithDiyPosition = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  notifyWithDiyStyle = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      style: {
        width: 600,
        background: "#fac450",
        marginLeft: 335 - 600,
      },
    });
  };
}
const notifyAction = new NotifyAction();

export default class NotificationDemo extends React.PureComponent {
  render() {
    return (
      <Card title="Notification 通知提醒框">
        <Row gutter={24}>
          <Col span={12}>
            <Card title="自动关闭的通知提醒">
              <Button type="primary" onClick={notifyAction.notifyWithAutoClose}>自动关闭的通知提醒</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="非自动关闭的通知提醒">
              <Button type="primary" onClick={notifyAction.notifyWithNotClose}>非自动关闭的通知提醒</Button>
            </Card>
          </Col>
        </Row>

        <br/><br/>

        <Row gutter={24}>
          <Col span={12}>
            <Card title="带有图标的通知提醒框">
              <Button onClick={() => notifyAction.notifyWithIcon('success')}>Success</Button>
              <Button onClick={() => notifyAction.notifyWithIcon('info')}>Info</Button>
              <Button onClick={() => notifyAction.notifyWithIcon('warning')}>Warning</Button>
              <Button onClick={() => notifyAction.notifyWithIcon('error')}>Error</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="自定义图标的通知提醒">
              <Button type="primary" onClick={notifyAction.notifyWithDiyIcon}>Open the notification box</Button>
            </Card>
          </Col>
        </Row>

        <br/><br/>

        <Row gutter={24}>
          <Col span={8}>
            <Card title="自定义按钮的通知提醒">
              <Button type="primary" onClick={notifyAction.notifyWithDiyButton}>Open the notification box</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="自定义位置的通知提醒">
              <Select
                defaultValue="topRight"
                style={{ width: 120, marginRight: 10 }}
                onChange={(val) => {
                  notification.config({
                    placement: val,
                  });
                }}
              >
                {options.map(val => <Option key={val} value={val}>{val}</Option>)}
              </Select>
              <Button type="primary" onClick={notifyAction.notifyWithDiyPosition}>Open the notification box</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="自定义样式的通知提醒">
              <Button type="primary" onClick={() => notifyAction.notifyWithDiyStyle()}>Open the notification
                box</Button>
            </Card>
          </Col>
        </Row>
      </Card>
    )
  }
}
