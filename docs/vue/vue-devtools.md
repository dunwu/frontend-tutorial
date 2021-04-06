# Vue Devtools

> Vue Devtools 是一个浏览器插件，用于调试 Vue.js 应用程序。

![](https://raw.githubusercontent.com/dunwu/images/dev/snap/20210406105846.png)

<!-- TOC depthFrom:2 depthTo:3 -->

<!-- /TOC -->

## 安装

（1）克隆代码到本地

```
git clone https://github.com/vuejs/vue-devtools.git
```

（2）编译代码

使用 npm：

```
# 安装依赖
npm install
# 编译项目文件
npm run build
```

使用 yarn：

```
# 安装依赖
yarn install
# 编译项目文件
yarn run build
```

（3）添加至 chrome 浏览器

1. 进入扩展程序页面
   - 依次点击 `Menu` > `More Tools` > `Extensions`，进入扩展程序页面。
   - 或者，输入地址 `chrome://extensions/` 进入扩展程序页面。
2. 选择开发者模式（developer mode）
3. 点击“加载已解压的扩展程序...”按钮，选择 vue-devtools => shells 下的 chrome 文件夹。

## 使用

按 F12 打开浏览器控制面板，可以看到 Vue Tab页，可以很方便的使用各种开发调试功能。

![](https://raw.githubusercontent.com/dunwu/images/dev/snap/20210406105815.png)

## 参考资料

- [vue-devtools Github](https://github.com/vuejs/vue-devtools)
