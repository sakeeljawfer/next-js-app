"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_favorites_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/favorites-context */ \"./store/favorites-context.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_favorites_context__WEBPACK_IMPORTED_MODULE_2__.Contextpro, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: \"/Users/sjawfer/Documents/GitHub/next-js-app/pages/_app.js\",\n            lineNumber: 5,\n            columnNumber: 22\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sjawfer/Documents/GitHub/next-js-app/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUN3QjtBQUV0RCxTQUFTQyxLQUFLLENBQUMsS0FBd0IsRUFBRTtRQUF4QkMsU0FBUyxHQUFYLEtBQXdCLENBQXRCQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBd0IsQ0FBWEEsU0FBUztJQUNuQyxxQkFBTyw4REFBQ0gsZ0VBQVU7a0JBQUMsNEVBQUNFLFNBQVMsb0JBQUtDLFNBQVM7Ozs7Z0JBQUk7Ozs7O1lBQWE7Q0FDN0Q7QUFGUUYsS0FBQUEsS0FBSztBQUlkLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7Q29udGV4dHByb30gZnJvbSBcIi4uL3N0b3JlL2Zhdm9yaXRlcy1jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPENvbnRleHRwcm8+PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjwvQ29udGV4dHBybz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJDb250ZXh0cHJvIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/favorites-context.js":
/*!************************************!*\
  !*** ./store/favorites-context.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoritesContextProvider\": function() { return /* binding */ FavoritesContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nvar FavoritesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    favorites: [],\n    totalFavorites: 0,\n    addFavorite: function(favoriteMeetup) {},\n    removeFavorite: function(meetupId) {},\n    itemIsFavorite: function(meetupId) {}\n});\nfunction FavoritesContextProvider(props) {\n    var addFavoriteHandler = function addFavoriteHandler(favoriteMeetup) {\n        setUserFavorites(function(prevUserFavorites) {\n            return prevUserFavorites.concat(favoriteMeetup);\n        });\n    };\n    var removeFavoriteHandler = function removeFavoriteHandler(meetupId) {\n        setUserFavorites(function(prevUserFavorites) {\n            return prevUserFavorites.filter(function(meetup) {\n                return meetup.id !== meetupId;\n            });\n        });\n    };\n    var itemIsFavoriteHandler = function itemIsFavoriteHandler(meetupId) {\n        return userFavorites.some(function(meetup) {\n            return meetup.id === meetupId;\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), userFavorites = ref[0], setUserFavorites = ref[1];\n    var context = {\n        favorites: userFavorites,\n        totalFavorites: userFavorites.length,\n        addFavorite: addFavoriteHandler,\n        removeFavorite: removeFavoriteHandler,\n        itemIsFavorite: itemIsFavoriteHandler\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoritesContext.Provider, {\n        value: context,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/sjawfer/Documents/GitHub/next-js-app/store/favorites-context.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(FavoritesContextProvider, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = FavoritesContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavoritesContext);\nvar _c;\n$RefreshReg$(_c, \"FavoritesContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9mYXZvcml0ZXMtY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWdEOztBQUVoRCxJQUFNRSxnQkFBZ0IsaUJBQUdGLG9EQUFhLENBQUM7SUFDckNHLFNBQVMsRUFBRSxFQUFFO0lBQ2JDLGNBQWMsRUFBRSxDQUFDO0lBQ2pCQyxXQUFXLEVBQUUsU0FBQ0MsY0FBYyxFQUFLLEVBQUU7SUFDbkNDLGNBQWMsRUFBRSxTQUFDQyxRQUFRLEVBQUssRUFBRTtJQUNoQ0MsY0FBYyxFQUFFLFNBQUNELFFBQVEsRUFBSyxFQUFFO0NBQ2pDLENBQUM7QUFFSyxTQUFTRSx3QkFBd0IsQ0FBQ0MsS0FBSyxFQUFFO1FBR3JDQyxrQkFBa0IsR0FBM0IsU0FBU0Esa0JBQWtCLENBQUNOLGNBQWMsRUFBRTtRQUMxQ08sZ0JBQWdCLENBQUMsU0FBQ0MsaUJBQWlCLEVBQUs7WUFDdEMsT0FBT0EsaUJBQWlCLENBQUNDLE1BQU0sQ0FBQ1QsY0FBYyxDQUFDLENBQUM7U0FDakQsQ0FBQyxDQUFDO0tBQ0o7UUFFUVUscUJBQXFCLEdBQTlCLFNBQVNBLHFCQUFxQixDQUFDUixRQUFRLEVBQUU7UUFDdkNLLGdCQUFnQixDQUFDQyxTQUFBQSxpQkFBaUIsRUFBSTtZQUNwQyxPQUFPQSxpQkFBaUIsQ0FBQ0csTUFBTSxDQUFDQyxTQUFBQSxNQUFNO3VCQUFJQSxNQUFNLENBQUNDLEVBQUUsS0FBS1gsUUFBUTthQUFBLENBQUMsQ0FBQztTQUNuRSxDQUFDLENBQUM7S0FDSjtRQUVRWSxxQkFBcUIsR0FBOUIsU0FBU0EscUJBQXFCLENBQUNaLFFBQVEsRUFBRTtRQUN2QyxPQUFPYSxhQUFhLENBQUNDLElBQUksQ0FBQ0osU0FBQUEsTUFBTTttQkFBSUEsTUFBTSxDQUFDQyxFQUFFLEtBQUtYLFFBQVE7U0FBQSxDQUFDLENBQUM7S0FDN0Q7O0lBaEJELElBQTBDUCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWHhELGFBV3NCLEdBQXNCQSxHQUFZLEdBQWxDLEVBWHRCLGdCQVd3QyxHQUFJQSxHQUFZLEdBQWhCO0lBa0J0QyxJQUFNc0IsT0FBTyxHQUFHO1FBQ2RwQixTQUFTLEVBQUVrQixhQUFhO1FBQ3hCakIsY0FBYyxFQUFFaUIsYUFBYSxDQUFDRyxNQUFNO1FBQ3BDbkIsV0FBVyxFQUFFTyxrQkFBa0I7UUFDL0JMLGNBQWMsRUFBRVMscUJBQXFCO1FBQ3JDUCxjQUFjLEVBQUVXLHFCQUFxQjtLQUN0QztJQUVELHFCQUNFLDhEQUFDbEIsZ0JBQWdCLENBQUN1QixRQUFRO1FBQUNDLEtBQUssRUFBRUgsT0FBTztrQkFDdENaLEtBQUssQ0FBQ2dCLFFBQVE7Ozs7O1lBQ1csQ0FDNUI7Q0FDSDtHQWhDZWpCLHdCQUF3QjtBQUF4QkEsS0FBQUEsd0JBQXdCO0FBa0N4QywrREFBZVIsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZmF2b3JpdGVzLWNvbnRleHQuanM/ZDBmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRmF2b3JpdGVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICBmYXZvcml0ZXM6IFtdLFxuICB0b3RhbEZhdm9yaXRlczogMCxcbiAgYWRkRmF2b3JpdGU6IChmYXZvcml0ZU1lZXR1cCkgPT4ge30sXG4gIHJlbW92ZUZhdm9yaXRlOiAobWVldHVwSWQpID0+IHt9LFxuICBpdGVtSXNGYXZvcml0ZTogKG1lZXR1cElkKSA9PiB7fVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBGYXZvcml0ZXNDb250ZXh0UHJvdmlkZXIocHJvcHMpIHtcbiAgY29uc3QgW3VzZXJGYXZvcml0ZXMsIHNldFVzZXJGYXZvcml0ZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGZ1bmN0aW9uIGFkZEZhdm9yaXRlSGFuZGxlcihmYXZvcml0ZU1lZXR1cCkge1xuICAgIHNldFVzZXJGYXZvcml0ZXMoKHByZXZVc2VyRmF2b3JpdGVzKSA9PiB7XG4gICAgICByZXR1cm4gcHJldlVzZXJGYXZvcml0ZXMuY29uY2F0KGZhdm9yaXRlTWVldHVwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZhdm9yaXRlSGFuZGxlcihtZWV0dXBJZCkge1xuICAgIHNldFVzZXJGYXZvcml0ZXMocHJldlVzZXJGYXZvcml0ZXMgPT4ge1xuICAgICAgcmV0dXJuIHByZXZVc2VyRmF2b3JpdGVzLmZpbHRlcihtZWV0dXAgPT4gbWVldHVwLmlkICE9PSBtZWV0dXBJZCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpdGVtSXNGYXZvcml0ZUhhbmRsZXIobWVldHVwSWQpIHtcbiAgICByZXR1cm4gdXNlckZhdm9yaXRlcy5zb21lKG1lZXR1cCA9PiBtZWV0dXAuaWQgPT09IG1lZXR1cElkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgZmF2b3JpdGVzOiB1c2VyRmF2b3JpdGVzLFxuICAgIHRvdGFsRmF2b3JpdGVzOiB1c2VyRmF2b3JpdGVzLmxlbmd0aCxcbiAgICBhZGRGYXZvcml0ZTogYWRkRmF2b3JpdGVIYW5kbGVyLFxuICAgIHJlbW92ZUZhdm9yaXRlOiByZW1vdmVGYXZvcml0ZUhhbmRsZXIsXG4gICAgaXRlbUlzRmF2b3JpdGU6IGl0ZW1Jc0Zhdm9yaXRlSGFuZGxlclxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZhdm9yaXRlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvRmF2b3JpdGVzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzQ29udGV4dDsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiRmF2b3JpdGVzQ29udGV4dCIsImZhdm9yaXRlcyIsInRvdGFsRmF2b3JpdGVzIiwiYWRkRmF2b3JpdGUiLCJmYXZvcml0ZU1lZXR1cCIsInJlbW92ZUZhdm9yaXRlIiwibWVldHVwSWQiLCJpdGVtSXNGYXZvcml0ZSIsIkZhdm9yaXRlc0NvbnRleHRQcm92aWRlciIsInByb3BzIiwiYWRkRmF2b3JpdGVIYW5kbGVyIiwic2V0VXNlckZhdm9yaXRlcyIsInByZXZVc2VyRmF2b3JpdGVzIiwiY29uY2F0IiwicmVtb3ZlRmF2b3JpdGVIYW5kbGVyIiwiZmlsdGVyIiwibWVldHVwIiwiaWQiLCJpdGVtSXNGYXZvcml0ZUhhbmRsZXIiLCJ1c2VyRmF2b3JpdGVzIiwic29tZSIsImNvbnRleHQiLCJsZW5ndGgiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/favorites-context.js\n");

/***/ })

});