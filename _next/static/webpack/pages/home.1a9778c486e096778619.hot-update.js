webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/components/navigation.js":
/*!****************************************!*\
  !*** ./pages/components/navigation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/rbasnet/CMU/projects/rambasnet.github.io/pages/components/navigation.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Clickable = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Clickable, _React$Component);\n\n  var _super = _createSuper(Clickable);\n\n  function Clickable(props) {\n    var _this;\n\n    Object(_Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Clickable);\n\n    _this = _super.call(this, props);\n\n    Object(_Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleClick\", function () {\n      return _this.props.onClick(_this.props.index);\n    });\n\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Clickable, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        className: \"nav-item\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n          to: this.props.to,\n          className: this.props.isActive ? \"nav-link active\" : \"nav-link\",\n          onClick: this.handleClick,\n          children: [\" \", this.props.name, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this);\n    }\n  }]);\n\n  return Clickable;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\nvar Navbar = /*#__PURE__*/function (_React$Component2) {\n  Object(_Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Navbar, _React$Component2);\n\n  var _super2 = _createSuper(Navbar);\n\n  function Navbar(props) {\n    var _this2;\n\n    Object(_Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Navbar);\n\n    _this2 = _super2.call(this, props);\n    _this2.state = {\n      nav_text: ['Home', 'Teaching', 'Research', 'Resources', 'Contact'],\n      //nav_urls:['index', 'teaching.html', 'research.html', 'resources.html', 'contact.html'],\n      activeIndex: 0,\n      //current navigation id\n      menu: false\n    }; //this.toggleMenu = this.toggleMenu.bind(this);\n\n    return _this2;\n  }\n\n  Object(_Users_rbasnet_CMU_projects_rambasnet_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Navbar, [{\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var show = this.state.menu ? \"show\" : \"\";\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: \"navbar sticky-top navbar-expand-sm bg-dark navbar-dark\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"navbar-toggler\",\n          type: \"button\",\n          \"data-toggle\": \"collapse\",\n          \"data-target\": \"#collapsibleNavbar\",\n          \"aria-controls\": \"navbarSupportedContent\",\n          \"aria-expanded\": \"false\",\n          \"aria-label\": \"Toggle navigation\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"navbar-toggler-icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"collapse navbar-collapse \",\n          id: \"collapsibleNavbar\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: \"navbar-nav\",\n            children: this.state.nav_text.map(function (value, i) {\n              return _this3.props.currentPage === value.toLocaleLowerCase() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                id: \"currentPage\",\n                className: \"nav-link\",\n                href: value.toLocaleLowerCase(),\n                children: value\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 76\n              }, _this3) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                className: \"nav-link\",\n                href: value.toLocaleLowerCase(),\n                children: value\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 19\n              }, _this3);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this);\n    }\n  }]);\n\n  return Navbar;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzP2ZjM2UiXSwibmFtZXMiOlsiQ2xpY2thYmxlIiwicHJvcHMiLCJvbkNsaWNrIiwiaW5kZXgiLCJzdGF0ZSIsInRvIiwiaXNBY3RpdmUiLCJoYW5kbGVDbGljayIsIm5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIk5hdmJhciIsIm5hdl90ZXh0IiwiYWN0aXZlSW5kZXgiLCJtZW51Iiwic2hvdyIsIm1hcCIsInZhbHVlIiwiaSIsImN1cnJlbnRQYWdlIiwidG9Mb2NhbGVMb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxTOzs7OztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiw4VUFJTDtBQUFBLGFBQU0sTUFBS0EsS0FBTCxDQUFXQyxPQUFYLENBQW1CLE1BQUtELEtBQUwsQ0FBV0UsS0FBOUIsQ0FBTjtBQUFBLEtBSks7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7OzZCQUVRO0FBQ1AsMEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFVBQWQ7QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUUsRUFBRSxLQUFLSCxLQUFMLENBQVdJLEVBQXJCO0FBQXlCLG1CQUFTLEVBQUUsS0FBS0osS0FBTCxDQUFXSyxRQUFYLEdBQXNCLGlCQUF0QixHQUF3QyxVQUE1RTtBQUNBLGlCQUFPLEVBQUcsS0FBS0MsV0FEZjtBQUFBLDBCQUMrQixLQUFLTixLQUFMLENBQVdPLElBRDFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQU1EOzs7O0VBYm1CQyw0Q0FBSyxDQUFDQyxTOztJQWdCeEJDLE07Ozs7O0FBQ0Ysa0JBQVlWLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixnQ0FBTUEsS0FBTjtBQUNBLFdBQUtHLEtBQUwsR0FBYTtBQUNUUSxjQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixVQUFyQixFQUFpQyxXQUFqQyxFQUE4QyxTQUE5QyxDQUREO0FBRVQ7QUFDQUMsaUJBQVcsRUFBRSxDQUhKO0FBR087QUFDaEJDLFVBQUksRUFBRTtBQUpHLEtBQWIsQ0FGZSxDQVFmOztBQVJlO0FBU2xCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBTUMsSUFBSSxHQUFJLEtBQUtYLEtBQUwsQ0FBV1UsSUFBWixHQUFvQixNQUFwQixHQUE2QixFQUExQztBQUNBLDBCQUNFO0FBQUssaUJBQVMsRUFBQyx3REFBZjtBQUFBLGdDQUNFO0FBQVEsbUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsY0FBSSxFQUFDLFFBQXhDO0FBQWlELHlCQUFZLFVBQTdEO0FBQXdFLHlCQUFZLG9CQUFwRjtBQUNBLDJCQUFjLHdCQURkO0FBQ3VDLDJCQUFjLE9BRHJEO0FBQzZELHdCQUFXLG1CQUR4RTtBQUFBLGlDQUdFO0FBQU0scUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU1FO0FBQUssbUJBQVMsRUFBRSwyQkFBaEI7QUFBNkMsWUFBRSxFQUFDLG1CQUFoRDtBQUFBLGlDQUNFO0FBQUkscUJBQVMsRUFBQyxZQUFkO0FBQUEsc0JBRUksS0FBS1YsS0FBTCxDQUFXUSxRQUFYLENBQW9CSSxHQUFwQixDQUF3QixVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxxQkFDckIsTUFBSSxDQUFDakIsS0FBTCxDQUFXa0IsV0FBWCxLQUEyQkYsS0FBSyxDQUFDRyxpQkFBTixFQUE1QixnQkFBeUQ7QUFBRyxrQkFBRSxFQUFDLGFBQU47QUFBb0IseUJBQVMsRUFBQyxVQUE5QjtBQUF5QyxvQkFBSSxFQUFFSCxLQUFLLENBQUNHLGlCQUFOLEVBQS9DO0FBQUEsMEJBQTJFSDtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUF6RCxnQkFDQTtBQUFHLHlCQUFTLEVBQUMsVUFBYjtBQUF3QixvQkFBSSxFQUFFQSxLQUFLLENBQUNHLGlCQUFOLEVBQTlCO0FBQUEsMEJBQTBESDtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZzQjtBQUFBLGFBQXhCO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFtQkQ7Ozs7RUFqQ2dCUiw0Q0FBSyxDQUFDQyxTOztBQW9DWkMscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIENsaWNrYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5pbmRleCk7XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayB0bz17dGhpcy5wcm9wcy50b30gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlzQWN0aXZlID8gXCJuYXYtbGluayBhY3RpdmVcIjpcIm5hdi1saW5rXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDbGljayB9PiB7dGhpcy5wcm9wcy5uYW1lfSA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYXZfdGV4dDogWydIb21lJywgJ1RlYWNoaW5nJywgJ1Jlc2VhcmNoJywgJ1Jlc291cmNlcycsICdDb250YWN0J10sXG4gICAgICAgICAgICAvL25hdl91cmxzOlsnaW5kZXgnLCAndGVhY2hpbmcuaHRtbCcsICdyZXNlYXJjaC5odG1sJywgJ3Jlc291cmNlcy5odG1sJywgJ2NvbnRhY3QuaHRtbCddLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsIC8vY3VycmVudCBuYXZpZ2F0aW9uIGlkXG4gICAgICAgICAgICBtZW51OiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICAvL3RoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHNob3cgPSAodGhpcy5zdGF0ZS5tZW51KSA/IFwic2hvd1wiIDogXCJcIjtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHN0aWNreS10b3AgbmF2YmFyLWV4cGFuZC1zbSBiZy1kYXJrIG5hdmJhci1kYXJrXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2libGVOYXZiYXJcIlxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBcIn0gaWQ9XCJjb2xsYXBzaWJsZU5hdmJhclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmF2X3RleHQubWFwKCh2YWx1ZSwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmN1cnJlbnRQYWdlID09PSB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKSA/IDxhIGlkPVwiY3VycmVudFBhZ2VcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9e3ZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCl9Pnt2YWx1ZX08L2E+IDpcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj17dmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKX0+e3ZhbHVlfTwvYT4gXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/navigation.js\n");

/***/ })

})