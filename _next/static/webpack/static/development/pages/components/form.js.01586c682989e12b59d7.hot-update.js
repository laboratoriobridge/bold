webpackHotUpdate("static/development/pages/components/form.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/form/FormFinal.demo.tsx":
/*!*****************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/form/FormFinal.demo.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { useState } from 'react'\n\nimport { Button, Cell, Checkbox, FormControl, Grid, HFlow, Radio, TextInput } from '../../../../lib'\n\nfunction FormDemo() {\n  const [formState, setFormState] = useState({\n    firstName: '',\n    lastName: '',\n    email: '',\n    color: '',\n    agreed: false,\n  })\n\n  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault()\n    alert(JSON.stringify(formState, null, 2))\n  }\n\n  const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {\n    const el = e.target\n\n    setFormState(state => ({\n      ...state,\n      [name]: el.type === 'checkbox' ? el.checked : el.value,\n    }))\n  }\n\n  return (\n    <>\n      <form onSubmit={handleSubmit}>\n        <Grid wrap>\n          <Cell xs={6}>\n            <FormControl label='First name'>\n              <TextInput\n                name='firstName'\n                placeholder='Enter your first name'\n                value={formState.firstName}\n                onChange={handleChange('firstName')}\n                required\n              />\n            </FormControl>\n          </Cell>\n          <Cell xs={6}>\n            <FormControl label='Last name'>\n              <TextInput\n                name='lastName'\n                placeholder='Enter your last name'\n                value={formState.lastName}\n                onChange={handleChange('lastName')}\n                required\n              />\n            </FormControl>\n          </Cell>\n          <Cell xs={6}>\n            <FormControl label='E-mail'>\n              <TextInput\n                name='email'\n                type='email'\n                placeholder='Enter your e-mail'\n                value={formState.email}\n                onChange={handleChange('email')}\n              />\n            </FormControl>\n          </Cell>\n          <Cell xs={6}>\n            <FormControl label='Favorite color'>\n              <HFlow>\n                <Radio name='color' value='red' label='Red' onChange={handleChange('color')} />\n                <Radio name='color' value='green' label='Green' onChange={handleChange('color')} />\n                <Radio name='color' value='blue' label='Blue' onChange={handleChange('color')} />\n              </HFlow>\n            </FormControl>\n          </Cell>\n          <Cell xs={12}>\n            <Checkbox name='agreed' label='I agree to the terms of use' onChange={handleChange('agreed')} />\n          </Cell>\n          <Cell xs={12}>\n            <HFlow justifyContent='flex-end'>\n              <Button type='reset' skin='outline'>\n                Reset\n              </Button>\n              <Button type='submit' kind='primary'>\n                Submit\n              </Button>\n            </HFlow>\n          </Cell>\n        </Grid>\n      </form>\n\n      <pre>{JSON.stringify(formState, null, 2)}</pre>\n    </>\n  )\n}\n\nconst validate = (values: any) => {\n  const errors: any = {}\n\n  if (!values.firstName) {\n    errors.firstName = 'First name is required'\n  }\n\n  if (!values.lastName) {\n    errors.lastName = 'Last name is required'\n  }\n\n  return errors\n}\n\nexport default FormDemo\n");

/***/ }),

