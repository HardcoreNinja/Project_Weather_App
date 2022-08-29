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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"Lato\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}\r\n\r\n.material-symbols-outlined {\r\n    font-family: 'Material Symbols Outlined';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 50px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n}\r\n\r\n#bgOverlay{\r\n    position: flex;\r\n    background: rgba(0, 0, 0, .7);\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n}\r\n\r\n:root {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") ;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n::placeholder {\r\n    color: rgb(0, 145, 200);\r\n    opacity: 1;\r\n    font-weight: bolder;\r\n}\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: \"Lato\";\r\n    color: white;\r\n}\r\n\r\nh1{\r\n    font-size: 25px;\r\n}\r\n\r\nbutton,\r\nbutton>span {\r\n    color: white;\r\n    transition: .75s;\r\n}\r\n\r\nbutton:hover>span {\r\n    color: rgb(0, 145, 200);\r\n    transform: scale(1.1);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr 1fr;\r\n    grid-template-rows: 1fr 2fr 2fr;\r\n    grid-template-areas:\r\n        \"nav nav nav\"\r\n        \"birdsEye gap stats\"\r\n        \"week week week\"\r\n    ;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n    max-width: 100vw;\r\n    max-width: 100vh;\r\n}\r\n\r\n.loadingOverlay{\r\n    display: none;\r\n    position: fixed;\r\n    flex-flow:column wrap;\r\n    place-content: center center;\r\n    place-items:  center center;\r\n    background: rgba(0, 0, 0, .7);\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n}\r\n\r\n.loader {\r\n    border: 16px solid #f3f3f3; /* Light grey */\r\n    border-top: 16px solid rgb(0, 145, 200); /* Blue */\r\n    border-radius: 50%;\r\n    z-index: 1; /* Sit on top */\r\n    width: 120px;\r\n    height: 120px;\r\n    animation: spin 2s linear infinite;\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n\r\n#nav {\r\n    grid-area: nav;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 20px;\r\n}\r\n\r\n#logo {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 10px;\r\n    font-size: 30px;\r\n    transition: .75s;\r\n}\r\n\r\n#logo>span {\r\n    font-size: 35px;\r\n}\r\n\r\n#logo:hover,\r\n#logo:hover>span {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    width: 25px;\r\n    height: 25px;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n}\r\n\r\n.searchForm{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n}\r\n\r\n.searchForm>input {\r\n    border: 1px solid black;\r\n    transition: .75s;\r\n}\r\n\r\n.searchForm>input:hover,\r\n.searchForm>input:focus {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.searchForm>input,\r\n.searchForm>input:focus {\r\n    background: transparent;\r\n    border-top-style: hidden;\r\n    border-right-style: hidden;\r\n    border-left-style: hidden;\r\n    outline: none;\r\n}\r\n\r\n.formatWarning{\r\n    display: none;\r\n    color: rgb(170, 60, 61);\r\n}\r\n\r\n.displayMetricImperial {\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n    transition: .75s;\r\n    font-weight: bolder;\r\n}\r\n\r\n.displayMetricImperial:hover {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n    font-weight: bolder;\r\n}\r\n\r\n#birdsEye {\r\n    grid-area: birdsEye;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.birdsEyeWidgetContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.weatherIcon {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}\r\n\r\n#gap {\r\n    grid-area: gap;\r\n}\r\n\r\n#stats {\r\n    grid-area: stats;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-end flex-start;\r\n    place-items: flex-end flex-start;\r\n}\r\n\r\n.statsWidgetContainer{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.statsItem {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.statsText {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#week {\r\n    grid-area: week;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap:20px;\r\n    padding: 20px;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n.weekWidgetContainer{\r\n    display: flex;\r\n    max-width: 90vw;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    padding: 20px;\r\n    gap: 20px;\r\n    overflow: auto;\r\n}\r\n\r\n.weekItem{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    min-width: 200px;\r\n    min-height: 200px;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"Lato\";\r\n    src: url(\"../Resources/Lato/Lato-Light.ttf\");\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}\r\n\r\n.material-symbols-outlined {\r\n    font-family: 'Material Symbols Outlined';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 50px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n}\r\n\r\n#bgOverlay{\r\n    position: flex;\r\n    background: rgba(0, 0, 0, .7);\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n}\r\n\r\n:root {\r\n    background-image: url('../resources/images/preSearch.jpg') ;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n::placeholder {\r\n    color: rgb(0, 145, 200);\r\n    opacity: 1;\r\n    font-weight: bolder;\r\n}\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: \"Lato\";\r\n    color: white;\r\n}\r\n\r\nh1{\r\n    font-size: 25px;\r\n}\r\n\r\nbutton,\r\nbutton>span {\r\n    color: white;\r\n    transition: .75s;\r\n}\r\n\r\nbutton:hover>span {\r\n    color: rgb(0, 145, 200);\r\n    transform: scale(1.1);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr 1fr;\r\n    grid-template-rows: 1fr 2fr 2fr;\r\n    grid-template-areas:\r\n        \"nav nav nav\"\r\n        \"birdsEye gap stats\"\r\n        \"week week week\"\r\n    ;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n    max-width: 100vw;\r\n    max-width: 100vh;\r\n}\r\n\r\n.loadingOverlay{\r\n    display: none;\r\n    position: fixed;\r\n    flex-flow:column wrap;\r\n    place-content: center center;\r\n    place-items:  center center;\r\n    background: rgba(0, 0, 0, .7);\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n}\r\n\r\n.loader {\r\n    border: 16px solid #f3f3f3; /* Light grey */\r\n    border-top: 16px solid rgb(0, 145, 200); /* Blue */\r\n    border-radius: 50%;\r\n    z-index: 1; /* Sit on top */\r\n    width: 120px;\r\n    height: 120px;\r\n    animation: spin 2s linear infinite;\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n\r\n#nav {\r\n    grid-area: nav;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 20px;\r\n}\r\n\r\n#logo {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 10px;\r\n    font-size: 30px;\r\n    transition: .75s;\r\n}\r\n\r\n#logo>span {\r\n    font-size: 35px;\r\n}\r\n\r\n#logo:hover,\r\n#logo:hover>span {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    width: 25px;\r\n    height: 25px;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n}\r\n\r\n.searchForm{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n}\r\n\r\n.searchForm>input {\r\n    border: 1px solid black;\r\n    transition: .75s;\r\n}\r\n\r\n.searchForm>input:hover,\r\n.searchForm>input:focus {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.searchForm>input,\r\n.searchForm>input:focus {\r\n    background: transparent;\r\n    border-top-style: hidden;\r\n    border-right-style: hidden;\r\n    border-left-style: hidden;\r\n    outline: none;\r\n}\r\n\r\n.formatWarning{\r\n    display: none;\r\n    color: rgb(170, 60, 61);\r\n}\r\n\r\n.displayMetricImperial {\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n    transition: .75s;\r\n    font-weight: bolder;\r\n}\r\n\r\n.displayMetricImperial:hover {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n    font-weight: bolder;\r\n}\r\n\r\n#birdsEye {\r\n    grid-area: birdsEye;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.birdsEyeWidgetContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.weatherIcon {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}\r\n\r\n#gap {\r\n    grid-area: gap;\r\n}\r\n\r\n#stats {\r\n    grid-area: stats;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-end flex-start;\r\n    place-items: flex-end flex-start;\r\n}\r\n\r\n.statsWidgetContainer{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.statsItem {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.statsText {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#week {\r\n    grid-area: week;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap:20px;\r\n    padding: 20px;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n.weekWidgetContainer{\r\n    display: flex;\r\n    max-width: 90vw;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    padding: 20px;\r\n    gap: 20px;\r\n    overflow: auto;\r\n}\r\n\r\n.weekItem{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    min-width: 200px;\r\n    min-height: 200px;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/globalCode/elements.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/globalCode/logic.js");
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
  const formatWarning = document.querySelector('.formatWarning');

  if (displayFormatWarning) {
    formatWarning.style.display = 'block';
  } else {
    formatWarning.style.display = 'none';
  }
}

