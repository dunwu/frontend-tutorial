# CSS 语法

CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。

```css
selector {declaration1; declaration2; ... declarationN }
```

选择器通常是您需要改变样式的 HTML 元素。

每条声明由一个属性和一个值组成。

属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

```css
selector {property: value}
```

下面这行代码的作用是将 h1 元素内的文字颜色定义为红色，同时将字体大小设置为 14 像素。

在这个例子中，h1 是选择器，color 和 font-size 是属性，red 和 14px 是值。

```css
h1 {color:red; font-size:14px;}
```

下面的示意图为您展示了上面这段代码的结构：

![](http://www.w3school.com.cn/i/ct_css_selector.gif)

提示：请使用花括号来包围声明。

## 值的不同写法和单位

除了英文单词 red，我们还可以使用十六进制的颜色值 #ff0000：

```css
p { color: #ff0000; }
```

为了节约字节，我们可以使用 CSS 的缩写形式：

```css
p { color: #f00; }
```

我们还可以通过两种方法使用 RGB 值：

```css
p { color: rgb(255,0,0); }
p { color: rgb(100%,0%,0%); }
```

请注意，当使用 RGB 百分比时，即使当值为 0 时也要写百分比符号。但是在其他的情况下就不需要这么做了。比如说，当尺寸为 0 像素时，0 之后不需要使用 px 单位，因为 0 就是 0，无论单位是什么。

## 记得写引号

提示：如果值为若干单词，则要给值加引号：

```css
p {font-family: "sans serif";}
```

## 多重声明：

提示：如果要定义不止一个声明，则需要用分号将每个声明分开。下面的例子展示出如何定义一个红色文字的居中段落。最后一条规则是不需要加分号的，因为分号在英语中是一个分隔符号，不是结束符号。然而，大多数有经验的设计师会在每条声明的末尾都加上分号，这么做的好处是，当你从现有的规则中增减声明时，会尽可能地减少出错的可能性。就像这样：

```css
p {text-align:center; color:red;}	
```

你应该在每行只描述一个属性，这样可以增强样式定义的可读性，就像这样：

```css
p {
  text-align: center;
  color: black;
  font-family: arial;
}
```

## 空格和大小写

大多数样式表包含不止一条规则，而大多数规则包含不止一个声明。多重声明和空格的使用使得样式表更容易被编辑：

```css
body {
  color: #000;
  background: #fff;
  margin: 0;
  padding: 0;
  font-family: Georgia, Palatino, serif;
}
```

是否包含空格不会影响 CSS 在浏览器的工作效果，同样，与 XHTML 不同，CSS 对大小写不敏感。不过存在一个例外：如果涉及到与 HTML 文档一起工作的话，class 和 id 名称对大小写是敏感的。

## 选择器的分组

你可以对选择器进行分组，这样，被分组的选择器就可以分享相同的声明。用逗号将需要分组的选择器分开。在下面的例子中，我们对所有的标题元素进行了分组。所有的标题元素都是绿色的。

```css
h1, h2, h3, h4, h5, h6 {
  color: green;
}
```

## 继承及其问题

根据 CSS，子元素从父元素继承属性。但是它并不总是按此方式工作。看看下面这条规则：

```css
body {
  font-family: Verdana, sans-serif;
}
```

根据上面这条规则，站点的 body 元素将使用 Verdana 字体（假如访问者的系统中存在该字体的话）。

通过 CSS 继承，子元素将继承最高级元素（在本例中是 body）所拥有的属性（这些子元素诸如 p, td, ul, ol, ul, li, dl, dt,和 dd）。不需要另外的规则，所有 body 的子元素都应该显示 Verdana 字体，子元素的子元素也一样。并且在大部分的现代浏览器中，也确实是这样的。

但是在那个浏览器大战的血腥年代里，这种情况就未必会发生，那时候对标准的支持并不是企业的优先选择。比方说，Netscape 4 就不支持继承，它不仅忽略继承，而且也忽略应用于 body 元素的规则。IE/Windows 直到 IE6 还存在相关的问题，在表格内的字体样式会被忽略。我们又该如何是好呢？

## 友善地对待Netscape 4

幸运地是，你可以通过使用我们称为 "Be Kind to Netscape 4" 的冗余法则来处理旧式浏览器无法理解继承的问题。

```css
body {
  font-family: Verdana, sans-serif;
}

p, td, ul, ol, li, dl, dt, dd {
  font-family: Verdana, sans-serif;
}
```

4.0 浏览器无法理解继承，不过他们可以理解组选择器。这么做虽然会浪费一些用户的带宽，但是如果需要对 Netscape 4 用户进行支持，就不得不这么做。

## 继承是一个诅咒吗？

如果你不希望 "Verdana, sans-serif" 字体被所有的子元素继承，又该怎么做呢？比方说，你希望段落的字体是 Times。没问题。创建一个针对 p 的特殊规则，这样它就会摆脱父元素的规则：

```css
body {
  font-family: Verdana, sans-serif;
}

td, ul, ol, ul, li, dl, dt, dd {
  font-family: Verdana, sans-serif;
}

p {
  font-family: Times, "Times New Roman", serif;
}
```