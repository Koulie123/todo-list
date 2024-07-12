/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --sky-4: #38bdf8;
    --sky-3: #7dd3fc;
    --sky-2: #bae6fd;
    --sky-1: #e0f2fe;
    --sky-05: #f0f9ff;
    --sky-95: #082f49;

}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.side-menu {
    grid-column: 1/2;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, minmax(200px, 250px));
}
.side-menu > div {
}
.side-menu > div > button {
    background-color: var(--sky-1);
    border: 0;
    width: 100%;

}
.side-menu > div > button:hover {
    background-color: var(--sky-05);
}
.main-container {
    display: grid;
    grid-template-columns: 200px 1fr;
    background-color: var(--sky-2);
    min-height: 2000px;
}
.center-container {
    grid-column: 2/3;
    background-color: var(--sky-1);
}

.todos-container {
    grid-column: 2/3;
}
.form-input-section > label {
    width: 9rem;
}
.form-input-section > span > label {
    width: 8rem;
}
#todo-creation {
    display: grid;
    grid-template-columns: 40% 40%;
    max-width: 100%;
}


.form-input-section {
    display: grid;
    align-items: center;
}
#todo-creation > .title {
    grid-column: 1/2;

}
#todo-creation > .due-date {
    grid-column: 2/3;
}
#todo-creation > .priority {
    grid-column: 1/2;
}
#todo-creation > .description {
    grid-column: 1/3;
    display: flex;
    justify-content: start;
    align-items: start;
}
#todo-creation > .notes {
    grid-column: 1/3;
    display: flex;
    justify-content: start;
    align-items: start;
}
#todo-creation > button {
    width: 8rem;
}
.todos-container {
    margin: 1rem;
}
.no-display {
    display: none;
}
table {
    width: 100%;
}
/* TABLES */
table, td, th {
    border: 1px solid black;
    padding: 0px;
    margin: 0px;
}
.todo-row:hover {
    background-color: var(--sky-05);
}
.footer {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--sky-95);
    color: white;
}




/* DIALOG BOXES */
dialog {
    position: fixed;
    top: 50px;
    width: 400px;
    left: calc(50% - 200px);
    min-height: 300px;
}

#new-project {
    display: grid;
    grid-template-rows: 2rem 1fr;
}
form > div.title-area {
    grid-row: 1/2;
}
.form-body {
    padding: 4px;
    margin: 6px;
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 8rem 1fr;
    grid-template-rows: repeat(auto-fit, auto);
}
.form-body > div {
    display: grid;
    grid-template-columns: 8rem 1fr;
}
.form-body > div > .form-input {
    grid-column: 2/3;
}
.form-body > .description {
    grid-row: 2/3;
}
.form-body > .submit-div {
    grid-column: 1/-1;
    display: flex;
    justify-content: center;
}




/* PROJECT RELATED */
.project-table {
    margin: 2rem 1rem 2rem 1rem;
}

