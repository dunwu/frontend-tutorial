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

## id 选择器

**id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。**

**id 选择器以 "#" 来定义。**

下面的两个 id 选择器，第一个可以定义元素的颜色为红色，第二个定义元素的颜色为绿色：

```css
#red {color:red;}
#green {color:green;}
```

下面的 HTML 代码中，id 属性为 red 的 p 元素显示为红色，而 id 属性为 green 的 p 元素显示为绿色。

```html
<p id="red">这个段落是红色。</p>
<p id="green">这个段落是绿色。</p>
```

> 注意：id 属性只能在每个 HTML 文档中出现一次。
>

### id 选择器和派生选择器

**在现代布局中，id 选择器常常用于建立派生选择器。**

```css
#sidebar p {
  font-style: italic;
  text-align: right;
  margin-top: 0.5em;
}
```

上面的样式只会应用于出现在 id 是 sidebar 的元素内的段落。这个元素很可能是 div 或者是表格单元，尽管它也可能是一个表格或者其他块级元素。它甚至可以是一个内联元素，比如 `<em></em>` 或者 `<span></span>`，不过这样的用法是非法的，因为不可以在内联元素 `<span>` 中嵌入 `<p>` 。

### 一个选择器，多种用法

**即使被标注为 sidebar 的元素只能在文档中出现一次，这个 id 选择器作为派生选择器也可以被使用很多次：**

```css
#sidebar p {
  font-style: italic;
  text-align: right;
  margin-top: 0.5em;
}

#sidebar h2 {
  font-size: 1em;
  font-weight: normal;
  font-style: italic;
  margin: 0;
  line-height: 1.5;
  text-align: right;
}
```

在这里，与页面中的其他 p 元素明显不同的是，sidebar 内的 p 元素得到了特殊的处理，同时，与页面中其他所有 h2 元素明显不同的是，sidebar 中的 h2 元素也得到了不同的特殊处理。

### 单独的选择器

**id 选择器即使不被用来创建派生选择器，它也可以独立发挥作用：**

```css
#sidebar {
  border: 1px dotted #000;
  padding: 10px;
}
```

根据这条规则，id 为 sidebar 的元素将拥有一个像素宽的黑色点状边框，同时其周围会有 10 个像素宽的内边距（padding，内部空白）。老版本的 Windows/IE 浏览器可能会忽略这条规则，除非你特别地定义这个选择器所属的元素：

```css
div#sidebar {
  border: 1px dotted #000;
  padding: 10px;
}
```

## 类选择器

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

## 属性选择器

可以为拥有指定属性的 HTML 元素设置样式，而不仅限于 class 和 id 属性。

> 注意：只有在规定了 !DOCTYPE 时，IE7 和 IE8 才支持属性选择器。在 IE6 及更低的版本中，不支持属性选择。

下面的例子为带有 title 属性的所有元素设置样式：

```css
[title] {
  color: red;
}
```

### 属性和值选择器

下面的例子为 title="baidu" 的所有元素设置样式：

```css
[title=baidu] {
  border:5px solid blue;
}
```

### 属性和值选择器 - 多个值

下面的例子为包含指定值的 title 属性的所有元素设置样式。适用于由空格分隔的属性值：

```css
[title~=hello] { color:red; }
```

下面的例子为带有包含指定值的 lang 属性的所有元素设置样式。适用于由连字符分隔的属性值：

```css
[lang|=en] { color:red; }
```

### 设置表单的样式

属性选择器在为不带有 class 或 id 的表单设置样式时特别有用：

```css
input[type="text"] {
  width: 150px;
  display: block;
  margin-bottom: 10px;
  background-color: yellow;
  font-family: Verdana, Arial;
}

input[type="button"] {
  width: 120px;
  margin-left: 35px;
  display: block;
  font-family: Verdana, Arial;
}
```

### 属性选择器参考表

| 选择器                   | 描述                             |
| --------------------- | ------------------------------ |
| `[attribute]`         | 用于选取带有指定属性的元素。                 |
| `[attribute=value]`   | 用于选取带有指定属性和值的元素。               |
| `[attribute~=value]`  | 用于选取属性值中包含指定词汇的元素。             |
| `[attribute\|=value]` | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。 |
| `[attribute^=value]`  | 匹配属性值以指定值开头的每个元素。              |
| `[attribute$=value]`  | 匹配属性值以指定值结尾的每个元素。              |
| `[attribute*=value]`  | 匹配属性值中包含指定值的每个元素。              |