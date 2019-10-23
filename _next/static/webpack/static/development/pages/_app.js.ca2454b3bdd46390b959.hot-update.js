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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BoldLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoldLogo */ "./components/BoldLogo.tsx");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SideNav */ "./components/SideNav/index.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var t = function t(p) {
  return p;
};

function AppHeader(props) {
  var navOpen = props.navOpen,
      onNavChange = props.onNavChange,
      switchTheme = props.switchTheme;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles.classes,
      theme = _useStyles.theme;

  var changeNavState = function changeNavState(open) {
    return function () {
      return onNavChange(open);
    };
  };

  return __jsx("header", {
    className: classes.header
  }, __jsx("div", {
    className: classes.menuIcon
  }, __jsx(_lib__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    skin: "ghost",
    size: "small",
    onClick: changeNavState(!navOpen),
    "aria-label": navOpen ? t('menu-open') : t('menu-close')
  }, !navOpen ? __jsx(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: "hamburguerMenu"
  }) : __jsx(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: "timesDefault"
  }))), __jsx("div", {
    className: classes.logo
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    href: "/",
    style: {
      display: 'inline-block'
    }
  }, __jsx(_BoldLogo__WEBPACK_IMPORTED_MODULE_4__["BoldLogo"], {
    "aria-label": "Bold Logo",
    style: {
      height: '2.5rem'
    }
  })))), __jsx("div", {
    className: classes.search,
    id: "search-wrapper"
  }, __jsx(_lib__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
    id: "search-input",
    style: classes.searchInput,
    type: "search",
    icon: "zoomOutline",
    iconPosition: "left",
    placeholder: t('search-input-placeholder')
  })), __jsx("div", null, __jsx(_lib__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    text: theme === _lib__WEBPACK_IMPORTED_MODULE_3__["lightTheme"] ? t('switch-to-dark') : t('switch-to-light')
  }, __jsx(_lib__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    skin: "ghost",
    size: "small",
    onClick: switchTheme,
    "aria-label": 'Switch theme'
  }, __jsx(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: "lightbulbFilled"
  })))));
}
var APP_HEADER_HEIGHT = 76;

var createStyles = function createStyles(theme) {
  var _search;

  return {
    header: {
      background: theme.pallete.surface.main,
      padding: '1rem 2rem',
      boxShadow: theme.shadows.outer[60],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 20,
      position: 'fixed',
      width: '100%'
    },
    menuIcon: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'none'
    }, theme.breakpoints.down('md'), {
      display: 'block'
    }),
    logo: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      borderRight: "1px solid ".concat(theme.pallete.divider),
      width: "calc(".concat(_SideNav__WEBPACK_IMPORTED_MODULE_5__["SIDE_NAV_WIDTH"], "px - 2rem)"),
      padding: '0 1rem 0 2.75rem'
    }, theme.breakpoints.down('md'), {
      borderRight: 'none',
      width: 'auto',
      paddingRight: 0,
      paddingLeft: 0
    }),
    searchInput: {
      border: 'none',
      '~ span': {
        background: theme.pallete.surface.main
      },
      '&::-webkit-search-decoration': {
        WebkitAppearance: 'none'
      }
    },
    search: (_search = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, theme.breakpoints.down('md'), {
      display: 'none'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, "flex", 1), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, "padding", '0 1rem'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, "position", 'relative'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, '.algolia-autocomplete [class^="ds-dataset"]', {
      background: theme.pallete.surface.main,
      borderColor: theme.pallete.divider,
      '&::before': {
        background: theme.pallete.surface.main
      }
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, '.algolia-autocomplete', {
      left: '1rem !important',
      top: '0.5rem'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, '.algolia-autocomplete .ds-dropdown-menu', {
      fontSize: '1em',
      fontWeight: 'normal',
      '&::before': {
        background: theme.pallete.surface.main
      }
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, '.algolia-autocomplete .algolia-docsearch-suggestion', {
      fontWeight: 'normal',
      textDecoration: 'none',
      background: 'transparent'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, '.algolia-autocomplete .algolia-docsearch-suggestion--category-header', {
      fontWeight: 'bold',
      color: theme.pallete.text.main
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, '.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column', {}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, '.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column-text', {
      color: theme.pallete.text.secondary,
      fontSize: theme.typography.sizes.text
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, '.algolia-autocomplete .algolia-docsearch-suggestion--content', {}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, '.algolia-autocomplete .algolia-docsearch-suggestion--title', {
      color: theme.pallete.text.main,
      fontSize: theme.typography.sizes.text
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, '.algolia-autocomplete .algolia-docsearch-suggestion--text', {
      color: theme.pallete.text.main,
      fontSize: theme.typography.sizes.text
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_search, '.algolia-autocomplete .algolia-docsearch-suggestion--highlight', {
      color: 'inherit !important',
      background: "".concat(theme.pallete.highlight, " !important"),
      boxShadow: 'none !important'
    }), _search)
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.ca2454b3bdd46390b959.hot-update.js.map