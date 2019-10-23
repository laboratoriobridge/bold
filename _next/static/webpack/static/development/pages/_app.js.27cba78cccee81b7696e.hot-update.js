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
    "aria-label": navOpen ? 'Close menu' : 'Open menu'
  }, !navOpen ? __jsx(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: "hamburguerMenu"
  }) : __jsx(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: "timesDefault"
  }))), __jsx("div", {
    className: classes.logo
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx(_lib__WEBPACK_IMPORTED_MODULE_3__["Link"], {
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
    placeholder: "Search in bold design system..."
  })), __jsx("div", null, __jsx(_lib__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    text: theme === _lib__WEBPACK_IMPORTED_MODULE_3__["lightTheme"] ? 'Switch to dark mode' : 'Switch to light mode'
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ActiveLink */ "./components/ActiveLink.tsx");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var SideNavItem = function SideNavItem(props) {
  var href = props.href,
      icon = props.icon,
      title = props.title,
      children = props.children,
      onNavigate = props.onNavigate,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["href", "icon", "title", "children", "onNavigate"]);

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_4__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return href && router && router.pathname.startsWith(href);
  }),
      isCollapsed = _useState[0],
      setIsCollapsed = _useState[1];

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

  return __jsx("li", null, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: href,
    activeClassName: "active"
  }, __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.link,
    onClick: handleLinkClick
  }, rest), __jsx(_lib__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: icon,
    className: classes.icon
  }), __jsx("span", {
    className: classes.title
  }, title), children && __jsx(_lib__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: isCollapsed ? 'angleUp' : 'angleDown',
    className: classes.iconDropdown
  }))), children && isCollapsed && __jsx("ul", {
    className: classes.sublist
  }, children.map(function (sub) {
    return __jsx("li", {
      key: sub.href
    }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
      href: sub.href,
      activeClassName: "active"
    }, __jsx("a", {
      className: classes.sublink,
      onClick: onNavigate
    }, sub.title)));
  })));
};

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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-ga */ "../node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _components_Site__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Site */ "./components/Site.tsx");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var _default =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _App);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      return __jsx(BoldApp, this.props);
    }
  }]);

  return _default;
}(next_app__WEBPACK_IMPORTED_MODULE_6___default.a);



var BoldApp = function BoldApp(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].initialize('UA-139158849-1');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].pageview(window.location.pathname + window.location.search);
  }, [props.router.route]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var docsearch = window.docsearch;
    docsearch({
      apiKey: '4bd4039d7ff74e34ef26aff9f4a45f34',
      indexName: 'bold_',
      inputSelector: '#search-input',
      autocompleteOptions: {
        debug: false,
        hint: false,
        appendTo: '#search-wrapper'
      }
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
  }), __jsx("meta", {
    name: "google-site-verification",
    content: "9wtCJ3N0XgFLGgfGyveZ0DCYfh8JJpcICsiqBsh5YHk"
  }), __jsx("title", null, "Bold Design System"), __jsx("link", {
    href: "/image/favicon.png",
    rel: "icon"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700,700i",
    rel: "stylesheet"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/github.min.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
  })), __jsx(_components_Site__WEBPACK_IMPORTED_MODULE_9__["Site"], props), __jsx("script", {
    type: "text/javascript",
    src: "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
  }));
};

/***/ })

})
//# sourceMappingURL=_app.js.27cba78cccee81b7696e.hot-update.js.map