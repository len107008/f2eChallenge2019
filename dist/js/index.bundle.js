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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/normalize.css/normalize.css":
/*!***************************************************!*\
  !*** ../node_modules/normalize.css/normalize.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"../node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/index.scss */ \"./stylesheets/index.scss\");\n/* harmony import */ var _stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _javascript_general_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/_general_layout */ \"./javascript/_general_layout.js\");\n/* harmony import */ var _javascript_general_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_javascript_general_layout__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./javascript/_general_layout.js":
/*!***************************************!*\
  !*** ./javascript/_general_layout.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  var noteBook = {\n    init: function init() {\n      var me = this;\n      console.log(me);\n      me.notesList = JSON.parse(localStorage.getItem('localNoteBook')) || [];\n      console.log('notesList', me.notesList);\n      var $addNoteBtn = $('#add-note');\n      var $hambergurBtn = $('#hambergur-btn');\n      var $closeSidenavBtn = $('#close-sidenav-btn');\n      var $previewPageBtn = $('#preview-btn');\n      var $submitNewnoteBtn = $('#submit-newnote');\n      $hambergurBtn.on('click', function () {\n        $('#wrap').toggleClass('menu-opend');\n      });\n      $closeSidenavBtn.on('click', function () {\n        $('#wrap').toggleClass('menu-opend');\n      });\n      $addNoteBtn.on('click', function () {\n        $('#wrap').toggleClass('add-note-mode');\n      });\n      $previewPageBtn.on('click', function () {\n        $('#wrap').toggleClass('add-note-mode');\n      });\n      console.log(me.notesList);\n\n      me._updateData(me.notesList);\n\n      $submitNewnoteBtn.on('click', me._addNote);\n    },\n    _updateData: function _updateData(item) {\n      var noteArray = item;\n      console.log(noteArray);\n      localStorage.setItem('localNoteBook', JSON.stringify(item));\n\n      for (var i = 0; i < noteArray.length; i++) {\n        var mark = noteArray[i].marked == 'true' ? true : false;\n        var template = \"<li class=\\\"note-block\\\" data-index=\\\"\".concat(i, \"\\\">\\n                          <h4 class=\\\"note-title\\\">\").concat(item[i].title, \"</h4>\\n                          <span class=\\\"material-icons star\\\" data-marked=\\\"\").concat(mark, \"\\\"></span>\\n                          <p class=\\\"note-context\\\">\").concat(item[i].content, \"</p>\\n                        </li>\");\n        $('#notes-wall').append(template);\n        console.log(noteArray[i]);\n      }\n    },\n    _addNote: function _addNote() {\n      var getForm = $('#main-content .container.mode-add form');\n      var form = {\n        title: getForm.find('label[for=title] input').val(),\n        marked: false,\n        context: getForm.find('textarea').val()\n      };\n      var testData = {\n        title: '123',\n        marked: true,\n        content: '靈感總是說來就來，所以就隨手記一下~草當主題 花當主題 天空主題'\n      };\n      form = testData;\n      noteBook.notesList.push(form);\n\n      noteBook._updateData(noteBook.notesList);\n    },\n    _addsidenavBtnListener: function _addsidenavBtnListener(item) {\n      item.on('click', function () {\n        $('#wrap').toggleClass('menu-opened');\n      });\n    }\n  };\n  noteBook.init(); // define how marked icons works on click\n  // $('.material-icons.star').on('click', function(){\n  //   let marked = ($(this).attr('data-marked') == 'true') ? true : false;\n  //   let index = $(this).parent().attr('data-index');\n  //   marked = !marked;\n  //   $(this).attr('data-marked', marked);\n  //   notesList[index].marked = marked;\n  //   console.log('現在的狀態', notesList[index]);  \n  // });\n  // $('.note-block').on('click', function(){\n  //   $('#wrap').addClass('show-note');\n  // })\n});\n\n//# sourceURL=webpack:///./javascript/_general_layout.js?");

/***/ }),

/***/ "./stylesheets/index.scss":
/*!********************************!*\
  !*** ./stylesheets/index.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./stylesheets/index.scss?");

/***/ })

/******/ });