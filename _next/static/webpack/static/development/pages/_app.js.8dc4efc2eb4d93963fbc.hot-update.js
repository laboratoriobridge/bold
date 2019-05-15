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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_components_elements_Link_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/components/elements/Link/Link */ "../lib/components/elements/Link/Link.js");
/* harmony import */ var _lib_components_elements_Link_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_components_elements_Link_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages */ "./pages.ts");
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageContainer */ "./components/PageContainer.tsx");

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/Page.tsx";





function Page(props) {
  var children = props.children;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var route = props.router.route;
  var parent = _pages__WEBPACK_IMPORTED_MODULE_4__["default"].find(function (page) {
    return page.children && page.children.map(function (c) {
      return c.href;
    }).includes(route);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PageContainer__WEBPACK_IMPORTED_MODULE_5__["PageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: classes.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, parent && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    id: "page-parent-title",
    weight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, parent.title), children)));
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
      '& > p a, & > ul a': Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_lib_components_elements_Link_Link__WEBPACK_IMPORTED_MODULE_3__["createStyles"])(theme).link),
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

/***/ })

})
//# sourceMappingURL=_app.js.8dc4efc2eb4d93963fbc.hot-update.js.map