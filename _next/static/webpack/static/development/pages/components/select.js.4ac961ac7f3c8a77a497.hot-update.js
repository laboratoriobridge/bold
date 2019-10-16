webpackHotUpdate("static/development/pages/components/select.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Suggestion.demo.tsx":
/*!********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Suggestion.demo.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { useState } from 'react'\n\nimport { Select, Text, VFlow } from '../../../../lib'\n\nconst items = ['Carbonara', 'Gnocchi', 'Lasagna', 'Macaroni and Cheese', 'Pesto', 'Pizza']\n\nfunction SuggestionDemo() {\n  const [value, setValue] = useState()\n\n  const handleChange = (item: string) => setValue(item)\n\n  const itemToString = (item: string) => item\n  const createNewItem = (inputValue: string) => inputValue\n\n  return (\n    <VFlow>\n      <Text>Selected item: {value || '[none]'}</Text>\n      <Select<string>\n        value={value}\n        label='Favorite pasta'\n        name='favorite pasta'\n        items={items}\n        onChange={handleChange}\n        itemToString={itemToString}\n        createNewItem={createNewItem}\n        icon={null}\n        required\n      />\n    </VFlow>\n  )\n}\n\nexport default SuggestionDemo\n");

/***/ })

})
//# sourceMappingURL=select.js.4ac961ac7f3c8a77a497.hot-update.js.map