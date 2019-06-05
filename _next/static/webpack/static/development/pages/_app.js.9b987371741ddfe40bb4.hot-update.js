webpackHotUpdate("static/development/pages/_app.js",{

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "../node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "../node_modules/define-properties/index.js":
/*!**************************************************!*\
  !*** ../node_modules/define-properties/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "../node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "../node_modules/function-bind/implementation.js":
/*!*******************************************************!*\
  !*** ../node_modules/function-bind/implementation.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "../node_modules/function-bind/index.js":
/*!**********************************************!*\
  !*** ../node_modules/function-bind/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "../node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "../node_modules/has-symbols/shams.js":
/*!********************************************!*\
  !*** ../node_modules/has-symbols/shams.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "../node_modules/has/src/index.js":
/*!****************************************!*\
  !*** ../node_modules/has/src/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "../node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "../node_modules/url/url.js");

var react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "../node_modules/next/node_modules/prop-types/index.js"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "../node_modules/next-server/dist/lib/utils.js");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "../node_modules/prop-types-exact/build/index.js");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../node_modules/object-keys/implementation.js":
/*!*****************************************************!*\
  !*** ../node_modules/object-keys/implementation.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "../node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "../node_modules/object-keys/index.js":
/*!********************************************!*\
  !*** ../node_modules/object-keys/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "../node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "../node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "../node_modules/object-keys/isArguments.js":
/*!**************************************************!*\
  !*** ../node_modules/object-keys/isArguments.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "../node_modules/object.assign/implementation.js":
/*!*******************************************************!*\
  !*** ../node_modules/object.assign/implementation.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "../node_modules/object-keys/index.js");
var bind = __webpack_require__(/*! function-bind */ "../node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "../node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "../node_modules/object.assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object.assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "../node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "../node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "../node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "../node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "../node_modules/object.assign/polyfill.js":
/*!*************************************************!*\
  !*** ../node_modules/object.assign/polyfill.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "../node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "../node_modules/object.assign/shim.js":
/*!*********************************************!*\
  !*** ../node_modules/object.assign/shim.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "../node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "../node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "../node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!***********************************************************************!*\
  !*** ../node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "../node_modules/prop-types-exact/build/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/prop-types-exact/build/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "../node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "../node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "../node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./components/ActiveLink.tsx":
/*!***********************************!*\
  !*** ./components/ActiveLink.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/home/bonetti/workspace/bold/site/components/ActiveLink.tsx";




var ActiveLink = function ActiveLink(props) {
  var router = props.router,
      activeClassName = props.activeClassName,
      children = props.children,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["router", "activeClassName", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.only(children);
  var className = child.props.className || null;

  if (router && router.pathname.startsWith(props.href) && props.activeClassName) {
    className = "".concat(className !== null ? className : '', " ").concat(props.activeClassName).trim();
  }

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(child, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, child.props, {
    className: className
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/AppFooter.tsx":
/*!**********************************!*\
  !*** ./components/AppFooter.tsx ***!
  \**********************************/
/*! exports provided: AppFooter, createStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return AppFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return createStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdx */ "./components/mdx/index.tsx");
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageContainer */ "./components/PageContainer.tsx");
var _jsxFileName = "/home/bonetti/workspace/bold/site/components/AppFooter.tsx";




function AppFooter() {
  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageContainer__WEBPACK_IMPORTED_MODULE_3__["PageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["HFlow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "https://ufsc.br/",
    target: "_blank",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/image/logo-ufsc.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "https://bridge.ufsc.br/",
    target: "_blank",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/image/logo-bridge.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["HFlow"], {
    justifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "https://www.linkedin.com/company/laborat%C3%B3rio-bridge/",
    target: "_blank",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/image/icn-linkedin.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "https://www.facebook.com/laboratoriobridge/",
    target: "_blank",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/image/icn-facebook.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "https://github.com/laboratoriobridge",
    target: "_blank",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/image/icn-github.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Laborat\xF3rio Bridge. 2019.")));
}
var createStyles = function createStyles(theme) {
  return {
    footer: {
      background: theme.pallete.surface.background,
      padding: '1.5rem 3rem'
    }
  };
};

/***/ }),

/***/ "./components/AppHeader.tsx":
/*!**********************************!*\
  !*** ./components/AppHeader.tsx ***!
  \**********************************/
