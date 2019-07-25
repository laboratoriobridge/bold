webpackHotUpdate("static/development/pages/components/table.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/table/DataTable.demo.tsx":
/*!******************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/table/DataTable.demo.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { useState } from 'react'\n\nimport { Button, DataTable, Icon } from '../../../../lib'\n\ninterface RowType {\n  id: number\n  name: string\n  age: number\n}\n\nfunction DataTableExample() {\n  const [sort, setSort] = useState(['id'])\n\n  const rows = allRows\n    // Naive sorting for example purposes:\n    .sort((a, b) => {\n      if (sort[0] === 'id') {\n        return a.id - b.id\n      }\n      if (sort[0] === '-id') {\n        return b.id - a.id\n      }\n      return 0\n    })\n\n  return (\n    <DataTable<RowType>\n      rows={rows}\n      sort={sort}\n      onSortChange={setSort}\n      loading={false}\n      columns={[\n        {\n          name: 'id',\n          header: 'ID',\n          sortable: true,\n          render: item => item.id,\n        },\n        {\n          name: 'name',\n          header: 'Name',\n          render: item => item.name,\n        },\n        {\n          name: 'age',\n          header: 'Age',\n          render: item => item.age,\n        },\n        {\n          name: 'actions',\n          render: item => (\n            <Button size='small' skin='ghost'>\n              <Icon icon='penOutline' />\n            </Button>\n          ),\n          style: { textAlign: 'right' },\n        },\n      ]}\n    />\n  )\n}\n\nexport default DataTableExample\n\n// Fake data to populate table\nlet id = 1\nconst allRows: RowType[] = Array(3)\n  .fill(true)\n  .reduce(\n    curr => [\n      ...curr,\n      { id: id++, name: 'MARIA MACHADO DE JESUS', age: 42 },\n      { id: id++, name: 'JOSÉ DA SILVA MOREIRA', age: 34 },\n      { id: id++, name: 'ALICE BARBOSA', age: 27 },\n    ],\n    [] as RowType[]\n  )\n");

/***/ }),

/***/ "./pages/components/table/DataTable.demo.tsx":
/*!***************************************************!*\
  !*** ./pages/components/table/DataTable.demo.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");


var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/table/DataTable.demo.tsx";




function DataTableExample() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(['id']),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      sort = _useState2[0],
      setSort = _useState2[1];

  var rows = allRows // Naive sorting for example purposes:
  .sort(function (a, b) {
    if (sort[0] === 'id') {
      return a.id - b.id;
    }

    if (sort[0] === '-id') {
      return b.id - a.id;
    }

    return 0;
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["DataTable"], {
    rows: rows,
    sort: sort,
    onSortChange: setSort,
    loading: false,
    columns: [{
      name: 'id',
      header: 'ID',
      sortable: true,
      render: function render(item) {
        return item.id;
      }
    }, {
      name: 'name',
      header: 'Name',
      render: function render(item) {
        return item.name;
      }
    }, {
      name: 'age',
      header: 'Age',
      render: function render(item) {
        return item.age;
      }
    }, {
      name: 'actions',
      render: function render(item) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          size: "small",
          skin: "ghost",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          icon: "penOutline",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }));
      },
      style: {
        textAlign: 'right'
      }
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DataTableExample); // Fake data to populate table

var id = 1;
var allRows = Array(3).fill(true).reduce(function (curr) {
  return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(curr), [{
    id: id++,
    name: 'MARIA MACHADO DE JESUS',
    age: 42
  }, {
    id: id++,
    name: 'JOSÉ DA SILVA MOREIRA',
    age: 34
  }, {
    id: id++,
    name: 'ALICE BARBOSA',
    age: 27
  }]);
}, []);

/***/ })

})
//# sourceMappingURL=table.js.436c65ef3174d14ca153.hot-update.js.map