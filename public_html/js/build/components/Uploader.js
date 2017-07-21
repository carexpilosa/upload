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

var Uploader = function (_Component) {
  _inherits(Uploader, _Component);

  function Uploader(props) {
    _classCallCheck(this, Uploader);

    var _this = _possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).call(this, props));

    _this.state = {
      liste: [],
      formData: null
    };
    //this.do = this.do.bind(this);
    return _this;
  }

  _createClass(Uploader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { method: 'post', encType: 'multipart/form-data', action: this.props.action,
            id: 'myForm' },
          'FORM UPLOAD',
          _react2.default.createElement('input', { type: 'file', id: 'tmpfiles', name: 'tmpfiles',
            onChange: this.do.bind(this), multiple: true }),
          _react2.default.createElement(
            'ul',
            null,
            this.state.liste.map(function (file, idx) {
              return _react2.default.createElement(
                'li',
                { key: idx },
                file.name
              );
            })
          ),
          _react2.default.createElement('input', { type: 'submit' })
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.sendReq.bind(this) },
          'send Ajax Request'
        )
      );
    }
  }, {
    key: 'sendReq',
    value: function sendReq() {
      console.log('sendReq');
      var myRequest = new XMLHttpRequest();
      myRequest.open('POST', this.props.action, true);
      var that = this;
      myRequest.onload = function () {
        if (myRequest.status === 200) {
          alert(myRequest.responseText);
          that.setState({
            liste: [],
            formData: null
          });
          console.log(that.state);
        }
      };
      myRequest.send(this.state.formData);
    }
  }, {
    key: 'do',
    value: function _do(event) {
      var files = document.getElementById('tmpfiles').files;
      var myForm = document.getElementById('myForm');
      var formData = this.state.formData || new FormData(myForm);
      var liste = this.state.liste;
      for (var i = 0; i < files.length; i++) {
        formData.append('filelist', files[i]);
        liste.push(files[i]);
      }
      this.setState({
        formData: formData,
        liste: liste
      });
    }
  }]);

  return Uploader;
}(_react.Component);

;

//Uploader.propTypes = {
//};

Uploader.defaultProps = {
  action: '/upload.pl'
};

exports.default = Uploader;