/*! exports provided: AppHeader, APP_HEADER_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return AppHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_HEADER_HEIGHT", function() { return APP_HEADER_HEIGHT; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BoldLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoldLogo */ "./components/BoldLogo.tsx");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideNav */ "./components/SideNav/index.ts");
var _jsxFileName = "/home/bonetti/workspace/bold/site/components/AppHeader.tsx";





function AppHeader(props) {
  var currentTheme = props.currentTheme,
      onThemeSwitch = props.onThemeSwitch;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BoldLogo__WEBPACK_IMPORTED_MODULE_3__["BoldLogo"], {
    "aria-label": "Bold Logo",
    style: {
      height: '2.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.search,
    id: "search-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    id: "search-input",
    style: classes.searchInput,
    type: "search",
    icon: "zoomOutline",
    iconPosition: "left",
    placeholder: "Search in bold design system...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    text: currentTheme === _lib__WEBPACK_IMPORTED_MODULE_2__["lightTheme"] ? 'Switch to dark mode' : 'Switch to light mode',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    skin: "ghost",
    size: "small",
    onClick: onThemeSwitch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    icon: "lightbulbFilled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })))));
}
var APP_HEADER_HEIGHT = 77;

var createStyles = function createStyles(theme) {
  return {
    header: {
      background: theme.pallete.surface.main,
      padding: '1rem 2rem',
      boxShadow: theme.shadows.outer[60],
      display: 'flex',
      alignItems: 'center',
      zIndex: 20,
      position: 'fixed',
      width: '100%'
    },
    logo: {
      borderRight: "1px solid ".concat(theme.pallete.divider),
      width: "calc(".concat(_SideNav__WEBPACK_IMPORTED_MODULE_4__["SIDE_NAV_WIDTH"], "px - 2rem)"),
      padding: '0 1rem 0 2.75rem'
    },
    searchInput: {
      border: 'none',
      '~ span': {
        background: theme.pallete.surface.main
      },
      '&::-webkit-search-decoration': {
        WebkitAppearance: 'none'
      }
    },
    search: {
      flex: 1,
      padding: '0 1rem',
      position: 'relative',
      '.algolia-autocomplete [class^="ds-dataset"]': {
        background: theme.pallete.surface.main,
        borderColor: theme.pallete.divider,
        '&::before': {
          background: theme.pallete.surface.main
        }
      },
      '.algolia-autocomplete': {
        left: '1rem !important',
        top: '0.5rem'
      },

      /* Main dropdown wrapper */
      '.algolia-autocomplete .ds-dropdown-menu': {
        fontSize: '1em',
        fontWeight: 'normal',
        '&::before': {
          background: theme.pallete.surface.main
        }
      },

      /* Link element */
      '.algolia-autocomplete .algolia-docsearch-suggestion': {
        fontWeight: 'normal',
        textDecoration: 'none',
        background: 'transparent'
      },

      /* Main category (eg. Getting Started) */
      '.algolia-autocomplete .algolia-docsearch-suggestion--category-header': {
        fontWeight: 'bold',
        color: theme.pallete.text.main
      },

      /* Category (eg. Downloads) */
      '.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column': {},
      '.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column-text': {
        color: theme.pallete.text.secondary,
        fontSize: theme.typography.sizes.text
      },

      /* Content */
      '.algolia-autocomplete .algolia-docsearch-suggestion--content': {},

      /* Title (eg. Bootstrap CDN) */
      '.algolia-autocomplete .algolia-docsearch-suggestion--title': {
        color: theme.pallete.text.main,
        fontSize: theme.typography.sizes.text
      },

      /* Description description (eg. Bootstrap currently works...) */
      '.algolia-autocomplete .algolia-docsearch-suggestion--text': {
        color: theme.pallete.text.main,
        fontSize: theme.typography.sizes.text
      },

      /* Highlighted text */
      '.algolia-autocomplete .algolia-docsearch-suggestion--highlight': {
        color: 'inherit !important',
        background: "".concat(theme.pallete.highlight, " !important"),
        boxShadow: 'none !important'
      }
    }
  };
};

/***/ }),

/***/ "./components/BoldLogo.tsx":
/*!*********************************!*\
  !*** ./components/BoldLogo.tsx ***!
  \*********************************/
