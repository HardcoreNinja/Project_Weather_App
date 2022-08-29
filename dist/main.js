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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0E7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9iaXJkc0V5ZS9iaXJkc0V5ZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9iaXJkc0V5ZS9iaXJkc0V5ZUxvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvZ2xvYmFsQ29kZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9nbG9iYWxDb2RlL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvZ2xvYmFsQ29kZS9nZXR0ZXJzLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvZ2xvYmFsQ29kZS9sb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2dsb2JhbENvZGUvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9ncmlkL2NyZWF0ZUdyaWQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9uYXYvbmF2Q29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL25hdi9uYXZMb2dpYy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3N0YXRzL3N0YXRzQ29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3N0YXRzL3N0YXRzTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy93ZWVrL3dlZWtDb250ZW50LmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvd2Vlay93ZWVrTG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9SZXNvdXJjZXMvTGF0by9MYXRvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3Jlc291cmNlcy9pbWFnZXMvcHJlU2VhcmNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtaWNvbnMge1xcclxcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBkaXJlY3Rpb246IGx0cjtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgYWxsIFdlYktpdCBicm93c2Vycy4gKi9cXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lLiAqL1xcclxcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcblxcclxcbiAgICAvKiBTdXBwb3J0IGZvciBGaXJlZm94LiAqL1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcblxcclxcbiAgICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cXHJcXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBTeW1ib2xzIE91dGxpbmVkJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBkaXJlY3Rpb246IGx0cjtcXHJcXG59XFxyXFxuXFxyXFxuI2JnT3ZlcmxheXtcXHJcXG4gICAgcG9zaXRpb246IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjcpO1xcclxcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmJ1dHRvbj5zcGFuIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXI+c3BhbiB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgIFxcXCJuYXYgbmF2IG5hdlxcXCJcXHJcXG4gICAgICAgIFxcXCJiaXJkc0V5ZSBnYXAgc3RhdHNcXFwiXFxyXFxuICAgICAgICBcXFwid2VlayB3ZWVrIHdlZWtcXFwiXFxyXFxuICAgIDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5sb2FkaW5nT3ZlcmxheXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBmbGV4LWZsb3c6Y29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiAgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNyk7XFxyXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxufVxcclxcblxcclxcbi5sb2FkZXIge1xcclxcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xcclxcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHJnYigwLCAxNDUsIDIwMCk7IC8qIEJsdWUgKi9cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcclxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcclxcbiAgfVxcclxcblxcclxcbiNuYXYge1xcclxcbiAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxufVxcclxcblxcclxcbiNsb2dvPnNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvOmhvdmVyLFxcclxcbiNsb2dvOmhvdmVyPnNwYW4ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQ6aG92ZXIsXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQ6Zm9jdXMge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3JtPmlucHV0LFxcclxcbi5zZWFyY2hGb3JtPmlucHV0OmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtYXRXYXJuaW5ne1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBjb2xvcjogcmdiKDE3MCwgNjAsIDYxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlNZXRyaWNJbXBlcmlhbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheU1ldHJpY0ltcGVyaWFsOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2JpcmRzRXllIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBiaXJkc0V5ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlyZHNFeWVXaWRnZXRDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlckljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2dhcCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZ2FwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHMge1xcclxcbiAgICBncmlkLWFyZWE6IHN0YXRzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LWVuZCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1lbmQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRzV2lkZ2V0Q29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHNJdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zdGF0c1RleHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI3dlZWsge1xcclxcbiAgICBncmlkLWFyZWE6IHdlZWs7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBnYXA6MjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi53ZWVrV2lkZ2V0Q29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXgtd2lkdGg6IDkwdnc7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla0l0ZW17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJ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QUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vUmVzb3VyY2VzL0xhdG8vTGF0by1MaWdodC50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLWljb25zIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cXHJcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgSUUuICovXFxyXFxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgU3ltYm9scyBPdXRsaW5lZCc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxufVxcclxcblxcclxcbiNiZ092ZXJsYXl7XFxyXFxuICAgIHBvc2l0aW9uOiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC43KTtcXHJcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3Jlc291cmNlcy9pbWFnZXMvcHJlU2VhcmNoLmpwZycpIDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmgxe1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5idXR0b24+c3BhbiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyPnNwYW4ge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwibmF2IG5hdiBuYXZcXFwiXFxyXFxuICAgICAgICBcXFwiYmlyZHNFeWUgZ2FwIHN0YXRzXFxcIlxcclxcbiAgICAgICAgXFxcIndlZWsgd2VlayB3ZWVrXFxcIlxcclxcbiAgICA7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZ092ZXJsYXl7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZmxleC1mbG93OmNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogIGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjcpO1xcclxcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGVyIHtcXHJcXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cXHJcXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCByZ2IoMCwgMTQ1LCAyMDApOyAvKiBCbHVlICovXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXHJcXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4jbmF2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbz5zcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbzpob3ZlcixcXHJcXG4jbG9nbzpob3Zlcj5zcGFuIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEZvcm17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3JtPmlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hGb3JtPmlucHV0OmhvdmVyLFxcclxcbi5zZWFyY2hGb3JtPmlucHV0OmZvY3VzIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybT5pbnB1dCxcXHJcXG4uc2VhcmNoRm9ybT5pbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xcclxcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybWF0V2FybmluZ3tcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgY29sb3I6IHJnYigxNzAsIDYwLCA2MSk7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5TWV0cmljSW1wZXJpYWwge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlNZXRyaWNJbXBlcmlhbDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbiNiaXJkc0V5ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogYmlyZHNFeWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpcmRzRXllV2lkZ2V0Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJJY29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNnYXAge1xcclxcbiAgICBncmlkLWFyZWE6IGdhcDtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXRzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzdGF0cztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1lbmQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtZW5kIGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zdGF0c1dpZGdldENvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRzSXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHNUZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiN3ZWVrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB3ZWVrO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgZ2FwOjIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla1dpZGdldENvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndlZWtJdGVte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQge1xyXG4gIGdldE1ldHJpY01haW5XZWF0aGVyRGVzY3JpcHRpb24sXHJcbiAgZ2V0SW1wZXJpYWxNYWluV2VhdGhlckRlc2NyaXB0aW9uLFxyXG4gIGdldE1ldHJpY05hbWUsXHJcbiAgZ2V0SW1wZXJpYWxOYW1lLFxyXG4gIGdldE1ldHJpY1RlbXAsXHJcbiAgZ2V0SW1wZXJpYWxUZW1wLFxyXG4gIGdldE1ldHJpY1dlYXRoZXJTeW1ib2wsXHJcbiAgZ2V0SW1wZXJpYWxXZWF0aGVyU3ltYm9sLFxyXG59IGZyb20gJy4vYmlyZHNFeWVMb2dpYyc7XHJcblxyXG5pbXBvcnQgeyBtZXRyaWNJbXBlcmlhbEJvb2wgfSBmcm9tICcuLi9uYXYvbmF2TG9naWMnO1xyXG5pbXBvcnQgeyBkYXRlVGltZVN0cmluZyB9IGZyb20gJy4uL2dsb2JhbENvZGUvYXBpJztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlSDEsIGNyZWF0ZVAgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgZ2V0QmlyZHNFeWUgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2dldHRlcnMnO1xyXG5cclxuY29uc3QgY3JlYXRlV2lkZ2V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdignYmlyZHNFeWVXaWRnZXRDb250YWluZXInKTtcclxuICBpZiAobWV0cmljSW1wZXJpYWxCb29sKSB7XHJcbiAgICBjb25zdCBtYWluV2VhdGhlckRlc2NyaXB0aW9uID0gY3JlYXRlSDEoZ2V0TWV0cmljTWFpbldlYXRoZXJEZXNjcmlwdGlvbigpLCAnYmVNYWluV2VhdGhlckRlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCBuYW1lID0gY3JlYXRlUChnZXRNZXRyaWNOYW1lKCksICdiZU5hbWUnKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkYXRlVGltZVN0cmluZztcclxuICAgIGNvbnN0IHRlbXAgPSBjcmVhdGVIMShgJHtnZXRNZXRyaWNUZW1wKCl9IMKwQ2AsICdiZVRlbXAnKTtcclxuICAgIGNvbnN0IHdlYXRoZXJTeW1ib2wgPSBnZXRNZXRyaWNXZWF0aGVyU3ltYm9sKCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKG1haW5XZWF0aGVyRGVzY3JpcHRpb24sIG5hbWUsIGRhdGUsIHRlbXAsIHdlYXRoZXJTeW1ib2wpO1xyXG4gIH0gZWxzZSBpZiAoIW1ldHJpY0ltcGVyaWFsQm9vbCkge1xyXG4gICAgY29uc3QgbWFpbldlYXRoZXJEZXNjcmlwdGlvbiA9IGNyZWF0ZUgxKGdldEltcGVyaWFsTWFpbldlYXRoZXJEZXNjcmlwdGlvbigpLCAnYmVNYWluV2VhdGhlckRlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCBuYW1lID0gY3JlYXRlUChnZXRJbXBlcmlhbE5hbWUoKSwgJ2JlTmFtZScpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRhdGVUaW1lU3RyaW5nO1xyXG4gICAgY29uc3QgdGVtcCA9IGNyZWF0ZUgxKGAke2dldEltcGVyaWFsVGVtcCgpfSDCsEZgLCAnYmVUZW1wJyk7XHJcbiAgICBjb25zdCB3ZWF0aGVyU3ltYm9sID0gZ2V0SW1wZXJpYWxXZWF0aGVyU3ltYm9sKCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKG1haW5XZWF0aGVyRGVzY3JpcHRpb24sIG5hbWUsIGRhdGUsIHRlbXAsIHdlYXRoZXJTeW1ib2wpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyQmlyZHNFeWUoKSB7XHJcbiAgd2hpbGUgKGdldEJpcmRzRXllKCkuZmlyc3RDaGlsZCkgeyBnZXRCaXJkc0V5ZSgpLnJlbW92ZUNoaWxkKGdldEJpcmRzRXllKCkuZmlyc3RDaGlsZCk7IH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmlyZHNFeWUoKSB7XHJcbiAgY2xlYXJCaXJkc0V5ZSgpO1xyXG4gIGdldEJpcmRzRXllKCkuYXBwZW5kKGNyZWF0ZVdpZGdldCgpKTtcclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IHsgY3JlYXRlQmlyZHNFeWUgfTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgbWV0cmljV2VhdGhlck9iamVjdCwgaW1wZXJpYWxXZWF0aGVyT2JqZWN0IH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9hcGknO1xyXG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgZmluZFN5bWJvbCwgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9sb2dpYyc7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNNYWluV2VhdGhlckRlc2NyaXB0aW9uID0gKCkgPT4gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxyXG4gIG1ldHJpY1dlYXRoZXJPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuKTtcclxuY29uc3QgZ2V0SW1wZXJpYWxNYWluV2VhdGhlckRlc2NyaXB0aW9uID0gKCkgPT4gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxyXG4gIGltcGVyaWFsV2VhdGhlck9iamVjdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4pO1xyXG5cclxuY29uc3QgZ2V0TWV0cmljTmFtZSA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3QubmFtZTtcclxuY29uc3QgZ2V0SW1wZXJpYWxOYW1lID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm5hbWU7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNUZW1wID0gKCkgPT4gbWV0cmljV2VhdGhlck9iamVjdC5tYWluLnRlbXA7XHJcbmNvbnN0IGdldEltcGVyaWFsVGVtcCA9ICgpID0+IGltcGVyaWFsV2VhdGhlck9iamVjdC5tYWluLnRlbXA7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNXZWF0aGVyU3ltYm9sID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdignd2VhdGhlclN5bWJvbCcpO1xyXG4gIGRpdi5hcHBlbmQoZmluZFN5bWJvbChgJHttZXRyaWNXZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uaWNvbn1gKSk7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuY29uc3QgZ2V0SW1wZXJpYWxXZWF0aGVyU3ltYm9sID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdignd2VhdGhlclN5bWJvbCcpO1xyXG4gIGRpdi5hcHBlbmQoZmluZFN5bWJvbChgJHtpbXBlcmlhbFdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5pY29ufWApKTtcclxuICByZXR1cm4gZGl2O1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRNZXRyaWNNYWluV2VhdGhlckRlc2NyaXB0aW9uLFxyXG4gIGdldEltcGVyaWFsTWFpbldlYXRoZXJEZXNjcmlwdGlvbixcclxuICBnZXRNZXRyaWNOYW1lLFxyXG4gIGdldEltcGVyaWFsTmFtZSxcclxuICBnZXRNZXRyaWNUZW1wLFxyXG4gIGdldEltcGVyaWFsVGVtcCxcclxuICBnZXRNZXRyaWNXZWF0aGVyU3ltYm9sLFxyXG4gIGdldEltcGVyaWFsV2VhdGhlclN5bWJvbCxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgeyBjcmVhdGVMb2FkaW5nU2NyZWVuIH0gZnJvbSAnLi9lbGVtZW50cyc7XHJcbmltcG9ydCB7IGRyYXcgfSBmcm9tICcuL2xvZ2ljJztcclxuXHJcbmxldCBkaXNwbGF5Rm9ybWF0V2FybmluZyA9IGZhbHNlO1xyXG5sZXQgbGF0TG9uID0gW107XHJcbmxldCBtZXRyaWNXZWF0aGVyT2JqZWN0ID0ge307XHJcbmxldCBpbXBlcmlhbFdlYXRoZXJPYmplY3QgPSB7fTtcclxubGV0IGRhdGVUaW1lU3RyaW5nID0gJyc7XHJcblxyXG5sZXQgbWV0cmljRm9yZWNhc3RPYmplY3QgPSB7fTtcclxubGV0IGltcGVyaWFsRm9yZWNhc3RPYmplY3QgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIHNldEZvcm1hdFdhcm5pbmcoYm9vbCkge1xyXG4gIGRpc3BsYXlGb3JtYXRXYXJuaW5nID0gYm9vbDtcclxuICBjb25zdCBmb3JtYXRXYXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1hdFdhcm5pbmcnKTtcclxuXHJcbiAgaWYgKGRpc3BsYXlGb3JtYXRXYXJuaW5nKSB7XHJcbiAgICBmb3JtYXRXYXJuaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3JtYXRXYXJuaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXQ1RGF5Rm9yZWNhc3QoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZvcmNhc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdExvblswXX0mbG9uPSR7bGF0TG9uWzFdfSZhcHBpZD0yYjQ1ZDIwN2JlNjQzZWFhYzM1MzM5N2RiYjVlY2NjNyZ1bml0cz1tZXRyaWNgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcmNhc3REYXRhID0gYXdhaXQgZm9yY2FzdFJlc3BvbnNlLmpzb24oKTtcclxuICAgIG1ldHJpY0ZvcmVjYXN0T2JqZWN0ID0gZm9yY2FzdERhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JjYXN0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXRMb25bMF19Jmxvbj0ke2xhdExvblsxXX0mYXBwaWQ9MmI0NWQyMDdiZTY0M2VhYWMzNTMzOTdkYmI1ZWNjYzcmdW5pdHM9aW1wZXJpYWxgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcmNhc3REYXRhID0gYXdhaXQgZm9yY2FzdFJlc3BvbnNlLmpzb24oKTtcclxuICAgIGltcGVyaWFsRm9yZWNhc3RPYmplY3QgPSBmb3JjYXN0RGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRlVGltZSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdGltZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdGltZXpvbmUuYWJzdHJhY3RhcGkuY29tL3YxL2N1cnJlbnRfdGltZS8/YXBpX2tleT1hY2U4MGZkNGE5MzY0Mzk2YWY4NzYxMjA3ZmEzMWIzMSZsb2NhdGlvbj0ke21ldHJpY1dlYXRoZXJPYmplY3QuY29vcmQubGF0fSwgJHttZXRyaWNXZWF0aGVyT2JqZWN0LmNvb3JkLmxvbn1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICAgIGNvbnN0IHRpbWVEYXRhID0gYXdhaXQgdGltZVJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lRGF0YS5kYXRldGltZSk7XHJcblxyXG4gICAgY29uc3QgdGltZUFycmF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZyhgZW4tJHttZXRyaWNXZWF0aGVyT2JqZWN0LnN5cy5jb3VudHJ5fWAsIHsgaG91cjEyOiAndHJ1ZScgfSkuc3BsaXQoJywgJyk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRlID0gZGF0ZS50b0xvY2FsZVN0cmluZyhgZW4tJHttZXRyaWNXZWF0aGVyT2JqZWN0LnN5cy5jb3VudHJ5fWAsIG9wdGlvbnMpO1xyXG4gICAgZGF0ZVRpbWVTdHJpbmcgPSBgJHtub3JtYWxpemVkRGF0ZX0gJHt0aW1lQXJyYXlbMV19YDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbWV0cmljUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdExvblswXX0mbG9uPSR7bGF0TG9uWzFdfSZhcHBpZD0yYjQ1ZDIwN2JlNjQzZWFhYzM1MzM5N2RiYjVlY2NjNyZ1bml0cz1tZXRyaWNgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1ldHJpY1dlYXRoZXJEYXRhID0gYXdhaXQgbWV0cmljUmVzcG9uc2UuanNvbigpO1xyXG4gICAgbWV0cmljV2VhdGhlck9iamVjdCA9IG1ldHJpY1dlYXRoZXJEYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgZ2V0V2VhdGhlcigpIE1ldHJpYyBFcnJvcjogJHtlcnJvcn1gKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBpbXBlcmlhbFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRMb25bMF19Jmxvbj0ke2xhdExvblsxXX0mYXBwaWQ9MmI0NWQyMDdiZTY0M2VhYWMzNTMzOTdkYmI1ZWNjYzcmdW5pdHM9aW1wZXJpYWxgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGltcGVyaWFsV2VhdGhlckRhdGEgPSBhd2FpdCBpbXBlcmlhbFJlc3BvbnNlLmpzb24oKTtcclxuICAgIGltcGVyaWFsV2VhdGhlck9iamVjdCA9IGltcGVyaWFsV2VhdGhlckRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGBnZXRXZWF0aGVyKCkgSW1wZXJpYWwgRXJyb3I6ICR7ZXJyb3J9YCk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9SZWdpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hCYXInKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3NlYXJjaEJhci52YWx1ZX0mbGltaXQ9NSZhcHBpZD0yYjQ1ZDIwN2JlNjQzZWFhYzM1MzM5N2RiYjVlY2NjN2AsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXHJcbiAgICApO1xyXG4gICAgY29uc3QgZ2VvRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGxhdExvbiA9IFtnZW9EYXRhWzBdLmxhdCwgZ2VvRGF0YVswXS5sb25dO1xyXG4gICAgc2V0Rm9ybWF0V2FybmluZyhmYWxzZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGBnZXRHZW9SZWdpb24oKSBFcnJvcjogJHtlcnJvcn1gKTtcclxuICAgIHNldEZvcm1hdFdhcm5pbmcodHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjYWxsQVBJKCkge1xyXG4gIGNvbnN0IGxvYWRpbmdPdmVybGF5ID0gY3JlYXRlTG9hZGluZ1NjcmVlbigpO1xyXG4gIGF3YWl0IGdldEdlb1JlZ2lvbigpO1xyXG4gIGF3YWl0IGdldFdlYXRoZXIoKTtcclxuICBhd2FpdCBnZXREYXRlVGltZSgpO1xyXG4gIGF3YWl0IGdldDVEYXlGb3JlY2FzdCgpLmZpbmFsbHkobG9hZGluZ092ZXJsYXkucmVtb3ZlKCkpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNhbGxBUEksXHJcbiAgc2V0Rm9ybWF0V2FybmluZyxcclxuICBkaXNwbGF5Rm9ybWF0V2FybmluZyxcclxuICBsYXRMb24sXHJcbiAgbWV0cmljV2VhdGhlck9iamVjdCxcclxuICBpbXBlcmlhbFdlYXRoZXJPYmplY3QsXHJcbiAgZGF0ZVRpbWVTdHJpbmcsXHJcbiAgbWV0cmljRm9yZWNhc3RPYmplY3QsXHJcbiAgaW1wZXJpYWxGb3JlY2FzdE9iamVjdCxcclxufTtcclxuIiwiaW1wb3J0IHsgZ2V0Q29udGVudCB9IGZyb20gJy4vZ2V0dGVycyc7XHJcblxyXG5jb25zdCBjcmVhdGVGb3JtID0gKGZvcm1DbGFzcyA9ICcnKSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmb3JtQ2xhc3MpO1xyXG4gIHJldHVybiBmb3JtO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTGFiZWwgPSAobGFiZWxUZXh0Q29udGVudCkgPT4ge1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dENvbnRlbnQ7XHJcbiAgcmV0dXJuIGxhYmVsO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSW5wdXQgPSAoaW5wdXRUeXBlID0gJ3RleHQnLCBpbnB1dFJlcXVpcmVkID0gdHJ1ZSwgaW5wdXRQbGFjZUhvbGRlciA9ICcnLCBpbnB1dENsYXNzID0gJycpID0+IHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcclxuICBpbnB1dC5yZXF1aXJlZCA9IGlucHV0UmVxdWlyZWQ7XHJcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSBpbnB1dFBsYWNlSG9sZGVyO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBpbnB1dENsYXNzKTtcclxuICByZXR1cm4gaW5wdXQ7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbnB1dENvbnRhaW5lciA9IChsYWJlbCwgaW5wdXQsIGNvbnRhaW5lckNsYXNzID0gJycpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNvbnRhaW5lckNsYXNzKTtcclxuICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUljb24gPSAoaWNvbk5hbWUpID0+IHtcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICBzcGFuLmlubmVySFRNTCA9IGljb25OYW1lO1xyXG4gIHJldHVybiBzcGFuO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlU3ltYm9sID0gKHN5bWJvbE5hbWUpID0+IHtcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xyXG4gIHNwYW4uaW5uZXJIVE1MID0gc3ltYm9sTmFtZTtcclxuICByZXR1cm4gc3BhbjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChidXR0b25JY29uLCBidXR0b25UZXh0LCBidXR0b25UeXBlID0gJ2J1dHRvbicsIGJ1dHRvbkNsYXNzID0gJycpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24udHlwZSA9IGJ1dHRvblR5cGU7XHJcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBidXR0b25DbGFzcyk7XHJcbiAgYnV0dG9uLmFwcGVuZChjcmVhdGVJY29uKGJ1dHRvbkljb24pLCBidXR0b25UZXh0KTtcclxuICByZXR1cm4gYnV0dG9uO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRGl2ID0gKGRpdkNsYXNzKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBkaXZDbGFzcyk7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUgxID0gKHRleHQsIGgxQ2xhc3MpID0+IHtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaDEuc2V0QXR0cmlidXRlKCdjbGFzcycsIGgxQ2xhc3MpO1xyXG4gIGgxLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgcmV0dXJuIGgxO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUCA9ICh0ZXh0LCBwQ2xhc3MpID0+IHtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAuc2V0QXR0cmlidXRlKCdjbGFzcycsIHBDbGFzcyk7XHJcbiAgcC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gIHJldHVybiBwO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTG9hZGluZ1NjcmVlbiA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVEaXYoJ2xvYWRpbmdPdmVybGF5Jyk7XHJcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGNvbnN0IGxvYWRlciA9IGNyZWF0ZURpdignbG9hZGVyJyk7XHJcbiAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIG92ZXJsYXkuYXBwZW5kKGxvYWRlcik7XHJcbiAgY29udGVudC5hcHBlbmQob3ZlcmxheSk7XHJcblxyXG4gIHJldHVybiBvdmVybGF5O1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVGb3JtLFxyXG4gIGNyZWF0ZUxhYmVsLFxyXG4gIGNyZWF0ZUlucHV0LFxyXG4gIGNyZWF0ZUlucHV0Q29udGFpbmVyLFxyXG4gIGNyZWF0ZUljb24sXHJcbiAgY3JlYXRlU3ltYm9sLFxyXG4gIGNyZWF0ZUJ1dHRvbixcclxuICBjcmVhdGVEaXYsXHJcbiAgY3JlYXRlSDEsXHJcbiAgY3JlYXRlUCxcclxuICBjcmVhdGVMb2FkaW5nU2NyZWVuLFxyXG59O1xyXG4iLCJjb25zdCBnZXRDb250ZW50ID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbmNvbnN0IGdldE5hdiA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKTtcclxuXHJcbmNvbnN0IGdldEJpcmRzRXllID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpcmRzRXllJyk7XHJcblxyXG5jb25zdCBnZXRTdGF0cyA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0cycpO1xyXG5cclxuY29uc3QgZ2V0V2VlayA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrJyk7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldENvbnRlbnQsXHJcbiAgZ2V0TmF2LFxyXG4gIGdldEJpcmRzRXllLFxyXG4gIGdldFN0YXRzLFxyXG4gIGdldFdlZWssXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbmltcG9ydCB7IGNyZWF0ZVN5bWJvbCB9IGZyb20gJy4vZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVCaXJkc0V5ZSB9IGZyb20gJy4uL2JpcmRzRXllL2JpcmRzRXllQ29udGVudCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0YXRzIH0gZnJvbSAnLi4vc3RhdHMvc3RhdHNDb250ZW50JztcclxuaW1wb3J0IHsgY3JlYXRlV2VlayB9IGZyb20gJy4uL3dlZWsvd2Vla0NvbnRlbnQnO1xyXG5pbXBvcnQgeyBtZXRyaWNXZWF0aGVyT2JqZWN0LCBkaXNwbGF5Rm9ybWF0V2FybmluZywgc2V0Rm9ybWF0V2FybmluZyB9IGZyb20gJy4vYXBpJztcclxuaW1wb3J0IHtcclxuICBkMDEsXHJcbiAgbjAxLFxyXG4gIGQwMixcclxuICBuMDIsXHJcbiAgZDAzLFxyXG4gIG4wMyxcclxuICBkMDQsXHJcbiAgbjA0LFxyXG4gIGQwOSxcclxuICBuMDksXHJcbiAgZDEwLFxyXG4gIG4xMCxcclxuICBkMTEsXHJcbiAgbjExLFxyXG4gIGQxMyxcclxuICBuMTMsXHJcbiAgZDUwLFxyXG4gIG41MCxcclxufSBmcm9tICcuL21lZGlhJztcclxuXHJcbmNvbnN0IGZpbmRTeW1ib2wgPSAod2VhdGhlckljb25Db2RlKSA9PiB7XHJcbiAgbGV0IHN5bWJvbE5hbWUgPSAnJztcclxuICBzd2l0Y2ggKHdlYXRoZXJJY29uQ29kZSkge1xyXG4gICAgY2FzZSAnMDFkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdjbGVhcl9kYXknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAxbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnY2xlYXJfbmlnaHQnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAyZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncGFydGx5X2Nsb3VkeV9kYXknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAybic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncGFydGx5X2Nsb3VkeV9uaWdodCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDNkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdjbG91ZHknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAzbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnY2xvdWR5JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwNGQnOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2ZpbHRlcl9kcmFtYSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDRuJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdmaWx0ZXJfZHJhbWEnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA5ZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA5bic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEwZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEwbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAncmFpbnknO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzExZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAndGh1bmRlcnN0b3JtJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxMW4nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ3RodW5kZXJzdG9ybSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTNkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdhY191bml0JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxM24nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2FjX3VuaXQnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzUwZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnZm9nZ3knO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzUwbic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnZm9nZ3knO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJTlZBTElEX1NXSVRDSF9FTlRSWSB8IGdldE1ldHJpY1dlYXRoZXJJY29uKCkgfCBiaXJkc0V5ZUxvZ2ljLmpzJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjcmVhdGVTeW1ib2woc3ltYm9sTmFtZSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCR0ltYWdlKCkge1xyXG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwMX0nKWA7XHJcblxyXG4gIHN3aXRjaCAoYCR7bWV0cmljV2VhdGhlck9iamVjdC53ZWF0aGVyWzBdLmljb259YCkge1xyXG4gICAgY2FzZSAnMDFkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwMX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDFuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24wMX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDJkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwMn0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDJuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24wMn0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDNkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwM30nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDNuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24wM30nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDRkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwNH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDRuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24wNH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDlkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QwOX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDluJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24wOX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTBkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QxMH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTBuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24xMH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTFkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QxMX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTFuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24xMX0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTNkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2QxM30nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTNuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke24xM30nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnNTBkJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2Q1MH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnNTBuJzpcclxuICAgICAgcm9vdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke241MH0nKWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgY29uc29sZS5sb2coJ0lOVkFMSURfU1dJVENIX0VOVFJZIHwgZnVuY3Rpb24gY2hhbmdlQkdJbWFnZSgpIHwgd2Vla0xvZ2ljLmpzJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlRm9ybWF0V2FybmluZygpIHtcclxuICBpZiAoIWRpc3BsYXlGb3JtYXRXYXJuaW5nKSB7IHNldEZvcm1hdFdhcm5pbmcoZmFsc2UpOyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcclxuICBjb25zdCBwb3NpdGlvbiA9IHN0cmluZy5zZWFyY2goJyAnKTtcclxuICBsZXQgdGVtcFN0cmluZyA9ICcnO1xyXG4gIGlmIChwb3NpdGlvbiAhPT0gLTEpIHtcclxuICAgIGNvbnN0IHN0cmluZ0FycmF5ID0gc3RyaW5nLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB0ZXh0ID0gc3RyaW5nQXJyYXlbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmdBcnJheVtpXS5zbGljZSgxKTtcclxuICAgICAgdGVtcFN0cmluZyArPSBgJHt0ZXh0fSBgO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZW1wU3RyaW5nID0gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRlbXBTdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgY3JlYXRlQmlyZHNFeWUoKTtcclxuICBjcmVhdGVTdGF0cygpO1xyXG4gIGNyZWF0ZVdlZWsoKTtcclxuICBoaWRlRm9ybWF0V2FybmluZygpO1xyXG4gIGNoYW5nZUJHSW1hZ2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVkcmF3U3RhdHMoKSB7XHJcbiAgY3JlYXRlQmlyZHNFeWUoKTtcclxuICBjcmVhdGVTdGF0cygpO1xyXG4gIGNyZWF0ZVdlZWsoKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBmaW5kU3ltYm9sLCBkcmF3LCByZWRyYXdTdGF0cywgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLFxyXG59O1xyXG4iLCJpbXBvcnQgZDAxIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDFkLmpwZyc7XHJcbmltcG9ydCBuMDEgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wMW4uanBnJztcclxuaW1wb3J0IGQwMiBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzAyZC5qcGcnO1xyXG5pbXBvcnQgbjAyIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDJuLmpwZyc7XHJcbmltcG9ydCBkMDMgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wM2QuanBnJztcclxuaW1wb3J0IG4wMyBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzAzbi5qcGcnO1xyXG5pbXBvcnQgZDA0IGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDRkLmpwZyc7XHJcbmltcG9ydCBuMDQgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wNG4uanBnJztcclxuaW1wb3J0IGQwOSBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzA5ZC5qcGcnO1xyXG5pbXBvcnQgbjA5IGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDluLmpwZyc7XHJcbmltcG9ydCBkMTAgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8xMGQuanBnJztcclxuaW1wb3J0IG4xMCBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzEwbi5qcGcnO1xyXG5pbXBvcnQgZDExIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMTFkLmpwZyc7XHJcbmltcG9ydCBuMTEgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8xMW4uanBnJztcclxuaW1wb3J0IGQxMyBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzEzZC5qcGcnO1xyXG5pbXBvcnQgbjEzIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMTNuLmpwZyc7XHJcbmltcG9ydCBkNTAgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy81MGQuanBnJztcclxuaW1wb3J0IG41MCBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzUwbi5qcGcnO1xyXG5cclxuZXhwb3J0IHtcclxuICBkMDEsXHJcbiAgbjAxLFxyXG4gIGQwMixcclxuICBuMDIsXHJcbiAgZDAzLFxyXG4gIG4wMyxcclxuICBkMDQsXHJcbiAgbjA0LFxyXG4gIGQwOSxcclxuICBuMDksXHJcbiAgZDEwLFxyXG4gIG4xMCxcclxuICBkMTEsXHJcbiAgbjExLFxyXG4gIGQxMyxcclxuICBuMTMsXHJcbiAgZDUwLFxyXG4gIG41MCxcclxufTtcclxuIiwiaW1wb3J0IHsgZ2V0Q29udGVudCB9IGZyb20gJy4uL2dsb2JhbENvZGUvZ2V0dGVycyc7XHJcblxyXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2Jyk7XHJcbiAgcmV0dXJuIG5hdjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUJpcmRzRXllID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJpcmRzRXllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYmlyZHNFeWUuc2V0QXR0cmlidXRlKCdpZCcsICdiaXJkc0V5ZScpO1xyXG4gIHJldHVybiBiaXJkc0V5ZTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUdhcCA9ICgpID0+IHtcclxuICBjb25zdCBnYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBnYXAuc2V0QXR0cmlidXRlKCdpZCcsICdnYXAnKTtcclxuICByZXR1cm4gZ2FwO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlU3RhdHMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzdGF0cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXRzJyk7XHJcbiAgcmV0dXJuIHN0YXRzO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlV2VlayA9ICgpID0+IHtcclxuICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2Vlay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlZWsnKTtcclxuICByZXR1cm4gd2VlaztcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoKSB7XHJcbiAgZ2V0Q29udGVudCgpLmFwcGVuZChcclxuICAgIGNyZWF0ZU5hdigpLFxyXG4gICAgY3JlYXRlQmlyZHNFeWUoKSxcclxuICAgIGNyZWF0ZUdhcCgpLFxyXG4gICAgY3JlYXRlU3RhdHMoKSxcclxuICAgIGNyZWF0ZVdlZWsoKSxcclxuICApO1xyXG59XHJcblxyXG5jcmVhdGVHcmlkKCk7XHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlRGl2LFxyXG4gIGNyZWF0ZUlucHV0LFxyXG4gIGNyZWF0ZUljb24sXHJcbiAgY3JlYXRlQnV0dG9uLFxyXG4gIGNyZWF0ZVAsXHJcbn0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9lbGVtZW50cyc7XHJcbmltcG9ydCB7IGdldE5hdiB9IGZyb20gJy4uL2dsb2JhbENvZGUvZ2V0dGVycyc7XHJcbmltcG9ydCB7IHRvZ2dsZU1ldHJpY0ltcGVyaWFsQm9vbCB9IGZyb20gJy4vbmF2TG9naWMnO1xyXG5pbXBvcnQgeyBjYWxsQVBJIH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9hcGknO1xyXG5cclxuY29uc3QgY3JlYXRlTG9nbyA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChjcmVhdGVJY29uKCdzdG9ybScpLCAnaVdlYXRoZXInKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlU2VhcmNoQmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdignc2VhcmNoRm9ybScpO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc2VhcmNoJywgJycsICdidXR0b24nLCAnc3VibWl0QnV0dG9uJyk7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbGxBUEkpO1xyXG4gIGRpdi5hcHBlbmQoY3JlYXRlSW5wdXQoJ3RleHQnLCB0cnVlLCAnU2VhcmNoIGxvY2F0aW9uLi4uJywgJ3NlYXJjaEJhcicpLCBidXR0b24pO1xyXG4gIHJldHVybiBkaXY7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xyXG4gIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHsgY2FsbEFQSSgpOyB9XHJcbn0pO1xyXG5cclxuY29uc3QgY3JlYXRlRm9ybWF0V2FybmluZyA9ICgpID0+IHtcclxuICBjb25zdCB0ZXh0ID0gY3JlYXRlUCgnUGxlYXNlIGZvcm1hdCB5b3VyIHNlYXJjaCB0aGUgZm9sbG93aW5nIHdheXM6IDxicj4ge1NhbnRpYWdvKGNpdHkpLCBDTChjb3VudHJ5IGNvZGUpfSwge0phY2tzb252aWxsZShjaXR5KSwgRmxvcmlkYShzdGF0ZSl9LCB7SW5kaWFuYXBvbGlze2NpdHl9fSwge0NoaW5hIChjb3VudHJ5KX0nLCAnZm9ybWF0V2FybmluZycpO1xyXG4gIHJldHVybiB0ZXh0O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTWV0cmljSW1wZXJpYWxCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCcnLCAnRGlzcGxheSDCsEMnLCAnYnV0dG9uJywgJ2Rpc3BsYXlNZXRyaWNJbXBlcmlhbCcpO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0b2dnbGVNZXRyaWNJbXBlcmlhbEJvb2wpO1xyXG4gIHJldHVybiBidXR0b247XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgZ2V0TmF2KCkuYXBwZW5kKFxyXG4gICAgY3JlYXRlTG9nbygpLFxyXG4gICAgY3JlYXRlU2VhcmNoQmFyKCksXHJcbiAgICBjcmVhdGVGb3JtYXRXYXJuaW5nKCksXHJcbiAgICBjcmVhdGVNZXRyaWNJbXBlcmlhbEJ1dHRvbigpLFxyXG4gICk7XHJcbn1cclxuXHJcbmNyZWF0ZU5hdigpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcblxyXG5pbXBvcnQgeyByZWRyYXdTdGF0cyB9IGZyb20gJy4uL2dsb2JhbENvZGUvbG9naWMnO1xyXG5cclxubGV0IG1ldHJpY0ltcGVyaWFsQm9vbCA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNZXRyaWNJbXBlcmlhbEJvb2woKSB7XHJcbiAgbWV0cmljSW1wZXJpYWxCb29sID0gIW1ldHJpY0ltcGVyaWFsQm9vbDtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheU1ldHJpY0ltcGVyaWFsJyk7XHJcblxyXG4gIGlmIChtZXRyaWNJbXBlcmlhbEJvb2wpIHsgYnV0dG9uLmlubmVySFRNTCA9ICdEaXNwbGF5IMKwQyc7IH0gZWxzZSB7XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gJ0Rpc3BsYXkgwrBGJztcclxuICB9XHJcbiAgcmVkcmF3U3RhdHMoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgdG9nZ2xlTWV0cmljSW1wZXJpYWxCb29sLCBtZXRyaWNJbXBlcmlhbEJvb2wgfTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IHsgZ2V0U3RhdHMgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2dldHRlcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRNZXRyaWNGZWVsc0xpa2UsXHJcbiAgZ2V0SW1wZXJpYWxGZWVsc0xpa2UsXHJcbiAgZ2V0TWV0cmljSHVtaWRpdHksXHJcbiAgZ2V0SW1wZXJpYWxIdW1pZGl0eSxcclxuICBnZXRNZXRyaWNXaW5kU3BlZWQsXHJcbiAgZ2V0SW1wZXJpYWxXaW5kU3BlZWQsXHJcbn0gZnJvbSAnLi9zdGF0c0xvZ2ljJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlRGl2LCBjcmVhdGVIMSwgY3JlYXRlUCwgY3JlYXRlU3ltYm9sLFxyXG59IGZyb20gJy4uL2dsb2JhbENvZGUvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBtZXRyaWNJbXBlcmlhbEJvb2wgfSBmcm9tICcuLi9uYXYvbmF2TG9naWMnO1xyXG5cclxuY29uc3QgY3JlYXRlRmVlbHNMaWtlQ29udGFpbmVyID0gKG1ldHJpY0ltcGVyaWFsKSA9PiB7XHJcbiAgY29uc3QgZmVlbHNMaWtlQ29udGFpbmVyID0gY3JlYXRlRGl2KCdzdGF0c0l0ZW0nKTtcclxuICBjb25zdCBmZWVsc0xpa2VUZXh0ID0gY3JlYXRlRGl2KCdzdGF0c1RleHQnKTtcclxuICBjb25zdCBmZWVsc0xpa2VQID0gY3JlYXRlUCgnRmVlbHMgTGlrZScpO1xyXG4gIGxldCBmZWVsc0xpa2VIMTtcclxuICBpZiAobWV0cmljSW1wZXJpYWwpIHsgZmVlbHNMaWtlSDEgPSBjcmVhdGVIMShgJHtnZXRNZXRyaWNGZWVsc0xpa2UoKX0gwrBDYCk7IH0gZWxzZSBpZiAoIW1ldHJpY0ltcGVyaWFsKSB7IGZlZWxzTGlrZUgxID0gY3JlYXRlSDEoYCR7Z2V0SW1wZXJpYWxGZWVsc0xpa2UoKX0gwrBGYCk7IH1cclxuICBmZWVsc0xpa2VUZXh0LmFwcGVuZChmZWVsc0xpa2VQLCBmZWVsc0xpa2VIMSk7XHJcbiAgZmVlbHNMaWtlQ29udGFpbmVyLmFwcGVuZChjcmVhdGVTeW1ib2woJ3RoZXJtb3N0YXQnKSwgZmVlbHNMaWtlVGV4dCk7XHJcbiAgcmV0dXJuIGZlZWxzTGlrZUNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUh1bWlkaXR5Q29udGFpbmVyID0gKG1ldHJpY0ltcGVyaWFsKSA9PiB7XHJcbiAgY29uc3QgaHVtaWRpdHlDb250YWluZXIgPSBjcmVhdGVEaXYoJ3N0YXRzSXRlbScpO1xyXG4gIGNvbnN0IGh1bWlkaXR5VGV4dCA9IGNyZWF0ZURpdignc3RhdHNUZXh0Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHlQID0gY3JlYXRlUCgnSHVtaWRpdHknKTtcclxuICBsZXQgaHVtaWRpdHlIMTtcclxuICBpZiAobWV0cmljSW1wZXJpYWwpIHsgaHVtaWRpdHlIMSA9IGNyZWF0ZUgxKGAke2dldE1ldHJpY0h1bWlkaXR5KCl9ICVgKTsgfSBlbHNlIGlmICghbWV0cmljSW1wZXJpYWwpIHsgaHVtaWRpdHlIMSA9IGNyZWF0ZUgxKGAke2dldEltcGVyaWFsSHVtaWRpdHkoKX0gJWApOyB9XHJcbiAgaHVtaWRpdHlUZXh0LmFwcGVuZChodW1pZGl0eVAsIGh1bWlkaXR5SDEpO1xyXG4gIGh1bWlkaXR5Q29udGFpbmVyLmFwcGVuZChjcmVhdGVTeW1ib2woJ2h1bWlkaXR5X21pZCcpLCBodW1pZGl0eVRleHQpO1xyXG4gIHJldHVybiBodW1pZGl0eUNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVdpbmRTcGVlZENvbnRhaW5lciA9IChtZXRyaWNJbXBlcmlhbCkgPT4ge1xyXG4gIGNvbnN0IHdpbmRTcGVlZENvbnRhaW5lciA9IGNyZWF0ZURpdignc3RhdHNJdGVtJyk7XHJcbiAgY29uc3Qgd2luZFNwZWVkVGV4dCA9IGNyZWF0ZURpdignc3RhdHNUZXh0Jyk7XHJcbiAgY29uc3Qgd2luZFNwZWVkUCA9IGNyZWF0ZVAoJ1dpbmQgU3BlZWQnKTtcclxuICBsZXQgd2luZFNwZWVkSDE7XHJcbiAgaWYgKG1ldHJpY0ltcGVyaWFsKSB7IHdpbmRTcGVlZEgxID0gY3JlYXRlSDEoYCR7Z2V0TWV0cmljV2luZFNwZWVkKCl9IGttL2hgKTsgfSBlbHNlIGlmICghbWV0cmljSW1wZXJpYWwpIHsgd2luZFNwZWVkSDEgPSBjcmVhdGVIMShgJHtnZXRJbXBlcmlhbFdpbmRTcGVlZCgpfSBtcGhgKTsgfVxyXG4gIHdpbmRTcGVlZFRleHQuYXBwZW5kKHdpbmRTcGVlZFAsIHdpbmRTcGVlZEgxKTtcclxuICB3aW5kU3BlZWRDb250YWluZXIuYXBwZW5kKGNyZWF0ZVN5bWJvbCgnYWlyJyksIHdpbmRTcGVlZFRleHQpO1xyXG4gIHJldHVybiB3aW5kU3BlZWRDb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVXaWRnZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KCdzdGF0c1dpZGdldENvbnRhaW5lcicpO1xyXG4gIGlmIChtZXRyaWNJbXBlcmlhbEJvb2wpIHtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICAgIGNyZWF0ZUZlZWxzTGlrZUNvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgICBjcmVhdGVIdW1pZGl0eUNvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgICBjcmVhdGVXaW5kU3BlZWRDb250YWluZXIobWV0cmljSW1wZXJpYWxCb29sKSxcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmICghbWV0cmljSW1wZXJpYWxCb29sKSB7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKFxyXG4gICAgICBjcmVhdGVGZWVsc0xpa2VDb250YWluZXIobWV0cmljSW1wZXJpYWxCb29sKSxcclxuICAgICAgY3JlYXRlSHVtaWRpdHlDb250YWluZXIobWV0cmljSW1wZXJpYWxCb29sKSxcclxuICAgICAgY3JlYXRlV2luZFNwZWVkQ29udGFpbmVyKG1ldHJpY0ltcGVyaWFsQm9vbCksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyU3RhdHMoKSB7XHJcbiAgd2hpbGUgKGdldFN0YXRzKCkuZmlyc3RDaGlsZCkgeyBnZXRTdGF0cygpLnJlbW92ZUNoaWxkKGdldFN0YXRzKCkuZmlyc3RDaGlsZCk7IH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RhdHMoKSB7XHJcbiAgY2xlYXJTdGF0cygpO1xyXG4gIGdldFN0YXRzKCkuYXBwZW5kKGNyZWF0ZVdpZGdldCgpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlU3RhdHMgfTtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBtZXRyaWNXZWF0aGVyT2JqZWN0LCBpbXBlcmlhbFdlYXRoZXJPYmplY3QgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2FwaSc7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNGZWVsc0xpa2UgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4uZmVlbHNfbGlrZTtcclxuXHJcbmNvbnN0IGdldEltcGVyaWFsRmVlbHNMaWtlID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4uZmVlbHNfbGlrZTtcclxuXHJcbmNvbnN0IGdldE1ldHJpY0h1bWlkaXR5ID0gKCkgPT4gbWV0cmljV2VhdGhlck9iamVjdC5tYWluLmh1bWlkaXR5O1xyXG5cclxuY29uc3QgZ2V0SW1wZXJpYWxIdW1pZGl0eSA9ICgpID0+IGltcGVyaWFsV2VhdGhlck9iamVjdC5tYWluLmh1bWlkaXR5O1xyXG5cclxuY29uc3QgZ2V0TWV0cmljUHJlc3N1cmUgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4ucHJlc3N1cmU7XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbFByZXNzdXJlID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4ucHJlc3N1cmU7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNUZW1wTWF4ID0gKCkgPT4gbWV0cmljV2VhdGhlck9iamVjdC5tYWluLnRlbXBfbWF4O1xyXG5cclxuY29uc3QgZ2V0SW1wZXJpYWxUZW1wTWF4ID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9tYXg7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNUZW1wTWluID0gKCkgPT4gbWV0cmljV2VhdGhlck9iamVjdC5tYWluLnRlbXBfbWluO1xyXG5cclxuY29uc3QgZ2V0SW1wZXJpYWxUZW1wTWluID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9taW47XHJcblxyXG5jb25zdCBnZXRNZXRyaWNXaW5kU3BlZWQgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0LndpbmQuc3BlZWQ7XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbFdpbmRTcGVlZCA9ICgpID0+IGltcGVyaWFsV2VhdGhlck9iamVjdC53aW5kLnNwZWVkO1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRNZXRyaWNGZWVsc0xpa2UsXHJcbiAgZ2V0SW1wZXJpYWxGZWVsc0xpa2UsXHJcbiAgZ2V0TWV0cmljSHVtaWRpdHksXHJcbiAgZ2V0SW1wZXJpYWxIdW1pZGl0eSxcclxuICBnZXRNZXRyaWNQcmVzc3VyZSxcclxuICBnZXRJbXBlcmlhbFByZXNzdXJlLFxyXG4gIGdldE1ldHJpY1RlbXBNYXgsXHJcbiAgZ2V0SW1wZXJpYWxUZW1wTWF4LFxyXG4gIGdldE1ldHJpY1RlbXBNaW4sXHJcbiAgZ2V0SW1wZXJpYWxUZW1wTWluLFxyXG4gIGdldE1ldHJpY1dpbmRTcGVlZCxcclxuICBnZXRJbXBlcmlhbFdpbmRTcGVlZCxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IHsgbWV0cmljRm9yZWNhc3RPYmplY3QsIGltcGVyaWFsRm9yZWNhc3RPYmplY3QgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2FwaSc7XHJcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tICcuLi9nbG9iYWxDb2RlL2dldHRlcnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVEaXYsIGNyZWF0ZVAsIGNyZWF0ZUgxIH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9lbGVtZW50cyc7XHJcbmltcG9ydCB7IG1ldHJpY0ltcGVyaWFsQm9vbCB9IGZyb20gJy4uL25hdi9uYXZMb2dpYyc7XHJcbmltcG9ydCB7IGZpbmRTeW1ib2wsIGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4uL2dsb2JhbENvZGUvbG9naWMnO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlVGltZSB9IGZyb20gJy4vd2Vla0xvZ2ljJztcclxuXHJcbmNvbnN0IGNyZWF0ZU1ldHJpY1dlZWtJdGVtcyA9ICh3ZWVrV2lkZ2V0Q29udGFpbmVyKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXRyaWNGb3JlY2FzdE9iamVjdC5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCB3ZWVrSXRlbUNvbnRhaW5lciA9IGNyZWF0ZURpdignd2Vla0l0ZW0nKTtcclxuICAgIGNvbnN0IHRpbWVEYXRlQXJyYXkgPSBmb3JtYXREYXRlVGltZShpKTtcclxuICAgIGNvbnN0IGRheSA9IGNyZWF0ZVAoYCR7dGltZURhdGVBcnJheVswXX1gLCAnJyk7XHJcbiAgICBjb25zdCB0aW1lID0gY3JlYXRlUChgJHt0aW1lRGF0ZUFycmF5WzFdfSAke3RpbWVEYXRlQXJyYXlbMl19YCwgJycpO1xyXG4gICAgY29uc3QgdGVtcCA9IGNyZWF0ZUgxKGAke21ldHJpY0ZvcmVjYXN0T2JqZWN0Lmxpc3RbaV0ubWFpbi50ZW1wfSDCsENgLCAnJyk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZVAoXHJcbiAgICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihcclxuICAgICAgICBtZXRyaWNGb3JlY2FzdE9iamVjdC5saXN0W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gICAgd2Vla0l0ZW1Db250YWluZXIuYXBwZW5kKFxyXG4gICAgICBkYXksXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHRlbXAsXHJcbiAgICAgIGZpbmRTeW1ib2wobWV0cmljRm9yZWNhc3RPYmplY3QubGlzdFtpXS53ZWF0aGVyWzBdLmljb24pLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICk7XHJcbiAgICB3ZWVrV2lkZ2V0Q29udGFpbmVyLmFwcGVuZCh3ZWVrSXRlbUNvbnRhaW5lcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSW1wZXJpYWxXZWVrSXRlbXMgPSAod2Vla1dpZGdldENvbnRhaW5lcikgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1wZXJpYWxGb3JlY2FzdE9iamVjdC5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCB3ZWVrSXRlbUNvbnRhaW5lciA9IGNyZWF0ZURpdignd2Vla0l0ZW0nKTtcclxuICAgIGNvbnN0IHRpbWVEYXRlQXJyYXkgPSBmb3JtYXREYXRlVGltZShpKTtcclxuICAgIGNvbnN0IGRheSA9IGNyZWF0ZVAoYCR7dGltZURhdGVBcnJheVswXX1gLCAnJyk7XHJcbiAgICBjb25zdCB0aW1lID0gY3JlYXRlUChgJHt0aW1lRGF0ZUFycmF5WzFdfSAke3RpbWVEYXRlQXJyYXlbMl19YCwgJycpO1xyXG4gICAgY29uc3QgdGVtcCA9IGNyZWF0ZUgxKGAke2ltcGVyaWFsRm9yZWNhc3RPYmplY3QubGlzdFtpXS5tYWluLnRlbXB9IMKwRmAsICcnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlUChcclxuICAgICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxyXG4gICAgICAgIGltcGVyaWFsRm9yZWNhc3RPYmplY3QubGlzdFtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICAgIHdlZWtJdGVtQ29udGFpbmVyLmFwcGVuZChcclxuICAgICAgZGF5LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICB0ZW1wLFxyXG4gICAgICBmaW5kU3ltYm9sKGltcGVyaWFsRm9yZWNhc3RPYmplY3QubGlzdFtpXS53ZWF0aGVyWzBdLmljb24pLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICk7XHJcblxyXG4gICAgd2Vla1dpZGdldENvbnRhaW5lci5hcHBlbmQod2Vla0l0ZW1Db250YWluZXIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVdpZGdldCA9ICgpID0+IHtcclxuICBjb25zdCB3ZWVrV2lkZ2V0Q29udGFpbmVyID0gY3JlYXRlRGl2KCd3ZWVrV2lkZ2V0Q29udGFpbmVyJyk7XHJcbiAgaWYgKG1ldHJpY0ltcGVyaWFsQm9vbCkge1xyXG4gICAgY3JlYXRlTWV0cmljV2Vla0l0ZW1zKHdlZWtXaWRnZXRDb250YWluZXIpO1xyXG4gIH0gZWxzZSBpZiAoIW1ldHJpY0ltcGVyaWFsQm9vbCkge1xyXG4gICAgY3JlYXRlSW1wZXJpYWxXZWVrSXRlbXMod2Vla1dpZGdldENvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2Vla1dpZGdldENvbnRhaW5lcjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyV2VlaygpIHtcclxuICB3aGlsZSAoZ2V0V2VlaygpLmZpcnN0Q2hpbGQpIHsgZ2V0V2VlaygpLnJlbW92ZUNoaWxkKGdldFdlZWsoKS5maXJzdENoaWxkKTsgfVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUaXRsZSA9ICgpID0+IHtcclxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUgxKCc1LURheSBGb3JlY2FzdCcsICcnKTtcclxuXHJcbiAgcmV0dXJuIHRpdGxlO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2VlaygpIHtcclxuICBjbGVhcldlZWsoKTtcclxuICBnZXRXZWVrKCkuYXBwZW5kKGNyZWF0ZVRpdGxlKCksIGNyZWF0ZVdpZGdldCgpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlV2VlayB9O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCB7IG1ldHJpY0ZvcmVjYXN0T2JqZWN0IH0gZnJvbSAnLi4vZ2xvYmFsQ29kZS9hcGknO1xyXG5cclxuY29uc3QgZm9ybWF0RGF0ZVRpbWUgPSAoaW5kZXgpID0+IHtcclxuICBjb25zdCB0aW1lT3B0aW9ucyA9IHtcclxuICAgIGhvdXIxMjogJ3RydWUnLFxyXG4gICAgdGltZVN0eWxlOiAnc2hvcnQnLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGVPcHRpb25zID0ge1xyXG4gICAgd2Vla2RheTogJ2xvbmcnLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShtZXRyaWNGb3JlY2FzdE9iamVjdC5saXN0W2luZGV4XS5kdF90eHQpO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWREYXRlID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoYGVuLSR7bWV0cmljRm9yZWNhc3RPYmplY3QuY2l0eS5jb3VudHJ5fWAsIGRhdGVPcHRpb25zKTtcclxuICBjb25zdCBkYXRlQXJyYXkgPSBub3JtYWxpemVkRGF0ZS5zcGxpdCgnICcpO1xyXG4gIGxldCBub3JtYWxpemVkVGltZSA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKGBlbi0ke21ldHJpY0ZvcmVjYXN0T2JqZWN0LmNpdHkuY291bnRyeX1gLCB0aW1lT3B0aW9ucyk7XHJcblxyXG4gIGlmIChub3JtYWxpemVkVGltZS5jaGFyQXQoMCkgPT09ICcwJyAmJiBub3JtYWxpemVkVGltZS5jaGFyQXQoMSkgPT09ICcwJykge1xyXG4gICAgY29uc3Qgc2xpY2VkU3RyaW5nID0gbm9ybWFsaXplZFRpbWUuc2xpY2UoMiwgOCk7XHJcbiAgICBub3JtYWxpemVkVGltZSA9IGAxMiR7c2xpY2VkU3RyaW5nfWA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdTdHJpbmcgPSBgJHtkYXRlQXJyYXlbMF19ICR7bm9ybWFsaXplZFRpbWV9YDtcclxuICBjb25zdCBzdHJpbmdBcnJheSA9IG5ld1N0cmluZy5zcGxpdCgnICcpO1xyXG4gIHJldHVybiBzdHJpbmdBcnJheTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGZvcm1hdERhdGVUaW1lIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi4vZ3JpZC9jcmVhdGVHcmlkJztcclxuaW1wb3J0ICcuLi9uYXYvbmF2Q29udGVudCc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==