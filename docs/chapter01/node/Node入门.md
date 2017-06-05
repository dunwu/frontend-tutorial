# Node

## 安装配置

### Windows / IOS

可以在官方下载安装文件：[https://nodejs.org/en/download/](https://nodejs.org/en/download/)。

### Linux / Ubuntu / Debian

命令格式如下：

```sh
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```

详细内容参考官方文档：[通过包管理器安装 Node.js](https://nodejs.org/en/download/package-manager/)

## 第一个应用

创建 helloworld.js 文件，内容如下：

```js
function helloworld() {
  console.log('Hello World!');
}
helloworld();
```

执行命令：

```sh
$ node helloworld.js
```