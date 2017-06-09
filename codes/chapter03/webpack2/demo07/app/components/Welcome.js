/**
 * Created by victor zhang on 2017/6/8.
 */
import React from 'react';
import imgSchool from './school.jpg'

class Welcome extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>那些年</h1>
        <img src={imgSchool} />

        <div>
          <p>又回到最初的起点</p>
          <p>记忆中你青涩的脸</p>
          <p>我们终於来到了这一天</p>
          <p>桌垫下的老照片</p>
          <p>无数回忆连结</p>
          <p>今天男孩要赴女孩最后的约</p>
          <p>。。。</p>
        </div>
      </div>
    );
  }
}
export default Welcome;
