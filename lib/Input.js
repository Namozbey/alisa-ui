"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Input;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SizeWrapper = _interopRequireDefault(require("./wrappers/SizeWrapper"));

var _RingWrapper = _interopRequireDefault(require("./wrappers/RingWrapper"));

var _InputWrapper = _interopRequireDefault(require("./wrappers/InputWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var inputClassBySize = function inputClassBySize(size) {
  var initial = 'flex-1 min-w-0 outline-none -my-px bg-transparent ';
  var sizes = {
    large: 'mx-2',
    middle: 'mx-1',
    small: 'mx-1'
  };
  return initial + sizes[size];
};

var colorsByStatus = function colorsByStatus(status) {
  switch (status) {
    case 'success':
      return 'green-300';

    case 'error':
      return 'red-300';

    default:
      return '';
  }
};

function Input(_ref) {
  var id = _ref.id,
      addonAfter = _ref.addonAfter,
      addonBefore = _ref.addonBefore,
      disabled = _ref.disabled,
      value = _ref.value,
      onChange = _ref.onChange,
      size = _ref.size,
      prefix = _ref.prefix,
      placeholder = _ref.placeholder,
      suffix = _ref.suffix,
      status = _ref.status,
      type = _ref.type,
      width = _ref.width,
      props = _objectWithoutProperties(_ref, ["id", "addonAfter", "addonBefore", "disabled", "value", "onChange", "size", "prefix", "placeholder", "suffix", "status", "type", "width"]);

  var prefSuffex = function prefSuffex(element) {
    return element ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "bg-lightgray-5 px-4 flex items-center h-auto"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-midgray-2 text-base -my-px"
    }, element)) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "alisa-input"
  }, /*#__PURE__*/_react["default"].createElement(_RingWrapper["default"], {
    color: colorsByStatus(status)
  }, /*#__PURE__*/_react["default"].createElement(_InputWrapper["default"], {
    status: status,
    width: width
  }, prefSuffex(prefix), /*#__PURE__*/_react["default"].createElement(_SizeWrapper["default"], {
    size: size
  }, addonBefore, /*#__PURE__*/_react["default"].createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    className: inputClassBySize(size)
  }, props)), addonAfter), prefSuffex(suffix), disabled ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-white opacity-60 cursor-not-allowed"
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null))));
}

Input.propTypes = {
  addonAfter: _propTypes["default"].node,
  addonBefore: _propTypes["default"].node,
  // allowClear: PropTypes.bool,
  // bordered: PropTypes.bool,
  // defaultValue: PropTypes.string,
  disabled: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  // maxLength: PropTypes.number,
  prefix: _propTypes["default"].node,
  placeholder: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['large', 'middle', 'small']),
  status: _propTypes["default"].oneOf(['success', 'error', 'info', 'none']),
  suffix: _propTypes["default"].node,
  type: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  onChange: _propTypes["default"].func,
  // onPressEnter: PropTypes.func,
  width: _propTypes["default"].oneOf([_propTypes["default"].string, _propTypes["default"].number])
};
Input.defaultProps = {
  addonAfter: undefined,
  addonBefore: undefined,
  prefix: undefined,
  suffix: undefined,
  placeholder: undefined,
  // allowClear: false,
  // bordered: true,
  disabled: false,
  id: undefined,
  size: 'middle',
  status: 'none',
  type: 'text',
  value: undefined,
  onChange: function onChange() {},
  width: 'auto'
};