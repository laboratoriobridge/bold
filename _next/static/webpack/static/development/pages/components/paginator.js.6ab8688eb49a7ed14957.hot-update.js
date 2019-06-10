webpackHotUpdate("static/development/pages/components/paginator.js",{

/***/ "./components/Demo.tsx":
/*!*****************************!*\
  !*** ./components/Demo.tsx ***!
  \*****************************/
/*! exports provided: Demo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo", function() { return Demo; });
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js */ "../node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _demos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos */ "./demos.ts");
var _jsxFileName = "/home/bonetti/workspace/bold/site/components/Demo.tsx";




function Demo(props) {
  var src = props.src;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var _demos$ = _demos__WEBPACK_IMPORTED_MODULE_3__["default"]["./".concat(src, ".demo.tsx")],
      Component = _demos$.Component,
      source = _demos$.source;

  if (!Component) {
    throw new Error("Demo ".concat(src, " not found. You must specify the demo import location on file \"demos.ts\""));
  }

  var Source = highlight_js__WEBPACK_IMPORTED_MODULE_0___default.a.highlight('jsx', source.replace(/from '(\.\.\/)+lib'/g, "from 'bold-ui'")).value;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.component,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code", {
    className: "hljs language-jsx",
    dangerouslySetInnerHTML: {
      __html: Source
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
}

var createStyles = function createStyles(theme) {
  return {
    wrapper: {
      border: "1px solid ".concat(theme.pallete.divider),
      borderRadius: 4,
      marginBottom: '2rem',
      pre: {
        margin: 0,
        code: {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        }
      }
    },
    component: {
      padding: '1.5rem'
    }
  };
};

/***/ })

})
//# sourceMappingURL=paginator.js.6ab8688eb49a7ed14957.hot-update.js.map