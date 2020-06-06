webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/HeroSection.js":
/*!***************************************!*\
  !*** ./src/components/HeroSection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Section */ \"./src/components/Section.js\");\n/* harmony import */ var components_SectionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/SectionHeader */ \"./src/components/SectionHeader.js\");\n/* harmony import */ var components_SectionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SectionButton */ \"./src/components/SectionButton.js\");\nvar _jsxFileName = \"/Users/luke/Documents/fakewebsite/src/components/HeroSection.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction HeroSection(props) {\n  _s();\n\n  const {\n    0: donationState,\n    1: setDonationState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    amount: null,\n    percent: null\n  });\n\n  function getDonations() {\n    const startTime = 1591412938; // The time we started donations, let's slowly increase them over a week.\n\n    const endTime = 1592265600;\n    const totalTime = endTime - startTime;\n    const currentTime = Date.now();\n    const dt = currentTime - startTime;\n    console.log(currentTime, startTime, dt);\n    const totalDonationAmount = 30000;\n    let percent = dt / totalTime;\n    return {\n      percent,\n      amount: percent * totalDonationAmount\n    };\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setDonationState(getDonations());\n  }, []);\n  return __jsx(components_Section__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    color: props.color,\n    size: props.size,\n    backgroundImage: props.backgroundImage,\n    backgroundImageOpacity: props.backgroundImageOpacity,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(components_SectionHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: props.title,\n    subtitle: props.subtitle,\n    size: 1,\n    spaced: true,\n    className: \"has-text-centered\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      maxWidth: '800px',\n      margin: '0px auto'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, \"$\", donationState.amount, \" raised so far!\"), __jsx(\"progress\", {\n    className: \"progress is-primary\",\n    value: donationState.percent,\n    max: \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"buttons is-centered\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(components_SectionButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    parentColor: props.color,\n    size: \"medium\",\n    onClick: props.buttonOnClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, props.buttonText))));\n}\n\n_s(HeroSection, \"SNwQc68tHiYwwHT/Rqhiz2O2BUk=\");\n\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\n\nvar _c;\n\n$RefreshReg$(_c, \"HeroSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZXJvU2VjdGlvbi5qcz9jM2M1Il0sIm5hbWVzIjpbIkhlcm9TZWN0aW9uIiwicHJvcHMiLCJkb25hdGlvblN0YXRlIiwic2V0RG9uYXRpb25TdGF0ZSIsInVzZVN0YXRlIiwiYW1vdW50IiwicGVyY2VudCIsImdldERvbmF0aW9ucyIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJ0b3RhbFRpbWUiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJub3ciLCJkdCIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbERvbmF0aW9uQW1vdW50IiwidXNlRWZmZWN0IiwiY29sb3IiLCJzaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZEltYWdlT3BhY2l0eSIsInRpdGxlIiwic3VidGl0bGUiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJ1dHRvbk9uQ2xpY2siLCJidXR0b25UZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDMUIsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NDLHNEQUFRLENBQUM7QUFDakRDLFVBQU0sRUFBRSxJQUR5QztBQUVqREMsV0FBTyxFQUFFO0FBRndDLEdBQUQsQ0FBbEQ7O0FBS0EsV0FBU0MsWUFBVCxHQUF1QjtBQUNyQixVQUFNQyxTQUFTLEdBQUcsVUFBbEIsQ0FEcUIsQ0FDUzs7QUFDOUIsVUFBTUMsT0FBTyxHQUFHLFVBQWhCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHRCxPQUFPLEdBQUdELFNBQTVCO0FBQ0EsVUFBTUcsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsRUFBcEI7QUFDQSxVQUFNQyxFQUFFLEdBQUdILFdBQVcsR0FBR0gsU0FBekI7QUFDQU8sV0FBTyxDQUFDQyxHQUFSLENBQVlMLFdBQVosRUFBeUJILFNBQXpCLEVBQW9DTSxFQUFwQztBQUNBLFVBQU1HLG1CQUFtQixHQUFHLEtBQTVCO0FBQ0EsUUFBSVgsT0FBTyxHQUFHUSxFQUFFLEdBQUdKLFNBQW5CO0FBQ0EsV0FBTztBQUNMSixhQURLO0FBRUxELFlBQU0sRUFBRUMsT0FBTyxHQUFHVztBQUZiLEtBQVA7QUFJRDs7QUFFREMseURBQVMsQ0FBQyxNQUFJO0FBQ1pmLG9CQUFnQixDQUFDSSxZQUFZLEVBQWIsQ0FBaEI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FDRSxNQUFDLDBEQUFEO0FBQ0UsU0FBSyxFQUFFTixLQUFLLENBQUNrQixLQURmO0FBRUUsUUFBSSxFQUFFbEIsS0FBSyxDQUFDbUIsSUFGZDtBQUdFLG1CQUFlLEVBQUVuQixLQUFLLENBQUNvQixlQUh6QjtBQUlFLDBCQUFzQixFQUFFcEIsS0FBSyxDQUFDcUIsc0JBSmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsU0FBSyxFQUFFckIsS0FBSyxDQUFDc0IsS0FEZjtBQUVFLFlBQVEsRUFBRXRCLEtBQUssQ0FBQ3VCLFFBRmxCO0FBR0UsUUFBSSxFQUFFLENBSFI7QUFJRSxVQUFNLEVBQUUsSUFKVjtBQUtFLGFBQVMsRUFBQyxtQkFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRTtBQUFLLFNBQUssRUFBRTtBQUNWQyxjQUFRLEVBQUUsT0FEQTtBQUVWQyxZQUFNLEVBQUU7QUFGRSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU14QixhQUFhLENBQUNHLE1BQXBCLG9CQUpGLEVBS0U7QUFBVSxhQUFTLEVBQUMscUJBQXBCO0FBQTBDLFNBQUssRUFBRUgsYUFBYSxDQUFDSSxPQUEvRDtBQUF3RSxPQUFHLEVBQUMsS0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBUkYsRUFlRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUNFLGVBQVcsRUFBRUwsS0FBSyxDQUFDa0IsS0FEckI7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFdBQU8sRUFBRWxCLEtBQUssQ0FBQzBCLGFBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRzFCLEtBQUssQ0FBQzJCLFVBTFQsQ0FERixDQWZGLENBTkYsQ0FERjtBQWtDRDs7R0EzRFE1QixXOztLQUFBQSxXO0FBNkRNQSwwRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlcm9TZWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiY29tcG9uZW50cy9TZWN0aW9uXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyXCI7XG5pbXBvcnQgU2VjdGlvbkJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9TZWN0aW9uQnV0dG9uXCI7XG5cbmZ1bmN0aW9uIEhlcm9TZWN0aW9uKHByb3BzKSB7XG4gIGNvbnN0IFtkb25hdGlvblN0YXRlLCBzZXREb25hdGlvblN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBhbW91bnQ6IG51bGwsXG4gICAgcGVyY2VudDogbnVsbFxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldERvbmF0aW9ucygpe1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IDE1OTE0MTI5Mzg7IC8vIFRoZSB0aW1lIHdlIHN0YXJ0ZWQgZG9uYXRpb25zLCBsZXQncyBzbG93bHkgaW5jcmVhc2UgdGhlbSBvdmVyIGEgd2Vlay5cbiAgICBjb25zdCBlbmRUaW1lID0gMTU5MjI2NTYwMDtcbiAgICBjb25zdCB0b3RhbFRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBkdCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUaW1lLCBzdGFydFRpbWUsIGR0KTtcbiAgICBjb25zdCB0b3RhbERvbmF0aW9uQW1vdW50ID0gMzAwMDA7XG4gICAgbGV0IHBlcmNlbnQgPSBkdCAvIHRvdGFsVGltZTtcbiAgICByZXR1cm4ge1xuICAgICAgcGVyY2VudCxcbiAgICAgIGFtb3VudDogcGVyY2VudCAqIHRvdGFsRG9uYXRpb25BbW91bnRcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBzZXREb25hdGlvblN0YXRlKGdldERvbmF0aW9ucygpKTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvblxuICAgICAgY29sb3I9e3Byb3BzLmNvbG9yfVxuICAgICAgc2l6ZT17cHJvcHMuc2l6ZX1cbiAgICAgIGJhY2tncm91bmRJbWFnZT17cHJvcHMuYmFja2dyb3VuZEltYWdlfVxuICAgICAgYmFja2dyb3VuZEltYWdlT3BhY2l0eT17cHJvcHMuYmFja2dyb3VuZEltYWdlT3BhY2l0eX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17cHJvcHMuc3VidGl0bGV9XG4gICAgICAgICAgc2l6ZT17MX1cbiAgICAgICAgICBzcGFjZWQ9e3RydWV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIlxuICAgICAgICA+PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgbWF4V2lkdGg6ICc4MDBweCcsXG4gICAgICAgICAgbWFyZ2luOiAnMHB4IGF1dG8nXG4gICAgICAgIH19PlxuICAgICAgICAgIDxoMj4ke2RvbmF0aW9uU3RhdGUuYW1vdW50fSByYWlzZWQgc28gZmFyITwvaDI+XG4gICAgICAgICAgPHByb2dyZXNzIGNsYXNzTmFtZT1cInByb2dyZXNzIGlzLXByaW1hcnlcIiB2YWx1ZT17ZG9uYXRpb25TdGF0ZS5wZXJjZW50fSBtYXg9XCIxMDBcIj48L3Byb2dyZXNzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zIGlzLWNlbnRlcmVkXCI+XG4gICAgICAgICAgPFNlY3Rpb25CdXR0b25cbiAgICAgICAgICAgIHBhcmVudENvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuYnV0dG9uT25DbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuYnV0dG9uVGV4dH1cbiAgICAgICAgICA8L1NlY3Rpb25CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/HeroSection.js\n");

/***/ })

})