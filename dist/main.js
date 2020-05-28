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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/FilterPanel/FilterPanel.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/FilterPanel/FilterPanel.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".filter-panel-btn {\n  position: relative; }\n  .filter-panel-btn.fpb-burger-menu {\n    width: 30px;\n    height: 30px;\n    border-radius: 6px;\n    background-color: #ecebeb;\n    background-image: url(\"/assets/images/burger-menu.png\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 50%;\n    cursor: pointer; }\n\n.filter-panel {\n  position: absolute;\n  background-color: white;\n  box-sizing: border-box;\n  width: auto;\n  min-width: 200px;\n  height: auto;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.12); }\n  .filter-panel * {\n    box-sizing: border-box; }\n  .filter-panel .filter-header {\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid lightgray; }\n    .filter-panel .filter-header .burger-menu-btn {\n      width: 30px;\n      height: 30px;\n      border-radius: 6px;\n      background-color: purple;\n      background-image: url(\"/assets/images/burger-menu.png\");\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 50%;\n      cursor: pointer;\n      animation: animate 0.2s linear;\n      animation-fill-mode: forwards; }\n\n@keyframes animate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(-25deg); } }\n  .filter-panel .filter-body {\n    width: 100%;\n    padding: 15px 10px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Layout.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Layout.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".widget {\n  width: 50%;\n  height: auto;\n  box-sizing: border-box;\n  margin: auto;\n  padding: 0;\n  overflow: hidden;\n  background-color: white;\n  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 10px; }\n  .widget .widget-header {\n    width: 100%;\n    height: auto;\n    margin: 0;\n    padding: 15px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.12); }\n    .widget .widget-header .wh-title {\n      width: auto; }\n    .widget .widget-header .wh-toolbar {\n      width: auto;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      .widget .widget-header .wh-toolbar .burger-menu {\n        width: 30px;\n        height: 30px;\n        border-radius: 6px;\n        background-color: #ecebeb;\n        background-image: url(\"/assets/images/burger-menu.png\");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: 50%;\n        cursor: pointer; }\n  .widget .widget-body {\n    width: 100%;\n    height: auto;\n    min-height: 100px;\n    max-height: 250px;\n    overflow-y: auto;\n    padding: 10px 15px;\n    margin: auto;\n    box-sizing: border-box;\n    text-align: justify; }\n\n.fb-row {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n  align-items: center;\n  justify-content: center;\n  margin: 6px auto; }\n  .fb-row .fb-label {\n    width: 100%;\n    padding: 10px 0; }\n  .fb-row .fb-filter {\n    width: 100%;\n    padding: 8px;\n    border-radius: 8px;\n    outline: none; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, #root, .container {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  background-color: rgba(219, 219, 219, 0.12); }\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative; }\n  .container .some-div {\n    width: 500px;\n    height: 200px;\n    border: 1px solid black;\n    position: relative; }\n\n.modal {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.25);\n  z-index: 502;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .modal * {\n    box-sizing: border-box;\n    font-size: 14px; }\n  .modal .modal-content {\n    display: flex;\n    border-radius: 20px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    position: relative;\n    width: auto;\n    min-width: 40%;\n    max-width: 60%;\n    height: auto;\n    max-height: 90%;\n    background: white;\n    z-index: 510;\n    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.12); }\n    .modal .modal-content .modal-header {\n      width: 100%;\n      height: auto;\n      padding: 20px;\n      display: flex;\n      flex-wrap: nowrap;\n      align-items: center;\n      justify-content: space-between;\n      border-bottom: 1px solid lightgray; }\n      .modal .modal-content .modal-header .modal-close {\n        width: 20px;\n        height: 20px;\n        background-image: url(\"/assets/images/close.svg\");\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 60% 60%;\n        cursor: pointer;\n        border-radius: 15px; }\n        .modal .modal-content .modal-header .modal-close:hover {\n          background-color: gray;\n          box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.12); }\n    .modal .modal-content .modal-body {\n      width: 100%;\n      margin-top: 10px;\n      display: flex;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 10px 20px;\n      height: auto;\n      min-height: 30%;\n      max-height: 80%;\n      overflow-y: auto;\n      overflow-x: hidden;\n      /* width */\n      /* Track */\n      /* Handle */\n      /* Handle on hover */ }\n      .modal .modal-content .modal-body::-webkit-scrollbar {\n        width: 2px; }\n      .modal .modal-content .modal-body::-webkit-scrollbar-track {\n        background: #f1f1f1; }\n      .modal .modal-content .modal-body::-webkit-scrollbar-thumb {\n        background: #888; }\n      .modal .modal-content .modal-body::-webkit-scrollbar-thumb:hover {\n        background: #555; }\n    .modal .modal-content .modal-footer {\n      width: 100%;\n      margin-top: 10px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      padding: 20px;\n      border-top: 1px solid lightgray; }\n      .modal .modal-content .modal-footer .btn {\n        width: auto;\n        height: auto;\n        outline: none;\n        background: white;\n        border: 1px solid white;\n        padding: 8px 20px;\n        border-radius: 8px;\n        cursor: pointer;\n        color: #555555;\n        font-size: 12px;\n        margin: 4px; }\n        .modal .modal-content .modal-footer .btn.btn-save-changes {\n          background-color: lightgray; }\n        .modal .modal-content .modal-footer .btn:hover {\n          border: 1px solid white;\n          background-color: #555555;\n          color: white;\n          box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.12); }\n\n.tooltip {\n  position: absolute;\n  width: 200px;\n  transform: \"translate(-100px, -100%)\";\n  background-color: red;\n  color: white; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/FilterPanel/FilterPanel.scss":
/*!*****************************************************!*\
  !*** ./src/components/FilterPanel/FilterPanel.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./FilterPanel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/FilterPanel/FilterPanel.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/FilterPanel/FilterPanel.tsx":
/*!****************************************************!*\
  !*** ./src/components/FilterPanel/FilterPanel.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
__webpack_require__(/*! ./FilterPanel.scss */ "./src/components/FilterPanel/FilterPanel.scss");
function FilterPanel(props) {
    // states
    let [shopPanel, setShopPanel] = React.useState(false);
    let [coords, setCoords] = React.useState({});
    // get root element
    let rootElement = document.getElementById("filter-portal");
    if (rootElement == null) {
        rootElement = document.createElement("div");
        rootElement.setAttribute('id', "filter-portal");
        document.body.appendChild(rootElement);
    }
    // wrapper
    const el = document.createElement("div");
    React.useEffect(() => {
        rootElement.appendChild(el);
        return () => rootElement.removeChild(el);
    }, [rootElement, el]);
    // update coordinates of filter panel
    const updateTooltipCoords = (button) => {
        const buttonDetails = button.getBoundingClientRect();
        let rootWidth = rootElement.clientWidth;
        let _coords = {
            top: buttonDetails.y + window.scrollY - 15,
            right: rootWidth - buttonDetails.right - 15
        };
        setCoords(_coords);
    };
    // callbacks
    const onOpenPanel = () => {
        setShopPanel(true);
        if (typeof props.onOpen == "function") {
            props.onOpen();
        }
    };
    const onClosePanel = () => {
        setShopPanel(false);
        if (typeof props.onClose == "function") {
            props.onClose();
        }
    };
    // render filter panel
    const renderPanelContent = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "filter-panel", style: coords },
                React.createElement("div", { className: "filter-header" },
                    React.createElement("div", { className: "fh-title" },
                        React.createElement("div", { className: "fht-icon" }),
                        React.createElement("div", { className: "fht-text" }, "Filters")),
                    React.createElement("div", { className: "burger-menu-btn", onClick: onClosePanel })),
                React.createElement("div", { className: "filter-body" }, props.children))));
    };
    const renderFilterPanel = () => {
        return ReactDom.createPortal(renderPanelContent(), rootElement);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "filter-panel-btn fpb-burger-menu", onClick: (e) => {
                updateTooltipCoords(e.target);
                onOpenPanel();
            } }),
        shopPanel ?
            renderFilterPanel()
            :
                null));
}
exports.default = FilterPanel;


