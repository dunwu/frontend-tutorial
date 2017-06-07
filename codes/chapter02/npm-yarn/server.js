var express = require('express');
var app = express();

// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about', function (req, res) {
  res.send('/about 收到一个get请求');
});

app.post('/post', function (req, res) {
  res.send('/post 收到一个post请求');
});

app.all('/all', function (req, res) {
  res.send('/all 收到一个请求');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});