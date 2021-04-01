# Vue.js 入门

Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。

## Vue.js 快速入门

学习 Vue.js 之前，必须先了解基本的 HTML、CSS 和 JavaScript 知识，否则理解起来会比较困难。

### Vue.js 安装

引入 CDN 方式：

```html
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

npm 安装：

```
npm i -S vue
```

每个 Vue 应用都是通过用 `Vue` 函数创建一个新的 **Vue 实例**开始的。当创建一个 Vue 实例时，你可以传入一个**选项对象**。作为参考，你可以在 [API 文档](https://cn.vuejs.org/v2/api/#选项-数据)中浏览完整的选项列表。

### Hello World 示例

【示例】Hello World 示例

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>HelloWorld</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>

  <body>
    <div id="app">{{ message }}</div>
    <script>
      var app = new Vue({
        el: "#app",
        data: {
          message: "Hello Vue!",
        },
      });
    </script>
  </body>
</html>
```

## 数据与方法

当一个 Vue 实例被创建时，它将 `data` 对象中的所有的 property 加入到 Vue 的**响应式系统**中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

```javascript
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})

// 获得这个实例上的 property
// 返回源数据中对应的字段
vm.a == data.a // => true

// 设置 property 也会影响到原始数据
vm.a = 2
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3
```

当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时就已经存在于 `data` 中的 property 才是**响应式**的。也就是说如果你添加一个新的 property，比如：

```
vm.b = 'hi'
```

那么对 `b` 的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个 property，但是一开始它为空或不存在，那么你仅需要设置一些初始值。

比如：

```
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```

这里唯一的例外是使用 `Object.freeze()`，这会阻止修改现有的 property，也意味着响应系统无法再*追踪*变化。

```
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
```

## 声明式渲染

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统。

现在数据和 DOM 已经被建立了关联，所有东西都是**响应式的**。只要修改 message 值，就会看到数据更新。

## 条件与循环

- `v-if`、`v-else-if`、`v-else` 用于控制条件。
- `v-for` 指令用于控制循环。

```vue
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>条件与循环</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>

  <body>
    <div id="app">
      <div>
        <h2>条件控制</h2>
        <p v-if="red" style="color: red">红色</p>
        <p v-else>非红色</p>
      </div>
      <div>
        <h2>循环控制</h2>
        <ol>
          <li v-for="todo in todos">{{ todo.text }}</li>
        </ol>
      </div>
    </div>
    <script>
      var app = new Vue({
        el: "#app",
        data: {
          red: true,
          todos: [
            { text: "学习 JavaScript" },
            { text: "学习 Vue" },
            { text: "整个牛项目" },
          ],
        },
      });
    </script>
  </body>
</html>
```

## 用户输入

为了让用户和你的应用进行交互，我们可以用 `v-on` 指令添加一个事件监听器，通过它调用在 Vue 实例中定义的方法。

Vue 还提供了 `v-model` 指令，它能轻松实现表单输入和应用状态之间的双向绑定。

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>用户输入</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>

  <body>
    <div id="app">
      <p>{{ message }}</p>
      <input v-model="message" />
      <button v-on:click="reverseMessage">反转消息</button>
    </div>
    <script>
      var app = new Vue({
        el: "#app",
        data: {
          message: "Hello Vue!",
        },
        methods: {
          reverseMessage: function () {
            this.message = this.message.split("").reverse().join("");
          },
        },
      });
    </script>
  </body>
</html>
```

## 组件化

组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。

一个 Vue 应用由一个通过 `new Vue` 创建的**根 Vue 实例**，以及可选的嵌套的、可复用的组件树组成。举个例子，一个 todo 应用的组件树可以是这样的：

```
根实例
└─ TodoList
   ├─ TodoItem
   │  ├─ TodoButtonDelete
   │  └─ TodoButtonEdit
   └─ TodoListFooter
      ├─ TodosButtonClear
      └─ TodoListStatistics
```

【示例】组件化示例

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>组件化</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <ol>
        <!--
          现在我们为每个 todo-item 提供 todo 对象
          todo 对象是变量，即其内容可以是动态的。
          我们也需要为每个组件提供一个“key”，稍后再
          作详细解释。
        -->
        <todo-item
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
        ></todo-item>
      </ol>
    </div>
    <script>
      Vue.component("todo-item", {
        // todo-item 组件现在接受一个
        // "prop"，类似于一个自定义 attribute。
        // 这个 prop 名为 todo。
        props: ["todo"],
        template: "<li>{{ todo.text }}</li>",
      });

      var app = new Vue({
        el: "#app",
        data: {
          groceryList: [
            { id: 0, text: "蔬菜" },
            { id: 1, text: "奶酪" },
            { id: 2, text: "随便其它什么人吃的东西" },
          ],
        },
      });
    </script>
  </body>
</html>
```

## 参考资料

- [Vue.js 官网](https://cn.vuejs.org/index.html)
- [Vue.js Github](https://github.com/vuejs/vue)
