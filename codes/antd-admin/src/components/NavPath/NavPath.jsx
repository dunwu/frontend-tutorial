import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import './NavPath.less';

export default class NavPath extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array
  };

  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props;
    const breadcrumbItems = data.map((item) => {
      return (
        <Breadcrumb.Item className="navPathItem" key={'bc-' + item.key}>
          {item.name}
        </Breadcrumb.Item>
      )
    });

    return (
      <div>
        <Breadcrumb className="navPath">
          {breadcrumbItems}
        </Breadcrumb>
      </div>
    )
  }
}
