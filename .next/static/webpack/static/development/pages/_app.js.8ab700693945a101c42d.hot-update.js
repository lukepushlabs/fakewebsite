webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/NavbarContainer */ \"./src/components/NavbarContainer.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var util_auth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util/auth.js */ \"./src/util/auth.js\");\nvar _jsxFileName = \"/Users/luke/Documents/fakewebsite/src/components/Navbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Navbar(props) {\n  _s();\n\n  const auth = Object(util_auth_js__WEBPACK_IMPORTED_MODULE_3__[\"useAuth\"])();\n  const {\n    0: menuOpen,\n    1: setMenuOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  return __jsx(components_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    spaced: props.spaced,\n    color: props.color,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"navbar-brand\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    style: {\n      height: '150px'\n    },\n    className: \"image\",\n    src: props.logo,\n    alt: \"Logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  })))), __jsx(\"div\", {\n    className: \"navbar-burger burger\" + (menuOpen ? \" is-active\" : \"\"),\n    onClick: () => setMenuOpen(!menuOpen),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(Navbar, \"BDgmJOaJBLXsVa3fJ0QrgwW17OA=\", false, function () {\n  return [util_auth_js__WEBPACK_IMPORTED_MODULE_3__[\"useAuth\"]];\n});\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanM/NTM5YiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJwcm9wcyIsImF1dGgiLCJ1c2VBdXRoIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInVzZVN0YXRlIiwic3BhY2VkIiwiY29sb3IiLCJoZWlnaHQiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQ3JCLFFBQU1DLElBQUksR0FBR0MsNERBQU8sRUFBcEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUVBLFNBQ0UsTUFBQyxrRUFBRDtBQUFpQixVQUFNLEVBQUVMLEtBQUssQ0FBQ00sTUFBL0I7QUFBdUMsU0FBSyxFQUFFTixLQUFLLENBQUNPLEtBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUM7QUFBUixLQUFaO0FBQThCLGFBQVMsRUFBQyxPQUF4QztBQUFnRCxPQUFHLEVBQUVSLEtBQUssQ0FBQ1MsSUFBM0Q7QUFBaUUsT0FBRyxFQUFDLE1BQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixFQVFFO0FBQ0UsYUFBUyxFQUFFLDBCQUEwQk4sUUFBUSxHQUFHLFlBQUgsR0FBa0IsRUFBcEQsQ0FEYjtBQUVFLFdBQU8sRUFBRSxNQUFNQyxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBUkYsQ0FERixDQURGLENBREY7QUF1QkQ7O0dBM0JRSixNO1VBQ01HLG9EOzs7S0FETkgsTTtBQTZCTUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXJDb250YWluZXIgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFyQ29udGFpbmVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcInV0aWwvYXV0aC5qc1wiO1xuXG5mdW5jdGlvbiBOYXZiYXIocHJvcHMpIHtcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyQ29udGFpbmVyIHNwYWNlZD17cHJvcHMuc3BhY2VkfSBjb2xvcj17cHJvcHMuY29sb3J9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e2hlaWdodDonMTUwcHgnfX0gY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e3Byb3BzLmxvZ299IGFsdD1cIkxvZ29cIj48L2ltZz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJuYXZiYXItYnVyZ2VyIGJ1cmdlclwiICsgKG1lbnVPcGVuID8gXCIgaXMtYWN0aXZlXCIgOiBcIlwiKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKCFtZW51T3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTmF2YmFyQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n");

/***/ })

})