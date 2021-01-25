# CSS3 快速入门（二）

## 转换

通过 CSS3 转换，我们能够对元素进行移动、缩放、转动、拉长或拉伸。

转换是使元素改变形状、尺寸和位置的一种效果。

您可以使用 2D 或 3D 转换来转换您的元素。

### 2D 转换

在本章中，您将学到如下 2D 转换方法：

- translate()
- rotate()
- scale()
- skew()
- matrix()

**实例**

```css
div {
  transform: rotate(30deg);
  -ms-transform: rotate(30deg);		/* IE 9 */
  -webkit-transform: rotate(30deg);	/* Safari and Chrome */
  -o-transform: rotate(30deg);		/* Opera */
  -moz-transform: rotate(30deg);		/* Firefox */
}
```

#### translate() 方法

通过 `translate()` 方法，元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数：

**实例**

```css
div {
  transform: translate(50px,100px);
  -ms-transform: translate(50px,100px);		/* IE 9 */
  -webkit-transform: translate(50px,100px);	/* Safari and Chrome */
  -o-transform: translate(50px,100px);		/* Opera */
  -moz-transform: translate(50px,100px);		/* Firefox */
}
```

值 translate(50px,100px) 把元素从左侧移动 50 像素，从顶端移动 100 像素。

#### rotate() 方法

通过 `rotate()` 方法，元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。

**实例**

```css
div {
  transform: rotate(30deg);
  -ms-transform: rotate(30deg);		/* IE 9 */
  -webkit-transform: rotate(30deg);	/* Safari and Chrome */
  -o-transform: rotate(30deg);		/* Opera */
  -moz-transform: rotate(30deg);		/* Firefox */
}
```

值 rotate(30deg) 把元素顺时针旋转 30 度。

#### scale() 方法

通过 `scale()` 方法，元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数：

**实例**

```css
div {
  transform: scale(2,4);
  -ms-transform: scale(2,4);	/* IE 9 */
  -webkit-transform: scale(2,4);	/* Safari 和 Chrome */
  -o-transform: scale(2,4);	/* Opera */
  -moz-transform: scale(2,4);	/* Firefox */
}
```

值 scale(2,4) 把宽度转换为原始尺寸的 2 倍，把高度转换为原始高度的 4 倍。

#### skew() 方法

通过 `skew()` 方法，元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数：

**实例**

```css
div{
  transform: skew(30deg,20deg);
  -ms-transform: skew(30deg,20deg);	/* IE 9 */
  -webkit-transform: skew(30deg,20deg);	/* Safari and Chrome */
  -o-transform: skew(30deg,20deg);	/* Opera */
  -moz-transform: skew(30deg,20deg);	/* Firefox */
}
```

值 skew(30deg,20deg) 围绕 X 轴把元素翻转 30 度，围绕 Y 轴翻转 20 度。

#### matrix() 方法

`matrix()` 方法把所有 2D 转换方法组合在一起。

`matrix()` 方法需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。

**实例**

如何使用 matrix 方法将 div 元素旋转 30 度：

```css
div {
  transform:matrix(0.866,0.5,-0.5,0.866,0,0);
  -ms-transform:matrix(0.866,0.5,-0.5,0.866,0,0);		/* IE 9 */
  -moz-transform:matrix(0.866,0.5,-0.5,0.866,0,0);	/* Firefox */
  -webkit-transform:matrix(0.866,0.5,-0.5,0.866,0,0);	/* Safari and Chrome */
  -o-transform:matrix(0.866,0.5,-0.5,0.866,0,0);		/* Opera */
}
```

#### 新的转换属性

下面的表格列出了所有的转换属性：

| 属性               | 描述                |
| ---------------- | ----------------- |
| transform        | 向元素应用 2D 或 3D 转换。 |
| transform-origin | 允许你改变被转换元素的位置。    |

#### 2D Transform 方法

| 函数                              | 描述                       |
| ------------------------------- | ------------------------ |
| matrix(*n*,*n*,*n*,*n*,*n*,*n*) | 定义 2D 转换，使用六个值的矩阵。       |
| translate(*x*,*y*)              | 定义 2D 转换，沿着 X 和 Y 轴移动元素。 |
| translateX(*n*)                 | 定义 2D 转换，沿着 X 轴移动元素。     |
| translateY(*n*)                 | 定义 2D 转换，沿着 Y 轴移动元素。     |
| scale(*x*,*y*)                  | 定义 2D 缩放转换，改变元素的宽度和高度。   |
| scaleX(*n*)                     | 定义 2D 缩放转换，改变元素的宽度。      |
| scaleY(*n*)                     | 定义 2D 缩放转换，改变元素的高度。      |
| rotate(*angle*)                 | 定义 2D 旋转，在参数中规定角度。       |
| skew(*x-angle*,*y-angle*)       | 定义 2D 倾斜转换，沿着 X 和 Y 轴。   |
| skewX(*angle*)                  | 定义 2D 倾斜转换，沿着 X 轴。       |
| skewY(*angle*)                  | 定义 2D 倾斜转换，沿着 Y 轴。       |

