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

var ringFocusColors = {
  blueGray: 'focus-within:ring-blue-gray-200',
  gray: 'focus-within:ring-gray-200',
  brown: 'focus-within:ring-brown-200',
  deepOrange: 'focus-within:ring-deep-orange-200',
  orange: 'focus-within:ring-orange-200',
  amber: 'focus-within:ring-amber-200',
  yellow: 'focus-within:ring-yellow-200',
  lime: 'focus-within:ring-lime-200',
  lightGreen: 'focus-within:ring-light-green-200',
  green: 'focus-within:ring-green-200',
  teal: 'focus-within:ring-teal-200',
  cyan: 'focus-within:ring-cyan-200',
  lightBlue: 'focus-within:ring-light-blue-200',
  blue: 'focus-within:ring-blue-200',
  indigo: 'focus-within:ring-indigo-200',
  deepPurple: 'focus-within:ring-deep-purple-200',
  purple: 'focus-within:ring-purple-200',
  pink: 'focus-within:ring-pink-200',
  red: 'focus-within:ring-red-200'
};

function RingWrapper(_ref) {
  var _ringFocusColors$colo;

  var children = _ref.children,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["children", "color"]);

  // const classByColor = color ? `focus-within:ring-${color}` : ''
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, props, {
    className: "\n        focus-within:ring-2\n        focus-within:outline-none\n        ".concat((_ringFocusColors$colo = ringFocusColors[color]) !== null && _ringFocusColors$colo !== void 0 ? _ringFocusColors$colo : '', "\n        rounded-md\n        transition\n      ")
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