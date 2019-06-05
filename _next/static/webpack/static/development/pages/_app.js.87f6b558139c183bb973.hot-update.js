webpackHotUpdate("static/development/pages/_app.js",{

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "../node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "../node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "../node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "../node_modules/define-properties/index.js":
false,

/***/ "../node_modules/function-bind/implementation.js":
false,

/***/ "../node_modules/function-bind/index.js":
false,

/***/ "../node_modules/has-symbols/shams.js":
false,

/***/ "../node_modules/has/src/index.js":
false,

/***/ "../node_modules/next/dist/client/link.js":
false,

/***/ "../node_modules/next/link.js":
false,

/***/ "../node_modules/object-keys/implementation.js":
false,

/***/ "../node_modules/object-keys/index.js":
false,

/***/ "../node_modules/object-keys/isArguments.js":
false,

/***/ "../node_modules/object.assign/implementation.js":
false,

/***/ "../node_modules/object.assign/index.js":
false,

/***/ "../node_modules/object.assign/polyfill.js":
false,

/***/ "../node_modules/object.assign/shim.js":
false,

/***/ "../node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "../node_modules/prop-types-exact/build/index.js":
false,

/***/ "./components/ActiveLink.tsx":
false,

/***/ "./components/AppHeader.tsx":
false,

/***/ "./components/BoldLogo.tsx":
false,

/***/ "./components/SideNav/SideNav.tsx":
false,

/***/ "./components/SideNav/SideNavItem.tsx":
false,

/***/ "./components/SideNav/index.ts":
false,

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
/* harmony import */ var _components_useThemeSwitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/useThemeSwitch */ "./components/useThemeSwitch.ts");


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
  var _useThemeSwitch = Object(_components_useThemeSwitch__WEBPACK_IMPORTED_MODULE_7__["useThemeSwitch"])(),
      _useThemeSwitch2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useThemeSwitch, 1),
      currentTheme = _useThemeSwitch2[0];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: mdxComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SiteContainer, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))));
}
function SiteContainer(props) {
  var _ref = props,
      Component = _ref.Component,
      pageProps = _ref.pageProps;
  var route = props.router.route;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, route === '/' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_6__["Page"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=_app.js.87f6b558139c183bb973.hot-update.js.map