### 3D 转换

CSS3 允许您使用 3D 转换来对元素进行格式化。

在本章中，您将学到其中的一些 3D 转换方法：

- rotateX()
- rotateY()

点击下面的元素，来查看 2D 转换与 3D 转换之间的不同之处：

#### rotateX() 方法

通过 `rotateX()` 方法，元素围绕其 X 轴以给定的度数进行旋转。

**实例**

```css
div {
  transform: rotateX(120deg);
  -webkit-transform: rotateX(120deg);	/* Safari 和 Chrome */
  -moz-transform: rotateX(120deg);	/* Firefox */
}
```

#### rotateY() 旋转

通过 rotateY() 方法，元素围绕其 Y 轴以给定的度数进行旋转。

实例

```css
div {
  transform: rotateY(130deg);
  -webkit-transform: rotateY(130deg);	/* Safari 和 Chrome */
  -moz-transform: rotateY(130deg);	/* Firefox */
}
```

#### 转换属性

下面的表格列出了所有的转换属性：

| 属性                  | 描述                   |
| ------------------- | -------------------- |
| transform           | 向元素应用 2D 或 3D 转换。    |
| transform-origin    | 允许你改变被转换元素的位置。       |
| transform-style     | 规定被嵌套元素如何在 3D 空间中显示。 |
| perspective         | 规定 3D 元素的透视效果。       |
| perspective-origin  | 规定 3D 元素的底部位置。       |
| backface-visibility | 定义元素在不面对屏幕时是否可见。     |

## 过渡

通过 CSS3，我们可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。

### 它如何工作？

CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。

要实现这一点，必须规定两项内容：

- 规定您希望把效果添加到哪个 CSS 属性上
- 规定效果的时长

**实例**

应用于宽度属性的过渡效果，时长为 2 秒：

```css
div {
  transition: width 2s;
  -moz-transition: width 2s;	/* Firefox 4 */
  -webkit-transition: width 2s;	/* Safari 和 Chrome */
  -o-transition: width 2s;	/* Opera */
}
```

注释：如果时长未规定，则不会有过渡效果，因为默认值是 0。

效果开始于指定的 CSS 属性改变值时。CSS 属性改变的典型时间是鼠标指针位于元素上时：

**实例**

规定当鼠标指针悬浮于 `<div>` 元素上时：

```css
div:hover {
  width:300px;
}
```

注释：当指针移出元素时，它会逐渐变回原来的样式。

### 多项改变

如需向多个样式添加过渡效果，请添加多个属性，由逗号隔开：

**实例**

向宽度、高度和转换添加过渡效果：

```css
div {
  transition: width 2s, height 2s, transform 2s;
  -moz-transition: width 2s, height 2s, -moz-transform 2s;
  -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
  -o-transition: width 2s, height 2s,-o-transform 2s;
}
```

### 过渡属性

下面的表格列出了所有的转换属性：

| 属性                         | 描述                      |
| -------------------------- | ----------------------- |
| transition                 | 简写属性，用于在一个属性中设置四个过渡属性。  |
| transition-property        | 规定应用过渡的 CSS 属性的名称。      |
| transition-duration        | 定义过渡效果花费的时间。默认是 0。      |
| transition-timing-function | 规定过渡效果的时间曲线。默认是 "ease"。 |
| transition-delay           | 规定过渡效果何时开始。默认是 0。       |

下面的两个例子设置所有过渡属性：

**实例：在一个例子中使用所有过渡属性**

```
div
{
transition-property: width;
transition-duration: 1s;
transition-timing-function: linear;
transition-delay: 2s;
/* Firefox 4 */
-moz-transition-property:width;
-moz-transition-duration:1s;
-moz-transition-timing-function:linear;
-moz-transition-delay:2s;
/* Safari 和 Chrome */
-webkit-transition-property:width;
-webkit-transition-duration:1s;
-webkit-transition-timing-function:linear;
-webkit-transition-delay:2s;
/* Opera */
-o-transition-property:width;
-o-transition-duration:1s;
-o-transition-timing-function:linear;
-o-transition-delay:2s;
}
```

**实例：与上面的例子相同的过渡效果，但是使用了简写的 transition 属性**

```
div
{
transition: width 1s linear 2s;
/* Firefox 4 */
-moz-transition:width 1s linear 2s;
/* Safari and Chrome */
-webkit-transition:width 1s linear 2s;
/* Opera */
-o-transition:width 1s linear 2s;
}
```

## 动画

通过 CSS3，我们能够创建动画，这可以在许多网页中取代动画图片、Flash 动画以及 JavaScript。

### @keyframes 规则

如需在 CSS3 中创建动画，您需要学习 `@keyframes` 规则。

`@keyframes` 规则用于创建动画。在 `@keyframes` 中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果。

**实例**

```css
@keyframes myfirst {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

/* Firefox */
@-moz-keyframes myfirst {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

/* Safari 和 Chrome */
@-webkit-keyframes myfirst {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

/* Opera */
@-o-keyframes myfirst {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}
```

