webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/mdx/index.tsx":
/*!**********************************!*\
  !*** ./components/mdx/index.tsx ***!
  \**********************************/
/*! exports provided: Paragraph, createHeading, Link, Image, UnorderedList, OrderedList, Blockquote, Table, Pre, Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeading", function() { return createHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnorderedList", function() { return UnorderedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedList", function() { return OrderedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blockquote", function() { return Blockquote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return Pre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/home/bonetti/workspace/bold/site/components/mdx/index.tsx";



function Paragraph(props) {
  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Text"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    component: "p",
    style: classes.paragraph
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}
function createHeading(level) {
  return function (props) {
    var _useStyles2 = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
        classes = _useStyles2.classes;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Heading"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      level: level,
      style: classes.heading
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  };
}
function Link(props) {
  var _useStyles3 = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles3.classes;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Link"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    style: classes.link
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
}
function Image(props) {
  var _useStyles4 = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      theme = _useStyles4.theme,
      classes = _useStyles4.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.src),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      currentSource = _useState2[0],
      setCurrentSource = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _$exec = /(.*)\/(.*\..*)$/.exec(props.src),
        _$exec2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_$exec, 3),
        path = _$exec2[1],
        filename = _$exec2[2];

    var darkSource = "".concat(path, "/dark-").concat(filename);
    setCurrentSource(theme === _lib__WEBPACK_IMPORTED_MODULE_3__["darkTheme"] ? darkSource : props.src);
  }, [theme, props]);

  var handleError = function handleError() {
    setCurrentSource(props.src);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    src: currentSource,
    onError: handleError,
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}
function UnorderedList(props) {
  var _useStyles5 = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles5.classes;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.list
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
}
function OrderedList(props) {
  var _useStyles6 = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles6.classes;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.list
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
}
function Blockquote(props) {
  var _useStyles7 = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles7.classes;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("blockquote", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.blockquote
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
}
function Table(props) {
  var _useStyles8 = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles8.classes;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.table
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }));
}
function Pre(props) {
  var _useStyles9 = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles9.classes;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.pre
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }));
}
function Code(props) {
  var _useStyles10 = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles10.classes;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.code
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }));
}

var createStyles = function createStyles(theme) {
  return {
    paragraph: {
      fontSize: '1rem',
      marginBottom: '2rem'
    },
    link: {
      fontSize: '1rem'
    },
    heading: {
      marginBottom: '2rem'
    },
    list: {
      fontSize: '1rem',
      margin: '0 0 2rem 0'
    },
    image: {
      marginBottom: '2rem'
    },
    blockquote: {
      position: 'relative',
      p: {
        color: theme.pallete.primary.main,
        fontStyle: 'italic',
        fontSize: '1.25rem'
      },
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
    table: {
      fontSize: '1rem',
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
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.2c53f00382394e9abeb4.hot-update.js.map