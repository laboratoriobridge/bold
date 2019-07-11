webpackHotUpdate("static/development/pages/usage/styles.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/usage/i18n/LocaleProvider.demo.tsx":
/*!*****************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/usage/i18n/LocaleProvider.demo.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { LocaleContext, Paginator } from '../../../../lib'\nimport ptBr from '../../../../lib/i18n/locales/pt-BR'\n\n// Using Paginator as example since it uses strings from locale config internally\n\nfunction LocaleProviderDemo() {\n  return (\n    <LocaleContext.Provider value={ptBr}>\n      <Paginator page={5} total={10} />\n    </LocaleContext.Provider>\n  )\n}\n\nexport default LocaleProviderDemo\n");

/***/ }),

/***/ "./pages/usage/i18n/LocaleProvider.demo.tsx":
/*!**************************************************!*\
  !*** ./pages/usage/i18n/LocaleProvider.demo.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");
/* harmony import */ var _lib_i18n_locales_pt_BR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/i18n/locales/pt-BR */ "../lib/i18n/locales/pt-BR.js");
var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/usage/i18n/LocaleProvider.demo.tsx";


 // Using Paginator as example since it uses strings from locale config internally

function LocaleProviderDemo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["LocaleContext"].Provider, {
    value: _lib_i18n_locales_pt_BR__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Paginator"], {
    page: 5,
    total: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LocaleProviderDemo);

/***/ })

})
//# sourceMappingURL=styles.js.79246333df95df8f6a09.hot-update.js.map