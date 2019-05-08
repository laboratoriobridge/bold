webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/SideNav/SideNav.tsx":
/*!****************************************!*\
  !*** ./components/SideNav/SideNav.tsx ***!
  \****************************************/
/*! exports provided: SideNav, SIDE_NAV_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNav", function() { return SideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDE_NAV_WIDTH", function() { return SIDE_NAV_WIDTH; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppHeader */ "./components/AppHeader.tsx");
/* harmony import */ var _SideNavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideNavItem */ "./components/SideNav/SideNavItem.tsx");

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/SideNav/SideNav.tsx";




function SideNav(props) {
  var pages = props.pages;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    id: "main-nav",
    className: classes.nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: classes.ul,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, pages.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SideNavItem__WEBPACK_IMPORTED_MODULE_4__["SideNavItem"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: link.href
    }, link, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  }))));
}
var SIDE_NAV_WIDTH = 288;

var createStyles = function createStyles(theme) {
  return {
    wrapper: {
      width: SIDE_NAV_WIDTH,
      flexShrink: 0
    },
    nav: {
      background: theme.pallete.surface.main,
      width: SIDE_NAV_WIDTH,
      borderRight: "1px solid ".concat(theme.pallete.divider),
      boxShadow: theme.shadows.outer[40],
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 0',
      marginTop: _AppHeader__WEBPACK_IMPORTED_MODULE_3__["APP_HEADER_HEIGHT"],
      position: 'fixed',
      zIndex: 10,
      overflow: 'auto',
      height: "calc(100vh - ".concat(_AppHeader__WEBPACK_IMPORTED_MODULE_3__["APP_HEADER_HEIGHT"], "px)"),
      svg: {
        fill: 'currentColor'
      }
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.2823b90cfbc334fb75de.hot-update.js.map