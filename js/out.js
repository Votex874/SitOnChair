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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _calculator = __webpack_require__(/*! ./partials/calculator */ \"./js/partials/calculator.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar user = new _calculator.userDecision();\nuser.userMenu();\n\n//hamburger menu\nvar hamburger = document.querySelector(\".fas\");\nvar number = 0;\nhamburger.addEventListener(\"click\", function () {\n\n    if (number === 0) {\n        console.log(\"dupa\");\n        this.firstElementChild.style.display = \"block\";\n        number++;\n    } else {\n        this.firstElementChild.style.display = \"none\";\n        number--;\n    }\n});\n//dropdown\nvar dropDown = document.querySelector(\"nav > ul\").firstElementChild;\n\ndropDown.addEventListener(\"mouseover\", function () {\n    this.style.paddingBottom = \"40px\";\n    this.firstElementChild.classList.add(\"dropDown\");\n});\ndropDown.addEventListener(\"mouseout\", function () {\n    this.firstElementChild.classList.remove(\"dropDown\");\n});\n\n//znikanie opisu na zdj sekcja2\n\nvar imgContainer = [].concat(_toConsumableArray(document.querySelectorAll(\".imgContainer\")));\n\nimgContainer.forEach(function (e) {\n    e.addEventListener(\"mouseover\", function () {\n        var children = [].concat(_toConsumableArray(this.children));\n        children.forEach(function (e) {\n            e.style.display = \"none\";\n        });\n    });\n    e.addEventListener(\"mouseout\", function () {\n        var children = [].concat(_toConsumableArray(this.children));\n        children.forEach(function (e) {\n            e.style.display = \"block\";\n        });\n    });\n});\n\nslider;\n\nvar arrowLeft = document.querySelector(\".arrowLeft\");\nvar arrowRight = document.querySelector(\".arrowRight\");\nvar slider = document.querySelector(\".slider\");\nvar urlBlackChair = 'url(\"./images/black_chair.png\")';\nvar urlOrangeChair = 'url(\"./images/orange_chair.png\")';\nslider.style.backgroundImage = 'url(\"./images/black_chair.png\")';\n\narrowLeft.addEventListener(\"click\", function () {\n    if (slider.style.backgroundImage === urlBlackChair) {\n        slider.style.backgroundImage = urlOrangeChair;\n    } else slider.style.backgroundImage = urlBlackChair;\n});\narrowRight.addEventListener(\"click\", function () {\n    if (slider.style.backgroundImage === urlBlackChair) {\n        slider.style.backgroundImage = urlOrangeChair;\n    } else slider.style.backgroundImage = urlBlackChair;\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/partials/calculator.js":
/*!***********************************!*\
  !*** ./js/partials/calculator.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar userDecision = function () {\n    function userDecision() {\n        _classCallCheck(this, userDecision);\n\n        this.userChairType = document.querySelector(\".panel_right .title\");\n        this.userChairColor = document.querySelector(\".panel_right .color\");\n        this.userChairPattern = document.querySelector(\".panel_right .pattern\");\n        this.userTransport = document.querySelector(\".panel_right .transport\");\n        this.listArrows = [].concat(_toConsumableArray(document.querySelectorAll(\".list_arrow\")));\n        this.sumOfProducts = document.querySelector(\".sum strong\");\n    }\n\n    _createClass(userDecision, [{\n        key: \"summary\",\n        value: function summary() {\n            var valueOptions = [].concat(_toConsumableArray(document.querySelectorAll(\".value\")));\n            var valueOfProducts = [];\n            valueOptions.forEach(function (e) {\n                if (e.innerText === \"\") {\n                    valueOfProducts.push(0);\n                } else {\n                    valueOfProducts.push(e.innerText);\n                }\n            });\n            var summary = valueOfProducts.reduce(function (prev, curr) {\n                return parseInt(prev) + parseInt(curr);\n            }, 0);\n            this.sumOfProducts.innerText = summary;\n        }\n    }, {\n        key: \"chooseOptions\",\n        value: function chooseOptions() {\n            this.listArrows.forEach(function (e) {\n                e.addEventListener(\"click\", function () {\n                    var listPanel = this.nextElementSibling;\n                    if (listPanel.style.display === \"block\") {\n                        listPanel.style.display = \"none\";\n                    } else {\n                        listPanel.style.display = \"block\";\n                    }\n                });\n            });\n        }\n    }, {\n        key: \"chooseTransport\",\n        value: function chooseTransport() {\n            var _this = this;\n\n            var checkTranposrt = document.querySelector(\"#transport\");\n            checkTranposrt.addEventListener(\"click\", function (e) {\n                if (e.currentTarget.checked === true) {\n                    _this.userTransport.innerText = 70;\n                    _this.summary();\n                    document.querySelector(\".panel_left .transport\").innerText = \"Transport\";\n                } else {\n                    _this.userTransport.innerText = \"\";\n                    _this.summary();\n                    document.querySelector(\".panel_left .transport\").innerText = \"\";\n                }\n            });\n        }\n    }, {\n        key: \"printType\",\n        value: function printType() {\n            var _this2 = this;\n\n            this.chooseOptions();\n            var optionsType = [].concat(_toConsumableArray(this.listArrows[0].nextElementSibling.children));\n            optionsType.forEach(function (e) {\n                e.addEventListener(\"click\", function (e) {\n                    _this2.listArrows[0].nextElementSibling.style.display = \"none\";\n                    var leftSidebar = document.querySelector(\".panel_left .title\");\n                    leftSidebar.innerText = e.currentTarget.innerText;\n                    _this2.userChairType.innerText = 210;\n                    _this2.summary();\n                });\n            });\n        }\n    }, {\n        key: \"printColor\",\n        value: function printColor() {\n            var _this3 = this;\n\n            this.chooseOptions();\n            var optionsType = [].concat(_toConsumableArray(this.listArrows[1].nextElementSibling.children));\n            optionsType.forEach(function (e) {\n                e.addEventListener(\"click\", function (e) {\n                    _this3.listArrows[1].nextElementSibling.style.display = \"none\";\n                    var leftSidebar = document.querySelector(\".panel_left .color\");\n                    leftSidebar.innerText = e.currentTarget.innerText;\n                    _this3.userChairColor.innerText = 30;\n                    _this3.summary();\n                });\n            });\n        }\n    }, {\n        key: \"printPattern\",\n        value: function printPattern() {\n            var _this4 = this;\n\n            this.chooseOptions();\n            var optionsType = [].concat(_toConsumableArray(this.listArrows[2].nextElementSibling.children));\n            optionsType.forEach(function (e) {\n                e.addEventListener(\"click\", function (e) {\n                    _this4.listArrows[2].nextElementSibling.style.display = \"none\";\n                    var leftSidebar = document.querySelector(\".panel_left .pattern\");\n                    leftSidebar.innerText = e.currentTarget.innerText;\n                    _this4.userChairPattern.innerText = 60;\n                    _this4.summary();\n                });\n            });\n        }\n    }, {\n        key: \"userMenu\",\n        value: function userMenu() {\n            this.printType();\n            this.printColor();\n            this.printPattern();\n            this.chooseTransport();\n        }\n    }]);\n\n    return userDecision;\n}();\n\nexports.userDecision = userDecision;\n\n//# sourceURL=webpack:///./js/partials/calculator.js?");

/***/ })

/******/ });