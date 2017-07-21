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

var MyInput = function (_Component) {
  _inherits(MyInput, _Component);

  function MyInput(props) {
    _classCallCheck(this, MyInput);

    var _this = _possibleConstructorReturn(this, (MyInput.__proto__ || Object.getPrototypeOf(MyInput)).call(this, props));

    _this.state = {
      value: _this.props.defaultValue
    };
    //this.do = this.do.bind(this);
    return _this;
  }

  _createClass(MyInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { type: 'text', defaultValue: this.props.defaultValue, onChange: this.do.bind(this) }),
        'Dies steht im input: "',
        this.state.value,
        '"'
      );
    }
  }, {
    key: 'do',
    value: function _do(event) {
      console.log(event.target.value);
      this.setState({
        value: event.target.value
      });
    }
  }]);

  return MyInput;
}(_react.Component);

;

MyInput.propTypes = {
  type: _propTypes2.default.string,
  text: _propTypes2.default.string
};

MyInput.defaultProps = {
  type: 'text',
  text: 'kein Text'
};

exports.default = MyInput;