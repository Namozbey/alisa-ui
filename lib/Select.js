"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Select;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _RingWrapper = _interopRequireDefault(require("../wrappers/RingWrapper"));

var _colors = _interopRequireDefault(require("../../assets/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// const lightGray = colors.bordercolor
var stylesBySize = function stylesBySize(size) {
  switch (size) {
    case 'large':
      return {
        control: '8px',
        valueContainer: '-1px 8px',
        clearIndicator: '0 8px',
        dropdownIndicator: 8
      };

    case 'middle':
      return {
        control: '4px 8px',
        valueContainer: '-1px 4px',
        clearIndicator: '0 8px',
        dropdownIndicator: 8
      };

    case 'small':
      return {
        control: '0px 4px',
        valueContainer: '-1px 4px',
        clearIndicator: '0 4px',
        dropdownIndicator: 4
      };

    default:
      return {
        control: '4px 8px',
        valueContainer: '-1px 4px',
        clearIndicator: '0 8px',
        dropdownIndicator: 8
      };
  }
};

function Select(_ref) {
  var _colors$color$, _colors$color, _colors$color$2, _colors$color2, _colors$color$3, _colors$color3;

  var status = _ref.status,
      size = _ref.size,
      color = _ref.color,
      searchable = _ref.searchable,
      clearable = _ref.clearable,
      multible = _ref.multible,
      isRtl = _ref.isRtl,
      loading = _ref.loading,
      disabled = _ref.disabled,
      options = _ref.options,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      styles = _ref.styles,
      _onChange = _ref.onChange,
      className = _ref.className,
      classNamePrefix = _ref.classNamePrefix,
      style = _ref.style,
      autoFocus = _ref.autoFocus,
      backspaceRemovesValue = _ref.backspaceRemovesValue,
      blurInputOnSelect = _ref.blurInputOnSelect,
      onInputChange = _ref.onInputChange,
      props = _objectWithoutProperties(_ref, ["status", "size", "color", "searchable", "clearable", "multible", "isRtl", "loading", "disabled", "options", "value", "defaultValue", "styles", "onChange", "className", "classNamePrefix", "style", "autoFocus", "backspaceRemovesValue", "blurInputOnSelect", "onInputChange"]);

  var placeholderColor = _colors["default"].gray['400'];
  var primaryColor = (_colors$color$ = _colors["default"] === null || _colors["default"] === void 0 ? void 0 : (_colors$color = _colors["default"][color]) === null || _colors$color === void 0 ? void 0 : _colors$color['600']) !== null && _colors$color$ !== void 0 ? _colors$color$ : _colors["default"].primary;
  var primaryLightColor = (_colors$color$2 = _colors["default"] === null || _colors["default"] === void 0 ? void 0 : (_colors$color2 = _colors["default"][color]) === null || _colors$color2 === void 0 ? void 0 : _colors$color2['100']) !== null && _colors$color$2 !== void 0 ? _colors$color$2 : _colors["default"].blue['100'];
  var borderColor = (_colors$color$3 = _colors["default"] === null || _colors["default"] === void 0 ? void 0 : (_colors$color3 = _colors["default"][color]) === null || _colors$color3 === void 0 ? void 0 : _colors$color3[400]) !== null && _colors$color$3 !== void 0 ? _colors$color$3 : _colors["default"].bordercolor;
  var getValue = (0, _react.useCallback)(function (value) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (value && data && data.length) {
      var res = data === null || data === void 0 ? void 0 : data.find(function (elm) {
        return elm.value === value;
      });
      return res !== null && res !== void 0 ? res : {
        label: value,
        value: value
      };
    }

    return undefined;
  }, []);
  var customStyles = {
    control: function control(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        background: "#fff",
        borderRadius: 6,
        minHeight: 20,
        padding: stylesBySize(size).control,
        borderColor: state.isFocused ? primaryColor : borderColor,
        boxShadow: null,
        "&:hover": {
          borderColor: primaryColor
        }
      });
    },
    valueContainer: function valueContainer(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        padding: 0,
        margin: stylesBySize(size).valueContainer,
        gap: 4
      });
    },
    singleValue: function singleValue(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        margin: 0
      });
    },
    input: function input(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        padding: 0,
        margin: 0
      });
    },
    multiValue: function multiValue(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        margin: 0
      });
    },
    multiValueLabel: function multiValueLabel(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        padding: '0 6px',
        borderRight: state.isRtl ? 0 : '1px solid #333333',
        borderLeft: state.isRtl ? '1px solid #333333' : 0,
        borderTopRightRadius: state.isRtl ? 'auto' : 0,
        borderBottomRightRadius: state.isRtl ? 'auto' : 0,
        borderTopLeftRadius: state.isRtl ? 0 : 'auto',
        borderBottomLeftRadius: state.isRtl ? 0 : 'auto'
      });
    },
    multiValueRemove: function multiValueRemove(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        '&:hover': {
          color: '#000',
          backgroundColor: 'unset'
        }
      });
    },
    indicatorSeparator: function indicatorSeparator(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        margin: 0
      });
    },
    clearIndicator: function clearIndicator(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        padding: stylesBySize(size).clearIndicator,
        cursor: 'pointer',
        "&:hover": {
          color: '#000'
        }
      });
    },
    dropdownIndicator: function dropdownIndicator(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        padding: 0,
        margin: '-1px 2px',
        marginRight: state.isRtl ? stylesBySize(size).dropdownIndicator : 0,
        marginLeft: state.isRtl ? 0 : stylesBySize(size).dropdownIndicator,
        color: state.isFocused ? primaryColor : '#ccc',
        "&:hover": {
          color: primaryColor
        }
      });
    },
    placeholder: function placeholder(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        margin: 0,
        color: placeholderColor
      });
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "alisa-select ".concat(className),
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_RingWrapper["default"], {
    color: color
  }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], _extends({
    styles: _objectSpread(_objectSpread({}, customStyles), styles),
    autoFocus: autoFocus,
    isSearchable: searchable,
    isClearable: clearable,
    isMulti: multible,
    isRtl: isRtl,
    blurInputOnSelect: blurInputOnSelect,
    isLoading: loading,
    isDisabled: disabled,
    value: getValue(value, options),
    defaultValue: getValue(defaultValue, options),
    options: options,
    onChange: function onChange(elm) {
      return _onChange(elm.value, elm);
    },
    classNamePrefix: classNamePrefix,
    backspaceRemovesValue: backspaceRemovesValue,
    onInputChange: onInputChange
  }, props))));
}

Select.propTypes = {
  autoFocus: _propTypes["default"].bool,
  backspaceRemovesValue: _propTypes["default"].bool,
  blurInputOnSelect: _propTypes["default"].bool,
  searchable: _propTypes["default"].bool,
  clearable: _propTypes["default"].bool,
  multible: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  isRtl: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  className: _propTypes["default"].string,
  classNamePrefix: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  options: _propTypes["default"].array,
  onInputChange: _propTypes["default"].func,
  styles: _propTypes["default"].object,
  style: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(['large', 'middle', 'small']),
  color: _propTypes["default"].oneOf(['blueGray', 'gray', 'brown', 'deepOrange', 'orange', 'amber', 'yellow', 'lime', 'lightGreen', 'green', 'teal', 'cyan', 'lightBlue', 'blue', 'indigo', 'deepPurple', 'purple', 'pink', 'red', undefined])
};
Select.defaultProps = {
  size: 'middle',
  styles: {},
  searchable: false,
  onChange: function onChange() {}
};