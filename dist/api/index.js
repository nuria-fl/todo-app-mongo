'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _package = require('../../package.json');

var _express = require('express');

var _facets = require('./facets');

var _facets2 = _interopRequireDefault(_facets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var config = _ref.config;
	var db = _ref.db;

	var api = (0, _express.Router)();

	// mount the facets resource
	// api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', function (req, res) {
		res.json({ version: _package.version });
	});

	return api;
};
//# sourceMappingURL=index.js.map