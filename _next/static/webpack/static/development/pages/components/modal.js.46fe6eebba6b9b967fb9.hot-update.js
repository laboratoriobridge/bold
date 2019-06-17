webpackHotUpdate("static/development/pages/components/modal.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/DangerModal.demo.tsx":
/*!********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/DangerModal.demo.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { useState } from 'react'\n\nimport { Button, Heading, HFlow, Icon, Modal, ModalBody, ModalFooter, Text } from '../../../../lib'\n\nfunction DangerDemo() {\n  const [isOpen, setIsOpen] = useState(false)\n\n  const handleButtonClick = () => setIsOpen(true)\n  const handleModalClose = () => setIsOpen(false)\n\n  return (\n    <>\n      <Button kind='primary' onClick={handleButtonClick}>\n        Open modal\n      </Button>\n\n      <Modal size='small' onClose={handleModalClose} open={isOpen}>\n        <ModalBody>\n          <HFlow alignItems='center'>\n            <Icon icon='exclamationTriangleOutline' style={{ marginRight: '0.5rem' }} size={3} fill='danger' />\n            <div>\n              <Heading level={1}>Danger action</Heading>\n              <Heading level={5}>Subtitle</Heading>\n            </div>\n          </HFlow>\n          <br />\n          <p>\n            Used to validate actions that have a critical effect on the system and that can't be undone, such as\n            \"deleting all items\". Use labels that reflect the action that will occur. Avoid using labels like \"OK\" and\n            \"Cancel\".\n          </p>\n        </ModalBody>\n        <ModalFooter>\n          <HFlow justifyContent='flex-end'>\n            <Button onClick={handleModalClose}>Discard</Button>\n            <Button kind='danger' onClick={handleModalClose}>\n              <Icon icon='trashOutline' style={{ marginRight: '0.5rem' }} />\n              <Text color='inherit'>Delete all</Text>\n            </Button>\n          </HFlow>\n        </ModalFooter>\n      </Modal>\n    </>\n  )\n}\n\nexport default DangerDemo\n");

/***/ }),

/***/ "./pages/components/modal/DangerModal.demo.tsx":
/*!*****************************************************!*\
  !*** ./pages/components/modal/DangerModal.demo.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/modal/DangerModal.demo.tsx";




function DangerDemo() {
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
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["HFlow"], {
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    icon: "exclamationTriangleOutline",
    style: {
      marginRight: '0.5rem'
    },
    size: 3,
    fill: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    level: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Danger action"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    level: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Subtitle"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Used to validate actions that have a critical effect on the system and that can't be undone, such as \"deleting all items\". Use labels that reflect the action that will occur. Avoid using labels like \"OK\" and \"Cancel\".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["HFlow"], {
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleModalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Discard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    kind: "danger",
    onClick: handleModalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    icon: "trashOutline",
    style: {
      marginRight: '0.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Delete all"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (DangerDemo);

/***/ })

})
//# sourceMappingURL=modal.js.46fe6eebba6b9b967fb9.hot-update.js.map