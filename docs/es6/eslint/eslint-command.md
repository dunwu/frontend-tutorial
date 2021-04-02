# ESLint 命令

为了在 Node.js 上运行 ESLint，你必须先安装 npm。如果还没有安装 npm ，按照这里的说明进行安装：[https://www.npmjs.com/](https://www.npmjs.com/)。

一旦安装了 npm，运行下面的命令

```
npm i -g eslint

```

这句命令从 npm 仓库安装了 ESLint CLI。使用以下格式运行 ESLint：

```
eslint [options] [file|dir|glob]*

```

比如：

```
eslint file1.js file2.js

```

或者：

```
eslint lib/**

```

请注意，传递一个 glob 模式作为参数时，它将由你的 shell 进行扩展。扩展的结果取决于你的 shell 及其配置。如果你想使用 node 的  `glob`  语法，你需要给参数加上引号（在 windows 系统运行时，如果你需要，也可以使用双引号 ），像下面这样：

```
eslint "lib/**"

```

## 选项

命令行工具有几个选项，你可以通过运行  `eslint -h`  查看所有选项。

```sh
eslint [options] file.js [file.js] [dir]

Basic configuration:
  -c, --config path::String    Use configuration from this file or shareable config
  --no-eslintrc                Disable use of configuration from .eslintrc
  --env [String]               Specify environments
  --ext [String]               Specify JavaScript file extensions - default: .js
  --global [String]            Define global variables
  --parser String              Specify the parser to be used
  --parser-options Object      Specify parser options

Caching:
  --cache                      Only check changed files - default: false
  --cache-file path::String    Path to the cache file. Deprecated: use --cache-location - default: .eslintcache
  --cache-location path::String  Path to the cache file or directory

Specifying rules and plugins:
  --rulesdir [path::String]    Use additional rules from this directory
  --plugin [String]            Specify plugins
  --rule Object                Specify rules

Ignoring files:
  --ignore-path path::String   Specify path of ignore file
  --no-ignore                  Disable use of ignore files and patterns
  --ignore-pattern [String]    Pattern of files to ignore (in addition to those in .eslintignore)

Using stdin:
  --stdin                      Lint code provided on <STDIN> - default: false
  --stdin-filename String      Specify filename to process STDIN as

Handling warnings:
  --quiet                      Report errors only - default: false
  --max-warnings Int           Number of warnings to trigger nonzero exit code - default: -1

Output:
  -o, --output-file path::String  Specify file to write report to
  -f, --format String          Use a specific output format - default: stylish
  --color, --no-color          Force enabling/disabling of color

Miscellaneous:
  --init                       Run config initialization wizard - default: false
  --fix                        Automatically fix problems
  --debug                      Output debugging information
  -h, --help                   Show help
  -v, --version                Output the version number
  --no-inline-config           Prevent comments from changing config or rules
  --print-config path::String  Print the configuration for the given file
```

这些选项可以通过重复该选项或使用逗号分隔的列表进行指定（除了  `--ignore-pattern`  不允许第二种风格）。

示例：

```sh
eslint --ext .jsx --ext .js  lib/
eslint --ext .jsx,.js  lib/
```

### 基本配置

#### `-c`, `--config`

该选项允许你为 ESLint (查看  [Configuring ESLint](https://cn.eslint.org/docs/user-guide/configuring)  了解更多)指定一个额外的配置文件。

例如：

```
eslint -c ~/my-eslint.json file.js
```

这个例子使用了  `~/my-eslint.json`  作为配置文件。

它还接受  [sharable config](https://cn.eslint.org/docs/developer-guide/shareable-configs)  的一个模块的 ID。

例如：

```
eslint -c myconfig file.js
```

这个例子直接使用可共享的配置  `eslint-config-myconfig`。

#### `--no-eslintrc`

禁用  `.eslintrc`  和  `package.json`  文件中的配置。

示例：

```
eslint --no-eslintrc file.js

```

#### `--env`

这个选项用来指定环境。关于每种环境中定义的全局变量的详细信息请查看  [configuration](https://cn.eslint.org/docs/user-guide/configuring)  文档。该选项只能启用环境，不能禁用在其它配置文件中设置的环境。要指定多个环境的话，使用逗号分隔它们，或多次使用这个选项。

例如：

```
eslint --env browser,node file.js
eslint --env browser --env node file.js

```

#### `--ext`

这个选项允许你指定 ESLint 在指定的目录下查找 JavaScript 文件时要使用的文件扩展名。默认情况下，它使用  `.js`  作为唯一性文件扩展名。

示例：

```
# Use only .js2 extension
eslint . --ext .js2

# Use both .js and .js2
eslint . --ext .js --ext .js2

# Also use both .js and .js2
eslint . --ext .js,.js2

```

**注意：**如果你使用了 glob 模式，则  `--ext`  被忽略

例如，`eslint lib/* --ext .js`  将匹配  `lib/`  下的所有文件，忽略扩展名。

#### `--global`

这个选项定义了全局变量，这样它们就不会被  `no-undef`  规则标记为未定义了。任何指定的全局变量默认是只读的，在变量名字后加上  `:true`  后会使它变为可写。要指定多个变量，使用逗号分隔它们，或多次使用这个选项。

示例：

```
eslint --global require,exports:true file.js
eslint --global require --global exports:true

```

#### `--parser`

该选项允许你为 ESLint 指定一个解析器。默认情况下，使用  `espree`。

#### `--parser-options`

该选项允许你指定 ESLint 要使用的解析器选项。注意，可用的解析器选项取决于你所选用的解析器。

示例：

```
echo '3 ** 4' | eslint --stdin --parser-options=ecmaVersion:6 # will fail with a parsing error
echo '3 ** 4' | eslint --stdin --parser-options=ecmaVersion:7 # succeeds, yay!

```

### 缓存

#### `--cache`

存储处理过的文件的信息以便只对有改变的文件进行操作。缓存默认被存储在  `.eslintcache`。启用这个选项可以显著改善 ESLint 的运行时间，确保只对有改变的文件进行检测。

**注意：**如果你运行 ESLint `--cache`，然后又运行 ESLint 不带  `--cache`，`.eslintcache`  文件将被删除。这是必要的，因为检测的结果可能会改变，使  `.eslintcache`  无效。如果你想控制缓存文件何时被删除，那么使用  `--cache-location`  来指定一个缓存文件的位置。

#### `--cache-file`

缓存文件的路径。如果没有指定，则使用  `.eslintcache`。这个文件会在  `eslint`  命令行被执行的文件目录中被创建。 **已弃用：**  请使用  `--cache-location`。

#### `--cache-location`

缓存文件的路径。可以是一个文件或者一个目录。如果没有指定，则使用  `.eslintcache` 。这个文件会在  `eslint`  命令行被执行的文件目录中被创建。

如果指定一个目录，缓存文件将在指定的文件夹下被创建。文件名将基于当前工作目录（CWD) 的 hash 值，比如：`.cache_hashOfCWD`。

**重要提示：**如果不存在缓存文件的目录，请确保在尾部添加  `/`（\*nix 系统）或  `\`（windows 系统）。否则该路径将被假定为是一个文件。

示例：

```
eslint "src/**/*.js" --cache --cache-location "/Users/user/.eslintcache/"

```

### 指定规则和插件

#### `--rulesdir`

这个选项允许你指定另一个加载规则文件的目录。这允许你在运行时动态加载新规则。当你有自定义规则，而且这些规则不适合绑定到 ESLint 时，这会很有用。

示例：

```
eslint --rulesdir my-rules/ file.js

```

为了使你自定义的规则目录下的规则正常工作，必须遵照同绑定的规则一样的格式。你也可以通过包含多个  `--rulesdir`  选项来为自定义规则指定多个位置。

```
eslint --rulesdir my-rules/ --rulesdir my-other-rules/ file.js

```

注意，与核心规则和插件规则一样，你仍需要在配置文件或通过  `--rule`  命令行选项启用这些规则，以便在检测过程中实际运行这些规则。使用  `--rulesdir`  指定一个规则目录不会自动启用那些目录下的规则。

#### `--plugin`

这个选项指定一个要加载的插件。你可以省略插件名的前缀  `eslint-plugin-`。在你使用插件直接，你必须使用 npm 安装它。

示例：

```
eslint --plugin jquery file.js
eslint --plugin eslint-plugin-mocha file.js

```

#### `--rule`

这个选项指定要使用的规则。这些规则将会与配制文件中指定的规则合并。（你可以使用  `--no-eslintrc`  改变这种行为。）要定义多个规则，使用逗号分隔它们，或多次使用这个选项。[levn](https://github.com/gkz/levn#levn--)  格式被用来指定规则。

如果这个规则定义在插件内，你必须在规则 ID 前使用插件名和  `/`，即  `插件名/规则ID`。

示例：

```
eslint --rule 'quotes: [2, double]'
eslint --rule 'guard-for-in: 2' --rule 'brace-style: [2, 1tbs]'
eslint --rule 'jquery/dollar-sign: 2'

```

### 忽略文件

#### `--ignore-path`

这个选项允许你指定一个文件作为  `.eslintignore`。默认情况下，ESLint 在当前工作目录下查找  `.eslintignore`。你可以通过提供另一个文件的路径改变这种行为。

示例：

```
eslint --ignore-path tmp/.eslintignore file.js
eslint --ignore-path .gitignore file.js

```

#### `--no-ignore`

禁止排除  `.eslintignore`、`--ignore-path`  和  `--ignore-pattern`  文件中指定的文件。

示例：

```
eslint --no-ignore file.js

```

#### `--ignore-pattern`

该选项允许你指定要忽略的文件模式(除了那些在  `.eslintignore`  的)。你可以重复该选项已提供多个模式。语法同  `.eslintignore`  文件中的相同。你应该将你的模式用引号括起来，以避免命令行解析器的解析。

示例：

```
eslint --ignore-pattern '/lib/' --ignore-pattern '/src/vendor/*' .

```

### 使用 stdin

#### `--stdin`

这个选项告诉 ESLint 从 STDIN 而不是从文件中读取和检测源码。你可以使用该选项向 ESLint 来输入代码。

示例：

```
cat myfile.js | eslint --stdin

```

#### `--stdin-filename`

这个选项允许你指定一个文件名去处理 STDIN。当你处理从 STDIN 来的文件和有规则依赖于这个文件名时，这会很有用。

示例：

```
cat myfile.js | eslint --stdin --stdin-filename=myfile.js

```

### 处理告警

#### `--quiet`

这个选项允许你禁止报告警告。如果开启这个选项，ESLint 只会报告错误。

示例：

```
eslint --quiet file.js

```

#### `--max-warnings`

这个选项允许你指定一个警告的阈值，当你的项目中有太多违反规则的警告时，这个阈值被用来强制 ESLint 以错误状态退出。

通常情况下，如果 ESLint 运行过程中，没有出现错误（只有警告），它将以成功的状态退出。然而，如果指定了  `--max-warnings`，而且警告的总数超过了指定的阈值，ESLint 将以错误的状态退出。通过指定一个  `-1`  的阈值或省略这个选项将会避免这种行为。

示例：

```
eslint --max-warnings 10 file.js

```

### 输出

#### `-o`, `--output-file`

将报告写到一个文件。

示例：

```
eslint -o ./test/test.html

```

当指定这个选项时，就会按给定的格式输出到指定的文件名。

#### `-f`, `--format`

这个选项指定了控制台的输出格式。可用的格式是：

- [codeframe](https://cn.eslint.org/docs/user-guide/formatters/#codeframe)
- [compact](https://cn.eslint.org/docs/user-guide/formatters/#compact)
- [html](https://cn.eslint.org/docs/user-guide/formatters/#html)
- [jslint-xml](https://cn.eslint.org/docs/user-guide/formatters/#jslint-xml)
- [json](https://cn.eslint.org/docs/user-guide/formatters/#json)
- [junit](https://cn.eslint.org/docs/user-guide/formatters/#junit)
- [stylish](https://cn.eslint.org/docs/user-guide/formatters/#stylish) (the default)
- [table](https://cn.eslint.org/docs/user-guide/formatters/#table)
- [tap](https://cn.eslint.org/docs/user-guide/formatters/#tap)
- [unix](https://cn.eslint.org/docs/user-guide/formatters/#unix)
- [visualstudio](https://cn.eslint.org/docs/user-guide/formatters/#visualstudio)

例如：

```
eslint -f compact file.js

```

你也可以在命令行中通过指定一个自定义的格式的文件路径来使用自定义的格式。

示例：

```
eslint -f ./customformat.js file.js

```

当指定之后，给定的格式就输出到控制台。如果你想将输出保存到一个文件，你可以在命令行上这样操作：

```
eslint -f compact file.js > results.txt

```

这会将输出保存到  `results.txt`  文件。

#### `--color`, `--no-color`

在管道输出中禁用颜色。

示例：

```
eslint --color file.js | cat
eslint --no-color file.js

```

### 杂项

#### `--init`

这个选项将会配置初始化向导。它被用来帮助新用户快速地创建  `.eslintrc`  文件，用户通过回答一些问题，选择一个流行的风格指南，或检查你的源文件，自动生成一个合适的配置。

生成的配置文件将被创建在当前目录。

#### `--fix`

该选项指示 ESLint 试图修复尽可能多的问题。修复只针对实际文件本身，而且剩下的未修复的问题才会输出。不是所有的问题都能使用这个选项进行修复，该选项在以下情形中不起作用：

1. 当代码传递给 ESLint 时，这个选项抛出一个错误。
2. 这个选项对使用处理器的代码不起作用。

#### `--debug`

这个选项将调试信息输出到控制台。当你看到一个问题并且很难定位它时，这些调试信息会很有用。ESLint 团队可能会通过询问这些调试信息帮助你解决 bug。

#### `-h`, `--help`

这个选项会输出帮助菜单，显示所有可用的选项。当有这个选项时，忽略其他所有选项。

#### `-v`, `--version`

这个选项在控制台输出当前 ESlint 的版本。当有这个标记时，忽略其他所有标记。

#### `--no-inline-config`

这个选项会阻止像  `/*eslint-disable*/`  或者  `/*global foo*/`  这样的内联注释起作用。这允许你在不修改文件的情况下设置一个 ESLint 配置。所有的内联注释都会被忽略，比如：

- `/*eslint-disable*/`
- `/*eslint-enable*/`
- `/*global*/`
- `/*eslint*/`
- `/*eslint-env*/`
- `// eslint-disable-line`
- `// eslint-disable-next-line`

示例：

```
eslint --no-inline-config file.js

```

#### `--print-config`

这个选项输出传递的文件使用的配置。当有这个标记时，不进行检测，只有配置相关的选项才是有效的。

示例：

```
eslint --print-config file.js

```

## .eslintignore 文件

当 ESLint 作用于一个目录时，ESLint 支持使用  `.eslintignore`  文件来避免检测处理。通过特定的命令行参数指定的文件就可以免除被忽略。`.eslintignore`  文件是个纯文本文件，每一行都包含一种模式。它可以放在目标目录的任何父级目录；它将影响到它所在的当前目录和所有子目录。这里是  `.eslintignore`  文件的一个简单示例：

```
node_modules/*
**/vendor/*.js

```

ESLint 默认忽略的模式分解和目录的更多详细信息可以在  [Configuring ESLint](https://cn.eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)  中找到。
