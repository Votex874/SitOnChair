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
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nconsole.log(\"Dupa\");\n\n//dropdown\nvar dropDown = document.querySelector(\"nav ul\").firstElementChild;\n\ndropDown.addEventListener(\"mouseover\", function () {\n    this.style.paddingBottom = \"40px\";\n    this.firstElementChild.classList.add(\"dropDown\");\n});\ndropDown.addEventListener(\"mouseout\", function () {\n    this.firstElementChild.classList.remove(\"dropDown\");\n});\n\n//znikanie opisu na zdj sekcja2\n\nvar imgContainer = [].concat(_toConsumableArray(document.querySelectorAll(\".imgContainer\")));\n\nimgContainer.forEach(function (e) {\n    e.addEventListener(\"mouseover\", function () {\n        var children = [].concat(_toConsumableArray(this.children));\n        children.forEach(function (e) {\n            e.style.display = \"none\";\n        });\n    });\n    e.addEventListener(\"mouseout\", function () {\n        var children = [].concat(_toConsumableArray(this.children));\n        children.forEach(function (e) {\n            e.style.display = \"block\";\n        });\n    });\n});\n\n//slider\n\nvar arrowLeft = document.querySelector(\".arrowLeft\");\nvar arrowRight = document.querySelector(\".arrowRight\");\nvar slider = document.querySelector(\".slider\");\nvar urlBlackChair = 'url(\"./images/black_chair.png\")';\nvar urlOrangeChair = 'url(\"./images/orange_chair.png\")';\nslider.style.backgroundImage = 'url(\"./images/black_chair.png\")';\n\narrowLeft.addEventListener(\"click\", function () {\n    if (slider.style.backgroundImage === urlBlackChair) {\n        slider.style.backgroundImage = urlOrangeChair;\n    } else slider.style.backgroundImage = urlBlackChair;\n});\narrowRight.addEventListener(\"click\", function () {\n    if (slider.style.backgroundImage === urlBlackChair) {\n        slider.style.backgroundImage = urlOrangeChair;\n    } else slider.style.backgroundImage = urlBlackChair;\n});\n\n//arrow kalkulator\n\nvar arrow = [].concat(_toConsumableArray(document.querySelectorAll(\".list_arrow\")));\narrow.forEach(function (e) {\n    e.addEventListener(\"click\", function (e) {\n        var listPanel = e.currentTarget.nextElementSibling;\n        if (listPanel.style.display === \"block\") {\n            listPanel.style.display = \"none\";\n        } else {\n            listPanel.style.display = \"block\";\n        }\n    });\n});\n\nvar dropDownList = [].concat(_toConsumableArray(document.querySelectorAll(\".drop_down_list\")));\nvar typeOptions = [].concat(_toConsumableArray(dropDownList[0].lastElementChild.children));\nvar colorOptions = [].concat(_toConsumableArray(dropDownList[1].lastElementChild.children));\nvar patternOptions = [].concat(_toConsumableArray(dropDownList[2].lastElementChild.children));\nvar transportCheck = document.querySelector(\".checkbox #transport\");\nvar leftPanelChairType = document.querySelector(\".panel_left .title\");\nvar leftPanelColorOption = document.querySelector(\".panel_left .color\");\nvar leftPanelPatternOption = document.querySelector(\".panel_left .pattern\");\nvar leftPanelTransport = document.querySelector(\".panel_left .transport\");\nvar rightPanelChairType = document.querySelector(\".panel_right .title\");\nvar rightPanelColorOption = document.querySelector(\".panel_right .color\");\nvar rightPanelPatternOption = document.querySelector(\".panel_right .pattern\");\nvar rightPanelTransport = document.querySelector(\".panel_right .transport\");\nvar sum = document.querySelector(\".sum\");\n\n// wybranie danego typu krzesla i wrzucenie jego nazwy do kalkulatora\n\nvar checkValue = function checkValue(valueOfRightSide) {\n    var sumOfProduct = parseInt(sum.innerText + valueOfRightSide);\n    sum.innerText = sumOfProduct;\n    console.log(sumOfProduct);\n};\n\ntypeOptions.forEach(function (e) {\n    e.addEventListener(\"click\", function () {\n        leftPanelChairType.innerText = this.innerText;\n        rightPanelChairType.innerText = \"200\";\n        checkValue(rightPanelChairType);\n    });\n});\n\ncolorOptions.forEach(function (e) {\n    e.addEventListener(\"click\", function () {\n        leftPanelColorOption.innerText = this.innerText;\n        rightPanelColorOption.innerText = 0;\n    });\n});\n\npatternOptions.forEach(function (e) {\n    e.addEventListener(\"click\", function () {\n        leftPanelPatternOption.innerText = this.innerText;\n        rightPanelPatternOption.innerText = 0;\n    });\n});\n\ntransportCheck.addEventListener(\"click\", function () {\n    if (this.checked === true) {\n        leftPanelTransport.innerText = \"Transport\";\n        rightPanelTransport.innerText = \"70\";\n        checkValue(rightPanelTransport.innerText);\n        checkValue(rightPanelTransport);\n    } else {\n        leftPanelTransport.innerText = \"\";\n        rightPanelTransport.innerText = \"\";\n        checkValue(rightPanelTransport.innerText);\n    }\n});\n\nconsole.log(typeOptions);\nconsole.log(colorOptions);\nconsole.log(patternOptions);\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });