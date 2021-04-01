# CSS 长度

许多CSS属性要求您指定长度，例如width属性，font-size属性。

以下代码在属性中设置测量单位

```
<!DOCTYPE HTML>
<html>
<head>
<style type="text/css">
p  {
    background: grey;
    color:white;
    width: 5cm;
    font-size:  20pt;
}
</style>
</head>
<body>
   <p>this is a test.</p>
</body>
</html>
```

在上面的代码中，width属性为`5cm`。 字体大小为`20pt`。

CSS定义了两种长度单位

- absolute
- relative

## 绝对长度

`cm` 和 `pt` 单位，两者都是绝对单位的实例。

这些单位是现实世界的测量。 CSS支持五种类型的绝对单位。

| 单位标识符 | 描述                                  |
| ----- | ----------------------------------- |
| in    | Inches                              |
| cm    | Centimeters                         |
| mm    | Millimeters                         |
| pt    | Points (1 point is 1/72 of an inch) |
| pc    | Picas (1 pica is 12 points)         |

您可以在样式中混合和匹配单位，也可以混合绝对和相对单位。

您可以混合和匹配单位。

```html
<!DOCTYPE HTML>
<html>
<head>
  <style>
    p {
      width: 5cm;
      font-size: 20pt;
    }
  </style>
</head>
<body>
<p>I like <span>HTML</span> and CSS. www.w3cschool.cn</p>
</body>
</html>
```

## 相对长度

相对单位根据一些其他单位来测量。

CSS 定义了大范围的相对测量。

下表显示了 CSS 在主流浏览器中定义和支持的相对单位。

| 单位标识符 | 描述                    |
| ----- | --------------------- |
| em    | 相对于元素的字体大小            |
| ex    | 相对于元素字体的“x-height”    |
| rem   | 相对于根元素的字体大小           |
| px    | 许多CSS像素(假定在96dpi显示器上) |
| %     | 另一个属性的值的百分比           |

在以下示例中，height 属性的值为 2em。 2em 意味着 p 个元素的高度是字体大小的两倍。

```html
<!DOCTYPE HTML>
<html>
<head>
  <style>
    p {
      font-size: 15pt;
      height: 2em;
    }
  </style>
</head>
<body>
<a href="http://www.baidu.com">Baidu</a>
<p>I like <span>HTML</span> and CSS.</p>
<p style="font-size:12pt">Font size 12pt.</p>
</body>
</html>
```

**例子**

以下代码显示如何比较英寸和像素中的高度设置。

```html
<html>
<head>
<title>Pixels to Inches</title>
<style type="text/css">
div {
  background: #000;
  border: 1px solid rgb(128, 128, 128);
  color: white;
  font: 9px monospace;
  margin: 15px;
  text-align: center;
}

div#inches {
  width: 1in;
  height: 1in;
}

div#pixels {
  width: 96px;
  height: 96px;
}
</style>
</head>
<body>
  <div id="inches">&lt;-- 1 Inch --&gt;</div>
  <div id="pixels">&lt;-- 96 Pixels --&gt;</div>
</body>
</html>
```

## 像素值

一个容易设置的长度是使用像素值。1 像素是 1/96 英寸。以下代码设置字体大小和宽度的像素值。

```html
<!DOCTYPE HTML>
<html>
<head>
  <style type="text/css">
    p {
      background: grey;
      color:white;
      font-size: 20px;
      width: 200px;
    }
  </style>
</head>
<body>
<a href="http://www.baidu.com">baidu</a>
<p>I like <span>HTML</span> and CSS.</p>
</body>
</html>
```

## 百分比值

您可以将度量单位表示为另一个属性值的百分比。您可以使用％（百分比）单位。

```html
<!DOCTYPE HTML>
<html>
<head>
  <style type="text/css">
    p {
      background: grey;
      color: white;
      font-size: 200%;
      width: 50%;
    }
  </style>
</head>
<body>
<a href="http://www.baidu.com">baidu</a>
<p>I like <span>HTML</span> and CSS.</p>
</body>
</html>
```

百分比值的一个很好的功能是，当您调整浏览器窗口的大小时，值正在更新。

## 相对于字体大小

以下代码使用相对单位。

```html
<!DOCTYPE HTML>
<html>
<head>
  <style type="text/css">
    p  {
      background: grey;
      color:white;
      font-size:  15pt;
      height: 2em;
    }
  </style>
</head>
<body>
<p>This is a test.</p>
<p style="font-size:12pt">This is another test.</p>
</body>
</html>
```

上面的代码将height属性设置为`2em`，这意味着`p`个元素的高度是字体大小的两倍。

第一个`p`元素的字体大小为15pt。第二个`p`元素的 `font-size` 为12pt。

## 派生自其他相对值

您可以使用相对单位来表示另一个相对度量的倍数。

以下示例显示 `height` 属性以 `em` 单位表示。`em` 单位派生自 `font-size` 属性的值，其使用 `rem` 单位表示。

```html
<!DOCTYPE HTML>
<html>
<head>
  <style type="text/css">
    html {
      font-size: 0.2in;
    }

    p {
      background: grey;
      color: white;
      font-size: 2rem;
      height: 2em;
    }
  </style>
</head>
<body style="font-size:14pt">
<a href="http://www.baidu.com">baidu</a>
<p>This is a test.</p>
<a href="http://w3c.org">W3C</a>
</body>
</html> 
```

上述示例分配的绝对字体大小为0.2英寸。

`rem` 单位是相对于字体大小的 html 元素，也称为根元素。

`font-size` 值`2rem`意味着字体大小将是根元素字体-0.4英寸的大小的两倍。

相同样式中的 `height` 属性被指定为2em，这是再次的两倍。这意味着浏览器将使用高度为0.4英寸的字体显示p个元素，并且整体元素将为0.8英寸高。

另一个与字体相关的相对单位是`ex`，`1ex`大约为`0.5em`。

## 像素

主流浏览器将1个像素视为1/96英寸。

下面的代码演示了如何指定 CSS 样式中的像素。

```html
<!DOCTYPE HTML>
<html>
<head>
  <style type="text/css">
    p {
      background: grey;
      color: white;
      font-size: 20px;
      width: 200px;
    }
  </style>
</head>
<body>
<p>This is a test.</p>
</body>
</html>
```

`em` 单位更灵活。你只需要改变字体的大小，其余的风格无缝地工作。

## 百分比

您可以将度量单位表示为另一个属性值的百分比。

您可以使用`%`（百分比）单位。

以下代码将单位表示为另一个属性值的百分比。

```html
<!DOCTYPE HTML>
<html>
<head>
  <style type="text/css">
    p {
      background: grey;
      color: white;
      font-size: 200%;
      width: 50%;
    }
  </style>
</head>
<body>
<a href="http://www.baidu.com">baidu</a>
<p>this is a test.</p>
<a href="http://w3c.org">W3C</a>
</body>
</html>
```