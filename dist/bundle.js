/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: whitesmoke;\r\n}\r\n\r\na,\r\nbutton,\r\ninput {\r\n  font-family: inherit;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n.todo-container {\r\n  margin: 0 auto;\r\n  width: 25rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(218, 218, 218);\r\n  gap: 1px;\r\n  box-shadow: 0 2.5px 6px rgba(0, 0, 0, 0.2);\r\n  margin-top: 200px;\r\n  border-radius: 0.9rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.todo-container input {\r\n  background-color: transparent;\r\n}\r\n\r\n.todo-container .icon {\r\n  padding: 0.4em;\r\n  cursor: pointer;\r\n  color: rgb(177, 177, 177);\r\n}\r\n\r\n.todo-container .icon.move {\r\n  cursor: move;\r\n}\r\n\r\n.todo-container .icon:hover {\r\n  color: rgb(85, 85, 85);\r\n}\r\n\r\n.todo-container .title {\r\n  display: flex;\r\n  padding: 1rem 0;\r\n  padding-left: 1rem;\r\n  background-color: white;\r\n  align-items: center;\r\n}\r\n\r\n#refresh-todo-icon {\r\n  padding: 0.4em;\r\n  color: gray;\r\n  opacity: 0;\r\n  transition: opacity 120ms;\r\n  animation: refresh-rotation 1s infinite linear;\r\n}\r\n\r\n#refresh-todo-icon.active {\r\n  opacity: 1;\r\n}\r\n\r\n#refresh-todo-icon i {\r\n  vertical-align: middle;\r\n}\r\n\r\n@keyframes refresh-rotation {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.todo-container .title p {\r\n  flex-grow: 1;\r\n  font-weight: 600;\r\n  color: gray;\r\n}\r\n\r\n.add-todo {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-grow: 0;\r\n  padding: 1em 0;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.add-todo input {\r\n  flex-grow: 1;\r\n  font-style: italic;\r\n}\r\n\r\n.todo-container .add-todo .icon {\r\n  font-size: 0.5rem;\r\n  padding-right: 0.8rem;\r\n}\r\n\r\n.todo-items-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1px;\r\n  position: relative;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  height: 3rem;\r\n  background-color: white;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.todo-item.selected {\r\n  visibility: hidden;\r\n}\r\n\r\n.todo-item.highlight {\r\n  background-color: #f4f5cc;\r\n}\r\n\r\n.todo-item .input-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-grow: 1;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.todo-item .input-box input {\r\n  height: 100%;\r\n  flex-grow: 1;\r\n}\r\n\r\n.todo-item .input-box input.checked {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n\r\n.clear-completed-container {\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.todo-item .input-box .delete {\r\n  position: absolute;\r\n  display: none;\r\n  right: 0;\r\n}\r\n\r\n.todo-item .input-box:focus-within .delete {\r\n  display: block;\r\n}\r\n\r\n.todo-item .input-box .delete:hover {\r\n  color: crimson;\r\n}\r\n\r\n.clear-btn {\r\n  border: none;\r\n  background: transparent;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  margin: 0 auto;\r\n  display: block;\r\n  padding: 0.8em;\r\n}\r\n\r\n.clear-btn:hover {\r\n  text-decoration: underline;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,yCAAyC;EACzC,4BAA4B;AAC9B;;AAEA;;;EAGE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,oCAAoC;EACpC,QAAQ;EACR,0CAA0C;EAC1C,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,UAAU;EACV,yBAAyB;EACzB,8CAA8C;AAChD;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,eAAe;EACf,cAAc;EACd,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: whitesmoke;\r\n}\r\n\r\na,\r\nbutton,\r\ninput {\r\n  font-family: inherit;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n.todo-container {\r\n  margin: 0 auto;\r\n  width: 25rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(218, 218, 218);\r\n  gap: 1px;\r\n  box-shadow: 0 2.5px 6px rgba(0, 0, 0, 0.2);\r\n  margin-top: 200px;\r\n  border-radius: 0.9rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.todo-container input {\r\n  background-color: transparent;\r\n}\r\n\r\n.todo-container .icon {\r\n  padding: 0.4em;\r\n  cursor: pointer;\r\n  color: rgb(177, 177, 177);\r\n}\r\n\r\n.todo-container .icon.move {\r\n  cursor: move;\r\n}\r\n\r\n.todo-container .icon:hover {\r\n  color: rgb(85, 85, 85);\r\n}\r\n\r\n.todo-container .title {\r\n  display: flex;\r\n  padding: 1rem 0;\r\n  padding-left: 1rem;\r\n  background-color: white;\r\n  align-items: center;\r\n}\r\n\r\n#refresh-todo-icon {\r\n  padding: 0.4em;\r\n  color: gray;\r\n  opacity: 0;\r\n  transition: opacity 120ms;\r\n  animation: refresh-rotation 1s infinite linear;\r\n}\r\n\r\n#refresh-todo-icon.active {\r\n  opacity: 1;\r\n}\r\n\r\n#refresh-todo-icon i {\r\n  vertical-align: middle;\r\n}\r\n\r\n@keyframes refresh-rotation {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.todo-container .title p {\r\n  flex-grow: 1;\r\n  font-weight: 600;\r\n  color: gray;\r\n}\r\n\r\n.add-todo {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-grow: 0;\r\n  padding: 1em 0;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.add-todo input {\r\n  flex-grow: 1;\r\n  font-style: italic;\r\n}\r\n\r\n.todo-container .add-todo .icon {\r\n  font-size: 0.5rem;\r\n  padding-right: 0.8rem;\r\n}\r\n\r\n.todo-items-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1px;\r\n  position: relative;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  height: 3rem;\r\n  background-color: white;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.todo-item.selected {\r\n  visibility: hidden;\r\n}\r\n\r\n.todo-item.highlight {\r\n  background-color: #f4f5cc;\r\n}\r\n\r\n.todo-item .input-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-grow: 1;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.todo-item .input-box input {\r\n  height: 100%;\r\n  flex-grow: 1;\r\n}\r\n\r\n.todo-item .input-box input.checked {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n\r\n.clear-completed-container {\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.todo-item .input-box .delete {\r\n  position: absolute;\r\n  display: none;\r\n  right: 0;\r\n}\r\n\r\n.todo-item .input-box:focus-within .delete {\r\n  display: block;\r\n}\r\n\r\n.todo-item .input-box .delete:hover {\r\n  color: crimson;\r\n}\r\n\r\n.clear-btn {\r\n  border: none;\r\n  background: transparent;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  margin: 0 auto;\r\n  display: block;\r\n  padding: 0.8em;\r\n}\r\n\r\n.clear-btn:hover {\r\n  text-decoration: underline;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addRemoveFunctions.js":
/*!***********************************!*\
  !*** ./src/addRemoveFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "onSubmit": () => (/* binding */ onSubmit),
/* harmony export */   "removeCompleted": () => (/* binding */ removeCompleted)
/* harmony export */ });
/* harmony import */ var _setCompleted_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setCompleted.js */ "./src/setCompleted.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");



