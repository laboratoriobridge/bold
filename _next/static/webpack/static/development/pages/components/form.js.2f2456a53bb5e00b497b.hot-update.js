webpackHotUpdate("static/development/pages/components/form.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Select.demo.tsx":
/*!****************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Select.demo.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { FormControl, Select } from '../../../../lib'\n\nconst items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']\n\nfunction SelectDemo() {\n  const [value, setValue] = useState()\n\n  const itemToString = (item: any) => item\n\n  return (\n    <VFlow>\n      <Text>Selected item: {value || '[none]'}</Text>\n      <Select<string>\n        label='Favorite pasta'\n        items={items}\n        value={value}\n        onChange={setValue}\n        itemToString={itemToString}\n        name='favorite pasta'\n        required\n      />\n    </VFlow>\n  )\n}\n\nexport default SelectDemo\n");

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

  return __jsx(VFlow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Selected item: ", value || '[none]'), __jsx(_lib__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    label: "Favorite pasta",
    items: items,
    value: value,
    onChange: setValue,
    itemToString: itemToString,
    name: "favorite pasta",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SelectDemo);

/***/ })

})
//# sourceMappingURL=form.js.2f2456a53bb5e00b497b.hot-update.js.map