# 内边距

> **元素的内边距在边框和内容区之间。控制该区域最简单的属性是 padding 属性。**
>
> **CSS padding 属性定义元素边框与元素内容之间的空白区域。**

## CSS padding 属性

CSS padding 属性定义元素的内边距。padding 属性接受长度值或百分比值，但不允许使用负值。

例如，如果您希望所有 h1 元素的各边都有 10 像素的内边距，只需要这样：

```css
h1 {padding: 10px;}
```

您还可以按照上、右、下、左的顺序分别设置各边的内边距，各边均可以使用不同的单位或百分比值：

```css
h1 {padding: 10px 0.25em 2ex 20%;}
```

### 单边内边距属性

也通过使用下面四个单独的属性，分别设置上、右、下、左内边距：

- [padding-top](http://www.w3school.com.cn/cssref/pr_padding-top.asp)
- [padding-right](http://www.w3school.com.cn/cssref/pr_padding-right.asp)
- [padding-bottom](http://www.w3school.com.cn/cssref/pr_padding-bottom.asp)
- [padding-left](http://www.w3school.com.cn/cssref/pr_padding-left.asp)

您也许已经想到了，下面的规则实现的效果与上面的简写规则是完全相同的：

```css
h1 {
  padding-top: 10px;
  padding-right: 0.25em;
  padding-bottom: 2ex;
  padding-left: 20%;
}
```

## 内边距的百分比数值

前面提到过，可以为元素的内边距设置百分数值。百分数值是相对于其父元素的 width 计算的，这一点与外边距一样。所以，如果父元素的 width 改变，它们也会改变。

下面这条规则把段落的内边距设置为父元素 width 的 10%：

```css
p {padding: 10%;}
```

例如：如果一个段落的父元素是 div 元素，那么它的内边距要根据 div 的 width 计算。

```html
<div style="width: 200px;">
<p>This paragragh is contained within a DIV that has a width of 200 pixels.</p>
</div> 
```

注意：上下内边距与左右内边距一致；即上下内边距的百分数会相对于父元素宽度设置，而不是相对于高度。

## CSS 内边距属性

| 属性             | 描述                         |
| -------------- | -------------------------- |
| padding        | 简写属性。作用是在一个声明中设置元素的所内边距属性。 |
| padding-bottom | 设置元素的下内边距。                 |
| padding-left   | 设置元素的左内边距。                 |
| padding-right  | 设置元素的右内边距。                 |
| padding-top    | 设置元素的上内边距。                 |


