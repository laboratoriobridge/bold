webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/AppFooter.tsx":
/*!**********************************!*\
  !*** ./components/AppFooter.tsx ***!
  \**********************************/
/*! exports provided: AppFooter, createStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return AppFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return createStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageContainer */ "./components/PageContainer.tsx");
var _jsxFileName = "/home/bonetti/workspace/bold/site/components/AppFooter.tsx";



function AppFooter() {
  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageContainer__WEBPACK_IMPORTED_MODULE_2__["PageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["HFlow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "https://ufsc.br/",
    target: "_blank",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/image/logo-ufsc.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "https://bridge.ufsc.br/",
    target: "_blank",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/image/logo-bridge.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["HFlow"], {
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "https://www.linkedin.com/company/laborat%C3%B3rio-bridge/",
    target: "_blank",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/image/icn-linkedin.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "https://www.facebook.com/laboratoriobridge/",
    target: "_blank",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/image/icn-facebook.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "https://github.com/laboratoriobridge",
    target: "_blank",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/image/icn-github.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Laborat\xF3rio Bridge. 2019.")));
}
var createStyles = function createStyles(theme) {
  return {
    footer: {
      background: theme.pallete.surface.background,
      padding: '1.5rem 3rem'
    }
  };
};

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageContainer */ "./components/PageContainer.tsx");
var _jsxFileName = "/home/bonetti/workspace/bold/site/components/Page.tsx";



function Page(props) {
  var children = props.children;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageContainer__WEBPACK_IMPORTED_MODULE_2__["PageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children)));
}
var createStyles = function createStyles(theme) {
  return {
    wrapper: {
      background: theme.pallete.surface.main,
      flex: 1,
      padding: "2rem 3rem"
    },
    main: {
      // Global overrides (for markdown elements):
      '& > p > img': {
        maxWidth: 960,
        marginBottom: '2rem'
      },
      '& > p': {
        fontSize: '1rem',
        maxWidth: 800,
        lineHeight: 1.5,
        marginBottom: '2rem'
      },
      '& > h1, & > h2, & > h3, & > h4, & > h5, & > h6': {
        marginBottom: '2rem'
      },
      '& > ul': {
        fontSize: '1rem',
        maxWidth: 800,
        margin: '0 0 2rem 0'
      },
      '& > table': {
        fontSize: '1rem',
        maxWidth: 800,
        borderCollapse: 'collapse',
        width: '100%',
        marginBottom: '2rem',
        'td, th': {
          borderBottom: "1px solid ".concat(theme.pallete.divider),
          textAlign: 'left',
          padding: '1rem 0',
          '&:not(:last-child)': {
            paddingRight: '2rem'
          }
        }
      },
      '& > blockquote': {
        position: 'relative',
        color: theme.pallete.primary.main,
        fontStyle: 'italic',
        fontSize: '1.25rem',
        marginLeft: '7rem',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: '-6rem',
          top: '0.75rem',
          width: 78,
          height: 2,
          borderTop: "2px solid ".concat(theme.pallete.divider)
        }
      },
      code: {
        '&:not(.hljs)': {
          padding: '0.125rem 0.25rem',
          borderRadius: 3,
          background: theme.pallete.surface.background
        }
      },
      pre: {
        marginBottom: '2rem',
        code: {
          fontSize: theme.typography.sizes.text,
          borderRadius: 4,
          padding: '0.5rem 1rem'
        }
      }
    }
  };
};

/***/ }),

/***/ "./components/PageContainer.tsx":
/*!**************************************!*\
  !*** ./components/PageContainer.tsx ***!
  \**************************************/
/*! exports provided: PageContainer, createStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContainer", function() { return PageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return createStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/PageContainer.tsx";


function PageContainer(props) {
  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.container
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
}
var createStyles = function createStyles() {
  return {
    container: {
      width: '100%',
      maxWidth: 960
    }
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.5971e401b79695eb36d1.hot-update.js.map