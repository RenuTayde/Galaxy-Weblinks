"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\nvar _sliced_to_array = (__webpack_require__(/*! @swc/helpers/lib/_sliced_to_array.js */ \"./node_modules/@swc/helpers/lib/_sliced_to_array.js\")[\"default\"]);\nvar _s = $RefreshSig$();\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.useIntersection = useIntersection;\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ \"./node_modules/next/dist/client/request-idle-callback.js\");\nvar hasIntersectionObserver = typeof IntersectionObserver === \"function\";\nfunction useIntersection(param) {\n    var rootRef = param.rootRef, rootMargin = param.rootMargin, disabled = param.disabled;\n    _s();\n    var isDisabled = disabled || !hasIntersectionObserver;\n    var unobserve = (0, _react).useRef();\n    var ref = _sliced_to_array((0, _react).useState(false), 2), visible = ref[0], setVisible = ref[1];\n    var ref1 = _sliced_to_array((0, _react).useState(null), 2), element = ref1[0], setElement = ref1[1];\n    (0, _react).useEffect(function() {\n        if (hasIntersectionObserver) {\n            if (unobserve.current) {\n                unobserve.current();\n                unobserve.current = undefined;\n            }\n            if (isDisabled || visible) return;\n            if (element && element.tagName) {\n                unobserve.current = observe(element, function(isVisible) {\n                    return isVisible && setVisible(isVisible);\n                }, {\n                    root: rootRef == null ? void 0 : rootRef.current,\n                    rootMargin: rootMargin\n                });\n            }\n            return function() {\n                unobserve.current == null ? void 0 : unobserve.current();\n                unobserve.current = undefined;\n            };\n        } else {\n            if (!visible) {\n                var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function() {\n                    return setVisible(true);\n                });\n                return function() {\n                    return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);\n                };\n            }\n        }\n    }, [\n        element,\n        isDisabled,\n        rootMargin,\n        rootRef,\n        visible\n    ]);\n    var resetVisible = (0, _react).useCallback(function() {\n        setVisible(false);\n    }, []);\n    return [\n        setElement,\n        visible,\n        resetVisible\n    ];\n}\n_s(useIntersection, \"Ftx7DdZ+Ab721MTRqq19v5g/6/E=\");\nfunction observe(element, callback, options) {\n    var ref = createObserver(options), id = ref.id, observer = ref.observer, elements = ref.elements;\n    elements.set(element, callback);\n    observer.observe(element);\n    return function unobserve() {\n        elements.delete(element);\n        observer.unobserve(element);\n        // Destroy observer when there's nothing left to watch:\n        if (elements.size === 0) {\n            observer.disconnect();\n            observers.delete(id);\n            var index = idList.findIndex(function(obj) {\n                return obj.root === id.root && obj.margin === id.margin;\n            });\n            if (index > -1) {\n                idList.splice(index, 1);\n            }\n        }\n    };\n}\nvar observers = new Map();\nvar idList = [];\nfunction createObserver(options) {\n    var id = {\n        root: options.root || null,\n        margin: options.rootMargin || \"\"\n    };\n    var existing = idList.find(function(obj) {\n        return obj.root === id.root && obj.margin === id.margin;\n    });\n    var instance;\n    if (existing) {\n        instance = observers.get(existing);\n        if (instance) {\n            return instance;\n        }\n    }\n    var elements = new Map();\n    var observer = new IntersectionObserver(function(entries) {\n        entries.forEach(function(entry) {\n            var callback = elements.get(entry.target);\n            var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;\n            if (callback && isVisible) {\n                callback(isVisible);\n            }\n        });\n    }, options);\n    instance = {\n        id: id,\n        observer: observer,\n        elements: elements\n    };\n    idList.push(id);\n    observers.set(id, instance);\n    return instance;\n}\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=use-intersection.js.map\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOzs7QUFDYkEsOENBQTZDO0lBQ3pDRyxLQUFLLEVBQUUsSUFBSTtDQUNkLEVBQUMsQ0FBQztBQUNIRCx1QkFBdUIsR0FBR0UsZUFBZSxDQUFDO0FBQzFDLElBQUlDLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBTyxDQUFDO0FBQzdCLElBQUlDLG9CQUFvQixHQUFHRCxtQkFBTyxDQUFDLHlGQUF5QixDQUFDO0FBQzdELElBQU1FLHVCQUF1QixHQUFHLE9BQU9DLG9CQUFvQixLQUFLLFVBQVU7QUFDMUUsU0FBU0wsZUFBZSxDQUFDLEtBQW9DLEVBQUU7UUFBcENNLE9BQU8sR0FBVCxLQUFvQyxDQUFsQ0EsT0FBTyxFQUFHQyxVQUFVLEdBQXRCLEtBQW9DLENBQXhCQSxVQUFVLEVBQUdDLFFBQVEsR0FBakMsS0FBb0MsQ0FBWEEsUUFBUTs7SUFDdEQsSUFBTUMsVUFBVSxHQUFHRCxRQUFRLElBQUksQ0FBQ0osdUJBQXVCO0lBQ3ZELElBQU1NLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRVQsTUFBTSxDQUFDLENBQUNVLE1BQU0sRUFBRTtJQUN0QyxJQUE4QixHQUEyQixvQkFBM0IsQ0FBQyxDQUFDLEVBQUVWLE1BQU0sQ0FBQyxDQUFDVyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQWxEQyxPQUFPLEdBQWdCLEdBQTJCLEdBQTNDLEVBQUVDLFVBQVUsR0FBSSxHQUEyQixHQUEvQjtJQUMxQixJQUE4QixJQUEwQixvQkFBMUIsQ0FBQyxDQUFDLEVBQUViLE1BQU0sQ0FBQyxDQUFDVyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQWpERyxPQUFPLEdBQWdCLElBQTBCLEdBQTFDLEVBQUVDLFVBQVUsR0FBSSxJQUEwQixHQUE5QjtJQUMxQixDQUFDLENBQUMsRUFBRWYsTUFBTSxDQUFDLENBQUNnQixTQUFTLENBQUMsV0FBSTtRQUN0QixJQUFJYix1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SUYsS0FBSyxDQUFDRyxpQkFBaUIsR0FBRyxDQUFDO1lBQ3JFLElBQUkzQixRQUFRLElBQUlQLFNBQVMsRUFBRTtnQkFDdkJPLFFBQVEsQ0FBQ1AsU0FBUyxDQUFDLENBQUM7YUFDdkI7U0FDSixDQUFDLENBQUM7S0FDTixFQUFFUSxPQUFPLENBQUM7SUFDWG1CLFFBQVEsR0FBRztRQUNQakIsRUFBRSxFQUFGQSxFQUFFO1FBQ0ZDLFFBQVEsRUFBUkEsUUFBUTtRQUNSQyxRQUFRLEVBQVJBLFFBQVE7S0FDWCxDQUFDO0lBQ0ZPLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQ3pCLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCTyxTQUFTLENBQUNKLEdBQUcsQ0FBQ0gsRUFBRSxFQUFFaUIsUUFBUSxDQUFDLENBQUM7SUFDNUIsT0FBT0EsUUFBUSxDQUFDO0NBQ25CO0FBRUQsSUFBSSxDQUFDLE9BQU9uRCxPQUFPLENBQUM0RCxPQUFPLEtBQUssVUFBVSxJQUFLLE9BQU81RCxPQUFPLENBQUM0RCxPQUFPLEtBQUssUUFBUSxJQUFJNUQsT0FBTyxDQUFDNEQsT0FBTyxLQUFLLElBQUksQ0FBRSxJQUFJLE9BQU81RCxPQUFPLENBQUM0RCxPQUFPLENBQUNDLFVBQVUsS0FBSyxXQUFXLEVBQUU7SUFDcksvRCxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDNEQsT0FBTyxFQUFFLFlBQVksRUFBRTtRQUFFM0QsS0FBSyxFQUFFLElBQUk7S0FBRSxDQUFDLENBQUM7SUFDdEVILE1BQU0sQ0FBQ2dFLE1BQU0sQ0FBQzlELE9BQU8sQ0FBQzRELE9BQU8sRUFBRTVELE9BQU8sQ0FBQyxDQUFDO0lBQ3hDK0QsTUFBTSxDQUFDL0QsT0FBTyxHQUFHQSxPQUFPLENBQUM0RCxPQUFPLENBQUM7Q0FDbEMsQ0FFRCw0Q0FBNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcz9mZDk0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbic7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290UmVmICwgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnRdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUobnVsbCk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmIChoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbGVtZW50LCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSwge1xuICAgICAgICAgICAgICAgICAgICByb290OiByb290UmVmID09IG51bGwgPyB2b2lkIDAgOiByb290UmVmLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoKT0+e1xuICAgICAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID09IG51bGwgPyB2b2lkIDAgOiB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICByb290UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgY29uc3QgcmVzZXRWaXNpYmxlID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKCk9PntcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldEVsZW1lbnQsXG4gICAgICAgIHZpc2libGUsXG4gICAgICAgIHJlc2V0VmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZExpc3QuZmluZEluZGV4KChvYmopPT5vYmoucm9vdCA9PT0gaWQucm9vdCAmJiBvYmoubWFyZ2luID09PSBpZC5tYXJnaW4pO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5jb25zdCBpZExpc3QgPSBbXTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IHtcbiAgICAgICAgcm9vdDogb3B0aW9ucy5yb290IHx8IG51bGwsXG4gICAgICAgIG1hcmdpbjogb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gICAgfTtcbiAgICBjb25zdCBleGlzdGluZyA9IGlkTGlzdC5maW5kKChvYmopPT5vYmoucm9vdCA9PT0gaWQucm9vdCAmJiBvYmoubWFyZ2luID09PSBpZC5tYXJnaW4pO1xuICAgIGxldCBpbnN0YW5jZTtcbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGV4aXN0aW5nKTtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfTtcbiAgICBpZExpc3QucHVzaChpZCk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuaWYgKCh0eXBlb2YgZXhwb3J0cy5kZWZhdWx0ID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgZXhwb3J0cy5kZWZhdWx0ID09PSAnb2JqZWN0JyAmJiBleHBvcnRzLmRlZmF1bHQgIT09IG51bGwpKSAmJiB0eXBlb2YgZXhwb3J0cy5kZWZhdWx0Ll9fZXNNb2R1bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLmRlZmF1bHQsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgT2JqZWN0LmFzc2lnbihleHBvcnRzLmRlZmF1bHQsIGV4cG9ydHMpO1xuICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdFJlZiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiZWxlbWVudCIsInNldEVsZW1lbnQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpc1Zpc2libGUiLCJyb290IiwiaWRsZUNhbGxiYWNrIiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInJlc2V0VmlzaWJsZSIsInVzZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiY3JlYXRlT2JzZXJ2ZXIiLCJpZCIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJzZXQiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluZGV4IiwiaWRMaXN0IiwiZmluZEluZGV4Iiwib2JqIiwibWFyZ2luIiwic3BsaWNlIiwiTWFwIiwiZXhpc3RpbmciLCJmaW5kIiwiaW5zdGFuY2UiLCJnZXQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInB1c2giLCJkZWZhdWx0IiwiX19lc01vZHVsZSIsImFzc2lnbiIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/client/use-intersection.js\n"));

/***/ })

});