# react-step-by-step

首先，要声明一下，我是一名后端程序员。

React不仅仅是一个优秀的Javascript框架，而是一个整个技术栈。要发挥它的真正威力，不得不学习一大堆的技术。讲真，第一次接触时，光是一堆术语就可以直接让人晕菜。

网上有很多丰富的资料，但是，一步步将这些技术串起来的教程较少。react-step-by-step，是本人结合自身的学习过程，展示如何一步步搭建一个react脚手架。

限于二手的前端水平，肯定有很多不足之处，欢迎指正。

## step01 - html中使用react

> **关键点**
>
> - `react`

React 是一个用于构建用户界面的 JAVASCRIPT 库。

React可以直接在html中使用。

React 的安装包，可以到[官网](https://github.com/facebook/react/releases)下载。

使用`<script>`标签引入`react.min.js`和`react-dom.min.js` ，就可以使用react的语法。

需要注意，react的语法在很多浏览器中无法直接识别，为此，需要使用`browser.min.js`来进行解释。

```html
<script src="./lib/react.min.js"></script>
<script src="./lib/react-dom.min.js"></script>
<script src="./lib/browser.min.js"></script>
```

直接在浏览其中打开 [step01](https://github.com/atlantis1024/react-step-by-step/blob/master/step01) 目录下的 hello.html 和 ajax.html 可以看到使用react的演示效果。

## step02 - 最简单的web app

> **关键点**
>
> - `npm` - 详细用法可以参考 [runoob的NPM 使用介绍](http://www.runoob.com/nodejs/nodejs-npm.html)
> - `webpack` - [教程](https://github.com/atlantis1024/webpack-notes)
> - `babel`

### 通过 npm 使用 React

#### 安装npm

 [step01](https://github.com/atlantis1024/react-step-by-step/blob/master/step01) 中通过下载javascript的方式下载js库已经OUT了。现在的javascript应用开发一般使用npm或yarn来管理库。本文中，仅介绍npm方式。

首先，需要在 https://nodejs.org/en/download/ 下载并安装**Node.js**。安装程序会默认安装**npm**。

#### 创建package.json

**package.json** 文件一般位于模块的目录下，用于定义包的属性。

首先，执行`npm init`命令，会有多个引导提示，根据提示输入配置信息，即可创建一个 **package.json** 文件。如果嫌烦，也可以一直按回车键，npm会根据默认配置为你创建一个 **package.json** 文件。

#### 使用npm安装js库

```sh
$ npm install react react-dom --save ##本地安装，并保存到package.json的dependencies中
$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react http-server webpack webpack-dev-server --save-dev  ##本地安装，并保存到package.json的devDependencies中
```

#### 使用淘宝npm

国内使用 npm 速度很慢，你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

```sh
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ npm config set registry https://registry.npm.taobao.org
```

这样就可以使用 cnpm 命令来安装模块了：

```sh
$ cnpm install [name]
```

### 使用webpack将js代码模块化打包

新建一个`webpack.config.js`文件。这个文件是webpack用于管理javascript库的配置文件。

```javascript
module.exports = {
  // 入口
  entry: './index.js',
  // 输出
  output: {
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 3000
  },

  module: {
    // babel加载器，将js或jsx文件中的ES6或React语法转译为浏览器可以识别的js代码
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'}
    ]
  }
};
```
然后，在package.json中更新执行脚本命令，添加

```json
"scripts": {
    "start": "webpack-dev-server --hot --inline --content-base ."
},
```

该命令的作用是使用webpack-dev-server启动一个支持热部署的web app。

## step03 - react-router

> **关键点**
>
> - `react-router`
>

本示例中使用了react-router 4.x版本。react-router 4.x版本与react-router 2.x版本的API差异非常大，需要格外注意。

安装react-router 4.x版本：

```sh
$ npm i react-router-dom -S
```

简单的示例

```jsx
import React from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";

import Home from 'modules/Home';
import NewMatch from 'modules/NewMatch';
import Topics from 'modules/Topics';
import NoMatch from 'modules/NoMatch';

const MyRoute = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/old-match">重定向前</Link></li>
        <li><Link to="/new-match">重定向后</Link></li>
        <li><Link to="/topics">标题组</Link></li>
        <li><Link to="/none">找不到的路由地址</Link></li>
      </ul>

      <hr/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Redirect from="/old-match" to="/new-match"/>
        <Route path="/new-match" component={NewMatch}/>
        <Route path="/topics" component={Topics}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
);
export default MyRoute;
```
## step04 - 引入antd

`antd`是一个UI框架。当前支持react的UI框架不少，如 `react-bootstrap`、`material-ui` 等。为什么选择`antd`呢？是因为它是淘宝蚂蚁金服的开源项目，中文文档比较丰富。

> **关键点**
>
> - `antd` - [官方教程](https://ant.design/docs/react/introduce-cn)

**安装**

```sh
$ npm install antd --save
```

**示例**

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**引入样式**

```jsx
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
```

## step05 -  使用fetch

> **关键点**
>
> - `fetch` - [官网](https://github.com/github/fetch)

在step04中的示例已经算是一个有点样子的静态web app了。

但是，还有许多场景下，需要向app的外部获取数据。在传统的前端工程中，获取app外部数据，一般使用Ajax技术。

但是，react技术栈提出了一种新的选择：fetch。`whatwg-fetch` 就是目前一个较火的 fetch 实现库。

举一个简单的例子：

这里向一个url 接口发出post请求，并解析其json数据。

```jsx
fetchWeb = () => {
  fetch('http://localhost:9527/hello/world', {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
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
```