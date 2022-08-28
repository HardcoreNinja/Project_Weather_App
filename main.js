/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Resources/Lato/Lato-Light.ttf */ "./src/Resources/Lato/Lato-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"Lato\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}\r\n\r\n.material-symbols-outlined {\r\n    font-family: 'Material Symbols Outlined';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 100px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n}\r\n\r\n:root {\r\n    background: orange;\r\n}\r\n\r\n::placeholder {\r\n    color: rgb(0, 145, 200);\r\n    opacity: 1;\r\n    font-weight: bolder;\r\n}\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: \"Lato\";\r\n    color: white;\r\n}\r\n\r\nh1{\r\n    font-size: 25px;\r\n}\r\n\r\nbutton,\r\nbutton>span {\r\n    color: white;\r\n    transition: .75s;\r\n}\r\n\r\nbutton:hover>span {\r\n    color: rgb(0, 145, 200);\r\n    transform: scale(1.1);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr 1fr;\r\n    grid-template-rows: 1fr 2fr 2fr;\r\n    grid-template-areas:\r\n        \"nav nav nav\"\r\n        \"birdsEye gap stats\"\r\n        \"week week week\"\r\n    ;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n    max-width: 100vw;\r\n    max-width: 100vh;\r\n}\r\n\r\n#nav {\r\n    grid-area: nav;\r\n    background: rgb(36, 41, 46);\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 20px;\r\n}\r\n\r\n#logo {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 10px;\r\n    font-size: 30px;\r\n    transition: .75s;\r\n}\r\n\r\n#logo>span {\r\n    font-size: 35px;\r\n}\r\n\r\n#logo:hover,\r\n#logo:hover>span {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    width: 25px;\r\n    height: 25px;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n}\r\n\r\n.searchForm>input {\r\n    border: 1px solid black;\r\n    transition: .75s;\r\n}\r\n\r\n.searchForm>input:hover,\r\n.searchForm>input:focus {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.searchForm>input,\r\n.searchForm>input:focus {\r\n    background: transparent;\r\n    border-top-style: hidden;\r\n    border-right-style: hidden;\r\n    border-left-style: hidden;\r\n    outline: none;\r\n}\r\n\r\n.displayMetricImperial {\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n    transition: .75s;\r\n    font-weight: bolder;\r\n}\r\n\r\n.displayMetricImperial:hover {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n    font-weight: bolder;\r\n}\r\n\r\n#birdsEye {\r\n    grid-area: birdsEye;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    background: rgb(36, 41, 46);\r\n}\r\n\r\n.birdsEyeWidgetContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.weatherIcon {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}\r\n\r\n#gap {\r\n    grid-area: gap;\r\n    background: rgb(36, 41, 46);\r\n}\r\n\r\n#stats {\r\n    grid-area: stats;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    background: rgb(36, 41, 46);\r\n}\r\n\r\n.statsWidgetContainer{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.statsItem {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.statsText {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#week {\r\n    grid-area: week;\r\n    background: rgb(36, 41, 46);\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap:20px;\r\n    padding: 20px;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n.weekWidgetContainer{\r\n    display: flex;\r\n    max-width: 90vw;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    padding: 20px;\r\n    gap: 20px;\r\n    overflow: auto;\r\n}\r\n\r\n.weekItem{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    min-width: 200px;\r\n    min-height: 200px;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"Lato\";\r\n    src: url(\"../Resources/Lato/Lato-Light.ttf\");\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}\r\n\r\n.material-symbols-outlined {\r\n    font-family: 'Material Symbols Outlined';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 100px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n}\r\n\r\n:root {\r\n    background: orange;\r\n}\r\n\r\n::placeholder {\r\n    color: rgb(0, 145, 200);\r\n    opacity: 1;\r\n    font-weight: bolder;\r\n}\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: \"Lato\";\r\n    color: white;\r\n}\r\n\r\nh1{\r\n    font-size: 25px;\r\n}\r\n\r\nbutton,\r\nbutton>span {\r\n    color: white;\r\n    transition: .75s;\r\n}\r\n\r\nbutton:hover>span {\r\n    color: rgb(0, 145, 200);\r\n    transform: scale(1.1);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr 1fr;\r\n    grid-template-rows: 1fr 2fr 2fr;\r\n    grid-template-areas:\r\n        \"nav nav nav\"\r\n        \"birdsEye gap stats\"\r\n        \"week week week\"\r\n    ;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n    max-width: 100vw;\r\n    max-width: 100vh;\r\n}\r\n\r\n#nav {\r\n    grid-area: nav;\r\n    background: rgb(36, 41, 46);\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 20px;\r\n}\r\n\r\n#logo {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 10px;\r\n    font-size: 30px;\r\n    transition: .75s;\r\n}\r\n\r\n#logo>span {\r\n    font-size: 35px;\r\n}\r\n\r\n#logo:hover,\r\n#logo:hover>span {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    width: 25px;\r\n    height: 25px;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n}\r\n\r\n.searchForm>input {\r\n    border: 1px solid black;\r\n    transition: .75s;\r\n}\r\n\r\n.searchForm>input:hover,\r\n.searchForm>input:focus {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.searchForm>input,\r\n.searchForm>input:focus {\r\n    background: transparent;\r\n    border-top-style: hidden;\r\n    border-right-style: hidden;\r\n    border-left-style: hidden;\r\n    outline: none;\r\n}\r\n\r\n.displayMetricImperial {\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n    transition: .75s;\r\n    font-weight: bolder;\r\n}\r\n\r\n.displayMetricImperial:hover {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n    font-weight: bolder;\r\n}\r\n\r\n#birdsEye {\r\n    grid-area: birdsEye;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    background: rgb(36, 41, 46);\r\n}\r\n\r\n.birdsEyeWidgetContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.weatherIcon {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}\r\n\r\n#gap {\r\n    grid-area: gap;\r\n    background: rgb(36, 41, 46);\r\n}\r\n\r\n#stats {\r\n    grid-area: stats;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    background: rgb(36, 41, 46);\r\n}\r\n\r\n.statsWidgetContainer{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.statsItem {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.statsText {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#week {\r\n    grid-area: week;\r\n    background: rgb(36, 41, 46);\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap:20px;\r\n    padding: 20px;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n.weekWidgetContainer{\r\n    display: flex;\r\n    max-width: 90vw;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    padding: 20px;\r\n    gap: 20px;\r\n    overflow: auto;\r\n}\r\n\r\n.weekItem{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    min-width: 200px;\r\n    min-height: 200px;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

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
  } // For old IE

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

/***/ "./src/birdsEye/birdsEyeContent.js":
/*!*****************************************!*\
  !*** ./src/birdsEye/birdsEyeContent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBirdsEye": () => (/* binding */ createBirdsEye)
/* harmony export */ });
/* harmony import */ var _birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birdsEyeLogic */ "./src/birdsEye/birdsEyeLogic.js");
/* harmony import */ var _nav_navLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/navLogic */ "./src/nav/navLogic.js");
/* harmony import */ var _reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusableCode/reusableElements */ "./src/reusableCode/reusableElements.js");
/* harmony import */ var _reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusableCode/reusableGetters */ "./src/reusableCode/reusableGetters.js");
// eslint-disable-next-line import/no-cycle


// eslint-disable-next-line import/no-cycle





const createWidget = () => {
  const container = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('birdsEyeWidgetContainer');
  if (_nav_navLogic__WEBPACK_IMPORTED_MODULE_1__.metricImperialBool) {
    const mainWeatherDescription = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)((0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getMetricMainWeatherDescription)(), 'beMainWeatherDescription');
    const name = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createP)((0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getMetricName)(), 'beName');
    const date = _nav_navLogic__WEBPACK_IMPORTED_MODULE_1__.dateTimeString;
    const temp = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getMetricTemp)()} °C`, 'beTemp');
    const weatherSymbol = (0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getMetricWeatherSymbol)();
    container.append(mainWeatherDescription, name, date, temp, weatherSymbol);
  } else if (!_nav_navLogic__WEBPACK_IMPORTED_MODULE_1__.metricImperialBool) {
    const mainWeatherDescription = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)((0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getImperialMainWeatherDescription)(), 'beMainWeatherDescription');
    const name = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createP)((0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getImperialName)(), 'beName');
    const date = _nav_navLogic__WEBPACK_IMPORTED_MODULE_1__.dateTimeString;
    const temp = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getImperialTemp)()} °F`, 'beTemp');
    const weatherSymbol = (0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getImperialWeatherSymbol)();
    container.append(mainWeatherDescription, name, date, temp, weatherSymbol);
  }

  return container;
};

function clearBirdsEye() {
  while ((0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_3__.getBirdsEye)().firstChild) { (0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_3__.getBirdsEye)().removeChild((0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_3__.getBirdsEye)().firstChild); }
}

function createBirdsEye() {
  clearBirdsEye();
  (0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_3__.getBirdsEye)().append(createWidget());
}

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/birdsEye/birdsEyeLogic.js":
/*!***************************************!*\
  !*** ./src/birdsEye/birdsEyeLogic.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "findSymbol": () => (/* binding */ findSymbol),
/* harmony export */   "getImperialMainWeatherDescription": () => (/* binding */ getImperialMainWeatherDescription),
/* harmony export */   "getImperialName": () => (/* binding */ getImperialName),
/* harmony export */   "getImperialTemp": () => (/* binding */ getImperialTemp),
/* harmony export */   "getImperialWeatherSymbol": () => (/* binding */ getImperialWeatherSymbol),
/* harmony export */   "getMetricMainWeatherDescription": () => (/* binding */ getMetricMainWeatherDescription),
/* harmony export */   "getMetricName": () => (/* binding */ getMetricName),
/* harmony export */   "getMetricTemp": () => (/* binding */ getMetricTemp),
/* harmony export */   "getMetricWeatherSymbol": () => (/* binding */ getMetricWeatherSymbol)
/* harmony export */ });
/* harmony import */ var _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/navLogic */ "./src/nav/navLogic.js");
/* harmony import */ var _reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusableCode/reusableElements */ "./src/reusableCode/reusableElements.js");
// eslint-disable-next-line import/no-cycle



function capitalizeFirstLetter(string) {
  console.log(string);
  const position = string.search(' ');
  let tempString = '';
  if (position !== -1) {
    const stringArray = string.split(' ');

    for (let i = 0; i < stringArray.length; i += 1) {
      const text = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
      tempString += `${text} `;
    }
  } else {
    tempString = string.charAt(0).toUpperCase() + string.slice(1);
  }

  return tempString;
}

const getMetricMainWeatherDescription = () => capitalizeFirstLetter(
  _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.weather[0].description,
);
const getImperialMainWeatherDescription = () => capitalizeFirstLetter(
  _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.weather[0].description,
);