/*! exports provided: BoldLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoldLogo", function() { return BoldLogo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/BoldLogo.tsx";


var BoldLogo = function BoldLogo(props) {
  var theme = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useTheme"])(); // tslint:disable max-line-length

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 163 60"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "bold_"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "bold",
    transform: "translate(-91.000000, -112.000000)",
    fillRule: "nonzero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Group",
    transform: "translate(88.000000, 112.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "bold",
    transform: "translate(3.968000, 0.424000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "bold",
    fill: theme.pallete.gray.c10,
    d: "M19.264,13.504 C23.3173536,13.504 26.4319891,15.0933174 28.608,18.272 C30.7840109,21.4506826 31.872,25.8986381 31.872,31.616 C31.872,35.1146842 31.3280054,38.2293197 30.24,40.96 C29.1519946,43.6906803 27.5946768,45.8239923 25.568,47.36 C23.5413232,48.8960077 21.1413472,49.664 18.368,49.664 C16.5333242,49.664 14.8586742,49.2800038 13.344,48.512 C11.8293258,47.7439962 10.538672,46.6773402 9.472,45.312 L8.96,48.576 L-6.39488462e-14,48.576 L-6.39488462e-14,1.088 L10.112,1.13686838e-13 L10.112,18.048 C11.1360051,16.639993 12.447992,15.5306707 14.048,14.72 C15.648008,13.9093293 17.3866573,13.504 19.264,13.504 Z M15.424,42.304 C19.3920198,42.304 21.376,38.741369 21.376,31.616 C21.376,27.5626464 20.9066714,24.7680077 19.968,23.232 C19.0293286,21.6959923 17.664009,20.928 15.872,20.928 C13.6106554,20.928 11.6906746,22.2506534 10.112,24.896 L10.112,39.04 C10.7520032,40.0640051 11.5306621,40.8639971 12.448,41.44 C13.3653379,42.0160029 14.357328,42.304 15.424,42.304 Z M52.928,13.504 C58.1333594,13.504 62.2079853,15.0933174 65.152,18.272 C68.0960147,21.4506826 69.568,25.8986381 69.568,31.616 C69.568,35.2426848 68.8960067,38.4106531 67.552,41.12 C66.2079933,43.8293469 64.2880125,45.9306592 61.792,47.424 C59.2959875,48.9173408 56.3413504,49.664 52.928,49.664 C47.7653075,49.664 43.7013482,48.0746826 40.736,44.896 C37.7706518,41.7173174 36.288,37.2693619 36.288,31.552 C36.288,27.9253152 36.9599933,24.7573469 38.304,22.048 C39.6480067,19.3386531 41.5679875,17.2373408 44.064,15.744 C46.5600125,14.2506592 49.5146496,13.504 52.928,13.504 Z M52.928,20.928 C50.8799898,20.928 49.3440051,21.7919914 48.32,23.52 C47.2959949,25.2480086 46.784,27.9253152 46.784,31.552 C46.784,35.2640186 47.2853283,37.9733248 48.288,39.68 C49.2906717,41.3866752 50.8373229,42.24 52.928,42.24 C54.9760102,42.24 56.5119949,41.3760086 57.536,39.648 C58.5600051,37.9199914 59.072,35.2426848 59.072,31.616 C59.072,27.9039814 58.5706717,25.1946752 57.568,23.488 C56.5653283,21.7813248 55.0186771,20.928 52.928,20.928 Z M84.608,49.664 C81.6639853,49.664 79.3706749,48.8213418 77.728,47.136 C76.0853251,45.4506582 75.264,43.0506822 75.264,39.936 L75.264,1.088 L85.376,1.13686838e-13 L85.376,39.552 C85.376,40.960007 85.9519942,41.664 87.104,41.664 C87.7013363,41.664 88.2559974,41.5573344 88.768,41.344 L90.752,48.512 C88.9173242,49.2800038 86.8693446,49.664 84.608,49.664 Z M124.736,1.088 L124.736,48.576 L115.776,48.576 L115.264,44.608 C112.874655,47.9786835 109.653354,49.664 105.6,49.664 C101.375979,49.664 98.1653443,48.0426829 95.968,44.8 C93.7706557,41.5573171 92.672,37.1200282 92.672,31.488 C92.672,28.0319827 93.2479942,24.9386803 94.4,22.208 C95.5520058,19.4773197 97.1839894,17.3440077 99.296,15.808 C101.408011,14.2719923 103.82932,13.504 106.56,13.504 C109.802683,13.504 112.490656,14.570656 114.624,16.704 L114.624,1.13686838e-13 L124.736,1.088 Z M108.736,42.24 C111.082678,42.24 113.045325,40.9600128 114.624,38.4 L114.624,23.744 C113.813329,22.7626618 112.992004,22.0373357 112.16,21.568 C111.327996,21.0986643 110.378672,20.864 109.312,20.864 C107.434657,20.864 105.941339,21.7386579 104.832,23.488 C103.722661,25.2373421 103.168,27.9253152 103.168,31.552 C103.168,35.5200198 103.647995,38.2933254 104.608,39.872 C105.568005,41.4506746 106.943991,42.24 108.736,42.24 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("polygon", {
    id: "underscore",
    fill: theme.pallete.primary.main,
    points: "129.344 59.52 129.344 51.584 161.344 51.584 161.344 59.52",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))))));
};

/***/ }),

