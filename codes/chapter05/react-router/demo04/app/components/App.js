import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Hello, React Router!</h1>
        <ul role="nav">
          <li><Link to="/about">About Page</Link></li>
          <li><Link to="/repos">Repos Page</Link></li>
        </ul>
      </div>
    )
  }
}
export default App;
