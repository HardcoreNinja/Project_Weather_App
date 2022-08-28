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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../resources/images/preSearch.jpg */ "./src/resources/images/preSearch.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"Lato\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}\r\n\r\n.material-symbols-outlined {\r\n    font-family: 'Material Symbols Outlined';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 50px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n}\r\n\r\n#bgOverlay{\r\n    position: flex;\r\n    background: rgba(0, 0, 0, .7);\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n}\r\n\r\n:root {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") ;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n::placeholder {\r\n    color: rgb(0, 145, 200);\r\n    opacity: 1;\r\n    font-weight: bolder;\r\n}\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: \"Lato\";\r\n    color: white;\r\n}\r\n\r\nh1{\r\n    font-size: 25px;\r\n}\r\n\r\nbutton,\r\nbutton>span {\r\n    color: white;\r\n    transition: .75s;\r\n}\r\n\r\nbutton:hover>span {\r\n    color: rgb(0, 145, 200);\r\n    transform: scale(1.1);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr 1fr;\r\n    grid-template-rows: 1fr 2fr 2fr;\r\n    grid-template-areas:\r\n        \"nav nav nav\"\r\n        \"birdsEye gap stats\"\r\n        \"week week week\"\r\n    ;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n    max-width: 100vw;\r\n    max-width: 100vh;\r\n}\r\n\r\n#nav {\r\n    grid-area: nav;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 20px;\r\n}\r\n\r\n#logo {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 10px;\r\n    font-size: 30px;\r\n    transition: .75s;\r\n}\r\n\r\n#logo>span {\r\n    font-size: 35px;\r\n}\r\n\r\n#logo:hover,\r\n#logo:hover>span {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    width: 25px;\r\n    height: 25px;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n}\r\n\r\n.searchForm>input {\r\n    border: 1px solid black;\r\n    transition: .75s;\r\n}\r\n\r\n.searchForm>input:hover,\r\n.searchForm>input:focus {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.searchForm>input,\r\n.searchForm>input:focus {\r\n    background: transparent;\r\n    border-top-style: hidden;\r\n    border-right-style: hidden;\r\n    border-left-style: hidden;\r\n    outline: none;\r\n}\r\n\r\n.formatWarning{\r\n    display: none;\r\n    color: rgb(170, 60, 61);\r\n}\r\n\r\n.displayMetricImperial {\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n    transition: .75s;\r\n    font-weight: bolder;\r\n}\r\n\r\n.displayMetricImperial:hover {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n    font-weight: bolder;\r\n}\r\n\r\n#birdsEye {\r\n    grid-area: birdsEye;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.birdsEyeWidgetContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.weatherIcon {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}\r\n\r\n#gap {\r\n    grid-area: gap;\r\n}\r\n\r\n#stats {\r\n    grid-area: stats;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.statsWidgetContainer{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.statsItem {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.statsText {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#week {\r\n    grid-area: week;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap:20px;\r\n    padding: 20px;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n.weekWidgetContainer{\r\n    display: flex;\r\n    max-width: 90vw;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    padding: 20px;\r\n    gap: 20px;\r\n    overflow: auto;\r\n}\r\n\r\n.weekItem{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    min-width: 200px;\r\n    min-height: 200px;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"Lato\";\r\n    src: url(\"../Resources/Lato/Lato-Light.ttf\");\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}\r\n\r\n.material-symbols-outlined {\r\n    font-family: 'Material Symbols Outlined';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 50px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n}\r\n\r\n#bgOverlay{\r\n    position: flex;\r\n    background: rgba(0, 0, 0, .7);\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n}\r\n\r\n:root {\r\n    background-image: url('../resources/images/preSearch.jpg') ;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n::placeholder {\r\n    color: rgb(0, 145, 200);\r\n    opacity: 1;\r\n    font-weight: bolder;\r\n}\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: \"Lato\";\r\n    color: white;\r\n}\r\n\r\nh1{\r\n    font-size: 25px;\r\n}\r\n\r\nbutton,\r\nbutton>span {\r\n    color: white;\r\n    transition: .75s;\r\n}\r\n\r\nbutton:hover>span {\r\n    color: rgb(0, 145, 200);\r\n    transform: scale(1.1);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr 1fr;\r\n    grid-template-rows: 1fr 2fr 2fr;\r\n    grid-template-areas:\r\n        \"nav nav nav\"\r\n        \"birdsEye gap stats\"\r\n        \"week week week\"\r\n    ;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n    max-width: 100vw;\r\n    max-width: 100vh;\r\n}\r\n\r\n#nav {\r\n    grid-area: nav;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 20px;\r\n}\r\n\r\n#logo {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 10px;\r\n    font-size: 30px;\r\n    transition: .75s;\r\n}\r\n\r\n#logo>span {\r\n    font-size: 35px;\r\n}\r\n\r\n#logo:hover,\r\n#logo:hover>span {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    width: 25px;\r\n    height: 25px;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n}\r\n\r\n.searchForm>input {\r\n    border: 1px solid black;\r\n    transition: .75s;\r\n}\r\n\r\n.searchForm>input:hover,\r\n.searchForm>input:focus {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.searchForm>input,\r\n.searchForm>input:focus {\r\n    background: transparent;\r\n    border-top-style: hidden;\r\n    border-right-style: hidden;\r\n    border-left-style: hidden;\r\n    outline: none;\r\n}\r\n\r\n.formatWarning{\r\n    display: none;\r\n    color: rgb(170, 60, 61);\r\n}\r\n\r\n.displayMetricImperial {\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n    transition: .75s;\r\n    font-weight: bolder;\r\n}\r\n\r\n.displayMetricImperial:hover {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n    font-weight: bolder;\r\n}\r\n\r\n#birdsEye {\r\n    grid-area: birdsEye;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.birdsEyeWidgetContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.weatherIcon {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}\r\n\r\n#gap {\r\n    grid-area: gap;\r\n}\r\n\r\n#stats {\r\n    grid-area: stats;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.statsWidgetContainer{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.statsItem {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.statsText {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#week {\r\n    grid-area: week;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap:20px;\r\n    padding: 20px;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n.weekWidgetContainer{\r\n    display: flex;\r\n    max-width: 90vw;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    padding: 20px;\r\n    gap: 20px;\r\n    overflow: auto;\r\n}\r\n\r\n.weekItem{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    min-width: 200px;\r\n    min-height: 200px;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _globalCode_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalCode/api */ "./src/globalCode/api.js");
/* harmony import */ var _globalCode_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalCode/elements */ "./src/globalCode/elements.js");
/* harmony import */ var _globalCode_getters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalCode/getters */ "./src/globalCode/getters.js");
/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle








const createWidget = () => {
  const container = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_3__.createDiv)('birdsEyeWidgetContainer');
  if (_nav_navLogic__WEBPACK_IMPORTED_MODULE_1__.metricImperialBool) {
    const mainWeatherDescription = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_3__.createH1)((0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getMetricMainWeatherDescription)(), 'beMainWeatherDescription');
    const name = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_3__.createP)((0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getMetricName)(), 'beName');
    const date = _globalCode_api__WEBPACK_IMPORTED_MODULE_2__.dateTimeString;
    const temp = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_3__.createH1)(`${(0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getMetricTemp)()} °C`, 'beTemp');
    const weatherSymbol = (0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getMetricWeatherSymbol)();
    container.append(mainWeatherDescription, name, date, temp, weatherSymbol);
  } else if (!_nav_navLogic__WEBPACK_IMPORTED_MODULE_1__.metricImperialBool) {
    const mainWeatherDescription = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_3__.createH1)((0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getImperialMainWeatherDescription)(), 'beMainWeatherDescription');
    const name = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_3__.createP)((0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getImperialName)(), 'beName');
    const date = _globalCode_api__WEBPACK_IMPORTED_MODULE_2__.dateTimeString;
    const temp = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_3__.createH1)(`${(0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getImperialTemp)()} °F`, 'beTemp');
    const weatherSymbol = (0,_birdsEyeLogic__WEBPACK_IMPORTED_MODULE_0__.getImperialWeatherSymbol)();
    container.append(mainWeatherDescription, name, date, temp, weatherSymbol);
  }

  return container;
};

function clearBirdsEye() {
  while ((0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_4__.getBirdsEye)().firstChild) { (0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_4__.getBirdsEye)().removeChild((0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_4__.getBirdsEye)().firstChild); }
}

function createBirdsEye() {
  clearBirdsEye();
  (0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_4__.getBirdsEye)().append(createWidget());
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
/* harmony export */   "getImperialMainWeatherDescription": () => (/* binding */ getImperialMainWeatherDescription),
/* harmony export */   "getImperialName": () => (/* binding */ getImperialName),
/* harmony export */   "getImperialTemp": () => (/* binding */ getImperialTemp),
/* harmony export */   "getImperialWeatherSymbol": () => (/* binding */ getImperialWeatherSymbol),
/* harmony export */   "getMetricMainWeatherDescription": () => (/* binding */ getMetricMainWeatherDescription),
/* harmony export */   "getMetricName": () => (/* binding */ getMetricName),
/* harmony export */   "getMetricTemp": () => (/* binding */ getMetricTemp),
/* harmony export */   "getMetricWeatherSymbol": () => (/* binding */ getMetricWeatherSymbol)
/* harmony export */ });
/* harmony import */ var _globalCode_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalCode/api */ "./src/globalCode/api.js");
/* harmony import */ var _globalCode_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalCode/elements */ "./src/globalCode/elements.js");
/* harmony import */ var _globalCode_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalCode/logic */ "./src/globalCode/logic.js");
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle




const getMetricMainWeatherDescription = () => (0,_globalCode_logic__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)(
  _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.weather[0].description,
);
const getImperialMainWeatherDescription = () => (0,_globalCode_logic__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)(
  _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.weather[0].description,
);

const getMetricName = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.name;
const getImperialName = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.name;

const getMetricTemp = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.temp;
const getImperialTemp = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.temp;

const getMetricWeatherSymbol = () => {
  const div = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)('weatherSymbol');
  div.append((0,_globalCode_logic__WEBPACK_IMPORTED_MODULE_2__.findSymbol)(`${_globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.weather[0].icon}`));
  return div;
};
const getImperialWeatherSymbol = () => {
  const div = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)('weatherSymbol');
  div.append((0,_globalCode_logic__WEBPACK_IMPORTED_MODULE_2__.findSymbol)(`${_globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.weather[0].icon}`));
  return div;
};




/***/ }),

/***/ "./src/globalCode/api.js":
/*!*******************************!*\
  !*** ./src/globalCode/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callAPI": () => (/* binding */ callAPI),
/* harmony export */   "dateTimeString": () => (/* binding */ dateTimeString),
/* harmony export */   "displayFormatWarning": () => (/* binding */ displayFormatWarning),
/* harmony export */   "imperialForecastObject": () => (/* binding */ imperialForecastObject),
/* harmony export */   "imperialWeatherObject": () => (/* binding */ imperialWeatherObject),
/* harmony export */   "latLon": () => (/* binding */ latLon),
/* harmony export */   "metricForecastObject": () => (/* binding */ metricForecastObject),
/* harmony export */   "metricWeatherObject": () => (/* binding */ metricWeatherObject),
/* harmony export */   "setFormatWarning": () => (/* binding */ setFormatWarning)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/globalCode/logic.js");
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */


