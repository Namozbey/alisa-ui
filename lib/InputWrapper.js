"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InputWrapper;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function InputWrapper(_ref) {
  var status = _ref.status,
      width = _ref.width,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["status", "width", "children"]);

  var classesByStatus = function classesByStatus(status) {
    switch (status) {
      case 'success':
        return 'border-success';

      case 'error':
        return 'border-danger';

      case 'info':
        return 'border-info';

      default:
        return 'border-bordercolor focus-within:border-primary hover:border-primary';
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, props, {
    className: "\n        flex\n        w-full\n        border\n        relative\n        bg-white\n        transition\n        rounded-md\n        overflow-hidden\n        ".concat(classesByStatus(status), "\n      "),
    style: {
      width: width
    }
  }), children);
}

InputWrapper.propTypes = {
  children: _propTypes["default"].node,
  status: _propTypes["default"].oneOf(['success', 'error', 'info']),
  width: _propTypes["default"].oneOf([_propTypes["default"].string, _propTypes["default"].number])
};
InputWrapper.defaultProps = {
  children: undefined,
  status: undefined,
  width: 'auto'
};