/***/ "./components/PageLayout.tsx":
/*!***********************************!*\
  !*** ./components/PageLayout.tsx ***!
  \***********************************/
/*! exports provided: PageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayout", function() { return PageLayout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppFooter */ "./components/AppFooter.tsx");
/* harmony import */ var _components_SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SideNav */ "./components/SideNav/index.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages */ "./pages.ts");
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppHeader */ "./components/AppHeader.tsx");
/* harmony import */ var _useThemeSwitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useThemeSwitch */ "./components/useThemeSwitch.ts");

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/PageLayout.tsx";







function PageLayout(props) {
  var children = props.children;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var _useThemeSwitch = Object(_useThemeSwitch__WEBPACK_IMPORTED_MODULE_7__["useThemeSwitch"])(),
      _useThemeSwitch2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useThemeSwitch, 2),
      currentTheme = _useThemeSwitch2[0],
      switchTheme = _useThemeSwitch2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppHeader__WEBPACK_IMPORTED_MODULE_6__["AppHeader"], {
    currentTheme: currentTheme,
    onThemeSwitch: switchTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SideNav__WEBPACK_IMPORTED_MODULE_4__["SideNav"], {
    pages: _pages__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AppFooter__WEBPACK_IMPORTED_MODULE_3__["AppFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))));
}

var createStyles = function createStyles() {
  return {
    container: {
      display: 'flex',
      minHeight: '100vh'
    },
    content: {
      paddingTop: "calc(".concat(_AppHeader__WEBPACK_IMPORTED_MODULE_6__["APP_HEADER_HEIGHT"], "px)"),
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

/***/ }),

/***/ "./components/SideNav/SideNav.tsx":
/*!****************************************!*\
  !*** ./components/SideNav/SideNav.tsx ***!
  \****************************************/
/*! exports provided: SideNav, SIDE_NAV_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNav", function() { return SideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDE_NAV_WIDTH", function() { return SIDE_NAV_WIDTH; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AppHeader */ "./components/AppHeader.tsx");
/* harmony import */ var _SideNavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SideNavItem */ "./components/SideNav/SideNavItem.tsx");


var _jsxFileName = "/home/bonetti/workspace/bold/site/components/SideNav/SideNav.tsx";




function SideNav(props) {
  var pages = props.pages;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    className: classes.nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: classes.ul,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, pages.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SideNavItem__WEBPACK_IMPORTED_MODULE_5__["SideNavItem"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      key: link.href
    }, link, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  }))));
}
var SIDE_NAV_WIDTH = 288;

var createStyles = function createStyles(theme) {
  return {
    wrapper: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: SIDE_NAV_WIDTH,
      flexShrink: 0
    }, theme.breakpoints.down('md'), {
      display: 'none'
    }),
    nav: {
      background: theme.pallete.surface.main,
      width: SIDE_NAV_WIDTH,
      borderRight: "1px solid ".concat(theme.pallete.divider),
      boxShadow: theme.shadows.outer[40],
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 0',
      marginTop: _AppHeader__WEBPACK_IMPORTED_MODULE_4__["APP_HEADER_HEIGHT"],
      position: 'fixed',
      zIndex: 10,
      overflow: 'auto',
      height: "calc(100vh - ".concat(_AppHeader__WEBPACK_IMPORTED_MODULE_4__["APP_HEADER_HEIGHT"], "px)"),
      svg: {
        fill: 'currentColor'
      }
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  };
};

/***/ }),

/***/ "./components/SideNav/SideNavItem.tsx":
/*!********************************************!*\
  !*** ./components/SideNav/SideNavItem.tsx ***!
  \********************************************/
/*! exports provided: SideNavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavItem", function() { return SideNavItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ActiveLink */ "./components/ActiveLink.tsx");

var _jsxFileName = "/home/bonetti/workspace/bold/site/components/SideNav/SideNavItem.tsx";





