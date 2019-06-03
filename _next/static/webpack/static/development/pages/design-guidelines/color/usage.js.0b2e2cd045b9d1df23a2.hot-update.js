webpackHotUpdate("static/development/pages/design-guidelines/color/usage.js",{

/***/ "./components/TabLinks.tsx":
/*!*********************************!*\
  !*** ./components/TabLinks.tsx ***!
  \*********************************/
/*! exports provided: TabLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLinks", function() { return TabLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/bonetti/workspace/bold/site/components/TabLinks.tsx";




var TabLinks = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (props) {
  var items = props.items,
      router = props.router;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var isActive = function isActive(item) {
    return router.pathname === item.href;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    style: classes.tabs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: item.href,
      href: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["TabItem"], {
      component: "a",
      href: item.href,
      style: classes.item,
      active: isActive(item),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, item.title));
  })));
});

var createStyles = function createStyles(theme) {
  return {
    tabs: {
      marginTop: '-0.75rem !important',
      marginBottom: '2rem',
      borderBottom: "1px solid ".concat(theme.pallete.divider)
    },
    item: {
      'a:focus': {
        boxShadow: 'none !important'
      }
    }
  };
};

/***/ })

})
//# sourceMappingURL=usage.js.0b2e2cd045b9d1df23a2.hot-update.js.map