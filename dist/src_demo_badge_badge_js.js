"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_project"] = self["webpackChunkwebpack_project"] || []).push([
    ["src_demo_badge_badge_js"],
    {
        /***/ "./src/demo/badge/badge.js":
            /*!*********************************!*\
  !*** ./src/demo/badge/badge.js ***!
  \*********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");\n/* harmony import */ var _material_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material/component/component */ "./src/material/component/component.js");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _templateObject;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\nfunction _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\n\nvar DemoBadge = /*#__PURE__*/function (_MdComponent) {\n  function DemoBadge() {\n    _classCallCheck(this, DemoBadge);\n    return _callSuper(this, DemoBadge, arguments);\n  }\n  _inherits(DemoBadge, _MdComponent);\n  return _createClass(DemoBadge, [{\n    key: "render",\n    value: function render() {\n      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n            <!-- <div class=\\"md-layout\\"> -->\\n            <div class=\\"md-layout__grid\\">\\n                <div class=\\"md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4\\">\\n                    <md-badge label=\\"\\"></md-badge>\\n                </div>\\n                <div class=\\"md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4\\">\\n                    <md-badge label=\\"1\\"></md-badge>\\n                </div>\\n                <div class=\\"md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4\\">\\n                    <md-badge label=\\"1000\\"></md-badge>\\n                </div>\\n                <div class=\\"md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4\\"></div>\\n                <div class=\\"md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4\\"></div>\\n            </div>\\n            <!-- </div> -->\\n        "])));\n    }\n  }]);\n}(_material_component_component__WEBPACK_IMPORTED_MODULE_1__.MdComponent);\ncustomElements.define("demo-badge", DemoBadge);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement("demo-badge"));\n\n//# sourceURL=webpack://webpack-project/./src/demo/badge/badge.js?');

                /***/
            },
    },
]);
