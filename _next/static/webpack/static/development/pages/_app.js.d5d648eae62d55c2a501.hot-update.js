webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/PageLayout.tsx":
/*!***********************************!*\
  !*** ./components/PageLayout.tsx ***!
  \***********************************/
/*! exports provided: PageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayout", function() { return PageLayout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppFooter */ "./components/AppFooter.tsx");
/* harmony import */ var _components_SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SideNav */ "./components/SideNav/index.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages */ "./pages.ts");
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppHeader */ "./components/AppHeader.tsx");
/* harmony import */ var _useThemeSwitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useThemeSwitch */ "./components/useThemeSwitch.ts");

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/PageLayout.tsx";







function PageLayout(props) {
  var children = props.children;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var _useThemeSwitch = Object(_useThemeSwitch__WEBPACK_IMPORTED_MODULE_7__["useThemeSwitch"])(),
      _useThemeSwitch2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useThemeSwitch, 2),
      currentTheme = _useThemeSwitch2[0],
      switchTheme = _useThemeSwitch2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppHeader__WEBPACK_IMPORTED_MODULE_6__["AppHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SideNav__WEBPACK_IMPORTED_MODULE_4__["SideNav"], {
    pages: _pages__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AppFooter__WEBPACK_IMPORTED_MODULE_3__["AppFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))));
}

var createStyles = function createStyles() {
  return {
    container: {
      display: 'flex',
      minHeight: '100vh'
    },
    content: {
      paddingTop: "calc(".concat(_AppHeader__WEBPACK_IMPORTED_MODULE_6__["APP_HEADER_HEIGHT"], "px)"),
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.d5d648eae62d55c2a501.hot-update.js.map