async function get5DayForecast() {
  try {
    const forcastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=metric`,
      { mode: 'cors' },
    );
    const forcastData = await forcastResponse.json();
    metricForecastObject = forcastData;
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
  } catch (error) {
    console.log(error);
  }

  (0,_logic__WEBPACK_IMPORTED_MODULE_1__.draw)();
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
    setFormatWarning(false);
  } catch (error) {
    console.log(`getGeoRegion() Error: ${error}`);
    setFormatWarning(true);
  }
}

async function callAPI() {
  const loadingOverlay = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createLoadingScreen)();
  await getGeoRegion();
  await getWeather();
  await getDateTime();
  await get5DayForecast().finally(loadingOverlay.remove());
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
/* harmony export */   "createLoadingScreen": () => (/* binding */ createLoadingScreen),
/* harmony export */   "createP": () => (/* binding */ createP),
/* harmony export */   "createSymbol": () => (/* binding */ createSymbol)
/* harmony export */ });
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./src/globalCode/getters.js");


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

const createLoadingScreen = () => {
  const content = (0,_getters__WEBPACK_IMPORTED_MODULE_0__.getContent)();
  const overlay = createDiv('loadingOverlay');
  overlay.style.display = 'flex';
  const loader = createDiv('loader');
  loader.style.display = 'block';
  overlay.append(loader);
  content.append(overlay);

  return overlay;
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
  if (!_api__WEBPACK_IMPORTED_MODULE_4__.displayFormatWarning) { (0,_api__WEBPACK_IMPORTED_MODULE_4__.setFormatWarning)(false); }
}

function capitalizeFirstLetter(string) {
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
  changeBGImage();
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
/* harmony export */   "favicon": () => (/* reexport default export from named module */ _resources_ico_favicon_ico__WEBPACK_IMPORTED_MODULE_18__),
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
/* harmony import */ var _resources_ico_favicon_ico__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../resources/ico/favicon.ico */ "./src/resources/ico/favicon.ico");
























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

/***/ "./src/head/head.js":
/*!**************************!*\
  !*** ./src/head/head.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalCode_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalCode/media */ "./src/globalCode/media.js");


function createFavicon() {
  const head = document.querySelector('head');
  const link = document.createElement('link');
  link.rel = 'shortcut icon';
  link.href = _globalCode_media__WEBPACK_IMPORTED_MODULE_0__.favicon;
  link.type = 'image/x-icon';
  head.append(link);
}

createFavicon();


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
  const div = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('searchForm');
  const button = (0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)('search', '', 'button', 'submitButton');
  button.addEventListener('mousedown', _globalCode_api__WEBPACK_IMPORTED_MODULE_3__.callAPI);
  div.append((0,_globalCode_elements__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', true, 'Search location...', 'searchBar'), button);
  return div;
};

document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') { (0,_globalCode_api__WEBPACK_IMPORTED_MODULE_3__.callAPI)(); }
});

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

/***/ "./src/resources/ico/favicon.ico":
/*!***************************************!*\
  !*** ./src/resources/ico/favicon.ico ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d60d6b76e37ec436f6a7.ico";

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
/* harmony import */ var _head_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../head/head */ "./src/head/head.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");
/* harmony import */ var _grid_createGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid/createGrid */ "./src/grid/createGrid.js");
/* harmony import */ var _nav_navContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/navContent */ "./src/nav/navContent.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ007QUFDQTtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2JpcmRzRXllL2JpcmRzRXllQ29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2JpcmRzRXllL2JpcmRzRXllTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9nbG9iYWxDb2RlL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2dsb2JhbENvZGUvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9nbG9iYWxDb2RlL2dldHRlcnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9nbG9iYWxDb2RlL2xvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvZ2xvYmFsQ29kZS9tZWRpYS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2dyaWQvY3JlYXRlR3JpZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2hlYWQvaGVhZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL25hdi9uYXZDb250ZW50LmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvbmF2L25hdkxvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvc3RhdHMvc3RhdHNDb250ZW50LmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvc3RhdHMvc3RhdHNMb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3dlZWsvd2Vla0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy93ZWVrL3dlZWtMb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvaW5kZXgvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL1Jlc291cmNlcy9MYXRvL0xhdG8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vcmVzb3VyY2VzL2ltYWdlcy9wcmVTZWFyY2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1pY29ucyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcblxcclxcbiAgICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxyXFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcclxcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcclxcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIFN5bWJvbHMgT3V0bGluZWQnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcbn1cXHJcXG5cXHJcXG4jYmdPdmVybGF5e1xcclxcbiAgICBwb3NpdGlvbjogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNyk7XFxyXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSA7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oMXtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuYnV0dG9uPnNwYW4ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3Zlcj5zcGFuIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgICAgXFxcIm5hdiBuYXYgbmF2XFxcIlxcclxcbiAgICAgICAgXFxcImJpcmRzRXllIGdhcCBzdGF0c1xcXCJcXHJcXG4gICAgICAgIFxcXCJ3ZWVrIHdlZWsgd2Vla1xcXCJcXHJcXG4gICAgO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmdPdmVybGF5e1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGZsZXgtZmxvdzpjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6ICBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC43KTtcXHJcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRlciB7XFxyXFxuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXFxyXFxuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgcmdiKDAsIDE0NSwgMjAwKTsgLyogQmx1ZSAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxyXFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxyXFxuICB9XFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28+c3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ286aG92ZXIsXFxyXFxuI2xvZ286aG92ZXI+c3BhbiB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3Jte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybT5pbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybT5pbnB1dDpob3ZlcixcXHJcXG4uc2VhcmNoRm9ybT5pbnB1dDpmb2N1cyB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQsXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQ6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1hdFdhcm5pbmd7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTcwLCA2MCwgNjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheU1ldHJpY0ltcGVyaWFsIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5TWV0cmljSW1wZXJpYWw6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYmlyZHNFeWUge1xcclxcbiAgICBncmlkLWFyZWE6IGJpcmRzRXllO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5iaXJkc0V5ZVdpZGdldENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVySWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FwIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBnYXA7XFxyXFxufVxcclxcblxcclxcbiNzdGF0cyB7XFxyXFxuICAgIGdyaWQtYXJlYTogc3RhdHM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtZW5kIGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LWVuZCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHNXaWRnZXRDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdGF0c0l0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRzVGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4jd2VlayB7XFxyXFxuICAgIGdyaWQtYXJlYTogd2VlaztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGdhcDoyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLndlZWtXaWRnZXRDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1heC13aWR0aDogOTB2dztcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi53ZWVrSXRlbXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYzs7SUFFZCxxQ0FBcUM7SUFDckMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxrQ0FBa0M7O0lBRWxDLHlCQUF5QjtJQUN6QixrQ0FBa0M7O0lBRWxDLG9CQUFvQjtJQUNwQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtBQUNsQzs7QUFFQTtJQUNJLDBEQUEyRDtJQUMzRCwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFC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MEJBQTBCO0lBQzFCLFFBQVE7SUFDUixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QiwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9SZXNvdXJjZXMvTGF0by9MYXRvLUxpZ2h0LnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtaWNvbnMge1xcclxcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBkaXJlY3Rpb246IGx0cjtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgYWxsIFdlYktpdCBicm93c2Vycy4gKi9cXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lLiAqL1xcclxcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcblxcclxcbiAgICAvKiBTdXBwb3J0IGZvciBGaXJlZm94LiAqL1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcblxcclxcbiAgICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cXHJcXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBTeW1ib2xzIE91dGxpbmVkJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBkaXJlY3Rpb246IGx0cjtcXHJcXG59XFxyXFxuXFxyXFxuI2JnT3ZlcmxheXtcXHJcXG4gICAgcG9zaXRpb246IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjcpO1xcclxcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcmVzb3VyY2VzL2ltYWdlcy9wcmVTZWFyY2guanBnJykgO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmJ1dHRvbj5zcGFuIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXI+c3BhbiB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgIFxcXCJuYXYgbmF2IG5hdlxcXCJcXHJcXG4gICAgICAgIFxcXCJiaXJkc0V5ZSBnYXAgc3RhdHNcXFwiXFxyXFxuICAgICAgICBcXFwid2VlayB3ZWVrIHdlZWtcXFwiXFxyXFxuICAgIDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5sb2FkaW5nT3ZlcmxheXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBmbGV4LWZsb3c6Y29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiAgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNyk7XFxyXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxufVxcclxcblxcclxcbi5sb2FkZXIge1xcclxcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xcclxcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHJnYigwLCAxNDUsIDIwMCk7IC8qIEJsdWUgKi9cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcclxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcclxcbiAgfVxcclxcblxcclxcbiNuYXYge1xcclxcbiAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxufVxcclxcblxcclxcbiNsb2dvPnNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvOmhvdmVyLFxcclxcbiNsb2dvOmhvdmVyPnNwYW4ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQ6aG92ZXIsXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQ6Zm9jdXMge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3JtPmlucHV0LFxcclxcbi5zZWFyY2hGb3JtPmlucHV0OmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtYXRXYXJuaW5ne1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBjb2xvcjogcmdiKDE3MCwgNjAsIDYxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlNZXRyaWNJbXBlcmlhbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheU1ldHJpY0ltcGVyaWFsOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2JpcmRzRXllIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBiaXJkc0V5ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlyZHNFeWVXaWRnZXRDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlckljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2dhcCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZ2FwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHMge1xcclxcbiAgICBncmlkLWFyZWE6IHN0YXRzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LWVuZCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1lbmQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRzV2lkZ2V0Q29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHNJdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zdGF0c1RleHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI3dlZWsge1xcclxcbiAgICBncmlkLWFyZWE6IHdlZWs7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBnYXA6MjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi53ZWVrV2lkZ2V0Q29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXgtd2lkdGg6IDkwdnc7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla0l0ZW17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7XHJcbiAgZ2V0TWV0cmljTWFpbldlYXRoZXJEZXNjcmlwdGlvbixcclxuICBnZXRJbXBlcmlhbE1haW5XZWF0aGVyRGVzY3JpcHRpb24sXHJcbiAgZ2V0TWV0cmljTmFtZSxcclxuICBnZXRJbXBlcmlhbE5hbWUsXHJcbiAgZ2V0TWV0cmljVGVtcCxcclxuICBnZXRJbXBlcmlhbFRlbXAsXHJcbiAgZ2V0TWV0cmljV2VhdGhlclN5bWJvbCxcclxuICBnZXRJbXBlcmlhbFdlYXRoZXJTeW1ib2wsXHJcbn0gZnJvbSAnLi9iaXJkc0V5ZUxvZ2ljJztcclxuXHJcbmltcG9ydCB7IG1ldHJpY0ltcGVyaWFsQm9vbCB9IGZyb20gJy4uL25hdi9uYXZMb2dpYyc7XHJcbmltcG9ydCB7IGRhdGVUaW1lU3RyaW5nIH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9hcGknO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVIMSwgY3JlYXRlUCB9IGZyb20gJy4uL2dsb2JhbENvZGUvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBnZXRCaXJkc0V5ZSB9IGZyb20gJy4uL2dsb2JhbENvZGUvZ2V0dGVycyc7XHJcblxyXG5jb25zdCBjcmVhdGVXaWRnZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KCdiaXJkc0V5ZVdpZGdldENvbnRhaW5lcicpO1xyXG4gIGlmIChtZXRyaWNJbXBlcmlhbEJvb2wpIHtcclxuICAgIGNvbnN0IG1haW5XZWF0aGVyRGVzY3JpcHRpb24gPSBjcmVhdGVIMShnZXRNZXRyaWNNYWluV2VhdGhlckRlc2NyaXB0aW9uKCksICdiZU1haW5XZWF0aGVyRGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVQKGdldE1ldHJpY05hbWUoKSwgJ2JlTmFtZScpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRhdGVUaW1lU3RyaW5nO1xyXG4gICAgY29uc3QgdGVtcCA9IGNyZWF0ZUgxKGAke2dldE1ldHJpY1RlbXAoKX0gwrBDYCwgJ2JlVGVtcCcpO1xyXG4gICAgY29uc3Qgd2VhdGhlclN5bWJvbCA9IGdldE1ldHJpY1dlYXRoZXJTeW1ib2woKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQobWFpbldlYXRoZXJEZXNjcmlwdGlvbiwgbmFtZSwgZGF0ZSwgdGVtcCwgd2VhdGhlclN5bWJvbCk7XHJcbiAgfSBlbHNlIGlmICghbWV0cmljSW1wZXJpYWxCb29sKSB7XHJcbiAgICBjb25zdCBtYWluV2VhdGhlckRlc2NyaXB0aW9uID0gY3JlYXRlSDEoZ2V0SW1wZXJpYWxNYWluV2VhdGhlckRlc2NyaXB0aW9uKCksICdiZU1haW5XZWF0aGVyRGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVQKGdldEltcGVyaWFsTmFtZSgpLCAnYmVOYW1lJyk7XHJcbiAgICBjb25zdCBkYXRlID0gZGF0ZVRpbWVTdHJpbmc7XHJcbiAgICBjb25zdCB0ZW1wID0gY3JlYXRlSDEoYCR7Z2V0SW1wZXJpYWxUZW1wKCl9IMKwRmAsICdiZVRlbXAnKTtcclxuICAgIGNvbnN0IHdlYXRoZXJTeW1ib2wgPSBnZXRJbXBlcmlhbFdlYXRoZXJTeW1ib2woKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQobWFpbldlYXRoZXJEZXNjcmlwdGlvbiwgbmFtZSwgZGF0ZSwgdGVtcCwgd2VhdGhlclN5bWJvbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xlYXJCaXJkc0V5ZSgpIHtcclxuICB3aGlsZSAoZ2V0QmlyZHNFeWUoKS5maXJzdENoaWxkKSB7IGdldEJpcmRzRXllKCkucmVtb3ZlQ2hpbGQoZ2V0QmlyZHNFeWUoKS5maXJzdENoaWxkKTsgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCaXJkc0V5ZSgpIHtcclxuICBjbGVhckJpcmRzRXllKCk7XHJcbiAgZ2V0QmlyZHNFeWUoKS5hcHBlbmQoY3JlYXRlV2lkZ2V0KCkpO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgeyBjcmVhdGVCaXJkc0V5ZSB9O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBtZXRyaWNXZWF0aGVyT2JqZWN0LCBpbXBlcmlhbFdlYXRoZXJPYmplY3QgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2FwaSc7XHJcbmltcG9ydCB7IGNyZWF0ZURpdiB9IGZyb20gJy4uL2dsb2JhbENvZGUvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBmaW5kU3ltYm9sLCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2xvZ2ljJztcclxuXHJcbmNvbnN0IGdldE1ldHJpY01haW5XZWF0aGVyRGVzY3JpcHRpb24gPSAoKSA9PiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoXHJcbiAgbWV0cmljV2VhdGhlck9iamVjdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4pO1xyXG5jb25zdCBnZXRJbXBlcmlhbE1haW5XZWF0aGVyRGVzY3JpcHRpb24gPSAoKSA9PiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoXHJcbiAgaW1wZXJpYWxXZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbik7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNOYW1lID0gKCkgPT4gbWV0cmljV2VhdGhlck9iamVjdC5uYW1lO1xyXG5jb25zdCBnZXRJbXBlcmlhbE5hbWUgPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubmFtZTtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1RlbXAgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4udGVtcDtcclxuY29uc3QgZ2V0SW1wZXJpYWxUZW1wID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4udGVtcDtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1dlYXRoZXJTeW1ib2wgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCd3ZWF0aGVyU3ltYm9sJyk7XHJcbiAgZGl2LmFwcGVuZChmaW5kU3ltYm9sKGAke21ldHJpY1dlYXRoZXJPYmplY3Qud2VhdGhlclswXS5pY29ufWApKTtcclxuICByZXR1cm4gZGl2O1xyXG59O1xyXG5jb25zdCBnZXRJbXBlcmlhbFdlYXRoZXJTeW1ib2wgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCd3ZWF0aGVyU3ltYm9sJyk7XHJcbiAgZGl2LmFwcGVuZChmaW5kU3ltYm9sKGAke2ltcGVyaWFsV2VhdGhlck9iamVjdC53ZWF0aGVyWzBdLmljb259YCkpO1xyXG4gIHJldHVybiBkaXY7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGdldE1ldHJpY01haW5XZWF0aGVyRGVzY3JpcHRpb24sXHJcbiAgZ2V0SW1wZXJpYWxNYWluV2VhdGhlckRlc2NyaXB0aW9uLFxyXG4gIGdldE1ldHJpY05hbWUsXHJcbiAgZ2V0SW1wZXJpYWxOYW1lLFxyXG4gIGdldE1ldHJpY1RlbXAsXHJcbiAgZ2V0SW1wZXJpYWxUZW1wLFxyXG4gIGdldE1ldHJpY1dlYXRoZXJTeW1ib2wsXHJcbiAgZ2V0SW1wZXJpYWxXZWF0aGVyU3ltYm9sLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbmltcG9ydCB7IGNyZWF0ZUxvYWRpbmdTY3JlZW4gfSBmcm9tICcuL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgZHJhdyB9IGZyb20gJy4vbG9naWMnO1xyXG5cclxubGV0IGRpc3BsYXlGb3JtYXRXYXJuaW5nID0gZmFsc2U7XHJcbmxldCBsYXRMb24gPSBbXTtcclxubGV0IG1ldHJpY1dlYXRoZXJPYmplY3QgPSB7fTtcclxubGV0IGltcGVyaWFsV2VhdGhlck9iamVjdCA9IHt9O1xyXG5sZXQgZGF0ZVRpbWVTdHJpbmcgPSAnJztcclxuXHJcbmxldCBtZXRyaWNGb3JlY2FzdE9iamVjdCA9IHt9O1xyXG5sZXQgaW1wZXJpYWxGb3JlY2FzdE9iamVjdCA9IHt9O1xyXG5cclxuZnVuY3Rpb24gc2V0Rm9ybWF0V2FybmluZyhib29sKSB7XHJcbiAgZGlzcGxheUZvcm1hdFdhcm5pbmcgPSBib29sO1xyXG4gIGNvbnN0IGZvcm1hdFdhcm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybWF0V2FybmluZycpO1xyXG5cclxuICBpZiAoZGlzcGxheUZvcm1hdFdhcm5pbmcpIHtcclxuICAgIGZvcm1hdFdhcm5pbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvcm1hdFdhcm5pbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldDVEYXlGb3JlY2FzdCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9yY2FzdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0TG9uWzBdfSZsb249JHtsYXRMb25bMV19JmFwcGlkPTJiNDVkMjA3YmU2NDNlYWFjMzUzMzk3ZGJiNWVjY2M3JnVuaXRzPW1ldHJpY2AsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9yY2FzdERhdGEgPSBhd2FpdCBmb3JjYXN0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgbWV0cmljRm9yZWNhc3RPYmplY3QgPSBmb3JjYXN0RGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZvcmNhc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdExvblswXX0mbG9uPSR7bGF0TG9uWzFdfSZhcHBpZD0yYjQ1ZDIwN2JlNjQzZWFhYzM1MzM5N2RiYjVlY2NjNyZ1bml0cz1pbXBlcmlhbGAsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9yY2FzdERhdGEgPSBhd2FpdCBmb3JjYXN0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgaW1wZXJpYWxGb3JlY2FzdE9iamVjdCA9IGZvcmNhc3REYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG5cclxuICBkcmF3KCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGVUaW1lKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0aW1lUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly90aW1lem9uZS5hYnN0cmFjdGFwaS5jb20vdjEvY3VycmVudF90aW1lLz9hcGlfa2V5PWFjZTgwZmQ0YTkzNjQzOTZhZjg3NjEyMDdmYTMxYjMxJmxvY2F0aW9uPSR7bWV0cmljV2VhdGhlck9iamVjdC5jb29yZC5sYXR9LCAke21ldHJpY1dlYXRoZXJPYmplY3QuY29vcmQubG9ufWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG4gICAgY29uc3QgdGltZURhdGEgPSBhd2FpdCB0aW1lUmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVEYXRhLmRhdGV0aW1lKTtcclxuXHJcbiAgICBjb25zdCB0aW1lQXJyYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKGBlbi0ke21ldHJpY1dlYXRoZXJPYmplY3Quc3lzLmNvdW50cnl9YCwgeyBob3VyMTI6ICd0cnVlJyB9KS5zcGxpdCgnLCAnKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZERhdGUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKGBlbi0ke21ldHJpY1dlYXRoZXJPYmplY3Quc3lzLmNvdW50cnl9YCwgb3B0aW9ucyk7XHJcbiAgICBkYXRlVGltZVN0cmluZyA9IGAke25vcm1hbGl6ZWREYXRlfSAke3RpbWVBcnJheVsxXX1gO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBtZXRyaWNSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0TG9uWzBdfSZsb249JHtsYXRMb25bMV19JmFwcGlkPTJiNDVkMjA3YmU2NDNlYWFjMzUzMzk3ZGJiNWVjY2M3JnVuaXRzPW1ldHJpY2AsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXHJcbiAgICApO1xyXG4gICAgY29uc3QgbWV0cmljV2VhdGhlckRhdGEgPSBhd2FpdCBtZXRyaWNSZXNwb25zZS5qc29uKCk7XHJcbiAgICBtZXRyaWNXZWF0aGVyT2JqZWN0ID0gbWV0cmljV2VhdGhlckRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGBnZXRXZWF0aGVyKCkgTWV0cmljIEVycm9yOiAke2Vycm9yfWApO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGltcGVyaWFsUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdExvblswXX0mbG9uPSR7bGF0TG9uWzFdfSZhcHBpZD0yYjQ1ZDIwN2JlNjQzZWFhYzM1MzM5N2RiYjVlY2NjNyZ1bml0cz1pbXBlcmlhbGAsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW1wZXJpYWxXZWF0aGVyRGF0YSA9IGF3YWl0IGltcGVyaWFsUmVzcG9uc2UuanNvbigpO1xyXG4gICAgaW1wZXJpYWxXZWF0aGVyT2JqZWN0ID0gaW1wZXJpYWxXZWF0aGVyRGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coYGdldFdlYXRoZXIoKSBJbXBlcmlhbCBFcnJvcjogJHtlcnJvcn1gKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEdlb1JlZ2lvbigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEJhcicpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7c2VhcmNoQmFyLnZhbHVlfSZsaW1pdD01JmFwcGlkPTJiNDVkMjA3YmU2NDNlYWFjMzUzMzk3ZGJiNWVjY2M3YCxcclxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCBnZW9EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgbGF0TG9uID0gW2dlb0RhdGFbMF0ubGF0LCBnZW9EYXRhWzBdLmxvbl07XHJcbiAgICBzZXRGb3JtYXRXYXJuaW5nKGZhbHNlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coYGdldEdlb1JlZ2lvbigpIEVycm9yOiAke2Vycm9yfWApO1xyXG4gICAgc2V0Rm9ybWF0V2FybmluZyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNhbGxBUEkoKSB7XHJcbiAgY29uc3QgbG9hZGluZ092ZXJsYXkgPSBjcmVhdGVMb2FkaW5nU2NyZWVuKCk7XHJcbiAgYXdhaXQgZ2V0R2VvUmVnaW9uKCk7XHJcbiAgYXdhaXQgZ2V0V2VhdGhlcigpO1xyXG4gIGF3YWl0IGdldERhdGVUaW1lKCk7XHJcbiAgYXdhaXQgZ2V0NURheUZvcmVjYXN0KCkuZmluYWxseShsb2FkaW5nT3ZlcmxheS5yZW1vdmUoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY2FsbEFQSSxcclxuICBzZXRGb3JtYXRXYXJuaW5nLFxyXG4gIGRpc3BsYXlGb3JtYXRXYXJuaW5nLFxyXG4gIGxhdExvbixcclxuICBtZXRyaWNXZWF0aGVyT2JqZWN0LFxyXG4gIGltcGVyaWFsV2VhdGhlck9iamVjdCxcclxuICBkYXRlVGltZVN0cmluZyxcclxuICBtZXRyaWNGb3JlY2FzdE9iamVjdCxcclxuICBpbXBlcmlhbEZvcmVjYXN0T2JqZWN0LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBnZXRDb250ZW50IH0gZnJvbSAnLi9nZXR0ZXJzJztcclxuXHJcbmNvbnN0IGNyZWF0ZUZvcm0gPSAoZm9ybUNsYXNzID0gJycpID0+IHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGZvcm1DbGFzcyk7XHJcbiAgcmV0dXJuIGZvcm07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVMYWJlbCA9IChsYWJlbFRleHRDb250ZW50KSA9PiB7XHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0Q29udGVudDtcclxuICByZXR1cm4gbGFiZWw7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbnB1dCA9IChpbnB1dFR5cGUgPSAndGV4dCcsIGlucHV0UmVxdWlyZWQgPSB0cnVlLCBpbnB1dFBsYWNlSG9sZGVyID0gJycsIGlucHV0Q2xhc3MgPSAnJykgPT4ge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC50eXBlID0gaW5wdXRUeXBlO1xyXG4gIGlucHV0LnJlcXVpcmVkID0gaW5wdXRSZXF1aXJlZDtcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9IGlucHV0UGxhY2VIb2xkZXI7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGlucHV0Q2xhc3MpO1xyXG4gIHJldHVybiBpbnB1dDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUlucHV0Q29udGFpbmVyID0gKGxhYmVsLCBpbnB1dCwgY29udGFpbmVyQ2xhc3MgPSAnJykgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY29udGFpbmVyQ2xhc3MpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIGlucHV0KTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSWNvbiA9IChpY29uTmFtZSkgPT4ge1xyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xyXG4gIHNwYW4uaW5uZXJIVE1MID0gaWNvbk5hbWU7XHJcbiAgcmV0dXJuIHNwYW47XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVTeW1ib2wgPSAoc3ltYm9sTmFtZSkgPT4ge1xyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XHJcbiAgc3Bhbi5pbm5lckhUTUwgPSBzeW1ib2xOYW1lO1xyXG4gIHJldHVybiBzcGFuO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQnV0dG9uID0gKGJ1dHRvbkljb24sIGJ1dHRvblRleHQsIGJ1dHRvblR5cGUgPSAnYnV0dG9uJywgYnV0dG9uQ2xhc3MgPSAnJykgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbi50eXBlID0gYnV0dG9uVHlwZTtcclxuICBidXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsIGJ1dHRvbkNsYXNzKTtcclxuICBidXR0b24uYXBwZW5kKGNyZWF0ZUljb24oYnV0dG9uSWNvbiksIGJ1dHRvblRleHQpO1xyXG4gIHJldHVybiBidXR0b247XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVEaXYgPSAoZGl2Q2xhc3MpID0+IHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsIGRpdkNsYXNzKTtcclxuICByZXR1cm4gZGl2O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSDEgPSAodGV4dCwgaDFDbGFzcykgPT4ge1xyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgaDFDbGFzcyk7XHJcbiAgaDEuaW5uZXJIVE1MID0gdGV4dDtcclxuICByZXR1cm4gaDE7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVQID0gKHRleHQsIHBDbGFzcykgPT4ge1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcENsYXNzKTtcclxuICBwLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgcmV0dXJuIHA7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVMb2FkaW5nU2NyZWVuID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGNyZWF0ZURpdignbG9hZGluZ092ZXJsYXknKTtcclxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgY29uc3QgbG9hZGVyID0gY3JlYXRlRGl2KCdsb2FkZXInKTtcclxuICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgb3ZlcmxheS5hcHBlbmQobG9hZGVyKTtcclxuICBjb250ZW50LmFwcGVuZChvdmVybGF5KTtcclxuXHJcbiAgcmV0dXJuIG92ZXJsYXk7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUZvcm0sXHJcbiAgY3JlYXRlTGFiZWwsXHJcbiAgY3JlYXRlSW5wdXQsXHJcbiAgY3JlYXRlSW5wdXRDb250YWluZXIsXHJcbiAgY3JlYXRlSWNvbixcclxuICBjcmVhdGVTeW1ib2wsXHJcbiAgY3JlYXRlQnV0dG9uLFxyXG4gIGNyZWF0ZURpdixcclxuICBjcmVhdGVIMSxcclxuICBjcmVhdGVQLFxyXG4gIGNyZWF0ZUxvYWRpbmdTY3JlZW4sXHJcbn07XHJcbiIsImNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuY29uc3QgZ2V0TmF2ID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpO1xyXG5cclxuY29uc3QgZ2V0QmlyZHNFeWUgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlyZHNFeWUnKTtcclxuXHJcbmNvbnN0IGdldFN0YXRzID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRzJyk7XHJcblxyXG5jb25zdCBnZXRXZWVrID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWsnKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0Q29udGVudCxcclxuICBnZXROYXYsXHJcbiAgZ2V0QmlyZHNFeWUsXHJcbiAgZ2V0U3RhdHMsXHJcbiAgZ2V0V2VlayxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0IHsgY3JlYXRlU3ltYm9sIH0gZnJvbSAnLi9lbGVtZW50cyc7XHJcbmltcG9ydCB7IGNyZWF0ZUJpcmRzRXllIH0gZnJvbSAnLi4vYmlyZHNFeWUvYmlyZHNFeWVDb250ZW50JztcclxuaW1wb3J0IHsgY3JlYXRlU3RhdHMgfSBmcm9tICcuLi9zdGF0cy9zdGF0c0NvbnRlbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVXZWVrIH0gZnJvbSAnLi4vd2Vlay93ZWVrQ29udGVudCc7XHJcbmltcG9ydCB7IG1ldHJpY1dlYXRoZXJPYmplY3QsIGRpc3BsYXlGb3JtYXRXYXJuaW5nLCBzZXRGb3JtYXRXYXJuaW5nIH0gZnJvbSAnLi9hcGknO1xyXG5pbXBvcnQge1xyXG4gIGQwMSxcclxuICBuMDEsXHJcbiAgZDAyLFxyXG4gIG4wMixcclxuICBkMDMsXHJcbiAgbjAzLFxyXG4gIGQwNCxcclxuICBuMDQsXHJcbiAgZDA5LFxyXG4gIG4wOSxcclxuICBkMTAsXHJcbiAgbjEwLFxyXG4gIGQxMSxcclxuICBuMTEsXHJcbiAgZDEzLFxyXG4gIG4xMyxcclxuICBkNTAsXHJcbiAgbjUwLFxyXG59IGZyb20gJy4vbWVkaWEnO1xyXG5cclxuY29uc3QgZmluZFN5bWJvbCA9ICh3ZWF0aGVySWNvbkNvZGUpID0+IHtcclxuICBsZXQgc3ltYm9sTmFtZSA9ICcnO1xyXG4gIHN3aXRjaCAod2VhdGhlckljb25Db2RlKSB7XHJcbiAgICBjYXNlICcwMWQnOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2NsZWFyX2RheSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDFuJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdjbGVhcl9uaWdodCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDJkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdwYXJ0bHlfY2xvdWR5X2RheSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDJuJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdwYXJ0bHlfY2xvdWR5X25pZ2h0JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwM2QnOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2Nsb3VkeSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDNuJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdjbG91ZHknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA0ZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnZmlsdGVyX2RyYW1hJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwNG4nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2ZpbHRlcl9kcmFtYSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDlkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdyYWlueSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDluJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdyYWlueSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTBkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdyYWlueSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTBuJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdyYWlueSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTFkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICd0aHVuZGVyc3Rvcm0nO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzExbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAndGh1bmRlcnN0b3JtJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxM2QnOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2FjX3VuaXQnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEzbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnYWNfdW5pdCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnNTBkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdmb2dneSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnNTBuJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdmb2dneSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgY29uc29sZS5sb2coJ0lOVkFMSURfU1dJVENIX0VOVFJZIHwgZ2V0TWV0cmljV2VhdGhlckljb24oKSB8IGJpcmRzRXllTG9naWMuanMnKTtcclxuICB9XHJcbiAgcmV0dXJuIGNyZWF0ZVN5bWJvbChzeW1ib2xOYW1lKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUJHSW1hZ2UoKSB7XHJcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZDAxfScpYDtcclxuXHJcbiAgc3dpdGNoIChgJHttZXRyaWNXZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uaWNvbn1gKSB7XHJcbiAgICBjYXNlICcwMWQnOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZDAxfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwMW4nOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bjAxfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwMmQnOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZDAyfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwMm4nOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bjAyfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwM2QnOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZDAzfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwM24nOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bjAzfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwNGQnOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZDA0fScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwNG4nOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bjA0fScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwOWQnOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZDA5fScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwOW4nOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bjA5fScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxMGQnOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZDEwfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxMG4nOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bjEwfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxMWQnOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZDExfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxMW4nOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bjExfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxM2QnOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZDEzfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxM24nOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bjEzfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICc1MGQnOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZDUwfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICc1MG4nOlxyXG4gICAgICByb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bjUwfScpYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBjb25zb2xlLmxvZygnSU5WQUxJRF9TV0lUQ0hfRU5UUlkgfCBmdW5jdGlvbiBjaGFuZ2VCR0ltYWdlKCkgfCB3ZWVrTG9naWMuanMnKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVGb3JtYXRXYXJuaW5nKCkge1xyXG4gIGlmICghZGlzcGxheUZvcm1hdFdhcm5pbmcpIHsgc2V0Rm9ybWF0V2FybmluZyhmYWxzZSk7IH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZykge1xyXG4gIGNvbnN0IHBvc2l0aW9uID0gc3RyaW5nLnNlYXJjaCgnICcpO1xyXG4gIGxldCB0ZW1wU3RyaW5nID0gJyc7XHJcbiAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xyXG4gICAgY29uc3Qgc3RyaW5nQXJyYXkgPSBzdHJpbmcuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZ0FycmF5Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHRleHQgPSBzdHJpbmdBcnJheVtpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZ0FycmF5W2ldLnNsaWNlKDEpO1xyXG4gICAgICB0ZW1wU3RyaW5nICs9IGAke3RleHR9IGA7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXBTdHJpbmcgPSBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGVtcFN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhdygpIHtcclxuICBjcmVhdGVCaXJkc0V5ZSgpO1xyXG4gIGNyZWF0ZVN0YXRzKCk7XHJcbiAgY3JlYXRlV2VlaygpO1xyXG4gIGhpZGVGb3JtYXRXYXJuaW5nKCk7XHJcbiAgY2hhbmdlQkdJbWFnZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWRyYXdTdGF0cygpIHtcclxuICBjcmVhdGVCaXJkc0V5ZSgpO1xyXG4gIGNyZWF0ZVN0YXRzKCk7XHJcbiAgY3JlYXRlV2VlaygpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGZpbmRTeW1ib2wsIGRyYXcsIHJlZHJhd1N0YXRzLCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsXHJcbn07XHJcbiIsImltcG9ydCBkMDEgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wMWQuanBnJztcclxuaW1wb3J0IG4wMSBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzAxbi5qcGcnO1xyXG5pbXBvcnQgZDAyIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDJkLmpwZyc7XHJcbmltcG9ydCBuMDIgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wMm4uanBnJztcclxuaW1wb3J0IGQwMyBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzAzZC5qcGcnO1xyXG5pbXBvcnQgbjAzIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDNuLmpwZyc7XHJcbmltcG9ydCBkMDQgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wNGQuanBnJztcclxuaW1wb3J0IG4wNCBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzA0bi5qcGcnO1xyXG5pbXBvcnQgZDA5IGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDlkLmpwZyc7XHJcbmltcG9ydCBuMDkgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wOW4uanBnJztcclxuaW1wb3J0IGQxMCBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzEwZC5qcGcnO1xyXG5pbXBvcnQgbjEwIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMTBuLmpwZyc7XHJcbmltcG9ydCBkMTEgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8xMWQuanBnJztcclxuaW1wb3J0IG4xMSBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzExbi5qcGcnO1xyXG5pbXBvcnQgZDEzIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMTNkLmpwZyc7XHJcbmltcG9ydCBuMTMgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8xM24uanBnJztcclxuaW1wb3J0IGQ1MCBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzUwZC5qcGcnO1xyXG5pbXBvcnQgbjUwIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvNTBuLmpwZyc7XHJcblxyXG5pbXBvcnQgZmF2aWNvbiBmcm9tICcuLi9yZXNvdXJjZXMvaWNvL2Zhdmljb24uaWNvJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgZDAxLFxyXG4gIG4wMSxcclxuICBkMDIsXHJcbiAgbjAyLFxyXG4gIGQwMyxcclxuICBuMDMsXHJcbiAgZDA0LFxyXG4gIG4wNCxcclxuICBkMDksXHJcbiAgbjA5LFxyXG4gIGQxMCxcclxuICBuMTAsXHJcbiAgZDExLFxyXG4gIG4xMSxcclxuICBkMTMsXHJcbiAgbjEzLFxyXG4gIGQ1MCxcclxuICBuNTAsXHJcbiAgZmF2aWNvbixcclxufTtcclxuIiwiaW1wb3J0IHsgZ2V0Q29udGVudCB9IGZyb20gJy4uL2dsb2JhbENvZGUvZ2V0dGVycyc7XHJcblxyXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2Jyk7XHJcbiAgcmV0dXJuIG5hdjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUJpcmRzRXllID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJpcmRzRXllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYmlyZHNFeWUuc2V0QXR0cmlidXRlKCdpZCcsICdiaXJkc0V5ZScpO1xyXG4gIHJldHVybiBiaXJkc0V5ZTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUdhcCA9ICgpID0+IHtcclxuICBjb25zdCBnYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBnYXAuc2V0QXR0cmlidXRlKCdpZCcsICdnYXAnKTtcclxuICByZXR1cm4gZ2FwO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlU3RhdHMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzdGF0cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXRzJyk7XHJcbiAgcmV0dXJuIHN0YXRzO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlV2VlayA9ICgpID0+IHtcclxuICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2Vlay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlZWsnKTtcclxuICByZXR1cm4gd2VlaztcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoKSB7XHJcbiAgZ2V0Q29udGVudCgpLmFwcGVuZChcclxuICAgIGNyZWF0ZU5hdigpLFxyXG4gICAgY3JlYXRlQmlyZHNFeWUoKSxcclxuICAgIGNyZWF0ZUdhcCgpLFxyXG4gICAgY3JlYXRlU3RhdHMoKSxcclxuICAgIGNyZWF0ZVdlZWsoKSxcclxuICApO1xyXG59XHJcblxyXG5jcmVhdGVHcmlkKCk7XHJcbiIsImltcG9ydCB7IGZhdmljb24gfSBmcm9tICcuLi9nbG9iYWxDb2RlL21lZGlhJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZhdmljb24oKSB7XHJcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcclxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gIGxpbmsucmVsID0gJ3Nob3J0Y3V0IGljb24nO1xyXG4gIGxpbmsuaHJlZiA9IGZhdmljb247XHJcbiAgbGluay50eXBlID0gJ2ltYWdlL3gtaWNvbic7XHJcbiAgaGVhZC5hcHBlbmQobGluayk7XHJcbn1cclxuXHJcbmNyZWF0ZUZhdmljb24oKTtcclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVEaXYsXHJcbiAgY3JlYXRlSW5wdXQsXHJcbiAgY3JlYXRlSWNvbixcclxuICBjcmVhdGVCdXR0b24sXHJcbiAgY3JlYXRlUCxcclxufSBmcm9tICcuLi9nbG9iYWxDb2RlL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgZ2V0TmF2IH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9nZXR0ZXJzJztcclxuaW1wb3J0IHsgdG9nZ2xlTWV0cmljSW1wZXJpYWxCb29sIH0gZnJvbSAnLi9uYXZMb2dpYyc7XHJcbmltcG9ydCB7IGNhbGxBUEkgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2FwaSc7XHJcblxyXG5jb25zdCBjcmVhdGVMb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcclxuICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZUljb24oJ3N0b3JtJyksICdpV2VhdGhlcicpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVTZWFyY2hCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCdzZWFyY2hGb3JtJyk7XHJcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzZWFyY2gnLCAnJywgJ2J1dHRvbicsICdzdWJtaXRCdXR0b24nKTtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2FsbEFQSSk7XHJcbiAgZGl2LmFwcGVuZChjcmVhdGVJbnB1dCgndGV4dCcsIHRydWUsICdTZWFyY2ggbG9jYXRpb24uLi4nLCAnc2VhcmNoQmFyJyksIGJ1dHRvbik7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykgeyBjYWxsQVBJKCk7IH1cclxufSk7XHJcblxyXG5jb25zdCBjcmVhdGVGb3JtYXRXYXJuaW5nID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRleHQgPSBjcmVhdGVQKCdQbGVhc2UgZm9ybWF0IHlvdXIgc2VhcmNoIHRoZSBmb2xsb3dpbmcgd2F5czogPGJyPiB7U2FudGlhZ28oY2l0eSksIENMKGNvdW50cnkgY29kZSl9LCB7SmFja3NvbnZpbGxlKGNpdHkpLCBGbG9yaWRhKHN0YXRlKX0sIHtJbmRpYW5hcG9saXN7Y2l0eX19LCB7Q2hpbmEgKGNvdW50cnkpfScsICdmb3JtYXRXYXJuaW5nJyk7XHJcbiAgcmV0dXJuIHRleHQ7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNZXRyaWNJbXBlcmlhbEJ1dHRvbiA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJycsICdEaXNwbGF5IMKwQycsICdidXR0b24nLCAnZGlzcGxheU1ldHJpY0ltcGVyaWFsJyk7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRvZ2dsZU1ldHJpY0ltcGVyaWFsQm9vbCk7XHJcbiAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICBnZXROYXYoKS5hcHBlbmQoXHJcbiAgICBjcmVhdGVMb2dvKCksXHJcbiAgICBjcmVhdGVTZWFyY2hCYXIoKSxcclxuICAgIGNyZWF0ZUZvcm1hdFdhcm5pbmcoKSxcclxuICAgIGNyZWF0ZU1ldHJpY0ltcGVyaWFsQnV0dG9uKCksXHJcbiAgKTtcclxufVxyXG5cclxuY3JlYXRlTmF2KCk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuXHJcbmltcG9ydCB7IHJlZHJhd1N0YXRzIH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9sb2dpYyc7XHJcblxyXG5sZXQgbWV0cmljSW1wZXJpYWxCb29sID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1ldHJpY0ltcGVyaWFsQm9vbCgpIHtcclxuICBtZXRyaWNJbXBlcmlhbEJvb2wgPSAhbWV0cmljSW1wZXJpYWxCb29sO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5TWV0cmljSW1wZXJpYWwnKTtcclxuXHJcbiAgaWYgKG1ldHJpY0ltcGVyaWFsQm9vbCkgeyBidXR0b24uaW5uZXJIVE1MID0gJ0Rpc3BsYXkgwrBDJzsgfSBlbHNlIHtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnRGlzcGxheSDCsEYnO1xyXG4gIH1cclxuICByZWRyYXdTdGF0cygpO1xyXG59XHJcblxyXG5leHBvcnQgeyB0b2dnbGVNZXRyaWNJbXBlcmlhbEJvb2wsIG1ldHJpY0ltcGVyaWFsQm9vbCB9O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgeyBnZXRTdGF0cyB9IGZyb20gJy4uL2dsb2JhbENvZGUvZ2V0dGVycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldE1ldHJpY0ZlZWxzTGlrZSxcclxuICBnZXRJbXBlcmlhbEZlZWxzTGlrZSxcclxuICBnZXRNZXRyaWNIdW1pZGl0eSxcclxuICBnZXRJbXBlcmlhbEh1bWlkaXR5LFxyXG4gIGdldE1ldHJpY1dpbmRTcGVlZCxcclxuICBnZXRJbXBlcmlhbFdpbmRTcGVlZCxcclxufSBmcm9tICcuL3N0YXRzTG9naWMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVEaXYsIGNyZWF0ZUgxLCBjcmVhdGVQLCBjcmVhdGVTeW1ib2wsXHJcbn0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9lbGVtZW50cyc7XHJcbmltcG9ydCB7IG1ldHJpY0ltcGVyaWFsQm9vbCB9IGZyb20gJy4uL25hdi9uYXZMb2dpYyc7XHJcblxyXG5jb25zdCBjcmVhdGVGZWVsc0xpa2VDb250YWluZXIgPSAobWV0cmljSW1wZXJpYWwpID0+IHtcclxuICBjb25zdCBmZWVsc0xpa2VDb250YWluZXIgPSBjcmVhdGVEaXYoJ3N0YXRzSXRlbScpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZVRleHQgPSBjcmVhdGVEaXYoJ3N0YXRzVGV4dCcpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZVAgPSBjcmVhdGVQKCdGZWVscyBMaWtlJyk7XHJcbiAgbGV0IGZlZWxzTGlrZUgxO1xyXG4gIGlmIChtZXRyaWNJbXBlcmlhbCkgeyBmZWVsc0xpa2VIMSA9IGNyZWF0ZUgxKGAke2dldE1ldHJpY0ZlZWxzTGlrZSgpfSDCsENgKTsgfSBlbHNlIGlmICghbWV0cmljSW1wZXJpYWwpIHsgZmVlbHNMaWtlSDEgPSBjcmVhdGVIMShgJHtnZXRJbXBlcmlhbEZlZWxzTGlrZSgpfSDCsEZgKTsgfVxyXG4gIGZlZWxzTGlrZVRleHQuYXBwZW5kKGZlZWxzTGlrZVAsIGZlZWxzTGlrZUgxKTtcclxuICBmZWVsc0xpa2VDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN5bWJvbCgndGhlcm1vc3RhdCcpLCBmZWVsc0xpa2VUZXh0KTtcclxuICByZXR1cm4gZmVlbHNMaWtlQ29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSHVtaWRpdHlDb250YWluZXIgPSAobWV0cmljSW1wZXJpYWwpID0+IHtcclxuICBjb25zdCBodW1pZGl0eUNvbnRhaW5lciA9IGNyZWF0ZURpdignc3RhdHNJdGVtJyk7XHJcbiAgY29uc3QgaHVtaWRpdHlUZXh0ID0gY3JlYXRlRGl2KCdzdGF0c1RleHQnKTtcclxuICBjb25zdCBodW1pZGl0eVAgPSBjcmVhdGVQKCdIdW1pZGl0eScpO1xyXG4gIGxldCBodW1pZGl0eUgxO1xyXG4gIGlmIChtZXRyaWNJbXBlcmlhbCkgeyBodW1pZGl0eUgxID0gY3JlYXRlSDEoYCR7Z2V0TWV0cmljSHVtaWRpdHkoKX0gJWApOyB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbCkgeyBodW1pZGl0eUgxID0gY3JlYXRlSDEoYCR7Z2V0SW1wZXJpYWxIdW1pZGl0eSgpfSAlYCk7IH1cclxuICBodW1pZGl0eVRleHQuYXBwZW5kKGh1bWlkaXR5UCwgaHVtaWRpdHlIMSk7XHJcbiAgaHVtaWRpdHlDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN5bWJvbCgnaHVtaWRpdHlfbWlkJyksIGh1bWlkaXR5VGV4dCk7XHJcbiAgcmV0dXJuIGh1bWlkaXR5Q29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlV2luZFNwZWVkQ29udGFpbmVyID0gKG1ldHJpY0ltcGVyaWFsKSA9PiB7XHJcbiAgY29uc3Qgd2luZFNwZWVkQ29udGFpbmVyID0gY3JlYXRlRGl2KCdzdGF0c0l0ZW0nKTtcclxuICBjb25zdCB3aW5kU3BlZWRUZXh0ID0gY3JlYXRlRGl2KCdzdGF0c1RleHQnKTtcclxuICBjb25zdCB3aW5kU3BlZWRQID0gY3JlYXRlUCgnV2luZCBTcGVlZCcpO1xyXG4gIGxldCB3aW5kU3BlZWRIMTtcclxuICBpZiAobWV0cmljSW1wZXJpYWwpIHsgd2luZFNwZWVkSDEgPSBjcmVhdGVIMShgJHtnZXRNZXRyaWNXaW5kU3BlZWQoKX0ga20vaGApOyB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbCkgeyB3aW5kU3BlZWRIMSA9IGNyZWF0ZUgxKGAke2dldEltcGVyaWFsV2luZFNwZWVkKCl9IG1waGApOyB9XHJcbiAgd2luZFNwZWVkVGV4dC5hcHBlbmQod2luZFNwZWVkUCwgd2luZFNwZWVkSDEpO1xyXG4gIHdpbmRTcGVlZENvbnRhaW5lci5hcHBlbmQoY3JlYXRlU3ltYm9sKCdhaXInKSwgd2luZFNwZWVkVGV4dCk7XHJcbiAgcmV0dXJuIHdpbmRTcGVlZENvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVdpZGdldCA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoJ3N0YXRzV2lkZ2V0Q29udGFpbmVyJyk7XHJcbiAgaWYgKG1ldHJpY0ltcGVyaWFsQm9vbCkge1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChcclxuICAgICAgY3JlYXRlRmVlbHNMaWtlQ29udGFpbmVyKG1ldHJpY0ltcGVyaWFsQm9vbCksXHJcbiAgICAgIGNyZWF0ZUh1bWlkaXR5Q29udGFpbmVyKG1ldHJpY0ltcGVyaWFsQm9vbCksXHJcbiAgICAgIGNyZWF0ZVdpbmRTcGVlZENvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbEJvb2wpIHtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICAgIGNyZWF0ZUZlZWxzTGlrZUNvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgICBjcmVhdGVIdW1pZGl0eUNvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgICBjcmVhdGVXaW5kU3BlZWRDb250YWluZXIobWV0cmljSW1wZXJpYWxCb29sKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xlYXJTdGF0cygpIHtcclxuICB3aGlsZSAoZ2V0U3RhdHMoKS5maXJzdENoaWxkKSB7IGdldFN0YXRzKCkucmVtb3ZlQ2hpbGQoZ2V0U3RhdHMoKS5maXJzdENoaWxkKTsgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdGF0cygpIHtcclxuICBjbGVhclN0YXRzKCk7XHJcbiAgZ2V0U3RhdHMoKS5hcHBlbmQoY3JlYXRlV2lkZ2V0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTdGF0cyB9O1xyXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IG1ldHJpY1dlYXRoZXJPYmplY3QsIGltcGVyaWFsV2VhdGhlck9iamVjdCB9IGZyb20gJy4uL2dsb2JhbENvZGUvYXBpJztcclxuXHJcbmNvbnN0IGdldE1ldHJpY0ZlZWxzTGlrZSA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3QubWFpbi5mZWVsc19saWtlO1xyXG5cclxuY29uc3QgZ2V0SW1wZXJpYWxGZWVsc0xpa2UgPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi5mZWVsc19saWtlO1xyXG5cclxuY29uc3QgZ2V0TWV0cmljSHVtaWRpdHkgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4uaHVtaWRpdHk7XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbEh1bWlkaXR5ID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4uaHVtaWRpdHk7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNQcmVzc3VyZSA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3QubWFpbi5wcmVzc3VyZTtcclxuXHJcbmNvbnN0IGdldEltcGVyaWFsUHJlc3N1cmUgPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi5wcmVzc3VyZTtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1RlbXBNYXggPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9tYXg7XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbFRlbXBNYXggPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi50ZW1wX21heDtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1RlbXBNaW4gPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9taW47XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbFRlbXBNaW4gPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi50ZW1wX21pbjtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1dpbmRTcGVlZCA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3Qud2luZC5zcGVlZDtcclxuXHJcbmNvbnN0IGdldEltcGVyaWFsV2luZFNwZWVkID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0LndpbmQuc3BlZWQ7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldE1ldHJpY0ZlZWxzTGlrZSxcclxuICBnZXRJbXBlcmlhbEZlZWxzTGlrZSxcclxuICBnZXRNZXRyaWNIdW1pZGl0eSxcclxuICBnZXRJbXBlcmlhbEh1bWlkaXR5LFxyXG4gIGdldE1ldHJpY1ByZXNzdXJlLFxyXG4gIGdldEltcGVyaWFsUHJlc3N1cmUsXHJcbiAgZ2V0TWV0cmljVGVtcE1heCxcclxuICBnZXRJbXBlcmlhbFRlbXBNYXgsXHJcbiAgZ2V0TWV0cmljVGVtcE1pbixcclxuICBnZXRJbXBlcmlhbFRlbXBNaW4sXHJcbiAgZ2V0TWV0cmljV2luZFNwZWVkLFxyXG4gIGdldEltcGVyaWFsV2luZFNwZWVkLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgeyBtZXRyaWNGb3JlY2FzdE9iamVjdCwgaW1wZXJpYWxGb3JlY2FzdE9iamVjdCB9IGZyb20gJy4uL2dsb2JhbENvZGUvYXBpJztcclxuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gJy4uL2dsb2JhbENvZGUvZ2V0dGVycyc7XHJcbmltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlUCwgY3JlYXRlSDEgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgbWV0cmljSW1wZXJpYWxCb29sIH0gZnJvbSAnLi4vbmF2L25hdkxvZ2ljJztcclxuaW1wb3J0IHsgZmluZFN5bWJvbCwgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9sb2dpYyc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGVUaW1lIH0gZnJvbSAnLi93ZWVrTG9naWMnO1xyXG5cclxuY29uc3QgY3JlYXRlTWV0cmljV2Vla0l0ZW1zID0gKHdlZWtXaWRnZXRDb250YWluZXIpID0+IHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1ldHJpY0ZvcmVjYXN0T2JqZWN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHdlZWtJdGVtQ29udGFpbmVyID0gY3JlYXRlRGl2KCd3ZWVrSXRlbScpO1xyXG4gICAgY29uc3QgdGltZURhdGVBcnJheSA9IGZvcm1hdERhdGVUaW1lKGkpO1xyXG4gICAgY29uc3QgZGF5ID0gY3JlYXRlUChgJHt0aW1lRGF0ZUFycmF5WzBdfWAsICcnKTtcclxuICAgIGNvbnN0IHRpbWUgPSBjcmVhdGVQKGAke3RpbWVEYXRlQXJyYXlbMV19ICR7dGltZURhdGVBcnJheVsyXX1gLCAnJyk7XHJcbiAgICBjb25zdCB0ZW1wID0gY3JlYXRlSDEoYCR7bWV0cmljRm9yZWNhc3RPYmplY3QubGlzdFtpXS5tYWluLnRlbXB9IMKwQ2AsICcnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlUChcclxuICAgICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxyXG4gICAgICAgIG1ldHJpY0ZvcmVjYXN0T2JqZWN0Lmxpc3RbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICB3ZWVrSXRlbUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICAgIGRheSxcclxuICAgICAgdGltZSxcclxuICAgICAgdGVtcCxcclxuICAgICAgZmluZFN5bWJvbChtZXRyaWNGb3JlY2FzdE9iamVjdC5saXN0W2ldLndlYXRoZXJbMF0uaWNvbiksXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgKTtcclxuICAgIHdlZWtXaWRnZXRDb250YWluZXIuYXBwZW5kKHdlZWtJdGVtQ29udGFpbmVyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbXBlcmlhbFdlZWtJdGVtcyA9ICh3ZWVrV2lkZ2V0Q29udGFpbmVyKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbXBlcmlhbEZvcmVjYXN0T2JqZWN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHdlZWtJdGVtQ29udGFpbmVyID0gY3JlYXRlRGl2KCd3ZWVrSXRlbScpO1xyXG4gICAgY29uc3QgdGltZURhdGVBcnJheSA9IGZvcm1hdERhdGVUaW1lKGkpO1xyXG4gICAgY29uc3QgZGF5ID0gY3JlYXRlUChgJHt0aW1lRGF0ZUFycmF5WzBdfWAsICcnKTtcclxuICAgIGNvbnN0IHRpbWUgPSBjcmVhdGVQKGAke3RpbWVEYXRlQXJyYXlbMV19ICR7dGltZURhdGVBcnJheVsyXX1gLCAnJyk7XHJcbiAgICBjb25zdCB0ZW1wID0gY3JlYXRlSDEoYCR7aW1wZXJpYWxGb3JlY2FzdE9iamVjdC5saXN0W2ldLm1haW4udGVtcH0gwrBGYCwgJycpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVQKFxyXG4gICAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoXHJcbiAgICAgICAgaW1wZXJpYWxGb3JlY2FzdE9iamVjdC5saXN0W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gICAgd2Vla0l0ZW1Db250YWluZXIuYXBwZW5kKFxyXG4gICAgICBkYXksXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHRlbXAsXHJcbiAgICAgIGZpbmRTeW1ib2woaW1wZXJpYWxGb3JlY2FzdE9iamVjdC5saXN0W2ldLndlYXRoZXJbMF0uaWNvbiksXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgKTtcclxuXHJcbiAgICB3ZWVrV2lkZ2V0Q29udGFpbmVyLmFwcGVuZCh3ZWVrSXRlbUNvbnRhaW5lcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlV2lkZ2V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdlZWtXaWRnZXRDb250YWluZXIgPSBjcmVhdGVEaXYoJ3dlZWtXaWRnZXRDb250YWluZXInKTtcclxuICBpZiAobWV0cmljSW1wZXJpYWxCb29sKSB7XHJcbiAgICBjcmVhdGVNZXRyaWNXZWVrSXRlbXMod2Vla1dpZGdldENvbnRhaW5lcik7XHJcbiAgfSBlbHNlIGlmICghbWV0cmljSW1wZXJpYWxCb29sKSB7XHJcbiAgICBjcmVhdGVJbXBlcmlhbFdlZWtJdGVtcyh3ZWVrV2lkZ2V0Q29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3ZWVrV2lkZ2V0Q29udGFpbmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xlYXJXZWVrKCkge1xyXG4gIHdoaWxlIChnZXRXZWVrKCkuZmlyc3RDaGlsZCkgeyBnZXRXZWVrKCkucmVtb3ZlQ2hpbGQoZ2V0V2VlaygpLmZpcnN0Q2hpbGQpOyB9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRpdGxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlSDEoJzUtRGF5IEZvcmVjYXN0JywgJycpO1xyXG5cclxuICByZXR1cm4gdGl0bGU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXZWVrKCkge1xyXG4gIGNsZWFyV2VlaygpO1xyXG4gIGdldFdlZWsoKS5hcHBlbmQoY3JlYXRlVGl0bGUoKSwgY3JlYXRlV2lkZ2V0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVXZWVrIH07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IHsgbWV0cmljRm9yZWNhc3RPYmplY3QgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2FwaSc7XHJcblxyXG5jb25zdCBmb3JtYXREYXRlVGltZSA9IChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVPcHRpb25zID0ge1xyXG4gICAgaG91cjEyOiAndHJ1ZScsXHJcbiAgICB0aW1lU3R5bGU6ICdzaG9ydCcsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICB3ZWVrZGF5OiAnbG9uZycsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG1ldHJpY0ZvcmVjYXN0T2JqZWN0Lmxpc3RbaW5kZXhdLmR0X3R4dCk7XHJcbiAgY29uc3Qgbm9ybWFsaXplZERhdGUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhgZW4tJHttZXRyaWNGb3JlY2FzdE9iamVjdC5jaXR5LmNvdW50cnl9YCwgZGF0ZU9wdGlvbnMpO1xyXG4gIGNvbnN0IGRhdGVBcnJheSA9IG5vcm1hbGl6ZWREYXRlLnNwbGl0KCcgJyk7XHJcbiAgbGV0IG5vcm1hbGl6ZWRUaW1lID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoYGVuLSR7bWV0cmljRm9yZWNhc3RPYmplY3QuY2l0eS5jb3VudHJ5fWAsIHRpbWVPcHRpb25zKTtcclxuXHJcbiAgaWYgKG5vcm1hbGl6ZWRUaW1lLmNoYXJBdCgwKSA9PT0gJzAnICYmIG5vcm1hbGl6ZWRUaW1lLmNoYXJBdCgxKSA9PT0gJzAnKSB7XHJcbiAgICBjb25zdCBzbGljZWRTdHJpbmcgPSBub3JtYWxpemVkVGltZS5zbGljZSgyLCA4KTtcclxuICAgIG5vcm1hbGl6ZWRUaW1lID0gYDEyJHtzbGljZWRTdHJpbmd9YDtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld1N0cmluZyA9IGAke2RhdGVBcnJheVswXX0gJHtub3JtYWxpemVkVGltZX1gO1xyXG4gIGNvbnN0IHN0cmluZ0FycmF5ID0gbmV3U3RyaW5nLnNwbGl0KCcgJyk7XHJcbiAgcmV0dXJuIHN0cmluZ0FycmF5O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZm9ybWF0RGF0ZVRpbWUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vaGVhZC9oZWFkJztcclxuaW1wb3J0ICcuLi9zdHlsZS9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4uL2dyaWQvY3JlYXRlR3JpZCc7XHJcbmltcG9ydCAnLi4vbmF2L25hdkNvbnRlbnQnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=