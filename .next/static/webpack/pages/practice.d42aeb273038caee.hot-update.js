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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ practice; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Title */ \"./components/Title.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction practice() {\n    var _this = this;\n    _s();\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            title: \"Practice\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Mango\"), inputList = ref[0], setInputList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), item = ref1[0], setItem = ref1[1];\n    var itemEvent = function(e) {\n        //console.log(e);\n        setInputList(e.target.value);\n    };\n    var handleClick = function() {\n        setItem(function(olditems) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(olditems).concat([\n                inputList\n            ]);\n        });\n        setInputList(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid my-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-sm-6 mx-auto shadow-lg p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-center\",\n                            children: \" To Do List \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container-fluid\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-9\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                className: \"form-control\",\n                                                placeholder: \"Write Here\",\n                                                value: inputList,\n                                                onChange: itemEvent\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-warning px-5 font-weight-bold\",\n                                                onClick: handleClick,\n                                                children: \"Add\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"conatiner\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-unstyled row m-5\",\n                                        children: [\n                                            item.map(function(itemvalue) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"list-unstyled col-sm-8\",\n                                                    children: itemvalue\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 33\n                                                }, _this);\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-danger my-2 col-sm-2 offset-1\",\n                                                children: \"X\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Renu\\\\NextJs\\\\second-app\\\\pages\\\\practice.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n_s(practice, \"WS7+T8IB+HzPQqfpx6Mt+0TygOk=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcmFjdGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDWDtBQUNJOztBQUVqQixTQUFTRyxRQUFRLEdBQUc7OztrQkFDL0IsOERBQUNGLGtEQUFJO2tCQUNMLDRFQUFDRCx5REFBSztZQUFDSSxLQUFLLEVBQUMsVUFBVTs7Ozs7Z0JBQUc7Ozs7O1lBQ25CO0lBQ1AsSUFBa0NGLEdBQWlCLEdBQWpCQSwrQ0FBUSxDQUFDLE9BQU8sQ0FBQyxFQUE1Q0csU0FBUyxHQUFrQkgsR0FBaUIsR0FBbkMsRUFBRUksWUFBWSxHQUFJSixHQUFpQixHQUFyQjtJQUM5QixJQUF3QkEsSUFBYSxHQUFiQSwrQ0FBUSxDQUFFLEVBQUUsQ0FBQyxFQUE5QkssSUFBSSxHQUFhTCxJQUFhLEdBQTFCLEVBQUVNLE9BQU8sR0FBSU4sSUFBYSxHQUFqQjtJQUNwQixJQUFNTyxTQUFTLEdBQUUsU0FBQ0MsQ0FBQyxFQUFHO1FBQ2xCLGlCQUFpQjtRQUNqQkosWUFBWSxDQUFDSSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDaEM7SUFDRCxJQUFNQyxXQUFXLEdBQUcsV0FBSztRQUNyQkwsT0FBTyxDQUFDLFNBQUNNLFFBQVEsRUFBRztZQUNoQixPQUFPLHFGQUFJQSxRQUFRLENBQVJBLFFBQUo7Z0JBQWNULFNBQVM7YUFBQztTQUNsQyxDQUFDLENBQUM7UUFDSEMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBRXBCO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUNTLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjtzQkFDckMsNEVBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxLQUFLOzBCQUNsQiw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGdDQUFnQzs7c0NBQy9DLDhEQUFDQyxJQUFFOzRCQUFDRCxTQUFTLEVBQUMsYUFBYTtzQ0FBQyxjQUFZOzs7OztnQ0FBSztzQ0FDM0MsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxpQkFBaUI7OzhDQUU5Qiw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLEtBQUs7O3NEQUNsQiw4REFBQ0QsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLE9BQU87c0RBQ3BCLDRFQUFDRSxPQUFLO2dEQUFDQyxJQUFJLEVBQUMsTUFBTTtnREFBQ0gsU0FBUyxFQUFDLGNBQWM7Z0RBQUNJLFdBQVcsRUFBQyxZQUFZO2dEQUFDUixLQUFLLEVBQUlQLFNBQVM7Z0RBQUVnQixRQUFRLEVBQUVaLFNBQVM7Ozs7O29EQUFJOzs7OztnREFDNUc7c0RBQ04sOERBQUNNLEtBQUc7NENBQUNDLFNBQVMsRUFBQyxPQUFPO3NEQUNwQiw0RUFBQ00sUUFBTTtnREFBQ04sU0FBUyxFQUFDLHVDQUF1QztnREFBQ08sT0FBTyxFQUFFVixXQUFXOzBEQUFFLEtBQUc7Ozs7O29EQUFTOzs7OztnREFDeEY7Ozs7Ozt3Q0FDRjs4Q0FDTiw4REFBQ0UsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLFdBQVc7OENBQ3hCLDRFQUFDUSxJQUFFO3dDQUFDUixTQUFTLEVBQUMsdUJBQXVCOzs0Q0FRakNULElBQUksQ0FBQ2tCLEdBQUcsQ0FBQyxTQUFDQyxTQUFTLEVBQUc7Z0RBRWxCLHFCQUFRLDhEQUFDQyxJQUFFO29EQUFDWCxTQUFTLEVBQUMsd0JBQXdCOzhEQUFHVSxTQUFTOzs7Ozt5REFBTSxDQUFDOzZDQUNwRSxDQUFDOzBEQUVKLDhEQUFDSixRQUFNO2dEQUFDTixTQUFTLEVBQUMsdUNBQXVDOzBEQUFDLEdBQUM7Ozs7O29EQUFTOzs7Ozs7NENBQ2pFOzs7Ozt3Q0FJRDs7Ozs7O2dDQUNGOzs7Ozs7d0JBRUY7Ozs7O29CQUNGOzs7OztnQkFDQTtxQkFDTCxDQUVKO0NBQ0Y7R0E3RHFCYixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ByYWN0aWNlLmpzPzZiMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL1RpdGxlXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByYWN0aWNlKCkge1xyXG4gICAgPEhlYWQ+XHJcbiAgICA8VGl0bGUgdGl0bGU9XCJQcmFjdGljZVwiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICBjb25zdCBbaW5wdXRMaXN0LCBzZXRJbnB1dExpc3RdID0gdXNlU3RhdGUoXCJNYW5nb1wiKTtcclxuICAgIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlIChbXSk7XHJcbiAgICBjb25zdCBpdGVtRXZlbnQgPShlKT0+e1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgc2V0SW5wdXRMaXN0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT57XHJcbiAgICAgICAgc2V0SXRlbSgob2xkaXRlbXMpPT57XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4ub2xkaXRlbXMsIGlucHV0TGlzdF1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnB1dExpc3QoXCJcIik7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXktNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IG14LWF1dG8gc2hhZG93LWxnIHAtM1wiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+IFRvIERvIExpc3QgPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTlcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBIZXJlXCIgdmFsdWUgPXsgaW5wdXRMaXN0fSBvbkNoYW5nZT17aXRlbUV2ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nIHB4LTUgZm9udC13ZWlnaHQtYm9sZFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uYXRpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCByb3cgbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pdGVtcy5tYXAoKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFBsYW4ga2V5PXtpfSBpZD17aX0gdmFsdWU9e3ZhbHVlfSBzZW5kRGF0YT17dGhpcy5oYW5kbGVEZWxldGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfSAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIDxsaT57aW5wdXRMaXN0fTwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5tYXAoKGl0ZW12YWx1ZSk9PntcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGxpIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgY29sLXNtLThcIiA+e2l0ZW12YWx1ZX08L2xpPilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbXktMiBjb2wtc20tMiBvZmZzZXQtMVwiPlg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgcm93IG0tNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8UGxhbiBwPXt0aGlzLnN0YXRlLml0ZW1zfSBzZW5kRGF0YT17dGhpcy5oYW5kbGVEZWxldGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgXHJcbiAgICApXHJcbiAgfSJdLCJuYW1lcyI6WyJUaXRsZSIsIkhlYWQiLCJ1c2VTdGF0ZSIsInByYWN0aWNlIiwidGl0bGUiLCJpbnB1dExpc3QiLCJzZXRJbnB1dExpc3QiLCJpdGVtIiwic2V0SXRlbSIsIml0ZW1FdmVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwib2xkaXRlbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJpdGVtdmFsdWUiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/practice.js\n"));

/***/ })

});