/***/ "./ sync recursive ./!./!../node_modules/raw-loader/dist/cjs.js!./ \\.demo.tsx$":
/*!******************************************************************!*\
  !*** . sync !../node_modules/raw-loader/dist/cjs.js \.demo.tsx$ ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/components/alert/AlertDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/alert/AlertDefault.demo.tsx",
	"./pages/components/breadcrumb/breadcrumb.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/breadcrumb/breadcrumb.demo.tsx",
	"./pages/components/button/ButtonIcons.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonIcons.demo.tsx",
	"./pages/components/button/ButtonLoading.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonLoading.demo.tsx",
	"./pages/components/button/ButtonSizes.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonSizes.demo.tsx",
	"./pages/components/button/ButtonSkins.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonSkins.demo.tsx",
	"./pages/components/checkbox/Checkbox.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/checkbox/Checkbox.demo.tsx",
	"./pages/components/content-switch/ContentSwitch.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/content-switch/ContentSwitch.demo.tsx",
	"./pages/components/date-picker/DatePickerExample.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/date-picker/DatePickerExample.demo.tsx",
	"./pages/components/dropdown/DropdownButton.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/dropdown/DropdownButton.demo.tsx",
	"./pages/components/dropdown/DropdownCustomAnchor.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/dropdown/DropdownCustomAnchor.demo.tsx",
	"./pages/components/file-uploader/FileUploader.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/file-uploader/FileUploader.demo.tsx",
	"./pages/components/form/Form.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/form/Form.demo.tsx",
	"./pages/components/form/FormFinal.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/form/FormFinal.demo.tsx",
	"./pages/components/link/Link.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/link/Link.demo.tsx",
	"./pages/components/modal/ConfirmationModal.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/ConfirmationModal.demo.tsx",
	"./pages/components/modal/DangerModal.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/DangerModal.demo.tsx",
	"./pages/components/modal/InformationModal.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/InformationModal.demo.tsx",
	"./pages/components/multi-select/MultiSelect.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/multi-select/MultiSelect.demo.tsx",
	"./pages/components/paginator/Paginator.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/paginator/Paginator.demo.tsx",
	"./pages/components/radio-button/RadioExample.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/radio-button/RadioExample.demo.tsx",
	"./pages/components/search/Search.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/search/Search.demo.tsx",
	"./pages/components/select/Select.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Select.demo.tsx",
	"./pages/components/switch/SwitchDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/switch/SwitchDefault.demo.tsx",
	"./pages/components/table/TableDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/table/TableDefault.demo.tsx",
	"./pages/components/tabs/Tab.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tabs/Tab.demo.tsx",
	"./pages/components/tag/TagDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tag/TagDefault.demo.tsx",
	"./pages/components/tag/TagIcon.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tag/TagIcon.demo.tsx",
	"./pages/components/tag/TagRemovable.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tag/TagRemovable.demo.tsx",
	"./pages/components/text-input/TextArea.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/text-input/TextArea.demo.tsx",
	"./pages/components/text-input/TextInput.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/text-input/TextInput.demo.tsx",
	"./pages/components/tooltip/TooltipDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tooltip/TooltipDefault.demo.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
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
	"./pages/components/breadcrumb/breadcrumb.demo.tsx": "./pages/components/breadcrumb/breadcrumb.demo.tsx",
	"./pages/components/button/ButtonIcons.demo.tsx": "./pages/components/button/ButtonIcons.demo.tsx",
	"./pages/components/button/ButtonLoading.demo.tsx": "./pages/components/button/ButtonLoading.demo.tsx",
	"./pages/components/button/ButtonSizes.demo.tsx": "./pages/components/button/ButtonSizes.demo.tsx",
	"./pages/components/button/ButtonSkins.demo.tsx": "./pages/components/button/ButtonSkins.demo.tsx",
	"./pages/components/checkbox/Checkbox.demo.tsx": "./pages/components/checkbox/Checkbox.demo.tsx",
	"./pages/components/content-switch/ContentSwitch.demo.tsx": "./pages/components/content-switch/ContentSwitch.demo.tsx",
	"./pages/components/date-picker/DatePickerExample.demo.tsx": "./pages/components/date-picker/DatePickerExample.demo.tsx",
	"./pages/components/dropdown/DropdownButton.demo.tsx": "./pages/components/dropdown/DropdownButton.demo.tsx",
	"./pages/components/dropdown/DropdownCustomAnchor.demo.tsx": "./pages/components/dropdown/DropdownCustomAnchor.demo.tsx",
	"./pages/components/file-uploader/FileUploader.demo.tsx": "./pages/components/file-uploader/FileUploader.demo.tsx",
	"./pages/components/form/Form.demo.tsx": "./pages/components/form/Form.demo.tsx",
	"./pages/components/form/FormFinal.demo.tsx": "./pages/components/form/FormFinal.demo.tsx",
	"./pages/components/link/Link.demo.tsx": "./pages/components/link/Link.demo.tsx",
	"./pages/components/modal/ConfirmationModal.demo.tsx": "./pages/components/modal/ConfirmationModal.demo.tsx",
	"./pages/components/modal/DangerModal.demo.tsx": "./pages/components/modal/DangerModal.demo.tsx",
	"./pages/components/modal/InformationModal.demo.tsx": "./pages/components/modal/InformationModal.demo.tsx",
	"./pages/components/multi-select/MultiSelect.demo.tsx": "./pages/components/multi-select/MultiSelect.demo.tsx",
	"./pages/components/paginator/Paginator.demo.tsx": "./pages/components/paginator/Paginator.demo.tsx",
	"./pages/components/radio-button/RadioExample.demo.tsx": "./pages/components/radio-button/RadioExample.demo.tsx",
	"./pages/components/search/Search.demo.tsx": "./pages/components/search/Search.demo.tsx",
	"./pages/components/select/Select.demo.tsx": "./pages/components/select/Select.demo.tsx",
	"./pages/components/switch/SwitchDefault.demo.tsx": "./pages/components/switch/SwitchDefault.demo.tsx",
	"./pages/components/table/TableDefault.demo.tsx": "./pages/components/table/TableDefault.demo.tsx",
	"./pages/components/tabs/Tab.demo.tsx": "./pages/components/tabs/Tab.demo.tsx",
	"./pages/components/tag/TagDefault.demo.tsx": "./pages/components/tag/TagDefault.demo.tsx",
	"./pages/components/tag/TagIcon.demo.tsx": "./pages/components/tag/TagIcon.demo.tsx",
	"./pages/components/tag/TagRemovable.demo.tsx": "./pages/components/tag/TagRemovable.demo.tsx",
	"./pages/components/text-input/TextArea.demo.tsx": "./pages/components/text-input/TextArea.demo.tsx",
	"./pages/components/text-input/TextInput.demo.tsx": "./pages/components/text-input/TextInput.demo.tsx",
	"./pages/components/tooltip/TooltipDefault.demo.tsx": "./pages/components/tooltip/TooltipDefault.demo.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive \\.demo.tsx$";

/***/ }),