let displayFormatWarning = false;
let latLon = [];
let metricWeatherObject = {};
let imperialWeatherObject = {};
let dateTimeString = '';

let metricForecastObject = {};
let imperialForecastObject = {};

function setFormatWarning(bool) {
  displayFormatWarning = bool;
}

async function get5DayForecast() {
  try {
    const forcastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=metric`,
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
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=imperial`,
      { mode: 'cors' },
    );
    const forcastData = await forcastResponse.json();
    imperialForecastObject = forcastData;
    console.log(imperialForecastObject);
  } catch (error) {
    console.log(error);
  }

  (0,_logic__WEBPACK_IMPORTED_MODULE_0__.draw)();
}

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
}

async function getGeoRegion() {
  try {
    const searchBar = document.querySelector('.searchBar');
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=5&appid=2b45d207be643eaac353397dbb5eccc7`,
      { mode: 'cors' },
    );
    const geoData = await response.json();
    latLon = [geoData[0].lat, geoData[0].lon];
  } catch (error) {
    console.log(`getGeoRegion() Error: ${error}`);
    const formatWarning = document.querySelector('.formatWarning');
    formatWarning.style.display = 'block';
    displayFormatWarning = true;
  }
}

async function callAPI() {
  await getGeoRegion();
  await getWeather();
  await getDateTime();
  await get5DayForecast();
}




/***/ }),

/***/ "./src/globalCode/elements.js":
/*!************************************!*\
  !*** ./src/globalCode/elements.js ***!
  \************************************/
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

/***/ "./src/globalCode/getters.js":
/*!***********************************!*\
  !*** ./src/globalCode/getters.js ***!
  \***********************************/
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

/***/ "./src/globalCode/logic.js":
/*!*********************************!*\
  !*** ./src/globalCode/logic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "draw": () => (/* binding */ draw),
/* harmony export */   "findSymbol": () => (/* binding */ findSymbol),
/* harmony export */   "redrawStats": () => (/* binding */ redrawStats)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/globalCode/elements.js");
/* harmony import */ var _birdsEye_birdsEyeContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../birdsEye/birdsEyeContent */ "./src/birdsEye/birdsEyeContent.js");
/* harmony import */ var _stats_statsContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stats/statsContent */ "./src/stats/statsContent.js");
/* harmony import */ var _week_weekContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../week/weekContent */ "./src/week/weekContent.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/globalCode/api.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media */ "./src/globalCode/media.js");
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */







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
  return (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createSymbol)(symbolName);
};

function changeBGImage() {
  const root = document.documentElement;
  root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.d01}')`;

  switch (`${_api__WEBPACK_IMPORTED_MODULE_4__.metricWeatherObject.weather[0].icon}`) {
    case '01d':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.d01}')`;
      break;
    case '01n':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.n01}')`;
      break;
    case '02d':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.d02}')`;
      break;
    case '02n':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.n02}')`;
      break;
    case '03d':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.d03}')`;
      break;
    case '03n':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.n03}')`;
      break;
    case '04d':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.d04}')`;
      break;
    case '04n':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.n04}')`;
      break;
    case '09d':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.d09}')`;
      break;
    case '09n':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.n09}')`;
      break;
    case '10d':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.d10}')`;
      break;
    case '10n':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.n10}')`;
      break;
    case '11d':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.d11}')`;
      break;
    case '11n':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.n11}')`;
      break;
    case '13d':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.d13}')`;
      break;
    case '13n':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.n13}')`;
      break;
    case '50d':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.d50}')`;
      break;
    case '50n':
      root.style.backgroundImage = `url('${_media__WEBPACK_IMPORTED_MODULE_5__.n50}')`;
      break;
    default:
      console.log('INVALID_SWITCH_ENTRY | function changeBGImage() | weekLogic.js');
  }
}

function hideFormatWarning() {
  if (_api__WEBPACK_IMPORTED_MODULE_4__.displayFormatWarning) {
    const formatWarning = document.querySelector('.formatWarning');
    formatWarning.style.display = 'none';
    (0,_api__WEBPACK_IMPORTED_MODULE_4__.setFormatWarning)(false);
    changeBGImage();
  } else if (!_api__WEBPACK_IMPORTED_MODULE_4__.displayFormatWarning) {
    changeBGImage();
  }
}

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

function draw() {
  (0,_birdsEye_birdsEyeContent__WEBPACK_IMPORTED_MODULE_1__.createBirdsEye)();
  (0,_stats_statsContent__WEBPACK_IMPORTED_MODULE_2__.createStats)();
  (0,_week_weekContent__WEBPACK_IMPORTED_MODULE_3__.createWeek)();
  hideFormatWarning();
}

function redrawStats() {
  (0,_birdsEye_birdsEyeContent__WEBPACK_IMPORTED_MODULE_1__.createBirdsEye)();
  (0,_stats_statsContent__WEBPACK_IMPORTED_MODULE_2__.createStats)();
  (0,_week_weekContent__WEBPACK_IMPORTED_MODULE_3__.createWeek)();
}




/***/ }),

/***/ "./src/globalCode/media.js":
/*!*********************************!*\
  !*** ./src/globalCode/media.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d01": () => (/* reexport default export from named module */ _resources_images_01d_jpg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "d02": () => (/* reexport default export from named module */ _resources_images_02d_jpg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "d03": () => (/* reexport default export from named module */ _resources_images_03d_jpg__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "d04": () => (/* reexport default export from named module */ _resources_images_04d_jpg__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "d09": () => (/* reexport default export from named module */ _resources_images_09d_jpg__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   "d10": () => (/* reexport default export from named module */ _resources_images_10d_jpg__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   "d11": () => (/* reexport default export from named module */ _resources_images_11d_jpg__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   "d13": () => (/* reexport default export from named module */ _resources_images_13d_jpg__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   "d50": () => (/* reexport default export from named module */ _resources_images_50d_jpg__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   "n01": () => (/* reexport default export from named module */ _resources_images_01n_jpg__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "n02": () => (/* reexport default export from named module */ _resources_images_02n_jpg__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "n03": () => (/* reexport default export from named module */ _resources_images_03n_jpg__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "n04": () => (/* reexport default export from named module */ _resources_images_04n_jpg__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "n09": () => (/* reexport default export from named module */ _resources_images_09n_jpg__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   "n10": () => (/* reexport default export from named module */ _resources_images_10n_jpg__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   "n11": () => (/* reexport default export from named module */ _resources_images_11n_jpg__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   "n13": () => (/* reexport default export from named module */ _resources_images_13n_jpg__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   "n50": () => (/* reexport default export from named module */ _resources_images_50n_jpg__WEBPACK_IMPORTED_MODULE_17__)
/* harmony export */ });
/* harmony import */ var _resources_images_01d_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/images/01d.jpg */ "./src/resources/images/01d.jpg");
/* harmony import */ var _resources_images_01n_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/images/01n.jpg */ "./src/resources/images/01n.jpg");
/* harmony import */ var _resources_images_02d_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/images/02d.jpg */ "./src/resources/images/02d.jpg");
/* harmony import */ var _resources_images_02n_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/images/02n.jpg */ "./src/resources/images/02n.jpg");
/* harmony import */ var _resources_images_03d_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/images/03d.jpg */ "./src/resources/images/03d.jpg");
/* harmony import */ var _resources_images_03n_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/images/03n.jpg */ "./src/resources/images/03n.jpg");
/* harmony import */ var _resources_images_04d_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resources/images/04d.jpg */ "./src/resources/images/04d.jpg");
/* harmony import */ var _resources_images_04n_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/images/04n.jpg */ "./src/resources/images/04n.jpg");
/* harmony import */ var _resources_images_09d_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resources/images/09d.jpg */ "./src/resources/images/09d.jpg");
/* harmony import */ var _resources_images_09n_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../resources/images/09n.jpg */ "./src/resources/images/09n.jpg");
/* harmony import */ var _resources_images_10d_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../resources/images/10d.jpg */ "./src/resources/images/10d.jpg");
/* harmony import */ var _resources_images_10n_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../resources/images/10n.jpg */ "./src/resources/images/10n.jpg");
/* harmony import */ var _resources_images_11d_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resources/images/11d.jpg */ "./src/resources/images/11d.jpg");
/* harmony import */ var _resources_images_11n_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../resources/images/11n.jpg */ "./src/resources/images/11n.jpg");
/* harmony import */ var _resources_images_13d_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../resources/images/13d.jpg */ "./src/resources/images/13d.jpg");
/* harmony import */ var _resources_images_13n_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../resources/images/13n.jpg */ "./src/resources/images/13n.jpg");
/* harmony import */ var _resources_images_50d_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../resources/images/50d.jpg */ "./src/resources/images/50d.jpg");
/* harmony import */ var _resources_images_50n_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../resources/images/50n.jpg */ "./src/resources/images/50n.jpg");






















/***/ }),

/***/ "./src/grid/createGrid.js":
/*!********************************!*\
  !*** ./src/grid/createGrid.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalCode_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalCode/getters */ "./src/globalCode/getters.js");


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
  return week;
};

function createGrid() {
  (0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_0__.getContent)().append(
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
/* harmony import */ var _globalCode_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalCode/elements */ "./src/globalCode/elements.js");
/* harmony import */ var _globalCode_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalCode/getters */ "./src/globalCode/getters.js");
/* harmony import */ var _navLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navLogic */ "./src/nav/navLogic.js");
/* harmony import */ var _globalCode_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalCode/api */ "./src/globalCode/api.js");





const createLogo = () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'logo');
  container.append((0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_0__.createIcon)('storm'), 'iWeather');
  return container;
};

const createSearchBar = () => {
  const form = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_0__.createForm)('searchForm');
  const button = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)('search', '', 'button', 'submitButton');
  button.addEventListener('mousedown', _globalCode_api__WEBPACK_IMPORTED_MODULE_3__.callAPI);
  form.append((0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', true, 'Search location...', 'searchBar'), button);

  return form;
};

const createFormatWarning = () => {
  const text = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_0__.createP)('Please format your search the following ways: <br> {Santiago(city), CL(country code)}, {Jacksonville(city), Florida(state)}, {Indianapolis{city}}, {China (country)}', 'formatWarning');
  return text;
};

const createMetricImperialButton = () => {
  const button = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)('', 'Display °C', 'button', 'displayMetricImperial');
  button.addEventListener('mousedown', _navLogic__WEBPACK_IMPORTED_MODULE_2__.toggleMetricImperialBool);
  return button;
};

function createNav() {
  (0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_1__.getNav)().append(
    createLogo(),
    createSearchBar(),
    createFormatWarning(),
    createMetricImperialButton(),
  );
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
/* harmony export */   "metricImperialBool": () => (/* binding */ metricImperialBool),
/* harmony export */   "toggleMetricImperialBool": () => (/* binding */ toggleMetricImperialBool)
/* harmony export */ });
/* harmony import */ var _globalCode_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalCode/logic */ "./src/globalCode/logic.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */



