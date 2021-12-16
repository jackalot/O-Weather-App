/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@jackalot/createdropdown.js/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@jackalot/createdropdown.js/index.js ***!
  \***********************************************************/
/***/ ((module) => {

eval("function createDropdown(parent, labelText, options) {\n    const split = labelText.split(' ');\n    const joined = split.join('-');\n    //  creates the label and the text for the label\n    function createLabel() {\n      const x = document.createElement('LABEL');\n      const t = document.createTextNode(labelText);\n      x.setAttribute('for', labelText);\n      x.appendChild(t);\n      parent.appendChild(x);\n    }\n    createLabel();\n    function displayOrHideOptionsDiv() {\n      const optionsDiv = document.querySelector(`#${joined}-optionsDiv`);\n      if (optionsDiv.style.display === 'block') {\n        optionsDiv.style.display = 'none';\n      } else {\n        optionsDiv.style.display = 'block';\n      }\n    }\n    function createDropDownButton() {\n      //  creates the dropdown button, gives it an id, and appends it\n      const dropDownButton = document.createElement('button');\n      dropDownButton.id = `${joined}-dropDownButton`;\n      dropDownButton.setAttribute('name', labelText);\n      dropDownButton.textContent = 'dropdown';\n      parent.appendChild(dropDownButton);\n      dropDownButton.addEventListener('click', displayOrHideOptionsDiv);\n    }\n    createDropDownButton();\n    function createOptionsDiv() {\n      const optionsDiv = document.createElement('div');\n      optionsDiv.style.display = 'none';\n      optionsDiv.id = `${joined}-optionsDiv`;\n      parent.appendChild(optionsDiv);\n      console.log(`#${joined}-optionsDiv`);\n    }\n    createOptionsDiv();\n    function changeDropDownSelection(newValue) {\n      //  changes the current dropdown selection according to which button clicks it\n      const dropDownButton = document.querySelector(`#${joined}-dropDownButton`);\n      dropDownButton.textContent = newValue;\n    }\n    function createOptions() {\n      //    creates the options for the dropdown and makes it so that each option has a button that\n      //    calls changeDropDownSelection with their value.\n      console.log(`#${joined}-optionsDiv`);\n      const optionsDiv = document.querySelector(`#${joined}-optionsDiv`);\n      for (let i = 0; i < options.length; i++) {\n        const newSelection = document.createElement('button');\n        newSelection.textContent = options[i];\n        newSelection.classList.add('dropDown-Options');\n        optionsDiv.appendChild(newSelection);\n        newSelection.addEventListener('click', () => {\n          newSelection.classList.add('currently-Selected');\n          changeDropDownSelection(options[i]);\n        });\n      }\n      parent.appendChild(optionsDiv);\n    }\n    createOptions();\n  }\n  module.exports = createDropdown\n  \n\n//# sourceURL=webpack://O-Weather-App/./node_modules/@jackalot/createdropdown.js/index.js?");

/***/ }),

/***/ "./src/createForm.js":
/*!***************************!*\
  !*** ./src/createForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _jackalot_createdropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jackalot/createdropdown.js */ \"./node_modules/@jackalot/createdropdown.js/index.js\");\n/* harmony import */ var _jackalot_createdropdown_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jackalot_createdropdown_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction createForm() {\n  const body = document.querySelector('body');\n  _jackalot_createdropdown_js__WEBPACK_IMPORTED_MODULE_0___default()(body, 'How would you like to find the weather', ['city name', 'zip code and country', 'longitude and latitude']);\n  function createNewLabel(labelText) {\n    const x = document.createElement('LABEL');\n    const y = document.createTextNode(labelText);\n    x.setAttribute('for', labelText);\n    x.append(y);\n    body.appendChild(x);\n  }\n  createNewLabel('this is a test');\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForm);\n\n\n//# sourceURL=webpack://O-Weather-App/./src/createForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createForm */ \"./src/createForm.js\");\n\n\nasync function fetchGiffy() {\n  const image = document.querySelector('.giffy');\n  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=1wCBlxlhZg8hx21BVDkIfPtthGp61X1f&s=sample', { mode: 'cors' });\n  const queryData = await response.json();\n  image.src = queryData.data.images.original.url;\n}\n\nconst fetchGiffyBtn = document.querySelector('.fetch-giffy');\nfetchGiffyBtn.addEventListener('click', () => {\n  fetchGiffy();\n  //    later we can add a parameter to fetchGiffy() to display for example,\n  //    a clear weather giff, for now it will display something related to sample\n});\nasync function fetchWeather() {\n  const weatherParagraph = document.querySelector('.weather');\n  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Miami&APPID=ea13d76af44f95e6e901a4a69585bb22', { mode: 'cors' });\n  const weatherData = await response.json();\n  console.log(weatherData);\n}\nconst fetchWeatherBtn = document.querySelector('.fetch-weather');\nfetchWeatherBtn.addEventListener('click', () => {\n  fetchWeather();\n});\n(0,_createForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://O-Weather-App/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;