/***/ "./pages/components/form/FormFinal.demo.tsx":
/*!**************************************************!*\
  !*** ./pages/components/form/FormFinal.demo.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");




var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/form/FormFinal.demo.tsx";




function FormDemo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    firstName: '',
    lastName: '',
    email: '',
    color: '',
    agreed: false
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(formState, null, 2));
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var el = e.target;
      setFormState(function (state) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, el.type === 'checkbox' ? el.checked : el.value));
      });
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    wrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    label: "First name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["TextInput"], {
    name: "firstName",
    placeholder: "Enter your first name",
    value: formState.firstName,
    onChange: handleChange('firstName'),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    label: "Last name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["TextInput"], {
    name: "lastName",
    placeholder: "Enter your last name",
    value: formState.lastName,
    onChange: handleChange('lastName'),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    label: "E-mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["TextInput"], {
    name: "email",
    type: "email",
    placeholder: "Enter your e-mail",
    value: formState.email,
    onChange: handleChange('email'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    label: "Favorite color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["HFlow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
    name: "color",
    value: "red",
    label: "Red",
    onChange: handleChange('color'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
    name: "color",
    value: "green",
    label: "Green",
    onChange: handleChange('color'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Radio"], {
    name: "color",
    value: "blue",
    label: "Blue",
    onChange: handleChange('color'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
    name: "agreed",
    label: "I agree to the terms of use",
    onChange: handleChange('agreed'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["HFlow"], {
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "reset",
    skin: "outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Reset"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    kind: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Submit"))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(formState, null, 2)));
}

var validate = function validate(values) {
  var errors = {};

  if (!values.firstName) {
    errors.firstName = 'First name is required';
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (FormDemo);

/***/ })

})
//# sourceMappingURL=form.js.01586c682989e12b59d7.hot-update.js.map