let metricImperialBool = true;

function toggleMetricImperialBool() {
  metricImperialBool = !metricImperialBool;
  const button = document.querySelector('.displayMetricImperial');

  if (metricImperialBool) { button.innerHTML = 'Display °C'; } else {
    button.innerHTML = 'Display °F';
  }
  (0,_globalCode_logic__WEBPACK_IMPORTED_MODULE_0__.redrawStats)();
}




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
/* harmony import */ var _globalCode_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalCode/getters */ "./src/globalCode/getters.js");
/* harmony import */ var _statsLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statsLogic */ "./src/stats/statsLogic.js");
/* harmony import */ var _globalCode_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalCode/elements */ "./src/globalCode/elements.js");
/* harmony import */ var _nav_navLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/navLogic */ "./src/nav/navLogic.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */





// eslint-disable-next-line import/no-cycle


const createFeelsLikeContainer = (metricImperial) => {
  const feelsLikeContainer = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsItem');
  const feelsLikeText = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsText');
  const feelsLikeP = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createP)('Feels Like');
  let feelsLikeH1;
  if (metricImperial) { feelsLikeH1 = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getMetricFeelsLike)()} °C`); } else if (!metricImperial) { feelsLikeH1 = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getImperialFeelsLike)()} °F`); }
  feelsLikeText.append(feelsLikeP, feelsLikeH1);
  feelsLikeContainer.append((0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createSymbol)('thermostat'), feelsLikeText);
  return feelsLikeContainer;
};

const createHumidityContainer = (metricImperial) => {
  const humidityContainer = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsItem');
  const humidityText = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsText');
  const humidityP = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createP)('Humidity');
  let humidityH1;
  if (metricImperial) { humidityH1 = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getMetricHumidity)()} %`); } else if (!metricImperial) { humidityH1 = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getImperialHumidity)()} %`); }
  humidityText.append(humidityP, humidityH1);
  humidityContainer.append((0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createSymbol)('humidity_mid'), humidityText);
  return humidityContainer;
};

const createWindSpeedContainer = (metricImperial) => {
  const windSpeedContainer = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsItem');
  const windSpeedText = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsText');
  const windSpeedP = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createP)('Wind Speed');
  let windSpeedH1;
  if (metricImperial) { windSpeedH1 = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getMetricWindSpeed)()} km/h`); } else if (!metricImperial) { windSpeedH1 = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${(0,_statsLogic__WEBPACK_IMPORTED_MODULE_1__.getImperialWindSpeed)()} mph`); }
  windSpeedText.append(windSpeedP, windSpeedH1);
  windSpeedContainer.append((0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createSymbol)('air'), windSpeedText);
  return windSpeedContainer;
};

const createWidget = () => {
  const container = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('statsWidgetContainer');
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
  while ((0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_0__.getStats)().firstChild) { (0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_0__.getStats)().removeChild((0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_0__.getStats)().firstChild); }
}

function createStats() {
  clearStats();
  (0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_0__.getStats)().append(createWidget());
}




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
/* harmony import */ var _globalCode_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalCode/api */ "./src/globalCode/api.js");
// eslint-disable-next-line import/no-cycle


const getMetricFeelsLike = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.feels_like;

const getImperialFeelsLike = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.feels_like;

const getMetricHumidity = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.humidity;

const getImperialHumidity = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.humidity;

const getMetricPressure = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.pressure;

const getImperialPressure = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.pressure;

const getMetricTempMax = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.temp_max;

const getImperialTempMax = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.temp_max;

const getMetricTempMin = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.main.temp_min;

const getImperialTempMin = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.main.temp_min;

const getMetricWindSpeed = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.wind.speed;

const getImperialWindSpeed = () => _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialWeatherObject.wind.speed;




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
/* harmony import */ var _globalCode_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalCode/api */ "./src/globalCode/api.js");
/* harmony import */ var _globalCode_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalCode/getters */ "./src/globalCode/getters.js");
/* harmony import */ var _globalCode_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalCode/elements */ "./src/globalCode/elements.js");
/* harmony import */ var _nav_navLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/navLogic */ "./src/nav/navLogic.js");
/* harmony import */ var _globalCode_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalCode/logic */ "./src/globalCode/logic.js");
/* harmony import */ var _weekLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekLogic */ "./src/week/weekLogic.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */







