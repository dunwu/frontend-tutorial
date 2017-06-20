import React from 'react';

const NoMatch = ({ location }) => (
  <div>
    <h3>无法匹配 <code>{location.pathname}</code></h3>
  </div>
);
export default NoMatch;
