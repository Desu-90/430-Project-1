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

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ (() => {

eval("const handleResponse = async (response) => {\r\n    const content = document.getElementById('content');\r\n\r\n    switch(response.status) {\r\n        case 200:\r\n          content.innerHTML = `<b>Success</b>`;\r\n          break;\r\n        case 400:\r\n          content.innerHTML = `<b>Bad Request</b>`;\r\n          break;\r\n        case 404:\r\n          content.innerHTML = `<b>Not Found</b>`;\r\n          break;\r\n        default:\r\n          content.innerHTML = `<p>Status Code not Implemented By Client</p>`;\r\n          break;\r\n      };\r\n}\r\n\r\nconst sendFetch = async (userForm) => {\r\n    const response = await fetch(url);\r\n    handleResponse(response);\r\n}\r\n\r\nconst init = () => {\r\n    const confirmButton = document.querySelector('#bolusForm');\r\n\r\n    const doSomething = (e) => {\r\n        e.preventDefault();\r\n        sendFetch(confirmButton);\r\n        return false;\r\n    }\r\n\r\n    confirmButton.addEventListener('submit', doSomething);\r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://430-project-1/./client/client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/client.js"]();
/******/ 	
/******/ })()
;