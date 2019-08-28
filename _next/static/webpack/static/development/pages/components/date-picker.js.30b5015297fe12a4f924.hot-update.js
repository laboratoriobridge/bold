webpackHotUpdate("static/development/pages/components/date-picker.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/date-picker/DatePickerExample.demo.tsx":
/*!********************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/date-picker/DatePickerExample.demo.tsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { useState } from 'react'\n\nimport { DateField } from '../../../../lib'\n\nfunction DatePickerExample() {\n  const [value, setValue] = useState<Date>()\n\n  const handleChange = (selectedDate: Date) => setValue(selectedDate)\n\n  return <DateField label='Birthday date' value={value} onChange={handleChange} />\n}\n\nexport default DatePickerExample\n");

/***/ }),

/***/ "./pages/components/date-picker/DatePickerExample.demo.tsx":
/*!*****************************************************************!*\
  !*** ./pages/components/date-picker/DatePickerExample.demo.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/date-picker/DatePickerExample.demo.tsx";




function DatePickerExample() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(selectedDate) {
    return setValue(selectedDate);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["DateField"], {
    label: "Birthday date",
    value: value,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DatePickerExample);

/***/ })

})
//# sourceMappingURL=date-picker.js.30b5015297fe12a4f924.hot-update.js.map