const getMetricName = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.name;
const getImperialName = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.name;

const getMetricTemp = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.temp;
const getImperialTemp = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.temp;

const findSymbol = (weatherIconCode) => {
  let symbolName = '';
  switch (weatherIconCode) {
    case '01d':
      symbolName = 'clear_day';
      break;
    case '01n':
      symbolName = 'clear_night';
      break;
    case '02d':
      symbolName = 'partly_cloudy_day';
      break;
    case '02n':
      symbolName = 'partly_cloudy_night';
      break;
    case '03d':
      symbolName = 'cloudy';
      break;
    case '03n':
      symbolName = 'cloudy';
      break;
    case '04d':
      symbolName = 'filter_drama';
      break;
    case '04n':
      symbolName = 'filter_drama';
      break;
    case '09d':
      symbolName = 'rainy';
      break;
    case '09n':
      symbolName = 'rainy';
      break;
    case '10d':
      symbolName = 'rainy';
      break;
    case '10n':
      symbolName = 'rainy';
      break;
    case '11d':
      symbolName = 'thunderstorm';
      break;
    case '11n':
      symbolName = 'thunderstorm';
      break;
    case '13d':
      symbolName = 'ac_unit';
      break;
    case '13n':
      symbolName = 'ac_unit';
      break;
    case '50d':
      symbolName = 'foggy';
      break;
    case '50n':
      symbolName = 'foggy';
      break;
    default:
      console.log('INVALID_SWITCH_ENTRY | getMetricWeatherIcon() | birdsEyeLogic.js');
  }
  return (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_1__.createSymbol)(symbolName);
};

const getMetricWeatherSymbol = () => {
  const div = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_1__.createDiv)('weatherSymbol');
  div.append(findSymbol(`${_nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.weather[0].icon}`));
  return div;
};
const getImperialWeatherSymbol = () => {
  const div = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_1__.createDiv)('weatherSymbol');
  div.append(findSymbol(`${_nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.weather[0].icon}`));
  return div;
};




/***/ }),

/***/ "./src/grid/createGrid.js":
/*!********************************!*\
  !*** ./src/grid/createGrid.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reusableCode/reusableGetters */ "./src/reusableCode/reusableGetters.js");


const createNav = () => {
  const nav = document.createElement('div');
  nav.setAttribute('id', 'nav');
  return nav;
};

const createBirdsEye = () => {
  const birdsEye = document.createElement('div');
  birdsEye.setAttribute('id', 'birdsEye');
  return birdsEye;
};

const createGap = () => {
  const gap = document.createElement('div');
  gap.setAttribute('id', 'gap');
  return gap;
};

const createStats = () => {
  const stats = document.createElement('div');
  stats.setAttribute('id', 'stats');
  return stats;
};

const createWeek = () => {
  const week = document.createElement('div');
  week.setAttribute('id', 'week');
  week.innerHTML = 'week';
  return week;
};

function createGrid() {
  (0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_0__.getContent)().append(
    createNav(),
    createBirdsEye(),
    createGap(),
    createStats(),
    createWeek(),
  );
}

createGrid();


/***/ }),

/***/ "./src/nav/navContent.js":
/*!*******************************!*\
  !*** ./src/nav/navContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reusableCode/reusableElements */ "./src/reusableCode/reusableElements.js");
/* harmony import */ var _reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusableCode/reusableGetters */ "./src/reusableCode/reusableGetters.js");
/* harmony import */ var _navLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navLogic */ "./src/nav/navLogic.js");




const createSearchBar = () => {
  const form = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_0__.createForm)('searchForm');
  const button = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_0__.createButton)('search', '', 'button', 'submitButton');
  button.addEventListener('mouseup', _navLogic__WEBPACK_IMPORTED_MODULE_2__.getGeoRegion);
  form.append((0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', true, 'Search location...', 'searchBar'), button);

  return form;
};

const createLogo = () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'logo');
  container.append((0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_0__.createIcon)('storm'), 'iWeather');
  return container;
};

const createMetricImperialButton = () => {
  const button = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_0__.createButton)('', 'Display °C', 'button', 'displayMetricImperial');
  button.addEventListener('mousedown', _navLogic__WEBPACK_IMPORTED_MODULE_2__.toggleMetricImperialBool);
  return button;
};

function createNav() {
  (0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_1__.getNav)().append(createLogo(), createSearchBar(), createMetricImperialButton());
}

createNav();


/***/ }),

/***/ "./src/nav/navLogic.js":
/*!*****************************!*\
  !*** ./src/nav/navLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateTimeString": () => (/* binding */ dateTimeString),
/* harmony export */   "getGeoRegion": () => (/* binding */ getGeoRegion),
/* harmony export */   "imperialWeatherObject": () => (/* binding */ imperialWeatherObject),
/* harmony export */   "latLon": () => (/* binding */ latLon),
/* harmony export */   "metricImperialBool": () => (/* binding */ metricImperialBool),
/* harmony export */   "metricWeatherObject": () => (/* binding */ metricWeatherObject),
/* harmony export */   "toggleMetricImperialBool": () => (/* binding */ toggleMetricImperialBool)
/* harmony export */ });
/* harmony import */ var _birdsEye_birdsEyeContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../birdsEye/birdsEyeContent */ "./src/birdsEye/birdsEyeContent.js");
/* harmony import */ var _stats_statsContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stats/statsContent */ "./src/stats/statsContent.js");
/* harmony import */ var _week_weekContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../week/weekContent */ "./src/week/weekContent.js");
/* harmony import */ var _week_weekLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../week/weekLogic */ "./src/week/weekLogic.js");
// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle


// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-mutable-exports
let latLon = [];
// eslint-disable-next-line import/no-mutable-exports
let metricWeatherObject = {};
// eslint-disable-next-line import/no-mutable-exports
let imperialWeatherObject = {};
// eslint-disable-next-line import/no-mutable-exports
let metricImperialBool = true;

// eslint-disable-next-line import/no-mutable-exports
let dateTimeString = '';

async function getDateTime() {
  try {
    const timeResponse = await fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=ace80fd4a9364396af8761207fa31b31&location=${metricWeatherObject.coord.lat}, ${metricWeatherObject.coord.lon}`, { mode: 'cors' });
    const timeData = await timeResponse.json();
    const date = new Date(timeData.datetime);

    const timeArray = date.toLocaleString(`en-${metricWeatherObject.sys.country}`, { hour12: 'true' }).split(', ');

    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    };
    const normalizedDate = date.toLocaleString(`en-${metricWeatherObject.sys.country}`, options);

    console.log(`${normalizedDate} ${timeArray[1]}`);

    dateTimeString = `${normalizedDate} ${timeArray[1]}`;
  } catch (error) {
    console.log(error);
  }

  (0,_week_weekLogic__WEBPACK_IMPORTED_MODULE_3__.get5DayForecast)();
}

async function getWeather() {
  try {
    const metricResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=metric`,
      { mode: 'cors' },
    );
    const metricWeatherData = await metricResponse.json();
    metricWeatherObject = metricWeatherData;
    console.log(metricWeatherObject);
  } catch (error) {
    console.log(`getWeather() Metric Error: ${error}`);
  }

  try {
    const imperialResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=imperial`,
      { mode: 'cors' },
    );
    const imperialWeatherData = await imperialResponse.json();
    imperialWeatherObject = imperialWeatherData;
    console.log(imperialWeatherObject);
  } catch (error) {
    console.log(`getWeather() Imperial Error: ${error}`);
  }
  getDateTime();
}

async function getGeoRegion() {
  try {
    const searchBar = document.querySelector('.searchBar');
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=5&appid=2b45d207be643eaac353397dbb5eccc7`,
      { mode: 'cors' },
    );
    const geoData = await response.json();
    latLon = [geoData[0].lat, geoData[0].lon];
    getWeather();
  } catch (error) {
    console.log(`getGeoRegion() Error: ${error}`);
  }
}

function toggleMetricImperialBool() {
  metricImperialBool = !metricImperialBool;
  const button = document.querySelector('.displayMetricImperial');

  if (metricImperialBool) { button.innerHTML = 'Display °C'; } else {
    button.innerHTML = 'Display °F';
  }
  (0,_birdsEye_birdsEyeContent__WEBPACK_IMPORTED_MODULE_0__.createBirdsEye)();
  (0,_stats_statsContent__WEBPACK_IMPORTED_MODULE_1__.createStats)();
  (0,_week_weekContent__WEBPACK_IMPORTED_MODULE_2__.createWeek)();
}

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/reusableCode/reusableElements.js":
/*!**********************************************!*\
  !*** ./src/reusableCode/reusableElements.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createDiv": () => (/* binding */ createDiv),
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "createH1": () => (/* binding */ createH1),
/* harmony export */   "createIcon": () => (/* binding */ createIcon),
/* harmony export */   "createInput": () => (/* binding */ createInput),
/* harmony export */   "createInputContainer": () => (/* binding */ createInputContainer),
/* harmony export */   "createLabel": () => (/* binding */ createLabel),
/* harmony export */   "createP": () => (/* binding */ createP),
/* harmony export */   "createSymbol": () => (/* binding */ createSymbol)
/* harmony export */ });
const createForm = (formClass = '') => {
  const form = document.createElement('form');
  form.setAttribute('class', formClass);
  return form;
};

const createLabel = (labelTextContent) => {
  const label = document.createElement('label');
  label.textContent = labelTextContent;
  return label;
};

const createInput = (inputType = 'text', inputRequired = true, inputPlaceHolder = '', inputClass = '') => {
  const input = document.createElement('input');
  input.type = inputType;
  input.required = inputRequired;
  input.placeholder = inputPlaceHolder;
  input.setAttribute('class', inputClass);
  return input;
};

const createInputContainer = (label, input, containerClass = '') => {
  const container = document.createElement('div');
  container.setAttribute('class', containerClass);
  container.append(label, input);
  return container;
};

const createIcon = (iconName) => {
  const span = document.createElement('span');
  span.classList.add('material-icons');
  span.innerHTML = iconName;
  return span;
};

const createSymbol = (symbolName) => {
  const span = document.createElement('span');
  span.classList.add('material-symbols-outlined');
  span.innerHTML = symbolName;
  return span;
};

const createButton = (buttonIcon, buttonText, buttonType = 'button', buttonClass = '') => {
  const button = document.createElement('button');
  button.type = buttonType;
  button.setAttribute('class', buttonClass);
  button.append(createIcon(buttonIcon), buttonText);
  return button;
};

const createDiv = (divClass) => {
  const div = document.createElement('div');
  div.setAttribute('class', divClass);
  return div;
};

