# Vuex 进阶

> Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 [devtools extension (opens new window)](https://github.com/vuejs/vue-devtools)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

<!-- TOC depthFrom:2 depthTo:3 -->

- [1. 项目结构](#1-项目结构)
- [2. 插件](#2-插件)
  - [2.1. 在插件内提交 Mutation](#21-在插件内提交-mutation)
  - [2.2. 生成 State 快照](#22-生成-state-快照)
  - [2.3. 内置 Logger 插件](#23-内置-logger-插件)
- [3. 严格模式](#3-严格模式)
  - [3.1. 开发环境与发布环境](#31-开发环境与发布环境)
- [4. 表单处理](#4-表单处理)
  - [4.1. 双向绑定的计算属性](#41-双向绑定的计算属性)
- [5. 测试](#5-测试)
  - [5.1. 测试 Mutation](#51-测试-mutation)
  - [5.2. 测试 Action](#52-测试-action)
  - [5.3. 测试 Getter](#53-测试-getter)
  - [5.4. 执行测试](#54-执行测试)
- [6. 热重载](#6-热重载)
  - [6.1. 动态模块热重载](#61-动态模块热重载)
- [7. 参考资料](#7-参考资料)

<!-- /TOC -->

## 1. 项目结构

Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：

1. 应用层级的状态应该集中到单个 store 对象中。
2. 提交 **mutation** 是更改状态的唯一方法，并且这个过程是同步的。
3. 异步逻辑都应该封装到 **action** 里面。

只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。

对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：

```bash
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```

## 2. 插件

Vuex 的 store 接受 `plugins` 选项，这个选项暴露出每次 mutation 的钩子。Vuex 插件就是一个函数，它接收 store 作为唯一参数：

```js
const myPlugin = (store) => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  });
};
```

然后像这样使用：

```js
const store = new Vuex.Store({
  // ...
  plugins: [myPlugin],
});
```

### 2.1. 在插件内提交 Mutation

在插件中不允许直接修改状态——类似于组件，只能通过提交 mutation 来触发变化。

通过提交 mutation，插件可以用来同步数据源到 store。例如，同步 websocket 数据源到 store（下面是个大概例子，实际上 `createPlugin` 方法可以有更多选项来完成复杂任务）：

```js
export default function createWebSocketPlugin(socket) {
  return (store) => {
    socket.on("data", (data) => {
      store.commit("receiveData", data);
    });
    store.subscribe((mutation) => {
      if (mutation.type === "UPDATE_DATA") {
        socket.emit("update", mutation.payload);
      }
    });
  };
}
const plugin = createWebSocketPlugin(socket);

const store = new Vuex.Store({
  state,
  mutations,
  plugins: [plugin],
});
```

### 2.2. 生成 State 快照

有时候插件需要获得状态的“快照”，比较改变的前后状态。想要实现这项功能，你需要对状态对象进行深拷贝：

```js
const myPluginWithSnapshot = (store) => {
  let prevState = _.cloneDeep(store.state);
  store.subscribe((mutation, state) => {
    let nextState = _.cloneDeep(state);

    // 比较 prevState 和 nextState...

    // 保存状态，用于下一次 mutation
    prevState = nextState;
  });
};
```

**生成状态快照的插件应该只在开发阶段使用**，使用 webpack 或 Browserify，让构建工具帮我们处理：

```js
const store = new Vuex.Store({
  // ...
  plugins: process.env.NODE_ENV !== "production" ? [myPluginWithSnapshot] : [],
});
```

上面插件会默认启用。在发布阶段，你需要使用 webpack 的 [DefinePlugin (opens new window)](https://webpack.js.org/plugins/define-plugin/)或者是 Browserify 的 [envify (opens new window)](https://github.com/hughsk/envify)使 `process.env.NODE_ENV !== 'production'` 为 `false`。

### 2.3. 内置 Logger 插件

> 如果正在使用 [vue-devtools (opens new window)](https://github.com/vuejs/vue-devtools)，你可能不需要此插件。

Vuex 自带一个日志插件用于一般的调试:

```js
import createLogger from "vuex/dist/logger";

const store = new Vuex.Store({
  plugins: [createLogger()],
});
```

`createLogger` 函数有几个配置项：

```js
const logger = createLogger({
  collapsed: false, // 自动展开记录的 mutation
  filter(mutation, stateBefore, stateAfter) {
    // 若 mutation 需要被记录，就让它返回 true 即可
    // 顺便，`mutation` 是个 { type, payload } 对象
    return mutation.type !== "aBlocklistedMutation";
  },
  actionFilter(action, state) {
    // 和 `filter` 一样，但是是针对 action 的
    // `action` 的格式是 `{ type, payload }`
    return action.type !== "aBlocklistedAction";
  },
  transformer(state) {
    // 在开始记录之前转换状态
    // 例如，只返回指定的子树
    return state.subTree;
  },
  mutationTransformer(mutation) {
    // mutation 按照 { type, payload } 格式记录
    // 我们可以按任意方式格式化
    return mutation.type;
  },
  actionTransformer(action) {
    // 和 `mutationTransformer` 一样，但是是针对 action 的
    return action.type;
  },
  logActions: true, // 记录 action 日志
  logMutations: true, // 记录 mutation 日志
  logger: console, // 自定义 console 实现，默认为 `console`
});
```

日志插件还可以直接通过 `<script>` 标签引入，它会提供全局方法 `createVuexLogger`。

要注意，logger 插件会生成状态快照，所以仅在开发环境使用。

## 3. 严格模式

开启严格模式，仅需在创建 store 的时候传入 `strict: true`：

```js
const store = new Vuex.Store({
  // ...
  strict: true,
});
```

在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。

### 3.1. 开发环境与发布环境

**不要在发布环境下启用严格模式**！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。

类似于插件，我们可以让构建工具来处理这种情况：

```js
const store = new Vuex.Store({
  // ...
  strict: process.env.NODE_ENV !== "production",
});
```

## 4. 表单处理

当在严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 `v-model` 会比较棘手：

```html
<input v-model="obj.message" />
```

假设这里的 `obj` 是在计算属性中返回的一个属于 Vuex store 的对象，在用户输入时，`v-model` 会试图直接修改 `obj.message`。在严格模式中，由于这个修改不是在 mutation 函数中执行的, 这里会抛出一个错误。

用“Vuex 的思维”去解决这个问题的方法是：给 `<input>` 中绑定 value，然后侦听 `input` 或者 `change` 事件，在事件回调中调用一个方法:

```html
<input :value="message" @input="updateMessage" /> // ... computed: {
...mapState({ message: state => state.obj.message }) }, methods: { updateMessage
(e) { this.$store.commit('updateMessage', e.target.value) } }
```

下面是 mutation 函数：

```js
// ...
mutations: {
  updateMessage (state, message) {
    state.obj.message = message
  }
}
```

### 4.1. 双向绑定的计算属性

必须承认，这样做比简单地使用“`v-model` + 局部状态”要啰嗦得多，并且也损失了一些 `v-model` 中很有用的特性。另一个方法是使用带有 setter 的双向绑定计算属性：

```html
<input v-model="message" /> // ... computed: { message: { get () { return
this.$store.state.obj.message }, set (value) {
this.$store.commit('updateMessage', value) } } }
```

## 5. 测试

### 5.1. 测试 Mutation

Mutation 很容易被测试，因为它们仅仅是一些完全依赖参数的函数。这里有一个小技巧，如果你在 `store.js` 文件中定义了 mutation，并且使用 ES2015 模块功能默认输出了 Vuex.Store 的实例，那么你仍然可以给 mutation 取个变量名然后把它输出去：

```js
const state = { ... }

// `mutations` 作为命名输出对象
export const mutations = { ... }

export default new Vuex.Store({
  state,
  mutations
})
```

下面是用 Mocha + Chai 测试一个 mutation 的例子（实际上你可以用任何你喜欢的测试框架）：

```js
// mutations.js
export const mutations = {
  increment: (state) => state.count++,
};
// mutations.spec.js
import { expect } from "chai";
import { mutations } from "./store";

// 解构 `mutations`
const { increment } = mutations;

describe("mutations", () => {
  it("INCREMENT", () => {
    // 模拟状态
    const state = { count: 0 };
    // 应用 mutation
    increment(state);
    // 断言结果
    expect(state.count).to.equal(1);
  });
});
```

### 5.2. 测试 Action

Action 应对起来略微棘手，因为它们可能需要调用外部的 API。当测试 action 的时候，我们需要增加一个 mocking 服务层——例如，我们可以把 API 调用抽象成服务，然后在测试文件中用 mock 服务回应 API 调用。为了便于解决 mock 依赖，可以用 webpack 和 [inject-loader (opens new window)](https://github.com/plasticine/inject-loader)打包测试文件。

下面是一个测试异步 action 的例子：

```js
// actions.js
import shop from "../api/shop";

export const getAllProducts = ({ commit }) => {
  commit("REQUEST_PRODUCTS");
  shop.getProducts((products) => {
    commit("RECEIVE_PRODUCTS", products);
  });
};
// actions.spec.js

// 使用 require 语法处理内联 loaders。
// inject-loader 返回一个允许我们注入 mock 依赖的模块工厂
import { expect } from "chai";
const actionsInjector = require("inject-loader!./actions");

// 使用 mocks 创建模块
const actions = actionsInjector({
  "../api/shop": {
    getProducts(cb) {
      setTimeout(() => {
        cb([
          /* mocked response */
        ]);
      }, 100);
    },
  },
});

// 用指定的 mutations 测试 action 的辅助函数
const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0;

  // 模拟提交
  const commit = (type, payload) => {
    const mutation = expectedMutations[count];

    try {
      expect(mutation.type).to.equal(type);
      expect(mutation.payload).to.deep.equal(payload);
    } catch (error) {
      done(error);
    }

    count++;
    if (count >= expectedMutations.length) {
      done();
    }
  };

  // 用模拟的 store 和参数调用 action
  action({ commit, state }, ...args);

  // 检查是否没有 mutation 被 dispatch
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0);
    done();
  }
};

describe("actions", () => {
  it("getAllProducts", (done) => {
    testAction(
      actions.getAllProducts,
      [],
      {},
      [
        { type: "REQUEST_PRODUCTS" },
        {
          type: "RECEIVE_PRODUCTS",
          payload: {
            /* mocked response */
          },
        },
      ],
      done
    );
  });
});
```

如果在测试环境下有可用的 spy (比如通过 [Sinon.JS (opens new window)](http://sinonjs.org/))，你可以使用它们替换辅助函数 `testAction`：

```js
describe("actions", () => {
  it("getAllProducts", () => {
    const commit = sinon.spy();
    const state = {};

    actions.getAllProducts({ commit, state });

    expect(commit.args).to.deep.equal([
      ["REQUEST_PRODUCTS"],
      [
        "RECEIVE_PRODUCTS",
        {
          /* mocked response */
        },
      ],
    ]);
  });
});
```

### 5.3. 测试 Getter

如果你的 getter 包含很复杂的计算过程，很有必要测试它们。Getter 的测试与 mutation 一样直截了当。

测试一个 getter 的示例：

```js
// getters.js
export const getters = {
  filteredProducts(state, { filterCategory }) {
    return state.products.filter((product) => {
      return product.category === filterCategory;
    });
  },
};
// getters.spec.js
import { expect } from "chai";
import { getters } from "./getters";

describe("getters", () => {
  it("filteredProducts", () => {
    // 模拟状态
    const state = {
      products: [
        { id: 1, title: "Apple", category: "fruit" },
        { id: 2, title: "Orange", category: "fruit" },
        { id: 3, title: "Carrot", category: "vegetable" },
      ],
    };
    // 模拟 getter
    const filterCategory = "fruit";

    // 获取 getter 的结果
    const result = getters.filteredProducts(state, { filterCategory });

    // 断言结果
    expect(result).to.deep.equal([
      { id: 1, title: "Apple", category: "fruit" },
      { id: 2, title: "Orange", category: "fruit" },
    ]);
  });
});
```

### 5.4. 执行测试

如果你的 mutation 和 action 编写正确，经过合理地 mocking 处理之后这些测试应该不依赖任何浏览器 API，因此你可以直接用 webpack 打包这些测试文件然后在 Node 中执行。换种方式，你也可以用 `mocha-loader` 或 Karma + `karma-webpack`在真实浏览器环境中进行测试。

#### 在 Node 中执行测试

创建以下 webpack 配置（配置好 [`.babelrc` (opens new window)](https://babeljs.io/docs/usage/babelrc/)）:

```js
// webpack.config.js
module.exports = {
  entry: "./test.js",
  output: {
    path: __dirname,
    filename: "test-bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
```

然后：

```bash
webpack
mocha test-bundle.js
```

#### 在浏览器中测试

1. 安装 `mocha-loader`。
2. 把上述 webpack 配置中的 `entry` 改成 `'mocha-loader!babel-loader!./test.js'`。
3. 用以上配置启动 `webpack-dev-server`。
4. 访问 `localhost:8080/webpack-dev-server/test-bundle`。

#### 使用 Karma + karma-webpack 在浏览器中执行测试

详见 [vue-loader documentation (opens new window)](https://vuejs.github.io/vue-loader/workflow/testing.html)。

## 6. 热重载

使用 webpack 的 [Hot Module Replacement API (opens new window)](https://webpack.js.org/guides/hot-module-replacement/)，Vuex 支持在开发过程中热重载 mutation、module、action 和 getter。你也可以在 Browserify 中使用 [browserify-hmr (opens new window)](https://github.com/AgentME/browserify-hmr/)插件。

对于 mutation 和模块，你需要使用 `store.hotUpdate()` 方法：

```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import moduleA from './modules/a'

Vue.use(Vuex)

const state = { ... }

const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    a: moduleA
  }
})

if (module.hot) {
  // 使 action 和 mutation 成为可热重载模块
  module.hot.accept(['./mutations', './modules/a'], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
    const newMutations = require('./mutations').default
    const newModuleA = require('./modules/a').default
    // 加载新模块
    store.hotUpdate({
      mutations: newMutations,
      modules: {
        a: newModuleA
      }
    })
  })
}
```

参考热重载示例 [counter-hot (opens new window)](https://github.com/vuejs/vuex/tree/dev/examples/counter-hot)。

### 6.1. 动态模块热重载

如果你仅使用模块，你可以使用 `require.context` 来动态地加载或热重载所有的模块。

```js
// store.js
import Vue from "vue";
import Vuex from "vuex";

// 加载所有模块。
function loadModules() {
  const context = require.context("./modules", false, /([a-z_]+)\.js$/i);

  const modules = context
    .keys()
    .map((key) => ({ key, name: key.match(/([a-z_]+)\.js$/i)[1] }))
    .reduce(
      (modules, { key, name }) => ({
        ...modules,
        [name]: context(key).default,
      }),
      {}
    );

  return { context, modules };
}

const { context, modules } = loadModules();

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
});

if (module.hot) {
  // 在任何模块发生改变时进行热重载。
  module.hot.accept(context.id, () => {
    const { modules } = loadModules();

    store.hotUpdate({
      modules,
    });
  });
}
```

## 7. 参考资料

- [Vuex 官网](https://vuex.vuejs.org/zh/)
- [Vuex Github](https://github.com/vuejs/vuex)