`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;;AAErB;AACA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,mDAAmD;AACvD;AACA;AACA;AACA;IACI,8BAA8B;IAC9B,SAAS;IACT,WAAW;;AAEf;AACA;IACI,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,gCAAgC;IAChC,8BAA8B;IAC9B,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,gBAAgB;;AAEpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;AACf;AACA,WAAW;AACX;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;AACA;IACI,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,+BAA+B;IAC/B,YAAY;AAChB;;;;;AAKA,iBAAiB;AACjB;IACI,eAAe;IACf,SAAS;IACT,YAAY;IACZ,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,4BAA4B;AAChC;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,aAAa;IACb,+BAA+B;IAC/B,0CAA0C;AAC9C;AACA;IACI,aAAa;IACb,+BAA+B;AACnC;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;AAC3B;;;;;AAKA,oBAAoB;AACpB;IACI,2BAA2B;AAC/B","sourcesContent":[":root {\n    --sky-4: #38bdf8;\n    --sky-3: #7dd3fc;\n    --sky-2: #bae6fd;\n    --sky-1: #e0f2fe;\n    --sky-05: #f0f9ff;\n    --sky-95: #082f49;\n\n}\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n.side-menu {\n    grid-column: 1/2;\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: repeat(3, minmax(200px, 250px));\n}\n.side-menu > div {\n}\n.side-menu > div > button {\n    background-color: var(--sky-1);\n    border: 0;\n    width: 100%;\n\n}\n.side-menu > div > button:hover {\n    background-color: var(--sky-05);\n}\n.main-container {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    background-color: var(--sky-2);\n    min-height: 2000px;\n}\n.center-container {\n    grid-column: 2/3;\n    background-color: var(--sky-1);\n}\n\n.todos-container {\n    grid-column: 2/3;\n}\n.form-input-section > label {\n    width: 9rem;\n}\n.form-input-section > span > label {\n    width: 8rem;\n}\n#todo-creation {\n    display: grid;\n    grid-template-columns: 40% 40%;\n    max-width: 100%;\n}\n\n\n.form-input-section {\n    display: grid;\n    align-items: center;\n}\n#todo-creation > .title {\n    grid-column: 1/2;\n\n}\n#todo-creation > .due-date {\n    grid-column: 2/3;\n}\n#todo-creation > .priority {\n    grid-column: 1/2;\n}\n#todo-creation > .description {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: start;\n    align-items: start;\n}\n#todo-creation > .notes {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: start;\n    align-items: start;\n}\n#todo-creation > button {\n    width: 8rem;\n}\n.todos-container {\n    margin: 1rem;\n}\n.no-display {\n    display: none;\n}\ntable {\n    width: 100%;\n}\n/* TABLES */\ntable, td, th {\n    border: 1px solid black;\n    padding: 0px;\n    margin: 0px;\n}\n.todo-row:hover {\n    background-color: var(--sky-05);\n}\n.footer {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    background-color: var(--sky-95);\n    color: white;\n}\n\n\n\n\n/* DIALOG BOXES */\ndialog {\n    position: fixed;\n    top: 50px;\n    width: 400px;\n    left: calc(50% - 200px);\n    min-height: 300px;\n}\n\n#new-project {\n    display: grid;\n    grid-template-rows: 2rem 1fr;\n}\nform > div.title-area {\n    grid-row: 1/2;\n}\n.form-body {\n    padding: 4px;\n    margin: 6px;\n    grid-row: 2/3;\n    display: grid;\n    grid-template-columns: 8rem 1fr;\n    grid-template-rows: repeat(auto-fit, auto);\n}\n.form-body > div {\n    display: grid;\n    grid-template-columns: 8rem 1fr;\n}\n.form-body > div > .form-input {\n    grid-column: 2/3;\n}\n.form-body > .description {\n    grid-row: 2/3;\n}\n.form-body > .submit-div {\n    grid-column: 1/-1;\n    display: flex;\n    justify-content: center;\n}\n\n\n\n\n/* PROJECT RELATED */\n.project-table {\n    margin: 2rem 1rem 2rem 1rem;\n}\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/modules/displayProjects.js":
/*!****************************************!*\
  !*** ./src/modules/displayProjects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(parent, list) {
    parent.innerHTML = '';

    list.forEach((project) => {
        let table = document.createElement('table');
        table.classList.add('project-table');
        let thead = document.createElement('thead');
        let headRowOne = document.createElement('tr');
        let colOne = document.createElement('th');
        colOne.textContent = project.name;
        let headRowTwo = document.createElement('tr');

        let colTwo = document.createElement('th');
        colTwo.textContent = project.description;
        
        headRowOne.appendChild(colOne);
        headRowTwo.appendChild(colTwo);
        thead.appendChild(headRowOne);
        thead.appendChild(headRowTwo);
        table.appendChild(thead);
        parent.appendChild(table);
    })
}

/***/ }),

/***/ "./src/modules/displayTodos.js":
/*!*************************************!*\
  !*** ./src/modules/displayTodos.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ "./src/modules/todoList.js");



// export default function (list, parent) {
//     parent.innerHTML = '';
//     let listToDisplay = list.getAllTodos();
//     listToDisplay.forEach(element => {
//         let listItemDiv = document.createElement('div');
//         let titleDiv = document.createElement('div');
//         titleDiv.textContent = element.title;

//         listItemDiv.appendChild(titleDiv);
//         parent.appendChild(listItemDiv);
//     });
// }

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(todoListObject, parent) {
    let list = todoListObject.getAllTodos();
    const table = document.querySelector('.todos-container')

    if (table.classList.contains('no-display')){
        table.classList.remove('no-display');
    }
    table.classList.remove('no-display');

    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    list.forEach(element => {
        let newRow = document.createElement('tr');
        let title = document.createElement('td');
        title.textContent = element.title;
        newRow.appendChild(title);
        let dueDate = document.createElement('td');
        dueDate.textContent = element.dueDate;
        newRow.appendChild(dueDate);
        let priority = document.createElement('td');
        priority.textContent = element.priority;
        newRow.appendChild(priority);
        let project = document.createElement('td');
        project.textContent = element.project;
        newRow.appendChild(project);
        newRow.classList.add('todo-row');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        console.log(element.id);
        deleteButton.id = element.id;
        newRow.appendChild(deleteButton);

        
        parent.appendChild(newRow);

    });
}

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(parent){
    parent.innerHTML = '';
}

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class project {
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.associatedTodos = [];
    }
}

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");



class Todo {
    constructor(title, dueDate, priority,  project, description, notes, id) {
        this.title = title;
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.description = description;
        this.dueDate = dueDate;
        this.project = project;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
    }
} 

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoList: () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _displayTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodos.js */ "./src/modules/displayTodos.js");



class TodoList {
    constructor() {
        this.todos = [];
    }
    addTodo(name, dueDate, priority,  project, description, notes, id) {
        const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, dueDate, priority, project, description, notes, id);
        this.todos.push(newTodo);

    }
    removeTodoById(id){
        this.todos = this.todos.filter((element) => element.id !== id);
    }

    getAllTodos() {
        return this.todos;
    }
}





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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo.js */ "./src/modules/todo.js");
/* harmony import */ var _modules_todoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todoList.js */ "./src/modules/todoList.js");
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_displayProjects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/displayProjects.js */ "./src/modules/displayProjects.js");







let mainList = new _modules_todoList_js__WEBPACK_IMPORTED_MODULE_2__.TodoList();
let projectList = [];



const centerContainer = document.querySelector('.center-container');
const todoButton = document.querySelector('#all-todos');
const tableBody = document.querySelector('#table-body')
const submitButton = document.querySelector('#create-todo');
const projectButton = document.querySelector('#show-projects');

submitButton.addEventListener('click', () => {
    console.log("todoButton clicked");
    createTodoButton(mainList);
    console.log(mainList);
    displayTodos(mainList.getAllTodos(), centerContainer);
})



todoButton.addEventListener('click', () => {
    console.log("Button clicked");
    displayTodos(mainList.getAllTodos(), centerContainer)
});

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])(centerContainer));


//todo List Display
function displayTodos(list, parent) {
    const table = document.createElement('table');
    table.id = 'todo-table';

    

    table.classList.remove('no-display');

    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    let thead = document.createElement('thead');
    let theadRow = document.createElement('tr');
    let todoDone = document.createElement('th');
    todoDone.textContent = 'Done?';
    theadRow.appendChild(todoDone);
    let todoTitle = document.createElement('th');
    todoTitle.textContent = 'Title';
    theadRow.appendChild(todoTitle);
    let todoDueDate = document.createElement('th');
    todoDueDate.textContent = 'Due-Date';
    theadRow.appendChild(todoDueDate);
    let todoProprity = document.createElement('th');
    todoProprity.textContent = 'Priority';
    theadRow.appendChild(todoProprity);
    let todoProject = document.createElement('th');
    todoProject.textContent = 'Project';
    theadRow.appendChild(todoProject);
    let todoButtons = document.createElement('th');
    todoButtons.textContent = 'Place For Buttons';
    theadRow.appendChild(todoButtons);

    thead.appendChild(theadRow);
    table.appendChild(thead);


    let todoTableBody = document.createElement('tbody');
    let sortedList = list.sort()
    if (list.length > 0){
        list.forEach((element) => {
            console.log(element);
            let newRow = document.createElement('tr');
            newRow.classList.add('todo-row');

            let completed = document.createElement('td');
            let completedCheck = document.createElement('input')
            completedCheck.type = 'checkbox';
            completedCheck.value = element.completed;
            completed.appendChild(completedCheck);
            newRow.appendChild(completed);

            let title = document.createElement('td');
            title.textContent = element.title;
            newRow.appendChild(title);
            let dueDate = document.createElement('td');
            dueDate.textContent = element.dueDate;
            newRow.appendChild(dueDate);
            let priority = document.createElement('td');
            priority.textContent = element.priority;
            newRow.appendChild(priority);
            let project = document.createElement('td');
            project.textContent = element.project.name;
            newRow.appendChild(project);
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            console.log(element.id);
            deleteButton.id = element.id;
            newRow.appendChild(deleteButton);
            deleteButton.addEventListener('click', () => {
                mainList.todos = mainList.todos.filter((todos) => todos.id !== deleteButton.id);
                displayTodos(mainList.getAllTodos(), parent);
            });
    
    
    
            todoTableBody.appendChild(newRow);
    });
    table.appendChild(todoTableBody);
    parent.appendChild(table);
    }
}


//CREATING TODOS WHEN BUTTON CLICKED
function createTodoButton (todoListObject) {
    let mainList = todoListObject
    let titleInput = document.querySelector('#todo-title');

    if (titleInput.value != '') {
            let title = titleInput.value;
            titleInput.value = '';
            let dueDateInput = document.querySelector('#todo-due-date');
            let dueDate = dueDateInput.value;
            dueDateInput.value = '';
            console.log(dueDate);
            let priorityInput = document.querySelector('#todo-priority');
            let priority = priorityInput.value;
            priorityInput.selectedIndex = 0;

            let projectInput = document.querySelector('#todo-project');
            let projectId = projectInput.value;
            projectInput.selectedIndex = 0;
            console.log("project Selected" + _modules_project_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
            let descriptionInput = document.querySelector('#todo-description');
            let description = descriptionInput.value;
            descriptionInput = '';
            let notesInput = document.querySelector('#todo-notes');
            let notes = notesInput.value;
            notesInput.value = '';
            console.log(title);
            let projectToAddTo = projectList.find((project) => project.id == projectId);
            let todo = new _modules_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, dueDate, priority, projectId, description, notes);
            projectToAddTo.associatedTodos.push(todo);
            console.log(projectList);

            todoListObject.todos.push(todo);
            // todoListObject.addTodo(title, dueDate, priority, project, description, notes);
    }

}

const openTodoDialogButton = document.querySelectorAll('.create-new-todo');
console.log(openTodoDialogButton);
const createTodoDialogButton = document.querySelector('#create-todo');
if (openTodoDialogButton == null) console.log("todo dialog is null");
const todoDialog = document.querySelector('#todo-form-dialog')

function displayProjectOptionsDialog() {
    console.log('line 126 reached');
    let todoSelectProject = document.querySelector('#todo-project');
    todoSelectProject.innerHTML = '';
    projectList.forEach((project) => {
        let option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
        todoSelectProject.appendChild(option);
    })
}

openTodoDialogButton.forEach((button) => {
    button.addEventListener('click', () => {
        todoDialog.showModal();
        displayProjectsInTodoOptions();
        console.log('todo dialog should be open');
        displayProjectOptionsDialog();
    });
});
// Display TODO Projects in TODO Dialog
function displayProjectsInTodoOptions() {
    let selectBox = document.querySelector('#todo-project');
    selectBox.innerHTML = '';
    projectList.forEach((project) => {
        let option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
    })
}

createTodoDialogButton.addEventListener('click', () => {
    todoDialog.close();
})
//Cancel Making TODO
const cancelButton = document.querySelector('#cancel-todo');
cancelButton.addEventListener('click', () => {
    todoDialog.close();
})


//CREATING DEFAULT PROJECTS
projectList.push(new _modules_project_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Inbox', 'Default Option'));
projectList.push(new _modules_project_js__WEBPACK_IMPORTED_MODULE_4__["default"]("Test1", "Description1"));
console.log(projectList);

// Creating Projects
const createNewProjectButton = document.querySelector('.new-project');
const newProjectDialogBox = document.querySelector('.create-new-project');
const projectSubmitButton = document.querySelector('#project-submit');

createNewProjectButton.addEventListener('click', () => {
    newProjectDialogBox.showModal();
})
function createProjectFromForm() {
    let projName = document.querySelector('#project-name');
    let projDesc = document.querySelector('#project-description');
    if (projName !== null && projDesc !== null) {
        let newProject = new _modules_project_js__WEBPACK_IMPORTED_MODULE_4__["default"](projName.value, projDesc.value);
        projectList.push(newProject);
        projName.value = '';
        projDesc.value = '';
        newProjectDialogBox.close();
        console.log(projectList);
    }


}
projectSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    createProjectFromForm();
})
projectButton.addEventListener('click', () => {
    console.log("Project Button");
    displayProjects();
})
const displayProjects = function () {
    let listToDisplay = projectList;
    const mainCenterContainer = document.querySelector('.center-container');
    (0,_modules_displayProjects_js__WEBPACK_IMPORTED_MODULE_5__["default"])(mainCenterContainer, listToDisplay);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDJEQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0RBQUk7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBLHFCQUFxQiwyREFBTztBQUM1QixxQkFBcUIsMkRBQU87QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyREFBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUFxQjtBQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2RlZmF1bHQtcGFja2FnZS1uYW1lLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZGVmYXVsdC1wYWNrYWdlLW5hbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RlZmF1bHQtcGFja2FnZS1uYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC1wYWNrYWdlLW5hbWUvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2RlZmF1bHQtcGFja2FnZS1uYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RlZmF1bHQtcGFja2FnZS1uYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RlZmF1bHQtcGFja2FnZS1uYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC1wYWNrYWdlLW5hbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC1wYWNrYWdlLW5hbWUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2RlZmF1bHQtcGFja2FnZS1uYW1lLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC1wYWNrYWdlLW5hbWUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC1wYWNrYWdlLW5hbWUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5VG9kb3MuanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC1wYWNrYWdlLW5hbWUvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL2RlZmF1bHQtcGFja2FnZS1uYW1lLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC1wYWNrYWdlLW5hbWUvLi9zcmMvbW9kdWxlcy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC1wYWNrYWdlLW5hbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RlZmF1bHQtcGFja2FnZS1uYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tc2t5LTQ6ICMzOGJkZjg7XG4gICAgLS1za3ktMzogIzdkZDNmYztcbiAgICAtLXNreS0yOiAjYmFlNmZkO1xuICAgIC0tc2t5LTE6ICNlMGYyZmU7XG4gICAgLS1za3ktMDU6ICNmMGY5ZmY7XG4gICAgLS1za3ktOTU6ICMwODJmNDk7XG5cbn1cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zaWRlLW1lbnUge1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWlubWF4KDIwMHB4LCAyNTBweCkpO1xufVxuLnNpZGUtbWVudSA+IGRpdiB7XG59XG4uc2lkZS1tZW51ID4gZGl2ID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktMSk7XG4gICAgYm9yZGVyOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4uc2lkZS1tZW51ID4gZGl2ID4gYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktMDUpO1xufVxuLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS0yKTtcbiAgICBtaW4taGVpZ2h0OiAyMDAwcHg7XG59XG4uY2VudGVyLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktMSk7XG59XG5cbi50b2Rvcy1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG59XG4uZm9ybS1pbnB1dC1zZWN0aW9uID4gbGFiZWwge1xuICAgIHdpZHRoOiA5cmVtO1xufVxuLmZvcm0taW5wdXQtc2VjdGlvbiA+IHNwYW4gPiBsYWJlbCB7XG4gICAgd2lkdGg6IDhyZW07XG59XG4jdG9kby1jcmVhdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5cbi5mb3JtLWlucHV0LXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiN0b2RvLWNyZWF0aW9uID4gLnRpdGxlIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuXG59XG4jdG9kby1jcmVhdGlvbiA+IC5kdWUtZGF0ZSB7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbn1cbiN0b2RvLWNyZWF0aW9uID4gLnByaW9yaXR5IHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xufVxuI3RvZG8tY3JlYXRpb24gPiAuZGVzY3JpcHRpb24ge1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cbiN0b2RvLWNyZWF0aW9uID4gLm5vdGVzIHtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG4jdG9kby1jcmVhdGlvbiA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDhyZW07XG59XG4udG9kb3MtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDFyZW07XG59XG4ubm8tZGlzcGxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi8qIFRBQkxFUyAqL1xudGFibGUsIHRkLCB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuLnRvZG8tcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktMDUpO1xufVxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktOTUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cblxuLyogRElBTE9HIEJPWEVTICovXG5kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjAwcHgpO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4jbmV3LXByb2plY3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcbn1cbmZvcm0gPiBkaXYudGl0bGUtYXJlYSB7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbn1cbi5mb3JtLWJvZHkge1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBtYXJnaW46IDZweDtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4cmVtIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgYXV0byk7XG59XG4uZm9ybS1ib2R5ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOHJlbSAxZnI7XG59XG4uZm9ybS1ib2R5ID4gZGl2ID4gLmZvcm0taW5wdXQge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG59XG4uZm9ybS1ib2R5ID4gLmRlc2NyaXB0aW9uIHtcbiAgICBncmlkLXJvdzogMi8zO1xufVxuLmZvcm0tYm9keSA+IC5zdWJtaXQtZGl2IHtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cblxuXG4vKiBQUk9KRUNUIFJFTEFURUQgKi9cbi5wcm9qZWN0LXRhYmxlIHtcbiAgICBtYXJnaW46IDJyZW0gMXJlbSAycmVtIDFyZW07XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbURBQW1EO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxXQUFXOztBQUVmO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0EsV0FBVztBQUNYO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7Ozs7O0FBS0EsaUJBQWlCO0FBQ2pCO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsMENBQTBDO0FBQzlDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOzs7OztBQUtBLG9CQUFvQjtBQUNwQjtJQUNJLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tc2t5LTQ6ICMzOGJkZjg7XFxuICAgIC0tc2t5LTM6ICM3ZGQzZmM7XFxuICAgIC0tc2t5LTI6ICNiYWU2ZmQ7XFxuICAgIC0tc2t5LTE6ICNlMGYyZmU7XFxuICAgIC0tc2t5LTA1OiAjZjBmOWZmO1xcbiAgICAtLXNreS05NTogIzA4MmY0OTtcXG5cXG59XFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWlubWF4KDIwMHB4LCAyNTBweCkpO1xcbn1cXG4uc2lkZS1tZW51ID4gZGl2IHtcXG59XFxuLnNpZGUtbWVudSA+IGRpdiA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS0xKTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG59XFxuLnNpZGUtbWVudSA+IGRpdiA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS0wNSk7XFxufVxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktMik7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMDBweDtcXG59XFxuLmNlbnRlci1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktMSk7XFxufVxcblxcbi50b2Rvcy1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG4uZm9ybS1pbnB1dC1zZWN0aW9uID4gbGFiZWwge1xcbiAgICB3aWR0aDogOXJlbTtcXG59XFxuLmZvcm0taW5wdXQtc2VjdGlvbiA+IHNwYW4gPiBsYWJlbCB7XFxuICAgIHdpZHRoOiA4cmVtO1xcbn1cXG4jdG9kby1jcmVhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4uZm9ybS1pbnB1dC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3RvZG8tY3JlYXRpb24gPiAudGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcblxcbn1cXG4jdG9kby1jcmVhdGlvbiA+IC5kdWUtZGF0ZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbiN0b2RvLWNyZWF0aW9uID4gLnByaW9yaXR5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuI3RvZG8tY3JlYXRpb24gPiAuZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbiN0b2RvLWNyZWF0aW9uID4gLm5vdGVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG4jdG9kby1jcmVhdGlvbiA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4cmVtO1xcbn1cXG4udG9kb3MtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG4ubm8tZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi8qIFRBQkxFUyAqL1xcbnRhYmxlLCB0ZCwgdGgge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuLnRvZG8tcm93OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LTA1KTtcXG59XFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LTk1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBESUFMT0cgQk9YRVMgKi9cXG5kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDIwMHB4KTtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxZnI7XFxufVxcbmZvcm0gPiBkaXYudGl0bGUtYXJlYSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcbi5mb3JtLWJvZHkge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIG1hcmdpbjogNnB4O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhyZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgYXV0byk7XFxufVxcbi5mb3JtLWJvZHkgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhyZW0gMWZyO1xcbn1cXG4uZm9ybS1ib2R5ID4gZGl2ID4gLmZvcm0taW5wdXQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG4uZm9ybS1ib2R5ID4gLmRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG59XFxuLmZvcm0tYm9keSA+IC5zdWJtaXQtZGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBQUk9KRUNUIFJFTEFURUQgKi9cXG4ucHJvamVjdC10YWJsZSB7XFxuICAgIG1hcmdpbjogMnJlbSAxcmVtIDJyZW0gMXJlbTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIC8vXG4gIC8vIE5vdGUgdG8gZnV0dXJlLXNlbGY6IE5vLCB5b3UgY2FuJ3QgcmVtb3ZlIHRoZSBgdG9Mb3dlckNhc2UoKWAgY2FsbC5cbiAgLy8gUkVGOiBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC82NzcjaXNzdWVjb21tZW50LTE3NTczNTEzNTFcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgdmFyIHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG4gIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyZW50LCBsaXN0KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFibGUnKTtcbiAgICAgICAgbGV0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgICAgICAgbGV0IGhlYWRSb3dPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBsZXQgY29sT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgY29sT25lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBsZXQgaGVhZFJvd1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICAgICAgbGV0IGNvbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgIGNvbFR3by50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICBoZWFkUm93T25lLmFwcGVuZENoaWxkKGNvbE9uZSk7XG4gICAgICAgIGhlYWRSb3dUd28uYXBwZW5kQ2hpbGQoY29sVHdvKTtcbiAgICAgICAgdGhlYWQuYXBwZW5kQ2hpbGQoaGVhZFJvd09uZSk7XG4gICAgICAgIHRoZWFkLmFwcGVuZENoaWxkKGhlYWRSb3dUd28pO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0aGVhZCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgfSlcbn0iLCJpbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgdG9kb0xpc3QgZnJvbSBcIi4vdG9kb0xpc3RcIjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGxpc3QsIHBhcmVudCkge1xuLy8gICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbi8vICAgICBsZXQgbGlzdFRvRGlzcGxheSA9IGxpc3QuZ2V0QWxsVG9kb3MoKTtcbi8vICAgICBsaXN0VG9EaXNwbGF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4vLyAgICAgICAgIGxldCBsaXN0SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgICAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXG4vLyAgICAgICAgIGxpc3RJdGVtRGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbi8vICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtRGl2KTtcbi8vICAgICB9KTtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRvZG9MaXN0T2JqZWN0LCBwYXJlbnQpIHtcbiAgICBsZXQgbGlzdCA9IHRvZG9MaXN0T2JqZWN0LmdldEFsbFRvZG9zKCk7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MtY29udGFpbmVyJylcblxuICAgIGlmICh0YWJsZS5jbGFzc0xpc3QuY29udGFpbnMoJ25vLWRpc3BsYXknKSl7XG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKTtcbiAgICB9XG4gICAgdGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpO1xuXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG4gICAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJvamVjdDtcbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICBuZXdSb3cuY2xhc3NMaXN0LmFkZCgndG9kby1yb3cnKTtcbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmlkKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlkID0gZWxlbWVudC5pZDtcbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdSb3cpO1xuXG4gICAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmVudCl7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xufSIsImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuaWQgPSB1dWlkdjQoKTtcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVkVG9kb3MgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgIHByb2plY3QsIGRlc2NyaXB0aW9uLCBub3RlcywgaWQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmlkID0gdXVpZHY0KCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxufSAiLCJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IGRpc3BsYXlUb2RvcyBmcm9tICcuL2Rpc3BsYXlUb2Rvcy5qcyc7XG5cbmNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cbiAgICBhZGRUb2RvKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCAgcHJvamVjdCwgZGVzY3JpcHRpb24sIG5vdGVzLCBpZCkge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8obmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGRlc2NyaXB0aW9uLCBub3RlcywgaWQpO1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2gobmV3VG9kbyk7XG5cbiAgICB9XG4gICAgcmVtb3ZlVG9kb0J5SWQoaWQpe1xuICAgICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgIT09IGlkKTtcbiAgICB9XG5cbiAgICBnZXRBbGxUb2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHtUb2RvTGlzdH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL21vZHVsZXMvdG9kby5qcyc7XG5pbXBvcnQge1RvZG9MaXN0fSBmcm9tICcuL21vZHVsZXMvdG9kb0xpc3QuanMnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9tb2R1bGVzL2hvbWUuanMnO1xuaW1wb3J0IHByb2plY3QgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QuanMnO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0c01vZHVsZSBmcm9tICcuL21vZHVsZXMvZGlzcGxheVByb2plY3RzLmpzJztcblxubGV0IG1haW5MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5sZXQgcHJvamVjdExpc3QgPSBbXTtcblxuXG5cbmNvbnN0IGNlbnRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZW50ZXItY29udGFpbmVyJyk7XG5jb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC10b2RvcycpO1xuY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlLWJvZHknKVxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10b2RvJyk7XG5jb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctcHJvamVjdHMnKTtcblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidG9kb0J1dHRvbiBjbGlja2VkXCIpO1xuICAgIGNyZWF0ZVRvZG9CdXR0b24obWFpbkxpc3QpO1xuICAgIGNvbnNvbGUubG9nKG1haW5MaXN0KTtcbiAgICBkaXNwbGF5VG9kb3MobWFpbkxpc3QuZ2V0QWxsVG9kb3MoKSwgY2VudGVyQ29udGFpbmVyKTtcbn0pXG5cblxuXG50b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIGNsaWNrZWRcIik7XG4gICAgZGlzcGxheVRvZG9zKG1haW5MaXN0LmdldEFsbFRvZG9zKCksIGNlbnRlckNvbnRhaW5lcilcbn0pO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBob21lKGNlbnRlckNvbnRhaW5lcikpO1xuXG5cbi8vdG9kbyBMaXN0IERpc3BsYXlcbmZ1bmN0aW9uIGRpc3BsYXlUb2RvcyhsaXN0LCBwYXJlbnQpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGUuaWQgPSAndG9kby10YWJsZSc7XG5cbiAgICBcblxuICAgIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKTtcblxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgbGV0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgICBsZXQgdGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGxldCB0b2RvRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgdG9kb0RvbmUudGV4dENvbnRlbnQgPSAnRG9uZT8nO1xuICAgIHRoZWFkUm93LmFwcGVuZENoaWxkKHRvZG9Eb25lKTtcbiAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xuICAgIHRoZWFkUm93LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgbGV0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUtRGF0ZSc7XG4gICAgdGhlYWRSb3cuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgIGxldCB0b2RvUHJvcHJpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIHRvZG9Qcm9wcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgdGhlYWRSb3cuYXBwZW5kQ2hpbGQodG9kb1Byb3ByaXR5KTtcbiAgICBsZXQgdG9kb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIHRvZG9Qcm9qZWN0LnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xuICAgIHRoZWFkUm93LmFwcGVuZENoaWxkKHRvZG9Qcm9qZWN0KTtcbiAgICBsZXQgdG9kb0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIHRvZG9CdXR0b25zLnRleHRDb250ZW50ID0gJ1BsYWNlIEZvciBCdXR0b25zJztcbiAgICB0aGVhZFJvdy5hcHBlbmRDaGlsZCh0b2RvQnV0dG9ucyk7XG5cbiAgICB0aGVhZC5hcHBlbmRDaGlsZCh0aGVhZFJvdyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xuXG5cbiAgICBsZXQgdG9kb1RhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgbGV0IHNvcnRlZExpc3QgPSBsaXN0LnNvcnQoKVxuICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICBsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICBuZXdSb3cuY2xhc3NMaXN0LmFkZCgndG9kby1yb3cnKTtcblxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBsZXQgY29tcGxldGVkQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrLnZhbHVlID0gZWxlbWVudC5jb21wbGV0ZWQ7XG4gICAgICAgICAgICBjb21wbGV0ZWQuYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2spO1xuICAgICAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKGNvbXBsZXRlZCk7XG5cbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG4gICAgICAgICAgICBuZXdSb3cuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICAgICAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgICAgICAgICBuZXdSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmlkID0gZWxlbWVudC5pZDtcbiAgICAgICAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW5MaXN0LnRvZG9zID0gbWFpbkxpc3QudG9kb3MuZmlsdGVyKCh0b2RvcykgPT4gdG9kb3MuaWQgIT09IGRlbGV0ZUJ1dHRvbi5pZCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRvZG9zKG1haW5MaXN0LmdldEFsbFRvZG9zKCksIHBhcmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIHRvZG9UYWJsZUJvZHkuYXBwZW5kQ2hpbGQobmV3Um93KTtcbiAgICB9KTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0b2RvVGFibGVCb2R5KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIH1cbn1cblxuXG4vL0NSRUFUSU5HIFRPRE9TIFdIRU4gQlVUVE9OIENMSUNLRURcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9CdXR0b24gKHRvZG9MaXN0T2JqZWN0KSB7XG4gICAgbGV0IG1haW5MaXN0ID0gdG9kb0xpc3RPYmplY3RcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlJyk7XG5cbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kdWUtZGF0ZScpO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGR1ZURhdGUpO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eScpO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuc2VsZWN0ZWRJbmRleCA9IDA7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcm9qZWN0Jyk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdElkID0gcHJvamVjdElucHV0LnZhbHVlO1xuICAgICAgICAgICAgcHJvamVjdElucHV0LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0IFNlbGVjdGVkXCIgKyBwcm9qZWN0KTtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0ID0gJyc7XG4gICAgICAgICAgICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW5vdGVzJyk7XG4gICAgICAgICAgICBsZXQgbm90ZXMgPSBub3Rlc0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgbm90ZXNJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgICAgICAgICAgbGV0IHByb2plY3RUb0FkZFRvID0gcHJvamVjdExpc3QuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PSBwcm9qZWN0SWQpO1xuICAgICAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RJZCwgZGVzY3JpcHRpb24sIG5vdGVzKTtcbiAgICAgICAgICAgIHByb2plY3RUb0FkZFRvLmFzc29jaWF0ZWRUb2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuXG4gICAgICAgICAgICB0b2RvTGlzdE9iamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICAgICAgLy8gdG9kb0xpc3RPYmplY3QuYWRkVG9kbyh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGRlc2NyaXB0aW9uLCBub3Rlcyk7XG4gICAgfVxuXG59XG5cbmNvbnN0IG9wZW5Ub2RvRGlhbG9nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZWF0ZS1uZXctdG9kbycpO1xuY29uc29sZS5sb2cob3BlblRvZG9EaWFsb2dCdXR0b24pO1xuY29uc3QgY3JlYXRlVG9kb0RpYWxvZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdG9kbycpO1xuaWYgKG9wZW5Ub2RvRGlhbG9nQnV0dG9uID09IG51bGwpIGNvbnNvbGUubG9nKFwidG9kbyBkaWFsb2cgaXMgbnVsbFwiKTtcbmNvbnN0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1mb3JtLWRpYWxvZycpXG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0T3B0aW9uc0RpYWxvZygpIHtcbiAgICBjb25zb2xlLmxvZygnbGluZSAxMjYgcmVhY2hlZCcpO1xuICAgIGxldCB0b2RvU2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByb2plY3QnKTtcbiAgICB0b2RvU2VsZWN0UHJvamVjdC5pbm5lckhUTUwgPSAnJztcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5pZDtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICB0b2RvU2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pXG59XG5cbm9wZW5Ub2RvRGlhbG9nQnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9kb0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzSW5Ub2RvT3B0aW9ucygpO1xuICAgICAgICBjb25zb2xlLmxvZygndG9kbyBkaWFsb2cgc2hvdWxkIGJlIG9wZW4nKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RPcHRpb25zRGlhbG9nKCk7XG4gICAgfSk7XG59KTtcbi8vIERpc3BsYXkgVE9ETyBQcm9qZWN0cyBpbiBUT0RPIERpYWxvZ1xuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzSW5Ub2RvT3B0aW9ucygpIHtcbiAgICBsZXQgc2VsZWN0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJvamVjdCcpO1xuICAgIHNlbGVjdEJveC5pbm5lckhUTUwgPSAnJztcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5pZDtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIH0pXG59XG5cbmNyZWF0ZVRvZG9EaWFsb2dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb0RpYWxvZy5jbG9zZSgpO1xufSlcbi8vQ2FuY2VsIE1ha2luZyBUT0RPXG5jb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXRvZG8nKTtcbmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RvRGlhbG9nLmNsb3NlKCk7XG59KVxuXG5cbi8vQ1JFQVRJTkcgREVGQVVMVCBQUk9KRUNUU1xucHJvamVjdExpc3QucHVzaChuZXcgcHJvamVjdCgnSW5ib3gnLCAnRGVmYXVsdCBPcHRpb24nKSk7XG5wcm9qZWN0TGlzdC5wdXNoKG5ldyBwcm9qZWN0KFwiVGVzdDFcIiwgXCJEZXNjcmlwdGlvbjFcIikpO1xuY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuXG4vLyBDcmVhdGluZyBQcm9qZWN0c1xuY29uc3QgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xuY29uc3QgbmV3UHJvamVjdERpYWxvZ0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtbmV3LXByb2plY3QnKTtcbmNvbnN0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1zdWJtaXQnKTtcblxuY3JlYXRlTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdQcm9qZWN0RGlhbG9nQm94LnNob3dNb2RhbCgpO1xufSlcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGcm9tRm9ybSgpIHtcbiAgICBsZXQgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgbGV0IHByb2pEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICBpZiAocHJvak5hbWUgIT09IG51bGwgJiYgcHJvakRlc2MgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdChwcm9qTmFtZS52YWx1ZSwgcHJvakRlc2MudmFsdWUpO1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBwcm9qTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBwcm9qRGVzYy52YWx1ZSA9ICcnO1xuICAgICAgICBuZXdQcm9qZWN0RGlhbG9nQm94LmNsb3NlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICB9XG5cblxufVxucHJvamVjdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZVByb2plY3RGcm9tRm9ybSgpO1xufSlcbnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJQcm9qZWN0IEJ1dHRvblwiKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbn0pXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGxpc3RUb0Rpc3BsYXkgPSBwcm9qZWN0TGlzdDtcbiAgICBjb25zdCBtYWluQ2VudGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbnRlci1jb250YWluZXInKTtcbiAgICBkaXNwbGF5UHJvamVjdHNNb2R1bGUobWFpbkNlbnRlckNvbnRhaW5lciwgbGlzdFRvRGlzcGxheSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=