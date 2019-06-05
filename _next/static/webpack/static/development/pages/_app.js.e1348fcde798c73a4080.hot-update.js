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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BoldLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoldLogo */ "./components/BoldLogo.tsx");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideNav */ "./components/SideNav/index.ts");
var _jsxFileName = "/home/bonetti/workspace/bold/site/components/AppHeader.tsx";





function AppHeader(props) {
  var currentTheme = props.currentTheme,
      onThemeSwitch = props.onThemeSwitch;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BoldLogo__WEBPACK_IMPORTED_MODULE_3__["BoldLogo"], {
    "aria-label": "Bold Logo",
    style: {
      height: '2.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.search,
    id: "search-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    id: "search-input",
    style: classes.searchInput,
    type: "search",
    icon: "zoomOutline",
    iconPosition: "left",
    placeholder: "Search in bold design system...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    text: currentTheme === _lib__WEBPACK_IMPORTED_MODULE_2__["lightTheme"] ? 'Switch to dark mode' : 'Switch to light mode',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    skin: "ghost",
    size: "small",
    onClick: onThemeSwitch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    icon: "lightbulbFilled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
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
      width: "calc(".concat(_SideNav__WEBPACK_IMPORTED_MODULE_4__["SIDE_NAV_WIDTH"], "px - 2rem)"),
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

/***/ }),

/***/ "./components/PageLayout.tsx":
false,

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppHeader */ "./components/AppHeader.tsx");
/* harmony import */ var _SideNavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideNavItem */ "./components/SideNav/SideNavItem.tsx");

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/SideNav/SideNav.tsx";




function SideNav(props) {
  var pages = props.pages;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: classes.nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: classes.ul,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, pages.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SideNavItem__WEBPACK_IMPORTED_MODULE_4__["SideNavItem"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: link.href
    }, link, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  }))));
}
var SIDE_NAV_WIDTH = 288;

var createStyles = function createStyles(theme) {
  return {
    wrapper: {
      width: SIDE_NAV_WIDTH,
      flexShrink: 0
    },
    nav: {
      background: theme.pallete.surface.main,
      width: SIDE_NAV_WIDTH,
      borderRight: "1px solid ".concat(theme.pallete.divider),
      boxShadow: theme.shadows.outer[40],
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 0',
      marginTop: _AppHeader__WEBPACK_IMPORTED_MODULE_3__["APP_HEADER_HEIGHT"],
      position: 'fixed',
      zIndex: 10,
      overflow: 'auto',
      height: "calc(100vh - ".concat(_AppHeader__WEBPACK_IMPORTED_MODULE_3__["APP_HEADER_HEIGHT"], "px)"),
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
/* harmony import */ var _components_AppFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppFooter */ "./components/AppFooter.tsx");
/* harmony import */ var _components_AppHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppHeader */ "./components/AppHeader.tsx");
/* harmony import */ var _components_mdx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mdx */ "./components/mdx/index.tsx");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Page */ "./components/Page.tsx");
/* harmony import */ var _components_SideNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SideNav */ "./components/SideNav/index.ts");
/* harmony import */ var _components_useThemeSwitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/useThemeSwitch */ "./components/useThemeSwitch.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages */ "./pages.ts");


var _jsxFileName = "/home/bonetti/workspace/bold/site/components/Site.tsx";










var mdxComponents = {
  p: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"],
  a: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["Link"],
  img: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["Image"],
  h1: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["createHeading"](1),
  h2: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["createHeading"](2),
  h3: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["createHeading"](3),
  h4: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["createHeading"](4),
  h5: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["createHeading"](5),
  h6: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["createHeading"](6),
  ul: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["UnorderedList"],
  ol: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["OrderedList"],
  blockquote: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["Blockquote"],
  table: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["Table"],
  pre: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["Pre"],
  code: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["Code"],
  inlineCode: _components_mdx__WEBPACK_IMPORTED_MODULE_7__["Code"]
};
function Site(props) {
  var _useThemeSwitch = Object(_components_useThemeSwitch__WEBPACK_IMPORTED_MODULE_10__["useThemeSwitch"])(),
      _useThemeSwitch2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useThemeSwitch, 2),
      currentTheme = _useThemeSwitch2[0],
      switchTheme = _useThemeSwitch2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: mdxComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AppHeader__WEBPACK_IMPORTED_MODULE_6__["AppHeader"], {
    currentTheme: currentTheme,
    onThemeSwitch: switchTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SiteContainer, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))));
}
function SiteContainer(props) {
  var _ref = props,
      Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_4__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var route = props.router.route;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SideNav__WEBPACK_IMPORTED_MODULE_9__["SideNav"], {
    pages: _pages__WEBPACK_IMPORTED_MODULE_11__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, route === '/' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_8__["Page"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AppFooter__WEBPACK_IMPORTED_MODULE_5__["AppFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })));
}

var createStyles = function createStyles() {
  return {
    container: {
      display: 'flex',
      minHeight: '100vh'
    },
    content: {
      paddingTop: "calc(".concat(_components_AppHeader__WEBPACK_IMPORTED_MODULE_6__["APP_HEADER_HEIGHT"], "px)"),
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

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
      maxWidth: 800,
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
      maxWidth: 800,
      margin: '0 0 2rem 0'
    },
    image: {
      maxWidth: 960,
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
//# sourceMappingURL=_app.js.e1348fcde798c73a4080.hot-update.js.map