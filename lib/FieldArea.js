"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FieldArea;

var _InputWrapper = _interopRequireDefault(require("../wrappers/InputWrapper"));

var _RingWrapper = _interopRequireDefault(require("../wrappers/RingWrapper"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FieldArea(_ref) {
  var placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      id = _ref.id,
      size = _ref.size,
      status = _ref.status,
      type = _ref.type,
      value = _ref.value,
      onChange = _ref.onChange,
      width = _ref.width,
      props = _objectWithoutProperties(_ref, ["placeholder", "disabled", "id", "size", "status", "type", "value", "onChange", "width"]);

  return /*#__PURE__*/React.createElement(_RingWrapper["default"], null, /*#__PURE__*/React.createElement(_InputWrapper["default"], null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    className: "outline-none w-full px-2 py-1",
    style: {
      height: size * 25
    }
  }, props)), disabled ? /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-white opacity-60 cursor-not-allowed"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null)));
}

FieldArea.propTypes = {
  disabled: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  size: _propTypes["default"].number,
  placeholder: _propTypes["default"].string,
  status: _propTypes["default"].oneOf(['success', 'error', 'info', 'none']),
  type: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  onChange: _propTypes["default"].func,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
FieldArea.defaultProps = {
  placeholder: undefined,
  size: 3,
  disabled: false,
  id: undefined,
  status: 'none',
  type: 'text',
  value: undefined,
  onChange: function onChange() {},
  width: 'auto'
};