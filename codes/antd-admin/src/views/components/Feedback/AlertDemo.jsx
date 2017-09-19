/**
 * Alert 警告提示
 * 参考：https://ant.design/components/alert-cn/
 * Created by Zhang Peng on 2017/7/5.
 */
import React from 'react';
import { Alert, Card, Col, Row } from 'antd';

export default class AlertDemo extends React.PureComponent {
  render() {
    return (
      <Card title="Alert 警告提示">

        <Row gutter={24}>
          <Col span={8}>
            <Card title="四种样式的警告提示">
              <Alert message="Success Text" type="success"/>
              <Alert message="Info Text" type="info"/>
              <Alert message="Warning Text" type="warning"/>
              <Alert message="Error Text" type="error"/>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="可关闭的警告提示">
              <Alert message="Success Text" type="success" closable onClose={this.onClose}/>
              <Alert message="Info Text" type="info" closable onClose={this.onClose}/>
              <Alert message="Warning Text" type="warning" closable onClose={this.onClose}/>
              <Alert message="Error Text" type="error" closable onClose={this.onClose}/>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="自定义关闭的警告提示">
              <Alert message="Success Text" type="success" closeText="Close Now" closable onClose={this.onClose}/>
              <Alert message="Info Text" type="info" closable closeText="Close Now" onClose={this.onClose}/>
              <Alert message="Warning Text" type="warning" closeText="Click here to close" closable
                     onClose={this.onClose}/>
              <Alert message="Error Text" type="error" closeText="Click here to close" closable
                     onClose={this.onClose}/>
            </Card>
          </Col>
        </Row>

        <br/><br/>

        <Row gutter={24}>
          <Col span={12}>
            <Card title="含有描述的警告提示">
              <Alert
                message="Success Text"
                description="Success Description Success Description Success Description"
                type="success"
              />
              <Alert
                message="Info Text"
                description="Info Description Info Description Info Description Info Description"
                type="info"
              />
              <Alert
                message="Warning Text"
                description="Warning Description Warning Description Warning Description Warning Description"
                type="warning"
              />
              <Alert
                message="Error Text"
                description="Error Description Error Description Error Description Error Description"
                type="error"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="带图标的警告提示">
              <Alert
                message="success tips"
                description="Detailed description and advices about successful copywriting."
                type="success"
                showIcon
              />
              <Alert
                message="Informational Notes"
                description="Additional description and informations about copywriting."
                type="info"
                showIcon
              />
              <Alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
              />
              <Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
              />
            </Card>
          </Col>
        </Row>

        <br/><br/>

        <Row gutter={24}>
          <Card title="含有描述的警告提示">
            <Alert message="Warning text" banner/>
            <br />
            <Alert message="Very long warning text warning text text text text text text text" banner closable/>
            <br />
            <Alert showIcon={false} message="Warning text without icon" banner/>
            <br />
            <Alert type="error" message="Error text" banner/>
          </Card>
        </Row>

      </Card>
    )
  }
}
