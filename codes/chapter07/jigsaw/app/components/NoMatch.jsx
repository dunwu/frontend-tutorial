import React from 'react';

class NoMatch extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>无法匹配 <code>{this.props.location.pathname}</code></h2>
      </div>
    );
  }
}
export default NoMatch;
