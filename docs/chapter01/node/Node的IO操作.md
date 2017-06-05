# Node的IO操作

## Buffer

JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

### 创建 Buffer

Node Buffer 类可以通过多种方式来创建。

1. 创建指定长度的的 Buffer 实例：

```
var buf = new Buffer(10);
```

2. 通过给定的数组创建 Buffer 实例：

```
var buf = new Buffer([10, 20, 30, 40, 50]);
```

3. 通过一个字符串来创建 Buffer 实例：

```
var buf = new Buffer("How are you?", "utf-8");
```

`utf-8` 是默认的编码方式，此外它同样支持以下编码：`ascii`, `utf8`, `utf16le`, `ucs2`, `base64` 和 `hex`。

### 写入缓冲区

**语法**

```
buf.write(string[, offset[, length]][, encoding])
```

**参数**

- **string** - 写入缓冲区的字符串。
- **offset** - 缓冲区开始写入的索引值，默认为 0 。
- **length** - 写入的字节数，默认为 buffer.length
- **encoding** - 使用的编码。默认为 'utf8' 。

**返回值**

返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

**示例**

```js
var buf1 = new Buffer(10);
console.log("buf1 写入字节数: " + buf1.write("0123456789"));

var buf2 = new Buffer(5);
console.log("buf2 写入字节数: " + buf2.write("0123456789"));
```

执行以上代码，输出结果为：

```
10
5
```

### 从缓冲区读取数据

**语法**

```js
buf.toString([encoding[, start[, end]]])
```

**参数**

- **encoding** - 使用的编码。默认为 'utf8' 。
- **start** - 指定开始读取的索引位置，默认为 0。
- **end** - 结束位置，默认为缓冲区的末尾。

**返回值**

解码缓冲区数据并使用指定的编码返回字符串。

**实例**

```js
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
```

### 将 Buffer 转换为 JSON 对象

**语法**

```
buf.toJSON()
```

**返回**值

返回 JSON 对象。

**实例**

```js
var buf = new Buffer('goodbye');
var json = buf.toJSON(buf);
console.log(json);
```

执行以上代码，输出结果为：

```
{ type: 'Buffer', data: [ 103, 111, 111, 100, 98, 121, 101 ] }
```

### 缓冲区合并

**语法**

```
Buffer.concat(list[, totalLength])
```

**参数**

- **list** - 用于合并的 Buffer 对象数组列表。
- **totalLength** - 指定合并后Buffer对象的总长度。

**返回值**

返回一个多个成员合并的新 Buffer 对象。

**实例**

```js
var buffer1 = new Buffer('Nothing is ');
var buffer2 = new Buffer('impossible');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
```

执行以上代码，输出结果为：

```
buffer3 内容: Nothing is impossible
```

### 缓冲区比较

**语法**

```
buf.compare(otherBuffer);
```

**参数**

参数描述如下：

- **otherBuffer** 与 **buf** 对象比较的另外一个 Buffer 对象。

**返回值**

返回一个数字，表示 **buf** 在 **otherBuffer** 之前，之后或相同。

**实例**

```js
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}
```

执行以上代码，输出结果为：

```
ABC在ABCD之前
```

### 拷贝缓冲区

**语法**

```
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
```

**参数**

- **targetBuffer** - 要拷贝的 Buffer 对象。
- **targetStart** - 数字, 可选, 默认: 0
- **sourceStart** - 数字, 可选, 默认: 0
- **sourceEnd** - 数字, 可选, 默认: buffer.length

**返回值**

没有返回值。

**实例**

```js
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 内容: " + buffer2.toString());
```

执行以上代码，输出结果为：

```
buffer2 内容: ABC
```

### 剪切缓冲区

**语法**

```
buf.slice([start[, end]])
```

**参数**

- **start** - 数字, 可选, 默认: 0
- **end** - 数字, 可选, 默认: buffer.length

**返回值**

返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。

实例

```js
var buffer1 = new Buffer('goodbye');
var buffer2 = buffer1.slice(0, 2);
console.log("buffer2 内容: " + buffer2.toString());
```

执行以上代码，输出结果为：

```
buffer2 内容: go
```

### 缓冲区长度

**语法**

```
buf.length;
```

**返回值**

返回 Buffer 对象所占据的内存长度。

**实例**

```js
var buffer = new Buffer('made in China');
console.log("buffer length: " + buffer.length);
```

执行以上代码，输出结果为：

```
buffer length: 13
```

## Stream

Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

Node.js，Stream 有四种流类型：

- **Readable** - 可读操作。
- **Writable** - 可写操作。
- **Duplex** - 可读可写操作.
- **Transform** - 操作被写入数据，然后读出结果。

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

- **data** - 当有数据可读时触发。
- **end** - 没有更多的数据可读时触发。
- **error** - 在接收和写入过程中发生错误时触发。
- **finish** - 所有数据已被写入到底层系统时触发。

本教程会为大家介绍常用的流操作。

### 读取流

获取读取流

```js
var readerStream = fs.createReadStream(pathname);

readerStream.on('data', function (chunk) {
    doSomething(chunk);
});

readerStream.on('end', function () {
    cleanUp();
});
```

完整示例代码见：codes/chapter01/node/stream/streamDemo01.js

### 写入流

获取写入流

```js
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');
writerStream.end();
```

完整示例代码见：codes/chapter01/node/stream/streamDemo02.js

### 管道流

管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

