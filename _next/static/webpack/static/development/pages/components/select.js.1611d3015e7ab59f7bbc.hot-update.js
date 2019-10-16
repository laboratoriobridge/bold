webpackHotUpdate("static/development/pages/components/select.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Select.demo.tsx":
/*!****************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Select.demo.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { useState } from 'react'\n\nimport { FormControl, Select, Text, VFlow } from '../../../../lib'\n\nconst items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']\n\nfunction SelectDemo() {\n  const [value, setValue] = useState()\n\n  const handleChange = item => setValue(item)\n\n  const itemToString = (item: any) => item\n\n  return (\n    <VFlow>\n      <Text>Selected item: {value || '[none]'}</Text>\n      <Select<string>\n        label='Favorite pasta'\n        items={items}\n        value={value}\n        onChange={handleChange}\n        itemToString={itemToString}\n        name='favorite pasta'\n        required\n      />\n    </VFlow>\n  )\n}\n\nexport default SelectDemo\n");

/***/ }),

/***/ "./pages/components/select/Select.demo.tsx":
/*!*************************************************!*\
  !*** ./pages/components/select/Select.demo.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/select/Select.demo.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza'];

function SelectDemo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(item) {
    return setValue(item);
  };

  var itemToString = function itemToString(item) {
    return item;
  };

  return __jsx(_lib__WEBPACK_IMPORTED_MODULE_1__["VFlow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_lib__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Selected item: ", value || '[none]'), __jsx(_lib__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    label: "Favorite pasta",
    items: items,
    value: value,
    onChange: handleChange,
    itemToString: itemToString,
    name: "favorite pasta",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SelectDemo);

/***/ })

})
//# sourceMappingURL=select.js.1611d3015e7ab59f7bbc.hot-update.js.map