webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Page.tsx":
/*!*****************************!*\
  !*** ./components/Page.tsx ***!
  \*****************************/
/*! exports provided: Page, createStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return createStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages */ "./pages.ts");
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageContainer */ "./components/PageContainer.tsx");

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/Page.tsx";




function Page(props) {
  var children = props.children;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var route = props.router.route;
  var parent = _pages__WEBPACK_IMPORTED_MODULE_3__["default"].find(function (page) {
    return page.children ? !!page.children.map(function (c) {
      return c.href;
    }).find(function (c) {
      return route.indexOf(c) >= 0;
    }) : false;
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PageContainer__WEBPACK_IMPORTED_MODULE_4__["PageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, parent && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    id: "page-parent-title",
    fontWeight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, parent.title), children)));
}
var createStyles = function createStyles(theme) {
  return {
    wrapper: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      background: theme.pallete.surface.main,
      flex: 1,
      padding: "2rem 3rem"
    }, theme.breakpoints.down('md'), {
      padding: "2rem 2rem"
    })
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.0f3038c7d928b7dd5ed9.hot-update.js.map