```js
var fs = require("fs");
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);
```

完整示例代码见：codes/chapter01/node/stream/streamDemo03.js

### 链式流

链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。

```js
var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
```

完整示例代码见：codes/chapter01/node/stream/streamDemo04.js

## 文件系统

Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。 Node 导入文件系统模块(fs)语法如下所示：

```
var fs = require("fs")
```

### 异步和同步

Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。

异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。

建议大家是用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。

**完整代码示例**：codes/chapter01/node/fs/fsDemo01.js

### 打开文件

**语法**

```
fs.open(path, flags[, mode], callback)
```

**参数**

- **path** - 文件的路径。
- **flags** - 文件打开的行为。具体值详见下文。
- **mode** - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
- **callback** - 回调函数，带有两个参数如：callback(err, fd)。

flags 参数可以是以下值：

| Flag | 描述                             |
| ---- | ------------------------------ |
| r    | 以读取模式打开文件。如果文件不存在抛出异常。         |
| r+   | 以读写模式打开文件。如果文件不存在抛出异常。         |
| rs   | 以同步的方式读取文件。                    |
| rs+  | 以同步的方式读取和写入文件。                 |
| w    | 以写入模式打开文件，如果文件不存在则创建。          |
| wx   | 类似 'w'，但是如果文件路径存在，则文件写入失败。     |
| w+   | 以读写模式打开文件，如果文件不存在则创建。          |
| wx+  | 类似 'w+'， 但是如果文件路径存在，则文件读写失败。   |
| a    | 以追加模式打开文件，如果文件不存在则创建。          |
| ax   | 类似 'a'， 但是如果文件路径存在，则文件追加失败。    |
| a+   | 以读取追加模式打开文件，如果文件不存在则创建。        |
| ax+  | 类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。 |

**完整代码示例**：codes/chapter01/node/fs/fsDemo02.js

### 获取文件信息

**语法**

```
fs.stat(path, callback)
```

**参数**

- **path** - 文件路径。
- **callback** - 回调函数，带有两个参数如：(err, stats), **stats** 是 fs.Stats 对象。

fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。

stats类中的方法有：

| 方法                        | 描述                                       |
| ------------------------- | ---------------------------------------- |
| stats.isFile()            | 如果是文件返回 true，否则返回 false。                 |
| stats.isDirectory()       | 如果是目录返回 true，否则返回 false。                 |
| stats.isBlockDevice()     | 如果是块设备返回 true，否则返回 false。                |
| stats.isCharacterDevice() | 如果是字符设备返回 true，否则返回 false。               |
| stats.isSymbolicLink()    | 如果是软链接返回 true，否则返回 false。                |
| stats.isFIFO()            | 如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。 |
| stats.isSocket()          | 如果是 Socket 返回 true，否则返回 false。           |

**完整代码示例**：codes/chapter01/node/fs/fsDemo03.js

### 写入文件

**语法**

```
fs.writeFile(file, data[, options], callback)
```

如果文件存在，该方法写入的内容会覆盖旧的文件内容。

**参数**

- **file** - 文件名或文件描述符。
- **data** - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象。
- **options** - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
- **callback** - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。

**完整代码示例**：codes/chapter01/node/fs/fsDemo04.js

### 读取文件

**语法**

```
fs.read(fd, buffer, offset, length, position, callback)
```

该方法使用了文件描述符来读取文件。

**参数**

- **fd** - 通过 fs.open() 方法返回的文件描述符。
- **buffer** - 数据写入的缓冲区。
- **offset** - 缓冲区写入的写入偏移量。
- **length** - 要从文件中读取的字节数。
- **position** - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
- **callback** - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。

**完整代码示例**：codes/chapter01/node/fs/fsDemo05.js

### 关闭文件

**语法**

```
fs.close(fd, callback)
```

该方法使用了文件描述符来读取文件。

**参数**

- **fd** - 通过 fs.open() 方法返回的文件描述符。
- **callback** - 回调函数，没有参数。

**完整代码示例**：codes/chapter01/node/fs/fsDemo06.js

### 截取文件

**语法**

```
fs.ftruncate(fd, len, callback)
```

该方法使用了文件描述符来读取文件。

**参数**

- **fd** - 通过 fs.open() 方法返回的文件描述符。
- **len** - 文件内容截取的长度。
- **callback** - 回调函数，没有参数。

**完整代码示例**：codes/chapter01/node/fs/fsDemo07.js

### 删除文件

**语法**

```
fs.unlink(path, callback)
```

**参数**

- **path** - 文件路径。
- **callback** - 回调函数，没有参数。

**完整代码示例**：codes/chapter01/node/fs/fsDemo08.js

### 创建目录

**语法**

```
fs.mkdir(path[, mode], callback)
```

**参数**

- **path** - 文件路径。
- **mode** - 设置目录权限，默认为 0777。
- **callback** - 回调函数，没有参数。

**完整代码示例**：codes/chapter01/node/fs/fsDemo09.js

### 读取目录

**语法**

```
fs.readdir(path, callback)
```

**参数**

- **path** - 文件路径。
- **callback** - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。

**完整代码示例**：codes/chapter01/node/fs/fsDemo10.js

### 删除目录

**语法**

```
fs.rmdir(path, callback)
```

**参数**

- **path** - 文件路径。
- **callback** - 回调函数，没有参数。

**完整代码示例**：codes/chapter01/node/fs/fsDemo11.js

