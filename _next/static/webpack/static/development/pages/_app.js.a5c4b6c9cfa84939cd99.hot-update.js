webpackHotUpdate("static/development/pages/_app.js",{

/***/ "../lib/hooks/useClickOutside.js":
/*!***************************************!*\
  !*** ../lib/hooks/useClickOutside.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// From https://github.com/sandiiarov/use-events/blob/master/src/useClickOutside/index.tsx
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");
exports.useClickOutside = function (ref, onClickOutside) {
    var _a = react_1.useState(false), isActive = _a[0], setActive = _a[1];
    var mousedown = function (e) {
        var current = ref.current;
        if (current !== null && !current.contains(e.target)) {
            setActive(true);
            onClickOutside(e);
        }
    };
    var mouseup = function (e) {
        var current = ref.current;
        if (current !== null && !current.contains(e.target)) {
            setActive(false);
        }
    };
    react_1.useEffect(function () {
        document.addEventListener('mousedown', mousedown);
        document.addEventListener('mouseup', mouseup);
        return function () {
            document.removeEventListener('mousedown', mousedown);
            document.removeEventListener('mouseup', mouseup);
        };
    }, []);
    return [isActive];
};
//# sourceMappingURL=useClickOutside.js.map

/***/ }),

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

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/AppHeader.tsx";





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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.menuIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    skin: "ghost",
    size: "small",
    onClick: changeNavState(!navOpen),
    "aria-label": navOpen ? 'Close menu' : 'Open menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, !navOpen ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: "hamburguerMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: "timesDefault",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "/",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BoldLogo__WEBPACK_IMPORTED_MODULE_4__["BoldLogo"], {
    "aria-label": "Bold Logo",
    style: {
      height: '2.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.search,
    id: "search-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
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
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    text: theme === _lib__WEBPACK_IMPORTED_MODULE_3__["lightTheme"] ? 'Switch to dark mode' : 'Switch to light mode',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    skin: "ghost",
    size: "small",
    onClick: switchTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: "lightbulbFilled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))));
}
var APP_HEADER_HEIGHT = 77;

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

/***/ }),

/***/ "./components/PageLayout.tsx":
/*!***********************************!*\
  !*** ./components/PageLayout.tsx ***!
  \***********************************/
/*! exports provided: PageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayout", function() { return PageLayout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppFooter */ "./components/AppFooter.tsx");
/* harmony import */ var _components_SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SideNav */ "./components/SideNav/index.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages */ "./pages.ts");
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppHeader */ "./components/AppHeader.tsx");

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/PageLayout.tsx";






function PageLayout(props) {
  var switchTheme = props.switchTheme,
      children = props.children;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      navOpen = _useState2[0],
      setNavOpen = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppHeader__WEBPACK_IMPORTED_MODULE_6__["AppHeader"], {
    navOpen: navOpen,
    onNavChange: setNavOpen,
    switchTheme: switchTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SideNav__WEBPACK_IMPORTED_MODULE_4__["SideNav"], {
    pages: _pages__WEBPACK_IMPORTED_MODULE_5__["default"],
    open: navOpen,
    onChangeOpen: setNavOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AppFooter__WEBPACK_IMPORTED_MODULE_3__["AppFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
}

var createStyles = function createStyles() {
  return {
    container: {
      display: 'flex',
      minHeight: '100vh'
    },
    content: {
      paddingTop: "calc(".concat(_AppHeader__WEBPACK_IMPORTED_MODULE_6__["APP_HEADER_HEIGHT"], "px)"),
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/hooks/useClickOutside */ "../lib/hooks/useClickOutside.js");
/* harmony import */ var _lib_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AppHeader */ "./components/AppHeader.tsx");
/* harmony import */ var _SideNavItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SideNavItem */ "./components/SideNav/SideNavItem.tsx");


var _jsxFileName = "/home/bonetti/workspace/bold/site/components/SideNav/SideNav.tsx";





function SideNav(props) {
  var pages = props.pages,
      onChangeOpen = props.onChangeOpen;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles, props),
      classes = _useStyles.classes;

  var wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(_lib_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_4__["useClickOutside"])(wrapperRef, function () {
    return onChangeOpen(false);
  });

  var handleNavigate = function handleNavigate() {
    return onChangeOpen(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    ref: wrapperRef,
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    className: classes.nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: classes.ul,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, pages.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SideNavItem__WEBPACK_IMPORTED_MODULE_6__["SideNavItem"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      key: link.href,
      onNavigate: handleNavigate
    }, link, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }));
  }))));
}
var SIDE_NAV_WIDTH = 288;

