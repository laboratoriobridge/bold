webpackHotUpdate("static/development/pages/components/form.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Suggestion.demo.tsx":
/*!********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Suggestion.demo.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { useState } from 'react'\n\nimport { Select, Text, VFlow } from '../../../../lib'\n\nconst items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']\n\nfunction SuggestionDemo() {\n  const [value, setValue] = useState()\n\n  const handleChange = item => setValue(item)\n\n  const itemToString = (item: any) => item\n  const createNewItem = (inputValue: string) => inputValue\n\n  return (\n    <VFlow>\n      <Text>Selected item: {value || '[none]'}</Text>\n      <Select<string>\n        value={value}\n        label='Favorite pasta'\n        name='favorite pasta'\n        items={items}\n        onChange={setValue}\n        itemToString={itemToString}\n        createNewItem={createNewItem}\n        icon={null}\n        required\n      />\n    </VFlow>\n  )\n}\n\nexport default SuggestionDemo\n");

/***/ }),

/***/ "./pages/components/select/Suggestion.demo.tsx":
/*!*****************************************************!*\
  !*** ./pages/components/select/Suggestion.demo.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/select/Suggestion.demo.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza'];

function SuggestionDemo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(item) {
    return setValue(item);
  };

  var itemToString = function itemToString(item) {
    return item;
  };

  var createNewItem = function createNewItem(inputValue) {
    return inputValue;
  };

  return __jsx(_lib__WEBPACK_IMPORTED_MODULE_1__["VFlow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_lib__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Selected item: ", value || '[none]'), __jsx(_lib__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    value: value,
    label: "Favorite pasta",
    name: "favorite pasta",
    items: items,
    onChange: setValue,
    itemToString: itemToString,
    createNewItem: createNewItem,
    icon: null,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SuggestionDemo);

/***/ })

})
//# sourceMappingURL=form.js.b208f4a52a75b4b86f7d.hot-update.js.map