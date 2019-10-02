webpackHotUpdate("static/development/pages/components/select.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Suggestion.demo.tsx":
/*!********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Suggestion.demo.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { useState } from 'react'\n\nimport { Select, Text, VFlow } from '../../../../lib'\n\nconst items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']\n\nfunction SuggestionDemo() {\n  const [value, setValue] = useState()\n\n  const itemToString = (item: any) => item\n  const createNewItem = (inputValue: string) => inputValue\n\n  return (\n    <VFlow>\n      <Text>Selected item: {value || '[none]'}</Text>\n      <Select<string>\n        value={value}\n        label='Favorite pasta'\n        name='favorite pasta'\n        items={items}\n        onChange={setValue}\n        itemToString={itemToString}\n        createNewItem={createNewItem}\n        icon={null}\n        required\n      />\n    </VFlow>\n  )\n}\n\nexport default SuggestionDemo\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Typeahead.demo.tsx":
false,

/***/ "./ sync recursive ./!./!../node_modules/raw-loader/dist/cjs.js!./ \\.demo.tsx$":
/*!******************************************************************!*\
  !*** . sync !../node_modules/raw-loader/dist/cjs.js \.demo.tsx$ ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/components/alert/AlertDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/alert/AlertDefault.demo.tsx",
	"./pages/components/breadcrumb/Breadcrumb.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/breadcrumb/Breadcrumb.demo.tsx",
	"./pages/components/button/ButtonIcons.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonIcons.demo.tsx",
	"./pages/components/button/ButtonLoading.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonLoading.demo.tsx",
	"./pages/components/button/ButtonSizes.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonSizes.demo.tsx",
	"./pages/components/button/ButtonSkins.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonSkins.demo.tsx",
	"./pages/components/checkbox/Checkbox.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/checkbox/Checkbox.demo.tsx",
	"./pages/components/content-switch/ContentSwitch.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/content-switch/ContentSwitch.demo.tsx",
	"./pages/components/date-picker/DatePickerExample.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/date-picker/DatePickerExample.demo.tsx",
	"./pages/components/dropdown/DropdownExample.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/dropdown/DropdownExample.demo.tsx",
	"./pages/components/file-uploader/FileUploader.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/file-uploader/FileUploader.demo.tsx",
	"./pages/components/form/Form.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/form/Form.demo.tsx",
	"./pages/components/link/Link.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/link/Link.demo.tsx",
	"./pages/components/modal/ConfirmationModal.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/ConfirmationModal.demo.tsx",
	"./pages/components/modal/DangerModal.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/DangerModal.demo.tsx",
	"./pages/components/modal/InformationModal.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/InformationModal.demo.tsx",
	"./pages/components/multi-select/MultiSelect.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/multi-select/MultiSelect.demo.tsx",
	"./pages/components/paginator/Paginator.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/paginator/Paginator.demo.tsx",
	"./pages/components/radio-button/RadioExample.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/radio-button/RadioExample.demo.tsx",
	"./pages/components/search/Search.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/search/Search.demo.tsx",
	"./pages/components/select/Select.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Select.demo.tsx",
	"./pages/components/select/Suggestion.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Suggestion.demo.tsx",
	"./pages/components/switch/SwitchDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/switch/SwitchDefault.demo.tsx",
	"./pages/components/table/DataTable.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/table/DataTable.demo.tsx",
	"./pages/components/table/PagedTable.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/table/PagedTable.demo.tsx",
	"./pages/components/tabs/Tab.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tabs/Tab.demo.tsx",
	"./pages/components/tag/TagDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tag/TagDefault.demo.tsx",
	"./pages/components/tag/TagIcon.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tag/TagIcon.demo.tsx",
	"./pages/components/tag/TagRemovable.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tag/TagRemovable.demo.tsx",
	"./pages/components/text-field/TextArea.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/text-field/TextArea.demo.tsx",
	"./pages/components/text-field/TextField.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/text-field/TextField.demo.tsx",
	"./pages/components/tooltip/TooltipDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tooltip/TooltipDefault.demo.tsx",
	"./pages/usage/i18n/LocaleProvider.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/usage/i18n/LocaleProvider.demo.tsx",
	"./pages/usage/styles/Css.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/usage/styles/Css.demo.tsx",
	"./pages/usage/styles/UseStyles.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/usage/styles/UseStyles.demo.tsx",
	"./pages/usage/theme/AccessTheme.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/usage/theme/AccessTheme.demo.tsx",
	"./pages/usage/theme/CustomTheme.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/usage/theme/CustomTheme.demo.tsx",
	"./pages/usage/theme/Customize.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/usage/theme/Customize.demo.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive ./!./!../node_modules/raw-loader/dist/cjs.js!./ \\.demo.tsx$";

/***/ }),

