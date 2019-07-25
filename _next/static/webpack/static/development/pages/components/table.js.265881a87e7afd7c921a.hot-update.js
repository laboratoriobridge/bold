webpackHotUpdate("static/development/pages/components/table.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/table/PagedTable.demo.tsx":
/*!*******************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/table/PagedTable.demo.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { useState } from 'react'\n\nimport { Button, Icon, PagedTable } from '../../../../lib'\n\ninterface RowType {\n  id: number\n  name: string\n  age: number\n}\n\nfunction PagedTableExample() {\n  const [params, setParams] = useState({\n    page: 0,\n    size: 10,\n    totalElements: allRows.length,\n    totalPages: allRows.length / 10,\n    sort: ['id'],\n  })\n\n  const handleSortChange = (sort: string[]) => setParams(state => ({ ...state, sort }))\n  const handlePageChange = (page: number) => setParams(state => ({ ...state, page }))\n  const handleSizeChange = (size: number) =>\n    setParams(state => ({ ...state, size, totalPages: Math.max(1, state.totalElements / size) }))\n\n  const rows = allRows\n    // Naive sorting for example purposes:\n    .sort((a, b) => {\n      if (params.sort[0] === 'id') {\n        return a.id - b.id\n      }\n      if (params.sort[0] === '-id') {\n        return b.id - a.id\n      }\n      return 0\n    })\n    // Naive pagination for example purposes:\n    .slice(params.page * params.size, params.page * params.size + params.size)\n\n  return (\n    <PagedTable<RowType>\n      rows={rows}\n      page={params.page}\n      size={params.size}\n      totalElements={params.totalElements}\n      totalPages={params.totalPages}\n      sort={params.sort}\n      onSortChange={handleSortChange}\n      onPageChange={handlePageChange}\n      onSizeChange={handleSizeChange}\n      loading={false}\n      columns={[\n        {\n          name: 'id',\n          header: 'ID',\n          sortable: true,\n          render: item => item.id,\n        },\n        {\n          name: 'name',\n          header: 'Name',\n          render: item => item.name,\n        },\n        {\n          name: 'age',\n          header: 'Age',\n          render: item => item.age,\n        },\n        {\n          name: 'actions',\n          render: item => (\n            <Button size='small' skin='ghost'>\n              <Icon icon='penOutline' />\n            </Button>\n          ),\n          style: { textAlign: 'right' },\n        },\n      ]}\n    />\n  )\n}\n\nexport default PagedTableExample\n\n// Fake data to populate table\nlet id = 1\nconst allRows: RowType[] = Array(30)\n  .fill(true)\n  .reduce(\n    curr => [\n      ...curr,\n      { id: id++, name: 'MARIA MACHADO DE JESUS', age: 42 },\n      { id: id++, name: 'JOSÉ DA SILVA MOREIRA', age: 34 },\n      { id: id++, name: 'ALICE BARBOSA', age: 27 },\n    ],\n    [] as RowType[]\n  )\n");

/***/ }),

/***/ "./pages/components/table/PagedTable.demo.tsx":
/*!****************************************************!*\
  !*** ./pages/components/table/PagedTable.demo.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");



var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/table/PagedTable.demo.tsx";




function PagedTableExample() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    page: 0,
    size: 10,
    totalElements: allRows.length,
    totalPages: allRows.length / 10,
    sort: ['id']
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var handleSortChange = function handleSortChange(sort) {
    return setParams(function (state) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        sort: sort
      });
    });
  };

  var handlePageChange = function handlePageChange(page) {
    return setParams(function (state) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        page: page
      });
    });
  };

  var handleSizeChange = function handleSizeChange(size) {
    return setParams(function (state) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        size: size,
        totalPages: Math.max(1, state.totalElements / size)
      });
    });
  };

  var rows = allRows // Naive sorting for example purposes:
  .sort(function (a, b) {
    if (params.sort[0] === 'id') {
      return a.id - b.id;
    }

    if (params.sort[0] === '-id') {
      return b.id - a.id;
    }

    return 0;
  }) // Naive pagination for example purposes:
  .slice(params.page * params.size, params.page * params.size + params.size);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["PagedTable"], {
    rows: rows,
    page: params.page,
    size: params.size,
    totalElements: params.totalElements,
    totalPages: params.totalPages,
    sort: params.sort,
    onSortChange: handleSortChange,
    onPageChange: handlePageChange,
    onSizeChange: handleSizeChange,
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
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          size: "small",
          skin: "ghost",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
          icon: "penOutline",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
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
      lineNumber: 40
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (PagedTableExample); // Fake data to populate table

var id = 1;
var allRows = Array(30).fill(true).reduce(function (curr) {
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
//# sourceMappingURL=table.js.265881a87e7afd7c921a.hot-update.js.map