---
id: html-quickstart
title: Html 快速入门
---

# Html 快速入门

> 本章节提供了 HTML 最常用标签的简单实用示例。
>
> 你可以将其当做速查手册。

## 基础

```html
<!DOCTYPE html>
<html>
<head>
<title>这是文章标题</title>
</head>
<body>
<!-- 这是注释 -->
<h1>这是标题 1</h1>
<h2>这是标题 2</h2>
<h3>这是标题 3</h3>
<h4>这是标题 4</h4>
<h5>这是标题 5</h5>
<h6>这是标题 6</h6>
<p>这是段落</p>
<br> <!-- 这是换行 -->
<hr> <!-- 这是分割线 -->
</body>
</html>
```

## 样式

```html
<b>粗体文本</b>
<i>斜体文本</i>
<u>下划线文本</u>
<em>定义着重文字</em><br />
<strong>定义加重语气</strong><br />
<ins>定义插入字</ins><br />
<sub>定义删除字</sub><br />
<sub>上标</sub>
<sup>下标</sup>

<!-- 计算机样式 -->
<pre>预格式文本</pre>
<code>一段电脑代码</code>
<dfn>定义项目</dfn>
<kbd>键盘输入</kbd>
<samp>计算机样本</samp>
<var>变量</var>

<!-- 特殊含义的样式 -->
<address>
  Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
  Visit us at:<br>
  Example.com<br>
  Box 564, Disneyland<br>
  USA
</address>

<!-- 该段落文字从左到右显示 -->
<bdo dir="rtl">该段落文字从右到左显示</bdo>

<!-- 长的引用语 -->
<blockquote cite="http://www.worldwildlife.org/who/index.html">
  For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works
  in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>

<!-- 短的引用语 -->
WWF's goal is to: <q>Build a future where people live in harmony with nature.</q>

<!-- 定义引用、引证 -->
<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>
<dfn>定义项目</dfn>
```

## 链接、锚点、图片

```html
<a href="http://www.example.com/">This is a Link</a>
<a href="http://www.example.com/"><img src="URL" alt="Alternate Text"></a>
<a href="mailto:webmaster@example.com">Send e-mail</a>A named anchor:
<a name="tips">Useful Tips Section</a>
<a href="#tips">Jump to the Useful Tips Section</a>
```

## 列表

```html
<!-- 无序列表 -->
<ul>
<li>First item</li>
<li>Next item</li>
</ul>

<!-- 有序列表 -->
<ol>
<li>First item</li>
<li>Next item</li>
</ol>

<!-- 自定义列表 -->
<dl>
<dt>First term</dt>
<dd>Definition</dd>
<dt>Next term</dt>
<dd>Definition</dd>
</dl>
```

## 表单

```html
<form action="http://www.example.com/test.asp" method="post/get">
<input type="text" name="lastname"
value="Nixon" size="30" maxlength="50">
<input type="password">
<input type="checkbox" checked="checked">
<input type="radio" checked="checked">
<input type="submit">
<input type="reset">
<input type="hidden">
<select>
<option>Apples
<option selected>Bananas
<option>Cherries
</select>
<textarea name="Comment" rows="60" cols="20"></textarea>
</form>
```

## 表格

```html
<table border="1">
  <caption>Monthly Savings</caption>
  <colgroup>
    <col span="1" style="background-color:#dcdcdc">
    <col style="background-color:#00bfff">
  </colgroup>
  <thead>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  </thead>
  <tfoot>
  <tr>
    <td>Sum</td>
    <td>$180</td>
  </tr>
  </tfoot>
  <tbody>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
  </tbody>
</table>
```

## 区块

```html
<div style="color:#0000FF">
  <h3>这是一个在 div 元素中的标题。</h3>
  <p>这是一个在 div 元素中的文本。</p>
</div>

<p><span style="color:red">some text.</span>some other text.</p>
```

## 框架

```html
<iframe src="http://www.runoob.com">
  <p>您的浏览器不支持  iframe 标签。</p>
</iframe>
```

