'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
app.use(_bodyParser2.default.urlencoded({ extended: false }));
// app.use(express.static(__dirname + '/public'));

// internal middleware
// app.use(middleware({ config, db }));

// api router
// app.use('/api', api({ config, db }));

app.get('/', function (req, res) {
	res.send('hi!');
});

app.listen('3000');

exports.default = app;
//# sourceMappingURL=index.js.map