
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
global._ = require('underscore')._;
global.backbone = require('backbone');

var app = express();

// all environments
app.configure(require('./config/app_config')(app, express));
//app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Initialize routes
require('./config/routes')(app);

// Initialize painter module
var Painter = require('./config/painter');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
