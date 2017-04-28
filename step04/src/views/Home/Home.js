/**
 * Created by zhangpeng0913 on 2017/4/24.
 */
import React from "react";
import {Alert, Card} from "antd";
import styles from "./Home.css";

export default class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      origin: null
    }
  }

  componentWillUnmount () {
    // remove event listeners (Flux Store, WebSocket, document, etc.)
  }

  componentDidMount() {
  }

  componentWillUnmount () {
    // remove event listeners (Flux Store, WebSocket, document, etc.)
  }

  render() {
    return (
      <div>
        <Alert
          message="提示信息"
          description="Hello World"
          type="info"
          showIcon
        />
        <div className={styles.normal}>
          <h1 className={styles.title}>spring-react-webc 首页</h1>
          <Card style={{width: 500}} bodyStyle={{padding: 0}}>
            <div className="custom-image">
              <img alt="example" src={require('../../assets/images/welcome.jpg')}/>
            </div>
            <div className="custom-card">
              <h3>Welcome to spring-react-webc</h3>
              <a href="https://github.com/atlantis1024/react-step-by-step">https://github.com/atlantis1024/react-step-by-step</a>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}
