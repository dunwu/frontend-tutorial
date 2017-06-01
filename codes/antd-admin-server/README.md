# antd-admin-server

**antd-admin-server** 是 **antd-admin** 的后台服务器，使用 Java 编写。

**antd-admin** 结合 **antd-admin-server**，展示了动静分离的开发项目——动是指后台服务交给Java服务器；静是指 web 页面。这样做的好处在于，让前端、后端工程师分别维护各自的代码。

## 使用方法

1. 编译 Java 代码

如果您了解 Maven，并且本地已安装了Maven。那么直接在本目录下，执行下面命令：

```sh
$ mvn clean package -Dmaven.test.skip=true
```

2. 启动服务器

执行 `org.springside.modules.jetty.JettyServer` 的 `Main` 方法。即可启动本服务器。 