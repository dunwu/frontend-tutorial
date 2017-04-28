/**
 * Created by zhangpeng0913 on 2017/4/24.
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

  fetchFn = () => {
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

  render() {
    return (
      <div>
        <Alert
          message={this.state.origin}
          description="启动spring-react-webs后，访问首页就可以看到提示内容"
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
              <a href="https://github.com/atlantis1024/spring-react-webc">https://github.com/atlantis1024/spring-react-webc</a>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}
