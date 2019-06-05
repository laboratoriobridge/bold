webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/AppHeader.tsx":
/*!**********************************!*\
  !*** ./components/AppHeader.tsx ***!
  \**********************************/
/*! exports provided: AppHeader, APP_HEADER_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return AppHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_HEADER_HEIGHT", function() { return APP_HEADER_HEIGHT; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BoldLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoldLogo */ "./components/BoldLogo.tsx");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SideNav */ "./components/SideNav/index.ts");
/* harmony import */ var _useThemeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useThemeSwitch */ "./components/useThemeSwitch.ts");

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/AppHeader.tsx";






function AppHeader() {
  var _useThemeSwitch = Object(_useThemeSwitch__WEBPACK_IMPORTED_MODULE_6__["useThemeSwitch"])(),
      _useThemeSwitch2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useThemeSwitch, 2),
      currentTheme = _useThemeSwitch2[0],
      switchTheme = _useThemeSwitch2[1];

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "/",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BoldLogo__WEBPACK_IMPORTED_MODULE_4__["BoldLogo"], {
    "aria-label": "Bold Logo",
    style: {
      height: '2.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.search,
    id: "search-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
    id: "search-input",
    style: classes.searchInput,
    type: "search",
    icon: "zoomOutline",
    iconPosition: "left",
    placeholder: "Search in bold design system...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    text: currentTheme === _lib__WEBPACK_IMPORTED_MODULE_3__["lightTheme"] ? 'Switch to dark mode' : 'Switch to light mode',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    skin: "ghost",
    size: "small",
    onClick: onThemeSwitch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: "lightbulbFilled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })))));
}
var APP_HEADER_HEIGHT = 77;

var createStyles = function createStyles(theme) {
  return {
    header: {
      background: theme.pallete.surface.main,
      padding: '1rem 2rem',
      boxShadow: theme.shadows.outer[60],
      display: 'flex',
      alignItems: 'center',
      zIndex: 20,
      position: 'fixed',
      width: '100%'
    },
    logo: {
      borderRight: "1px solid ".concat(theme.pallete.divider),
      width: "calc(".concat(_SideNav__WEBPACK_IMPORTED_MODULE_5__["SIDE_NAV_WIDTH"], "px - 2rem)"),
      padding: '0 1rem 0 2.75rem'
    },
    searchInput: {
      border: 'none',
      '~ span': {
        background: theme.pallete.surface.main
      },
      '&::-webkit-search-decoration': {
        WebkitAppearance: 'none'
      }
    },
    search: {
      flex: 1,
      padding: '0 1rem',
      position: 'relative',
      '.algolia-autocomplete [class^="ds-dataset"]': {
        background: theme.pallete.surface.main,
        borderColor: theme.pallete.divider,
        '&::before': {
          background: theme.pallete.surface.main
        }
      },
      '.algolia-autocomplete': {
        left: '1rem !important',
        top: '0.5rem'
      },

      /* Main dropdown wrapper */
      '.algolia-autocomplete .ds-dropdown-menu': {
        fontSize: '1em',
        fontWeight: 'normal',
        '&::before': {
          background: theme.pallete.surface.main
        }
      },

      /* Link element */
      '.algolia-autocomplete .algolia-docsearch-suggestion': {
        fontWeight: 'normal',
        textDecoration: 'none',
        background: 'transparent'
      },

      /* Main category (eg. Getting Started) */
      '.algolia-autocomplete .algolia-docsearch-suggestion--category-header': {
        fontWeight: 'bold',
        color: theme.pallete.text.main
      },

      /* Category (eg. Downloads) */
      '.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column': {},
      '.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column-text': {
        color: theme.pallete.text.secondary,
        fontSize: theme.typography.sizes.text
      },

      /* Content */
      '.algolia-autocomplete .algolia-docsearch-suggestion--content': {},

      /* Title (eg. Bootstrap CDN) */
      '.algolia-autocomplete .algolia-docsearch-suggestion--title': {
        color: theme.pallete.text.main,
        fontSize: theme.typography.sizes.text
      },

      /* Description description (eg. Bootstrap currently works...) */
      '.algolia-autocomplete .algolia-docsearch-suggestion--text': {
        color: theme.pallete.text.main,
        fontSize: theme.typography.sizes.text
      },

      /* Highlighted text */
      '.algolia-autocomplete .algolia-docsearch-suggestion--highlight': {
        color: 'inherit !important',
        background: "".concat(theme.pallete.highlight, " !important"),
        boxShadow: 'none !important'
      }
    }
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.3554b4d52f1dfcf473f7.hot-update.js.map