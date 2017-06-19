# React Router Tutorial

## 简介

[React Router Tutorial](https://github.com/reactjs/react-router-tutorial) 是官方的示例教程。

示例代码精炼易懂，非常适合学习 react-router 的新手。

这里，将其搬迁过来，并翻译为中文。水平有限，翻译不当之处，敬请指出。

## 运行环境

先确定你本地安装了最新的 [<u>Node.js</u>](https://nodejs.org/en/)（npm会随Node.js一起安装）。

## 使用方法

本目录下的所有示例 app ，如果没有特殊说明，使用方法都遵照下面步骤：

1. **npm install**

   官方的示例教程分为多个 lesson，每个 lesson 都可视为一个独立的 app （都含有 `package.json` 和 `webpack.config.js`）。

   这意味着：每次运行不同的示例，你都需要先执行 `npm install` 来安装依赖库。但是这些示例中使用的很多库都是重复的，这就很浪费时间了。因此，我将所有依赖统一放在外部目录的 `package.json` 文件中。

   现在，你只要在 example 目录下执行一次 `npm install` 。

   当然，如果你不怕麻烦，也可以在示例中执行 `npm install`  ，因为我保留了每个市里的 `package.json` 文件。

2. **npm start**

   在不同示例 app 的目录下直接执行 `npm start` 就可以启动 app。

3. **访问 url**

   接下来，打开 [http://localhost:9000](http://localhost:9000) 