const todoContainerElement = document.querySelector('.todo-container .todo-items-container');

const removeTodoItem = (todoElem) => {
  _storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.splice(todoElem.id, 1);
  todoElem.remove();
  // reset todo elements indexes
  todoContainerElement.querySelectorAll('.todo-item')
    .forEach((item, idx) => { item.id = idx; });
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data);
};

const editTodoItem = (item, newValue) => {
  item.description = newValue.trim();
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data);
};

let active = false;
let offsetLeft;
let offsetTop;
let offsetFromMoveBtnX;
let offsetFromMoveBtnY;

const PLACEHOLDER = document.createElement('div');
PLACEHOLDER.id = 'placeholder';
PLACEHOLDER.style.position = 'absolute';
PLACEHOLDER.style.width = '384px';
PLACEHOLDER.style.outline = '1px solid black';
// PLACEHOLDER.style.height = '52px';

const createTodo = (item) => {
  const todoElem = document.createElement('div');
  todoElem.id = item.index;
  todoElem.classList.add('todo-item');
  const innerHtml = `
      <input type="checkbox">
      <div class="input-box">
        <input type="text">
        <div class="icon delete">
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
      <div class="icon move">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      `;

  todoElem.innerHTML = innerHtml;
  const inputBox = todoElem.querySelector('.input-box input');
  const checkboxInput = todoElem.querySelector('input[type="checkbox"]');
  const deleteBtn = todoElem.querySelector('.icon.delete');
  const moveBtn = todoElem.querySelector('.icon.move');

  inputBox.addEventListener('change', (e) => {
    editTodoItem((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getItem)(todoElem.id), e.currentTarget.value);
    e.currentTarget.value = e.currentTarget.value.trim();
  });
  inputBox.addEventListener('focus', () => {
    todoElem.classList.add('highlight');
    inputBox.classList.remove('checked');
  });
  inputBox.addEventListener('blur', () => {
    todoElem.classList.remove('highlight');
    if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getItem)(todoElem.id).completed) {
      inputBox.classList.add('checked');
    }
  });

  inputBox.value = item.description;
  if (item.completed) {
    inputBox.classList.add('checked');
  }

  checkboxInput.checked = item.completed;

  checkboxInput.addEventListener('change', (e) => {
    (0,_setCompleted_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getItem)(todoElem.id), inputBox);
  });

  deleteBtn.addEventListener('mousedown', () => {
    removeTodoItem(todoElem);
  });

  let lastIndex = null;

  const mouseMoved = (e) => {
    e.preventDefault();
    if (!active) return;
    offsetLeft = e.pageX - (todoContainerElement.getBoundingClientRect().left + window.scrollX);
    offsetTop = e.pageY - (todoContainerElement.getBoundingClientRect().top + window.scrollY);
    PLACEHOLDER.style.left = `${offsetLeft - offsetFromMoveBtnX}px`;
    PLACEHOLDER.style.top = `${offsetTop - offsetFromMoveBtnY}px`;

    const todoItemIndex = Math.floor(offsetTop / 52);

    if (lastIndex !== todoItemIndex && todoItemIndex >= 0) {
      todoElem.remove();
      todoContainerElement.insertBefore(todoElem, todoContainerElement.children[todoItemIndex]);
      lastIndex = todoItemIndex;

      const elements = Array.from(document.querySelectorAll('.todo-item:not(#placeholder)'));
      _storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data = elements.map((elem, idx) => {
        elem.id = idx;
        return {
          description: elem.querySelector('input[type="text"]').value,
          complted: elem.querySelector('input[type="checkbox"]').checked,
          index: idx,
        };
      });
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data);
    }
  };

  moveBtn.addEventListener('mousedown', (e) => {
    e.preventDefault();
    active = true;
    document.addEventListener('mousemove', mouseMoved);
    offsetFromMoveBtnX = e.pageX - (todoElem.getBoundingClientRect().left + window.scrollX);
    offsetFromMoveBtnY = e.pageY - (todoElem.getBoundingClientRect().top + window.scrollY);

    offsetLeft = e.pageX - (todoContainerElement.getBoundingClientRect().left + window.scrollX);
    offsetTop = e.pageY - (todoContainerElement.getBoundingClientRect().top + window.scrollY);
    PLACEHOLDER.style.left = `${offsetLeft - offsetFromMoveBtnX}px`;
    PLACEHOLDER.style.top = `${offsetTop - offsetFromMoveBtnY}px`;

    // const newNode = todoElem.cloneNode(true);
    PLACEHOLDER.innerHTML = todoElem.innerHTML;
    PLACEHOLDER.querySelector('input[type="text"]').value = inputBox.value;
    PLACEHOLDER.classList.add('todo-item');
    todoElem.classList.add('selected');
    todoContainerElement.appendChild(PLACEHOLDER);
  });

  document.addEventListener('mouseup', () => {
    active = false;
    todoElem.classList.remove('selected');
    document.removeEventListener('mousemove', mouseMoved);
    PLACEHOLDER.remove();
  });

  todoContainerElement.appendChild(todoElem);
};

