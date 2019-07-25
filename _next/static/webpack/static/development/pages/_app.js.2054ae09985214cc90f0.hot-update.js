webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/useThemeSwitch.ts":
/*!**************************************!*\
  !*** ./components/useThemeSwitch.ts ***!
  \**************************************/
/*! exports provided: useThemeSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThemeSwitch", function() { return useThemeSwitch; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "../node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");




var useThemeSwitch = function useThemeSwitch() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_lib__WEBPACK_IMPORTED_MODULE_3__["lightTheme"]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      currentTheme = _useState2[0],
      setCurrentTheme = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (localStorage) {
      var loadedTheme = loadTheme();
      setCurrentTheme(loadedTheme);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var theme = currentTheme === _lib__WEBPACK_IMPORTED_MODULE_3__["lightTheme"] ? 'light' : 'dark';
    localStorage.setItem('currentTheme', theme);
    react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].event({
      category: 'Theme',
      action: "Switched to ".concat(theme, " theme")
    });
  }, [currentTheme]);

  var toggleTheme = function toggleTheme() {
    if (currentTheme === _lib__WEBPACK_IMPORTED_MODULE_3__["lightTheme"]) {
      setCurrentTheme(_lib__WEBPACK_IMPORTED_MODULE_3__["darkTheme"]);
      return _lib__WEBPACK_IMPORTED_MODULE_3__["darkTheme"];
    } else {
      setCurrentTheme(_lib__WEBPACK_IMPORTED_MODULE_3__["lightTheme"]);
      return _lib__WEBPACK_IMPORTED_MODULE_3__["lightTheme"];
    }
  };

  return [currentTheme, toggleTheme];
};

var loadTheme = function loadTheme() {
  if (localStorage.getItem('currentTheme') !== undefined) {
    return localStorage.getItem('currentTheme') === 'dark' ? _lib__WEBPACK_IMPORTED_MODULE_3__["darkTheme"] : _lib__WEBPACK_IMPORTED_MODULE_3__["lightTheme"];
  }

  return Math.random() < 0.5 ? _lib__WEBPACK_IMPORTED_MODULE_3__["darkTheme"] : _lib__WEBPACK_IMPORTED_MODULE_3__["lightTheme"];
};

/***/ })

})
//# sourceMappingURL=_app.js.2054ae09985214cc90f0.hot-update.js.map