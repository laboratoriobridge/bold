webpackHotUpdate("static/development/pages/design-guidelines/color.js",{

/***/ "./components/Pallete.tsx":
/*!********************************!*\
  !*** ./components/Pallete.tsx ***!
  \********************************/
/*! exports provided: Pallete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pallete", function() { return Pallete; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/styles/colors */ "../lib/styles/colors/index.js");
/* harmony import */ var _lib_styles_colors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_styles_colors__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/bonetti/workspace/bold/site/components/Pallete.tsx";



function Pallete(props) {
  var title = props.title,
      pallete = props.pallete;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles.classes,
      css = _useStyles.css;

  var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(pallete).map(function (k) {
    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(k.substr(1), 10);
  }).sort(function (a, b) {
    return a < b ? 1 : -1;
  });

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: css(classes.item, classes.title),
    style: {
      background: pallete.c40,
      color: _lib_styles_colors__WEBPACK_IMPORTED_MODULE_4__["gray"].c100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.item,
    style: {
      background: pallete.c40,
      color: _lib_styles_colors__WEBPACK_IMPORTED_MODULE_4__["gray"].c100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.shade,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "40"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.hex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, pallete.c40)), keys.map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: key,
      className: classes.item,
      style: {
        background: pallete['c' + key],
        color: key <= 60 ? _lib_styles_colors__WEBPACK_IMPORTED_MODULE_4__["gray"].c100 : _lib_styles_colors__WEBPACK_IMPORTED_MODULE_4__["gray"].c20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: classes.shade,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, key), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: classes.hex,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, pallete['c' + key]));
  }));
}

var createStyles = function createStyles(theme) {
  return {
    box: {
      display: 'inline-block',
      width: 240,
      fontSize: theme.typography.sizes.text
    },
    title: {
      fontWeight: 'bold'
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.75rem 1rem',
      '&:first-of-type': {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
      },
      '&:last-of-type': {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
      }
    },
    shade: {
      fontWeight: 'bold'
    },
    hex: {}
  };
};

/***/ })

})
//# sourceMappingURL=color.js.17b24f7c4a74e235ce19.hot-update.js.map