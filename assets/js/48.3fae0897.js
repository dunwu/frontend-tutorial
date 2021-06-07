(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{438:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"less-特性概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less-特性概述"}},[t._v("#")]),t._v(" Less 特性概述")]),t._v(" "),a("blockquote",[a("p",[t._v("作为一种 CSS 扩展, Less 不仅向后兼容 CSS, 它还使用现有的 CSS 语法新增了额外的特性. 这使得学习 Less 更轻松, 一旦有任何问题，可以随时退回使用标准的 CSS.")])]),t._v(" "),a("h2",{attrs:{id:"variables-变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables-变量"}},[t._v("#")]),t._v(" Variables （变量）")]),t._v(" "),a("p",[t._v("顾名思义:")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@nice-blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #5B83AD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@light-blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@nice-blue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" #111"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#header")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@light-blue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出:")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#header")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #6c94be"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意，由于变量只能定义一次，实际上他们就是“常量”.")]),t._v(" "),a("h2",{attrs:{id:"mixins-混合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixins-混合"}},[t._v("#")]),t._v(" Mixins （混合）")]),t._v(" "),a("p",[t._v("混合就是一种将一系列属性从一个规则集引入(“混合”)到另一个规则集的方式。假设我们有以下样式:")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bordered")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dotted 1px black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid 2px black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们希望在另一个规则集内部使用上面这些属性。那么，我们就只需要访问我们想要的属性所在类的名称即可，就像下面这样：")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#menu a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #111"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token mixin-usage function"}},[t._v(".bordered")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".post a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token mixin-usage function"}},[t._v(".bordered")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("类 "),a("code",[t._v(".bordered")]),t._v(" 的属性现在就会同事呈现在 "),a("code",[t._v("#menu a")]),t._v(" 和 "),a("code",[t._v(".post a")]),t._v(" 中了（注意，同样可以将 "),a("code",[t._v("#ids")]),t._v(" 作为 mixins）。")]),t._v(" "),a("p",[a("strong",[t._v("Learn more")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.css88.com/doc/less/features/#mixins-feature",target:"_blank",rel:"noopener noreferrer"}},[t._v("More about mixins"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.css88.com/doc/less/features/#mixins-parametric-feature",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parametric Mixins"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"nested-rules-嵌套规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nested-rules-嵌套规则"}},[t._v("#")]),t._v(" Nested rules （嵌套规则）")]),t._v(" "),a("p",[t._v("Less 为我们提供了嵌套的能力, 而不是合并在样式表中.假设我们有下面的 CSS:")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#header")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#header .navigation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 12px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#header .logo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在 Less 中，我们可以以下面这种方式编写:")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#header")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".navigation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 12px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".logo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样的代码更简洁, 它模仿了 HTML 的结构.")]),t._v(" "),a("p",[t._v("使用这种方法照样可以在混合中包含伪类(pseudo-selectors)。下面是一个经典的 clearfix 代码，在这里使用 mixin 重写了（"),a("code",[t._v("&")]),t._v(" 表示当前选择器的父选择器）:")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("zoom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参见")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.css88.com/doc/less/features/#parent-selectors-feature",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parent Selectors（父级选择器）"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"media-query-bubbling-and-nested-media-queries-媒体查询和嵌套媒体查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#media-query-bubbling-and-nested-media-queries-媒体查询和嵌套媒体查询"}},[t._v("#")]),t._v(" Media query bubbling and nested media queries （媒体查询和嵌套媒体查询）")]),t._v(" "),a("p",[t._v("媒体查询同样可以嵌套在选择器中。选择器将被复制到媒体查询体内：")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".screencolor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media screen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min-width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("768px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media tv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出:")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media screen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".screencolor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min-width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".screencolor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@media tv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".screencolor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"operations-运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operations-运算"}},[t._v("#")]),t._v(" Operations （运算）")]),t._v(" "),a("p",[t._v("任何数值，颜色和变量都可以进行运算。这里有一对示例：")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@filler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@base")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@base")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@filler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #888 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@base-color")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" #111"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100% "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@filler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("最后的输出结果与你预期的一样 -- Less 能够推断颜色和单位之间的区别。如果在一个运算中使用了单位，比如：")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 1px "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在这个例子中 Less 会在最终输出结果中使用这个单位 -- "),a("code",[t._v("6px")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"functions-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions-函数"}},[t._v("#")]),t._v(" Functions （函数）")]),t._v(" "),a("p",[t._v("Less 提供了许多用于转换颜色，处理字符串和进行算术运算的函数。他们在函数参考一节有详细的的介绍。")]),t._v(" "),a("p",[t._v("这些函数使用起来非常简单。在下面的例子中我们使用 "),a("code",[t._v("percentage")]),t._v(" 将 0.5 转换为 50%，然后将基础颜色值的饱和度增加了 5%，最后将背景颜色的亮度增加了 25% 之后又将色相值增加 8:")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #f04615"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("percentage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns `50%`")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("saturate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("spin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lighten")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 25%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"namespaces-and-accessors-命名空间和访问器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namespaces-and-accessors-命名空间和访问器"}},[t._v("#")]),t._v(" Namespaces and Accessors （命名空间和访问器）")]),t._v(" "),a("p",[t._v("(不要将它与 "),a("a",{attrs:{href:"http://www.w3.org/TR/css3-namespace/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS "),a("code",[t._v("@namespace")]),a("OutboundLink")],1),t._v(" 或 "),a("a",{attrs:{href:"http://www.w3.org/TR/css3-selectors/#typenmsp",target:"_blank",rel:"noopener noreferrer"}},[t._v("namespace 选择器"),a("OutboundLink")],1),t._v("混为一谈)。")]),t._v(" "),a("p",[t._v("有时候，出于组织的目的，或者为了提供一些封装，你会希望将你的mixins 组合在一起。在 Less 中做到这一点非常直观，假设你想在 "),a("code",[t._v("#bundle")]),t._v(" 下捆绑一些 mixins 和变量，以便稍候复用或者分发：")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#bundle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:hover")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".tab")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".citation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("现在如果我们想在 "),a("code",[t._v("#header a")]),t._v(" 中混合 "),a("code",[t._v(".button")]),t._v(" 类，那么我们可以这样做：")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#header a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token mixin-usage function"}},[t._v("#bundle > .button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("需要注意的是命名空间内声明的变量将只作用于该命名空间，并且在作用域外通过相同的语法是无效的，你会用它来引用一个mixin ("),a("code",[t._v("#Namespace > .mixin-name")]),t._v(")。因此，举例来说，你不能这么做： ("),a("code",[t._v("#Namespace > @this-will-not-work")]),t._v(")。")]),t._v(" "),a("h2",{attrs:{id:"scope-作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope-作用域"}},[t._v("#")]),t._v(" Scope （作用域）")]),t._v(" "),a("p",[t._v("Less 中的作用域与编程语言中的作用域概念非常相似。首先会在局部查找变量和混合，如果没找到，编译器就会在父作用域中查找，依次类推。")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#page")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#header")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// white")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("变量和混合不必在使用前声明，因此下面的代码与前面的例子等价：")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#page")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#header")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// white")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参见")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.css88.com/doc/less/features/#variables-feature-lazy-loading",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lazy Loading(延迟加载)"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"comments-注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comments-注释"}},[t._v("#")]),t._v(" Comments （注释）")]),t._v(" "),a("p",[t._v("可以使用块注释和行注释:")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* One hell of a block\nstyle comment! */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get in line!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"importing-导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-导入"}},[t._v("#")]),t._v(" Importing （导入）")]),t._v(" "),a("p",[t._v("导入工作与你预期的一样。你可以导入一个 "),a("code",[t._v(".less")]),t._v(" 文件，然后这个文件中的所有变量都可以使用了。对于 "),a("code",[t._v(".less")]),t._v(" 文件而言，其扩展名是可选的。")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"library"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// library.less")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"typo.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);