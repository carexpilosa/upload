'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Uploader = require('./components/Uploader');

var _Uploader2 = _interopRequireDefault(_Uploader);

var _Liste = require('./components/Liste');

var _Liste2 = _interopRequireDefault(_Liste);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'span',
  null,
  _react2.default.createElement(_Uploader2.default, null),
  _react2.default.createElement('br', null),
  _react2.default.createElement('br', null),
  _react2.default.createElement('br', null),
  _react2.default.createElement(_Liste2.default, null)
), document.getElementById('app'));