/***/ "./ sync recursive \\.demo.tsx$":
/*!**************************!*\
  !*** . sync \.demo.tsx$ ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/components/alert/AlertDefault.demo.tsx": "./pages/components/alert/AlertDefault.demo.tsx",
	"./pages/components/breadcrumb/Breadcrumb.demo.tsx": "./pages/components/breadcrumb/Breadcrumb.demo.tsx",
	"./pages/components/button/ButtonIcons.demo.tsx": "./pages/components/button/ButtonIcons.demo.tsx",
	"./pages/components/button/ButtonLoading.demo.tsx": "./pages/components/button/ButtonLoading.demo.tsx",
	"./pages/components/button/ButtonSizes.demo.tsx": "./pages/components/button/ButtonSizes.demo.tsx",
	"./pages/components/button/ButtonSkins.demo.tsx": "./pages/components/button/ButtonSkins.demo.tsx",
	"./pages/components/checkbox/Checkbox.demo.tsx": "./pages/components/checkbox/Checkbox.demo.tsx",
	"./pages/components/content-switch/ContentSwitch.demo.tsx": "./pages/components/content-switch/ContentSwitch.demo.tsx",
	"./pages/components/date-picker/DatePickerExample.demo.tsx": "./pages/components/date-picker/DatePickerExample.demo.tsx",
	"./pages/components/dropdown/DropdownExample.demo.tsx": "./pages/components/dropdown/DropdownExample.demo.tsx",
	"./pages/components/file-uploader/FileUploader.demo.tsx": "./pages/components/file-uploader/FileUploader.demo.tsx",
	"./pages/components/form/Form.demo.tsx": "./pages/components/form/Form.demo.tsx",
	"./pages/components/link/Link.demo.tsx": "./pages/components/link/Link.demo.tsx",
	"./pages/components/modal/ConfirmationModal.demo.tsx": "./pages/components/modal/ConfirmationModal.demo.tsx",
	"./pages/components/modal/DangerModal.demo.tsx": "./pages/components/modal/DangerModal.demo.tsx",
	"./pages/components/modal/InformationModal.demo.tsx": "./pages/components/modal/InformationModal.demo.tsx",
	"./pages/components/multi-select/MultiSelect.demo.tsx": "./pages/components/multi-select/MultiSelect.demo.tsx",
	"./pages/components/paginator/Paginator.demo.tsx": "./pages/components/paginator/Paginator.demo.tsx",
	"./pages/components/radio-button/RadioExample.demo.tsx": "./pages/components/radio-button/RadioExample.demo.tsx",
	"./pages/components/search/Search.demo.tsx": "./pages/components/search/Search.demo.tsx",
	"./pages/components/select/Select.demo.tsx": "./pages/components/select/Select.demo.tsx",
	"./pages/components/select/Suggestion.demo.tsx": "./pages/components/select/Suggestion.demo.tsx",
	"./pages/components/switch/SwitchDefault.demo.tsx": "./pages/components/switch/SwitchDefault.demo.tsx",
	"./pages/components/table/DataTable.demo.tsx": "./pages/components/table/DataTable.demo.tsx",
	"./pages/components/table/PagedTable.demo.tsx": "./pages/components/table/PagedTable.demo.tsx",
	"./pages/components/tabs/Tab.demo.tsx": "./pages/components/tabs/Tab.demo.tsx",
	"./pages/components/tag/TagDefault.demo.tsx": "./pages/components/tag/TagDefault.demo.tsx",
	"./pages/components/tag/TagIcon.demo.tsx": "./pages/components/tag/TagIcon.demo.tsx",
	"./pages/components/tag/TagRemovable.demo.tsx": "./pages/components/tag/TagRemovable.demo.tsx",
	"./pages/components/text-field/TextArea.demo.tsx": "./pages/components/text-field/TextArea.demo.tsx",
	"./pages/components/text-field/TextField.demo.tsx": "./pages/components/text-field/TextField.demo.tsx",
	"./pages/components/tooltip/TooltipDefault.demo.tsx": "./pages/components/tooltip/TooltipDefault.demo.tsx",
	"./pages/usage/i18n/LocaleProvider.demo.tsx": "./pages/usage/i18n/LocaleProvider.demo.tsx",
	"./pages/usage/styles/Css.demo.tsx": "./pages/usage/styles/Css.demo.tsx",
	"./pages/usage/styles/UseStyles.demo.tsx": "./pages/usage/styles/UseStyles.demo.tsx",
	"./pages/usage/theme/AccessTheme.demo.tsx": "./pages/usage/theme/AccessTheme.demo.tsx",
	"./pages/usage/theme/CustomTheme.demo.tsx": "./pages/usage/theme/CustomTheme.demo.tsx",
	"./pages/usage/theme/Customize.demo.tsx": "./pages/usage/theme/Customize.demo.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive \\.demo.tsx$";

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

  var itemToString = function itemToString(item) {
    return item;
  };

  var createNewItem = function createNewItem(inputValue) {
    return inputValue;
  };

  return __jsx(_lib__WEBPACK_IMPORTED_MODULE_1__["VFlow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_lib__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
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
      lineNumber: 16
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SuggestionDemo);

/***/ }),

/***/ "./pages/components/select/Typeahead.demo.tsx":
false

})
//# sourceMappingURL=select.js.8e5bb2a2607acddbdf5e.hot-update.js.map