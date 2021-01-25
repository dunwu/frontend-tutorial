# CSS 表格

**CSS 表格属性可以帮助您极大地改善表格的外观。**

## 表格边框

如需在 CSS 中设置表格边框，请使用 border 属性。

下面的例子为 table、th 以及 td 设置了蓝色边框：

```
table, th, td
  {
  border: 1px solid blue;
  }

```

请注意，上例中的表格具有双线条边框。这是由于 table、th 以及 td 元素都有独立的边框。

如果需要把表格显示为单线条边框，请使用 border-collapse 属性。

## 折叠边框

border-collapse 属性设置是否将表格边框折叠为单一边框：

```
table
  {
  border-collapse:collapse;
  }

table,th, td
  {
  border: 1px solid black;
  }

```

## 表格宽度和高度

通过 width 和 height 属性定义表格的宽度和高度。

下面的例子将表格宽度设置为 100%，同时将 th 元素的高度设置为 50px：

```
table
  {
  width:100%;
  }

th
  {
  height:50px;
  }

```

## 表格文本对齐

text-align 和 vertical-align 属性设置表格中文本的对齐方式。

text-align 属性设置水平对齐方式，比如左对齐、右对齐或者居中：

```
td
  {
  text-align:right;
  }

```

vertical-align 属性设置垂直对齐方式，比如顶部对齐、底部对齐或居中对齐：

```
td
  {
  height:50px;
  vertical-align:bottom;
  }

```

## 表格内边距

如需控制表格中内容与边框的距离，请为 td 和 th 元素设置 padding 属性：

```
td
  {
  padding:15px;
  }

```

## 表格颜色

下面的例子设置边框的颜色，以及 th 元素的文本和背景颜色：

```
table, td, th
  {
  border:1px solid green;
  }

th
  {
  background-color:green;
  color:white;
  }
```

## CSS Table 属性

| 属性                                       | 描述                 |
| ---------------------------------------- | ------------------ |
| [border-collapse](http://www.w3school.com.cn/cssref/pr_tab_border-collapse.asp) | 设置是否把表格边框合并为单一的边框。 |
| [border-spacing](http://www.w3school.com.cn/cssref/pr_tab_border-spacing.asp) | 设置分隔单元格边框的距离。      |
| [caption-side](http://www.w3school.com.cn/cssref/pr_tab_caption-side.asp) | 设置表格标题的位置。         |
| [empty-cells](http://www.w3school.com.cn/cssref/pr_tab_empty-cells.asp) | 设置是否显示表格中的空单元格。    |
| [table-layout](http://www.w3school.com.cn/cssref/pr_tab_table-layout.asp) | 设置显示单元、行和列的算法。     |