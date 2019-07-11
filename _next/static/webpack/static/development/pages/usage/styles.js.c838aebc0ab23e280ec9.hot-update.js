webpackHotUpdate("static/development/pages/usage/styles.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/usage/i18n/LocaleProvider.demo.tsx":
/*!*****************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/usage/i18n/LocaleProvider.demo.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { LocaleContext, useStyles } from '../../../../lib'\nimport { useLocale } from '../../../../lib/i18n/LocaleContext'\nimport ptBr from '../../../../lib/i18n/locales/pt-BR'\n\nfunction LocaleProviderDemo() {\n  return (\n    <LocaleContext.Provider value={ptBr}>\n      <App />\n    </LocaleContext.Provider>\n  )\n}\n\nfunction App() {\n  const locale = useLocale()\n  const { css } = useStyles()\n\n  return <pre>{JSON.stringify(locale)}</pre>\n}\n\nexport default LocaleProviderDemo\n");

/***/ }),

/***/ "./pages/usage/i18n/LocaleProvider.demo.tsx":
/*!**************************************************!*\
  !*** ./pages/usage/i18n/LocaleProvider.demo.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");
/* harmony import */ var _lib_i18n_LocaleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/i18n/LocaleContext */ "../lib/i18n/LocaleContext.js");
/* harmony import */ var _lib_i18n_locales_pt_BR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../lib/i18n/locales/pt-BR */ "../lib/i18n/locales/pt-BR.js");

var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/usage/i18n/LocaleProvider.demo.tsx";





function LocaleProviderDemo() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["LocaleContext"].Provider, {
    value: _lib_i18n_locales_pt_BR__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

function App() {
  var locale = Object(_lib_i18n_LocaleContext__WEBPACK_IMPORTED_MODULE_3__["useLocale"])();

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(),
      css = _useStyles.css;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(locale));
}

/* harmony default export */ __webpack_exports__["default"] = (LocaleProviderDemo);

/***/ })

})
//# sourceMappingURL=styles.js.c838aebc0ab23e280ec9.hot-update.js.map