const createMetricWeekItems = (weekWidgetContainer) => {
  for (let i = 0; i < _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricForecastObject.list.length; i += 1) {
    const weekItemContainer = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('weekItem');
    const timeDateArray = (0,_weekLogic__WEBPACK_IMPORTED_MODULE_5__.formatDateTime)(i);
    const day = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createP)(`${timeDateArray[0]}`, '');
    const time = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createP)(`${timeDateArray[1]} ${timeDateArray[2]}`, '');
    const temp = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${_globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricForecastObject.list[i].main.temp} °C`, '');
    const description = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createP)(
      (0,_globalCode_logic__WEBPACK_IMPORTED_MODULE_4__.capitalizeFirstLetter)(
        _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricForecastObject.list[i].weather[0].description,
      ),
    );
    weekItemContainer.append(
      day,
      time,
      temp,
      (0,_globalCode_logic__WEBPACK_IMPORTED_MODULE_4__.findSymbol)(_globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricForecastObject.list[i].weather[0].icon),
      description,
    );
    weekWidgetContainer.append(weekItemContainer);
  }
};

const createImperialWeekItems = (weekWidgetContainer) => {
  for (let i = 0; i < _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialForecastObject.list.length; i += 1) {
    const weekItemContainer = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('weekItem');
    const timeDateArray = (0,_weekLogic__WEBPACK_IMPORTED_MODULE_5__.formatDateTime)(i);
    const day = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createP)(`${timeDateArray[0]}`, '');
    const time = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createP)(`${timeDateArray[1]} ${timeDateArray[2]}`, '');
    const temp = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createH1)(`${_globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialForecastObject.list[i].main.temp} °F`, '');
    const description = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createP)(
      (0,_globalCode_logic__WEBPACK_IMPORTED_MODULE_4__.capitalizeFirstLetter)(
        _globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialForecastObject.list[i].weather[0].description,
      ),
    );
    weekItemContainer.append(
      day,
      time,
      temp,
      (0,_globalCode_logic__WEBPACK_IMPORTED_MODULE_4__.findSymbol)(_globalCode_api__WEBPACK_IMPORTED_MODULE_0__.imperialForecastObject.list[i].weather[0].icon),
      description,
    );

    weekWidgetContainer.append(weekItemContainer);
  }
};

const createWidget = () => {
  const weekWidgetContainer = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createDiv)('weekWidgetContainer');
  if (_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool) {
    createMetricWeekItems(weekWidgetContainer);
  } else if (!_nav_navLogic__WEBPACK_IMPORTED_MODULE_3__.metricImperialBool) {
    createImperialWeekItems(weekWidgetContainer);
  }

  return weekWidgetContainer;
};

function clearWeek() {
  while ((0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_1__.getWeek)().firstChild) { (0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_1__.getWeek)().removeChild((0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_1__.getWeek)().firstChild); }
}

const createTitle = () => {
  const title = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_2__.createH1)('5-Day Forecast', '');

  return title;
};

function createWeek() {
  clearWeek();
  (0,_globalCode_getters__WEBPACK_IMPORTED_MODULE_1__.getWeek)().append(createTitle(), createWidget());
}




/***/ }),

/***/ "./src/week/weekLogic.js":
/*!*******************************!*\
  !*** ./src/week/weekLogic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDateTime": () => (/* binding */ formatDateTime)
/* harmony export */ });
/* harmony import */ var _globalCode_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalCode/api */ "./src/globalCode/api.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */


const formatDateTime = (index) => {
  const timeOptions = {
    hour12: 'true',
    timeStyle: 'short',
  };

  const dateOptions = {
    weekday: 'long',
  };

  const date = new Date(_globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricForecastObject.list[index].dt_txt);
  const normalizedDate = date.toLocaleTimeString(`en-${_globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricForecastObject.city.country}`, dateOptions);
  const dateArray = normalizedDate.split(' ');
  let normalizedTime = date.toLocaleTimeString(`en-${_globalCode_api__WEBPACK_IMPORTED_MODULE_0__.metricForecastObject.city.country}`, timeOptions);

  if (normalizedTime.charAt(0) === '0' && normalizedTime.charAt(1) === '0') {
    const slicedString = normalizedTime.slice(2, 8);
    normalizedTime = `12${slicedString}`;
  }

  const newString = `${dateArray[0]} ${normalizedTime}`;
  const stringArray = newString.split(' ');
  return stringArray;
};




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

/***/ }),

/***/ "./src/resources/images/01n.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/01n.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9436568e6de6e00dac43.jpg";

/***/ }),

/***/ "./src/resources/images/02d.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/02d.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aba012922017c72f23ca.jpg";

/***/ }),

/***/ "./src/resources/images/02n.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/02n.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfb2e25a7f86cbfc124a.jpg";

/***/ }),

/***/ "./src/resources/images/03d.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/03d.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52d20d61645efff0800b.jpg";

/***/ }),

/***/ "./src/resources/images/03n.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/03n.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28bc43520c4550b3f2cb.jpg";

/***/ }),

/***/ "./src/resources/images/04d.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/04d.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fec3339aad8137c1234a.jpg";

/***/ }),

/***/ "./src/resources/images/04n.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/04n.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0807bf704e0229d37b3.jpg";

/***/ }),

/***/ "./src/resources/images/09d.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/09d.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "430e1704c3df2bce3de2.jpg";

/***/ }),

/***/ "./src/resources/images/09n.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/09n.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5870f56c86c6821f0a2.jpg";

/***/ }),

/***/ "./src/resources/images/10d.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/10d.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e42b9f0bfbf8e133c6e9.jpg";

/***/ }),

/***/ "./src/resources/images/10n.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/10n.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cdb45ea1a2dc35d7d8a.jpg";

/***/ }),

/***/ "./src/resources/images/11d.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/11d.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd50b1ec64431ba93d1b.jpg";

/***/ }),

/***/ "./src/resources/images/11n.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/11n.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "453cb3826e7ca3483165.jpg";

/***/ }),

/***/ "./src/resources/images/13d.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/13d.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6a0226fff9578901401.jpg";

/***/ }),

/***/ "./src/resources/images/13n.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/13n.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b4238587de7072fc7d7.jpg";

/***/ }),

/***/ "./src/resources/images/50d.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/50d.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd7636b002b43e285633.jpg";

/***/ }),

/***/ "./src/resources/images/50n.jpg":
/*!**************************************!*\
  !*** ./src/resources/images/50n.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fcd5cdfad4b8e011238.jpg";

/***/ }),

/***/ "./src/resources/images/preSearch.jpg":
/*!********************************************!*\
  !*** ./src/resources/images/preSearch.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "394681a4564d771bd4c0.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLHFCQUFxQixXQUFXLFVBQVUsb0JBQW9CLHVCQUF1QixPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNBO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvYmlyZHNFeWUvYmlyZHNFeWVDb250ZW50LmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvYmlyZHNFeWUvYmlyZHNFeWVMb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2dsb2JhbENvZGUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvZ2xvYmFsQ29kZS9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2dsb2JhbENvZGUvZ2V0dGVycy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2dsb2JhbENvZGUvbG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9nbG9iYWxDb2RlL21lZGlhLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvZ3JpZC9jcmVhdGVHcmlkLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvbmF2L25hdkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9uYXYvbmF2TG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9zdGF0cy9zdGF0c0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9zdGF0cy9zdGF0c0xvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvd2Vlay93ZWVrQ29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3dlZWsvd2Vla0xvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vUmVzb3VyY2VzL0xhdG8vTGF0by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9yZXNvdXJjZXMvaW1hZ2VzL3ByZVNlYXJjaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLWljb25zIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cXHJcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgSUUuICovXFxyXFxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgU3ltYm9scyBPdXRsaW5lZCc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxufVxcclxcblxcclxcbiNiZ092ZXJsYXl7XFxyXFxuICAgIHBvc2l0aW9uOiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC43KTtcXHJcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmgxe1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5idXR0b24+c3BhbiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyPnNwYW4ge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwibmF2IG5hdiBuYXZcXFwiXFxyXFxuICAgICAgICBcXFwiYmlyZHNFeWUgZ2FwIHN0YXRzXFxcIlxcclxcbiAgICAgICAgXFxcIndlZWsgd2VlayB3ZWVrXFxcIlxcclxcbiAgICA7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbz5zcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbzpob3ZlcixcXHJcXG4jbG9nbzpob3Zlcj5zcGFuIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQ6aG92ZXIsXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQ6Zm9jdXMge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3JtPmlucHV0LFxcclxcbi5zZWFyY2hGb3JtPmlucHV0OmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtYXRXYXJuaW5ne1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBjb2xvcjogcmdiKDE3MCwgNjAsIDYxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlNZXRyaWNJbXBlcmlhbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheU1ldHJpY0ltcGVyaWFsOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2JpcmRzRXllIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBiaXJkc0V5ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlyZHNFeWVXaWRnZXRDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlckljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2dhcCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZ2FwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHMge1xcclxcbiAgICBncmlkLWFyZWE6IHN0YXRzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zdGF0c1dpZGdldENvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRzSXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHNUZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiN3ZWVrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB3ZWVrO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgZ2FwOjIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla1dpZGdldENvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndlZWtJdGVte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjOztJQUVkLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLGtDQUFrQzs7SUFFbEMseUJBQXlCO0lBQ3pCLGtDQUFrQzs7SUFFbEMsb0JBQW9CO0lBQ3BCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsVUFBVSxFQUFFLGVBQWU7SUFDM0IsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0FBQ2xDOztBQUVBO0lBQ0ksMERBQTJEO0lBQzNELDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0I7Ozs7SUFJQTtJQUNBLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsb0NBQW9DO0lBQ3BDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsU0FBUztJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL1Jlc291cmNlcy9MYXRvL0xhdG8tTGlnaHQudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1pY29ucyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcblxcclxcbiAgICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxyXFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcclxcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcclxcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIFN5bWJvbHMgT3V0bGluZWQnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcbn1cXHJcXG5cXHJcXG4jYmdPdmVybGF5e1xcclxcbiAgICBwb3NpdGlvbjogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNyk7XFxyXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9yZXNvdXJjZXMvaW1hZ2VzL3ByZVNlYXJjaC5qcGcnKSA7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oMXtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuYnV0dG9uPnNwYW4ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3Zlcj5zcGFuIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgICAgXFxcIm5hdiBuYXYgbmF2XFxcIlxcclxcbiAgICAgICAgXFxcImJpcmRzRXllIGdhcCBzdGF0c1xcXCJcXHJcXG4gICAgICAgIFxcXCJ3ZWVrIHdlZWsgd2Vla1xcXCJcXHJcXG4gICAgO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28+c3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ286aG92ZXIsXFxyXFxuI2xvZ286aG92ZXI+c3BhbiB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3JtPmlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3JtPmlucHV0OmhvdmVyLFxcclxcbi5zZWFyY2hGb3JtPmlucHV0OmZvY3VzIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybT5pbnB1dCxcXHJcXG4uc2VhcmNoRm9ybT5pbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xcclxcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybWF0V2FybmluZ3tcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgY29sb3I6IHJnYigxNzAsIDYwLCA2MSk7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5TWV0cmljSW1wZXJpYWwge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlNZXRyaWNJbXBlcmlhbDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbiNiaXJkc0V5ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogYmlyZHNFeWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpcmRzRXllV2lkZ2V0Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJJY29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNnYXAge1xcclxcbiAgICBncmlkLWFyZWE6IGdhcDtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXRzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzdGF0cztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHNXaWRnZXRDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdGF0c0l0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRzVGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4jd2VlayB7XFxyXFxuICAgIGdyaWQtYXJlYTogd2VlaztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGdhcDoyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLndlZWtXaWRnZXRDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1heC13aWR0aDogOTB2dztcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi53ZWVrSXRlbXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHtcclxuICBnZXRNZXRyaWNNYWluV2VhdGhlckRlc2NyaXB0aW9uLFxyXG4gIGdldEltcGVyaWFsTWFpbldlYXRoZXJEZXNjcmlwdGlvbixcclxuICBnZXRNZXRyaWNOYW1lLFxyXG4gIGdldEltcGVyaWFsTmFtZSxcclxuICBnZXRNZXRyaWNUZW1wLFxyXG4gIGdldEltcGVyaWFsVGVtcCxcclxuICBnZXRNZXRyaWNXZWF0aGVyU3ltYm9sLFxyXG4gIGdldEltcGVyaWFsV2VhdGhlclN5bWJvbCxcclxufSBmcm9tICcuL2JpcmRzRXllTG9naWMnO1xyXG5cclxuaW1wb3J0IHsgbWV0cmljSW1wZXJpYWxCb29sIH0gZnJvbSAnLi4vbmF2L25hdkxvZ2ljJztcclxuaW1wb3J0IHsgZGF0ZVRpbWVTdHJpbmcgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2FwaSc7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVEaXYsIGNyZWF0ZUgxLCBjcmVhdGVQIH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9lbGVtZW50cyc7XHJcbmltcG9ydCB7IGdldEJpcmRzRXllIH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9nZXR0ZXJzJztcclxuXHJcbmNvbnN0IGNyZWF0ZVdpZGdldCA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoJ2JpcmRzRXllV2lkZ2V0Q29udGFpbmVyJyk7XHJcbiAgaWYgKG1ldHJpY0ltcGVyaWFsQm9vbCkge1xyXG4gICAgY29uc3QgbWFpbldlYXRoZXJEZXNjcmlwdGlvbiA9IGNyZWF0ZUgxKGdldE1ldHJpY01haW5XZWF0aGVyRGVzY3JpcHRpb24oKSwgJ2JlTWFpbldlYXRoZXJEZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgbmFtZSA9IGNyZWF0ZVAoZ2V0TWV0cmljTmFtZSgpLCAnYmVOYW1lJyk7XHJcbiAgICBjb25zdCBkYXRlID0gZGF0ZVRpbWVTdHJpbmc7XHJcbiAgICBjb25zdCB0ZW1wID0gY3JlYXRlSDEoYCR7Z2V0TWV0cmljVGVtcCgpfSDCsENgLCAnYmVUZW1wJyk7XHJcbiAgICBjb25zdCB3ZWF0aGVyU3ltYm9sID0gZ2V0TWV0cmljV2VhdGhlclN5bWJvbCgpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChtYWluV2VhdGhlckRlc2NyaXB0aW9uLCBuYW1lLCBkYXRlLCB0ZW1wLCB3ZWF0aGVyU3ltYm9sKTtcclxuICB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbEJvb2wpIHtcclxuICAgIGNvbnN0IG1haW5XZWF0aGVyRGVzY3JpcHRpb24gPSBjcmVhdGVIMShnZXRJbXBlcmlhbE1haW5XZWF0aGVyRGVzY3JpcHRpb24oKSwgJ2JlTWFpbldlYXRoZXJEZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgbmFtZSA9IGNyZWF0ZVAoZ2V0SW1wZXJpYWxOYW1lKCksICdiZU5hbWUnKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkYXRlVGltZVN0cmluZztcclxuICAgIGNvbnN0IHRlbXAgPSBjcmVhdGVIMShgJHtnZXRJbXBlcmlhbFRlbXAoKX0gwrBGYCwgJ2JlVGVtcCcpO1xyXG4gICAgY29uc3Qgd2VhdGhlclN5bWJvbCA9IGdldEltcGVyaWFsV2VhdGhlclN5bWJvbCgpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChtYWluV2VhdGhlckRlc2NyaXB0aW9uLCBuYW1lLCBkYXRlLCB0ZW1wLCB3ZWF0aGVyU3ltYm9sKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGVhckJpcmRzRXllKCkge1xyXG4gIHdoaWxlIChnZXRCaXJkc0V5ZSgpLmZpcnN0Q2hpbGQpIHsgZ2V0QmlyZHNFeWUoKS5yZW1vdmVDaGlsZChnZXRCaXJkc0V5ZSgpLmZpcnN0Q2hpbGQpOyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJpcmRzRXllKCkge1xyXG4gIGNsZWFyQmlyZHNFeWUoKTtcclxuICBnZXRCaXJkc0V5ZSgpLmFwcGVuZChjcmVhdGVXaWRnZXQoKSk7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCB7IGNyZWF0ZUJpcmRzRXllIH07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IG1ldHJpY1dlYXRoZXJPYmplY3QsIGltcGVyaWFsV2VhdGhlck9iamVjdCB9IGZyb20gJy4uL2dsb2JhbENvZGUvYXBpJztcclxuaW1wb3J0IHsgY3JlYXRlRGl2IH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9lbGVtZW50cyc7XHJcbmltcG9ydCB7IGZpbmRTeW1ib2wsIGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4uL2dsb2JhbENvZGUvbG9naWMnO1xyXG5cclxuY29uc3QgZ2V0TWV0cmljTWFpbldlYXRoZXJEZXNjcmlwdGlvbiA9ICgpID0+IGNhcGl0YWxpemVGaXJzdExldHRlcihcclxuICBtZXRyaWNXZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbik7XHJcbmNvbnN0IGdldEltcGVyaWFsTWFpbldlYXRoZXJEZXNjcmlwdGlvbiA9ICgpID0+IGNhcGl0YWxpemVGaXJzdExldHRlcihcclxuICBpbXBlcmlhbFdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuKTtcclxuXHJcbmNvbnN0IGdldE1ldHJpY05hbWUgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm5hbWU7XHJcbmNvbnN0IGdldEltcGVyaWFsTmFtZSA9ICgpID0+IGltcGVyaWFsV2VhdGhlck9iamVjdC5uYW1lO1xyXG5cclxuY29uc3QgZ2V0TWV0cmljVGVtcCA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3QubWFpbi50ZW1wO1xyXG5jb25zdCBnZXRJbXBlcmlhbFRlbXAgPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi50ZW1wO1xyXG5cclxuY29uc3QgZ2V0TWV0cmljV2VhdGhlclN5bWJvbCA9ICgpID0+IHtcclxuICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoJ3dlYXRoZXJTeW1ib2wnKTtcclxuICBkaXYuYXBwZW5kKGZpbmRTeW1ib2woYCR7bWV0cmljV2VhdGhlck9iamVjdC53ZWF0aGVyWzBdLmljb259YCkpO1xyXG4gIHJldHVybiBkaXY7XHJcbn07XHJcbmNvbnN0IGdldEltcGVyaWFsV2VhdGhlclN5bWJvbCA9ICgpID0+IHtcclxuICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoJ3dlYXRoZXJTeW1ib2wnKTtcclxuICBkaXYuYXBwZW5kKGZpbmRTeW1ib2woYCR7aW1wZXJpYWxXZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uaWNvbn1gKSk7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0TWV0cmljTWFpbldlYXRoZXJEZXNjcmlwdGlvbixcclxuICBnZXRJbXBlcmlhbE1haW5XZWF0aGVyRGVzY3JpcHRpb24sXHJcbiAgZ2V0TWV0cmljTmFtZSxcclxuICBnZXRJbXBlcmlhbE5hbWUsXHJcbiAgZ2V0TWV0cmljVGVtcCxcclxuICBnZXRJbXBlcmlhbFRlbXAsXHJcbiAgZ2V0TWV0cmljV2VhdGhlclN5bWJvbCxcclxuICBnZXRJbXBlcmlhbFdlYXRoZXJTeW1ib2wsXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0IHsgZHJhdyB9IGZyb20gJy4vbG9naWMnO1xyXG5cclxubGV0IGRpc3BsYXlGb3JtYXRXYXJuaW5nID0gZmFsc2U7XHJcbmxldCBsYXRMb24gPSBbXTtcclxubGV0IG1ldHJpY1dlYXRoZXJPYmplY3QgPSB7fTtcclxubGV0IGltcGVyaWFsV2VhdGhlck9iamVjdCA9IHt9O1xyXG5sZXQgZGF0ZVRpbWVTdHJpbmcgPSAnJztcclxuXHJcbmxldCBtZXRyaWNGb3JlY2FzdE9iamVjdCA9IHt9O1xyXG5sZXQgaW1wZXJpYWxGb3JlY2FzdE9iamVjdCA9IHt9O1xyXG5cclxuZnVuY3Rpb24gc2V0Rm9ybWF0V2FybmluZyhib29sKSB7XHJcbiAgZGlzcGxheUZvcm1hdFdhcm5pbmcgPSBib29sO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXQ1RGF5Rm9yZWNhc3QoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZvcmNhc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdExvblswXX0mbG9uPSR7bGF0TG9uWzFdfSZhcHBpZD0yYjQ1ZDIwN2JlNjQzZWFhYzM1MzM5N2RiYjVlY2NjNyZ1bml0cz1tZXRyaWNgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcmNhc3REYXRhID0gYXdhaXQgZm9yY2FzdFJlc3BvbnNlLmpzb24oKTtcclxuICAgIG1ldHJpY0ZvcmVjYXN0T2JqZWN0ID0gZm9yY2FzdERhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhtZXRyaWNGb3JlY2FzdE9iamVjdCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JjYXN0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXRMb25bMF19Jmxvbj0ke2xhdExvblsxXX0mYXBwaWQ9MmI0NWQyMDdiZTY0M2VhYWMzNTMzOTdkYmI1ZWNjYzcmdW5pdHM9aW1wZXJpYWxgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcmNhc3REYXRhID0gYXdhaXQgZm9yY2FzdFJlc3BvbnNlLmpzb24oKTtcclxuICAgIGltcGVyaWFsRm9yZWNhc3RPYmplY3QgPSBmb3JjYXN0RGF0YTtcclxuICAgIGNvbnNvbGUubG9nKGltcGVyaWFsRm9yZWNhc3RPYmplY3QpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG5cclxuICBkcmF3KCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGVUaW1lKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0aW1lUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly90aW1lem9uZS5hYnN0cmFjdGFwaS5jb20vdjEvY3VycmVudF90aW1lLz9hcGlfa2V5PWFjZTgwZmQ0YTkzNjQzOTZhZjg3NjEyMDdmYTMxYjMxJmxvY2F0aW9uPSR7bWV0cmljV2VhdGhlck9iamVjdC5jb29yZC5sYXR9LCAke21ldHJpY1dlYXRoZXJPYmplY3QuY29vcmQubG9ufWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG4gICAgY29uc3QgdGltZURhdGEgPSBhd2FpdCB0aW1lUmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVEYXRhLmRhdGV0aW1lKTtcclxuXHJcbiAgICBjb25zdCB0aW1lQXJyYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKGBlbi0ke21ldHJpY1dlYXRoZXJPYmplY3Quc3lzLmNvdW50cnl9YCwgeyBob3VyMTI6ICd0cnVlJyB9KS5zcGxpdCgnLCAnKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZERhdGUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKGBlbi0ke21ldHJpY1dlYXRoZXJPYmplY3Quc3lzLmNvdW50cnl9YCwgb3B0aW9ucyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCR7bm9ybWFsaXplZERhdGV9ICR7dGltZUFycmF5WzFdfWApO1xyXG5cclxuICAgIGRhdGVUaW1lU3RyaW5nID0gYCR7bm9ybWFsaXplZERhdGV9ICR7dGltZUFycmF5WzFdfWA7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG1ldHJpY1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRMb25bMF19Jmxvbj0ke2xhdExvblsxXX0mYXBwaWQ9MmI0NWQyMDdiZTY0M2VhYWMzNTMzOTdkYmI1ZWNjYzcmdW5pdHM9bWV0cmljYCxcclxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCBtZXRyaWNXZWF0aGVyRGF0YSA9IGF3YWl0IG1ldHJpY1Jlc3BvbnNlLmpzb24oKTtcclxuICAgIG1ldHJpY1dlYXRoZXJPYmplY3QgPSBtZXRyaWNXZWF0aGVyRGF0YTtcclxuICAgIGNvbnNvbGUubG9nKG1ldHJpY1dlYXRoZXJPYmplY3QpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgZ2V0V2VhdGhlcigpIE1ldHJpYyBFcnJvcjogJHtlcnJvcn1gKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBpbXBlcmlhbFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRMb25bMF19Jmxvbj0ke2xhdExvblsxXX0mYXBwaWQ9MmI0NWQyMDdiZTY0M2VhYWMzNTMzOTdkYmI1ZWNjYzcmdW5pdHM9aW1wZXJpYWxgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGltcGVyaWFsV2VhdGhlckRhdGEgPSBhd2FpdCBpbXBlcmlhbFJlc3BvbnNlLmpzb24oKTtcclxuICAgIGltcGVyaWFsV2VhdGhlck9iamVjdCA9IGltcGVyaWFsV2VhdGhlckRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhpbXBlcmlhbFdlYXRoZXJPYmplY3QpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgZ2V0V2VhdGhlcigpIEltcGVyaWFsIEVycm9yOiAke2Vycm9yfWApO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0R2VvUmVnaW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoQmFyJyk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtzZWFyY2hCYXIudmFsdWV9JmxpbWl0PTUmYXBwaWQ9MmI0NWQyMDdiZTY0M2VhYWMzNTMzOTdkYmI1ZWNjYzdgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGdlb0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBsYXRMb24gPSBbZ2VvRGF0YVswXS5sYXQsIGdlb0RhdGFbMF0ubG9uXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coYGdldEdlb1JlZ2lvbigpIEVycm9yOiAke2Vycm9yfWApO1xyXG4gICAgY29uc3QgZm9ybWF0V2FybmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtYXRXYXJuaW5nJyk7XHJcbiAgICBmb3JtYXRXYXJuaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZGlzcGxheUZvcm1hdFdhcm5pbmcgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2FsbEFQSSgpIHtcclxuICBhd2FpdCBnZXRHZW9SZWdpb24oKTtcclxuICBhd2FpdCBnZXRXZWF0aGVyKCk7XHJcbiAgYXdhaXQgZ2V0RGF0ZVRpbWUoKTtcclxuICBhd2FpdCBnZXQ1RGF5Rm9yZWNhc3QoKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjYWxsQVBJLFxyXG4gIHNldEZvcm1hdFdhcm5pbmcsXHJcbiAgZGlzcGxheUZvcm1hdFdhcm5pbmcsXHJcbiAgbGF0TG9uLFxyXG4gIG1ldHJpY1dlYXRoZXJPYmplY3QsXHJcbiAgaW1wZXJpYWxXZWF0aGVyT2JqZWN0LFxyXG4gIGRhdGVUaW1lU3RyaW5nLFxyXG4gIG1ldHJpY0ZvcmVjYXN0T2JqZWN0LFxyXG4gIGltcGVyaWFsRm9yZWNhc3RPYmplY3QsXHJcbn07XHJcbiIsImNvbnN0IGNyZWF0ZUZvcm0gPSAoZm9ybUNsYXNzID0gJycpID0+IHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGZvcm1DbGFzcyk7XHJcbiAgcmV0dXJuIGZvcm07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVMYWJlbCA9IChsYWJlbFRleHRDb250ZW50KSA9PiB7XHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0Q29udGVudDtcclxuICByZXR1cm4gbGFiZWw7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbnB1dCA9IChpbnB1dFR5cGUgPSAndGV4dCcsIGlucHV0UmVxdWlyZWQgPSB0cnVlLCBpbnB1dFBsYWNlSG9sZGVyID0gJycsIGlucHV0Q2xhc3MgPSAnJykgPT4ge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC50eXBlID0gaW5wdXRUeXBlO1xyXG4gIGlucHV0LnJlcXVpcmVkID0gaW5wdXRSZXF1aXJlZDtcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9IGlucHV0UGxhY2VIb2xkZXI7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGlucHV0Q2xhc3MpO1xyXG4gIHJldHVybiBpbnB1dDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUlucHV0Q29udGFpbmVyID0gKGxhYmVsLCBpbnB1dCwgY29udGFpbmVyQ2xhc3MgPSAnJykgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY29udGFpbmVyQ2xhc3MpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIGlucHV0KTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSWNvbiA9IChpY29uTmFtZSkgPT4ge1xyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIHNwYW4uaW5uZXJIVE1MID0gaWNvbk5hbWU7XHJcbiAgcmV0dXJuIHNwYW47XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVTeW1ib2wgPSAoc3ltYm9sTmFtZSkgPT4ge1xyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XHJcbiAgc3Bhbi5pbm5lckhUTUwgPSBzeW1ib2xOYW1lO1xyXG4gIHJldHVybiBzcGFuO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQnV0dG9uID0gKGJ1dHRvbkljb24sIGJ1dHRvblRleHQsIGJ1dHRvblR5cGUgPSAnYnV0dG9uJywgYnV0dG9uQ2xhc3MgPSAnJykgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbi50eXBlID0gYnV0dG9uVHlwZTtcclxuICBidXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsIGJ1dHRvbkNsYXNzKTtcclxuICBidXR0b24uYXBwZW5kKGNyZWF0ZUljb24oYnV0dG9uSWNvbiksIGJ1dHRvblRleHQpO1xyXG4gIHJldHVybiBidXR0b247XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVEaXYgPSAoZGl2Q2xhc3MpID0+IHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsIGRpdkNsYXNzKTtcclxuICByZXR1cm4gZGl2O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSDEgPSAodGV4dCwgaDFDbGFzcykgPT4ge1xyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgaDFDbGFzcyk7XHJcbiAgaDEuaW5uZXJIVE1MID0gdGV4dDtcclxuICByZXR1cm4gaDE7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVQID0gKHRleHQsIHBDbGFzcykgPT4ge1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcENsYXNzKTtcclxuICBwLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgcmV0dXJuIHA7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUZvcm0sXHJcbiAgY3JlYXRlTGFiZWwsXHJcbiAgY3JlYXRlSW5wdXQsXHJcbiAgY3JlYXRlSW5wdXRDb250YWluZXIsXHJcbiAgY3JlYXRlSWNvbixcclxuICBjcmVhdGVTeW1ib2wsXHJcbiAgY3JlYXRlQnV0dG9uLFxyXG4gIGNyZWF0ZURpdixcclxuICBjcmVhdGVIMSxcclxuICBjcmVhdGVQLFxyXG59O1xyXG4iLCJjb25zdCBnZXRDb250ZW50ID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbmNvbnN0IGdldE5hdiA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKTtcclxuXHJcbmNvbnN0IGdldEJpcmRzRXllID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpcmRzRXllJyk7XHJcblxyXG5jb25zdCBnZXRTdGF0cyA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0cycpO1xyXG5cclxuY29uc3QgZ2V0V2VlayA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrJyk7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldENvbnRlbnQsXHJcbiAgZ2V0TmF2LFxyXG4gIGdldEJpcmRzRXllLFxyXG4gIGdldFN0YXRzLFxyXG4gIGdldFdlZWssXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbmltcG9ydCB7IGNyZWF0ZVN5bWJvbCB9IGZyb20gJy4vZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVCaXJkc0V5ZSB9IGZyb20gJy4uL2JpcmRzRXllL2JpcmRzRXllQ29udGVudCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0YXRzIH0gZnJvbSAnLi4vc3RhdHMvc3RhdHNDb250ZW50JztcclxuaW1wb3J0IHsgY3JlYXRlV2VlayB9IGZyb20gJy4uL3dlZWsvd2Vla0NvbnRlbnQnO1xyXG5pbXBvcnQgeyBtZXRyaWNXZWF0aGVyT2JqZWN0LCBkaXNwbGF5Rm9ybWF0V2FybmluZywgc2V0Rm9ybWF0V2FybmluZyB9IGZyb20gJy4vYXBpJztcclxuaW1wb3J0IHtcclxuICBkMDEsXHJcbiAgbjAxLFxyXG4gIGQwMixcclxuICBuMDIsXHJcbiAgZDAzLFxyXG4gIG4wMyxcclxuICBkMDQsXHJcbiAgbjA0LFxyXG4gIGQwOSxcclxuICBuMDksXHJcbiAgZDEwLFxyXG4gIG4xMCxcclxuICBkMTEsXHJcbiAgbjExLFxyXG4gIGQxMyxcclxuICBuMTMsXHJcbiAgZDUwLFxyXG4gIG41MCxcclxufSBmcm9tICcuL21lZGlhJztcclxuXHJcbmNvbnN0IGZpbmRTeW1ib2wgPSAod2VhdGhlckljb25Db2RlKSA9PiB7XHJcbiAgbGV0IHN5bWJvbE5hbWUgPSAnJztcclxuICBzd2l0Y2ggKHdlYXRoZXJJY29uQ29kZSkge1xyXG4gICAgY2FzZSAnMDFkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdjbGVhcl9kYXknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAxbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnY2xlYXJfbmlnaHQnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAyZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncGFydGx5X2Nsb3VkeV9kYXknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAybic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncGFydGx5X2Nsb3VkeV9uaWdodCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDNkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdjbG91ZHknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAzbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnY2xvdWR5JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwNGQnOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2ZpbHRlcl9kcmFtYSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDRuJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdmaWx0ZXJfZHJhbWEnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA5ZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA5bic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEwZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEwbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzExZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAndGh1bmRlcnN0b3JtJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxMW4nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ3RodW5kZXJzdG9ybSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTNkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdhY191bml0JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxM24nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2FjX3VuaXQnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzUwZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnZm9nZ3knO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzUwbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnZm9nZ3knO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJTlZBTElEX1NXSVRDSF9FTlRSWSB8IGdldE1ldHJpY1dlYXRoZXJJY29uKCkgfCBiaXJkc0V5ZUxvZ2ljLmpzJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjcmVhdGVTeW1ib2woc3ltYm9sTmFtZSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCR0ltYWdlKCkge1xyXG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwMX0nKWA7XHJcblxyXG4gIHN3aXRjaCAoYCR7bWV0cmljV2VhdGhlck9iamVjdC53ZWF0aGVyWzBdLmljb259YCkge1xyXG4gICAgY2FzZSAnMDFkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwMX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDFuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24wMX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDJkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwMn0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDJuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24wMn0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDNkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwM30nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDNuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24wM30nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDRkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwNH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDRuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24wNH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDlkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwOX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDluJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24wOX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTBkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QxMH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTBuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24xMH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTFkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QxMX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTFuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24xMX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTNkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QxM30nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTNuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24xM30nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnNTBkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2Q1MH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnNTBuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke241MH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgY29uc29sZS5sb2coJ0lOVkFMSURfU1dJVENIX0VOVFJZIHwgZnVuY3Rpb24gY2hhbmdlQkdJbWFnZSgpIHwgd2Vla0xvZ2ljLmpzJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlRm9ybWF0V2FybmluZygpIHtcclxuICBpZiAoZGlzcGxheUZvcm1hdFdhcm5pbmcpIHtcclxuICAgIGNvbnN0IGZvcm1hdFdhcm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybWF0V2FybmluZycpO1xyXG4gICAgZm9ybWF0V2FybmluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgc2V0Rm9ybWF0V2FybmluZyhmYWxzZSk7XHJcbiAgICBjaGFuZ2VCR0ltYWdlKCk7XHJcbiAgfSBlbHNlIGlmICghZGlzcGxheUZvcm1hdFdhcm5pbmcpIHtcclxuICAgIGNoYW5nZUJHSW1hZ2UoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcclxuICBjb25zb2xlLmxvZyhzdHJpbmcpO1xyXG4gIGNvbnN0IHBvc2l0aW9uID0gc3RyaW5nLnNlYXJjaCgnICcpO1xyXG4gIGxldCB0ZW1wU3RyaW5nID0gJyc7XHJcbiAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xyXG4gICAgY29uc3Qgc3RyaW5nQXJyYXkgPSBzdHJpbmcuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZ0FycmF5Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHRleHQgPSBzdHJpbmdBcnJheVtpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZ0FycmF5W2ldLnNsaWNlKDEpO1xyXG4gICAgICB0ZW1wU3RyaW5nICs9IGAke3RleHR9IGA7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXBTdHJpbmcgPSBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGVtcFN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhdygpIHtcclxuICBjcmVhdGVCaXJkc0V5ZSgpO1xyXG4gIGNyZWF0ZVN0YXRzKCk7XHJcbiAgY3JlYXRlV2VlaygpO1xyXG4gIGhpZGVGb3JtYXRXYXJuaW5nKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHJhd1N0YXRzKCkge1xyXG4gIGNyZWF0ZUJpcmRzRXllKCk7XHJcbiAgY3JlYXRlU3RhdHMoKTtcclxuICBjcmVhdGVXZWVrKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZmluZFN5bWJvbCwgZHJhdywgcmVkcmF3U3RhdHMsIGNhcGl0YWxpemVGaXJzdExldHRlcixcclxufTtcclxuIiwiaW1wb3J0IGQwMSBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzAxZC5qcGcnO1xyXG5pbXBvcnQgbjAxIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDFuLmpwZyc7XHJcbmltcG9ydCBkMDIgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wMmQuanBnJztcclxuaW1wb3J0IG4wMiBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzAybi5qcGcnO1xyXG5pbXBvcnQgZDAzIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDNkLmpwZyc7XHJcbmltcG9ydCBuMDMgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wM24uanBnJztcclxuaW1wb3J0IGQwNCBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzA0ZC5qcGcnO1xyXG5pbXBvcnQgbjA0IGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDRuLmpwZyc7XHJcbmltcG9ydCBkMDkgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wOWQuanBnJztcclxuaW1wb3J0IG4wOSBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzA5bi5qcGcnO1xyXG5pbXBvcnQgZDEwIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMTBkLmpwZyc7XHJcbmltcG9ydCBuMTAgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8xMG4uanBnJztcclxuaW1wb3J0IGQxMSBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzExZC5qcGcnO1xyXG5pbXBvcnQgbjExIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMTFuLmpwZyc7XHJcbmltcG9ydCBkMTMgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8xM2QuanBnJztcclxuaW1wb3J0IG4xMyBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzEzbi5qcGcnO1xyXG5pbXBvcnQgZDUwIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvNTBkLmpwZyc7XHJcbmltcG9ydCBuNTAgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy81MG4uanBnJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgZDAxLFxyXG4gIG4wMSxcclxuICBkMDIsXHJcbiAgbjAyLFxyXG4gIGQwMyxcclxuICBuMDMsXHJcbiAgZDA0LFxyXG4gIG4wNCxcclxuICBkMDksXHJcbiAgbjA5LFxyXG4gIGQxMCxcclxuICBuMTAsXHJcbiAgZDExLFxyXG4gIG4xMSxcclxuICBkMTMsXHJcbiAgbjEzLFxyXG4gIGQ1MCxcclxuICBuNTAsXHJcbn07XHJcbiIsImltcG9ydCB7IGdldENvbnRlbnQgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2dldHRlcnMnO1xyXG5cclxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpO1xyXG4gIHJldHVybiBuYXY7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVCaXJkc0V5ZSA9ICgpID0+IHtcclxuICBjb25zdCBiaXJkc0V5ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJpcmRzRXllLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmlyZHNFeWUnKTtcclxuICByZXR1cm4gYmlyZHNFeWU7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVHYXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2FwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZ2FwLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FwJyk7XHJcbiAgcmV0dXJuIGdhcDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVN0YXRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc3RhdHMuc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0cycpO1xyXG4gIHJldHVybiBzdGF0cztcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVdlZWsgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlZWsuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWVrJyk7XHJcbiAgcmV0dXJuIHdlZWs7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHcmlkKCkge1xyXG4gIGdldENvbnRlbnQoKS5hcHBlbmQoXHJcbiAgICBjcmVhdGVOYXYoKSxcclxuICAgIGNyZWF0ZUJpcmRzRXllKCksXHJcbiAgICBjcmVhdGVHYXAoKSxcclxuICAgIGNyZWF0ZVN0YXRzKCksXHJcbiAgICBjcmVhdGVXZWVrKCksXHJcbiAgKTtcclxufVxyXG5cclxuY3JlYXRlR3JpZCgpO1xyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUZvcm0sXHJcbiAgY3JlYXRlSW5wdXQsXHJcbiAgY3JlYXRlSWNvbixcclxuICBjcmVhdGVCdXR0b24sXHJcbiAgY3JlYXRlUCxcclxufSBmcm9tICcuLi9nbG9iYWxDb2RlL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgZ2V0TmF2IH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9nZXR0ZXJzJztcclxuaW1wb3J0IHsgdG9nZ2xlTWV0cmljSW1wZXJpYWxCb29sIH0gZnJvbSAnLi9uYXZMb2dpYyc7XHJcbmltcG9ydCB7IGNhbGxBUEkgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2FwaSc7XHJcblxyXG5jb25zdCBjcmVhdGVMb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcclxuICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZUljb24oJ3N0b3JtJyksICdpV2VhdGhlcicpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVTZWFyY2hCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm0oJ3NlYXJjaEZvcm0nKTtcclxuICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ3NlYXJjaCcsICcnLCAnYnV0dG9uJywgJ3N1Ym1pdEJ1dHRvbicpO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYWxsQVBJKTtcclxuICBmb3JtLmFwcGVuZChjcmVhdGVJbnB1dCgndGV4dCcsIHRydWUsICdTZWFyY2ggbG9jYXRpb24uLi4nLCAnc2VhcmNoQmFyJyksIGJ1dHRvbik7XHJcblxyXG4gIHJldHVybiBmb3JtO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRm9ybWF0V2FybmluZyA9ICgpID0+IHtcclxuICBjb25zdCB0ZXh0ID0gY3JlYXRlUCgnUGxlYXNlIGZvcm1hdCB5b3VyIHNlYXJjaCB0aGUgZm9sbG93aW5nIHdheXM6IDxicj4ge1NhbnRpYWdvKGNpdHkpLCBDTChjb3VudHJ5IGNvZGUpfSwge0phY2tzb252aWxsZShjaXR5KSwgRmxvcmlkYShzdGF0ZSl9LCB7SW5kaWFuYXBvbGlze2NpdHl9fSwge0NoaW5hIChjb3VudHJ5KX0nLCAnZm9ybWF0V2FybmluZycpO1xyXG4gIHJldHVybiB0ZXh0O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTWV0cmljSW1wZXJpYWxCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCcnLCAnRGlzcGxheSDCsEMnLCAnYnV0dG9uJywgJ2Rpc3BsYXlNZXRyaWNJbXBlcmlhbCcpO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0b2dnbGVNZXRyaWNJbXBlcmlhbEJvb2wpO1xyXG4gIHJldHVybiBidXR0b247XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgZ2V0TmF2KCkuYXBwZW5kKFxyXG4gICAgY3JlYXRlTG9nbygpLFxyXG4gICAgY3JlYXRlU2VhcmNoQmFyKCksXHJcbiAgICBjcmVhdGVGb3JtYXRXYXJuaW5nKCksXHJcbiAgICBjcmVhdGVNZXRyaWNJbXBlcmlhbEJ1dHRvbigpLFxyXG4gICk7XHJcbn1cclxuXHJcbmNyZWF0ZU5hdigpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcblxyXG5pbXBvcnQgeyByZWRyYXdTdGF0cyB9IGZyb20gJy4uL2dsb2JhbENvZGUvbG9naWMnO1xyXG5cclxubGV0IG1ldHJpY0ltcGVyaWFsQm9vbCA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNZXRyaWNJbXBlcmlhbEJvb2woKSB7XHJcbiAgbWV0cmljSW1wZXJpYWxCb29sID0gIW1ldHJpY0ltcGVyaWFsQm9vbDtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheU1ldHJpY0ltcGVyaWFsJyk7XHJcblxyXG4gIGlmIChtZXRyaWNJbXBlcmlhbEJvb2wpIHsgYnV0dG9uLmlubmVySFRNTCA9ICdEaXNwbGF5IMKwQyc7IH0gZWxzZSB7XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gJ0Rpc3BsYXkgwrBGJztcclxuICB9XHJcbiAgcmVkcmF3U3RhdHMoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgdG9nZ2xlTWV0cmljSW1wZXJpYWxCb29sLCBtZXRyaWNJbXBlcmlhbEJvb2wgfTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IHsgZ2V0U3RhdHMgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2dldHRlcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRNZXRyaWNGZWVsc0xpa2UsXHJcbiAgZ2V0SW1wZXJpYWxGZWVsc0xpa2UsXHJcbiAgZ2V0TWV0cmljSHVtaWRpdHksXHJcbiAgZ2V0SW1wZXJpYWxIdW1pZGl0eSxcclxuICBnZXRNZXRyaWNXaW5kU3BlZWQsXHJcbiAgZ2V0SW1wZXJpYWxXaW5kU3BlZWQsXHJcbn0gZnJvbSAnLi9zdGF0c0xvZ2ljJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlRGl2LCBjcmVhdGVIMSwgY3JlYXRlUCwgY3JlYXRlU3ltYm9sLFxyXG59IGZyb20gJy4uL2dsb2JhbENvZGUvZWxlbWVudHMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IG1ldHJpY0ltcGVyaWFsQm9vbCB9IGZyb20gJy4uL25hdi9uYXZMb2dpYyc7XHJcblxyXG5jb25zdCBjcmVhdGVGZWVsc0xpa2VDb250YWluZXIgPSAobWV0cmljSW1wZXJpYWwpID0+IHtcclxuICBjb25zdCBmZWVsc0xpa2VDb250YWluZXIgPSBjcmVhdGVEaXYoJ3N0YXRzSXRlbScpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZVRleHQgPSBjcmVhdGVEaXYoJ3N0YXRzVGV4dCcpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZVAgPSBjcmVhdGVQKCdGZWVscyBMaWtlJyk7XHJcbiAgbGV0IGZlZWxzTGlrZUgxO1xyXG4gIGlmIChtZXRyaWNJbXBlcmlhbCkgeyBmZWVsc0xpa2VIMSA9IGNyZWF0ZUgxKGAke2dldE1ldHJpY0ZlZWxzTGlrZSgpfSDCsENgKTsgfSBlbHNlIGlmICghbWV0cmljSW1wZXJpYWwpIHsgZmVlbHNMaWtlSDEgPSBjcmVhdGVIMShgJHtnZXRJbXBlcmlhbEZlZWxzTGlrZSgpfSDCsEZgKTsgfVxyXG4gIGZlZWxzTGlrZVRleHQuYXBwZW5kKGZlZWxzTGlrZVAsIGZlZWxzTGlrZUgxKTtcclxuICBmZWVsc0xpa2VDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN5bWJvbCgndGhlcm1vc3RhdCcpLCBmZWVsc0xpa2VUZXh0KTtcclxuICByZXR1cm4gZmVlbHNMaWtlQ29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSHVtaWRpdHlDb250YWluZXIgPSAobWV0cmljSW1wZXJpYWwpID0+IHtcclxuICBjb25zdCBodW1pZGl0eUNvbnRhaW5lciA9IGNyZWF0ZURpdignc3RhdHNJdGVtJyk7XHJcbiAgY29uc3QgaHVtaWRpdHlUZXh0ID0gY3JlYXRlRGl2KCdzdGF0c1RleHQnKTtcclxuICBjb25zdCBodW1pZGl0eVAgPSBjcmVhdGVQKCdIdW1pZGl0eScpO1xyXG4gIGxldCBodW1pZGl0eUgxO1xyXG4gIGlmIChtZXRyaWNJbXBlcmlhbCkgeyBodW1pZGl0eUgxID0gY3JlYXRlSDEoYCR7Z2V0TWV0cmljSHVtaWRpdHkoKX0gJWApOyB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbCkgeyBodW1pZGl0eUgxID0gY3JlYXRlSDEoYCR7Z2V0SW1wZXJpYWxIdW1pZGl0eSgpfSAlYCk7IH1cclxuICBodW1pZGl0eVRleHQuYXBwZW5kKGh1bWlkaXR5UCwgaHVtaWRpdHlIMSk7XHJcbiAgaHVtaWRpdHlDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN5bWJvbCgnaHVtaWRpdHlfbWlkJyksIGh1bWlkaXR5VGV4dCk7XHJcbiAgcmV0dXJuIGh1bWlkaXR5Q29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlV2luZFNwZWVkQ29udGFpbmVyID0gKG1ldHJpY0ltcGVyaWFsKSA9PiB7XHJcbiAgY29uc3Qgd2luZFNwZWVkQ29udGFpbmVyID0gY3JlYXRlRGl2KCdzdGF0c0l0ZW0nKTtcclxuICBjb25zdCB3aW5kU3BlZWRUZXh0ID0gY3JlYXRlRGl2KCdzdGF0c1RleHQnKTtcclxuICBjb25zdCB3aW5kU3BlZWRQID0gY3JlYXRlUCgnV2luZCBTcGVlZCcpO1xyXG4gIGxldCB3aW5kU3BlZWRIMTtcclxuICBpZiAobWV0cmljSW1wZXJpYWwpIHsgd2luZFNwZWVkSDEgPSBjcmVhdGVIMShgJHtnZXRNZXRyaWNXaW5kU3BlZWQoKX0ga20vaGApOyB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbCkgeyB3aW5kU3BlZWRIMSA9IGNyZWF0ZUgxKGAke2dldEltcGVyaWFsV2luZFNwZWVkKCl9IG1waGApOyB9XHJcbiAgd2luZFNwZWVkVGV4dC5hcHBlbmQod2luZFNwZWVkUCwgd2luZFNwZWVkSDEpO1xyXG4gIHdpbmRTcGVlZENvbnRhaW5lci5hcHBlbmQoY3JlYXRlU3ltYm9sKCdhaXInKSwgd2luZFNwZWVkVGV4dCk7XHJcbiAgcmV0dXJuIHdpbmRTcGVlZENvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVdpZGdldCA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoJ3N0YXRzV2lkZ2V0Q29udGFpbmVyJyk7XHJcbiAgaWYgKG1ldHJpY0ltcGVyaWFsQm9vbCkge1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChcclxuICAgICAgY3JlYXRlRmVlbHNMaWtlQ29udGFpbmVyKG1ldHJpY0ltcGVyaWFsQm9vbCksXHJcbiAgICAgIGNyZWF0ZUh1bWlkaXR5Q29udGFpbmVyKG1ldHJpY0ltcGVyaWFsQm9vbCksXHJcbiAgICAgIGNyZWF0ZVdpbmRTcGVlZENvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbEJvb2wpIHtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICAgIGNyZWF0ZUZlZWxzTGlrZUNvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgICBjcmVhdGVIdW1pZGl0eUNvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgICBjcmVhdGVXaW5kU3BlZWRDb250YWluZXIobWV0cmljSW1wZXJpYWxCb29sKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xlYXJTdGF0cygpIHtcclxuICB3aGlsZSAoZ2V0U3RhdHMoKS5maXJzdENoaWxkKSB7IGdldFN0YXRzKCkucmVtb3ZlQ2hpbGQoZ2V0U3RhdHMoKS5maXJzdENoaWxkKTsgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdGF0cygpIHtcclxuICBjbGVhclN0YXRzKCk7XHJcbiAgZ2V0U3RhdHMoKS5hcHBlbmQoY3JlYXRlV2lkZ2V0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTdGF0cyB9O1xyXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IG1ldHJpY1dlYXRoZXJPYmplY3QsIGltcGVyaWFsV2VhdGhlck9iamVjdCB9IGZyb20gJy4uL2dsb2JhbENvZGUvYXBpJztcclxuXHJcbmNvbnN0IGdldE1ldHJpY0ZlZWxzTGlrZSA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3QubWFpbi5mZWVsc19saWtlO1xyXG5cclxuY29uc3QgZ2V0SW1wZXJpYWxGZWVsc0xpa2UgPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi5mZWVsc19saWtlO1xyXG5cclxuY29uc3QgZ2V0TWV0cmljSHVtaWRpdHkgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4uaHVtaWRpdHk7XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbEh1bWlkaXR5ID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4uaHVtaWRpdHk7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNQcmVzc3VyZSA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3QubWFpbi5wcmVzc3VyZTtcclxuXHJcbmNvbnN0IGdldEltcGVyaWFsUHJlc3N1cmUgPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi5wcmVzc3VyZTtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1RlbXBNYXggPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9tYXg7XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbFRlbXBNYXggPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi50ZW1wX21heDtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1RlbXBNaW4gPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9taW47XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbFRlbXBNaW4gPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi50ZW1wX21pbjtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1dpbmRTcGVlZCA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3Qud2luZC5zcGVlZDtcclxuXHJcbmNvbnN0IGdldEltcGVyaWFsV2luZFNwZWVkID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0LndpbmQuc3BlZWQ7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldE1ldHJpY0ZlZWxzTGlrZSxcclxuICBnZXRJbXBlcmlhbEZlZWxzTGlrZSxcclxuICBnZXRNZXRyaWNIdW1pZGl0eSxcclxuICBnZXRJbXBlcmlhbEh1bWlkaXR5LFxyXG4gIGdldE1ldHJpY1ByZXNzdXJlLFxyXG4gIGdldEltcGVyaWFsUHJlc3N1cmUsXHJcbiAgZ2V0TWV0cmljVGVtcE1heCxcclxuICBnZXRJbXBlcmlhbFRlbXBNYXgsXHJcbiAgZ2V0TWV0cmljVGVtcE1pbixcclxuICBnZXRJbXBlcmlhbFRlbXBNaW4sXHJcbiAgZ2V0TWV0cmljV2luZFNwZWVkLFxyXG4gIGdldEltcGVyaWFsV2luZFNwZWVkLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgeyBtZXRyaWNGb3JlY2FzdE9iamVjdCwgaW1wZXJpYWxGb3JlY2FzdE9iamVjdCB9IGZyb20gJy4uL2dsb2JhbENvZGUvYXBpJztcclxuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gJy4uL2dsb2JhbENvZGUvZ2V0dGVycyc7XHJcbmltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlUCwgY3JlYXRlSDEgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgbWV0cmljSW1wZXJpYWxCb29sIH0gZnJvbSAnLi4vbmF2L25hdkxvZ2ljJztcclxuaW1wb3J0IHsgZmluZFN5bWJvbCwgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9sb2dpYyc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGVUaW1lIH0gZnJvbSAnLi93ZWVrTG9naWMnO1xyXG5cclxuY29uc3QgY3JlYXRlTWV0cmljV2Vla0l0ZW1zID0gKHdlZWtXaWRnZXRDb250YWluZXIpID0+IHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1ldHJpY0ZvcmVjYXN0T2JqZWN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHdlZWtJdGVtQ29udGFpbmVyID0gY3JlYXRlRGl2KCd3ZWVrSXRlbScpO1xyXG4gICAgY29uc3QgdGltZURhdGVBcnJheSA9IGZvcm1hdERhdGVUaW1lKGkpO1xyXG4gICAgY29uc3QgZGF5ID0gY3JlYXRlUChgJHt0aW1lRGF0ZUFycmF5WzBdfWAsICcnKTtcclxuICAgIGNvbnN0IHRpbWUgPSBjcmVhdGVQKGAke3RpbWVEYXRlQXJyYXlbMV19ICR7dGltZURhdGVBcnJheVsyXX1gLCAnJyk7XHJcbiAgICBjb25zdCB0ZW1wID0gY3JlYXRlSDEoYCR7bWV0cmljRm9yZWNhc3RPYmplY3QubGlzdFtpXS5tYWluLnRlbXB9IMKwQ2AsICcnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlUChcclxuICAgICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxyXG4gICAgICAgIG1ldHJpY0ZvcmVjYXN0T2JqZWN0Lmxpc3RbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICB3ZWVrSXRlbUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICAgIGRheSxcclxuICAgICAgdGltZSxcclxuICAgICAgdGVtcCxcclxuICAgICAgZmluZFN5bWJvbChtZXRyaWNGb3JlY2FzdE9iamVjdC5saXN0W2ldLndlYXRoZXJbMF0uaWNvbiksXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgKTtcclxuICAgIHdlZWtXaWRnZXRDb250YWluZXIuYXBwZW5kKHdlZWtJdGVtQ29udGFpbmVyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbXBlcmlhbFdlZWtJdGVtcyA9ICh3ZWVrV2lkZ2V0Q29udGFpbmVyKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbXBlcmlhbEZvcmVjYXN0T2JqZWN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHdlZWtJdGVtQ29udGFpbmVyID0gY3JlYXRlRGl2KCd3ZWVrSXRlbScpO1xyXG4gICAgY29uc3QgdGltZURhdGVBcnJheSA9IGZvcm1hdERhdGVUaW1lKGkpO1xyXG4gICAgY29uc3QgZGF5ID0gY3JlYXRlUChgJHt0aW1lRGF0ZUFycmF5WzBdfWAsICcnKTtcclxuICAgIGNvbnN0IHRpbWUgPSBjcmVhdGVQKGAke3RpbWVEYXRlQXJyYXlbMV19ICR7dGltZURhdGVBcnJheVsyXX1gLCAnJyk7XHJcbiAgICBjb25zdCB0ZW1wID0gY3JlYXRlSDEoYCR7aW1wZXJpYWxGb3JlY2FzdE9iamVjdC5saXN0W2ldLm1haW4udGVtcH0gwrBGYCwgJycpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVQKFxyXG4gICAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoXHJcbiAgICAgICAgaW1wZXJpYWxGb3JlY2FzdE9iamVjdC5saXN0W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gICAgd2Vla0l0ZW1Db250YWluZXIuYXBwZW5kKFxyXG4gICAgICBkYXksXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHRlbXAsXHJcbiAgICAgIGZpbmRTeW1ib2woaW1wZXJpYWxGb3JlY2FzdE9iamVjdC5saXN0W2ldLndlYXRoZXJbMF0uaWNvbiksXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgKTtcclxuXHJcbiAgICB3ZWVrV2lkZ2V0Q29udGFpbmVyLmFwcGVuZCh3ZWVrSXRlbUNvbnRhaW5lcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlV2lkZ2V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdlZWtXaWRnZXRDb250YWluZXIgPSBjcmVhdGVEaXYoJ3dlZWtXaWRnZXRDb250YWluZXInKTtcclxuICBpZiAobWV0cmljSW1wZXJpYWxCb29sKSB7XHJcbiAgICBjcmVhdGVNZXRyaWNXZWVrSXRlbXMod2Vla1dpZGdldENvbnRhaW5lcik7XHJcbiAgfSBlbHNlIGlmICghbWV0cmljSW1wZXJpYWxCb29sKSB7XHJcbiAgICBjcmVhdGVJbXBlcmlhbFdlZWtJdGVtcyh3ZWVrV2lkZ2V0Q29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3ZWVrV2lkZ2V0Q29udGFpbmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xlYXJXZWVrKCkge1xyXG4gIHdoaWxlIChnZXRXZWVrKCkuZmlyc3RDaGlsZCkgeyBnZXRXZWVrKCkucmVtb3ZlQ2hpbGQoZ2V0V2VlaygpLmZpcnN0Q2hpbGQpOyB9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRpdGxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlSDEoJzUtRGF5IEZvcmVjYXN0JywgJycpO1xyXG5cclxuICByZXR1cm4gdGl0bGU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXZWVrKCkge1xyXG4gIGNsZWFyV2VlaygpO1xyXG4gIGdldFdlZWsoKS5hcHBlbmQoY3JlYXRlVGl0bGUoKSwgY3JlYXRlV2lkZ2V0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVXZWVrIH07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IHsgbWV0cmljRm9yZWNhc3RPYmplY3QgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2FwaSc7XHJcblxyXG5jb25zdCBmb3JtYXREYXRlVGltZSA9IChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVPcHRpb25zID0ge1xyXG4gICAgaG91cjEyOiAndHJ1ZScsXHJcbiAgICB0aW1lU3R5bGU6ICdzaG9ydCcsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICB3ZWVrZGF5OiAnbG9uZycsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG1ldHJpY0ZvcmVjYXN0T2JqZWN0Lmxpc3RbaW5kZXhdLmR0X3R4dCk7XHJcbiAgY29uc3Qgbm9ybWFsaXplZERhdGUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhgZW4tJHttZXRyaWNGb3JlY2FzdE9iamVjdC5jaXR5LmNvdW50cnl9YCwgZGF0ZU9wdGlvbnMpO1xyXG4gIGNvbnN0IGRhdGVBcnJheSA9IG5vcm1hbGl6ZWREYXRlLnNwbGl0KCcgJyk7XHJcbiAgbGV0IG5vcm1hbGl6ZWRUaW1lID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoYGVuLSR7bWV0cmljRm9yZWNhc3RPYmplY3QuY2l0eS5jb3VudHJ5fWAsIHRpbWVPcHRpb25zKTtcclxuXHJcbiAgaWYgKG5vcm1hbGl6ZWRUaW1lLmNoYXJBdCgwKSA9PT0gJzAnICYmIG5vcm1hbGl6ZWRUaW1lLmNoYXJBdCgxKSA9PT0gJzAnKSB7XHJcbiAgICBjb25zdCBzbGljZWRTdHJpbmcgPSBub3JtYWxpemVkVGltZS5zbGljZSgyLCA4KTtcclxuICAgIG5vcm1hbGl6ZWRUaW1lID0gYDEyJHtzbGljZWRTdHJpbmd9YDtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld1N0cmluZyA9IGAke2RhdGVBcnJheVswXX0gJHtub3JtYWxpemVkVGltZX1gO1xyXG4gIGNvbnN0IHN0cmluZ0FycmF5ID0gbmV3U3RyaW5nLnNwbGl0KCcgJyk7XHJcbiAgcmV0dXJuIHN0cmluZ0FycmF5O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZm9ybWF0RGF0ZVRpbWUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGUvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuLi9ncmlkL2NyZWF0ZUdyaWQnO1xyXG5pbXBvcnQgJy4uL25hdi9uYXZDb250ZW50JztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9