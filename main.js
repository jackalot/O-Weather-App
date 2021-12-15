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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function fetchGiffy() {\n  const image = document.querySelector('.giffy');\n  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=1wCBlxlhZg8hx21BVDkIfPtthGp61X1f&s=sample', { mode: 'cors' });\n  const queryData = await response.json();\n  image.src = queryData.data.images.original.url;\n}\nconst fetchGiffyBtn = document.querySelector('.fetch-giffy');\nfetchGiffyBtn.addEventListener('click', () => {\n  fetchGiffy();\n  //    later we can add a parameter to fetchGiffy() to display for example,\n  //    a clear weather giff, for now it will display something related to sample\n});\n\n\n//# sourceURL=webpack://O-Weather-App/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;