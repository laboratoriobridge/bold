webpackHotUpdate("static/development/pages/design-guidelines/iconography.js",{

/***/ "./components/IconLibrary.tsx":
/*!************************************!*\
  !*** ./components/IconLibrary.tsx ***!
  \************************************/
/*! exports provided: IconLibrary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconLibrary", function() { return IconLibrary; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! match-sorter */ "../node_modules/match-sorter/dist/match-sorter.esm.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_components_elements_Icon_generated_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/components/elements/Icon/generated/Icons */ "../lib/components/elements/Icon/generated/Icons.js");
/* harmony import */ var _lib_components_elements_Icon_generated_Icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_components_elements_Icon_generated_Icons__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/home/bonetti/workspace/bold/site/components/IconLibrary.tsx";





var IconLibrary = function IconLibrary() {
  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_4__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var handleSearchChange = function handleSearchChange(e) {
    setFilter(e && e.target && e.target.value);
  };

  var icons = Object(match_sorter__WEBPACK_IMPORTED_MODULE_3__["default"])(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_lib_components_elements_Icon_generated_Icons__WEBPACK_IMPORTED_MODULE_5__["IconMap"]), filter);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["VFlow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.searchWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    icon: "zoomOutline",
    placeholder: "Search icons...",
    value: filter,
    onChange: handleSearchChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    wrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, icons.map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["Cell"], {
      style: classes.cell,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.iconBox,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      style: {
        wordBreak: 'break-word'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, key));
  })));
};

var createStyles = function createStyles(theme) {
  return {
    searchWrapper: {
      width: 320
    },
    iconBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.pallete.surface.background,
      padding: '1rem',
      height: 80,
      width: 80,
      margin: '0 auto 0.5rem auto',
      border: "1px solid ".concat(theme.pallete.divider)
    },
    cell: {
      flexBasis: 100,
      textAlign: 'center',
      fontSize: theme.typography.sizes.text
    }
  };
};

/***/ })

})
//# sourceMappingURL=iconography.js.563920c515afc54e8fc6.hot-update.js.map