var express = require('express');
var mongoose = require('mongoose');
var app = express();

var port = process.env.PORT || 3000;

var dbConfig = require('./server/dbConfig');
var config = require('./server/config');
var routes = require('./server/routes');

mongoose.connect(dbConfig.url);

app.use('/', express.static(__dirname + '/public'));

app.use('/', routes);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

var server = app.listen(port, function() {
  console.log('Server running on port ' + port);
});