const createH1 = (text, h1Class) => {
  const h1 = document.createElement('h1');
  h1.setAttribute('class', h1Class);
  h1.innerHTML = text;
  return h1;
};

const createP = (text, pClass) => {
  const p = document.createElement('p');
  p.setAttribute('class', pClass);
  p.innerHTML = text;
  return p;
};




/***/ }),

/***/ "./src/reusableCode/reusableGetters.js":
/*!*********************************************!*\
  !*** ./src/reusableCode/reusableGetters.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBirdsEye": () => (/* binding */ getBirdsEye),
/* harmony export */   "getContent": () => (/* binding */ getContent),
/* harmony export */   "getNav": () => (/* binding */ getNav),
/* harmony export */   "getStats": () => (/* binding */ getStats),
/* harmony export */   "getWeek": () => (/* binding */ getWeek)
/* harmony export */ });
const getContent = () => document.getElementById('content');

const getNav = () => document.getElementById('nav');

const getBirdsEye = () => document.getElementById('birdsEye');

const getStats = () => document.getElementById('stats');

const getWeek = () => document.getElementById('week');




/***/ }),

/***/ "./src/stats/statsContent.js":
/*!***********************************!*\
  !*** ./src/stats/statsContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStats": () => (/* binding */ createStats)
/* harmony export */ });
/* harmony import */ var _reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reusableCode/reusableGetters */ "./src/reusableCode/reusableGetters.js");
/* harmony import */ var _statsLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statsLogic */ "./src/stats/statsLogic.js");
/* harmony import */ var _reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusableCode/reusableElements */ "./src/reusableCode/reusableElements.js");
/* harmony import */ var _nav_navLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/navLogic */ "./src/nav/navLogic.js");

// eslint-disable-next-line import/no-cycle



// eslint-disable-next-line import/no-cycle


const createFeelsLikeContainer = (metricImperial) => {
  const feelsLikeContainer = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsItem');
  const feelsLikeText = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsText');
  const feelsLikeP = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createP)('Feels Like');
  let feelsLikeH1;
  if (metricImperial) { feelsLikeH1 = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getMetricFeelsLike)()} °C`); } else if (!metricImperial) { feelsLikeH1 = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getImperialFeelsLike)()} °F`); }
  feelsLikeText.append(feelsLikeP, feelsLikeH1);
  feelsLikeContainer.append((0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createSymbol)('thermostat'), feelsLikeText);
  return feelsLikeContainer;
};

const createHumidityContainer = (metricImperial) => {
  const humidityContainer = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsItem');
  const humidityText = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsText');
  const humidityP = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createP)('Humidity');
  let humidityH1;
  if (metricImperial) { humidityH1 = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getMetricHumidity)()} %`); } else if (!metricImperial) { humidityH1 = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getImperialHumidity)()} %`); }
  humidityText.append(humidityP, humidityH1);
  humidityContainer.append((0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createSymbol)('humidity_mid'), humidityText);
  return humidityContainer;
};

const createWindSpeedContainer = (metricImperial) => {
  const windSpeedContainer = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsItem');
  const windSpeedText = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsText');
  const windSpeedP = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createP)('Wind Speed');
  let windSpeedH1;
  if (metricImperial) { windSpeedH1 = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getMetricWindSpeed)()} km/h`); } else if (!metricImperial) { windSpeedH1 = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getImperialWindSpeed)()} mph`); }
  windSpeedText.append(windSpeedP, windSpeedH1);
  windSpeedContainer.append((0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createSymbol)('air'), windSpeedText);
  return windSpeedContainer;
};

const createWidget = () => {
  const container = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsWidgetContainer');
  if (_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool) {
    container.append(
      createFeelsLikeContainer(_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool),
      createHumidityContainer(_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool),
      createWindSpeedContainer(_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool),
    );
  } else if (!_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool) {
    container.append(
      createFeelsLikeContainer(_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool),
      createHumidityContainer(_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool),
      createWindSpeedContainer(_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool),
    );
  }

  return container;
};

function clearStats() {
  while ((0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_0__.getStats)().firstChild) { (0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_0__.getStats)().removeChild((0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_0__.getStats)().firstChild); }
}

function createStats() {
  clearStats();
  (0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_0__.getStats)().append(createWidget());
}

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/stats/statsLogic.js":
/*!*********************************!*\
  !*** ./src/stats/statsLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImperialFeelsLike": () => (/* binding */ getImperialFeelsLike),
/* harmony export */   "getImperialHumidity": () => (/* binding */ getImperialHumidity),
/* harmony export */   "getImperialPressure": () => (/* binding */ getImperialPressure),
/* harmony export */   "getImperialTempMax": () => (/* binding */ getImperialTempMax),
/* harmony export */   "getImperialTempMin": () => (/* binding */ getImperialTempMin),
/* harmony export */   "getImperialWindSpeed": () => (/* binding */ getImperialWindSpeed),
/* harmony export */   "getMetricFeelsLike": () => (/* binding */ getMetricFeelsLike),
/* harmony export */   "getMetricHumidity": () => (/* binding */ getMetricHumidity),
/* harmony export */   "getMetricPressure": () => (/* binding */ getMetricPressure),
/* harmony export */   "getMetricTempMax": () => (/* binding */ getMetricTempMax),
/* harmony export */   "getMetricTempMin": () => (/* binding */ getMetricTempMin),
/* harmony export */   "getMetricWindSpeed": () => (/* binding */ getMetricWindSpeed)
/* harmony export */ });
/* harmony import */ var _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/navLogic */ "./src/nav/navLogic.js");
// eslint-disable-next-line import/no-cycle


const getMetricFeelsLike = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.feels_like;

const getImperialFeelsLike = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.feels_like;

const getMetricHumidity = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.humidity;

const getImperialHumidity = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.humidity;

const getMetricPressure = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.pressure;

const getImperialPressure = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.pressure;

const getMetricTempMax = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.temp_max;

const getImperialTempMax = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.temp_max;

const getMetricTempMin = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.temp_min;

const getImperialTempMin = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.temp_min;

const getMetricWindSpeed = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.wind.speed;

const getImperialWindSpeed = () => _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.wind.speed;




/***/ }),

/***/ "./src/week/weekContent.js":
/*!*********************************!*\
  !*** ./src/week/weekContent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeek": () => (/* binding */ createWeek)
/* harmony export */ });
/* harmony import */ var _weekLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekLogic */ "./src/week/weekLogic.js");
/* harmony import */ var _reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusableCode/reusableGetters */ "./src/reusableCode/reusableGetters.js");
/* harmony import */ var _reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusableCode/reusableElements */ "./src/reusableCode/reusableElements.js");
/* harmony import */ var _nav_navLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/navLogic */ "./src/nav/navLogic.js");
/* harmony import */ var _birdsEye_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../birdsEye/birdsEyeLogic */ "./src/birdsEye/birdsEyeLogic.js");
// eslint-disable-next-line import/no-cycle



// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle


const createMetricWeekItems = (weekWidgetContainer) => {
  for (let i = 0; i < _weekLogic__WEBPACK_IMPORTED_MODULE_0__.metricForecastObject.list.length; i += 1) {
    const weekItemContainer = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('weekItem');
    const timeDateArray = (0,_weekLogic__WEBPACK_IMPORTED_MODULE_0__.formatDateTime)(i);
    const day = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createP)(`${timeDateArray[0]}`, '');
    const time = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createP)(`${timeDateArray[1]} ${timeDateArray[2]}`, '');
    const temp = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${_weekLogic__WEBPACK_IMPORTED_MODULE_0__.metricForecastObject.list[i].main.temp} °C`, '');
    const description = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createP)(
      (0,_birdsEye_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_4__.capitalizeFirstLetter)(
        _weekLogic__WEBPACK_IMPORTED_MODULE_0__.metricForecastObject.list[i].weather[0].description,
      ),
    );
    weekItemContainer.append(
      day,
      time,
      temp,
      (0,_birdsEye_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_4__.findSymbol)(_weekLogic__WEBPACK_IMPORTED_MODULE_0__.metricForecastObject.list[i].weather[0].icon),
      description,
    );
    weekWidgetContainer.append(weekItemContainer);
  }
};

const createImperialWeekItems = (weekWidgetContainer) => {
  for (let i = 0; i < _weekLogic__WEBPACK_IMPORTED_MODULE_0__.imperialForecastObject.list.length; i += 1) {
    const weekItemContainer = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('weekItem');
    const timeDateArray = (0,_weekLogic__WEBPACK_IMPORTED_MODULE_0__.formatDateTime)(i);
    const day = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createP)(`${timeDateArray[0]}`, '');
    const time = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createP)(`${timeDateArray[1]} ${timeDateArray[2]}`, '');
    const temp = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${_weekLogic__WEBPACK_IMPORTED_MODULE_0__.imperialForecastObject.list[i].main.temp} °F`, '');
    const description = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createP)(
      (0,_birdsEye_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_4__.capitalizeFirstLetter)(
        _weekLogic__WEBPACK_IMPORTED_MODULE_0__.imperialForecastObject.list[i].weather[0].description,
      ),
    );
    weekItemContainer.append(
      day,
      time,
      temp,
      (0,_birdsEye_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_4__.findSymbol)(_weekLogic__WEBPACK_IMPORTED_MODULE_0__.imperialForecastObject.list[i].weather[0].icon),
      description,
    );

    weekWidgetContainer.append(weekItemContainer);
  }
};

const createWidget = () => {
  const weekWidgetContainer = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('weekWidgetContainer');
  if (_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool) {
    createMetricWeekItems(weekWidgetContainer);
  } else if (!_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool) {
    createImperialWeekItems(weekWidgetContainer);
  }

  return weekWidgetContainer;
};

function clearWeek() {
  while ((0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_1__.getWeek)().firstChild) { (0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_1__.getWeek)().removeChild((0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_1__.getWeek)().firstChild); }
}

const createTitle = () => {
  const title = (0,_reusableCode_reusableElements__WEBPACK_IMPORTED_MODULE_2__.createH1)('5-Day Forecast', '');

  return title;
};

function createWeek() {
  clearWeek();
  (0,_reusableCode_reusableGetters__WEBPACK_IMPORTED_MODULE_1__.getWeek)().append(createTitle(), createWidget());
}

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/week/weekLogic.js":
/*!*******************************!*\
  !*** ./src/week/weekLogic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDateTime": () => (/* binding */ formatDateTime),