当您在 @keyframes 中创建动画时，请把它捆绑到某个选择器，否则不会产生动画效果。

通过规定至少以下两项 CSS3 动画属性，即可将动画绑定到选择器：

- 规定动画的名称
- 规定动画的时长

**实例：把 "myfirst" 动画捆绑到 div 元素，时长：5 秒**

```css
div {
  animation: myfirst 5s;
  -moz-animation: myfirst 5s; /* Firefox */
  -webkit-animation: myfirst 5s; /* Safari 和 Chrome */
  -o-animation: myfirst 5s; /* Opera */
}
```

> 注释：您必须定义动画的名称和时长。如果忽略时长，则动画不会允许，因为默认值是 0。

### 什么是 CSS3 中的动画？

动画是使元素从一种样式逐渐变化为另一种样式的效果。

您可以改变任意多的样式任意多的次数。

请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。

0% 是动画的开始，100% 是动画的完成。

为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。

**实例：当动画为 25% 及 50% 时改变背景色，然后当动画 100% 完成时再次改变**

```css
@keyframes myfirst {
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: blue;}
  100% {background: green;}
}

/* Firefox */
@-moz-keyframes myfirst {
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: blue;}
  100% {background: green;}
}

/* Safari 和 Chrome */
@-webkit-keyframes myfirst {
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: blue;}
  100% {background: green;}
}

/* Opera */
@-o-keyframes myfirst {
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: blue;}
  100% {background: green;}
}

```

**实例：改变背景色和位置**

```css
@keyframes myfirst {
  0%   {background: red; left:0px; top:0px;}
  25%  {background: yellow; left:200px; top:0px;}
  50%  {background: blue; left:200px; top:200px;}
  75%  {background: green; left:0px; top:200px;}
  100% {background: red; left:0px; top:0px;}
}

/* Firefox */
@-moz-keyframes myfirst {
  0%   {background: red; left:0px; top:0px;}
  25%  {background: yellow; left:200px; top:0px;}
  50%  {background: blue; left:200px; top:200px;}
  75%  {background: green; left:0px; top:200px;}
  100% {background: red; left:0px; top:0px;}
}

/* Safari 和 Chrome */
@-webkit-keyframes myfirst {
  0%   {background: red; left:0px; top:0px;}
  25%  {background: yellow; left:200px; top:0px;}
  50%  {background: blue; left:200px; top:200px;}
  75%  {background: green; left:0px; top:200px;}
  100% {background: red; left:0px; top:0px;}
}

/* Opera */
@-o-keyframes myfirst {
  0%   {background: red; left:0px; top:0px;}
  25%  {background: yellow; left:200px; top:0px;}
  50%  {background: blue; left:200px; top:200px;}
  75%  {background: green; left:0px; top:200px;}
  100% {background: red; left:0px; top:0px;}
}
```

### 动画属性

下面的表格列出了 `@keyframes` 规则和所有动画属性：

| 属性                        | 描述                                      |
| ------------------------- | --------------------------------------- |
| @keyframes                | 规定动画。                                   |
| animation                 | 所有动画属性的简写属性，除了 animation-play-state 属性。 |
| animation-name            | 规定 @keyframes 动画的名称。                    |
| animation-duration        | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。               |
| animation-timing-function | 规定动画的速度曲线。默认是 "ease"。                   |
| animation-delay           | 规定动画何时开始。默认是 0。                         |
| animation-iteration-count | 规定动画被播放的次数。默认是 1。                       |
| animation-direction       | 规定动画是否在下一周期逆向地播放。默认是 "normal"。          |
| animation-play-state      | 规定动画是否正在运行或暂停。默认是 "running"。            |
| animation-fill-mode       | 规定对象动画时间之外的状态。                          |

下面的两个例子设置了所有动画属性：

**实例：运行名为 myfirst 的动画，其中设置了所有动画属性**

```css
div {
  animation-name: myfirst;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-play-state: running;
  /* Firefox: */
  -moz-animation-name: myfirst;
  -moz-animation-duration: 5s;
  -moz-animation-timing-function: linear;
  -moz-animation-delay: 2s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-direction: alternate;
  -moz-animation-play-state: running;
  /* Safari 和 Chrome: */
  -webkit-animation-name: myfirst;
  -webkit-animation-duration: 5s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  -webkit-animation-play-state: running;
  /* Opera: */
  -o-animation-name: myfirst;
  -o-animation-duration: 5s;
  -o-animation-timing-function: linear;
  -o-animation-delay: 2s;
  -o-animation-iteration-count: infinite;
  -o-animation-direction: alternate;
  -o-animation-play-state: running;
}
```

**实例：与上面的动画相同，但是使用了简写的动画 animation 属性**

```css
div {
  animation: myfirst 5s linear 2s infinite alternate;
  /* Firefox: */
  -moz-animation: myfirst 5s linear 2s infinite alternate;
  /* Safari 和 Chrome: */
  -webkit-animation: myfirst 5s linear 2s infinite alternate;
  /* Opera: */
  -o-animation: myfirst 5s linear 2s infinite alternate;
}
```