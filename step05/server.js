let express = require('express');
let path = require('path');
let compression = require('compression');

let app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT)
});
