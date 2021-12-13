"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RingWrapper;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RingWrapper(_ref) {
  var children = _ref.children,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["children", "color"]);

  var classByColor = color ? "focus-within:ring-".concat(color) : '';
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, props, {
    className: "\n        focus-within:ring-2\n        focus-within:outline-none\n        ".concat(classByColor, "\n        rounded-md\n        transition\n      ")
  }), children);
}

RingWrapper.propTypes = {
  children: _propTypes["default"].node,
  color: _propTypes["default"].string // status: PropTypes.oneOf(['success', 'error', 'info', 'none']),

};
RingWrapper.defaultProps = {
  children: '',
  color: undefined // status: 'none',

};