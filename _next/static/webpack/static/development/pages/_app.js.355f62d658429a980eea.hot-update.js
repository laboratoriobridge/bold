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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppFooter */ "./components/AppFooter.tsx");
/* harmony import */ var _components_SideNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SideNav */ "./components/SideNav/index.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages */ "./pages.ts");
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppHeader */ "./components/AppHeader.tsx");
var _jsxFileName = "/home/bonetti/workspace/bold/site/components/PageLayout.tsx";






function PageLayout(props) {
  var children = props.children;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppHeader__WEBPACK_IMPORTED_MODULE_5__["AppHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SideNav__WEBPACK_IMPORTED_MODULE_3__["SideNav"], {
    pages: _pages__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppFooter__WEBPACK_IMPORTED_MODULE_2__["AppFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
      paddingTop: "calc(".concat(_AppHeader__WEBPACK_IMPORTED_MODULE_5__["APP_HEADER_HEIGHT"], "px)"),
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.355f62d658429a980eea.hot-update.js.map