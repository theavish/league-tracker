var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server running on port ' + port);
});
