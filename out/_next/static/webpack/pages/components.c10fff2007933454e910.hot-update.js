/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/components",{

/***/ "./components/Alerts/ClosingAlert.js":
/*!*******************************************!*\
  !*** ./components/Alerts/ClosingAlert.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClosingAlert; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sajadevo_Developer_Creative_Tim_material_tailwind_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sajadevo_Developer_Creative_Tim_material_tailwind_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_sajadevo_Developer_Creative_Tim_material_tailwind_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sajadevo/Developer/Creative Tim/material-tailwind/components/Alerts/ClosingAlert.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_sajadevo_Developer_Creative_Tim_material_tailwind_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar colors = {\n  blueGray: 'bg-blue-gray-500',\n  gray: 'bg-gray-500',\n  brown: 'bg-brown-500',\n  deepOrange: 'bg-deep-orange-500',\n  orange: 'bg-orange-500',\n  amber: 'bg-amber-500',\n  yellow: 'bg-yellow-600',\n  lime: 'bg-lime-500',\n  lightGreen: 'bg-light-green-500',\n  green: 'bg-green-500',\n  teal: 'bg-teal-500',\n  cyan: 'bg-cyan-500',\n  lightBlue: 'bg-light-blue-500',\n  blue: 'bg-blue-500',\n  indigo: 'bg-indigo-500',\n  deepPurple: 'bg-deep-purple-500',\n  purple: 'bg-purple-500',\n  pink: 'bg-pink-500',\n  red: 'bg-red-500'\n};\nfunction ClosingAlert(_ref) {\n  _s();\n\n  var children = _ref.children,\n      color = _ref.color,\n      rest = (0,_Users_sajadevo_Developer_Creative_Tim_material_tailwind_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref, [\"children\", \"color\"]);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(true),\n      _React$useState2 = (0,_Users_sajadevo_Developer_Creative_Tim_material_tailwind_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),\n      showAlert = _React$useState2[0],\n      setShowAlert = _React$useState2[1];\n\n  var closeAlert = function closeAlert(e) {\n    var delay;\n    var parentClassName = e.target.parentNode.parentNode;\n    parentClassName.classList.add('opacity-0');\n    Array.from(parentClassName.classList).map(function (el) {\n      return el.includes('duration') ? delay = el.split('-')[1] : null;\n    });\n    setTimeout(function () {\n      return setShowAlert(false);\n    }, delay ? parseInt(delay, 10) + 100 : 250);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: showAlert ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", _objectSpread(_objectSpread({}, rest), {}, {\n      className: \"flex items-center gap-3 text-white p-4 pr-12 border-0 rounded-lg relative mb-4 \".concat(colors[color], \" transition-all duration-300\"),\n      children: [children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"absolute right-4 top-1/3 transform -translate-y-1/3 w-6 h-6 bg-transparent text-2xl outline-none focus:outline-none\",\n        onClick: closeAlert,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"leading-none text-4xl\",\n          children: \"\\xD7\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 21\n      }, this)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }, this) : null\n  }, void 0, false);\n}\n\n_s(ClosingAlert, \"duEgEhUpBdoeYfRe1sjW721RL9s=\");\n\n_c = ClosingAlert;\nClosingAlert.defaultProps = {\n  color: 'lightBlue'\n};\nClosingAlert.propTypes = {\n  color: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired)\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"ClosingAlert\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGVydHMvQ2xvc2luZ0FsZXJ0LmpzP2UxN2IiXSwibmFtZXMiOlsiY29sb3JzIiwiYmx1ZUdyYXkiLCJncmF5IiwiYnJvd24iLCJkZWVwT3JhbmdlIiwib3JhbmdlIiwiYW1iZXIiLCJ5ZWxsb3ciLCJsaW1lIiwibGlnaHRHcmVlbiIsImdyZWVuIiwidGVhbCIsImN5YW4iLCJsaWdodEJsdWUiLCJibHVlIiwiaW5kaWdvIiwiZGVlcFB1cnBsZSIsInB1cnBsZSIsInBpbmsiLCJyZWQiLCJDbG9zaW5nQWxlcnQiLCJjaGlsZHJlbiIsImNvbG9yIiwicmVzdCIsIlJlYWN0Iiwic2hvd0FsZXJ0Iiwic2V0U2hvd0FsZXJ0IiwiY2xvc2VBbGVydCIsImUiLCJkZWxheSIsInBhcmVudENsYXNzTmFtZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJBcnJheSIsImZyb20iLCJtYXAiLCJlbCIsImluY2x1ZGVzIiwic3BsaXQiLCJzZXRUaW1lb3V0IiwicGFyc2VJbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLFVBQVEsRUFBRSxrQkFEQztBQUVYQyxNQUFJLEVBQUUsYUFGSztBQUdYQyxPQUFLLEVBQUUsY0FISTtBQUlYQyxZQUFVLEVBQUUsb0JBSkQ7QUFLWEMsUUFBTSxFQUFFLGVBTEc7QUFNWEMsT0FBSyxFQUFFLGNBTkk7QUFPWEMsUUFBTSxFQUFFLGVBUEc7QUFRWEMsTUFBSSxFQUFFLGFBUks7QUFTWEMsWUFBVSxFQUFFLG9CQVREO0FBVVhDLE9BQUssRUFBRSxjQVZJO0FBV1hDLE1BQUksRUFBRSxhQVhLO0FBWVhDLE1BQUksRUFBRSxhQVpLO0FBYVhDLFdBQVMsRUFBRSxtQkFiQTtBQWNYQyxNQUFJLEVBQUUsYUFkSztBQWVYQyxRQUFNLEVBQUUsZUFmRztBQWdCWEMsWUFBVSxFQUFFLG9CQWhCRDtBQWlCWEMsUUFBTSxFQUFFLGVBakJHO0FBa0JYQyxNQUFJLEVBQUUsYUFsQks7QUFtQlhDLEtBQUcsRUFBRTtBQW5CTSxDQUFmO0FBc0JlLFNBQVNDLFlBQVQsT0FBb0Q7QUFBQTs7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVJDLElBQVE7O0FBQUEsd0JBQzdCQyxxREFBQSxDQUFlLElBQWYsQ0FENkI7QUFBQTtBQUFBLE1BQ3hEQyxTQUR3RDtBQUFBLE1BQzdDQyxZQUQ2Qzs7QUFHL0QsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCLFFBQUlDLEtBQUo7QUFFQSxRQUFNQyxlQUFlLEdBQUdGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxVQUFULENBQW9CQSxVQUE1QztBQUVBRixtQkFBZSxDQUFDRyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsV0FBOUI7QUFFQUMsU0FBSyxDQUFDQyxJQUFOLENBQVdOLGVBQWUsQ0FBQ0csU0FBM0IsRUFBc0NJLEdBQXRDLENBQTBDLFVBQUNDLEVBQUQ7QUFBQSxhQUN0Q0EsRUFBRSxDQUFDQyxRQUFILENBQVksVUFBWixJQUEyQlYsS0FBSyxHQUFHUyxFQUFFLENBQUNFLEtBQUgsQ0FBUyxHQUFULEVBQWMsQ0FBZCxDQUFuQyxHQUF1RCxJQURqQjtBQUFBLEtBQTFDO0FBSUFDLGNBQVUsQ0FDTjtBQUFBLGFBQU1mLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsS0FETSxFQUVORyxLQUFLLEdBQUdhLFFBQVEsQ0FBQ2IsS0FBRCxFQUFRLEVBQVIsQ0FBUixHQUFzQixHQUF6QixHQUErQixHQUY5QixDQUFWO0FBSUgsR0FmRDs7QUFpQkEsc0JBQ0k7QUFBQSxjQUNLSixTQUFTLGdCQUNOLHFHQUNRRixJQURSO0FBRUksZUFBUywyRkFBb0Z2QixNQUFNLENBQUNzQixLQUFELENBQTFGLGlDQUZiO0FBQUEsaUJBSUtELFFBSkwsZUFLSTtBQUNJLGlCQUFTLEVBQUMscUhBRGQ7QUFFSSxlQUFPLEVBQUVNLFVBRmI7QUFBQSwrQkFJSTtBQUFNLG1CQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLEdBYU47QUFkUixtQkFESjtBQWtCSDs7R0F0Q3VCUCxZOztLQUFBQSxZO0FBd0N4QkEsWUFBWSxDQUFDdUIsWUFBYixHQUE0QjtBQUN4QnJCLE9BQUssRUFBRTtBQURpQixDQUE1QjtBQUlBRixZQUFZLENBQUN3QixTQUFiLEdBQXlCO0FBQ3JCdEIsT0FBSyxFQUFFdUIscUVBRGM7QUFFckJ4QixVQUFRLEVBQUV3QixtRUFBeUJDO0FBRmQsQ0FBekIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsZXJ0cy9DbG9zaW5nQWxlcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgY29sb3JzID0ge1xuICAgIGJsdWVHcmF5OiAnYmctYmx1ZS1ncmF5LTUwMCcsXG4gICAgZ3JheTogJ2JnLWdyYXktNTAwJyxcbiAgICBicm93bjogJ2JnLWJyb3duLTUwMCcsXG4gICAgZGVlcE9yYW5nZTogJ2JnLWRlZXAtb3JhbmdlLTUwMCcsXG4gICAgb3JhbmdlOiAnYmctb3JhbmdlLTUwMCcsXG4gICAgYW1iZXI6ICdiZy1hbWJlci01MDAnLFxuICAgIHllbGxvdzogJ2JnLXllbGxvdy02MDAnLFxuICAgIGxpbWU6ICdiZy1saW1lLTUwMCcsXG4gICAgbGlnaHRHcmVlbjogJ2JnLWxpZ2h0LWdyZWVuLTUwMCcsXG4gICAgZ3JlZW46ICdiZy1ncmVlbi01MDAnLFxuICAgIHRlYWw6ICdiZy10ZWFsLTUwMCcsXG4gICAgY3lhbjogJ2JnLWN5YW4tNTAwJyxcbiAgICBsaWdodEJsdWU6ICdiZy1saWdodC1ibHVlLTUwMCcsXG4gICAgYmx1ZTogJ2JnLWJsdWUtNTAwJyxcbiAgICBpbmRpZ286ICdiZy1pbmRpZ28tNTAwJyxcbiAgICBkZWVwUHVycGxlOiAnYmctZGVlcC1wdXJwbGUtNTAwJyxcbiAgICBwdXJwbGU6ICdiZy1wdXJwbGUtNTAwJyxcbiAgICBwaW5rOiAnYmctcGluay01MDAnLFxuICAgIHJlZDogJ2JnLXJlZC01MDAnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvc2luZ0FsZXJ0KHsgY2hpbGRyZW4sIGNvbG9yLCAuLi5yZXN0IH0pIHtcbiAgICBjb25zdCBbc2hvd0FsZXJ0LCBzZXRTaG93QWxlcnRdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCBjbG9zZUFsZXJ0ID0gKGUpID0+IHtcbiAgICAgICAgbGV0IGRlbGF5O1xuXG4gICAgICAgIGNvbnN0IHBhcmVudENsYXNzTmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblxuICAgICAgICBwYXJlbnRDbGFzc05hbWUuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS0wJyk7XG5cbiAgICAgICAgQXJyYXkuZnJvbShwYXJlbnRDbGFzc05hbWUuY2xhc3NMaXN0KS5tYXAoKGVsKSA9PlxuICAgICAgICAgICAgZWwuaW5jbHVkZXMoJ2R1cmF0aW9uJykgPyAoZGVsYXkgPSBlbC5zcGxpdCgnLScpWzFdKSA6IG51bGxcbiAgICAgICAgKTtcblxuICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4gc2V0U2hvd0FsZXJ0KGZhbHNlKSxcbiAgICAgICAgICAgIGRlbGF5ID8gcGFyc2VJbnQoZGVsYXksIDEwKSArIDEwMCA6IDI1MFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge3Nob3dBbGVydCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXdoaXRlIHAtNCBwci0xMiBib3JkZXItMCByb3VuZGVkLWxnIHJlbGF0aXZlIG1iLTQgJHtjb2xvcnNbY29sb3JdfSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC00IHRvcC0xLzMgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzMgdy02IGgtNiBiZy10cmFuc3BhcmVudCB0ZXh0LTJ4bCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxlcnR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxlYWRpbmctbm9uZSB0ZXh0LTR4bFwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbkNsb3NpbmdBbGVydC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICdsaWdodEJsdWUnLFxufTtcblxuQ2xvc2luZ0FsZXJ0LnByb3BUeXBlcyA9IHtcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Alerts/ClosingAlert.js\n");

/***/ })

});