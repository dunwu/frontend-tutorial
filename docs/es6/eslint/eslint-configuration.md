# ESLint 配置

ESlint 被设计为完全可配置的，这意味着你可以关闭每一个规则而只运行基本语法验证，或混合和匹配 ESLint 默认绑定的规则和你的自定义规则，以让 ESLint 更适合你的项目。有两种主要的方式来配置 ESLint：

1. **Configuration Comments** - 使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中。
2. **Configuration Files** - 使用 JavaScript、JSON 或者 YAML 文件为整个目录和它的子目录指定配置信息。可以配置一个独立的 [.eslintrc.*](https://cn.eslint.org/docs/user-guide/configuring#configuration-file-formats) 文件，或者直接在 [`package.json`](https://docs.npmjs.com/files/package.json) 文件里的 `eslintConfig` 字段指定配置，ESLint 会查找和自动读取它们，再者，你可以在[命令行](https://cn.eslint.org/docs/user-guide/command-line-interface)运行时指定一个任意的配置文件。

有很多信息可以配置：

- **Environments** - 指定脚本的运行环境。每种环境都会有一组特定的预定义全局变量。
- **Globals** - 脚本在执行期间访问的额外的全局变量。
- **Rules** - 启用的规则及其各自的错误级别。

所有这些选项让你可以细粒度地控制 ESLint 如何对待你的代码。

## 指定解析器选项

ESLint 允许你指定你想要支持的 JavaScript 语言选项。默认情况下，ESLint 支持 ECMAScript 5 语法。你可以覆盖该设置，以启用对 ECMAScript 其它版本和 JSX 的支持。

请注意，对 JSX 语法的支持不用于对 React 的支持。React 使用了一些特定的 ESLint 无法识别的 JSX 语法。如果你正在使用 React 并且想要 React 语义支持，我们推荐你使用 [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)。

同样的，支持 ES6 语法并不意味着同时支持新的 ES6 全局变量或类型（比如 `Set` 等新类型）。使用 `{ "parserOptions": { "ecmaVersion": 6 } }` 来启用 ES6 语法支持；要额外支持新的 ES6 全局变量，使用 `{ "env":{ "es6": true } }`(这个设置会同时自动启用 ES6 语法支持)。

解析器选项可以在 `.eslintrc.*` 文件使用 `parserOptions` 属性设置。可用的选项有：

- `ecmaVersion` - 默认设置为 5， 你可以使用 3、5、6、7 或 8 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）
- `sourceType` - 设置为 `"script"` (默认) 或 `"module"`（如果你的代码是 ECMAScript 模块)。
- `ecmaFeatures` - 这是个对象，表示你想使用的额外的语言特性:`globalReturn` - 允许在全局作用域下使用 `return` 语句`impliedStrict` - 启用全局 [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) (如果 `ecmaVersion` 是 5 或更高)`jsx` - 启用 [JSX](http://facebook.github.io/jsx/)`experimentalObjectRestSpread` - 启用实验性的 [object rest/spread properties](https://github.com/sebmarkbage/ecmascript-rest-spread) 支持。(**重要：**这是一个实验性的功能,在未来可能会有明显改变。 建议你写的规则 **不要** 依赖该功能，除非当它发生改变时你愿意承担维护成本。)

`.eslintrc.json` 文件示例：

```
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": 2
    }
}

```

设置解析器选项能帮助 ESLint 确定什么是解析错误，所有语言选项默认都是 `false`。

## 指定解析器

ESLint 默认使用[Espree](https://github.com/eslint/espree)作为其解析器，你可以在配置文件中指定一个不同的解析器，只要该解析器符合下列要求：

1. 它必须是本地安装的一个 npm 模块。
2. 它必须有兼容 Esprima 的接口（它必须输出一个 `parse()` 方法）
3. 它必须产出兼容 Esprima 的 AST 和 token 对象。

注意，即使满足这些兼容性要求，也不能保证一个外部解析器可以与 ESLint 正常配合工作，ESLint 也不会修复与其它解析器不兼容的相关 bug。

为了表明使用该 npm 模块作为你的解析器，你需要在你的 `.eslintrc` 文件里指定 `parser` 选项。例如，下面的配置指定了 Esprima 作为解析器：

```
{
    "parser": "esprima",
    "rules": {
        "semi": "error"
    }
}

```

以下解析器与 ESLint 兼容：

- [Esprima](https://npmjs.com/package/esprima)
- [Babel-ESLint](https://npmjs.com/package/babel-eslint) - 一个对[Babel](http://babeljs.io/)解析器的包装，使其能够与 ESLint 兼容。
- [typescript-eslint-parser(实验)](https://npmjs.com/package/typescript-eslint-parser) - 一个把 TypeScript 转换为 ESTree 兼容格式的解析器，这样它就可以在 ESLint 中使用了。这样做的目的是通过 ESLint 来解析 TypeScript 文件（尽管不一定必须通过所有的 ESLint 规则）。

注意，在使用自定义解析器时，为了让 ESLint 在处理非 ECMAScript 5 特性时正常工作，配置属性 `parserOptions` 仍然是必须的。解析器会被传入 `parserOptions`，但是不一定会使用它们来决定功能特性的开关。

## 指定环境

一个“环境”定义了一组预定义的全局变量。可用的环境包括：

- `browser` - 浏览器环境中的全局变量。
- `node` - Node.js 全局变量和 Node.js 作用域。
- `commonjs` - CommonJS 全局变量和 CommonJS 作用域 (一般用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
- `shared-node-browser` - Node 和 Browser 通用全局变量。
- `es6` - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 `ecmaVersion` 解析器选项为 6）。
- `worker` - Web Workers 全局变量。
- `amd` - 将 `require()` 和 `define()` 定义为像 [amd](https://github.com/amdjs/amdjs-api/wiki/AMD) 一样的全局变量。
- `mocha` - 添加所有的 Mocha 测试全局变量。
- `jasmine` - 添加所有的 Jasmine 版本 1.3 和 2.0 的测试全局变量。
- `jest` - Jest 全局变量。
- `phantomjs` - PhantomJS 全局变量。
- `protractor` - Protractor 全局变量。
- `qunit` - QUnit 全局变量。
- `jquery` - jQuery 全局变量。
- `prototypejs` - Prototype.js 全局变量。
- `shelljs` - ShellJS 全局变量。
- `meteor` - Meteor 全局变量。
- `mongo` - MongoDB 全局变量。
- `applescript` - AppleScript 全局变量。
- `nashorn` - Java 8 Nashorn 全局变量。
- `serviceworker` - Service Worker 全局变量。
- `atomtest` - Atom 测试全局变量。
- `embertest` - Ember 测试全局变量。
- `webextensions` - WebExtensions 全局变量。
- `greasemonkey` - GreaseMonkey 全局变量。

这些环境并不是互斥的，所以你可以同时定义多个。

可以在源文件里、在配置文件中或使用 [命令行](https://cn.eslint.org/docs/user-guide/command-line-interface) 的 `--env` 选项来指定环境。

要在你的 JavaScript 文件中使用注释来指定环境，格式如下：

```
/* eslint-env node, mocha */

```

该设置启用了 Node.js 和 Mocha 环境。

要在配置文件里指定环境，使用 `env` 关键字指定你想启用的环境，并设置它们为 `true`。例如，以下示例启用了 browser 和 Node.js 的环境：

```
{
    "env": {
        "browser": true,
        "node": true
    }
}

```

或在 `package.json` 文件中：

```
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "env": {
            "browser": true,
            "node": true
        }
    }
}

```

在 YAML 文件中：

```
---
  env:
    browser: true
    node: true

```

如果你想在一个特定的插件中使用一种环境，确保提前在 `plugins` 数组里指定了插件名，然后在 env 配置中不带前缀的插件名后跟一个 `/` ，紧随着环境名。例如：

```
{
    "plugins": ["example"],
    "env": {
        "example/custom": true
    }
}

```

或在 `package.json` 文件中

```
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "plugins": ["example"],
        "env": {
            "example/custom": true
        }
    }
}

```

在 YAML 文件中：

```
---
  plugins:
    - example
  env:
    example/custom: true

```

## 指定全局变量

当访问当前源文件内未定义的变量时，[no-undef](https://cn.eslint.org/docs/rules/no-undef) 规则将发出警告。如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量。

要在你的 JavaScript 文件中，用注释指定全局变量，格式如下：

```
/* global var1, var2 */

```

这里定义了两个全局变量：`var1` 和 `var2`。如果你想指定这些变量不应被重写（只读），你可以将它们设置为 `false`：

```
/* global var1:false, var2:false */

```

在配置文件里配置全局变量时，使用 `globals` 指出你要使用的全局变量。将变量设置为 `true` 将允许变量被重写，或 `false` 将不允许被重写。比如：

```
{
    "globals": {
        "var1": true,
        "var2": false
    }
}

```

在 YAML 中：

```
---
  globals:
    var1: true
    var2: false

```

在这些例子中 `var1` 允许被重写，`var2` 不允许被重写。

**注意：** 要启用[no-global-assign](https://cn.eslint.org/docs/rules/no-global-assign)规则来禁止对只读的全局变量进行修改。

## 配置插件

ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。

在配置文件里配置插件时，可以使用 `plugins` 关键字来存放插件名字的列表。插件名称可以省略 `eslint-plugin-` 前缀。

```
{
    "plugins": [
        "plugin1",
        "eslint-plugin-plugin2"
    ]
}

```

在 YAML 中：

```
---
  plugins:
    - plugin1
    - eslint-plugin-plugin2

```

**注意：**全局安装的 ESLint 只能使用全局安装的插件。本地安装的 ESLint 不仅可以使用本地安装的插件，也可以使用全局安装的插件。

## 配置规则

ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：

- `"off"` 或 `0` - 关闭规则
- `"warn"` 或 `1` - 开启规则，使用警告级别的错误：`warn` (不会导致程序退出)
- `"error"` 或 `2` - 开启规则，使用错误级别的错误：`error` (当被触发的时候，程序会退出)

为了在文件注释里配置规则，使用以下格式的注释：

```
/* eslint eqeqeq: "off", curly: "error" */

```

在这个例子里，[`eqeqeq`](https://cn.eslint.org/docs/rules/eqeqeq) 规则被关闭，[`curly`](https://cn.eslint.org/docs/rules/curly) 规则被打开，定义为错误级别。你也可以使用对应的数字定义规则严重程度：

```
/* eslint eqeqeq: 0, curly: 2 */

```

这个例子和上个例子是一样的，只不过它是用的数字而不是字符串。`eqeqeq` 规则是关闭的，`curly` 规则被设置为错误级别。

如果一个规则有额外的选项，你可以使用数组字面量指定它们，比如：

```
/* eslint quotes: ["error", "double"], curly: 2 */

```

这条注释为规则 [`quotes`](https://cn.eslint.org/docs/rules/quotes) 指定了 “double”选项。数组的第一项总是规则的严重程度（数字或字符串）。

还可以使用 `rules` 连同错误级别和任何你想使用的选项，在配置文件中进行规则配置。例如：

```
{
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"]
    }
}

```

在 YAML 中：

```
---
rules:
  eqeqeq: off
  curly: error
  quotes:
    - error
    - double

```

配置定义在插件中的一个规则的时候，你必须使用 `插件名/规则ID` 的形式。比如：

```
{
    "plugins": [
        "plugin1"
    ],
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"],
        "plugin1/rule1": "error"
    }
}

```

在 YAML 中：

```
---
plugins:
  - plugin1
rules:
  eqeqeq: 0
  curly: error
  quotes:
    - error
    - "double"
  plugin1/rule1: error

```

在这些配置文件中，规则 `plugin1/rule1` 表示来自插件 `plugin1` 的 `rule1` 规则。你也可以使用这种格式的注释配置，比如：

```
/* eslint "plugin1/rule1": "error" */

```

**注意：**当指定来自插件的规则时，确保删除 `eslint-plugin-` 前缀。ESLint 在内部只使用没有前缀的名称去定位规则。

## 使用行注释禁用规则

可以在你的文件中使用以下格式的块注释来临时禁止规则出现警告：

```
/* eslint-disable */

alert('foo');

/* eslint-enable */

```

你也可以对指定的规则启用或禁用警告:

```
/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */


```

如果在整个文件范围内禁止规则出现警告，将 `/* eslint-disable */` 块注释放在文件顶部：

```
/* eslint-disable */

alert('foo');

```

你也可以对整个文件启用或禁用警告:

```
/* eslint-disable no-alert */

// Disables no-alert for the rest of the file
alert('foo');

```

可以在你的文件中使用以下格式的行注释在某一特定的行上禁用所有规则：

```
alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');

```

在某一特定的行上禁用某个指定的规则：

```
alert('foo'); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert('foo');

```

在某个特定的行上禁用多个规则：

```
alert('foo'); // eslint-disable-line no-alert, quotes, semi

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');

```

上面的所有方法同样适用于插件规则。例如，禁止 `eslint-plugin-example` 的 `rule-name` 规则，把插件名（`example`）和规则名（`rule-name`）结合为 `example/rule-name`：

```
foo(); // eslint-disable-line example/rule-name

```

**注意：**为文件的某部分禁用警告的注释，告诉 ESLint 不要对禁用的代码报告规则的冲突。ESLint 仍解析整个文件，然而，禁用的代码仍需要是有效的 JavaScript 语法。

## 添加分享配置

ESLint 支持在配置文件添加共享设置。你可以添加 `settings` 对象到配置文件，它将提供给每一个将被执行的规则。如果你想添加的自定义规则而且使它们可以访问到相同的信息，这将会很有用，并且很容易配置。

在 JSON 中：

```
{
    "settings": {
        "sharedData": "Hello"
    }
}

```

在 YAML 中：

```
---
  settings:
    sharedData: "Hello"

```

## 使用配置文件

有两种方式可以使用配置文件。第一种是将文件保存到你喜欢的地方，然后将它的位置使用 `-c` 选项传递命令行，比如：

```
eslint -c myconfig.json myfiletotest.js

```

第二种方式是通过 `.eslintrc.*` 和 `package.json`。ESLint 将自动在要检测的文件目录里寻找它们，紧接着是父级目录，一直到文件系统的根目录。当你想对一个项目的不同部分的使用不同配置，或当你希望别人能够直接使用 ESLint，而无需记住要在配置文件中传递什么，这种方式就很有用。

每种情况，配置文件都会覆盖默认设置。

## 配置文件文件格式

ESLint 支持几种格式的配置文件：

- **JavaScript** - 使用 `.eslintrc.js` 然后输出一个配置对象。
- **YAML** - 使用 `.eslintrc.yaml` 或 `.eslintrc.yml` 去定义配置的结构。
- **JSON** - 使用 `.eslintrc.json` 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
- **(不推荐)** - 使用 `.eslintrc`，可以使 JSON 也可以是 YAML。
- **package.json** - 在 `package.json` 里创建一个 `eslintConfig`属性，在那里定义你的配置。

如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：

1. `.eslintrc.js`
2. `.eslintrc.yaml`
3. `.eslintrc.yml`
4. `.eslintrc.json`
5. `.eslintrc`
6. `package.json`

## 配置的层级和继承

当使用 `.eslintrc.*` 和 `package.json`文件的配置时，你可以利用层叠配置。例如，假如你有以下结构：

```
your-project
├── .eslintrc
├── lib
│ └── source.js
└─┬ tests
  ├── .eslintrc
  └── test.js

```

层叠配置使用离要检测的文件最近的 `.eslintrc`文件作为最高优先级，然后才是父目录里的配置文件，等等。当你在这个项目中允许 ESLint 时，`lib/`下面的所有文件将使用项目根目录里的 `.eslintrc` 文件作为它的配置文件。当 ESLint 遍历到 `test/` 目录，`your-project/.eslintrc` 之外，它还会用到 `your-project/tests/.eslintrc`。所以 `your-project/tests/test.js` 是基于它的目录层次结构中的两个`.eslintrc` 文件的组合，并且离的最近的一个优先。通过这种方式，你可以有项目级 ESLint 设置，也有覆盖特定目录的 ESLint 设置。

同样的，如果在根目录的 `package.json` 文件中有一个 `eslintConfig` 字段，其中的配置将使用于所有子目录，但是当 `tests` 目录下的 `.eslintrc` 文件中的规则与之发生冲突时，就会覆盖它。

```
your-project
├── package.json
├── lib
│ └── source.js
└─┬ tests
  ├── .eslintrc
  └── test.js

```

如果同一目录下 `.eslintrc` 和 `package.json` 同时存在，`.eslintrc` 优先级高会被使用，`package.json` 文件将不会被使用。

**注意：**如果在你的主目录下有一个自定义的配置文件 (`~/.eslintrc`) ，如果没有其它配置文件时它才会被使用。因为个人配置将适用于用户目录下的所有目录和文件，包括第三方的代码，当 ESLint 运行时可能会导致问题。

默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 `package.json` 文件或者 `.eslintrc.*` 文件里的 `eslintConfig` 字段下设置 `"root": true`。ESLint 一旦发现配置文件中有 `"root": true`，它就会停止在父级目录中寻找。

```
{
    "root": true
}

```

在 YAML 中：

```
---
  root: true

```

例如，`projectA` 的 `lib/` 目录下的 `.eslintrc` 文件中设置了 `"root": true`。这种情况下，当检测 `main.js` 时，`lib/` 下的配置将会被使用，`projectA/` 下的 `.eslintrc` 将不会被使用。

```
home
└── user
    ├── .eslintrc <- Always skipped if other configs present
    └── projectA
        ├── .eslintrc  <- Not used
        └── lib
            ├── .eslintrc  <- { "root": true }
            └── main.js

```

完整的配置层次结构，从最高优先级最低的优先级，如下:

1. 行内配置
   1. `/*eslint-disable*/` 和 `/*eslint-enable*/`
   2. `/*global*/`
   3. `/*eslint*/`
   4. `/*eslint-env*/`
2. 命令行选项：
   1. `--global`
   2. `--rule`
   3. `--env`
   4. `-c`、`--config`
3. 项目级配置：
   1. 与要检测的文件在同一目录下的 `.eslintrc.*` 或 `package.json` 文件
   2. 继续在父级目录寻找 `.eslintrc` 或 `package.json`文件，直到根目录（包括根目录）或直到发现一个有`"root": true`的配置。
   3. 如果不是（1）到（3）中的任何一种情况，退回到 `~/.eslintrc` 中自定义的默认配置。

## 扩展配置文件

一个配置文件可以被基础配置中的已启用的规则继承。

`extends` 属性值可以是：

- 在配置中指定的一个字符串
- 字符串数组：每个配置继承它前面的配置

ESLint 递归地进行扩展配置，所以一个基础的配置也可以有一个 `extends` 属性。

`rules` 属性可以做下面的任何事情以扩展（或覆盖）规则：

- 启用额外的规则
- 改变继承的规则级别而不改变它的选项：
  - 基础配置：`"eqeqeq": ["error", "allow-null"]`
  - 派生的配置：`"eqeqeq": "warn"`
  - 最后生成的配置：`"eqeqeq": ["warn", "allow-null"]`
- 覆盖基础配置中的规则的选项
  - 基础配置：`"quotes": ["error", "single", "avoid-escape"]`
  - 派生的配置：`"quotes": ["error", "single"]`
  - 最后生成的配置：`"quotes": ["error", "single"]`

### 使用 eslint:recommended

值为 `"eslint:recommended"` 的 `extends` 属性启用一系列核心规则，这些规则报告一些常见问题，在 [规则页面](https://cn.eslint.org/docs/rules/) 中被标记为  。这个推荐的子集只能在 ESLint 主要版本进行更新。

如果你的配置集成了推荐的规则：在你升级到 ESLint 新的主版本之后，在你使用[命令行](https://cn.eslint.org/docs/user-guide/command-line-interface#fix)的 `--fix` 选项之前，检查一下报告的问题，这样你就知道一个新的可修复的推荐的规则将更改代码。

`eslint --init` 命令可以创建一个配置，这样你就可以继承推荐的规则。

JavaScript 格式的一个配置文件的例子：

```
module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
    }
}
```

### 使用可共享的配置包

[可共享的配置](https://cn.eslint.org/docs/developer-guide/shareable-configs) 是一个 npm 包，它输出一个配置对象。要确保这个包安装在 ESLint 能请求到的目录下。

`extends` 属性值可以省略包名的前缀 `eslint-config-`。

`eslint --init` 命令可以创建一个配置，这样你就可以扩展一个流行的风格指南（比如，`eslint-config-standard`）。

YAML 格式的一个配置文件的例子：

```
extends: standard
rules:
  comma-dangle:
    - error
    - always
  no-empty: warn

```

### 使用插件中的配置

[插件](https://cn.eslint.org/docs/developer-guide/working-with-plugins) 是一个 npm 包，通常输出规则。一些插件也可以输出一个或多个命名的 [配置](https://cn.eslint.org/docs/developer-guide/working-with-plugins#configs-in-plugins)。要确保这个包安装在 ESLint 能请求到的目录下。

`plugins` [属性值](https://cn.eslint.org/docs/user-guide/configuring#configuring-plugins) 可以省略包名的前缀 `eslint-plugin-`。

`extends` 属性值可以由以下组成：

- `plugin:`
- 包名 (省略了前缀，比如，`react`)
- `/`
- 配置名称 (比如 `recommended`)

JSON 格式的一个配置文件的例子：

```
{
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
       "no-set-state": "off"
    }
}

```

### 使用一个配置文件

`extends` 属性值可以是基本[配置文件](https://cn.eslint.org/docs/user-guide/configuring#using-configuration-files)的绝对路径或相对路径。

ESLint 解析基本配置文件的相对路径相对你你使用的配置文件，**除非**那个文件在你的主目录或非 ESLint 安装目录的父级目录。在这些情况下，ESLint 解析基本配合文件的相对路径相对于被检测的 **项目**目录（尤其是当前工作目录）。

JSON 格式的一个配置文件的例子：

```
{
    "extends": [
        "./node_modules/coding-standard/eslintDefaults.js",
        "./node_modules/coding-standard/.eslintrc-es6",
        "./node_modules/coding-standard/.eslintrc-jsx"
    ],
    "rules": {
        "eqeqeq": "warn"
    }
}

```

### 使用 eslint:all

`extends` 属性值可以是 `"eslint:all"`，启用当前安装的 ESLint 中所有的核心规则。这些规则可以在 ESLint 的任何版本进行更改。

**重要：**这些配置 **不推荐在产品中使用**，因为它随着 ESLint 版本进行更改。使用的话，请自己承担风险。

如果你配置 ESLint 升级时自动地启用新规则，当源码没有任何改变时，ESLint 可以报告新问题，因此任何 ESLint 的新的小版本好像有破坏性的更改。

当你决定在一个项目上使用的规则和选项，尤其是如果你很少覆盖选项或禁用规则，你可能启用所有核心规则作为一种快捷方式使用。规则的默认选项并不是 ESLint 推荐的（例如，`quotes` 规则的默认选项并不意味着双引号要比单引号好）。

如果你的配置扩展了所有的核心规则：在你升级到一个新的大或小的 ESLint 版本，在你使用[命令行](https://cn.eslint.org/docs/user-guide/command-line-interface#fix)的 `--fix` 选项之前，检查一下报告的问题，这样你就知道一个新的可修复的规则将更改代码。

JavaScript 格式的一个配置文件的例子：

```
module.exports = {
    "extends": "eslint:all",
    "rules": {
        // override default options
        "comma-dangle": ["error", "always"],
        "indent": ["error", 2],
        "no-cond-assign": ["error", "always"],

        // disable now, but enable in the future
        "one-var": "off", // ["error", "never"]

        // disable
        "init-declarations": "off",
        "no-console": "off",
        "no-inline-comments": "off",
    }
}

```

## 基于 glob 模式的配置

有时，你可能需要更精细的配置，比如，如果同一个目录下的文件需要有不同的配置。因此，你可以在配置中使用 `overrides` 键，它只适用于匹配特定的 glob 模式的文件，使用你在命令行上传递的格式 (e.g., `app/**/*.test.js`)。

### 怎么工作

- Glob 模式覆盖只能在配置文件 (`.eslintrc.*` 或 `package.json`) 中进行配置。
- 模式应用于相对于配置文件的目录的文件路径。 比如，如果你的配置文件的路径为 `/Users/john/workspace/any-project/.eslintrc.js` 而你要检测的路径为 `/Users/john/workspace/any-project/lib/util.js`，那么你在 `.eslintrc.js` 中提供的模式是相对于 ` lib/util.js` 来执行的.
- 在相同的配置文件中，Glob 模式覆盖比其他常规配置具有更高的优先级。 同一个配置中的多个覆盖将按顺序被应用。也就是说，配置文件中的最后一个覆盖会有最高优先级。
- 一个 glob 特定的配置几乎与 ESLint 的其他配置相同。覆盖块可以包含常规配置中的除了 `extends`、`overrides` 和 `root` 之外的其他任何有效配置选项，
- 可以在单个覆盖块中提供多个 glob 模式。一个文件必须匹配至少一个配置中提供的模式。
- 覆盖块也可以指定从匹配中排除的模式。如果一个文件匹配了任何一个排除模式，该配置将不再被应用。

### 相对 glob 模式

```
project-root
├── app
│   ├── lib
│   │   ├── foo.js
│   │   ├── fooSpec.js
│   ├── components
│   │   ├── bar.js
│   │   ├── barSpec.js
│   ├── .eslintrc.json
├── server
│   ├── server.js
│   ├── serverSpec.js
├── .eslintrc.json

```

`app/.eslintrc.json` 文件中的配置定义了 glob 模式 `**/*Spec.js`。该模式是相对 `app/.eslintrc.json` 的基本目录的。因此，该模式将匹配 `app/lib/fooSpec.js` 和 `app/components/barSpec.js` 但 **不匹配** `server/serverSpec.js`。如果你在项目根目录下的 `.eslintrc.json` 文件中定义了同样的模式，它将匹配这三个 `*Spec` 文件。

### 配置示例

在你的 `.eslintrc.json` 文件中：

```
{
  "rules": {
    "quotes": [ 2, "double" ]
  },

  "overrides": [
    {
      "files": [ "bin/*.js", "lib/*.js" ],
      "excludedFiles": "*.test.js",
      "rules": {
        "quotes": [ 2, "single" ]
      }
    }
  ]
}

```

## 在配置文件中注释

JSON 和 YAML 配置文件格式都支持注释 ( `package.json` 文件不应该包括注释)。你可以在其他类型的文件中使用 JavaScript 风格的注释或使用 YAML 风格的注释，ESLint 会忽略它们。这允许你的配置更加人性化。例如：

```
{
    "env": {
        "browser": true
    },
    "rules": {
        // Override our default settings just for this directory
        "eqeqeq": "warn",
        "strict": "off"
    }
}

```

## 指定需要检查的文件扩展名

目前，告诉 ESLint 哪个文件扩展名要检测的唯一方法是使用 [`--ext`](https://cn.eslint.org/docs/user-guide/command-line-interface#ext) 命令行选项指定一个逗号分隔的扩展名列表。注意，该标记只在与目录一起使用时有效，如果使用文件名或 glob 模式，它将会被忽略。

## 忽略文件和目录

你可以通过在项目根目录创建一个 `.eslintignore` 文件告诉 ESLint 去忽略特定的文件和目录。`.eslintignore` 文件是一个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测。例如，以下将忽略所有的 JavaScript 文件：

```
**/*.js

```

当 ESLint 运行时，在确定哪些文件要检测之前，它会在当前工作目录中查找一个 `.eslintignore` 文件。如果发现了这个文件，当遍历目录时，将会应用这些偏好设置。一次只有一个 `.eslintignore` 文件会被使用，所以，不是当前工作目录下的 `.eslintignore` 文件将不会被用到。

Globs 匹配使用 [node-ignore](https://github.com/kaelzhang/node-ignore)，所以大量可用的特性有：

- 以 `#` 开头的行被当作注释，不影响忽略模式。
- 路径是相对于 `.eslintignore` 的位置或当前工作目录。这也会影响通过 `--ignore-pattern`传递的路径。
- 忽略模式同 `.gitignore` [规范](http://git-scm.com/docs/gitignore)
- 以 `!` 开头的行是否定模式，它将会重新包含一个之前被忽略的模式。

除了 `.eslintignore` 文件中的模式，ESLint总是忽略 `/node_modules/*` 和 `/bower_components/*` 中的文件。

例如：把下面 `.eslintignore` 文件放到当前工作目录里，将忽略 `node_modules`，`bower_components` 以及 `build/` 目录下除了 `build/index.js` 的所有文件。

```
# /node_modules/* and /bower_components/* ignored by default

# Ignore built files except build/index.js
build/*
!build/index.js

```

### 使用备用文件

如果相比于当前工作目录下 `.eslintignore` 文件，你更想使用一个不同的文件，你可以在命令行使用 `--ignore-path` 选项指定它。例如，你可以使用 `.jshintignore` 文件，因为它有相同的格式：

```
eslint --ignore-path .jshintignore file.js

```

你也可以使用你的 `.gitignore` 文件：

```
eslint --ignore-path .gitignore file.js
```

任何文件只要满足标准忽略文件格式都可以用。记住，指定 `--ignore-path` 意味着任何现有的 `.eslintignore` 文件将不被使用。请注意，`.eslintignore` 中的匹配规则比 `.gitignore` 中的更严格。

### 在 package.json 中使用 eslintConfig

```
{
  "name": "mypackage",
  "version": "0.0.1",
  "eslintConfig": {
      "env": {
          "browser": true,
          "node": true
      }
  },
  "eslintIgnore": ["hello.js", "world.js"]
}
```

### 忽略文件告警


当您将目录传递给 ESLint 时，文件和目录将被忽略。如果将特定文件传递给ESLint，则会看到一条警告，指示该文件已被跳过。例如，假设你有一个 `.eslintignore` 文件，如下所示：

```
foo.js

```

然后，您执行：

```
eslint foo.js

```

您将会看到以下告警：

```
foo.js
  0:0  warning  File ignored because of your .eslintignore file. Use --no-ignore to override.

✖ 1 problem (0 errors, 1 warning)

```

发生此消息是因为ESLint不确定是否要检查该文件。如消息所示，您可以使用 `--no-ignore` 省略使用忽略规则。