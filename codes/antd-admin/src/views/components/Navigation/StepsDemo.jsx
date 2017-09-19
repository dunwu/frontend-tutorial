/**
 * antd 按钮控件示例
 * 参考：https://ant.design/components/button-cn/
 * Created by Zhang Peng on 2017/7/5.
 */
import React from 'react';
import { Button, Card, message, Row, Steps } from 'antd';
import './StepsDemo.less';

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];

export default class StepsDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;

    return (
      <Card title="Steps 步骤条">
        <Row gutter={24}>
          <div>
            <Steps current={current}>
              {steps.map(item => <Steps.Step key={item.title} title={item.title}/>)}
            </Steps>
            <div className="steps-content">{steps[this.state.current].content}</div>
            <div className="steps-action">
              {
                this.state.current < steps.length - 1
                &&
                <Button type="primary" onClick={() => this.next()}>Next</Button>
              }
              {
                this.state.current === steps.length - 1
                &&
                <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
              }
              {
                this.state.current > 0
                &&
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              }
            </div>
          </div>
        </Row>

        <br/><br/>

      </Card>
    );
  }
}