/* harmony export */   "get5DayForecast": () => (/* binding */ get5DayForecast),
/* harmony export */   "imperialForecastObject": () => (/* binding */ imperialForecastObject),
/* harmony export */   "metricForecastObject": () => (/* binding */ metricForecastObject)
/* harmony export */ });
/* harmony import */ var _nav_navLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/navLogic */ "./src/nav/navLogic.js");
/* harmony import */ var _birdsEye_birdsEyeContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../birdsEye/birdsEyeContent */ "./src/birdsEye/birdsEyeContent.js");
/* harmony import */ var _stats_statsContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stats/statsContent */ "./src/stats/statsContent.js");
/* harmony import */ var _weekContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekContent */ "./src/week/weekContent.js");
/* harmony import */ var _resources_images_01d_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/images/01d.jpg */ "./src/resources/images/01d.jpg");
// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle




// eslint-disable-next-line import/no-mutable-exports
let metricForecastObject = {};
// eslint-disable-next-line import/no-mutable-exports
let imperialForecastObject = {};

const formatDateTime = (index) => {
  const timeOptions = {
    hour12: 'true',
    timeStyle: 'short',
  };

  const dateOptions = {
    weekday: 'long',
  };

  const date = new Date(metricForecastObject.list[index].dt_txt);
  const normalizedDate = date.toLocaleTimeString(`en-${metricForecastObject.city.country}`, dateOptions);
  const dateArray = normalizedDate.split(' ');
  let normalizedTime = date.toLocaleTimeString(`en-${metricForecastObject.city.country}`, timeOptions);

  if (normalizedTime.charAt(0) === '0' && normalizedTime.charAt(1) === '0') {
    const slicedString = normalizedTime.slice(2, 8);
    normalizedTime = `12${slicedString}`;
  }

  const newString = `${dateArray[0]} ${normalizedTime}`;
  const stringArray = newString.split(' ');
  return stringArray;
};

async function get5DayForecast() {
  try {
    const forcastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${_nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.latLon[0]}&lon=${_nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=metric`,
      { mode: 'cors' },
    );
    const forcastData = await forcastResponse.json();
    metricForecastObject = forcastData;
    console.log(metricForecastObject);
  } catch (error) {
    console.log(error);
  }

  try {
    const forcastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${_nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.latLon[0]}&lon=${_nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=imperial`,
      { mode: 'cors' },
    );
    const forcastData = await forcastResponse.json();
    imperialForecastObject = forcastData;
    console.log(imperialForecastObject);
  } catch (error) {
    console.log(error);
  }

  (0,_birdsEye_birdsEyeContent__WEBPACK_IMPORTED_MODULE_1__.createBirdsEye)();
  (0,_stats_statsContent__WEBPACK_IMPORTED_MODULE_2__.createStats)();
  (0,_weekContent__WEBPACK_IMPORTED_MODULE_3__.createWeek)();
}




/***/ }),

/***/ "./src/Resources/Lato/Lato-Light.ttf":
/*!*******************************************!*\
  !*** ./src/Resources/Lato/Lato-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7400fcad9e48ca9043f.ttf";

/***/ }),

