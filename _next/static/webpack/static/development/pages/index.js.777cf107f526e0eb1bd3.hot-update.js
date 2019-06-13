webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/index.tsx";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.headgroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Bold"), " design system"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Consistent, accessible, bold.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.cards,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    wrap: true,
    style: classes.cardsGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    xs: 3,
    flexBasis: 240,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    title: "Getting started",
    icon: "rocket",
    href: "/getting-started",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Check our onboarding guide for designers and devs.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    xs: 3,
    flexBasis: 240,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    title: "Components",
    icon: "bricksFilled",
    href: "/components/button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Discover our component\u2019s library, usage and code.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    xs: 3,
    flexBasis: 240,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    title: "Storybook",
    icon: "starFilled",
    href: "/storybook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "A development environment for UI components.")))));
});

var createStyles = function createStyles(theme) {
  return {
    wrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: theme.pallete.surface.main
    },
    headgroup: {
      padding: 80,
      marginBottom: 130
    },
    title: {
      fontWeight: 'normal',
      fontSize: 36
    },
    subtitle: {
      fontSize: 24
    },
    cards: {
      background: '#0099ff',
      padding: 80,
      flex: 1
    },
    cardsGrid: {
      marginTop: -227
    }
  };
};

function Card(props) {
  var title = props.title,
      children = props.children,
      icon = props.icon,
      href = props.href;

  var _useStyles2 = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["useStyles"])(createCardStyles),
      classes = _useStyles2.classes;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: classes.card,
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: icon,
    style: classes.icon,
    size: 2.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), children);
}

var createCardStyles = function createCardStyles(theme) {
  return {
    card: {
      border: "1px solid ".concat(theme.pallete.divider),
      padding: '2rem 1rem',
      textAlign: 'center',
      boxShadow: theme.shadows.outer[80],
      background: theme.pallete.surface.main,
      borderRadius: 2,
      display: 'block'
    },
    title: {
      margin: 0,
      fontSize: 20,
      marginTop: '1rem'
    },
    icon: {
      fill: theme.pallete.primary.main
    },
    divider: {
      width: 80,
      margin: '1rem auto'
    }
  };
};

/***/ })

})
//# sourceMappingURL=index.js.777cf107f526e0eb1bd3.hot-update.js.map