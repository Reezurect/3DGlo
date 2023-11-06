/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_timer__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n_modules_timer__WEBPACK_IMPORTED_MODULE_0___default()('10 november 2023')\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ (() => {

eval("\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    const countTimer = (dedline) => {\r\n        const timerHours = document.querySelector('#timer-hours'),\r\n            timerMinutes = document.querySelector('#timer-minutes'),\r\n            timerSecunds = document.querySelector('#timer-seconds');\r\n        let idInterval = 0;\r\n\r\n        const getTimeRemaining = () => {\r\n            const dateStop = new Date(dedline).getTime(),\r\n                dateNow = new Date().getTime(),\r\n                timeRemaining = (dateStop - dateNow) / 1000;\r\n            let seconds = 0,\r\n                minutes = 0,\r\n                hours = 0;\r\n            if (timeRemaining > 0) {\r\n                seconds = Math.floor(timeRemaining % 60);\r\n                minutes = Math.floor((timeRemaining / 60) % 60);\r\n                hours = Math.floor(timeRemaining / 60 / 60);\r\n            }\r\n            return {\r\n                timeRemaining,\r\n                hours,\r\n                minutes,\r\n                seconds\r\n            };\r\n        };\r\n        const addZero = elem => {\r\n            if (String(elem).length === 1) { return '0' + elem; } else { return String(elem); }\r\n        };\r\n\r\n        const updateClock = () => {\r\n            let timer = getTimeRemaining();\r\n            timerHours.textContent = addZero(timer.hours);\r\n            timerMinutes.textContent = addZero(timer.minutes);\r\n            timerSecunds.textContent = addZero(timer.seconds);\r\n\r\n            console.log('timer.timeRemaining: ', timer.timeRemaining);\r\n            if (timer.timeRemaining < 0) {\r\n                clearInterval(idInterval);\r\n            }\r\n            console.log('idInterval: ', idInterval);\r\n        };\r\n\r\n        idInterval = setInterval(updateClock, 1000);\r\n    };\r\n    countTimer('10 november 2023');\r\n});\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;