// NOTE: disable drag start for firefox
todoContainerElement.addEventListener('dragstart', (e) => {
  e.preventDefault();
});

const onSubmit = () => {
  const addTodoInput = document.getElementById('add-todo-input');
  if (!addTodoInput.value) {
    return;
  }
  const newItem = {
    description: addTodoInput.value,
    completed: false,
    index: _storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.length,
  };
  _storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.push(newItem);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data);
  createTodo(newItem, _storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.length - 1);
  addTodoInput.value = '';
  addTodoInput.focus();
};

const removeCompleted = () => {
  const notCompletedList = _storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.filter((i) => !i.completed);
  const todoElements = document.querySelectorAll('.todo-item');
  _storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.filter((item) => item.completed)
    .map((item) => Array.from(todoElements).find((i) => parseInt(i.id, 10) === item.index))
    .forEach((element) => element.remove());

  _storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data = notCompletedList;
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data);

  // reset todo elements indexes
  todoContainerElement.querySelectorAll('.todo-item')
    .forEach((item, idx) => { item.id = idx; });
};

/***/ }),

/***/ "./src/setCompleted.js":
/*!*****************************!*\
  !*** ./src/setCompleted.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((e, item, inputBox) => {
  item.completed = e.currentTarget.checked;
  if (e.currentTarget.checked) {
    inputBox.classList.add('checked');
  } else {
    inputBox.classList.remove('checked');
  }

  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(_storage_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data);
});


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORAGE_NAME": () => (/* binding */ STORAGE_NAME),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage),
/* harmony export */   "todoList": () => (/* binding */ todoList),
/* harmony export */   "getItem": () => (/* binding */ getItem)
/* harmony export */ });
const STORAGE_NAME = 'todo-list';

