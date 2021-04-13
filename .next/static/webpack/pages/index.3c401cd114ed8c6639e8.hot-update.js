webpackHotUpdate_N_E("pages/index",{

/***/ "./components/users.js":
/*!*****************************!*\
  !*** ./components/users.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/router.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/users */ "./components/users.js");
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_users__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "C:\\Users\\Waldemar\\Desktop\\Guias y Cosas Analista de Sistemas\\TutorialNextJS\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var _require = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
    Component = _require.Component;

var Index = /*#__PURE__*/function (_Component) {
  Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "render",
    //   getInitialProps
    //   habilita  la representación del lado del servidor en una página y
    //le permite hacer un listado de los datos inicialmente , 
    //significa enviar la página con los datos ya llenados desde el servidor.
    //    Esto es especialmente útil para SEO ..
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
              children: "NextJS Tutorial Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 12
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_users__WEBPACK_IMPORTED_MODULE_11___default.a, {
            users: this.props.users
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 14
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 12
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 16
      }, this);
    }
  }]);

  return Index;
}(Component);

Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, "getInitialProps", /*#__PURE__*/function () {
  var _ref = Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var rest, resjson;
    return C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://reqres.in/api/users");

          case 2:
            rest = _context.sent;
            _context.next = 5;
            return rest.json();

          case 5:
            resjson = _context.sent;
            return _context.abrupt("return", {
              users: resjson.data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkNvbXBvbmVudCIsIkluZGV4IiwicHJvcHMiLCJ1c2VycyIsImN0eCIsImZldGNoIiwicmVzdCIsImpzb24iLCJyZXNqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O2VBRXNCQSxtQkFBTyxDQUFDLDRDQUFELEM7SUFBckJDLFMsWUFBQUEsUzs7SUFFRkMsSzs7Ozs7Ozs7Ozs7OztBQVFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7NkJBR0E7QUFFSSwwQkFBTztBQUFBLCtCQUVKLHFFQUFDLDZEQUFEO0FBQUEsa0NBQ0EscUVBQUMsaURBQUQ7QUFBQSxtQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFJRSxxRUFBQyx5REFBRDtBQUFPLGlCQUFLLEVBQUUsS0FBS0MsS0FBTCxDQUFXQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQVdIOzs7O0VBNUJlSCxTOztpTEFBZEMsSzs0V0FHcUIsaUJBQU9HLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRkMsS0FBSyxDQUFDLDZCQUFELENBREg7O0FBQUE7QUFDZEMsZ0JBRGM7QUFBQTtBQUFBLG1CQUVDQSxJQUFJLENBQUNDLElBQUwsRUFGRDs7QUFBQTtBQUVkQyxtQkFGYztBQUFBLDZDQUdiO0FBQUVMLG1CQUFLLEVBQUVLLE9BQU8sQ0FBQ0M7QUFBakIsYUFIYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7O0FBNEJaUixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYzQwMWNkMTE0ZWQ4YzY2MzllOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWluZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBVc2VycyBmcm9tIFwiLi4vY29tcG9uZW50cy91c2Vyc1wiO1xyXG5cclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIFxyXG4gICAgc3RhdGljIGdldEluaXRpYWxQcm9wcz1hc3luYyAoY3R4KT0+e1xyXG4gICAgICAgY29uc3QgcmVzdD0gYXdhaXQgZmV0Y2goXCJodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnNcIik7XHJcbiAgICAgICBjb25zdCByZXNqc29uID1hd2FpdCByZXN0Lmpzb24oKTtcclxuICAgICAgIHJldHVybiB7IHVzZXJzOiByZXNqc29uLmRhdGEgfVxyXG4gICAgICB9XHJcbiAgICAvLyAgIGdldEluaXRpYWxQcm9wc1xyXG4gICAgLy8gICBoYWJpbGl0YSAgbGEgcmVwcmVzZW50YWNpw7NuIGRlbCBsYWRvIGRlbCBzZXJ2aWRvciBlbiB1bmEgcMOhZ2luYSB5XHJcbiAgICAvL2xlIHBlcm1pdGUgaGFjZXIgdW4gbGlzdGFkbyBkZSBsb3MgZGF0b3MgaW5pY2lhbG1lbnRlICwgXHJcbiAgICAvL3NpZ25pZmljYSBlbnZpYXIgbGEgcMOhZ2luYSBjb24gbG9zIGRhdG9zIHlhIGxsZW5hZG9zIGRlc2RlIGVsIHNlcnZpZG9yLlxyXG4gICAgLy8gICAgRXN0byBlcyBlc3BlY2lhbG1lbnRlIMO6dGlsIHBhcmEgU0VPIC4uXHJcbiAgICBcclxuICAgIHJlbmRlcigpXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+TmV4dEpTIFR1dG9yaWFsIEhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgPFVzZXJzIHVzZXJzPXt0aGlzLnByb3BzLnVzZXJzfT48L1VzZXJzPlxyXG4gICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==