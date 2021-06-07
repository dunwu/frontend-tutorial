(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{424:function(t,a,s){"use strict";s.r(a);var e=s(15),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"node-js-入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-入门"}},[t._v("#")]),t._v(" Node.js 入门")]),t._v(" "),s("blockquote",[s("p",[t._v("Node.js 是一个能够在服务器端运行 JavaScript 源代码的跨平台运行环境。")]),t._v(" "),s("p",[t._v("关键词： "),s("code",[t._v("nodejs")])])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#nodejs-%E5%B7%A5%E5%85%B7"}},[t._v("Node.js 工具")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#nvm"}},[t._v("nvm")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%BC%95%E7%94%A8%E5%92%8C%E5%BC%95%E7%94%B3"}},[t._v("引用和引申")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%AE%98%E6%96%B9%E8%B5%84%E6%BA%90"}},[t._v("官方资源")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E6%95%99%E7%A8%8B"}},[t._v("教程")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%B7%A5%E5%85%B7"}},[t._v("工具")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E8%B5%84%E6%BA%90%E6%94%B6%E9%9B%86"}},[t._v("资源收集")])])])])]),t._v(" "),s("h2",{attrs:{id:"node-js-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-简介"}},[t._v("#")]),t._v(" Node.js 简介")]),t._v(" "),s("p",[t._v("简单的说，"),s("code",[t._v("Node.js")]),t._v(" 就是运行在服务端的 JavaScript。")]),t._v(" "),s("p",[s("code",[t._v("Node.js")]),t._v(" 是一个基于 Chrome JavaScript 运行时建立的一个平台。")]),t._v(" "),s("p",[s("code",[t._v("Node.js")]),t._v(" 是一个事件驱动 I/O 服务端 JavaScript 环境，基于 Google 的 V8 引擎，V8 引擎执行 Javascript 的速度非常快，性能非常好。")]),t._v(" "),s("h2",{attrs:{id:"node-js-工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-工具"}},[t._v("#")]),t._v(" Node.js 工具")]),t._v(" "),s("h3",{attrs:{id:"nvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[t._v("#")]),t._v(" nvm")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nvm"),s("OutboundLink")],1),t._v(" 是一个简单的 bash 脚本工具，用来管理 "),s("code",[t._v("node.js")]),t._v(" 版本。")]),t._v(" "),s("p",[t._v("它可以在同一台机器上安装多个 "),s("code",[t._v("Node.js")]),t._v(" 版本，并灵活的切换版本。")]),t._v(" "),s("p",[t._v("安装")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两条命令效果相同")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),s("p",[t._v("设置环境变量")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NVM_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${XDG_CONFIG_HOME"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":-")]),t._v("$HOME"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(".}")]),t._v('nvm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -s "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v("\n")])])]),s("p",[t._v("使用")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("nvm "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.14")]),t._v(".4  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Node.js 版本")]),t._v("\nnvm use node6.14.4  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定 Node.js 版本（必须已安装）")]),t._v("\n")])])]),s("h2",{attrs:{id:"引用和引申"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用和引申"}},[t._v("#")]),t._v(" 引用和引申")]),t._v(" "),s("blockquote",[s("p",[t._v("👉 欢迎阅读 "),s("a",{attrs:{href:"https://github.com/dunwu/frontend-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("我的前端技术教程系列：frontend-tutorial"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"官方资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官方资源"}},[t._v("#")]),t._v(" 官方资源")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 官网"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/nodejs/node",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js Github"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#教程"}},[t._v("#")]),t._v(" 教程")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/i0natan/nodebestpractices",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.JS 最佳实践"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/alsotang/node-lessons",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 包教不包会"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/nswbmw/N-blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("一起学 Node.js"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/nqdeng/7-days-nodejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("七天学会 NodeJS"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm"),s("OutboundLink")],1),t._v(" - Node 版本管理器")])]),t._v(" "),s("h3",{attrs:{id:"资源收集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源收集"}},[t._v("#")]),t._v(" 资源收集")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/sindresorhus/awesome-nodejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome-nodejs"),s("OutboundLink")],1),t._v(" - Node.js 资源收集")])])])}),[],!1,null,null,null);a.default=r.exports}}]);