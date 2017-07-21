'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Trial = require('./components/Trial');

var _Trial2 = _interopRequireDefault(_Trial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var texte = [{ text: 'Der erschte Text',
  text2: 'Detaillierte Informationen zum ersten Thema folgen dann hier. Sätze' + 'in großer Ausführlichkeit beschreiben den Sachverhalt',
  farbe: 'red'
}, {
  text: 'Der andere Text',
  text2: 'Auch hier sind Einzelheiten beschrieben, die den interessierten Leser' + 'mit interessanten Informationen versorgen und ihn auf den neuesten' + 'Stand der Forschung bringen.',
  farbe: 'green'
}];

_reactDom2.default.render(_react2.default.createElement(
  'span',
  null,
  texte.map(function (val, idx) {
    return _react2.default.createElement(_Trial2.default, { farbe: val.farbe,
      text: val.text,
      text2: val.text2,
      key: idx });
  })
), document.getElementById('app'));