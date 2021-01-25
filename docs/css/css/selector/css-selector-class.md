# 类选择器

在 CSS 中，类选择器以一个点号显示：

```css
.center {
  text-align: center
}
```

在上面的例子中，所有拥有 center 类的 HTML 元素均为居中。

在下面的 HTML 代码中，h1 和 p 元素都有 center 类。这意味着两者都将遵守 ".center" 选择器中的规则。

```html
<h1 class="center">
This heading will be center-aligned
</h1>

<p class="center">
This paragraph will also be center-aligned.
</p>
```

> 注意：类名的第一个字符不能使用数字！它无法在 Mozilla 或 Firefox 中起作用。

**和 id 一样，class 也可被用作派生选择器：**

```css
.fancy td {
  color: #f60;
  background: #666;
}
```

在上面这个例子中，类名为 fancy 的更大的元素内部的表格单元都会以灰色背景显示橙色文字。（名为 fancy 的更大的元素可能是一个表格或者一个 div）

**元素也可以基于它们的类而被选择：**

```css
td.fancy {
  color: #f60;
  background: #666;
}
```

在上面的例子中，类名为 fancy 的表格单元将是带有灰色背景的橙色。

```html
<td class="fancy">
```

你可以将类 fancy 分配给任何一个表格元素任意多的次数。那些以 fancy 标注的单元格都会是带有灰色背景的橙色。那些没有被分配名为 fancy 的类的单元格不会受这条规则的影响。还有一点值得注意，class 为 fancy 的段落也不会是带有灰色背景的橙色，当然，任何其他被标注为 fancy 的元素也不会受这条规则的影响。这都是由于我们书写这条规则的方式，这个效果被限制于被标注为 fancy 的表格单元（即使用 td 元素来选择 fancy 类）。
