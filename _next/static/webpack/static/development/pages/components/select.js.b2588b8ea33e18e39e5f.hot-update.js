webpackHotUpdate("static/development/pages/components/select.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Select.demo.tsx":
/*!****************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Select.demo.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { useState } from 'react'\n\nimport { FormControl, Select, Text, VFlow } from '../../../../lib'\n\nconst items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']\n\nfunction SelectDemo() {\n  const [value, setValue] = useState()\n\n  const handleChange = (item: string) => setValue(item)\n\n  const itemToString = (item: any) => item\n\n  return (\n    <VFlow>\n      <Text>Selected item: {value || '[none]'}</Text>\n      <Select<string>\n        label='Favorite pasta'\n        items={items}\n        value={value}\n        onChange={handleChange}\n        itemToString={itemToString}\n        name='favorite pasta'\n        required\n      />\n    </VFlow>\n  )\n}\n\nexport default SelectDemo\n");

/***/ })

})
//# sourceMappingURL=select.js.b2588b8ea33e18e39e5f.hot-update.js.map