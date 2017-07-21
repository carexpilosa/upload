'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pups = function (_Component) {
  _inherits(Pups, _Component);

  function Pups(props) {
    _classCallCheck(this, Pups);

    var _this = _possibleConstructorReturn(this, (Pups.__proto__ || Object.getPrototypeOf(Pups)).call(this, props));

    _this.state = {
      farbe: props.farbe,
      vorigeFarbe: props.farbe,
      ausklappert: false,
      text: props.text,
      text2: props.text2
    };
    return _this;
  }

  _createClass(Pups, [{
    key: 'render',
    value: function render() {
      var farbe = this.state.farbe;
      var text = this.state.text;
      var text2 = this.state.text2;
      return _react2.default.createElement(
        'h2',
        { className: farbe,
          onClick: this.do.bind(this),
          onMouseOver: this.over.bind(this),
          onMouseOut: this.out.bind(this)
        },
        text,
        ' ',
        farbe,
        ' usw.',
        this.state.ausklappert ? _react2.default.createElement(
          'div',
          null,
          text2
        ) : _react2.default.createElement('span', null)
      );
    }
  }, {
    key: 'over',
    value: function over() {
      this.setState({
        farbe: 'gray',
        vorigeFarbe: this.state.farbe
      });
    }
  }, {
    key: 'out',
    value: function out() {
      this.setState({
        farbe: this.state.vorigeFarbe
      });
    }
  }, {
    key: 'do',
    value: function _do(e) {
      var ausklappert = !this.state.ausklappert;
      this.setState({ ausklappert: ausklappert });
    }
  }]);

  return Pups;
}(_react.Component);

;

Pups.propTypes = {
  farbe: _propTypes2.default.string,
  vorigeFarbe: _propTypes2.default.string,
  ausklappert: _propTypes2.default.bool,
  text: _propTypes2.default.string,
  text2: _propTypes2.default.string
};

Pups.defaultProps = {
  farbe: 'red',
  vorigeFarbe: 'red',
  ausgeklapper: false,
  text: 'no text given',
  text2: 'no text given'
};

exports.default = Pups;