/***/ }),

/***/ "./src/components/Layout/Layout.scss":
/*!*******************************************!*\
  !*** ./src/components/Layout/Layout.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Layout.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Layout.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./Layout.scss */ "./src/components/Layout/Layout.scss");
const FilterPanel_1 = __webpack_require__(/*! ../FilterPanel/FilterPanel */ "./src/components/FilterPanel/FilterPanel.tsx");
function Layout(props) {
    const onOpenFilterPanel = () => {
        console.log("Opening filter panel");
    };
    const oncloseFilterPanel = () => {
        console.log("Closing filter panel");
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "widget" },
                React.createElement("div", { className: "widget-header" },
                    React.createElement("div", { className: "wh-title" }, "Sample Widget"),
                    React.createElement("div", { className: "wh-toolbar" },
                        React.createElement(FilterPanel_1.default, { onOpen: onOpenFilterPanel, onClose: oncloseFilterPanel },
                            React.createElement("div", { className: "fb-row" },
                                React.createElement("div", { className: "fb-label" }, "Tenant"),
                                React.createElement("select", { name: "", id: "", className: "fb-filter" },
                                    React.createElement("option", { value: "" }, "Select a tenant"))),
                            React.createElement("div", { className: "fb-row" },
                                React.createElement("div", { className: "fb-label" }, "Location"),
                                React.createElement("select", { name: "", id: "", className: "fb-filter" },
                                    React.createElement("option", { value: "" }, "Select a Location")))))),
                React.createElement("div", { className: "widget-body" },
                    React.createElement("h1", null, "Widget Content"),
                    React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus, ullam repellat quidem consectetur a cupiditate obcaecati incidunt ipsum voluptatem veniam voluptatibus sint, sed saepe, ipsam dicta numquam distinctio doloribus. Quae, tempora? Officiis laborum natus molestias qui nesciunt mollitia, accusantium obcaecati repellat amet suscipit inventore cum vel, debitis accusamus odit repellendus adipisci, assumenda est culpa optio. Sunt quisquam porro odit. Ipsa, eum praesentium ea sed a magni dolorum vel natus ratione asperiores voluptatem saepe aliquam, dolorem expedita sit minima. Ad distinctio repellat ut minima dolores maiores in omnis vitae eum. Perspiciatis reiciendis hic, alias quibusdam autem dolore magni vel provident fuga eum tempora! Ipsum mollitia illo soluta praesentium optio perspiciatis velit dolor voluptatem, accusantium quas. Voluptatum, tempore voluptates? Possimus, dolores. Dolor, obcaecati. Rerum tempora quisquam perspiciatis? Deserunt vero asperiores eum? Eligendi perspiciatis, ducimus neque impedit repellat beatae libero amet recusandae pariatur hic dolore nostrum consequatur ipsum aperiam minima et maiores!"))))));
}
exports.default = Layout;


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
const Layout_1 = __webpack_require__(/*! ./components/Layout/Layout */ "./src/components/Layout/Layout.tsx");
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
ReactDom.render(React.createElement(Layout_1.default, null), document.getElementById("root"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map