let timeout;
const refreshIcon = document.getElementById('refresh-todo-icon');
const updateStorage = (newList) => {
  clearTimeout(timeout);
  refreshIcon.classList.add('active');
  // update todo items indexes
  newList.forEach((item, idx) => {
    item.index = idx;
  });
  localStorage.setItem(STORAGE_NAME, JSON.stringify(newList));
  timeout = setTimeout(() => {
    refreshIcon.classList.remove('active');
  }, 400);
};

const createTodoList = () => {
  const prevStorage = JSON.parse(localStorage.getItem(STORAGE_NAME));
  if (prevStorage && prevStorage.length) {
    return prevStorage;
  }
  const data = [];
  updateStorage(data);
  return data;
};

const todoList = {
  data: createTodoList(),
};

const getItem = (id) => todoList.data.find((item) => item.index === parseInt(id, 10));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _addRemoveFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addRemoveFunctions.js */ "./src/addRemoveFunctions.js");





window.addEventListener('load', () => {
  const populate = () => {
    _storage_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.forEach((item) => {
      (0,_addRemoveFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createTodo)(item);
    });
  };

  populate();

  const addTodoBtn = document.getElementById('add-todo-btn');
  const submitBtn = document.querySelector('form');
  const clearCompletedBtn = document.getElementById('clear-completed-btn');

  addTodoBtn.addEventListener('click', _addRemoveFunctions_js__WEBPACK_IMPORTED_MODULE_2__.onSubmit);
  submitBtn.addEventListener('submit', (e) => e.preventDefault() || (0,_addRemoveFunctions_js__WEBPACK_IMPORTED_MODULE_2__.onSubmit)());

  clearCompletedBtn.addEventListener('click', () => {
    (0,_addRemoveFunctions_js__WEBPACK_IMPORTED_MODULE_2__.removeCompleted)();
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsMERBQWEsQ0FBQyxzREFBYTtBQUM3QixDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hLOztBQUVQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87Ozs7OztVQy9CUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRW1CO0FBQ3dDOztBQUVoRjtBQUNBO0FBQ0EsSUFBSSw4REFBcUI7QUFDekIsTUFBTSxrRUFBVTtBQUNoQixLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVDQUF1Qyw0REFBUTtBQUMvQyxvRUFBb0UsZ0VBQVE7O0FBRTVFO0FBQ0EsSUFBSSx1RUFBZTtBQUNuQixHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvYWRkUmVtb3ZlRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9zZXRDb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogMjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXHJcXG4gIGdhcDogMXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyLjVweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgbWFyZ2luLXRvcDogMjAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjlyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIgaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciAuaWNvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjRlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciAuaWNvbi5tb3ZlIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIC5pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciAudGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gtdG9kby1pY29uIHtcXHJcXG4gIHBhZGRpbmc6IDAuNGVtO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMjBtcztcXHJcXG4gIGFuaW1hdGlvbjogcmVmcmVzaC1yb3RhdGlvbiAxcyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLXRvZG8taWNvbi5hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gtdG9kby1pY29uIGkge1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyByZWZyZXNoLXJvdGF0aW9uIHtcXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIgLnRpdGxlIHAge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1ncm93OiAwO1xcclxcbiAgcGFkZGluZzogMWVtIDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtdG9kbyBpbnB1dCB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciAuYWRkLXRvZG8gLmljb24ge1xcclxcbiAgZm9udC1zaXplOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW1zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0uc2VsZWN0ZWQge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtLmhpZ2hsaWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWNjO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIC5pbnB1dC1ib3gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gLmlucHV0LWJveCBpbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gLmlucHV0LWJveCBpbnB1dC5jaGVja2VkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1jb21wbGV0ZWQtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gLmlucHV0LWJveCAuZGVsZXRlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSAuaW5wdXQtYm94OmZvY3VzLXdpdGhpbiAuZGVsZXRlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIC5pbnB1dC1ib3ggLmRlbGV0ZTpob3ZlciB7XFxyXFxuICBjb2xvcjogY3JpbXNvbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWJ0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWJ0bjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsNEJBQTRCO0FBQzlCOztBQUVBOzs7RUFHRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLFFBQVE7RUFDUiwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiAyNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcclxcbiAgZ2FwOiAxcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIuNXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBtYXJnaW4tdG9wOiAyMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuOXJlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIC5pY29uIHtcXHJcXG4gIHBhZGRpbmc6IDAuNGVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIC5pY29uLm1vdmUge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIgLmljb246aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIC50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVmcmVzaC10b2RvLWljb24ge1xcclxcbiAgcGFkZGluZzogMC40ZW07XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEyMG1zO1xcclxcbiAgYW5pbWF0aW9uOiByZWZyZXNoLXJvdGF0aW9uIDFzIGluZmluaXRlIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gtdG9kby1pY29uLmFjdGl2ZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVmcmVzaC10b2RvLWljb24gaSB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJlZnJlc2gtcm90YXRpb24ge1xcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciAudGl0bGUgcCB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdG9kbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWdyb3c6IDA7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10b2RvIGlucHV0IHtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIC5hZGQtdG9kbyAuaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbXMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS5zZWxlY3RlZCB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0uaGlnaGxpZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1Y2M7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gLmlucHV0LWJveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSAuaW5wdXQtYm94IGlucHV0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSAuaW5wdXQtYm94IGlucHV0LmNoZWNrZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWNvbXBsZXRlZC1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSAuaW5wdXQtYm94IC5kZWxldGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIC5pbnB1dC1ib3g6Zm9jdXMtd2l0aGluIC5kZWxldGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gLmlucHV0LWJveCAuZGVsZXRlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBjcmltc29uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYnRuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYnRuOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzZXRDb21wbGV0ZWQgZnJvbSAnLi9zZXRDb21wbGV0ZWQuanMnO1xuaW1wb3J0IHsgdG9kb0xpc3QsIHVwZGF0ZVN0b3JhZ2UsIGdldEl0ZW0gfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5jb25zdCB0b2RvQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lciAudG9kby1pdGVtcy1jb250YWluZXInKTtcblxuY29uc3QgcmVtb3ZlVG9kb0l0ZW0gPSAodG9kb0VsZW0pID0+IHtcbiAgdG9kb0xpc3QuZGF0YS5zcGxpY2UodG9kb0VsZW0uaWQsIDEpO1xuICB0b2RvRWxlbS5yZW1vdmUoKTtcbiAgLy8gcmVzZXQgdG9kbyBlbGVtZW50cyBpbmRleGVzXG4gIHRvZG9Db250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKVxuICAgIC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHsgaXRlbS5pZCA9IGlkeDsgfSk7XG4gIHVwZGF0ZVN0b3JhZ2UodG9kb0xpc3QuZGF0YSk7XG59O1xuXG5jb25zdCBlZGl0VG9kb0l0ZW0gPSAoaXRlbSwgbmV3VmFsdWUpID0+IHtcbiAgaXRlbS5kZXNjcmlwdGlvbiA9IG5ld1ZhbHVlLnRyaW0oKTtcbiAgdXBkYXRlU3RvcmFnZSh0b2RvTGlzdC5kYXRhKTtcbn07XG5cbmxldCBhY3RpdmUgPSBmYWxzZTtcbmxldCBvZmZzZXRMZWZ0O1xubGV0IG9mZnNldFRvcDtcbmxldCBvZmZzZXRGcm9tTW92ZUJ0blg7XG5sZXQgb2Zmc2V0RnJvbU1vdmVCdG5ZO1xuXG5jb25zdCBQTEFDRUhPTERFUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuUExBQ0VIT0xERVIuaWQgPSAncGxhY2Vob2xkZXInO1xuUExBQ0VIT0xERVIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuUExBQ0VIT0xERVIuc3R5bGUud2lkdGggPSAnMzg0cHgnO1xuUExBQ0VIT0xERVIuc3R5bGUub3V0bGluZSA9ICcxcHggc29saWQgYmxhY2snO1xuLy8gUExBQ0VIT0xERVIuc3R5bGUuaGVpZ2h0ID0gJzUycHgnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVG9kbyA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IHRvZG9FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9FbGVtLmlkID0gaXRlbS5pbmRleDtcbiAgdG9kb0VsZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gIGNvbnN0IGlubmVySHRtbCA9IGBcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIGRlbGV0ZVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdFwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uIG1vdmVcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZWxsaXBzaXMtdlwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcblxuICB0b2RvRWxlbS5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gIGNvbnN0IGlucHV0Qm94ID0gdG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLmlucHV0LWJveCBpbnB1dCcpO1xuICBjb25zdCBjaGVja2JveElucHV0ID0gdG9kb0VsZW0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IHRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5pY29uLmRlbGV0ZScpO1xuICBjb25zdCBtb3ZlQnRuID0gdG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLmljb24ubW92ZScpO1xuXG4gIGlucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgZWRpdFRvZG9JdGVtKGdldEl0ZW0odG9kb0VsZW0uaWQpLCBlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZS50cmltKCk7XG4gIH0pO1xuICBpbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICB0b2RvRWxlbS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICBpbnB1dEJveC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gIH0pO1xuICBpbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIHRvZG9FbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgIGlmIChnZXRJdGVtKHRvZG9FbGVtLmlkKS5jb21wbGV0ZWQpIHtcbiAgICAgIGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlucHV0Qm94LnZhbHVlID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgaWYgKGl0ZW0uY29tcGxldGVkKSB7XG4gICAgaW5wdXRCb3guY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICB9XG5cbiAgY2hlY2tib3hJbnB1dC5jaGVja2VkID0gaXRlbS5jb21wbGV0ZWQ7XG5cbiAgY2hlY2tib3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIHNldENvbXBsZXRlZChlLCBnZXRJdGVtKHRvZG9FbGVtLmlkKSwgaW5wdXRCb3gpO1xuICB9KTtcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgIHJlbW92ZVRvZG9JdGVtKHRvZG9FbGVtKTtcbiAgfSk7XG5cbiAgbGV0IGxhc3RJbmRleCA9IG51bGw7XG5cbiAgY29uc3QgbW91c2VNb3ZlZCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghYWN0aXZlKSByZXR1cm47XG4gICAgb2Zmc2V0TGVmdCA9IGUucGFnZVggLSAodG9kb0NvbnRhaW5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHdpbmRvdy5zY3JvbGxYKTtcbiAgICBvZmZzZXRUb3AgPSBlLnBhZ2VZIC0gKHRvZG9Db250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZKTtcbiAgICBQTEFDRUhPTERFUi5zdHlsZS5sZWZ0ID0gYCR7b2Zmc2V0TGVmdCAtIG9mZnNldEZyb21Nb3ZlQnRuWH1weGA7XG4gICAgUExBQ0VIT0xERVIuc3R5bGUudG9wID0gYCR7b2Zmc2V0VG9wIC0gb2Zmc2V0RnJvbU1vdmVCdG5ZfXB4YDtcblxuICAgIGNvbnN0IHRvZG9JdGVtSW5kZXggPSBNYXRoLmZsb29yKG9mZnNldFRvcCAvIDUyKTtcblxuICAgIGlmIChsYXN0SW5kZXggIT09IHRvZG9JdGVtSW5kZXggJiYgdG9kb0l0ZW1JbmRleCA+PSAwKSB7XG4gICAgICB0b2RvRWxlbS5yZW1vdmUoKTtcbiAgICAgIHRvZG9Db250YWluZXJFbGVtZW50Lmluc2VydEJlZm9yZSh0b2RvRWxlbSwgdG9kb0NvbnRhaW5lckVsZW1lbnQuY2hpbGRyZW5bdG9kb0l0ZW1JbmRleF0pO1xuICAgICAgbGFzdEluZGV4ID0gdG9kb0l0ZW1JbmRleDtcblxuICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW06bm90KCNwbGFjZWhvbGRlciknKSk7XG4gICAgICB0b2RvTGlzdC5kYXRhID0gZWxlbWVudHMubWFwKChlbGVtLCBpZHgpID0+IHtcbiAgICAgICAgZWxlbS5pZCA9IGlkeDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLnZhbHVlLFxuICAgICAgICAgIGNvbXBsdGVkOiBlbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmNoZWNrZWQsXG4gICAgICAgICAgaW5kZXg6IGlkeCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgdXBkYXRlU3RvcmFnZSh0b2RvTGlzdC5kYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhY3RpdmUgPSB0cnVlO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZWQpO1xuICAgIG9mZnNldEZyb21Nb3ZlQnRuWCA9IGUucGFnZVggLSAodG9kb0VsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHdpbmRvdy5zY3JvbGxYKTtcbiAgICBvZmZzZXRGcm9tTW92ZUJ0blkgPSBlLnBhZ2VZIC0gKHRvZG9FbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZKTtcblxuICAgIG9mZnNldExlZnQgPSBlLnBhZ2VYIC0gKHRvZG9Db250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCk7XG4gICAgb2Zmc2V0VG9wID0gZS5wYWdlWSAtICh0b2RvQ29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSk7XG4gICAgUExBQ0VIT0xERVIuc3R5bGUubGVmdCA9IGAke29mZnNldExlZnQgLSBvZmZzZXRGcm9tTW92ZUJ0blh9cHhgO1xuICAgIFBMQUNFSE9MREVSLnN0eWxlLnRvcCA9IGAke29mZnNldFRvcCAtIG9mZnNldEZyb21Nb3ZlQnRuWX1weGA7XG5cbiAgICAvLyBjb25zdCBuZXdOb2RlID0gdG9kb0VsZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgIFBMQUNFSE9MREVSLmlubmVySFRNTCA9IHRvZG9FbGVtLmlubmVySFRNTDtcbiAgICBQTEFDRUhPTERFUi5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLnZhbHVlID0gaW5wdXRCb3gudmFsdWU7XG4gICAgUExBQ0VIT0xERVIuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gICAgdG9kb0VsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB0b2RvQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChQTEFDRUhPTERFUik7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgYWN0aXZlID0gZmFsc2U7XG4gICAgdG9kb0VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVkKTtcbiAgICBQTEFDRUhPTERFUi5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgdG9kb0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0VsZW0pO1xufTtcblxuLy8gTk9URTogZGlzYWJsZSBkcmFnIHN0YXJ0IGZvciBmaXJlZm94XG50b2RvQ29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xuICBjb25zdCBhZGRUb2RvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8taW5wdXQnKTtcbiAgaWYgKCFhZGRUb2RvSW5wdXQudmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbmV3SXRlbSA9IHtcbiAgICBkZXNjcmlwdGlvbjogYWRkVG9kb0lucHV0LnZhbHVlLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgaW5kZXg6IHRvZG9MaXN0LmRhdGEubGVuZ3RoLFxuICB9O1xuICB0b2RvTGlzdC5kYXRhLnB1c2gobmV3SXRlbSk7XG4gIHVwZGF0ZVN0b3JhZ2UodG9kb0xpc3QuZGF0YSk7XG4gIGNyZWF0ZVRvZG8obmV3SXRlbSwgdG9kb0xpc3QuZGF0YS5sZW5ndGggLSAxKTtcbiAgYWRkVG9kb0lucHV0LnZhbHVlID0gJyc7XG4gIGFkZFRvZG9JbnB1dC5mb2N1cygpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvbXBsZXRlZCA9ICgpID0+IHtcbiAgY29uc3Qgbm90Q29tcGxldGVkTGlzdCA9IHRvZG9MaXN0LmRhdGEuZmlsdGVyKChpKSA9PiAhaS5jb21wbGV0ZWQpO1xuICBjb25zdCB0b2RvRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtJyk7XG4gIHRvZG9MaXN0LmRhdGFcbiAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZClcbiAgICAubWFwKChpdGVtKSA9PiBBcnJheS5mcm9tKHRvZG9FbGVtZW50cykuZmluZCgoaSkgPT4gcGFyc2VJbnQoaS5pZCwgMTApID09PSBpdGVtLmluZGV4KSlcbiAgICAuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG5cbiAgdG9kb0xpc3QuZGF0YSA9IG5vdENvbXBsZXRlZExpc3Q7XG4gIHVwZGF0ZVN0b3JhZ2UodG9kb0xpc3QuZGF0YSk7XG5cbiAgLy8gcmVzZXQgdG9kbyBlbGVtZW50cyBpbmRleGVzXG4gIHRvZG9Db250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKVxuICAgIC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHsgaXRlbS5pZCA9IGlkeDsgfSk7XG59OyIsImltcG9ydCB7IHVwZGF0ZVN0b3JhZ2UsIHRvZG9MaXN0IH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKGUsIGl0ZW0sIGlucHV0Qm94KSA9PiB7XG4gIGl0ZW0uY29tcGxldGVkID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQ7XG4gIGlmIChlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgIGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dEJveC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gIH1cblxuICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LmRhdGEpO1xufTtcbiIsImV4cG9ydCBjb25zdCBTVE9SQUdFX05BTUUgPSAndG9kby1saXN0JztcblxubGV0IHRpbWVvdXQ7XG5jb25zdCByZWZyZXNoSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoLXRvZG8taWNvbicpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0b3JhZ2UgPSAobmV3TGlzdCkgPT4ge1xuICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIHJlZnJlc2hJY29uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAvLyB1cGRhdGUgdG9kbyBpdGVtcyBpbmRleGVzXG4gIG5ld0xpc3QuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgaXRlbS5pbmRleCA9IGlkeDtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfTkFNRSwgSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpO1xuICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVmcmVzaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0sIDQwMCk7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJldlN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfTkFNRSkpO1xuICBpZiAocHJldlN0b3JhZ2UgJiYgcHJldlN0b3JhZ2UubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHByZXZTdG9yYWdlO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBbXTtcbiAgdXBkYXRlU3RvcmFnZShkYXRhKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgdG9kb0xpc3QgPSB7XG4gIGRhdGE6IGNyZWF0ZVRvZG9MaXN0KCksXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SXRlbSA9IChpZCkgPT4gdG9kb0xpc3QuZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLmluZGV4ID09PSBwYXJzZUludChpZCwgMTApKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB7IG9uU3VibWl0LCBjcmVhdGVUb2RvLCByZW1vdmVDb21wbGV0ZWQgfSBmcm9tICcuL2FkZFJlbW92ZUZ1bmN0aW9ucy5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBjb25zdCBwb3B1bGF0ZSA9ICgpID0+IHtcbiAgICB0b2RvTGlzdC5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNyZWF0ZVRvZG8oaXRlbSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcG9wdWxhdGUoKTtcblxuICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWJ0bicpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IGNsZWFyQ29tcGxldGVkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWNvbXBsZXRlZC1idG4nKTtcblxuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25TdWJtaXQpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSB8fCBvblN1Ym1pdCgpKTtcblxuICBjbGVhckNvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW1vdmVDb21wbGV0ZWQoKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==