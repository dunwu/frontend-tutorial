/**
 * Created by victor zhang on 2017/4/24.
 */
import React from "react";
import {Alert, Card} from "antd";
import styles from "./Home.css";
import "whatwg-fetch";

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
    this.fetchFn();
  }

  componentWillUnmount () {
    // remove event listeners (Flux Store, WebSocket, document, etc.)
  }

  fetchWeb = () => {
    fetch('http://localhost:9527/hello/world', {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      /*credentials: "same-origin",*/
      /*headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': ''
       },*/
      body: JSON.stringify({
        name: 'root',
      })
    }).then((response) => {
      console.log('response', response);
      return response.json();
    }).then((json) => {
      console.log('json: ', json);
      this.setState({origin: json.data});
    }).catch((ex) => {
      console.log('failed', ex);
    });
  };

  fetchFn = () => {
    fetch('src/assets/jsons/home.json').then((response) => {
      console.log('response', response);
      return response.json();
    }).then((json) => {
      console.log('json: ', json);
      this.setState({origin: json.data});
    }).catch((ex) => {
      console.log('failed', ex);
    });
  };

  render() {
    return (
      <div>
        <Alert
          message={this.state.origin}
          description="提示栏的标题信息是通过fetch动态去获取数据。fetch既可以通过http请求获取数据，也可以直接读取一个json文件"
          type="info"
          showIcon
        />
        <div className={styles.normal}>
          <h1 className={styles.title}>react-step-by-stepc 首页</h1>
          <Card style={{width: 500}} bodyStyle={{padding: 0}}>
            <div className="custom-image">
              <img alt="example" src={require('../../assets/images/welcome.jpg')}/>
            </div>
            <div className="custom-card">
              <h3>Welcome to react-step-by-stepc</h3>
              <a href="https://github.com/atlantis1024/react-step-by-stepc">https://github.com/atlantis1024/react-step-by-stepc</a>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}