var createStyles = function createStyles(theme, _ref) {
  var open = _ref.open;
  return {
    wrapper: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: SIDE_NAV_WIDTH,
      flexShrink: 0,
      transition: 'all .2s ease'
    }, theme.breakpoints.down('md'), {
      position: 'fixed',
      zIndex: 10,
      left: open ? 0 : -SIDE_NAV_WIDTH
    }),
    nav: {
      background: theme.pallete.surface.main,
      width: SIDE_NAV_WIDTH,
      borderRight: "1px solid ".concat(theme.pallete.divider),
      boxShadow: theme.shadows.outer[40],
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 0',
      marginTop: _AppHeader__WEBPACK_IMPORTED_MODULE_5__["APP_HEADER_HEIGHT"],
      position: 'fixed',
      zIndex: 10,
      overflow: 'auto',
      height: "calc(100vh - ".concat(_AppHeader__WEBPACK_IMPORTED_MODULE_5__["APP_HEADER_HEIGHT"], "px)"),
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

/***/ }),

/***/ "./components/SideNav/SideNavItem.tsx":
/*!********************************************!*\
  !*** ./components/SideNav/SideNavItem.tsx ***!
  \********************************************/
/*! exports provided: SideNavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavItem", function() { return SideNavItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ActiveLink */ "./components/ActiveLink.tsx");

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/SideNav/SideNavItem.tsx";





var SideNavItem = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (props) {
  var href = props.href,
      icon = props.icon,
      title = props.title,
      children = props.children,
      router = props.router,
      onNavigate = props.onNavigate;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    return href && router && router.pathname.startsWith(href);
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isCollapsed = _useState2[0],
      setIsCollapsed = _useState2[1];

  var handleLinkClick = function handleLinkClick(e) {
    if (children) {
      e.preventDefault();
      setIsCollapsed(function (collapsed) {
        return !collapsed;
      });
    } else {
      onNavigate();
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: href,
    activeClassName: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: classes.link,
    onClick: handleLinkClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: icon,
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, title), children && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: isCollapsed ? 'angleUp' : 'angleDown',
    className: classes.iconDropdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), children && isCollapsed && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: classes.sublist,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, children.map(function (sub) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: sub.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: sub.href,
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: classes.sublink,
      onClick: onNavigate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, sub.title)));
  })));
});

var createStyles = function createStyles(theme) {
  return {
    link: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      color: theme.pallete.text.main,
      textDecoration: 'none',
      padding: '1rem 0 1rem 2rem',
      transition: 'background 0.2s ease',
      fontWeight: 'bold',
      '&:hover': {
        background: theme.pallete.primary.c90
      },
      '&.active': {
        color: theme.pallete.primary.main,
        borderRight: "4px solid ".concat(theme.pallete.primary.main)
      }
    },
    title: {
      flex: 1
    },
    icon: {
      fontSize: '24px',
      marginRight: '1.5rem'
    },
    sublist: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    sublink: {
      fontWeight: 'normal',
      fontSize: 13,
      padding: '0.5rem 0 0.5rem 5rem',
      display: 'flex',
      alignItems: 'center',
      color: theme.pallete.text.main,
      textDecoration: 'none',
      transition: 'background 0.2s ease',
      '&:hover': {
        background: theme.pallete.primary.c90
      },
      '&.active': {
        color: theme.pallete.primary.main,
        fontWeight: 'bold'
      }
    },
    iconDropdown: {
      fontSize: '24px',
      marginRight: '1rem'
    }
  };
};

/***/ }),

/***/ "./components/Site.tsx":
/*!*****************************!*\
  !*** ./components/Site.tsx ***!
  \*****************************/
/*! exports provided: Site, SiteContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteContainer", function() { return SiteContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "../node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/mdx */ "./components/mdx/index.tsx");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Page */ "./components/Page.tsx");
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PageLayout */ "./components/PageLayout.tsx");
/* harmony import */ var _components_useThemeSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/useThemeSwitch */ "./components/useThemeSwitch.ts");


var _jsxFileName = "/home/bonetti/workspace/bold/site/components/Site.tsx";







var mdxComponents = {
  p: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Paragraph"],
  a: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Link"],
  img: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Image"],
  h1: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](1),
  h2: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](2),
  h3: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](3),
  h4: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](4),
  h5: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](5),
  h6: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](6),
  ul: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["UnorderedList"],
  ol: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["OrderedList"],
  blockquote: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Blockquote"],
  table: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Table"],
  pre: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Pre"],
  code: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Code"],
  inlineCode: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Code"]
};
function Site(props) {
  var _useThemeSwitch = Object(_components_useThemeSwitch__WEBPACK_IMPORTED_MODULE_8__["useThemeSwitch"])(),
      _useThemeSwitch2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useThemeSwitch, 2),
      currentTheme = _useThemeSwitch2[0],
      switchTheme = _useThemeSwitch2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: mdxComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SiteContainer, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    switchTheme: switchTheme
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))));
}
function SiteContainer(props) {
  var _ref = props,
      Component = _ref.Component,
      pageProps = _ref.pageProps;
  var route = props.router.route;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageLayout__WEBPACK_IMPORTED_MODULE_7__["PageLayout"], {
    switchTheme: props.switchTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, route === '/' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_6__["Page"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))));
}

/***/ }),

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
      maxWidth: '100%',
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
//# sourceMappingURL=_app.js.a5c4b6c9cfa84939cd99.hot-update.js.map