/***/ "./src/resources/images/01d.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/01d.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4656c38b60a7bb5eebbd.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");
/* harmony import */ var _grid_createGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grid/createGrid */ "./src/grid/createGrid.js");
/* harmony import */ var _nav_navContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/navContent */ "./src/nav/navContent.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9B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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxvREFBUyxDQUFDLE9BQU8sb0RBQVMsQ0FBQztBQUN6RixRQUFRLGNBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5RUFBYztBQUNoQixFQUFFLGdFQUFXO0FBQ2IsRUFBRSx3REFBVTtBQUNaO0FBQ0E7QUFNRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUVGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDQTtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2JpcmRzRXllL2JpcmRzRXllQ29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2JpcmRzRXllL2JpcmRzRXllTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9ncmlkL2NyZWF0ZUdyaWQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9uYXYvbmF2Q29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL25hdi9uYXZMb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3JldXNhYmxlQ29kZS9yZXVzYWJsZUVsZW1lbnRzLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvcmV1c2FibGVDb2RlL3JldXNhYmxlR2V0dGVycy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3N0YXRzL3N0YXRzQ29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3N0YXRzL3N0YXRzTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy93ZWVrL3dlZWtDb250ZW50LmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvd2Vlay93ZWVrTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9SZXNvdXJjZXMvTGF0by9MYXRvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1pY29ucyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcblxcclxcbiAgICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxyXFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcclxcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcclxcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIFN5bWJvbHMgT3V0bGluZWQnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxyXFxuICAgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBkaXJlY3Rpb246IGx0cjtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmJ1dHRvbj5zcGFuIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXI+c3BhbiB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgIFxcXCJuYXYgbmF2IG5hdlxcXCJcXHJcXG4gICAgICAgIFxcXCJiaXJkc0V5ZSBnYXAgc3RhdHNcXFwiXFxyXFxuICAgICAgICBcXFwid2VlayB3ZWVrIHdlZWtcXFwiXFxyXFxuICAgIDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNuYXYge1xcclxcbiAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28+c3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ286aG92ZXIsXFxyXFxuI2xvZ286aG92ZXI+c3BhbiB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3JtPmlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3JtPmlucHV0OmhvdmVyLFxcclxcbi5zZWFyY2hGb3JtPmlucHV0OmZvY3VzIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybT5pbnB1dCxcXHJcXG4uc2VhcmNoRm9ybT5pbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xcclxcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheU1ldHJpY0ltcGVyaWFsIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5TWV0cmljSW1wZXJpYWw6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYmlyZHNFeWUge1xcclxcbiAgICBncmlkLWFyZWE6IGJpcmRzRXllO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJpcmRzRXllV2lkZ2V0Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJJY29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNnYXAge1xcclxcbiAgICBncmlkLWFyZWE6IGdhcDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHMge1xcclxcbiAgICBncmlkLWFyZWE6IHN0YXRzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRzV2lkZ2V0Q29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHNJdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zdGF0c1RleHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI3dlZWsge1xcclxcbiAgICBncmlkLWFyZWE6IHdlZWs7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGdhcDoyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLndlZWtXaWRnZXRDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1heC13aWR0aDogOTB2dztcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi53ZWVrSXRlbXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYzs7SUFFZCxxQ0FBcUM7SUFDckMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxrQ0FBa0M7O0lBRWxDLHlCQUF5QjtJQUN6QixrQ0FBa0M7O0lBRWxDLG9CQUFvQjtJQUNwQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHNCQUFz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Q3BDLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsU0FBUztJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL1Jlc291cmNlcy9MYXRvL0xhdG8tTGlnaHQudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1pY29ucyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcblxcclxcbiAgICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxyXFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcclxcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcclxcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIFN5bWJvbHMgT3V0bGluZWQnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxyXFxuICAgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBkaXJlY3Rpb246IGx0cjtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmJ1dHRvbj5zcGFuIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXI+c3BhbiB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgIFxcXCJuYXYgbmF2IG5hdlxcXCJcXHJcXG4gICAgICAgIFxcXCJiaXJkc0V5ZSBnYXAgc3RhdHNcXFwiXFxyXFxuICAgICAgICBcXFwid2VlayB3ZWVrIHdlZWtcXFwiXFxyXFxuICAgIDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNuYXYge1xcclxcbiAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28+c3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ286aG92ZXIsXFxyXFxuI2xvZ286aG92ZXI+c3BhbiB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3JtPmlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3JtPmlucHV0OmhvdmVyLFxcclxcbi5zZWFyY2hGb3JtPmlucHV0OmZvY3VzIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybT5pbnB1dCxcXHJcXG4uc2VhcmNoRm9ybT5pbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xcclxcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheU1ldHJpY0ltcGVyaWFsIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5TWV0cmljSW1wZXJpYWw6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYmlyZHNFeWUge1xcclxcbiAgICBncmlkLWFyZWE6IGJpcmRzRXllO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJpcmRzRXllV2lkZ2V0Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJJY29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNnYXAge1xcclxcbiAgICBncmlkLWFyZWE6IGdhcDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHMge1xcclxcbiAgICBncmlkLWFyZWE6IHN0YXRzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRzV2lkZ2V0Q29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHNJdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zdGF0c1RleHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI3dlZWsge1xcclxcbiAgICBncmlkLWFyZWE6IHdlZWs7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGdhcDoyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLndlZWtXaWRnZXRDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1heC13aWR0aDogOTB2dztcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi53ZWVrSXRlbXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQge1xyXG4gIGdldE1ldHJpY01haW5XZWF0aGVyRGVzY3JpcHRpb24sXHJcbiAgZ2V0SW1wZXJpYWxNYWluV2VhdGhlckRlc2NyaXB0aW9uLFxyXG4gIGdldE1ldHJpY05hbWUsXHJcbiAgZ2V0SW1wZXJpYWxOYW1lLFxyXG4gIGdldE1ldHJpY1RlbXAsXHJcbiAgZ2V0SW1wZXJpYWxUZW1wLFxyXG4gIGdldE1ldHJpY1dlYXRoZXJTeW1ib2wsXHJcbiAgZ2V0SW1wZXJpYWxXZWF0aGVyU3ltYm9sLFxyXG59IGZyb20gJy4vYmlyZHNFeWVMb2dpYyc7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IG1ldHJpY0ltcGVyaWFsQm9vbCwgZGF0ZVRpbWVTdHJpbmcgfSBmcm9tICcuLi9uYXYvbmF2TG9naWMnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVIMSwgY3JlYXRlUCB9IGZyb20gJy4uL3JldXNhYmxlQ29kZS9yZXVzYWJsZUVsZW1lbnRzJztcclxuaW1wb3J0IHsgZ2V0QmlyZHNFeWUgfSBmcm9tICcuLi9yZXVzYWJsZUNvZGUvcmV1c2FibGVHZXR0ZXJzJztcclxuXHJcbmNvbnN0IGNyZWF0ZVdpZGdldCA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoJ2JpcmRzRXllV2lkZ2V0Q29udGFpbmVyJyk7XHJcbiAgaWYgKG1ldHJpY0ltcGVyaWFsQm9vbCkge1xyXG4gICAgY29uc3QgbWFpbldlYXRoZXJEZXNjcmlwdGlvbiA9IGNyZWF0ZUgxKGdldE1ldHJpY01haW5XZWF0aGVyRGVzY3JpcHRpb24oKSwgJ2JlTWFpbldlYXRoZXJEZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgbmFtZSA9IGNyZWF0ZVAoZ2V0TWV0cmljTmFtZSgpLCAnYmVOYW1lJyk7XHJcbiAgICBjb25zdCBkYXRlID0gZGF0ZVRpbWVTdHJpbmc7XHJcbiAgICBjb25zdCB0ZW1wID0gY3JlYXRlSDEoYCR7Z2V0TWV0cmljVGVtcCgpfSDCsENgLCAnYmVUZW1wJyk7XHJcbiAgICBjb25zdCB3ZWF0aGVyU3ltYm9sID0gZ2V0TWV0cmljV2VhdGhlclN5bWJvbCgpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChtYWluV2VhdGhlckRlc2NyaXB0aW9uLCBuYW1lLCBkYXRlLCB0ZW1wLCB3ZWF0aGVyU3ltYm9sKTtcclxuICB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbEJvb2wpIHtcclxuICAgIGNvbnN0IG1haW5XZWF0aGVyRGVzY3JpcHRpb24gPSBjcmVhdGVIMShnZXRJbXBlcmlhbE1haW5XZWF0aGVyRGVzY3JpcHRpb24oKSwgJ2JlTWFpbldlYXRoZXJEZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgbmFtZSA9IGNyZWF0ZVAoZ2V0SW1wZXJpYWxOYW1lKCksICdiZU5hbWUnKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkYXRlVGltZVN0cmluZztcclxuICAgIGNvbnN0IHRlbXAgPSBjcmVhdGVIMShgJHtnZXRJbXBlcmlhbFRlbXAoKX0gwrBGYCwgJ2JlVGVtcCcpO1xyXG4gICAgY29uc3Qgd2VhdGhlclN5bWJvbCA9IGdldEltcGVyaWFsV2VhdGhlclN5bWJvbCgpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChtYWluV2VhdGhlckRlc2NyaXB0aW9uLCBuYW1lLCBkYXRlLCB0ZW1wLCB3ZWF0aGVyU3ltYm9sKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGVhckJpcmRzRXllKCkge1xyXG4gIHdoaWxlIChnZXRCaXJkc0V5ZSgpLmZpcnN0Q2hpbGQpIHsgZ2V0QmlyZHNFeWUoKS5yZW1vdmVDaGlsZChnZXRCaXJkc0V5ZSgpLmZpcnN0Q2hpbGQpOyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJpcmRzRXllKCkge1xyXG4gIGNsZWFyQmlyZHNFeWUoKTtcclxuICBnZXRCaXJkc0V5ZSgpLmFwcGVuZChjcmVhdGVXaWRnZXQoKSk7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCB7IGNyZWF0ZUJpcmRzRXllIH07XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgbWV0cmljV2VhdGhlck9iamVjdCwgaW1wZXJpYWxXZWF0aGVyT2JqZWN0IH0gZnJvbSAnLi4vbmF2L25hdkxvZ2ljJztcclxuaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVTeW1ib2wgfSBmcm9tICcuLi9yZXVzYWJsZUNvZGUvcmV1c2FibGVFbGVtZW50cyc7XHJcblxyXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XHJcbiAgY29uc29sZS5sb2coc3RyaW5nKTtcclxuICBjb25zdCBwb3NpdGlvbiA9IHN0cmluZy5zZWFyY2goJyAnKTtcclxuICBsZXQgdGVtcFN0cmluZyA9ICcnO1xyXG4gIGlmIChwb3NpdGlvbiAhPT0gLTEpIHtcclxuICAgIGNvbnN0IHN0cmluZ0FycmF5ID0gc3RyaW5nLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB0ZXh0ID0gc3RyaW5nQXJyYXlbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmdBcnJheVtpXS5zbGljZSgxKTtcclxuICAgICAgdGVtcFN0cmluZyArPSBgJHt0ZXh0fSBgO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZW1wU3RyaW5nID0gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRlbXBTdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGdldE1ldHJpY01haW5XZWF0aGVyRGVzY3JpcHRpb24gPSAoKSA9PiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoXHJcbiAgbWV0cmljV2VhdGhlck9iamVjdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4pO1xyXG5jb25zdCBnZXRJbXBlcmlhbE1haW5XZWF0aGVyRGVzY3JpcHRpb24gPSAoKSA9PiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoXHJcbiAgaW1wZXJpYWxXZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbik7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNOYW1lID0gKCkgPT4gbWV0cmljV2VhdGhlck9iamVjdC5uYW1lO1xyXG5jb25zdCBnZXRJbXBlcmlhbE5hbWUgPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubmFtZTtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1RlbXAgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4udGVtcDtcclxuY29uc3QgZ2V0SW1wZXJpYWxUZW1wID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4udGVtcDtcclxuXHJcbmNvbnN0IGZpbmRTeW1ib2wgPSAod2VhdGhlckljb25Db2RlKSA9PiB7XHJcbiAgbGV0IHN5bWJvbE5hbWUgPSAnJztcclxuICBzd2l0Y2ggKHdlYXRoZXJJY29uQ29kZSkge1xyXG4gICAgY2FzZSAnMDFkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdjbGVhcl9kYXknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAxbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnY2xlYXJfbmlnaHQnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAyZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncGFydGx5X2Nsb3VkeV9kYXknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAybic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncGFydGx5X2Nsb3VkeV9uaWdodCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDNkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdjbG91ZHknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAzbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnY2xvdWR5JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwNGQnOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2ZpbHRlcl9kcmFtYSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDRuJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdmaWx0ZXJfZHJhbWEnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA5ZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA5bic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEwZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEwbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzExZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAndGh1bmRlcnN0b3JtJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxMW4nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ3RodW5kZXJzdG9ybSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTNkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdhY191bml0JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxM24nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2FjX3VuaXQnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzUwZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnZm9nZ3knO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzUwbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnZm9nZ3knO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJTlZBTElEX1NXSVRDSF9FTlRSWSB8IGdldE1ldHJpY1dlYXRoZXJJY29uKCkgfCBiaXJkc0V5ZUxvZ2ljLmpzJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjcmVhdGVTeW1ib2woc3ltYm9sTmFtZSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNZXRyaWNXZWF0aGVyU3ltYm9sID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdignd2VhdGhlclN5bWJvbCcpO1xyXG4gIGRpdi5hcHBlbmQoZmluZFN5bWJvbChgJHttZXRyaWNXZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uaWNvbn1gKSk7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuY29uc3QgZ2V0SW1wZXJpYWxXZWF0aGVyU3ltYm9sID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdignd2VhdGhlclN5bWJvbCcpO1xyXG4gIGRpdi5hcHBlbmQoZmluZFN5bWJvbChgJHtpbXBlcmlhbFdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5pY29ufWApKTtcclxuICByZXR1cm4gZGl2O1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsXHJcbiAgZ2V0TWV0cmljTWFpbldlYXRoZXJEZXNjcmlwdGlvbixcclxuICBnZXRJbXBlcmlhbE1haW5XZWF0aGVyRGVzY3JpcHRpb24sXHJcbiAgZ2V0TWV0cmljTmFtZSxcclxuICBnZXRJbXBlcmlhbE5hbWUsXHJcbiAgZ2V0TWV0cmljVGVtcCxcclxuICBnZXRJbXBlcmlhbFRlbXAsXHJcbiAgZ2V0TWV0cmljV2VhdGhlclN5bWJvbCxcclxuICBnZXRJbXBlcmlhbFdlYXRoZXJTeW1ib2wsXHJcbiAgZmluZFN5bWJvbCxcclxufTtcclxuIiwiaW1wb3J0IHsgZ2V0Q29udGVudCB9IGZyb20gJy4uL3JldXNhYmxlQ29kZS9yZXVzYWJsZUdldHRlcnMnO1xyXG5cclxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpO1xyXG4gIHJldHVybiBuYXY7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVCaXJkc0V5ZSA9ICgpID0+IHtcclxuICBjb25zdCBiaXJkc0V5ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJpcmRzRXllLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmlyZHNFeWUnKTtcclxuICByZXR1cm4gYmlyZHNFeWU7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVHYXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2FwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZ2FwLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FwJyk7XHJcbiAgcmV0dXJuIGdhcDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVN0YXRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc3RhdHMuc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0cycpO1xyXG4gIHJldHVybiBzdGF0cztcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVdlZWsgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlZWsuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWVrJyk7XHJcbiAgd2Vlay5pbm5lckhUTUwgPSAnd2Vlayc7XHJcbiAgcmV0dXJuIHdlZWs7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHcmlkKCkge1xyXG4gIGdldENvbnRlbnQoKS5hcHBlbmQoXHJcbiAgICBjcmVhdGVOYXYoKSxcclxuICAgIGNyZWF0ZUJpcmRzRXllKCksXHJcbiAgICBjcmVhdGVHYXAoKSxcclxuICAgIGNyZWF0ZVN0YXRzKCksXHJcbiAgICBjcmVhdGVXZWVrKCksXHJcbiAgKTtcclxufVxyXG5cclxuY3JlYXRlR3JpZCgpO1xyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUZvcm0sIGNyZWF0ZUlucHV0LCBjcmVhdGVJY29uLCBjcmVhdGVCdXR0b24sXHJcbn0gZnJvbSAnLi4vcmV1c2FibGVDb2RlL3JldXNhYmxlRWxlbWVudHMnO1xyXG5pbXBvcnQgeyBnZXROYXYgfSBmcm9tICcuLi9yZXVzYWJsZUNvZGUvcmV1c2FibGVHZXR0ZXJzJztcclxuaW1wb3J0IHsgZ2V0R2VvUmVnaW9uLCB0b2dnbGVNZXRyaWNJbXBlcmlhbEJvb2wgfSBmcm9tICcuL25hdkxvZ2ljJztcclxuXHJcbmNvbnN0IGNyZWF0ZVNlYXJjaEJhciA9ICgpID0+IHtcclxuICBjb25zdCBmb3JtID0gY3JlYXRlRm9ybSgnc2VhcmNoRm9ybScpO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc2VhcmNoJywgJycsICdidXR0b24nLCAnc3VibWl0QnV0dG9uJyk7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBnZXRHZW9SZWdpb24pO1xyXG4gIGZvcm0uYXBwZW5kKGNyZWF0ZUlucHV0KCd0ZXh0JywgdHJ1ZSwgJ1NlYXJjaCBsb2NhdGlvbi4uLicsICdzZWFyY2hCYXInKSwgYnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIGZvcm07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVMb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcclxuICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZUljb24oJ3N0b3JtJyksICdpV2VhdGhlcicpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNZXRyaWNJbXBlcmlhbEJ1dHRvbiA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJycsICdEaXNwbGF5IMKwQycsICdidXR0b24nLCAnZGlzcGxheU1ldHJpY0ltcGVyaWFsJyk7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRvZ2dsZU1ldHJpY0ltcGVyaWFsQm9vbCk7XHJcbiAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICBnZXROYXYoKS5hcHBlbmQoY3JlYXRlTG9nbygpLCBjcmVhdGVTZWFyY2hCYXIoKSwgY3JlYXRlTWV0cmljSW1wZXJpYWxCdXR0b24oKSk7XHJcbn1cclxuXHJcbmNyZWF0ZU5hdigpO1xyXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IGNyZWF0ZUJpcmRzRXllIH0gZnJvbSAnLi4vYmlyZHNFeWUvYmlyZHNFeWVDb250ZW50JztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBjcmVhdGVTdGF0cyB9IGZyb20gJy4uL3N0YXRzL3N0YXRzQ29udGVudCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdlZWsgfSBmcm9tICcuLi93ZWVrL3dlZWtDb250ZW50JztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBnZXQ1RGF5Rm9yZWNhc3QgfSBmcm9tICcuLi93ZWVrL3dlZWtMb2dpYyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXHJcbmxldCBsYXRMb24gPSBbXTtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcclxubGV0IG1ldHJpY1dlYXRoZXJPYmplY3QgPSB7fTtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcclxubGV0IGltcGVyaWFsV2VhdGhlck9iamVjdCA9IHt9O1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xyXG5sZXQgbWV0cmljSW1wZXJpYWxCb29sID0gdHJ1ZTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXHJcbmxldCBkYXRlVGltZVN0cmluZyA9ICcnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZVRpbWUoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRpbWVSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3RpbWV6b25lLmFic3RyYWN0YXBpLmNvbS92MS9jdXJyZW50X3RpbWUvP2FwaV9rZXk9YWNlODBmZDRhOTM2NDM5NmFmODc2MTIwN2ZhMzFiMzEmbG9jYXRpb249JHttZXRyaWNXZWF0aGVyT2JqZWN0LmNvb3JkLmxhdH0sICR7bWV0cmljV2VhdGhlck9iamVjdC5jb29yZC5sb259YCwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICBjb25zdCB0aW1lRGF0YSA9IGF3YWl0IHRpbWVSZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZURhdGEuZGF0ZXRpbWUpO1xyXG5cclxuICAgIGNvbnN0IHRpbWVBcnJheSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoYGVuLSR7bWV0cmljV2VhdGhlck9iamVjdC5zeXMuY291bnRyeX1gLCB7IGhvdXIxMjogJ3RydWUnIH0pLnNwbGl0KCcsICcpO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyxcclxuICAgIH07XHJcbiAgICBjb25zdCBub3JtYWxpemVkRGF0ZSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoYGVuLSR7bWV0cmljV2VhdGhlck9iamVjdC5zeXMuY291bnRyeX1gLCBvcHRpb25zKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJHtub3JtYWxpemVkRGF0ZX0gJHt0aW1lQXJyYXlbMV19YCk7XHJcblxyXG4gICAgZGF0ZVRpbWVTdHJpbmcgPSBgJHtub3JtYWxpemVkRGF0ZX0gJHt0aW1lQXJyYXlbMV19YDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0NURheUZvcmVjYXN0KCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG1ldHJpY1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRMb25bMF19Jmxvbj0ke2xhdExvblsxXX0mYXBwaWQ9MmI0NWQyMDdiZTY0M2VhYWMzNTMzOTdkYmI1ZWNjYzcmdW5pdHM9bWV0cmljYCxcclxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCBtZXRyaWNXZWF0aGVyRGF0YSA9IGF3YWl0IG1ldHJpY1Jlc3BvbnNlLmpzb24oKTtcclxuICAgIG1ldHJpY1dlYXRoZXJPYmplY3QgPSBtZXRyaWNXZWF0aGVyRGF0YTtcclxuICAgIGNvbnNvbGUubG9nKG1ldHJpY1dlYXRoZXJPYmplY3QpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgZ2V0V2VhdGhlcigpIE1ldHJpYyBFcnJvcjogJHtlcnJvcn1gKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBpbXBlcmlhbFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRMb25bMF19Jmxvbj0ke2xhdExvblsxXX0mYXBwaWQ9MmI0NWQyMDdiZTY0M2VhYWMzNTMzOTdkYmI1ZWNjYzcmdW5pdHM9aW1wZXJpYWxgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGltcGVyaWFsV2VhdGhlckRhdGEgPSBhd2FpdCBpbXBlcmlhbFJlc3BvbnNlLmpzb24oKTtcclxuICAgIGltcGVyaWFsV2VhdGhlck9iamVjdCA9IGltcGVyaWFsV2VhdGhlckRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhpbXBlcmlhbFdlYXRoZXJPYmplY3QpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgZ2V0V2VhdGhlcigpIEltcGVyaWFsIEVycm9yOiAke2Vycm9yfWApO1xyXG4gIH1cclxuICBnZXREYXRlVGltZSgpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9SZWdpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hCYXInKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7c2VhcmNoQmFyLnZhbHVlfSZsaW1pdD01JmFwcGlkPTJiNDVkMjA3YmU2NDNlYWFjMzUzMzk3ZGJiNWVjY2M3YCxcclxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCBnZW9EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgbGF0TG9uID0gW2dlb0RhdGFbMF0ubGF0LCBnZW9EYXRhWzBdLmxvbl07XHJcbiAgICBnZXRXZWF0aGVyKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGBnZXRHZW9SZWdpb24oKSBFcnJvcjogJHtlcnJvcn1gKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1ldHJpY0ltcGVyaWFsQm9vbCgpIHtcclxuICBtZXRyaWNJbXBlcmlhbEJvb2wgPSAhbWV0cmljSW1wZXJpYWxCb29sO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5TWV0cmljSW1wZXJpYWwnKTtcclxuXHJcbiAgaWYgKG1ldHJpY0ltcGVyaWFsQm9vbCkgeyBidXR0b24uaW5uZXJIVE1MID0gJ0Rpc3BsYXkgwrBDJzsgfSBlbHNlIHtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnRGlzcGxheSDCsEYnO1xyXG4gIH1cclxuICBjcmVhdGVCaXJkc0V5ZSgpO1xyXG4gIGNyZWF0ZVN0YXRzKCk7XHJcbiAgY3JlYXRlV2VlaygpO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQge1xyXG4gIGdldEdlb1JlZ2lvbixcclxuICB0b2dnbGVNZXRyaWNJbXBlcmlhbEJvb2wsXHJcbiAgbGF0TG9uLFxyXG4gIG1ldHJpY1dlYXRoZXJPYmplY3QsXHJcbiAgaW1wZXJpYWxXZWF0aGVyT2JqZWN0LFxyXG4gIG1ldHJpY0ltcGVyaWFsQm9vbCxcclxuICBkYXRlVGltZVN0cmluZyxcclxufTtcclxuIiwiY29uc3QgY3JlYXRlRm9ybSA9IChmb3JtQ2xhc3MgPSAnJykgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZm9ybUNsYXNzKTtcclxuICByZXR1cm4gZm9ybTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUxhYmVsID0gKGxhYmVsVGV4dENvbnRlbnQpID0+IHtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHRDb250ZW50O1xyXG4gIHJldHVybiBsYWJlbDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUlucHV0ID0gKGlucHV0VHlwZSA9ICd0ZXh0JywgaW5wdXRSZXF1aXJlZCA9IHRydWUsIGlucHV0UGxhY2VIb2xkZXIgPSAnJywgaW5wdXRDbGFzcyA9ICcnKSA9PiB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XHJcbiAgaW5wdXQucmVxdWlyZWQgPSBpbnB1dFJlcXVpcmVkO1xyXG4gIGlucHV0LnBsYWNlaG9sZGVyID0gaW5wdXRQbGFjZUhvbGRlcjtcclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgaW5wdXRDbGFzcyk7XHJcbiAgcmV0dXJuIGlucHV0O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSW5wdXRDb250YWluZXIgPSAobGFiZWwsIGlucHV0LCBjb250YWluZXJDbGFzcyA9ICcnKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjb250YWluZXJDbGFzcyk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChsYWJlbCwgaW5wdXQpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJY29uID0gKGljb25OYW1lKSA9PiB7XHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgc3Bhbi5pbm5lckhUTUwgPSBpY29uTmFtZTtcclxuICByZXR1cm4gc3BhbjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVN5bWJvbCA9IChzeW1ib2xOYW1lKSA9PiB7XHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcclxuICBzcGFuLmlubmVySFRNTCA9IHN5bWJvbE5hbWU7XHJcbiAgcmV0dXJuIHNwYW47XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVCdXR0b24gPSAoYnV0dG9uSWNvbiwgYnV0dG9uVGV4dCwgYnV0dG9uVHlwZSA9ICdidXR0b24nLCBidXR0b25DbGFzcyA9ICcnKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uLnR5cGUgPSBidXR0b25UeXBlO1xyXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYnV0dG9uQ2xhc3MpO1xyXG4gIGJ1dHRvbi5hcHBlbmQoY3JlYXRlSWNvbihidXR0b25JY29uKSwgYnV0dG9uVGV4dCk7XHJcbiAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZURpdiA9IChkaXZDbGFzcykgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZGl2Q2xhc3MpO1xyXG4gIHJldHVybiBkaXY7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVIMSA9ICh0ZXh0LCBoMUNsYXNzKSA9PiB7XHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGgxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBoMUNsYXNzKTtcclxuICBoMS5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gIHJldHVybiBoMTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVAgPSAodGV4dCwgcENsYXNzKSA9PiB7XHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBwQ2xhc3MpO1xyXG4gIHAuaW5uZXJIVE1MID0gdGV4dDtcclxuICByZXR1cm4gcDtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlRm9ybSxcclxuICBjcmVhdGVMYWJlbCxcclxuICBjcmVhdGVJbnB1dCxcclxuICBjcmVhdGVJbnB1dENvbnRhaW5lcixcclxuICBjcmVhdGVJY29uLFxyXG4gIGNyZWF0ZVN5bWJvbCxcclxuICBjcmVhdGVCdXR0b24sXHJcbiAgY3JlYXRlRGl2LFxyXG4gIGNyZWF0ZUgxLFxyXG4gIGNyZWF0ZVAsXHJcbn07XHJcbiIsImNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuY29uc3QgZ2V0TmF2ID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpO1xyXG5cclxuY29uc3QgZ2V0QmlyZHNFeWUgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlyZHNFeWUnKTtcclxuXHJcbmNvbnN0IGdldFN0YXRzID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRzJyk7XHJcblxyXG5jb25zdCBnZXRXZWVrID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWsnKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0Q29udGVudCxcclxuICBnZXROYXYsXHJcbiAgZ2V0QmlyZHNFeWUsXHJcbiAgZ2V0U3RhdHMsXHJcbiAgZ2V0V2VlayxcclxufTtcclxuIiwiaW1wb3J0IHsgZ2V0U3RhdHMgfSBmcm9tICcuLi9yZXVzYWJsZUNvZGUvcmV1c2FibGVHZXR0ZXJzJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQge1xyXG4gIGdldE1ldHJpY0ZlZWxzTGlrZSxcclxuICBnZXRJbXBlcmlhbEZlZWxzTGlrZSxcclxuICBnZXRNZXRyaWNIdW1pZGl0eSxcclxuICBnZXRJbXBlcmlhbEh1bWlkaXR5LFxyXG4gIGdldE1ldHJpY1dpbmRTcGVlZCxcclxuICBnZXRJbXBlcmlhbFdpbmRTcGVlZCxcclxufSBmcm9tICcuL3N0YXRzTG9naWMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVEaXYsIGNyZWF0ZUgxLCBjcmVhdGVQLCBjcmVhdGVTeW1ib2wsXHJcbn0gZnJvbSAnLi4vcmV1c2FibGVDb2RlL3JldXNhYmxlRWxlbWVudHMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IG1ldHJpY0ltcGVyaWFsQm9vbCB9IGZyb20gJy4uL25hdi9uYXZMb2dpYyc7XHJcblxyXG5jb25zdCBjcmVhdGVGZWVsc0xpa2VDb250YWluZXIgPSAobWV0cmljSW1wZXJpYWwpID0+IHtcclxuICBjb25zdCBmZWVsc0xpa2VDb250YWluZXIgPSBjcmVhdGVEaXYoJ3N0YXRzSXRlbScpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZVRleHQgPSBjcmVhdGVEaXYoJ3N0YXRzVGV4dCcpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZVAgPSBjcmVhdGVQKCdGZWVscyBMaWtlJyk7XHJcbiAgbGV0IGZlZWxzTGlrZUgxO1xyXG4gIGlmIChtZXRyaWNJbXBlcmlhbCkgeyBmZWVsc0xpa2VIMSA9IGNyZWF0ZUgxKGAke2dldE1ldHJpY0ZlZWxzTGlrZSgpfSDCsENgKTsgfSBlbHNlIGlmICghbWV0cmljSW1wZXJpYWwpIHsgZmVlbHNMaWtlSDEgPSBjcmVhdGVIMShgJHtnZXRJbXBlcmlhbEZlZWxzTGlrZSgpfSDCsEZgKTsgfVxyXG4gIGZlZWxzTGlrZVRleHQuYXBwZW5kKGZlZWxzTGlrZVAsIGZlZWxzTGlrZUgxKTtcclxuICBmZWVsc0xpa2VDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN5bWJvbCgndGhlcm1vc3RhdCcpLCBmZWVsc0xpa2VUZXh0KTtcclxuICByZXR1cm4gZmVlbHNMaWtlQ29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSHVtaWRpdHlDb250YWluZXIgPSAobWV0cmljSW1wZXJpYWwpID0+IHtcclxuICBjb25zdCBodW1pZGl0eUNvbnRhaW5lciA9IGNyZWF0ZURpdignc3RhdHNJdGVtJyk7XHJcbiAgY29uc3QgaHVtaWRpdHlUZXh0ID0gY3JlYXRlRGl2KCdzdGF0c1RleHQnKTtcclxuICBjb25zdCBodW1pZGl0eVAgPSBjcmVhdGVQKCdIdW1pZGl0eScpO1xyXG4gIGxldCBodW1pZGl0eUgxO1xyXG4gIGlmIChtZXRyaWNJbXBlcmlhbCkgeyBodW1pZGl0eUgxID0gY3JlYXRlSDEoYCR7Z2V0TWV0cmljSHVtaWRpdHkoKX0gJWApOyB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbCkgeyBodW1pZGl0eUgxID0gY3JlYXRlSDEoYCR7Z2V0SW1wZXJpYWxIdW1pZGl0eSgpfSAlYCk7IH1cclxuICBodW1pZGl0eVRleHQuYXBwZW5kKGh1bWlkaXR5UCwgaHVtaWRpdHlIMSk7XHJcbiAgaHVtaWRpdHlDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN5bWJvbCgnaHVtaWRpdHlfbWlkJyksIGh1bWlkaXR5VGV4dCk7XHJcbiAgcmV0dXJuIGh1bWlkaXR5Q29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlV2luZFNwZWVkQ29udGFpbmVyID0gKG1ldHJpY0ltcGVyaWFsKSA9PiB7XHJcbiAgY29uc3Qgd2luZFNwZWVkQ29udGFpbmVyID0gY3JlYXRlRGl2KCdzdGF0c0l0ZW0nKTtcclxuICBjb25zdCB3aW5kU3BlZWRUZXh0ID0gY3JlYXRlRGl2KCdzdGF0c1RleHQnKTtcclxuICBjb25zdCB3aW5kU3BlZWRQID0gY3JlYXRlUCgnV2luZCBTcGVlZCcpO1xyXG4gIGxldCB3aW5kU3BlZWRIMTtcclxuICBpZiAobWV0cmljSW1wZXJpYWwpIHsgd2luZFNwZWVkSDEgPSBjcmVhdGVIMShgJHtnZXRNZXRyaWNXaW5kU3BlZWQoKX0ga20vaGApOyB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbCkgeyB3aW5kU3BlZWRIMSA9IGNyZWF0ZUgxKGAke2dldEltcGVyaWFsV2luZFNwZWVkKCl9IG1waGApOyB9XHJcbiAgd2luZFNwZWVkVGV4dC5hcHBlbmQod2luZFNwZWVkUCwgd2luZFNwZWVkSDEpO1xyXG4gIHdpbmRTcGVlZENvbnRhaW5lci5hcHBlbmQoY3JlYXRlU3ltYm9sKCdhaXInKSwgd2luZFNwZWVkVGV4dCk7XHJcbiAgcmV0dXJuIHdpbmRTcGVlZENvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVdpZGdldCA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoJ3N0YXRzV2lkZ2V0Q29udGFpbmVyJyk7XHJcbiAgaWYgKG1ldHJpY0ltcGVyaWFsQm9vbCkge1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChcclxuICAgICAgY3JlYXRlRmVlbHNMaWtlQ29udGFpbmVyKG1ldHJpY0ltcGVyaWFsQm9vbCksXHJcbiAgICAgIGNyZWF0ZUh1bWlkaXR5Q29udGFpbmVyKG1ldHJpY0ltcGVyaWFsQm9vbCksXHJcbiAgICAgIGNyZWF0ZVdpbmRTcGVlZENvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbEJvb2wpIHtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICAgIGNyZWF0ZUZlZWxzTGlrZUNvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgICBjcmVhdGVIdW1pZGl0eUNvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgICBjcmVhdGVXaW5kU3BlZWRDb250YWluZXIobWV0cmljSW1wZXJpYWxCb29sKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xlYXJTdGF0cygpIHtcclxuICB3aGlsZSAoZ2V0U3RhdHMoKS5maXJzdENoaWxkKSB7IGdldFN0YXRzKCkucmVtb3ZlQ2hpbGQoZ2V0U3RhdHMoKS5maXJzdENoaWxkKTsgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdGF0cygpIHtcclxuICBjbGVhclN0YXRzKCk7XHJcbiAgZ2V0U3RhdHMoKS5hcHBlbmQoY3JlYXRlV2lkZ2V0KCkpO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgeyBjcmVhdGVTdGF0cyB9O1xyXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IG1ldHJpY1dlYXRoZXJPYmplY3QsIGltcGVyaWFsV2VhdGhlck9iamVjdCB9IGZyb20gJy4uL25hdi9uYXZMb2dpYyc7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNGZWVsc0xpa2UgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4uZmVlbHNfbGlrZTtcclxuXHJcbmNvbnN0IGdldEltcGVyaWFsRmVlbHNMaWtlID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4uZmVlbHNfbGlrZTtcclxuXHJcbmNvbnN0IGdldE1ldHJpY0h1bWlkaXR5ID0gKCkgPT4gbWV0cmljV2VhdGhlck9iamVjdC5tYWluLmh1bWlkaXR5O1xyXG5cclxuY29uc3QgZ2V0SW1wZXJpYWxIdW1pZGl0eSA9ICgpID0+IGltcGVyaWFsV2VhdGhlck9iamVjdC5tYWluLmh1bWlkaXR5O1xyXG5cclxuY29uc3QgZ2V0TWV0cmljUHJlc3N1cmUgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4ucHJlc3N1cmU7XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbFByZXNzdXJlID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4ucHJlc3N1cmU7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNUZW1wTWF4ID0gKCkgPT4gbWV0cmljV2VhdGhlck9iamVjdC5tYWluLnRlbXBfbWF4O1xyXG5cclxuY29uc3QgZ2V0SW1wZXJpYWxUZW1wTWF4ID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9tYXg7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNUZW1wTWluID0gKCkgPT4gbWV0cmljV2VhdGhlck9iamVjdC5tYWluLnRlbXBfbWluO1xyXG5cclxuY29uc3QgZ2V0SW1wZXJpYWxUZW1wTWluID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9taW47XHJcblxyXG5jb25zdCBnZXRNZXRyaWNXaW5kU3BlZWQgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0LndpbmQuc3BlZWQ7XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbFdpbmRTcGVlZCA9ICgpID0+IGltcGVyaWFsV2VhdGhlck9iamVjdC53aW5kLnNwZWVkO1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRNZXRyaWNGZWVsc0xpa2UsXHJcbiAgZ2V0SW1wZXJpYWxGZWVsc0xpa2UsXHJcbiAgZ2V0TWV0cmljSHVtaWRpdHksXHJcbiAgZ2V0SW1wZXJpYWxIdW1pZGl0eSxcclxuICBnZXRNZXRyaWNQcmVzc3VyZSxcclxuICBnZXRJbXBlcmlhbFByZXNzdXJlLFxyXG4gIGdldE1ldHJpY1RlbXBNYXgsXHJcbiAgZ2V0SW1wZXJpYWxUZW1wTWF4LFxyXG4gIGdldE1ldHJpY1RlbXBNaW4sXHJcbiAgZ2V0SW1wZXJpYWxUZW1wTWluLFxyXG4gIGdldE1ldHJpY1dpbmRTcGVlZCxcclxuICBnZXRJbXBlcmlhbFdpbmRTcGVlZCxcclxufTtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQge1xyXG4gIGZvcm1hdERhdGVUaW1lLCBtZXRyaWNGb3JlY2FzdE9iamVjdCwgaW1wZXJpYWxGb3JlY2FzdE9iamVjdCxcclxufSBmcm9tICcuL3dlZWtMb2dpYyc7XHJcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tICcuLi9yZXVzYWJsZUNvZGUvcmV1c2FibGVHZXR0ZXJzJztcclxuaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVQLCBjcmVhdGVIMSB9IGZyb20gJy4uL3JldXNhYmxlQ29kZS9yZXVzYWJsZUVsZW1lbnRzJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBtZXRyaWNJbXBlcmlhbEJvb2wgfSBmcm9tICcuLi9uYXYvbmF2TG9naWMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgZmluZFN5bWJvbCB9IGZyb20gJy4uL2JpcmRzRXllL2JpcmRzRXllTG9naWMnO1xyXG5cclxuY29uc3QgY3JlYXRlTWV0cmljV2Vla0l0ZW1zID0gKHdlZWtXaWRnZXRDb250YWluZXIpID0+IHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1ldHJpY0ZvcmVjYXN0T2JqZWN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHdlZWtJdGVtQ29udGFpbmVyID0gY3JlYXRlRGl2KCd3ZWVrSXRlbScpO1xyXG4gICAgY29uc3QgdGltZURhdGVBcnJheSA9IGZvcm1hdERhdGVUaW1lKGkpO1xyXG4gICAgY29uc3QgZGF5ID0gY3JlYXRlUChgJHt0aW1lRGF0ZUFycmF5WzBdfWAsICcnKTtcclxuICAgIGNvbnN0IHRpbWUgPSBjcmVhdGVQKGAke3RpbWVEYXRlQXJyYXlbMV19ICR7dGltZURhdGVBcnJheVsyXX1gLCAnJyk7XHJcbiAgICBjb25zdCB0ZW1wID0gY3JlYXRlSDEoYCR7bWV0cmljRm9yZWNhc3RPYmplY3QubGlzdFtpXS5tYWluLnRlbXB9IMKwQ2AsICcnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlUChcclxuICAgICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxyXG4gICAgICAgIG1ldHJpY0ZvcmVjYXN0T2JqZWN0Lmxpc3RbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICB3ZWVrSXRlbUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICAgIGRheSxcclxuICAgICAgdGltZSxcclxuICAgICAgdGVtcCxcclxuICAgICAgZmluZFN5bWJvbChtZXRyaWNGb3JlY2FzdE9iamVjdC5saXN0W2ldLndlYXRoZXJbMF0uaWNvbiksXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgKTtcclxuICAgIHdlZWtXaWRnZXRDb250YWluZXIuYXBwZW5kKHdlZWtJdGVtQ29udGFpbmVyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbXBlcmlhbFdlZWtJdGVtcyA9ICh3ZWVrV2lkZ2V0Q29udGFpbmVyKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbXBlcmlhbEZvcmVjYXN0T2JqZWN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHdlZWtJdGVtQ29udGFpbmVyID0gY3JlYXRlRGl2KCd3ZWVrSXRlbScpO1xyXG4gICAgY29uc3QgdGltZURhdGVBcnJheSA9IGZvcm1hdERhdGVUaW1lKGkpO1xyXG4gICAgY29uc3QgZGF5ID0gY3JlYXRlUChgJHt0aW1lRGF0ZUFycmF5WzBdfWAsICcnKTtcclxuICAgIGNvbnN0IHRpbWUgPSBjcmVhdGVQKGAke3RpbWVEYXRlQXJyYXlbMV19ICR7dGltZURhdGVBcnJheVsyXX1gLCAnJyk7XHJcbiAgICBjb25zdCB0ZW1wID0gY3JlYXRlSDEoYCR7aW1wZXJpYWxGb3JlY2FzdE9iamVjdC5saXN0W2ldLm1haW4udGVtcH0gwrBGYCwgJycpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVQKFxyXG4gICAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoXHJcbiAgICAgICAgaW1wZXJpYWxGb3JlY2FzdE9iamVjdC5saXN0W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gICAgd2Vla0l0ZW1Db250YWluZXIuYXBwZW5kKFxyXG4gICAgICBkYXksXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHRlbXAsXHJcbiAgICAgIGZpbmRTeW1ib2woaW1wZXJpYWxGb3JlY2FzdE9iamVjdC5saXN0W2ldLndlYXRoZXJbMF0uaWNvbiksXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgKTtcclxuXHJcbiAgICB3ZWVrV2lkZ2V0Q29udGFpbmVyLmFwcGVuZCh3ZWVrSXRlbUNvbnRhaW5lcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlV2lkZ2V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdlZWtXaWRnZXRDb250YWluZXIgPSBjcmVhdGVEaXYoJ3dlZWtXaWRnZXRDb250YWluZXInKTtcclxuICBpZiAobWV0cmljSW1wZXJpYWxCb29sKSB7XHJcbiAgICBjcmVhdGVNZXRyaWNXZWVrSXRlbXMod2Vla1dpZGdldENvbnRhaW5lcik7XHJcbiAgfSBlbHNlIGlmICghbWV0cmljSW1wZXJpYWxCb29sKSB7XHJcbiAgICBjcmVhdGVJbXBlcmlhbFdlZWtJdGVtcyh3ZWVrV2lkZ2V0Q29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3ZWVrV2lkZ2V0Q29udGFpbmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xlYXJXZWVrKCkge1xyXG4gIHdoaWxlIChnZXRXZWVrKCkuZmlyc3RDaGlsZCkgeyBnZXRXZWVrKCkucmVtb3ZlQ2hpbGQoZ2V0V2VlaygpLmZpcnN0Q2hpbGQpOyB9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRpdGxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlSDEoJzUtRGF5IEZvcmVjYXN0JywgJycpO1xyXG5cclxuICByZXR1cm4gdGl0bGU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXZWVrKCkge1xyXG4gIGNsZWFyV2VlaygpO1xyXG4gIGdldFdlZWsoKS5hcHBlbmQoY3JlYXRlVGl0bGUoKSwgY3JlYXRlV2lkZ2V0KCkpO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgeyBjcmVhdGVXZWVrIH07XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgbGF0TG9uIH0gZnJvbSAnLi4vbmF2L25hdkxvZ2ljJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBjcmVhdGVCaXJkc0V5ZSB9IGZyb20gJy4uL2JpcmRzRXllL2JpcmRzRXllQ29udGVudCc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgY3JlYXRlU3RhdHMgfSBmcm9tICcuLi9zdGF0cy9zdGF0c0NvbnRlbnQnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IGNyZWF0ZVdlZWsgfSBmcm9tICcuL3dlZWtDb250ZW50JztcclxuXHJcbmltcG9ydCBqcGcgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wMWQuanBnJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXHJcbmxldCBtZXRyaWNGb3JlY2FzdE9iamVjdCA9IHt9O1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xyXG5sZXQgaW1wZXJpYWxGb3JlY2FzdE9iamVjdCA9IHt9O1xyXG5cclxuY29uc3QgZm9ybWF0RGF0ZVRpbWUgPSAoaW5kZXgpID0+IHtcclxuICBjb25zdCB0aW1lT3B0aW9ucyA9IHtcclxuICAgIGhvdXIxMjogJ3RydWUnLFxyXG4gICAgdGltZVN0eWxlOiAnc2hvcnQnLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGVPcHRpb25zID0ge1xyXG4gICAgd2Vla2RheTogJ2xvbmcnLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShtZXRyaWNGb3JlY2FzdE9iamVjdC5saXN0W2luZGV4XS5kdF90eHQpO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWREYXRlID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoYGVuLSR7bWV0cmljRm9yZWNhc3RPYmplY3QuY2l0eS5jb3VudHJ5fWAsIGRhdGVPcHRpb25zKTtcclxuICBjb25zdCBkYXRlQXJyYXkgPSBub3JtYWxpemVkRGF0ZS5zcGxpdCgnICcpO1xyXG4gIGxldCBub3JtYWxpemVkVGltZSA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKGBlbi0ke21ldHJpY0ZvcmVjYXN0T2JqZWN0LmNpdHkuY291bnRyeX1gLCB0aW1lT3B0aW9ucyk7XHJcblxyXG4gIGlmIChub3JtYWxpemVkVGltZS5jaGFyQXQoMCkgPT09ICcwJyAmJiBub3JtYWxpemVkVGltZS5jaGFyQXQoMSkgPT09ICcwJykge1xyXG4gICAgY29uc3Qgc2xpY2VkU3RyaW5nID0gbm9ybWFsaXplZFRpbWUuc2xpY2UoMiwgOCk7XHJcbiAgICBub3JtYWxpemVkVGltZSA9IGAxMiR7c2xpY2VkU3RyaW5nfWA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdTdHJpbmcgPSBgJHtkYXRlQXJyYXlbMF19ICR7bm9ybWFsaXplZFRpbWV9YDtcclxuICBjb25zdCBzdHJpbmdBcnJheSA9IG5ld1N0cmluZy5zcGxpdCgnICcpO1xyXG4gIHJldHVybiBzdHJpbmdBcnJheTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldDVEYXlGb3JlY2FzdCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9yY2FzdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0TG9uWzBdfSZsb249JHtsYXRMb25bMV19JmFwcGlkPTJiNDVkMjA3YmU2NDNlYWFjMzUzMzk3ZGJiNWVjY2M3JnVuaXRzPW1ldHJpY2AsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9yY2FzdERhdGEgPSBhd2FpdCBmb3JjYXN0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgbWV0cmljRm9yZWNhc3RPYmplY3QgPSBmb3JjYXN0RGF0YTtcclxuICAgIGNvbnNvbGUubG9nKG1ldHJpY0ZvcmVjYXN0T2JqZWN0KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZvcmNhc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdExvblswXX0mbG9uPSR7bGF0TG9uWzFdfSZhcHBpZD0yYjQ1ZDIwN2JlNjQzZWFhYzM1MzM5N2RiYjVlY2NjNyZ1bml0cz1pbXBlcmlhbGAsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9yY2FzdERhdGEgPSBhd2FpdCBmb3JjYXN0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgaW1wZXJpYWxGb3JlY2FzdE9iamVjdCA9IGZvcmNhc3REYXRhO1xyXG4gICAgY29uc29sZS5sb2coaW1wZXJpYWxGb3JlY2FzdE9iamVjdCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJpcmRzRXllKCk7XHJcbiAgY3JlYXRlU3RhdHMoKTtcclxuICBjcmVhdGVXZWVrKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZm9ybWF0RGF0ZVRpbWUsXHJcbiAgZ2V0NURheUZvcmVjYXN0LFxyXG4gIG1ldHJpY0ZvcmVjYXN0T2JqZWN0LFxyXG4gIGltcGVyaWFsRm9yZWNhc3RPYmplY3QsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi4vZ3JpZC9jcmVhdGVHcmlkJztcclxuaW1wb3J0ICcuLi9uYXYvbmF2Q29udGVudCc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==