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
      '& > p> img': {
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
        '&::selection': {
          background: theme.pallete.primary.main
        },
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

/***/ })

})
//# sourceMappingURL=_app.js.04d3c9078b571e645008.hot-update.js.map