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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"Lato\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}\r\n\r\n.material-symbols-outlined {\r\n    font-family: 'Material Symbols Outlined';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 50px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n}\r\n\r\n#bgOverlay{\r\n    position: flex;\r\n    background: rgba(0, 0, 0, .7);\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n}\r\n\r\n:root {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") ;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n::placeholder {\r\n    color: rgb(0, 145, 200);\r\n    opacity: 1;\r\n    font-weight: bolder;\r\n}\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: \"Lato\";\r\n    color: white;\r\n}\r\n\r\nh1{\r\n    font-size: 25px;\r\n}\r\n\r\nbutton,\r\nbutton>span {\r\n    color: white;\r\n    transition: .75s;\r\n}\r\n\r\nbutton:hover>span {\r\n    color: rgb(0, 145, 200);\r\n    transform: scale(1.1);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr 1fr;\r\n    grid-template-rows: 1fr 2fr 2fr;\r\n    grid-template-areas:\r\n        \"nav nav nav\"\r\n        \"birdsEye gap stats\"\r\n        \"week week week\"\r\n    ;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n    max-width: 100vw;\r\n    max-width: 100vh;\r\n}\r\n\r\n#nav {\r\n    grid-area: nav;\r\n    /* background: rgb(36, 41, 46); */\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 20px;\r\n}\r\n\r\n#logo {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 10px;\r\n    font-size: 30px;\r\n    transition: .75s;\r\n}\r\n\r\n#logo>span {\r\n    font-size: 35px;\r\n}\r\n\r\n#logo:hover,\r\n#logo:hover>span {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    width: 25px;\r\n    height: 25px;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n}\r\n\r\n.searchForm>input {\r\n    border: 1px solid black;\r\n    transition: .75s;\r\n}\r\n\r\n.searchForm>input:hover,\r\n.searchForm>input:focus {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.searchForm>input,\r\n.searchForm>input:focus {\r\n    background: transparent;\r\n    border-top-style: hidden;\r\n    border-right-style: hidden;\r\n    border-left-style: hidden;\r\n    outline: none;\r\n}\r\n\r\n.displayMetricImperial {\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n    transition: .75s;\r\n    font-weight: bolder;\r\n}\r\n\r\n.displayMetricImperial:hover {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n    font-weight: bolder;\r\n}\r\n\r\n#birdsEye {\r\n    grid-area: birdsEye;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    /* background: rgb(36, 41, 46); */\r\n}\r\n\r\n.birdsEyeWidgetContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.weatherIcon {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}\r\n\r\n#gap {\r\n    grid-area: gap;\r\n    /* background: rgb(36, 41, 46); */\r\n}\r\n\r\n#stats {\r\n    grid-area: stats;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    /* background: rgb(36, 41, 46); */\r\n}\r\n\r\n.statsWidgetContainer{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.statsItem {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.statsText {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#week {\r\n    grid-area: week;\r\n    /* background: rgb(36, 41, 46); */\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap:20px;\r\n    padding: 20px;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n.weekWidgetContainer{\r\n    display: flex;\r\n    max-width: 90vw;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    padding: 20px;\r\n    gap: 20px;\r\n    overflow: auto;\r\n}\r\n\r\n.weekItem{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    min-width: 200px;\r\n    min-height: 200px;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAA4C;AAChD;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,wBAAwB;IACxB,qBAAqB;IACrB,cAAc;IACd,oBAAoB;IACpB,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;;IAEd,qCAAqC;IACrC,mCAAmC;IACnC,mCAAmC;IACnC,kCAAkC;;IAElC,yBAAyB;IACzB,kCAAkC;;IAElC,oBAAoB;IACpB,6BAA6B;AACjC;;AAEA;IACI,wCAAwC;IACxC,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,wBAAwB;IACxB,qBAAqB;IACrB,cAAc;IACd,oBAAoB;IACpB,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,6BAA6B;IAC7B,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;AAClC;;AAEA;IACI,0DAA2D;IAC3D,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,+BAA+B;IAC/B;;;;IAIA;IACA,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;IAC1B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,4BAA4B;IAC5B,0BAA0B;IAC1B,SAAS;IACT,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,SAAS;IACT,kBAAkB;IAClB,uBAAuB;IACvB,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;;IAEI,uBAAuB;IACvB,wBAAwB;IACxB,0BAA0B;IAC1B,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,6BAA6B;IAC7B,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,kCAAkC;IAClC,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,kCAAkC;IAClC,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,4BAA4B;IAC5B,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,iCAAiC;AACrC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,kCAAkC;IAClC,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,kCAAkC;IAClC,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,oCAAoC;IACpC,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,oCAAoC;IACpC,kCAAkC;AACtC;;AAEA;IACI,eAAe;IACf,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;IAC1B,QAAQ;IACR,aAAa;IACb,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,qBAAqB;IACrB,oCAAoC;IACpC,kCAAkC;IAClC,aAAa;IACb,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,iBAAiB;IACjB,4BAA4B;IAC5B,0BAA0B;AAC9B","sourcesContent":["@font-face {\r\n    font-family: \"Lato\";\r\n    src: url(\"../Resources/Lato/Lato-Light.ttf\");\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}\r\n\r\n.material-symbols-outlined {\r\n    font-family: 'Material Symbols Outlined';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 50px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n}\r\n\r\n#bgOverlay{\r\n    position: flex;\r\n    background: rgba(0, 0, 0, .7);\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n}\r\n\r\n:root {\r\n    background-image: url('../resources/images/preSearch.jpg') ;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n::placeholder {\r\n    color: rgb(0, 145, 200);\r\n    opacity: 1;\r\n    font-weight: bolder;\r\n}\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: \"Lato\";\r\n    color: white;\r\n}\r\n\r\nh1{\r\n    font-size: 25px;\r\n}\r\n\r\nbutton,\r\nbutton>span {\r\n    color: white;\r\n    transition: .75s;\r\n}\r\n\r\nbutton:hover>span {\r\n    color: rgb(0, 145, 200);\r\n    transform: scale(1.1);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr 1fr;\r\n    grid-template-rows: 1fr 2fr 2fr;\r\n    grid-template-areas:\r\n        \"nav nav nav\"\r\n        \"birdsEye gap stats\"\r\n        \"week week week\"\r\n    ;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n    max-width: 100vw;\r\n    max-width: 100vh;\r\n}\r\n\r\n#nav {\r\n    grid-area: nav;\r\n    /* background: rgb(36, 41, 46); */\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 20px;\r\n}\r\n\r\n#logo {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap: 10px;\r\n    font-size: 30px;\r\n    transition: .75s;\r\n}\r\n\r\n#logo>span {\r\n    font-size: 35px;\r\n}\r\n\r\n#logo:hover,\r\n#logo:hover>span {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    width: 25px;\r\n    height: 25px;\r\n    gap: 20px;\r\n    border-radius: 5px;\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n}\r\n\r\n.searchForm>input {\r\n    border: 1px solid black;\r\n    transition: .75s;\r\n}\r\n\r\n.searchForm>input:hover,\r\n.searchForm>input:focus {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.searchForm>input,\r\n.searchForm>input:focus {\r\n    background: transparent;\r\n    border-top-style: hidden;\r\n    border-right-style: hidden;\r\n    border-left-style: hidden;\r\n    outline: none;\r\n}\r\n\r\n.displayMetricImperial {\r\n    background: transparent;\r\n    border: 0px solid transparent;\r\n    color: white;\r\n    transition: .75s;\r\n    font-weight: bolder;\r\n}\r\n\r\n.displayMetricImperial:hover {\r\n    transform: scale(1.1);\r\n    color: rgb(0, 145, 200);\r\n    font-weight: bolder;\r\n}\r\n\r\n#birdsEye {\r\n    grid-area: birdsEye;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    /* background: rgb(36, 41, 46); */\r\n}\r\n\r\n.birdsEyeWidgetContainer {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.weatherIcon {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}\r\n\r\n#gap {\r\n    grid-area: gap;\r\n    /* background: rgb(36, 41, 46); */\r\n}\r\n\r\n#stats {\r\n    grid-area: stats;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    /* background: rgb(36, 41, 46); */\r\n}\r\n\r\n.statsWidgetContainer{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.statsItem {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n.statsText {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n}\r\n\r\n#week {\r\n    grid-area: week;\r\n    /* background: rgb(36, 41, 46); */\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    place-content: center center;\r\n    place-items: center center;\r\n    gap:20px;\r\n    padding: 20px;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n.weekWidgetContainer{\r\n    display: flex;\r\n    max-width: 90vw;\r\n    flex-flow: row nowrap;\r\n    place-content: flex-start flex-start;\r\n    place-items: flex-start flex-start;\r\n    padding: 20px;\r\n    gap: 20px;\r\n    overflow: auto;\r\n}\r\n\r\n.weekItem{\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    min-width: 200px;\r\n    min-height: 200px;\r\n    place-content: center center;\r\n    place-items: center center;\r\n}"],"sourceRoot":""}]);
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
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=5&appid=2b45d207be643eaac353397dbb5eccc7`,
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
/* harmony import */ var _resources_images_01n_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/images/01n.jpg */ "./src/resources/images/01n.jpg");
/* harmony import */ var _resources_images_02d_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resources/images/02d.jpg */ "./src/resources/images/02d.jpg");
/* harmony import */ var _resources_images_02n_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/images/02n.jpg */ "./src/resources/images/02n.jpg");
/* harmony import */ var _resources_images_03d_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resources/images/03d.jpg */ "./src/resources/images/03d.jpg");
/* harmony import */ var _resources_images_03n_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../resources/images/03n.jpg */ "./src/resources/images/03n.jpg");
/* harmony import */ var _resources_images_04d_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../resources/images/04d.jpg */ "./src/resources/images/04d.jpg");
/* harmony import */ var _resources_images_04n_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../resources/images/04n.jpg */ "./src/resources/images/04n.jpg");
/* harmony import */ var _resources_images_09d_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resources/images/09d.jpg */ "./src/resources/images/09d.jpg");
/* harmony import */ var _resources_images_09n_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../resources/images/09n.jpg */ "./src/resources/images/09n.jpg");
/* harmony import */ var _resources_images_10d_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../resources/images/10d.jpg */ "./src/resources/images/10d.jpg");
/* harmony import */ var _resources_images_10n_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../resources/images/10n.jpg */ "./src/resources/images/10n.jpg");
/* harmony import */ var _resources_images_11d_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../resources/images/11d.jpg */ "./src/resources/images/11d.jpg");
/* harmony import */ var _resources_images_11n_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../resources/images/11n.jpg */ "./src/resources/images/11n.jpg");
/* harmony import */ var _resources_images_13d_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../resources/images/13d.jpg */ "./src/resources/images/13d.jpg");
/* harmony import */ var _resources_images_13n_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../resources/images/13n.jpg */ "./src/resources/images/13n.jpg");
/* harmony import */ var _resources_images_50d_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../resources/images/50d.jpg */ "./src/resources/images/50d.jpg");
/* harmony import */ var _resources_images_50n_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../resources/images/50n.jpg */ "./src/resources/images/50n.jpg");
// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle





















// eslint-disable-next-line import/no-mutable-exports
let metricForecastObject = {};
// eslint-disable-next-line import/no-mutable-exports
let imperialForecastObject = {};

function changeBGImage() {
  const root = document.documentElement;
  root.style.backgroundImage = `url('${_resources_images_01d_jpg__WEBPACK_IMPORTED_MODULE_4__}')`;

  switch (`${_nav_navLogic__WEBPACK_IMPORTED_MODULE_0__.metricWeatherObject.weather[0].icon}`) {
    case '01d':
      root.style.backgroundImage = `url('${_resources_images_01d_jpg__WEBPACK_IMPORTED_MODULE_4__}')`;
      break;
    case '01n':
      root.style.backgroundImage = `url('${_resources_images_01n_jpg__WEBPACK_IMPORTED_MODULE_5__}')`;
      break;
    case '02d':
      root.style.backgroundImage = `url('${_resources_images_02d_jpg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case '02n':
      root.style.backgroundImage = `url('${_resources_images_02n_jpg__WEBPACK_IMPORTED_MODULE_7__}')`;
      break;
    case '03d':
      root.style.backgroundImage = `url('${_resources_images_03d_jpg__WEBPACK_IMPORTED_MODULE_8__}')`;
      break;
    case '03n':
      root.style.backgroundImage = `url('${_resources_images_03n_jpg__WEBPACK_IMPORTED_MODULE_9__}')`;
      break;
    case '04d':
      root.style.backgroundImage = `url('${_resources_images_04d_jpg__WEBPACK_IMPORTED_MODULE_10__}')`;
      break;
    case '04n':
      root.style.backgroundImage = `url('${_resources_images_04n_jpg__WEBPACK_IMPORTED_MODULE_11__}')`;
      break;
    case '09d':
      root.style.backgroundImage = `url('${_resources_images_09d_jpg__WEBPACK_IMPORTED_MODULE_12__}')`;
      break;
    case '09n':
      root.style.backgroundImage = `url('${_resources_images_09n_jpg__WEBPACK_IMPORTED_MODULE_13__}')`;
      break;
    case '10d':
      root.style.backgroundImage = `url('${_resources_images_10d_jpg__WEBPACK_IMPORTED_MODULE_14__}')`;
      break;
    case '10n':
      root.style.backgroundImage = `url('${_resources_images_10n_jpg__WEBPACK_IMPORTED_MODULE_15__}')`;
      break;
    case '11d':
      root.style.backgroundImage = `url('${_resources_images_11d_jpg__WEBPACK_IMPORTED_MODULE_16__}')`;
      break;
    case '11n':
      root.style.backgroundImage = `url('${_resources_images_11n_jpg__WEBPACK_IMPORTED_MODULE_17__}')`;
      break;
    case '13d':
      root.style.backgroundImage = `url('${_resources_images_13d_jpg__WEBPACK_IMPORTED_MODULE_18__}')`;
      break;
    case '13n':
      root.style.backgroundImage = `url('${_resources_images_13n_jpg__WEBPACK_IMPORTED_MODULE_19__}')`;
      break;
    case '50d':
      root.style.backgroundImage = `url('${_resources_images_50d_jpg__WEBPACK_IMPORTED_MODULE_20__}')`;
      break;
    case '50n':
      root.style.backgroundImage = `url('${_resources_images_50n_jpg__WEBPACK_IMPORTED_MODULE_21__}')`;
      break;
    default:
      console.log('INVALID_SWITCH_ENTRY | function changeBGImage() | weekLogic.js');
  }
}
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
  changeBGImage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLHFCQUFxQixXQUFXLFVBQVUsb0JBQW9CLHVCQUF1QixPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxh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Q05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0E7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9iaXJkc0V5ZS9iaXJkc0V5ZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9iaXJkc0V5ZS9iaXJkc0V5ZUxvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvZ3JpZC9jcmVhdGVHcmlkLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvbmF2L25hdkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9uYXYvbmF2TG9naWMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9yZXVzYWJsZUNvZGUvcmV1c2FibGVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3JldXNhYmxlQ29kZS9yZXVzYWJsZUdldHRlcnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9zdGF0cy9zdGF0c0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9zdGF0cy9zdGF0c0xvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvLi9zcmMvd2Vlay93ZWVrQ29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwLy4vc3JjL3dlZWsvd2Vla0xvZ2ljLmpzIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3Rfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdF93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vUmVzb3VyY2VzL0xhdG8vTGF0by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9yZXNvdXJjZXMvaW1hZ2VzL3ByZVNlYXJjaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLWljb25zIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cXHJcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgSUUuICovXFxyXFxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgU3ltYm9scyBPdXRsaW5lZCc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxufVxcclxcblxcclxcbiNiZ092ZXJsYXl7XFxyXFxuICAgIHBvc2l0aW9uOiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC43KTtcXHJcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmgxe1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5idXR0b24+c3BhbiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyPnNwYW4ge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwibmF2IG5hdiBuYXZcXFwiXFxyXFxuICAgICAgICBcXFwiYmlyZHNFeWUgZ2FwIHN0YXRzXFxcIlxcclxcbiAgICAgICAgXFxcIndlZWsgd2VlayB3ZWVrXFxcIlxcclxcbiAgICA7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxufVxcclxcblxcclxcbiNsb2dvPnNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvOmhvdmVyLFxcclxcbiNsb2dvOmhvdmVyPnNwYW4ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybT5pbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybT5pbnB1dDpob3ZlcixcXHJcXG4uc2VhcmNoRm9ybT5pbnB1dDpmb2N1cyB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQsXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQ6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlNZXRyaWNJbXBlcmlhbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheU1ldHJpY0ltcGVyaWFsOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2JpcmRzRXllIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBiaXJkc0V5ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7ICovXFxyXFxufVxcclxcblxcclxcbi5iaXJkc0V5ZVdpZGdldENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVySWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FwIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBnYXA7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI3N0YXRzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzdGF0cztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7ICovXFxyXFxufVxcclxcblxcclxcbi5zdGF0c1dpZGdldENvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRzSXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHNUZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiN3ZWVrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB3ZWVrO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBnYXA6MjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi53ZWVrV2lkZ2V0Q29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXgtd2lkdGg6IDkwdnc7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla0l0ZW17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7O0lBRWQscUNBQXFDO0lBQ3JDLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsa0NBQWtDOztJQUVsQyx5QkFBeUI7SUFDekIsa0NBQWtDOztJQUVsQyxvQkFBb0I7SUFDcEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsY0FB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QUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixRQUFRO0lBQ1IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixTQUFTO0lBQ1QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vUmVzb3VyY2VzL0xhdG8vTGF0by1MaWdodC50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLWljb25zIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuXFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cXHJcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG5cXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgSUUuICovXFxyXFxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgU3ltYm9scyBPdXRsaW5lZCc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxufVxcclxcblxcclxcbiNiZ092ZXJsYXl7XFxyXFxuICAgIHBvc2l0aW9uOiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC43KTtcXHJcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3Jlc291cmNlcy9pbWFnZXMvcHJlU2VhcmNoLmpwZycpIDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmgxe1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5idXR0b24+c3BhbiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyPnNwYW4ge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwibmF2IG5hdiBuYXZcXFwiXFxyXFxuICAgICAgICBcXFwiYmlyZHNFeWUgZ2FwIHN0YXRzXFxcIlxcclxcbiAgICAgICAgXFxcIndlZWsgd2VlayB3ZWVrXFxcIlxcclxcbiAgICA7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IC43NXM7XFxyXFxufVxcclxcblxcclxcbiNsb2dvPnNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvOmhvdmVyLFxcclxcbiNsb2dvOmhvdmVyPnNwYW4ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybT5pbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoRm9ybT5pbnB1dDpob3ZlcixcXHJcXG4uc2VhcmNoRm9ybT5pbnB1dDpmb2N1cyB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQsXFxyXFxuLnNlYXJjaEZvcm0+aW5wdXQ6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlNZXRyaWNJbXBlcmlhbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNzVzO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheU1ldHJpY0ltcGVyaWFsOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2JpcmRzRXllIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBiaXJkc0V5ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7ICovXFxyXFxufVxcclxcblxcclxcbi5iaXJkc0V5ZVdpZGdldENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVySWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FwIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBnYXA7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI3N0YXRzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzdGF0cztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7ICovXFxyXFxufVxcclxcblxcclxcbi5zdGF0c1dpZGdldENvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRzSXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHNUZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiN3ZWVrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB3ZWVrO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBnYXA6MjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi53ZWVrV2lkZ2V0Q29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXgtd2lkdGg6IDkwdnc7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla0l0ZW17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHtcclxuICBnZXRNZXRyaWNNYWluV2VhdGhlckRlc2NyaXB0aW9uLFxyXG4gIGdldEltcGVyaWFsTWFpbldlYXRoZXJEZXNjcmlwdGlvbixcclxuICBnZXRNZXRyaWNOYW1lLFxyXG4gIGdldEltcGVyaWFsTmFtZSxcclxuICBnZXRNZXRyaWNUZW1wLFxyXG4gIGdldEltcGVyaWFsVGVtcCxcclxuICBnZXRNZXRyaWNXZWF0aGVyU3ltYm9sLFxyXG4gIGdldEltcGVyaWFsV2VhdGhlclN5bWJvbCxcclxufSBmcm9tICcuL2JpcmRzRXllTG9naWMnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBtZXRyaWNJbXBlcmlhbEJvb2wsIGRhdGVUaW1lU3RyaW5nIH0gZnJvbSAnLi4vbmF2L25hdkxvZ2ljJztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlSDEsIGNyZWF0ZVAgfSBmcm9tICcuLi9yZXVzYWJsZUNvZGUvcmV1c2FibGVFbGVtZW50cyc7XHJcbmltcG9ydCB7IGdldEJpcmRzRXllIH0gZnJvbSAnLi4vcmV1c2FibGVDb2RlL3JldXNhYmxlR2V0dGVycyc7XHJcblxyXG5jb25zdCBjcmVhdGVXaWRnZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KCdiaXJkc0V5ZVdpZGdldENvbnRhaW5lcicpO1xyXG4gIGlmIChtZXRyaWNJbXBlcmlhbEJvb2wpIHtcclxuICAgIGNvbnN0IG1haW5XZWF0aGVyRGVzY3JpcHRpb24gPSBjcmVhdGVIMShnZXRNZXRyaWNNYWluV2VhdGhlckRlc2NyaXB0aW9uKCksICdiZU1haW5XZWF0aGVyRGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVQKGdldE1ldHJpY05hbWUoKSwgJ2JlTmFtZScpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRhdGVUaW1lU3RyaW5nO1xyXG4gICAgY29uc3QgdGVtcCA9IGNyZWF0ZUgxKGAke2dldE1ldHJpY1RlbXAoKX0gwrBDYCwgJ2JlVGVtcCcpO1xyXG4gICAgY29uc3Qgd2VhdGhlclN5bWJvbCA9IGdldE1ldHJpY1dlYXRoZXJTeW1ib2woKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQobWFpbldlYXRoZXJEZXNjcmlwdGlvbiwgbmFtZSwgZGF0ZSwgdGVtcCwgd2VhdGhlclN5bWJvbCk7XHJcbiAgfSBlbHNlIGlmICghbWV0cmljSW1wZXJpYWxCb29sKSB7XHJcbiAgICBjb25zdCBtYWluV2VhdGhlckRlc2NyaXB0aW9uID0gY3JlYXRlSDEoZ2V0SW1wZXJpYWxNYWluV2VhdGhlckRlc2NyaXB0aW9uKCksICdiZU1haW5XZWF0aGVyRGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVQKGdldEltcGVyaWFsTmFtZSgpLCAnYmVOYW1lJyk7XHJcbiAgICBjb25zdCBkYXRlID0gZGF0ZVRpbWVTdHJpbmc7XHJcbiAgICBjb25zdCB0ZW1wID0gY3JlYXRlSDEoYCR7Z2V0SW1wZXJpYWxUZW1wKCl9IMKwRmAsICdiZVRlbXAnKTtcclxuICAgIGNvbnN0IHdlYXRoZXJTeW1ib2wgPSBnZXRJbXBlcmlhbFdlYXRoZXJTeW1ib2woKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQobWFpbldlYXRoZXJEZXNjcmlwdGlvbiwgbmFtZSwgZGF0ZSwgdGVtcCwgd2VhdGhlclN5bWJvbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xlYXJCaXJkc0V5ZSgpIHtcclxuICB3aGlsZSAoZ2V0QmlyZHNFeWUoKS5maXJzdENoaWxkKSB7IGdldEJpcmRzRXllKCkucmVtb3ZlQ2hpbGQoZ2V0QmlyZHNFeWUoKS5maXJzdENoaWxkKTsgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCaXJkc0V5ZSgpIHtcclxuICBjbGVhckJpcmRzRXllKCk7XHJcbiAgZ2V0QmlyZHNFeWUoKS5hcHBlbmQoY3JlYXRlV2lkZ2V0KCkpO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgeyBjcmVhdGVCaXJkc0V5ZSB9O1xyXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IG1ldHJpY1dlYXRoZXJPYmplY3QsIGltcGVyaWFsV2VhdGhlck9iamVjdCB9IGZyb20gJy4uL25hdi9uYXZMb2dpYyc7XHJcbmltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlU3ltYm9sIH0gZnJvbSAnLi4vcmV1c2FibGVDb2RlL3JldXNhYmxlRWxlbWVudHMnO1xyXG5cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZykge1xyXG4gIGNvbnNvbGUubG9nKHN0cmluZyk7XHJcbiAgY29uc3QgcG9zaXRpb24gPSBzdHJpbmcuc2VhcmNoKCcgJyk7XHJcbiAgbGV0IHRlbXBTdHJpbmcgPSAnJztcclxuICBpZiAocG9zaXRpb24gIT09IC0xKSB7XHJcbiAgICBjb25zdCBzdHJpbmdBcnJheSA9IHN0cmluZy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgdGV4dCA9IHN0cmluZ0FycmF5W2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nQXJyYXlbaV0uc2xpY2UoMSk7XHJcbiAgICAgIHRlbXBTdHJpbmcgKz0gYCR7dGV4dH0gYDtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcFN0cmluZyA9IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0ZW1wU3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBnZXRNZXRyaWNNYWluV2VhdGhlckRlc2NyaXB0aW9uID0gKCkgPT4gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxyXG4gIG1ldHJpY1dlYXRoZXJPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuKTtcclxuY29uc3QgZ2V0SW1wZXJpYWxNYWluV2VhdGhlckRlc2NyaXB0aW9uID0gKCkgPT4gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxyXG4gIGltcGVyaWFsV2VhdGhlck9iamVjdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4pO1xyXG5cclxuY29uc3QgZ2V0TWV0cmljTmFtZSA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3QubmFtZTtcclxuY29uc3QgZ2V0SW1wZXJpYWxOYW1lID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm5hbWU7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNUZW1wID0gKCkgPT4gbWV0cmljV2VhdGhlck9iamVjdC5tYWluLnRlbXA7XHJcbmNvbnN0IGdldEltcGVyaWFsVGVtcCA9ICgpID0+IGltcGVyaWFsV2VhdGhlck9iamVjdC5tYWluLnRlbXA7XHJcblxyXG5jb25zdCBmaW5kU3ltYm9sID0gKHdlYXRoZXJJY29uQ29kZSkgPT4ge1xyXG4gIGxldCBzeW1ib2xOYW1lID0gJyc7XHJcbiAgc3dpdGNoICh3ZWF0aGVySWNvbkNvZGUpIHtcclxuICAgIGNhc2UgJzAxZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnY2xlYXJfZGF5JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwMW4nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2NsZWFyX25pZ2h0JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwMmQnOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ3BhcnRseV9jbG91ZHlfZGF5JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwMm4nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ3BhcnRseV9jbG91ZHlfbmlnaHQnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAzZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnY2xvdWR5JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwM24nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2Nsb3VkeSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMDRkJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdmaWx0ZXJfZHJhbWEnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA0bic6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnZmlsdGVyX2RyYW1hJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwOWQnOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ3JhaW55JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcwOW4nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ3JhaW55JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxMGQnOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ3JhaW55JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxMG4nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ3JhaW55JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcxMWQnOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ3RodW5kZXJzdG9ybSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTFuJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICd0aHVuZGVyc3Rvcm0nO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEzZCc6XHJcbiAgICAgIHN5bWJvbE5hbWUgPSAnYWNfdW5pdCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMTNuJzpcclxuICAgICAgc3ltYm9sTmFtZSA9ICdhY191bml0JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICc1MGQnOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2ZvZ2d5JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICc1MG4nOlxyXG4gICAgICBzeW1ib2xOYW1lID0gJ2ZvZ2d5JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBjb25zb2xlLmxvZygnSU5WQUxJRF9TV0lUQ0hfRU5UUlkgfCBnZXRNZXRyaWNXZWF0aGVySWNvbigpIHwgYmlyZHNFeWVMb2dpYy5qcycpO1xyXG4gIH1cclxuICByZXR1cm4gY3JlYXRlU3ltYm9sKHN5bWJvbE5hbWUpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TWV0cmljV2VhdGhlclN5bWJvbCA9ICgpID0+IHtcclxuICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoJ3dlYXRoZXJTeW1ib2wnKTtcclxuICBkaXYuYXBwZW5kKGZpbmRTeW1ib2woYCR7bWV0cmljV2VhdGhlck9iamVjdC53ZWF0aGVyWzBdLmljb259YCkpO1xyXG4gIHJldHVybiBkaXY7XHJcbn07XHJcbmNvbnN0IGdldEltcGVyaWFsV2VhdGhlclN5bWJvbCA9ICgpID0+IHtcclxuICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoJ3dlYXRoZXJTeW1ib2wnKTtcclxuICBkaXYuYXBwZW5kKGZpbmRTeW1ib2woYCR7aW1wZXJpYWxXZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uaWNvbn1gKSk7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLFxyXG4gIGdldE1ldHJpY01haW5XZWF0aGVyRGVzY3JpcHRpb24sXHJcbiAgZ2V0SW1wZXJpYWxNYWluV2VhdGhlckRlc2NyaXB0aW9uLFxyXG4gIGdldE1ldHJpY05hbWUsXHJcbiAgZ2V0SW1wZXJpYWxOYW1lLFxyXG4gIGdldE1ldHJpY1RlbXAsXHJcbiAgZ2V0SW1wZXJpYWxUZW1wLFxyXG4gIGdldE1ldHJpY1dlYXRoZXJTeW1ib2wsXHJcbiAgZ2V0SW1wZXJpYWxXZWF0aGVyU3ltYm9sLFxyXG4gIGZpbmRTeW1ib2wsXHJcbn07XHJcbiIsImltcG9ydCB7IGdldENvbnRlbnQgfSBmcm9tICcuLi9yZXVzYWJsZUNvZGUvcmV1c2FibGVHZXR0ZXJzJztcclxuXHJcbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXYnKTtcclxuICByZXR1cm4gbmF2O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQmlyZHNFeWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYmlyZHNFeWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBiaXJkc0V5ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JpcmRzRXllJyk7XHJcbiAgcmV0dXJuIGJpcmRzRXllO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlR2FwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGdhcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhcCcpO1xyXG4gIHJldHVybiBnYXA7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVTdGF0cyA9ICgpID0+IHtcclxuICBjb25zdCBzdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHN0YXRzLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhdHMnKTtcclxuICByZXR1cm4gc3RhdHM7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVXZWVrID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWVrLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VlaycpO1xyXG4gIHJldHVybiB3ZWVrO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcclxuICBnZXRDb250ZW50KCkuYXBwZW5kKFxyXG4gICAgY3JlYXRlTmF2KCksXHJcbiAgICBjcmVhdGVCaXJkc0V5ZSgpLFxyXG4gICAgY3JlYXRlR2FwKCksXHJcbiAgICBjcmVhdGVTdGF0cygpLFxyXG4gICAgY3JlYXRlV2VlaygpLFxyXG4gICk7XHJcbn1cclxuXHJcbmNyZWF0ZUdyaWQoKTtcclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVGb3JtLCBjcmVhdGVJbnB1dCwgY3JlYXRlSWNvbiwgY3JlYXRlQnV0dG9uLFxyXG59IGZyb20gJy4uL3JldXNhYmxlQ29kZS9yZXVzYWJsZUVsZW1lbnRzJztcclxuaW1wb3J0IHsgZ2V0TmF2IH0gZnJvbSAnLi4vcmV1c2FibGVDb2RlL3JldXNhYmxlR2V0dGVycyc7XHJcbmltcG9ydCB7IGdldEdlb1JlZ2lvbiwgdG9nZ2xlTWV0cmljSW1wZXJpYWxCb29sIH0gZnJvbSAnLi9uYXZMb2dpYyc7XHJcblxyXG5jb25zdCBjcmVhdGVTZWFyY2hCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm0oJ3NlYXJjaEZvcm0nKTtcclxuICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ3NlYXJjaCcsICcnLCAnYnV0dG9uJywgJ3N1Ym1pdEJ1dHRvbicpO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZ2V0R2VvUmVnaW9uKTtcclxuICBmb3JtLmFwcGVuZChjcmVhdGVJbnB1dCgndGV4dCcsIHRydWUsICdTZWFyY2ggbG9jYXRpb24uLi4nLCAnc2VhcmNoQmFyJyksIGJ1dHRvbik7XHJcblxyXG4gIHJldHVybiBmb3JtO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTG9nbyA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChjcmVhdGVJY29uKCdzdG9ybScpLCAnaVdlYXRoZXInKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTWV0cmljSW1wZXJpYWxCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCcnLCAnRGlzcGxheSDCsEMnLCAnYnV0dG9uJywgJ2Rpc3BsYXlNZXRyaWNJbXBlcmlhbCcpO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0b2dnbGVNZXRyaWNJbXBlcmlhbEJvb2wpO1xyXG4gIHJldHVybiBidXR0b247XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgZ2V0TmF2KCkuYXBwZW5kKGNyZWF0ZUxvZ28oKSwgY3JlYXRlU2VhcmNoQmFyKCksIGNyZWF0ZU1ldHJpY0ltcGVyaWFsQnV0dG9uKCkpO1xyXG59XHJcblxyXG5jcmVhdGVOYXYoKTtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBjcmVhdGVCaXJkc0V5ZSB9IGZyb20gJy4uL2JpcmRzRXllL2JpcmRzRXllQ29udGVudCc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgY3JlYXRlU3RhdHMgfSBmcm9tICcuLi9zdGF0cy9zdGF0c0NvbnRlbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVXZWVrIH0gZnJvbSAnLi4vd2Vlay93ZWVrQ29udGVudCc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgZ2V0NURheUZvcmVjYXN0IH0gZnJvbSAnLi4vd2Vlay93ZWVrTG9naWMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xyXG5sZXQgbGF0TG9uID0gW107XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXHJcbmxldCBtZXRyaWNXZWF0aGVyT2JqZWN0ID0ge307XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXHJcbmxldCBpbXBlcmlhbFdlYXRoZXJPYmplY3QgPSB7fTtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcclxubGV0IG1ldHJpY0ltcGVyaWFsQm9vbCA9IHRydWU7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xyXG5sZXQgZGF0ZVRpbWVTdHJpbmcgPSAnJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGVUaW1lKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0aW1lUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly90aW1lem9uZS5hYnN0cmFjdGFwaS5jb20vdjEvY3VycmVudF90aW1lLz9hcGlfa2V5PWFjZTgwZmQ0YTkzNjQzOTZhZjg3NjEyMDdmYTMxYjMxJmxvY2F0aW9uPSR7bWV0cmljV2VhdGhlck9iamVjdC5jb29yZC5sYXR9LCAke21ldHJpY1dlYXRoZXJPYmplY3QuY29vcmQubG9ufWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG4gICAgY29uc3QgdGltZURhdGEgPSBhd2FpdCB0aW1lUmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVEYXRhLmRhdGV0aW1lKTtcclxuXHJcbiAgICBjb25zdCB0aW1lQXJyYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKGBlbi0ke21ldHJpY1dlYXRoZXJPYmplY3Quc3lzLmNvdW50cnl9YCwgeyBob3VyMTI6ICd0cnVlJyB9KS5zcGxpdCgnLCAnKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZERhdGUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKGBlbi0ke21ldHJpY1dlYXRoZXJPYmplY3Quc3lzLmNvdW50cnl9YCwgb3B0aW9ucyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCR7bm9ybWFsaXplZERhdGV9ICR7dGltZUFycmF5WzFdfWApO1xyXG5cclxuICAgIGRhdGVUaW1lU3RyaW5nID0gYCR7bm9ybWFsaXplZERhdGV9ICR7dGltZUFycmF5WzFdfWA7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcblxyXG4gIGdldDVEYXlGb3JlY2FzdCgpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBtZXRyaWNSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0TG9uWzBdfSZsb249JHtsYXRMb25bMV19JmFwcGlkPTJiNDVkMjA3YmU2NDNlYWFjMzUzMzk3ZGJiNWVjY2M3JnVuaXRzPW1ldHJpY2AsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXHJcbiAgICApO1xyXG4gICAgY29uc3QgbWV0cmljV2VhdGhlckRhdGEgPSBhd2FpdCBtZXRyaWNSZXNwb25zZS5qc29uKCk7XHJcbiAgICBtZXRyaWNXZWF0aGVyT2JqZWN0ID0gbWV0cmljV2VhdGhlckRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhtZXRyaWNXZWF0aGVyT2JqZWN0KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coYGdldFdlYXRoZXIoKSBNZXRyaWMgRXJyb3I6ICR7ZXJyb3J9YCk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgaW1wZXJpYWxSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0TG9uWzBdfSZsb249JHtsYXRMb25bMV19JmFwcGlkPTJiNDVkMjA3YmU2NDNlYWFjMzUzMzk3ZGJiNWVjY2M3JnVuaXRzPWltcGVyaWFsYCxcclxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCBpbXBlcmlhbFdlYXRoZXJEYXRhID0gYXdhaXQgaW1wZXJpYWxSZXNwb25zZS5qc29uKCk7XHJcbiAgICBpbXBlcmlhbFdlYXRoZXJPYmplY3QgPSBpbXBlcmlhbFdlYXRoZXJEYXRhO1xyXG4gICAgY29uc29sZS5sb2coaW1wZXJpYWxXZWF0aGVyT2JqZWN0KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coYGdldFdlYXRoZXIoKSBJbXBlcmlhbCBFcnJvcjogJHtlcnJvcn1gKTtcclxuICB9XHJcbiAgZ2V0RGF0ZVRpbWUoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0R2VvUmVnaW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoQmFyJyk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtzZWFyY2hCYXIudmFsdWV9JmxpbWl0PTUmYXBwaWQ9MmI0NWQyMDdiZTY0M2VhYWMzNTMzOTdkYmI1ZWNjYzdgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGdlb0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBsYXRMb24gPSBbZ2VvRGF0YVswXS5sYXQsIGdlb0RhdGFbMF0ubG9uXTtcclxuICAgIGdldFdlYXRoZXIoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coYGdldEdlb1JlZ2lvbigpIEVycm9yOiAke2Vycm9yfWApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlTWV0cmljSW1wZXJpYWxCb29sKCkge1xyXG4gIG1ldHJpY0ltcGVyaWFsQm9vbCA9ICFtZXRyaWNJbXBlcmlhbEJvb2w7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXlNZXRyaWNJbXBlcmlhbCcpO1xyXG5cclxuICBpZiAobWV0cmljSW1wZXJpYWxCb29sKSB7IGJ1dHRvbi5pbm5lckhUTUwgPSAnRGlzcGxheSDCsEMnOyB9IGVsc2Uge1xyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICdEaXNwbGF5IMKwRic7XHJcbiAgfVxyXG4gIGNyZWF0ZUJpcmRzRXllKCk7XHJcbiAgY3JlYXRlU3RhdHMoKTtcclxuICBjcmVhdGVXZWVrKCk7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCB7XHJcbiAgZ2V0R2VvUmVnaW9uLFxyXG4gIHRvZ2dsZU1ldHJpY0ltcGVyaWFsQm9vbCxcclxuICBsYXRMb24sXHJcbiAgbWV0cmljV2VhdGhlck9iamVjdCxcclxuICBpbXBlcmlhbFdlYXRoZXJPYmplY3QsXHJcbiAgbWV0cmljSW1wZXJpYWxCb29sLFxyXG4gIGRhdGVUaW1lU3RyaW5nLFxyXG59O1xyXG4iLCJjb25zdCBjcmVhdGVGb3JtID0gKGZvcm1DbGFzcyA9ICcnKSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmb3JtQ2xhc3MpO1xyXG4gIHJldHVybiBmb3JtO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTGFiZWwgPSAobGFiZWxUZXh0Q29udGVudCkgPT4ge1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dENvbnRlbnQ7XHJcbiAgcmV0dXJuIGxhYmVsO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSW5wdXQgPSAoaW5wdXRUeXBlID0gJ3RleHQnLCBpbnB1dFJlcXVpcmVkID0gdHJ1ZSwgaW5wdXRQbGFjZUhvbGRlciA9ICcnLCBpbnB1dENsYXNzID0gJycpID0+IHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcclxuICBpbnB1dC5yZXF1aXJlZCA9IGlucHV0UmVxdWlyZWQ7XHJcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSBpbnB1dFBsYWNlSG9sZGVyO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBpbnB1dENsYXNzKTtcclxuICByZXR1cm4gaW5wdXQ7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbnB1dENvbnRhaW5lciA9IChsYWJlbCwgaW5wdXQsIGNvbnRhaW5lckNsYXNzID0gJycpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNvbnRhaW5lckNsYXNzKTtcclxuICBjb250YWluZXIuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUljb24gPSAoaWNvbk5hbWUpID0+IHtcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICBzcGFuLmlubmVySFRNTCA9IGljb25OYW1lO1xyXG4gIHJldHVybiBzcGFuO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlU3ltYm9sID0gKHN5bWJvbE5hbWUpID0+IHtcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xyXG4gIHNwYW4uaW5uZXJIVE1MID0gc3ltYm9sTmFtZTtcclxuICByZXR1cm4gc3BhbjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChidXR0b25JY29uLCBidXR0b25UZXh0LCBidXR0b25UeXBlID0gJ2J1dHRvbicsIGJ1dHRvbkNsYXNzID0gJycpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24udHlwZSA9IGJ1dHRvblR5cGU7XHJcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBidXR0b25DbGFzcyk7XHJcbiAgYnV0dG9uLmFwcGVuZChjcmVhdGVJY29uKGJ1dHRvbkljb24pLCBidXR0b25UZXh0KTtcclxuICByZXR1cm4gYnV0dG9uO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRGl2ID0gKGRpdkNsYXNzKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBkaXZDbGFzcyk7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUgxID0gKHRleHQsIGgxQ2xhc3MpID0+IHtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaDEuc2V0QXR0cmlidXRlKCdjbGFzcycsIGgxQ2xhc3MpO1xyXG4gIGgxLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgcmV0dXJuIGgxO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUCA9ICh0ZXh0LCBwQ2xhc3MpID0+IHtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAuc2V0QXR0cmlidXRlKCdjbGFzcycsIHBDbGFzcyk7XHJcbiAgcC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gIHJldHVybiBwO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVGb3JtLFxyXG4gIGNyZWF0ZUxhYmVsLFxyXG4gIGNyZWF0ZUlucHV0LFxyXG4gIGNyZWF0ZUlucHV0Q29udGFpbmVyLFxyXG4gIGNyZWF0ZUljb24sXHJcbiAgY3JlYXRlU3ltYm9sLFxyXG4gIGNyZWF0ZUJ1dHRvbixcclxuICBjcmVhdGVEaXYsXHJcbiAgY3JlYXRlSDEsXHJcbiAgY3JlYXRlUCxcclxufTtcclxuIiwiY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG5jb25zdCBnZXROYXYgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2Jyk7XHJcblxyXG5jb25zdCBnZXRCaXJkc0V5ZSA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaXJkc0V5ZScpO1xyXG5cclxuY29uc3QgZ2V0U3RhdHMgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHMnKTtcclxuXHJcbmNvbnN0IGdldFdlZWsgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VlaycpO1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRDb250ZW50LFxyXG4gIGdldE5hdixcclxuICBnZXRCaXJkc0V5ZSxcclxuICBnZXRTdGF0cyxcclxuICBnZXRXZWVrLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBnZXRTdGF0cyB9IGZyb20gJy4uL3JldXNhYmxlQ29kZS9yZXVzYWJsZUdldHRlcnMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7XHJcbiAgZ2V0TWV0cmljRmVlbHNMaWtlLFxyXG4gIGdldEltcGVyaWFsRmVlbHNMaWtlLFxyXG4gIGdldE1ldHJpY0h1bWlkaXR5LFxyXG4gIGdldEltcGVyaWFsSHVtaWRpdHksXHJcbiAgZ2V0TWV0cmljV2luZFNwZWVkLFxyXG4gIGdldEltcGVyaWFsV2luZFNwZWVkLFxyXG59IGZyb20gJy4vc3RhdHNMb2dpYyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZURpdiwgY3JlYXRlSDEsIGNyZWF0ZVAsIGNyZWF0ZVN5bWJvbCxcclxufSBmcm9tICcuLi9yZXVzYWJsZUNvZGUvcmV1c2FibGVFbGVtZW50cyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgbWV0cmljSW1wZXJpYWxCb29sIH0gZnJvbSAnLi4vbmF2L25hdkxvZ2ljJztcclxuXHJcbmNvbnN0IGNyZWF0ZUZlZWxzTGlrZUNvbnRhaW5lciA9IChtZXRyaWNJbXBlcmlhbCkgPT4ge1xyXG4gIGNvbnN0IGZlZWxzTGlrZUNvbnRhaW5lciA9IGNyZWF0ZURpdignc3RhdHNJdGVtJyk7XHJcbiAgY29uc3QgZmVlbHNMaWtlVGV4dCA9IGNyZWF0ZURpdignc3RhdHNUZXh0Jyk7XHJcbiAgY29uc3QgZmVlbHNMaWtlUCA9IGNyZWF0ZVAoJ0ZlZWxzIExpa2UnKTtcclxuICBsZXQgZmVlbHNMaWtlSDE7XHJcbiAgaWYgKG1ldHJpY0ltcGVyaWFsKSB7IGZlZWxzTGlrZUgxID0gY3JlYXRlSDEoYCR7Z2V0TWV0cmljRmVlbHNMaWtlKCl9IMKwQ2ApOyB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbCkgeyBmZWVsc0xpa2VIMSA9IGNyZWF0ZUgxKGAke2dldEltcGVyaWFsRmVlbHNMaWtlKCl9IMKwRmApOyB9XHJcbiAgZmVlbHNMaWtlVGV4dC5hcHBlbmQoZmVlbHNMaWtlUCwgZmVlbHNMaWtlSDEpO1xyXG4gIGZlZWxzTGlrZUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU3ltYm9sKCd0aGVybW9zdGF0JyksIGZlZWxzTGlrZVRleHQpO1xyXG4gIHJldHVybiBmZWVsc0xpa2VDb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVIdW1pZGl0eUNvbnRhaW5lciA9IChtZXRyaWNJbXBlcmlhbCkgPT4ge1xyXG4gIGNvbnN0IGh1bWlkaXR5Q29udGFpbmVyID0gY3JlYXRlRGl2KCdzdGF0c0l0ZW0nKTtcclxuICBjb25zdCBodW1pZGl0eVRleHQgPSBjcmVhdGVEaXYoJ3N0YXRzVGV4dCcpO1xyXG4gIGNvbnN0IGh1bWlkaXR5UCA9IGNyZWF0ZVAoJ0h1bWlkaXR5Jyk7XHJcbiAgbGV0IGh1bWlkaXR5SDE7XHJcbiAgaWYgKG1ldHJpY0ltcGVyaWFsKSB7IGh1bWlkaXR5SDEgPSBjcmVhdGVIMShgJHtnZXRNZXRyaWNIdW1pZGl0eSgpfSAlYCk7IH0gZWxzZSBpZiAoIW1ldHJpY0ltcGVyaWFsKSB7IGh1bWlkaXR5SDEgPSBjcmVhdGVIMShgJHtnZXRJbXBlcmlhbEh1bWlkaXR5KCl9ICVgKTsgfVxyXG4gIGh1bWlkaXR5VGV4dC5hcHBlbmQoaHVtaWRpdHlQLCBodW1pZGl0eUgxKTtcclxuICBodW1pZGl0eUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU3ltYm9sKCdodW1pZGl0eV9taWQnKSwgaHVtaWRpdHlUZXh0KTtcclxuICByZXR1cm4gaHVtaWRpdHlDb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVXaW5kU3BlZWRDb250YWluZXIgPSAobWV0cmljSW1wZXJpYWwpID0+IHtcclxuICBjb25zdCB3aW5kU3BlZWRDb250YWluZXIgPSBjcmVhdGVEaXYoJ3N0YXRzSXRlbScpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZFRleHQgPSBjcmVhdGVEaXYoJ3N0YXRzVGV4dCcpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZFAgPSBjcmVhdGVQKCdXaW5kIFNwZWVkJyk7XHJcbiAgbGV0IHdpbmRTcGVlZEgxO1xyXG4gIGlmIChtZXRyaWNJbXBlcmlhbCkgeyB3aW5kU3BlZWRIMSA9IGNyZWF0ZUgxKGAke2dldE1ldHJpY1dpbmRTcGVlZCgpfSBrbS9oYCk7IH0gZWxzZSBpZiAoIW1ldHJpY0ltcGVyaWFsKSB7IHdpbmRTcGVlZEgxID0gY3JlYXRlSDEoYCR7Z2V0SW1wZXJpYWxXaW5kU3BlZWQoKX0gbXBoYCk7IH1cclxuICB3aW5kU3BlZWRUZXh0LmFwcGVuZCh3aW5kU3BlZWRQLCB3aW5kU3BlZWRIMSk7XHJcbiAgd2luZFNwZWVkQ29udGFpbmVyLmFwcGVuZChjcmVhdGVTeW1ib2woJ2FpcicpLCB3aW5kU3BlZWRUZXh0KTtcclxuICByZXR1cm4gd2luZFNwZWVkQ29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlV2lkZ2V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdignc3RhdHNXaWRnZXRDb250YWluZXInKTtcclxuICBpZiAobWV0cmljSW1wZXJpYWxCb29sKSB7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKFxyXG4gICAgICBjcmVhdGVGZWVsc0xpa2VDb250YWluZXIobWV0cmljSW1wZXJpYWxCb29sKSxcclxuICAgICAgY3JlYXRlSHVtaWRpdHlDb250YWluZXIobWV0cmljSW1wZXJpYWxCb29sKSxcclxuICAgICAgY3JlYXRlV2luZFNwZWVkQ29udGFpbmVyKG1ldHJpY0ltcGVyaWFsQm9vbCksXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoIW1ldHJpY0ltcGVyaWFsQm9vbCkge1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChcclxuICAgICAgY3JlYXRlRmVlbHNMaWtlQ29udGFpbmVyKG1ldHJpY0ltcGVyaWFsQm9vbCksXHJcbiAgICAgIGNyZWF0ZUh1bWlkaXR5Q29udGFpbmVyKG1ldHJpY0ltcGVyaWFsQm9vbCksXHJcbiAgICAgIGNyZWF0ZVdpbmRTcGVlZENvbnRhaW5lcihtZXRyaWNJbXBlcmlhbEJvb2wpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGVhclN0YXRzKCkge1xyXG4gIHdoaWxlIChnZXRTdGF0cygpLmZpcnN0Q2hpbGQpIHsgZ2V0U3RhdHMoKS5yZW1vdmVDaGlsZChnZXRTdGF0cygpLmZpcnN0Q2hpbGQpOyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRzKCkge1xyXG4gIGNsZWFyU3RhdHMoKTtcclxuICBnZXRTdGF0cygpLmFwcGVuZChjcmVhdGVXaWRnZXQoKSk7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCB7IGNyZWF0ZVN0YXRzIH07XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgbWV0cmljV2VhdGhlck9iamVjdCwgaW1wZXJpYWxXZWF0aGVyT2JqZWN0IH0gZnJvbSAnLi4vbmF2L25hdkxvZ2ljJztcclxuXHJcbmNvbnN0IGdldE1ldHJpY0ZlZWxzTGlrZSA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3QubWFpbi5mZWVsc19saWtlO1xyXG5cclxuY29uc3QgZ2V0SW1wZXJpYWxGZWVsc0xpa2UgPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi5mZWVsc19saWtlO1xyXG5cclxuY29uc3QgZ2V0TWV0cmljSHVtaWRpdHkgPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4uaHVtaWRpdHk7XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbEh1bWlkaXR5ID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0Lm1haW4uaHVtaWRpdHk7XHJcblxyXG5jb25zdCBnZXRNZXRyaWNQcmVzc3VyZSA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3QubWFpbi5wcmVzc3VyZTtcclxuXHJcbmNvbnN0IGdldEltcGVyaWFsUHJlc3N1cmUgPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi5wcmVzc3VyZTtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1RlbXBNYXggPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9tYXg7XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbFRlbXBNYXggPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi50ZW1wX21heDtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1RlbXBNaW4gPSAoKSA9PiBtZXRyaWNXZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9taW47XHJcblxyXG5jb25zdCBnZXRJbXBlcmlhbFRlbXBNaW4gPSAoKSA9PiBpbXBlcmlhbFdlYXRoZXJPYmplY3QubWFpbi50ZW1wX21pbjtcclxuXHJcbmNvbnN0IGdldE1ldHJpY1dpbmRTcGVlZCA9ICgpID0+IG1ldHJpY1dlYXRoZXJPYmplY3Qud2luZC5zcGVlZDtcclxuXHJcbmNvbnN0IGdldEltcGVyaWFsV2luZFNwZWVkID0gKCkgPT4gaW1wZXJpYWxXZWF0aGVyT2JqZWN0LndpbmQuc3BlZWQ7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldE1ldHJpY0ZlZWxzTGlrZSxcclxuICBnZXRJbXBlcmlhbEZlZWxzTGlrZSxcclxuICBnZXRNZXRyaWNIdW1pZGl0eSxcclxuICBnZXRJbXBlcmlhbEh1bWlkaXR5LFxyXG4gIGdldE1ldHJpY1ByZXNzdXJlLFxyXG4gIGdldEltcGVyaWFsUHJlc3N1cmUsXHJcbiAgZ2V0TWV0cmljVGVtcE1heCxcclxuICBnZXRJbXBlcmlhbFRlbXBNYXgsXHJcbiAgZ2V0TWV0cmljVGVtcE1pbixcclxuICBnZXRJbXBlcmlhbFRlbXBNaW4sXHJcbiAgZ2V0TWV0cmljV2luZFNwZWVkLFxyXG4gIGdldEltcGVyaWFsV2luZFNwZWVkLFxyXG59O1xyXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7XHJcbiAgZm9ybWF0RGF0ZVRpbWUsIG1ldHJpY0ZvcmVjYXN0T2JqZWN0LCBpbXBlcmlhbEZvcmVjYXN0T2JqZWN0LFxyXG59IGZyb20gJy4vd2Vla0xvZ2ljJztcclxuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gJy4uL3JldXNhYmxlQ29kZS9yZXVzYWJsZUdldHRlcnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVEaXYsIGNyZWF0ZVAsIGNyZWF0ZUgxIH0gZnJvbSAnLi4vcmV1c2FibGVDb2RlL3JldXNhYmxlRWxlbWVudHMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IG1ldHJpY0ltcGVyaWFsQm9vbCB9IGZyb20gJy4uL25hdi9uYXZMb2dpYyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBmaW5kU3ltYm9sIH0gZnJvbSAnLi4vYmlyZHNFeWUvYmlyZHNFeWVMb2dpYyc7XHJcblxyXG5jb25zdCBjcmVhdGVNZXRyaWNXZWVrSXRlbXMgPSAod2Vla1dpZGdldENvbnRhaW5lcikgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWV0cmljRm9yZWNhc3RPYmplY3QubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qgd2Vla0l0ZW1Db250YWluZXIgPSBjcmVhdGVEaXYoJ3dlZWtJdGVtJyk7XHJcbiAgICBjb25zdCB0aW1lRGF0ZUFycmF5ID0gZm9ybWF0RGF0ZVRpbWUoaSk7XHJcbiAgICBjb25zdCBkYXkgPSBjcmVhdGVQKGAke3RpbWVEYXRlQXJyYXlbMF19YCwgJycpO1xyXG4gICAgY29uc3QgdGltZSA9IGNyZWF0ZVAoYCR7dGltZURhdGVBcnJheVsxXX0gJHt0aW1lRGF0ZUFycmF5WzJdfWAsICcnKTtcclxuICAgIGNvbnN0IHRlbXAgPSBjcmVhdGVIMShgJHttZXRyaWNGb3JlY2FzdE9iamVjdC5saXN0W2ldLm1haW4udGVtcH0gwrBDYCwgJycpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVQKFxyXG4gICAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoXHJcbiAgICAgICAgbWV0cmljRm9yZWNhc3RPYmplY3QubGlzdFtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICAgIHdlZWtJdGVtQ29udGFpbmVyLmFwcGVuZChcclxuICAgICAgZGF5LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICB0ZW1wLFxyXG4gICAgICBmaW5kU3ltYm9sKG1ldHJpY0ZvcmVjYXN0T2JqZWN0Lmxpc3RbaV0ud2VhdGhlclswXS5pY29uKSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICApO1xyXG4gICAgd2Vla1dpZGdldENvbnRhaW5lci5hcHBlbmQod2Vla0l0ZW1Db250YWluZXIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUltcGVyaWFsV2Vla0l0ZW1zID0gKHdlZWtXaWRnZXRDb250YWluZXIpID0+IHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGltcGVyaWFsRm9yZWNhc3RPYmplY3QubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qgd2Vla0l0ZW1Db250YWluZXIgPSBjcmVhdGVEaXYoJ3dlZWtJdGVtJyk7XHJcbiAgICBjb25zdCB0aW1lRGF0ZUFycmF5ID0gZm9ybWF0RGF0ZVRpbWUoaSk7XHJcbiAgICBjb25zdCBkYXkgPSBjcmVhdGVQKGAke3RpbWVEYXRlQXJyYXlbMF19YCwgJycpO1xyXG4gICAgY29uc3QgdGltZSA9IGNyZWF0ZVAoYCR7dGltZURhdGVBcnJheVsxXX0gJHt0aW1lRGF0ZUFycmF5WzJdfWAsICcnKTtcclxuICAgIGNvbnN0IHRlbXAgPSBjcmVhdGVIMShgJHtpbXBlcmlhbEZvcmVjYXN0T2JqZWN0Lmxpc3RbaV0ubWFpbi50ZW1wfSDCsEZgLCAnJyk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZVAoXHJcbiAgICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihcclxuICAgICAgICBpbXBlcmlhbEZvcmVjYXN0T2JqZWN0Lmxpc3RbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICB3ZWVrSXRlbUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICAgIGRheSxcclxuICAgICAgdGltZSxcclxuICAgICAgdGVtcCxcclxuICAgICAgZmluZFN5bWJvbChpbXBlcmlhbEZvcmVjYXN0T2JqZWN0Lmxpc3RbaV0ud2VhdGhlclswXS5pY29uKSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICApO1xyXG5cclxuICAgIHdlZWtXaWRnZXRDb250YWluZXIuYXBwZW5kKHdlZWtJdGVtQ29udGFpbmVyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVXaWRnZXQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2Vla1dpZGdldENvbnRhaW5lciA9IGNyZWF0ZURpdignd2Vla1dpZGdldENvbnRhaW5lcicpO1xyXG4gIGlmIChtZXRyaWNJbXBlcmlhbEJvb2wpIHtcclxuICAgIGNyZWF0ZU1ldHJpY1dlZWtJdGVtcyh3ZWVrV2lkZ2V0Q29udGFpbmVyKTtcclxuICB9IGVsc2UgaWYgKCFtZXRyaWNJbXBlcmlhbEJvb2wpIHtcclxuICAgIGNyZWF0ZUltcGVyaWFsV2Vla0l0ZW1zKHdlZWtXaWRnZXRDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdlZWtXaWRnZXRDb250YWluZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGVhcldlZWsoKSB7XHJcbiAgd2hpbGUgKGdldFdlZWsoKS5maXJzdENoaWxkKSB7IGdldFdlZWsoKS5yZW1vdmVDaGlsZChnZXRXZWVrKCkuZmlyc3RDaGlsZCk7IH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGl0bGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVIMSgnNS1EYXkgRm9yZWNhc3QnLCAnJyk7XHJcblxyXG4gIHJldHVybiB0aXRsZTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVdlZWsoKSB7XHJcbiAgY2xlYXJXZWVrKCk7XHJcbiAgZ2V0V2VlaygpLmFwcGVuZChjcmVhdGVUaXRsZSgpLCBjcmVhdGVXaWRnZXQoKSk7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCB7IGNyZWF0ZVdlZWsgfTtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBsYXRMb24sIG1ldHJpY1dlYXRoZXJPYmplY3QgfSBmcm9tICcuLi9uYXYvbmF2TG9naWMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IGNyZWF0ZUJpcmRzRXllIH0gZnJvbSAnLi4vYmlyZHNFeWUvYmlyZHNFeWVDb250ZW50JztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyBjcmVhdGVTdGF0cyB9IGZyb20gJy4uL3N0YXRzL3N0YXRzQ29udGVudCc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgY3JlYXRlV2VlayB9IGZyb20gJy4vd2Vla0NvbnRlbnQnO1xyXG5cclxuaW1wb3J0IGQwMSBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzAxZC5qcGcnO1xyXG5pbXBvcnQgbjAxIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDFuLmpwZyc7XHJcbmltcG9ydCBkMDIgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wMmQuanBnJztcclxuaW1wb3J0IG4wMiBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzAybi5qcGcnO1xyXG5pbXBvcnQgZDAzIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDNkLmpwZyc7XHJcbmltcG9ydCBuMDMgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wM24uanBnJztcclxuaW1wb3J0IGQwNCBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzA0ZC5qcGcnO1xyXG5pbXBvcnQgbjA0IGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMDRuLmpwZyc7XHJcbmltcG9ydCBkMDkgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8wOWQuanBnJztcclxuaW1wb3J0IG4wOSBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzA5bi5qcGcnO1xyXG5pbXBvcnQgZDEwIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMTBkLmpwZyc7XHJcbmltcG9ydCBuMTAgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8xMG4uanBnJztcclxuaW1wb3J0IGQxMSBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzExZC5qcGcnO1xyXG5pbXBvcnQgbjExIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvMTFuLmpwZyc7XHJcbmltcG9ydCBkMTMgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy8xM2QuanBnJztcclxuaW1wb3J0IG4xMyBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzLzEzbi5qcGcnO1xyXG5pbXBvcnQgZDUwIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvNTBkLmpwZyc7XHJcbmltcG9ydCBuNTAgZnJvbSAnLi4vcmVzb3VyY2VzL2ltYWdlcy81MG4uanBnJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXHJcbmxldCBtZXRyaWNGb3JlY2FzdE9iamVjdCA9IHt9O1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xyXG5sZXQgaW1wZXJpYWxGb3JlY2FzdE9iamVjdCA9IHt9O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlQkdJbWFnZSgpIHtcclxuICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtkMDF9JylgO1xyXG5cclxuICBzd2l0Y2ggKGAke21ldHJpY1dlYXRoZXJPYmplY3Qud2VhdGhlclswXS5pY29ufWApIHtcclxuICAgIGNhc2UgJzAxZCc6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtkMDF9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAxbic6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtuMDF9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAyZCc6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtkMDJ9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAybic6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtuMDJ9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAzZCc6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtkMDN9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzAzbic6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtuMDN9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA0ZCc6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtkMDR9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA0bic6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtuMDR9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA5ZCc6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtkMDl9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzA5bic6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtuMDl9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEwZCc6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtkMTB9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEwbic6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtuMTB9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzExZCc6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtkMTF9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzExbic6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtuMTF9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEzZCc6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtkMTN9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzEzbic6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtuMTN9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzUwZCc6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtkNTB9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJzUwbic6XHJcbiAgICAgIHJvb3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtuNTB9JylgO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJTlZBTElEX1NXSVRDSF9FTlRSWSB8IGZ1bmN0aW9uIGNoYW5nZUJHSW1hZ2UoKSB8IHdlZWtMb2dpYy5qcycpO1xyXG4gIH1cclxufVxyXG5jb25zdCBmb3JtYXREYXRlVGltZSA9IChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVPcHRpb25zID0ge1xyXG4gICAgaG91cjEyOiAndHJ1ZScsXHJcbiAgICB0aW1lU3R5bGU6ICdzaG9ydCcsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICB3ZWVrZGF5OiAnbG9uZycsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG1ldHJpY0ZvcmVjYXN0T2JqZWN0Lmxpc3RbaW5kZXhdLmR0X3R4dCk7XHJcbiAgY29uc3Qgbm9ybWFsaXplZERhdGUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhgZW4tJHttZXRyaWNGb3JlY2FzdE9iamVjdC5jaXR5LmNvdW50cnl9YCwgZGF0ZU9wdGlvbnMpO1xyXG4gIGNvbnN0IGRhdGVBcnJheSA9IG5vcm1hbGl6ZWREYXRlLnNwbGl0KCcgJyk7XHJcbiAgbGV0IG5vcm1hbGl6ZWRUaW1lID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoYGVuLSR7bWV0cmljRm9yZWNhc3RPYmplY3QuY2l0eS5jb3VudHJ5fWAsIHRpbWVPcHRpb25zKTtcclxuXHJcbiAgaWYgKG5vcm1hbGl6ZWRUaW1lLmNoYXJBdCgwKSA9PT0gJzAnICYmIG5vcm1hbGl6ZWRUaW1lLmNoYXJBdCgxKSA9PT0gJzAnKSB7XHJcbiAgICBjb25zdCBzbGljZWRTdHJpbmcgPSBub3JtYWxpemVkVGltZS5zbGljZSgyLCA4KTtcclxuICAgIG5vcm1hbGl6ZWRUaW1lID0gYDEyJHtzbGljZWRTdHJpbmd9YDtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld1N0cmluZyA9IGAke2RhdGVBcnJheVswXX0gJHtub3JtYWxpemVkVGltZX1gO1xyXG4gIGNvbnN0IHN0cmluZ0FycmF5ID0gbmV3U3RyaW5nLnNwbGl0KCcgJyk7XHJcbiAgcmV0dXJuIHN0cmluZ0FycmF5O1xyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0NURheUZvcmVjYXN0KCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JjYXN0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXRMb25bMF19Jmxvbj0ke2xhdExvblsxXX0mYXBwaWQ9MmI0NWQyMDdiZTY0M2VhYWMzNTMzOTdkYmI1ZWNjYzcmdW5pdHM9bWV0cmljYCxcclxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JjYXN0RGF0YSA9IGF3YWl0IGZvcmNhc3RSZXNwb25zZS5qc29uKCk7XHJcbiAgICBtZXRyaWNGb3JlY2FzdE9iamVjdCA9IGZvcmNhc3REYXRhO1xyXG4gICAgY29uc29sZS5sb2cobWV0cmljRm9yZWNhc3RPYmplY3QpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9yY2FzdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0TG9uWzBdfSZsb249JHtsYXRMb25bMV19JmFwcGlkPTJiNDVkMjA3YmU2NDNlYWFjMzUzMzk3ZGJiNWVjY2M3JnVuaXRzPWltcGVyaWFsYCxcclxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JjYXN0RGF0YSA9IGF3YWl0IGZvcmNhc3RSZXNwb25zZS5qc29uKCk7XHJcbiAgICBpbXBlcmlhbEZvcmVjYXN0T2JqZWN0ID0gZm9yY2FzdERhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhpbXBlcmlhbEZvcmVjYXN0T2JqZWN0KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuICBjaGFuZ2VCR0ltYWdlKCk7XHJcbiAgY3JlYXRlQmlyZHNFeWUoKTtcclxuICBjcmVhdGVTdGF0cygpO1xyXG4gIGNyZWF0ZVdlZWsoKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBmb3JtYXREYXRlVGltZSxcclxuICBnZXQ1RGF5Rm9yZWNhc3QsXHJcbiAgbWV0cmljRm9yZWNhc3RPYmplY3QsXHJcbiAgaW1wZXJpYWxGb3JlY2FzdE9iamVjdCxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGUvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuLi9ncmlkL2NyZWF0ZUdyaWQnO1xyXG5pbXBvcnQgJy4uL25hdi9uYXZDb250ZW50JztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9