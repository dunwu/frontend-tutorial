import React from 'react';
import { Link, Route } from 'react-router-dom';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';

const Public = () => <h3>公开的页面</h3>;
const Protected = () => <h3>非公开的页面</h3>;

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>App 页面</h1>
        <AuthButton/>
        <ul>
          <li><Link to="/public">公开页面</Link></li>
          <li><Link to="/protected">非公开页面</Link></li>
        </ul>

        <hr/>
        <Route path="/public" component={Public}/>
        <PrivateRoute path="/protected" component={Protected}/>
      </div>
    )
  }
}
export default App;

