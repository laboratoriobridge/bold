webpackHotUpdate("static/development/pages/components/form.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/form/Form.demo.tsx":
/*!************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/form/Form.demo.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { FormRenderProps } from 'react-final-form'\n\nimport { Button, Cell, CheckboxField, Form, FormControl, Grid, HFlow, RadioField, TextField } from '../../../../lib'\n\nfunction FormDemo() {\n  const renderForm = (formProps: FormRenderProps) => {\n    return (\n      <form onSubmit={formProps.handleSubmit}>\n        <Grid wrap>\n          <Cell xs={6}>\n            <TextField label='First name' name='firstName' required />\n          </Cell>\n          <Cell xs={6}>\n            <TextField label='Last name' name='lastName' required />\n          </Cell>\n          <Cell xs={6}>\n            <TextField name='email' label='E-email' type='email' icon='emailFilled' />\n          </Cell>\n          <Cell xs={6}>\n            <FormControl label='Favorite color'>\n              <HFlow>\n                <RadioField name='color' value='red' label='Red' />\n                <RadioField name='color' value='green' label='Green' />\n                <RadioField name='color' value='blue' label='Blue' />\n              </HFlow>\n            </FormControl>\n          </Cell>\n          <Cell xs={12}>\n            <CheckboxField name='agreed' label='I agree to the terms of use' />\n          </Cell>\n          <Cell xs={12}>\n            <HFlow justifyContent='flex-end'>\n              <Button type='reset' skin='ghost' onClick={formProps.reset}>\n                Reset\n              </Button>\n              <Button type='submit' kind='primary' onClick={formProps.handleSubmit}>\n                Submit\n              </Button>\n            </HFlow>\n          </Cell>\n        </Grid>\n      </form>\n    )\n  }\n\n  return <Form render={renderForm} onSubmit={console.log} validate={validate} />\n}\n\nconst validate = (values: any) => {\n  const errors: any = {}\n\n  if (!values.firstName) {\n    errors.firstName = 'First name is required'\n  }\n\n  if (!values.lastName) {\n    errors.lastName = 'Last name is required'\n  }\n\n  return errors\n}\n\nexport default FormDemo\n");

/***/ }),

/***/ "./pages/components/form/Form.demo.tsx":
/*!*********************************************!*\
  !*** ./pages/components/form/Form.demo.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/form/Form.demo.tsx";



function FormDemo() {
  var renderForm = function renderForm(formProps) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: formProps.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      wrap: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "First name",
      name: "firstName",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "Last name",
      name: "lastName",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      name: "email",
      label: "E-email",
      type: "email",
      icon: "emailFilled",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      label: "Favorite color",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["HFlow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["RadioField"], {
      name: "color",
      value: "red",
      label: "Red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["RadioField"], {
      name: "color",
      value: "green",
      label: "Green",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["RadioField"], {
      name: "color",
      value: "blue",
      label: "Blue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["CheckboxField"], {
      name: "agreed",
      label: "I agree to the terms of use",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["HFlow"], {
      justifyContent: "flex-end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "reset",
      skin: "ghost",
      onClick: formProps.reset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Reset"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "submit",
      kind: "primary",
      onClick: formProps.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Submit")))));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    render: renderForm,
    onSubmit: console.log,
    validate: validate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  });
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
//# sourceMappingURL=form.js.ae1232435d60efddfdad.hot-update.js.map