var SideNavItem = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (props) {
  var href = props.href,
      icon = props.icon,
      title = props.title,
      children = props.children,
      router = props.router;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    return href && router && router.pathname.startsWith(href);
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isCollapsed = _useState2[0],
      setIsCollapsed = _useState2[1];

  var handleLinkClick = function handleLinkClick(e) {
    if (children) {
      e.preventDefault();
      setIsCollapsed(function (collapsed) {
        return !collapsed;
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: href,
    activeClassName: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: classes.link,
    onClick: handleLinkClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: icon,
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, title), children && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: isCollapsed ? 'angleUp' : 'angleDown',
    className: classes.iconDropdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), children && isCollapsed && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: classes.sublist,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, children.map(function (sub) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: sub.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: sub.href,
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: classes.sublink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, sub.title)));
  })));
});

var createStyles = function createStyles(theme) {
  return {
    link: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      color: theme.pallete.text.main,
      textDecoration: 'none',
      padding: '1rem 0 1rem 2rem',
      transition: 'background 0.2s ease',
      fontWeight: 'bold',
      '&:hover': {
        background: theme.pallete.primary.c90
      },
      '&.active': {
        color: theme.pallete.primary.main,
        borderRight: "4px solid ".concat(theme.pallete.primary.main)
      }
    },
    title: {
      flex: 1
    },
    icon: {
      fontSize: '24px',
      marginRight: '1.5rem'
    },
    sublist: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    sublink: {
      fontWeight: 'normal',
      fontSize: 13,
      padding: '0.5rem 0 0.5rem 5rem',
      display: 'flex',
      alignItems: 'center',
      color: theme.pallete.text.main,
      textDecoration: 'none',
      transition: 'background 0.2s ease',
      '&:hover': {
        background: theme.pallete.primary.c90
      },
      '&.active': {
        color: theme.pallete.primary.main,
        fontWeight: 'bold'
      }
    },
    iconDropdown: {
      fontSize: '24px',
      marginRight: '1rem'
    }
  };
};

/***/ }),

/***/ "./components/SideNav/index.ts":
/*!*************************************!*\
  !*** ./components/SideNav/index.ts ***!
  \*************************************/
/*! exports provided: SideNav, SIDE_NAV_WIDTH, SideNavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNav */ "./components/SideNav/SideNav.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNav", function() { return _SideNav__WEBPACK_IMPORTED_MODULE_0__["SideNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIDE_NAV_WIDTH", function() { return _SideNav__WEBPACK_IMPORTED_MODULE_0__["SIDE_NAV_WIDTH"]; });

/* harmony import */ var _SideNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNavItem */ "./components/SideNav/SideNavItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavItem", function() { return _SideNavItem__WEBPACK_IMPORTED_MODULE_1__["SideNavItem"]; });




/***/ }),

/***/ "./components/Site.tsx":
/*!*****************************!*\
  !*** ./components/Site.tsx ***!
  \*****************************/
/*! exports provided: Site, SiteContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteContainer", function() { return SiteContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "../node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/mdx */ "./components/mdx/index.tsx");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Page */ "./components/Page.tsx");
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PageLayout */ "./components/PageLayout.tsx");
/* harmony import */ var _components_useThemeSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/useThemeSwitch */ "./components/useThemeSwitch.ts");


var _jsxFileName = "/home/bonetti/workspace/bold/site/components/Site.tsx";







var mdxComponents = {
  p: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Paragraph"],
  a: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Link"],
  img: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Image"],
  h1: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](1),
  h2: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](2),
  h3: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](3),
  h4: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](4),
  h5: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](5),
  h6: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["createHeading"](6),
  ul: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["UnorderedList"],
  ol: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["OrderedList"],
  blockquote: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Blockquote"],
  table: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Table"],
  pre: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Pre"],
  code: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Code"],
  inlineCode: _components_mdx__WEBPACK_IMPORTED_MODULE_5__["Code"]
};
function Site(props) {
  var _useThemeSwitch = Object(_components_useThemeSwitch__WEBPACK_IMPORTED_MODULE_8__["useThemeSwitch"])(),
      _useThemeSwitch2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useThemeSwitch, 1),
      currentTheme = _useThemeSwitch2[0];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: mdxComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SiteContainer, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))));
}
function SiteContainer(props) {
  var _ref = props,
      Component = _ref.Component,
      pageProps = _ref.pageProps;
  var route = props.router.route;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageLayout__WEBPACK_IMPORTED_MODULE_7__["PageLayout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, route === '/' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_6__["Page"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=_app.js.9b987371741ddfe40bb4.hot-update.js.map