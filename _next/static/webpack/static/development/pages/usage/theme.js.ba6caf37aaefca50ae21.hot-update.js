webpackHotUpdate("static/development/pages/usage/theme.js",{

/***/ "../lib/i18n/locales/pt-BR.js":
/*!************************************!*\
  !*** ../lib/i18n/locales/pt-BR.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
    alert: {
        close: 'Fechar',
    },
    calendar: {
        nextMonth: 'Próximo mês',
        previousMonth: 'Mês anterior',
        nextYear: 'Próximo ano',
        previousYear: 'Ano anterior',
    },
    formControl: {
        required: 'Campo obrigatório',
    },
    modal: {
        close: 'Fechar',
    },
    paginator: {
        of: 'de',
        previousPage: 'Página anterior',
        nextPage: 'Próxima página',
        currentPage: 'Página atual',
    },
    select: {
        removeItem: 'Remover',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (locale);
//# sourceMappingURL=pt-BR.js.map

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/usage/i18n/LocaleProvider.demo.tsx":
/*!*****************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/usage/i18n/LocaleProvider.demo.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { LocaleContext, Paginator, useStyles } from '../../../../lib'\nimport { useLocale } from '../../../../lib/i18n/LocaleContext'\nimport ptBr from '../../../../lib/i18n/locales/pt-BR'\n\nfunction LocaleProviderDemo() {\n  return (\n    <LocaleContext.Provider value={ptBr}>\n      <Paginator />\n    </LocaleContext.Provider>\n  )\n}\n\nexport default LocaleProviderDemo\n");

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




function LocaleProviderDemo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["LocaleContext"].Provider, {
    value: _lib_i18n_locales_pt_BR__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Paginator"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LocaleProviderDemo);

/***/ })

})
//# sourceMappingURL=theme.js.ba6caf37aaefca50ae21.hot-update.js.map