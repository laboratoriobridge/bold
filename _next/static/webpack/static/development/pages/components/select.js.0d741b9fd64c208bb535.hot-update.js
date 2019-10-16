webpackHotUpdate("static/development/pages/components/select.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Select.demo.tsx":
/*!****************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Select.demo.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { FormControl, Select } from '../../../../lib'\n\nconst items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']\n\nfunction SelectDemo() {\n  const [value, setValue] = useState()\n\n  const itemToString = (item: any) => item\n\n  return (\n    <Select<string> label='Favorite pasta' items={items} itemToString={itemToString} name='favorite pasta' required />\n  )\n}\n\nexport default SelectDemo\n");

/***/ }),

/***/ "./pages/components/select/Select.demo.tsx":
/*!*************************************************!*\
  !*** ./pages/components/select/Select.demo.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/select/Select.demo.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza'];

function SelectDemo() {
  var _useState = useState(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var itemToString = function itemToString(item) {
    return item;
  };

  return __jsx(_lib__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    label: "Favorite pasta",
    items: items,
    itemToString: itemToString,
    name: "favorite pasta",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (SelectDemo);

/***/ })

})
//# sourceMappingURL=select.js.0d741b9fd64c208bb535.hot-update.js.map