webpackHotUpdate("static/development/pages/components/modal.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/ConfirmationModal.demo.tsx":
/*!**************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/ConfirmationModal.demo.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { useState } from 'react'\n\nimport { Button, Heading, HFlow, Icon, Modal, ModalBody, ModalFooter } from '../../../../lib'\n\nfunction ConfirmationDemo() {\n  const [isOpen, setIsOpen] = useState(false)\n\n  const handleButtonClick = () => setIsOpen(true)\n  const handleModalClose = () => setIsOpen(false)\n\n  return (\n    <>\n      <Button kind='primary' onClick={handleButtonClick}>\n        Open modal\n      </Button>\n      <Modal size='small' onClose={handleModalClose} open={isOpen}>\n        <ModalBody>\n          <HFlow alignItems='center'>\n            <Icon icon='infoCircleOutline' style={{ marginRight: '0.5rem' }} size={3} fill='info' />\n            <Heading level={1}>Confirmation Modal</Heading>\n          </HFlow>\n          <br />\n          <p>\n            Used to validate decisions or to obtain a second confirmation from the user. Usually, require \"yes\" or \"no\"\n            answers.\n          </p>\n        </ModalBody>\n        <ModalFooter>\n          <HFlow justifyContent='flex-end'>\n            <Button onClick={handleModalClose}>No</Button>\n            <Button kind='primary' onClick={handleModalClose}>\n              Yes\n            </Button>\n          </HFlow>\n        </ModalFooter>\n      </Modal>\n    </>\n  )\n}\n\nexport default ConfirmationDemo\n");

/***/ }),

/***/ "./pages/components/modal/ConfirmationModal.demo.tsx":
/*!***********************************************************!*\
  !*** ./pages/components/modal/ConfirmationModal.demo.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/modal/ConfirmationModal.demo.tsx";




function ConfirmationDemo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleButtonClick = function handleButtonClick() {
    return setIsOpen(true);
  };

  var handleModalClose = function handleModalClose() {
    return setIsOpen(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    kind: "primary",
    onClick: handleButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Open modal"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    size: "small",
    onClose: handleModalClose,
    open: isOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["HFlow"], {
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    icon: "infoCircleOutline",
    style: {
      marginRight: '0.5rem'
    },
    size: 3,
    fill: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    level: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Confirmation Modal")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Used to validate decisions or to obtain a second confirmation from the user. Usually, require \"yes\" or \"no\" answers.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["HFlow"], {
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleModalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "No"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    kind: "primary",
    onClick: handleModalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Yes")))));
}

/* harmony default export */ __webpack_exports__["default"] = (ConfirmationDemo);

/***/ })

})
//# sourceMappingURL=modal.js.197e401f1a8debc5e30a.hot-update.js.map