# CSS 选择器

> 如果你要在 HTML 元素中设置 CSS 样式，你需要在元素中设置"id" 和 "class"选择器。

## 派生选择器

**通过依据元素在其位置的上下文关系来定义样式，你可以使标记更加简洁。**

在 CSS1 中，通过这种方式来应用规则的选择器被称为上下文选择器 (contextual selectors)，这是由于它们依赖于上下文关系来应用或者避免某项规则。在 CSS2 中，它们称为派生选择器，但是无论你如何称呼它们，它们的作用都是相同的。

派生选择器允许你根据文档的上下文关系来确定某个标签的样式。通过合理地使用派生选择器，我们可以使 HTML 代码变得更加整洁。

比方说，你希望列表中的 strong 元素变为斜体字，而不是通常的粗体字，可以这样定义一个派生选择器：

```css
li strong {
  font-style: italic;
  font-weight: normal;
}
```

请注意标记为 <strong> 的蓝色代码的上下文关系：

```html
<p><strong>我是粗体字，不是斜体字，因为我不在列表当中，所以这个规则对我不起作用</strong></p>

<ol>
<li><strong>我是斜体字。这是因为 strong 元素位于 li 元素内。</strong></li>
<li>我是正常的字体。</li>
</ol>
```

在上面的例子中，只有 li 元素中的 strong 元素的样式为斜体字，无需为 strong 元素定义特别的 class 或 id，代码更加简洁。

再看看下面的 CSS 规则：

```css
strong {
  color: red;
}

h2 {
  color: red;
}

h2 strong {
  color: blue;
}
```

下面是它施加影响的 HTML：

```html
<p>The strongly emphasized word in this paragraph is<strong>red</strong>.</p>
<h2>This subhead is also red.</h2>
<h2>The strongly emphasized word in this subhead is<strong>blue</strong>.</h2>
```



