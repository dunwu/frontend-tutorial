# Npm 入门

> **Npm 是随同 Nodejs 一起安装的 js 包管理工具。**
>
> 关键词： `nodejs`, `包管理`, `npm`, `cnpm`

<!-- TOC depthFrom:2 depthTo:3 -->

- [1. 简介](#1-简介)
- [2. 安装](#2-安装)
- [3. Npm 工作流](#3-npm-工作流)
- [4. Npm 常用命令](#4-npm-常用命令)
    - [4.1. 初始化新项目](#41-初始化新项目)
    - [4.2. 安装模块](#42-安装模块)
    - [4.3. 卸载模块](#43-卸载模块)
    - [4.4. 更新模块](#44-更新模块)
    - [4.5. 管理配置文件](#45-管理配置文件)
    - [4.6. 发布包](#46-发布包)
    - [4.7. 执行脚本](#47-执行脚本)
    - [4.8. 查看安装信息](#48-查看安装信息)
- [5. 配置文件](#5-配置文件)
    - [5.1. package 版本](#51-package-版本)
    - [5.2. 版本号](#52-版本号)
- [6. npm 扩展](#6-npm-扩展)
    - [6.1. cnpm](#61-cnpm)
    - [6.2. nrm](#62-nrm)
- [7. 引用和引申](#7-引用和引申)

<!-- /TOC -->

## 1. 简介

**Npm 是随同 Nodejs 一起安装的 js 包管理工具。**

常见的使用场景有以下几种：

- 允许用户从 Npm 服务器下载别人编写的第三方包到本地使用。
- 允许用户从 Npm 服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到 Npm 服务器供别人使用。

如果一个项目中存在 `package.json` 文件，那么用户可以直接使用 `npm install` 命令自动安装和维护当前项目所需的所有模块。在 `package.json` 文件中，开发者可以指定每个依赖项的版本范围，这样既可以保证模块自动更新，又不会因为所需模块功能大幅变化导致项目出现问题。开发者也可以选择将模块固定在某个版本之上。

## 2. 安装

由于新版的 nodejs 已经集成了 npm，所以之前 npm 也一并安装好了。同样可以通过输入 `npm -v` 来测试是否成功安装。命令如下，出现版本提示表示安装成功:

```sh
$ npm -v
2.3.0
```

可以通过命令方式升级 npm

- Linux - `sudo npm install npm -g`
- Window - `npm install npm -g`

## 3. Npm 工作流

Npm 工作流：

1. 创建一个新项目
2. 增加／更新／删除依赖
3. 安装／重装你的依赖
4. 引入版本控制系统（例如 git）
5. 持续集成

## 4. Npm 常用命令

**每个命令都会更新 `package.json` 文件。**

- Npm 提供了很多命令，例如`install`和`publish`，使用`npm help`可查看所有命令。
- 使用`npm help`可查看某条命令的详细帮助，例如`npm help install`。
- 在`package.json`所在目录下使用`npm install . -g`可先在本地安装当前命令行程序，可用于发布前的本地测试。
- 使用`npm update`可以把当前目录下`node_modules`子目录里边的对应模块更新至最新版本。
- 使用`npm update -g`可以把全局安装的对应命令行程序更新至最新版。
- 使用`npm cache clear`可以清空 Npm 本地缓存，用于对付使用相同版本号发布新版本代码的人。
- 使用`npm unpublish @`可以撤销发布自己发布过的某个版本代码。

Npm 提供了很多命令，例如 install 和 publish，使用 npm help 可查看所有命令。

### 4.1. 初始化新项目

> `npm init` 用于初始化项目，它会创建一个名为 `package.json` 的配置文件。

**命令格式**

```
npm init [-f|--force|-y|--yes]
```

**说明**

执行命令后，npm 会问你一系列问题，然后在执行命令的目录下创建一个`package.json`文件。

如果使用 `-f` / `--force` 或 `-y` / `--yes` ，npm 会使用默认值为你创建 `package.json` 文件，不再询问任何问题。

创建模块，package.json 文件是必不可少的。我们可以使用 Npm 生成 `package.json` 文件，生成的文件包含了基本的结果。

```sh
$ npm init
This utility will walk you through creating a `package.json` file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the `package.json` file.

Press ^C at any time to quit.
name: (node_modules) runoob                   # 模块名
version: (1.0.0)
description: Node.js 测试模块(www.runoob.com)  # 描述
entry point: (index.js)
test command: make test
git repository: https://github.com/runoob/runoob.git  # Github 地址
keywords:
author:
license: (ISC)
About to write to ……/node_modules/package.json:      # 生成地址

{
  "name": "runoob",
  "version": "1.0.0",
  "description": "Node.js 测试模块(www.runoob.com)",
  ……
}


Is this ok? (yes) yes
```

以上的信息，你需要根据你自己的情况输入。在最后输入 "yes" 后会生成 `package.json` 文件。

接下来我们可以使用以下命令在 npm 资源库中注册用户（使用邮箱注册）：

```sh
$ npm adduser
Username: mcmohd
Password:
Email: (this IS public) mcmohd@gmail.com
```

### 4.2. 安装模块

> `npm install` 用于安装模块。

**命令格式**

```sh
npm install (with no args, in package dir)
npm install <tarball file>  # 安装位于文件系统上的包。
npm install <tarball url>   # 获取 url，然后安装它。为了区分此选项和其他选项，参数必须以“http://”或“https://”开头。
npm install <folder>        # 安装位于文件系统上某文件夹中的包
npm install [<@scope>/]<name>                 # 安装指定的包的最新版本。
npm install [<@scope>/]<name>@<tag>           # 安装被 tag 引用的包的版本。如果 tag 不存在于该包的注册表数据中，则失败。
npm install [<@scope>/]<name>@<version>       # 安装指定的包的版本。如果版本尚未发布到注册表，则失败。
npm install [<@scope>/]<name>@<version range> # 安装与指定版本范围相匹配的包版本。
```

`npm install [<@scope>/] [-S|--save|-D|--save-dev|-O|--save-optional]` 参数说明：

`npm install` 有 3 个可选参数，用于保存或更新主 `package.json` 中的包版本：

- `-S, --save` - 包将被添加到 `dependencies`。
- `-D, --save-dev` - 包将被添加到 `devDependencies`。
- `-O, --save-optional` - 包将被添加到 `optionalDependencies`。

当使用上述任何选项将依赖保存到 `package.json` 时，有两个额外的可选标志 -

- `-E, --save-exact` - 会在 `package.json` 文件指定安装模块的确切版本。
- `-B, --save-bundle` - 包也将被添加到`bundleDependencies`。

#### 全局安装与本地安装

npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g 而已，比如

```sh
npm install express     # 本地安装
npm install express -g  # 全局安装
```

##### 本地安装

1. 将安装包放在 `node_modules` 下（运行 npm 命令时所在的目录），如果没有 `node_modules` 目录，会在当前执行 npm 命令的目录下新建 `node_modules` 目录。
2. 可以通过 require() 来引入本地安装的包。

示例：我们使用 npm 命令安装常用的 Node.js 的 web 框架模块 **express**:

```
$ npm install express
```

安装好之后，express 包就放在了工程目录下的 `node_modules` 目录中，因此在代码中只需要通过 `require('express')` 的方式就好，无需指定第三方包路径。

```
var express = require('express');
```

##### 全局安装

1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
2. 可以直接在命令行里使用。

如果你希望具备两者功能，则需要在两个地方安装它或使用 **npm link**。

接下来我们使用全局方式安装 express

```sh
$ npm install express -g
```

安装过程输出如下内容，第一行输出了模块的版本号及安装位置。

```sh
express@4.13.3 node_modules/express
├── escape-html@1.0.2
├── range-parser@1.0.2
├── merge-descriptors@1.0.0
├── array-flatten@1.1.1
├── cookie@0.1.3
├── utils-merge@1.0.0
├── parseurl@1.3.0
├── cookie-signature@1.0.6
├── methods@1.1.1
├── fresh@0.3.0
├── vary@1.0.1
├── path-to-regexp@0.1.7
├── content-type@1.0.1
├── etag@1.7.0
├── serve-static@1.10.0
├── content-disposition@0.5.0
├── depd@1.0.1
├── qs@4.0.0
├── finalhandler@0.4.0 (unpipe@1.0.0)
├── on-finished@2.3.0 (ee-first@1.1.1)
├── proxy-addr@1.0.8 (forwarded@0.1.0, ipaddr.js@1.0.1)
├── debug@2.2.0 (ms@0.7.1)
├── type-is@1.6.8 (media-typer@0.3.0, mime-types@2.1.6)
├── accepts@1.2.12 (negotiator@0.5.3, mime-types@2.1.6)
└── send@0.13.0 (destroy@1.0.3, statuses@1.2.1, ms@0.7.1, mime@1.3.4, http-errors@1.3.1)
```

### 4.3. 卸载模块

> `npm uninstall` 用于卸载包。

**命令格式**

```
npm uninstall [<@scope>/]<pkg>[@<version>]... [-S|--save|-D|--save-dev|-O|--save-optional]

aliases: remove, rm, r, un, unlink
```

**说明**

在全局模式下（即，在命令中附加`-g`或`--global`），它将当前包上下文作为全局包卸载。

`npm uninstall` 有 3 个可选参数，用于保存或更新主 package.json 中的包版本：

- `-S, --save` - 包将被添加到 `dependencies`。
- `-D, --save-dev` - 包将被添加到 `devDependencies`。
- `-O, --save-optional` - 包将被添加到 `optionalDependencies`。

例：

```sh
npm uninstall sax
npm uninstall sax --save
npm uninstall @myorg/privatepackage --save
npm uninstall node-tap --save-dev
npm uninstall dtrace-provider --save-optional
```

### 4.4. 更新模块

> `npm update` 用于更新本地安装的模块。

**命令格式**

```sh
npm update [-g] [<pkg>...]

aliases: up, upgrade
```

> 注：从 **npm@2.6.1** 开始，`npm update` 仅更新顶级包。旧版本的 npm 会递归检查所有的依赖。如果要达到旧版本的行为，请使用`npm --depth 9999 update`。

### 4.5. 管理配置文件

> `npm config` 命令用于管理配置文件。

**命令格式**

```sh
npm config set <key> <value> [-g|--global]  # 设置一个配置参数
npm config get <key>                        # 获取一个配置参数
npm config delete <key>                     # 删除一个配置参数
npm config list                             # 打印配置参数列表
npm config edit                             # 直接编辑配置文件
npm get <key>                               # npm config get <key> 的简写。
npm set <key> <value> [-g|--global]         # npm config set <key> <value> [-g|--global] 的简写
```

### 4.6. 发布包

> `npm publish` 用于发布一个包。

**命令格式**

```sh
npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>]

Publishes '.' if no argument supplied
Sets tag 'latest' if no --tag specified
```

> 说明：将包发布到注册表，以便可以按名称安装。如果没有本地 `.gitignore` 或 `.npmignore` 文件，则包括软件包目录中的所有文件。如果这两个过滤文件都存在时，某个文件被 `.gitignore` 忽略，而不被 `.npmignore` 忽略，则它将被包括。

### 4.7. 执行脚本

> `npm run` 用于执行脚本。

如果在 `package.json` 文件中的 `scripts` 字段定义了命令，就可以使用 `npm run` 来执行脚本命令。

示例：

假设 `package.json` 文件中的 `scripts` 字段如下定义：

```json
"scripts": {
    "test": "mocha",
    "lint": "eslint lib bin hot scripts",
    "prepublish": "npm run test && npm run lint",
    "start": "node index.js"
}
```

- `npm run test` - 相当于执行 `mocha` 命令。它会开始执行测试框架 Mocha 。
- `npm run lint` - 相当于执行 `eslint lib bin hot scripts` 命令。它会开始执行 eslint 检查。
- `npm run prepublish` - 相当于执行 `npm run test` 和 `npm run lint` 两条命令。现在你了解如何复合命令了吧。
- `npm start` - 相当于执行 `node index.js` 。Node.js 启动一个服务的入口脚本。

### 4.8. 查看安装信息

你可以使用以下命令来查看所有全局安装的模块：

```sh
$ npm list -g

├─┬ cnpm@4.3.2
│ ├── auto-correct@1.0.0
│ ├── bagpipe@0.3.5
│ ├── colors@1.1.2
│ ├─┬ commander@2.9.0
│ │ └── graceful-readlink@1.0.1
│ ├─┬ cross-spawn@0.2.9
│ │ └── lru-cache@2.7.3
……
```

如果要查看某个模块的版本号，可以使用命令如下：

```sh
$ npm list grunt

projectName@projectVersion /path/to/project/folder
└── grunt@0.4.1
```

## 5. 配置文件

使用 npm 来管理的 javascript 项目一般都有一个`package.json`文件。它定义了这个项目所依赖的各种包，以及项目的配置信息（比如名称、版本、依赖等元数据）。

`package.json` 中的内容就是 json 形式。

重要字段：

- `name` - 包名。
- `version` - 包的版本号。
- `description` - 包的描述。
- `homepage` - 包的官网 url 。
- `author` - 包的作者姓名。
- `contributors` - 包的其他贡献者姓名。
- `dependencies` - 指定项目运行所依赖的模块。
- `devDependencies` - 指定项目开发所依赖的模块。
- `repository` - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
- `main` - main 字段是一个模块 ID，它是一个指向你程序的主要项目。就是说，如果你包的名字叫 express，然后用户安装它，然后 require("express")。
- `keywords` - 关键字
- `bin` - 用来指定各个内部命令对应的可执行文件的位置。
- `scripts` - 指定了运行脚本命令的 npm 命令行缩写。

**示例：一个完整的 package.json**

```json
{
  "name": "reactnotes",
  "version": "1.0.0",
  "description": "react 教程",
  "main": "./index.js",
  "dependencies": {
    "react": "^15.4.1",
    "react-dom": "^15.4.1"
  },
  "devDependencies": {
    "webpack-dev-server": "^1.16.2"
  },
  "scripts": {
    "start": "node index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/atlantis1024/ReactNotes.git"
  },
  "author": "victor",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/atlantis1024/ReactNotes/issues"
  },
  "homepage": "https://github.com/atlantis1024/ReactNotes#readme"
}
```

### 5.1. package 版本

上文介绍 package.json 文件中的 `dependencies` 和 `devDependencies` 字段，这二者都是 json 数组。它们的每个 json 子对象，key 表示包名，value 表示版本。

npm 允许的版本声明方式十分多样。下面将为你介绍一二。

**说明**

- `version` - 安装一个确定的版本，遵循“大版本.次要版本.小版本”的格式规定。如：1.0.0。
- `~version` - 以 `~1.0.0` 来举例，表示安装 1.0.x 的最新版本（不低于 1.0.0）。但是大版本号和次要版本号不能变。
- `^version` - 以 `^1.0.0` 来举例，表示安装 1.x.x 的最新版本（不低于 1.0.0），但是大版本号不能变。
- `1.2.x` - 表示安装 1.2.x。
- `>、>=、<、<=` - 可以像数组比较一样，使用比较符来限定版本范围。
- `version1 - version2` - 相当于 `>=version1 <=version2`.
- `range1 || range2` - 版本满足 range1 或 range2 两个限定条件中任意一个即可。
- `tag` - 一个指定 tag 对应的版本。
- `*` 或 `""` (空字符串)：任意版本。
- `latest` - 最新版本。
- `http://...` 或 `file://...` - 你可以指定 http 或本地文件路径下的包作为版本。
- `git...` - 参考下面的“直接将 Git Url 作为依赖包版本”
- `user/repo` - 参考下面的“直接将 Git Url 作为依赖包版本”

例：下面的版本声明都是有效的

```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}
```

**直接将 Git Url 作为依赖包版本**

Git Url 形式可以如下：

```sh
git://github.com/user/project.git#commit-ish
git+ssh://user@hostname:project.git#commit-ish
git+ssh://user@hostname/project.git#commit-ish
git+http://user@hostname/project/blah.git#commit-ish
git+https://user@hostname/project/blah.git#commit-ish
```

### 5.2. 版本号

使用 Npm 下载和发布代码时都会接触到版本号。Npm 使用语义版本号来管理代码，这里简单介绍一下。

语义版本号分为 X.Y.Z 三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

- 如果只是修复 bug，需要更新 Z 位。
- 如果是新增了功能，但是向下兼容，需要更新 Y 位。
- 如果有大变动，向下不兼容，需要更新 X 位。

版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于 0.0.x 系列的最新版 argv。

Npm 支持的所有版本号范围指定方式可以查看[官方文档](https://npmjs.org/doc/files/package.json.html#dependencies)。

## 6. npm 扩展

### 6.1. cnpm

大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用[淘宝 NPM 镜像](https://npm.taobao.org/)。

[淘宝 NPM 镜像](https://npm.taobao.org/)是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10 分钟 一次以保证尽量与官方服务同步。

你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

这样就可以使用 cnpm 命令来安装模块了：

```
$ cnpm install [name]
```

更多信息可以查阅：[http://npm.taobao.org/](http://npm.taobao.org/)。

### 6.2. nrm

[Nrm](https://github.com/Pana/nrm) 是 NPM 注册服务器管理工具，可以快速切换不同的注册表：npm，cnpm，nj，taobao，或者是你自己的私服。

#### 安装 nrm

```
npm install -g nrm
```

查看可用服务器

```sh
# 查看可用服务器
$ nrm ls

* npm -----  https://registry.npmjs.org/
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  rednpm -- http://registry.mirror.cqupt.edu.cn
  skimdb -- https://skimdb.npmjs.com/registry

# 切换服务器
$ nrm use tabao
```

#### nrm 命令语义

```sh
Usage: nrm [options] [command]

  Commands:

    ls                           List all the registries
    use <registry>               Change registry to registry
    add <registry> <url> [home]  Add one custom registry
    del <registry>               Delete one custom registry
    home <registry> [browser]    Open the homepage of registry with optional browser
    test [registry]              Show the response time for one or all registries
    help                         Print this help

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## 7. 引用和引申

> 👉 欢迎阅读 [我的前端技术教程系列：frontend-tutorial](https://github.com/dunwu/frontend-tutorial)

- [Npm 官网](https://www.npmjs.com/)
- [Npm 中文网](https://www.npmjs.com.cn/)
- [Npm Github](https://github.com/npm/cli)
- [淘宝 NPM 镜像](https://npm.taobao.org/) - 代替官方版本，加速下载
- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - npm 资源
- [sinopia](https://github.com/rlidwka/sinopia) - 零配置搭建 npm 私服
- [nrm](https://github.com/Pana/nrm) - npm 服务器地址管理工具
- [NPM 使用介绍](http://www.runoob.com/nodejs/nodejs-npm.html)
