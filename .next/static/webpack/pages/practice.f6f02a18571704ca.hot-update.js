"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/practice",{

/***/ "./pages/practice.js":
/*!***************************!*\
  !*** ./pages/practice.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ practice; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Title */ \"./components/Title.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction practice() {\n    var _this = this;\n    _s();\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            title: \"Practice\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Mango\"), inputList = ref[0], setInputList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), item = ref1[0], setItem = ref1[1];\n    var itemEvent = function(e) {\n        //console.log(e);\n        setInputList(e.target.value);\n    };\n    var handleClick = function() {\n        setItem(function(olditems) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(olditems).concat([\n                inputList\n            ]);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid my-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-sm-6 mx-auto shadow-lg p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-center\",\n                            children: \" To Do List \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container-fluid\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-9\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                className: \"form-control\",\n                                                placeholder: \"Write Here\",\n                                                required: true,\n                                                onChange: itemEvent\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                                lineNumber: 31,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-warning px-5 font-weight-bold\",\n                                                onClick: handleClick,\n                                                children: \"Add\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"conatiner\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-unstyled row m-5\",\n                                        children: [\n                                            item.map(function(itemvalue) {\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"btn btn-warning px-5 font-weight-bold\",\n                                                    onClick: handleClick,\n                                                    children: \"Add\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 19\n                                                }, _this);\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"list-unstyled row m-5\",\n                                                    children: itemvalue\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 33\n                                                }, _this);\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"Next Js\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n_s(practice, \"WS7+T8IB+HzPQqfpx6Mt+0TygOk=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcmFjdGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDWDtBQUNJOztBQUVqQixTQUFTRyxRQUFRLEdBQUc7OztrQkFDL0IsOERBQUNGLGtEQUFJO2tCQUNMLDRFQUFDRCx5REFBSztZQUFDSSxLQUFLLEVBQUMsVUFBVTs7Ozs7Z0JBQUc7Ozs7O1lBQ25CO0lBQ1AsSUFBa0NGLEdBQWlCLEdBQWpCQSwrQ0FBUSxDQUFDLE9BQU8sQ0FBQyxFQUE1Q0csU0FBUyxHQUFrQkgsR0FBaUIsR0FBbkMsRUFBRUksWUFBWSxHQUFJSixHQUFpQixHQUFyQjtJQUM5QixJQUF3QkEsSUFBYSxHQUFiQSwrQ0FBUSxDQUFFLEVBQUUsQ0FBQyxFQUE5QkssSUFBSSxHQUFhTCxJQUFhLEdBQTFCLEVBQUVNLE9BQU8sR0FBSU4sSUFBYSxHQUFqQjtJQUNwQixJQUFNTyxTQUFTLEdBQUUsU0FBQ0MsQ0FBQyxFQUFHO1FBQ2xCLGlCQUFpQjtRQUNqQkosWUFBWSxDQUFDSSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDaEM7SUFDRCxJQUFNQyxXQUFXLEdBQUcsV0FBSztRQUNyQkwsT0FBTyxDQUFDLFNBQUNNLFFBQVEsRUFBRztZQUNoQixPQUFPLHFGQUFJQSxRQUFRLENBQVJBLFFBQUo7Z0JBQWNULFNBQVM7YUFBQztTQUNsQyxDQUFDO0tBRUw7SUFDRCxxQkFDRTtrQkFDRSw0RUFBQ1UsS0FBRztZQUFDQyxTQUFTLEVBQUMsc0JBQXNCO3NCQUNyQyw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEtBQUs7MEJBQ2xCLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsZ0NBQWdDOztzQ0FDL0MsOERBQUNDLElBQUU7NEJBQUNELFNBQVMsRUFBQyxhQUFhO3NDQUFDLGNBQVk7Ozs7O2dDQUFLO3NDQUMzQyw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs7OENBRTlCLDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsS0FBSzs7c0RBQ2xCLDhEQUFDRCxLQUFHOzRDQUFDQyxTQUFTLEVBQUMsT0FBTztzREFDcEIsNEVBQUNFLE9BQUs7Z0RBQUNDLElBQUksRUFBQyxNQUFNO2dEQUFDSCxTQUFTLEVBQUMsY0FBYztnREFBQ0ksV0FBVyxFQUFDLFlBQVk7Z0RBQUNDLFFBQVE7Z0RBQUNDLFFBQVEsRUFBRWIsU0FBUzs7Ozs7b0RBQUk7Ozs7O2dEQUNqRztzREFDTiw4REFBQ00sS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLE9BQU87c0RBQ3BCLDRFQUFDTyxRQUFNO2dEQUFDUCxTQUFTLEVBQUMsdUNBQXVDO2dEQUFDUSxPQUFPLEVBQUVYLFdBQVc7MERBQUUsS0FBRzs7Ozs7b0RBQVM7Ozs7O2dEQUN4Rjs7Ozs7O3dDQUNGOzhDQUNOLDhEQUFDRSxLQUFHO29DQUFDQyxTQUFTLEVBQUMsV0FBVzs4Q0FDeEIsNEVBQUNTLElBQUU7d0NBQUNULFNBQVMsRUFBQyx1QkFBdUI7OzRDQVFqQ1QsSUFBSSxDQUFDbUIsR0FBRyxDQUFDLFNBQUNDLFNBQVMsRUFBRzs4REFDeEIsOERBQUNKLFFBQU07b0RBQUNQLFNBQVMsRUFBQyx1Q0FBdUM7b0RBQUNRLE9BQU8sRUFBRVgsV0FBVzs4REFBRSxLQUFHOzs7Ozt5REFBUztnREFDdEYscUJBQVEsOERBQUNlLElBQUU7b0RBQUNaLFNBQVMsRUFBQyx1QkFBdUI7OERBQUdXLFNBQVM7Ozs7O3lEQUFNLENBQUM7NkNBQ25FLENBQUM7MERBRUosOERBQUNDLElBQUU7MERBQUMsU0FBTzs7Ozs7b0RBQUs7Ozs7Ozs0Q0FDYjs7Ozs7d0NBSUQ7Ozs7OztnQ0FDRjs7Ozs7O3dCQUVGOzs7OztvQkFDRjs7Ozs7Z0JBQ0E7cUJBQ0wsQ0FFSjtDQUNGO0dBNURxQnpCLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJhY3RpY2UuanM/NmIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGl0bGVcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJhY3RpY2UoKSB7XHJcbiAgICA8SGVhZD5cclxuICAgIDxUaXRsZSB0aXRsZT1cIlByYWN0aWNlXCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIGNvbnN0IFtpbnB1dExpc3QsIHNldElucHV0TGlzdF0gPSB1c2VTdGF0ZShcIk1hbmdvXCIpO1xyXG4gICAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUgKFtdKTtcclxuICAgIGNvbnN0IGl0ZW1FdmVudCA9KGUpPT57XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcclxuICAgICAgICBzZXRJbnB1dExpc3QoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PntcclxuICAgICAgICBzZXRJdGVtKChvbGRpdGVtcyk9PntcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5vbGRpdGVtcywgaW5wdXRMaXN0XVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXktNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IG14LWF1dG8gc2hhZG93LWxnIHAtM1wiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+IFRvIERvIExpc3QgPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTlcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBIZXJlXCIgcmVxdWlyZWQgb25DaGFuZ2U9e2l0ZW1FdmVudH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZyBweC01IGZvbnQtd2VpZ2h0LWJvbGRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmF0aW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgcm93IG0tNVwiPlxyXG4gICAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXRlbXMubWFwKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxQbGFuIGtleT17aX0gaWQ9e2l9IHZhbHVlPXt2YWx1ZX0gc2VuZERhdGE9e3RoaXMuaGFuZGxlRGVsZXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8bGk+e2lucHV0TGlzdH08L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubWFwKChpdGVtdmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nIHB4LTUgZm9udC13ZWlnaHQtYm9sZFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8bGkgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCByb3cgbS01XCIgPntpdGVtdmFsdWV9PC9saT4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8bGk+TmV4dCBKczwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIHJvdyBtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPFBsYW4gcD17dGhpcy5zdGF0ZS5pdGVtc30gc2VuZERhdGE9e3RoaXMuaGFuZGxlRGVsZXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIFxyXG4gICAgKVxyXG4gIH0iXSwibmFtZXMiOlsiVGl0bGUiLCJIZWFkIiwidXNlU3RhdGUiLCJwcmFjdGljZSIsInRpdGxlIiwiaW5wdXRMaXN0Iiwic2V0SW5wdXRMaXN0IiwiaXRlbSIsInNldEl0ZW0iLCJpdGVtRXZlbnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsIm9sZGl0ZW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJpdGVtdmFsdWUiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/practice.js\n"));

/***/ })

});