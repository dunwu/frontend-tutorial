# CSS 显示

## 显示或隐藏

我们可以通过使用 `visibility` 属性或 `display` 属性来显示或隐藏元素。

要隐藏元素，请将 `display` 属性设置为“none”或将 `visibility` 属性设置为“hidden”。

`visibility：hidden` 隐藏元素，但是元素仍然占据空间并影响布局。

```css
h1.hidden {
    visibility: hidden;
}
```

`display：none` 隐藏元素，并从布局中删除元素。

```css
h1.hidden {
    display: none;
}
```

## block（块）和 inline（内联）元素

块元素尝试获取整个宽度，并在布局中开始新行。一些 HTML 元素是块元素或块级元素。

`<h1>, <p>, <li>, <div>` 都是块元素的示例。

内联元素与其他内联元素保持在同一行中，并且不会开始新行。

`<a>` 、 `<span>` 是内联元素的示例。

我们可以使用 `display` 属性来更改块或内联函数。

以下代码使li元素显示为内联元素。不是开始一个新行作为正常li元素，它显示li元素在同一行。

```css
li {
    display: inline;
}
```

以下代码使span元素显示为块元素。现在每个span元素将像div元素，默认情况下它是一个块元素。

```css
span {
    display: block;
}
```

## Inline-Block（内联块）

`inline-block` 值混合块和内联特性。

盒子的外部被视为内联元素。因此，不会为元素创建新行。

框的内部被视为块元素，并应用诸如宽度，高度和边距的属性。

以下代码显示如何使用 `inline-block` 值。

```html
<!DOCTYPE HTML>
<html>
<head>
<style type="text/css">
p {
  display: inline;
}

span {
  display: inline-block;
  border: medium double black;
  margin: 2em;
  width: 10em;
  height: 2em;
}
</style>
</head>
<body>
  <p>This is a test.</p>
  <p>This is a test. <span>This is a test.</span>
  </p>
</body>
</html>
```
