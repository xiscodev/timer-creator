/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/home/xoxefdp/WORKSPACE/PROJECTS/NPM_LIBS/timer-creator/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Constants/timeUnit.js":
/*!***********************************!*\
  !*** ./src/Constants/timeUnit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @description Contains time unit constants
 * @constant {Object}
 */
const TimeUnit = {
  /**
   * @description Time unit referent to Milisecond
   * @constant {number}
   */
  MILISECOND: 1,
  /**
   * @description Time unit referent to Second in miliseconds
   * @constant {number}
   */
  SECOND: 1000,
  /**
   * @description Time unit referent to Minute in miliseconds
   * @constant {number}
   */
  MINUTE: 60000,
  /**
   * @description Time unit referent to Hour in miliseconds
   * @constant {number}
   */
  HOUR: 3600000,
  /**
   * @description Time unit referent to Day in miliseconds
   * @constant {number}
   */
  DAY: 86400000,
}

/* harmony default export */ __webpack_exports__["default"] = (TimeUnit);


/***/ }),

/***/ "./src/Creators/interval.js":
/*!**********************************!*\
  !*** ./src/Creators/interval.js ***!
  \**********************************/
/*! exports provided: createInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInterval", function() { return createInterval; });
const createInterval = () => { }




/***/ }),

/***/ "./src/Creators/timeout.js":
/*!*********************************!*\
  !*** ./src/Creators/timeout.js ***!
  \*********************************/
/*! exports provided: existTimeout, getTimeout, createTimeout, destroyTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existTimeout", function() { return existTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeout", function() { return getTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTimeout", function() { return createTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyTimeout", function() { return destroyTimeout; });
/* harmony import */ var Helpers_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/store */ "./src/Helpers/store.js");
/* harmony import */ var Helpers_callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Helpers/callback */ "./src/Helpers/callback.js");



/**
 * @access private
 * @description Store for timeouts.
 * @type {Array}
 */
const timeoutStore = []

/**
 * @access public
 * @function existTimeout
 * @description Checks whether exist timeout with given timeoutName.
 * @param {string} timeoutName
 * @returns {boolean}
 */
const existTimeout = (timeoutName) => {
  return Object(Helpers_store__WEBPACK_IMPORTED_MODULE_0__["isStored"])(timeoutStore, timeoutName)
}

/**
 * @access private
 * @function _removeTimeout
 * @description Removes stored timeout with given timeoutName.
 * @param {string} timeoutName
 */
const _removeTimeout = (timeoutName) => {
  Object(Helpers_store__WEBPACK_IMPORTED_MODULE_0__["removeFromStore"])(timeoutStore, timeoutName)
}

/**
 * @access public
 * @function getTimeout
 * @description Retrieves timeout value for given timeoutName.
 * @param {string} timeoutName
 * @returns {number}
 */
const getTimeout = (timeoutName) => {
  return Object(Helpers_store__WEBPACK_IMPORTED_MODULE_0__["getStoredItem"])(timeoutStore, timeoutName)
}

/**
 * @access public
 * @function createTimeout
 * @description Creates and store timeout object with given timeoutName,
 * to execute callback function on the amountTime specified with given args,
 * its removed from store when callback is executed.
 * @param {string} timeoutName
 * @param {TimeUnit} amountTime
 * @param {Function} callback
 * @param {string|Array|NULL} args
 */
const createTimeout = (timeoutName, amountTime, callback, args) => {
  if (!existTimeout(timeoutName)) {
    const timeoutId = setTimeout(() => {
      _removeTimeout(timeoutName) // remove from store on timeout
      Object(Helpers_callback__WEBPACK_IMPORTED_MODULE_1__["default"])(callback, args)
    }, amountTime)
    Object(Helpers_store__WEBPACK_IMPORTED_MODULE_0__["pushToStore"])(timeoutStore, timeoutName, timeoutId)
  }
}

/**
 * @access public
 * @function destroyTimeout
 * @description Destroy timeout with given timeoutName and removes it from store.
 * @param {string} timeoutName
 */
const destroyTimeout = (timeoutName) => {
  if (existTimeout(timeoutName)) {
    clearTimeout(getTimeout(timeoutName))
    _removeTimeout(timeoutName)
  }
}




/***/ }),

/***/ "./src/Helpers/callback.js":
/*!*********************************!*\
  !*** ./src/Helpers/callback.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _isFunction = (toEvaluate) => {
  return !!toEvaluate && typeof toEvaluate === 'function'
}

const launchCallback = (callback, args) => {
  if (_isFunction(callback)) {
    if (args) {
      if (Array.isArray(args) && args.length !== 0) {
        callback(...args)
      } else {
        callback(args)
      }
    } else {
      callback()
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (launchCallback);


/***/ }),

/***/ "./src/Helpers/store.js":
/*!******************************!*\
  !*** ./src/Helpers/store.js ***!
  \******************************/
/*! exports provided: pushToStore, getStoredItem, isStored, removeFromStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushToStore", function() { return pushToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoredItem", function() { return getStoredItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStored", function() { return isStored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromStore", function() { return removeFromStore; });
const _isMap = (toEvaluate) => {
  return !!toEvaluate && toEvaluate.toString() === '[object Map]'
}

const pushToStore = (store, pushableKey, pushableItem) => {
  if (!!store && !!pushableKey && !!pushableItem) {
    _isMap(store) && store.set(pushableKey, pushableItem)
  }
}

const getStoredItem = (store, storedKey) => {
  return _isMap(store) && store.get(storedKey)
}

const isStored = (store, storedKey) => {
  return _isMap(store) && store.has(storedKey)
}

const removeFromStore = (store, storedKey) => {
  _isMap(store) && store.delete(storedKey)
}




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Constants_timeUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Constants/timeUnit */ "./src/Constants/timeUnit.js");
/* harmony import */ var Creators_interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Creators/interval */ "./src/Creators/interval.js");
/* harmony import */ var Creators_timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Creators/timeout */ "./src/Creators/timeout.js");




exports.TimeUnit = Constants_timeUnit__WEBPACK_IMPORTED_MODULE_0__["default"]
// INTERVAL
exports.existInterval = Creators_interval__WEBPACK_IMPORTED_MODULE_1__["existInterval"]
exports.getInterval = Creators_interval__WEBPACK_IMPORTED_MODULE_1__["getInterval"]
exports.createInterval = Creators_interval__WEBPACK_IMPORTED_MODULE_1__["createInterval"]
exports.destroyInterval = Creators_interval__WEBPACK_IMPORTED_MODULE_1__["destroyInterval"]
// TIMEOUT
exports.existTimeout = Creators_timeout__WEBPACK_IMPORTED_MODULE_2__["existTimeout"]
exports.getTimeout = Creators_timeout__WEBPACK_IMPORTED_MODULE_2__["getTimeout"]
exports.createTimeout = Creators_timeout__WEBPACK_IMPORTED_MODULE_2__["createTimeout"]
exports.destroyTimeout = Creators_timeout__WEBPACK_IMPORTED_MODULE_2__["destroyTimeout"]


/***/ })

/******/ });
//# sourceMappingURL=main.js.map