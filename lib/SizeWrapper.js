"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SizeWrapper;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SizeWrapper(_ref) {
  var size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["size", "children"]);

  var classesBySize = function classesBySize(size) {
    switch (size) {
      case 'large':
        return 'px-2 py-2';

      case 'middle':
        return 'px-2 py-1';

      case 'small':
        return 'px-1';

      default:
        return 'px-2 py-1';
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, props, {
    className: "\n        flex\n        flex-1\n        items-center\n        w-auto\n        min-w-0\n        transition\n        ".concat(classesBySize(size), "\n      ")
  }), children);
}

SizeWrapper.propTypes = {
  children: _propTypes["default"].node,
  size: _propTypes["default"].oneOf(['large', 'middle', 'small'])
};
SizeWrapper.defaultProps = {
  children: undefined,
  size: 'middle'
};