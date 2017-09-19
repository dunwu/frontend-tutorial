/**
 * antd 按钮控件示例
 * 参考：https://ant.design/components/button-cn/
 * Created by Zhang Peng on 2017/7/5.
 */
import React from 'react';
import { Button, Card, Col, Dropdown, Icon, Menu, Radio, Row } from 'antd';

export default class ButtonDemo extends React.PureComponent {
  state = {
    size: 'default',
    loading: false,
    iconLoading: false,
  };

  handleMenuClick = (e) => {
    console.log('click', e);
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    const size = this.state.size;

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );

    return (
      <Card title="antd 组件示例 - Button 按钮" bordered={false}>
        <Row gutter={24}>
          <Col span={6}>
            <Card title="按钮类型">
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="danger">Danger</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="图标按钮">
              <Button type="primary" shape="circle" icon="search"/>
              <Button type="primary" icon="search">Search</Button>
              <Button shape="circle" icon="search"/>
              <Button icon="search">Search</Button>
              <Button type="dashed" shape="circle" icon="search"/>
              <Button type="dashed" icon="search">Search</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="不可用状态">
              <Button type="primary">Primary</Button>
              <Button type="primary" disabled>Primary(disabled)</Button>
              <br/>
              <Button>Default</Button>
              <Button disabled>Default(disabled)</Button>
              <br />
              <Button>Ghost</Button>
              <Button disabled>Ghost(disabled)</Button>
              <br />
              <Button type="dashed">Dashed</Button>
              <Button type="dashed" disabled>Dashed(disabled)</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="幽灵按钮">
              <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
                <Button type="primary" ghost>Primary</Button>
                <Button ghost>Default</Button>
                <Button type="dashed" ghost>Dashed</Button>
                <Button type="danger" ghost>danger</Button>
              </div>
            </Card>
          </Col>
        </Row>

        <br/><br/>

        <Row gutter={24}>
          <Col span={6}>
            <Card title="按钮尺寸">
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
              <br /><br />
              <Button type="primary" shape="circle" icon="download" size={size}/>
              <Button type="primary" icon="download" size={size}>Download</Button>
              <Button type="primary" size={size}>Normal</Button>
              <br />
              <Button.Group size={size}>
                <Button type="primary">
                  <Icon type="left"/>Backward
                </Button>
                <Button type="primary">
                  Forward<Icon type="right"/>
                </Button>
              </Button.Group>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="加载中状态">
              <Button type="primary" loading>
                Loading
              </Button>
              <Button type="primary" size="small" loading>
                Loading
              </Button>
              <br />
              <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                Click me!
              </Button>
              <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                Click me!
              </Button>
              <br />
              <Button shape="circle" loading/>
              <Button type="primary" shape="circle" loading/>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="多个按钮组合">
              <h4>Basic</h4>
              <Button.Group>
                <Button>Cancel</Button>
                <Button type="primary">OK</Button>
              </Button.Group>
              <Button.Group>
                <Button disabled>L</Button>
                <Button disabled>M</Button>
                <Button disabled>R</Button>
              </Button.Group>
              <Button.Group>
                <Button type="primary">L</Button>
                <Button>M</Button>
                <Button>M</Button>
                <Button type="dashed">R</Button>
              </Button.Group>

              <h4>With Icon</h4>
              <Button.Group>
                <Button type="primary">
                  <Icon type="left"/>Go back
                </Button>
                <Button type="primary">
                  Go forward<Icon type="right"/>
                </Button>
              </Button.Group>
              <Button.Group>
                <Button type="primary" icon="cloud"/>
                <Button type="primary" icon="cloud-download"/>
              </Button.Group>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="按钮组合">
              <Button type="primary">primary</Button>
              <Button>secondary</Button>
              <Dropdown overlay={menu}>
                <Button>
                  more <Icon type="down"/>
                </Button>
              </Dropdown>
            </Card>
          </Col>
        </Row>
      </Card>
    );
  }
}
