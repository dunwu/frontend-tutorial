/**
 * Created by victor zhang on 2017/6/8.
 */
import React from 'react';

class Welcome extends React.PureComponent {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
export default Welcome;
