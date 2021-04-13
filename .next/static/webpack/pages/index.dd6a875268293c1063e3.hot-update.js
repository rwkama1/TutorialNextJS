webpackHotUpdate_N_E("pages/index",{

/***/ "./components/users.js":
/*!*****************************!*\
  !*** ./components/users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Users; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "C:\\Users\\Waldemar\\Desktop\\Guias y Cosas Analista de Sistemas\\TutorialNextJS\\components\\users.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 //El componente router nos permite redireccionar a un componente dinamico
//En este caso a user/[id] tomando en cuenta el id podemos obtener
//el usuario seleccionado de la lista y en [id].js obtenerlo y mostrarlo

var Users = /*#__PURE__*/function (_Component) {
  Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Users, _Component);

  var _super = _createSuper(Users);

  function Users() {
    var _this;

    Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Users);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onClickli", function (id) {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/user/[id]", "/user/" + id); //redirecciono 
    });

    return _this;
  }

  Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Users, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "list-group",
        children: this.props.users.map(function (user) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "list-group-item list-group-item-action \r d-flex justify-content-between align-items-center",
            onClick: function onClick() {
              return _this2.onClickli(user.id);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                children: [user.first_name, " ", user.last_name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 23
              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["Email: ", user.email]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 23
              }, _this2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 23
            }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: user.avatar,
              alt: "Avatar",
              style: {
                borderRadius: "50%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 23
            }, _this2)]
          }, user.id, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 19
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this);
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vycy5qcyJdLCJuYW1lcyI6WyJVc2VycyIsImlkIiwiUm91dGVyIiwicHVzaCIsInByb3BzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwib25DbGlja2xpIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiYm9yZGVyUmFkaXVzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7a1lBRVAsVUFBQ0MsRUFBRCxFQUNWO0FBQ0lDLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxZQUFaLEVBQXlCLFdBQVNGLEVBQWxDLEVBREosQ0FFSTtBQUNILEs7Ozs7Ozs7NkJBRUQ7QUFBQTs7QUFDSSwwQkFDSTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGtCQUNDLEtBQUtHLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBakIsQ0FFQyxVQUFBQyxJQUFJO0FBQUEsOEJBRUE7QUFBSSxxQkFBUyxFQUFDLDZGQUFkO0FBR0MsbUJBQU8sRUFBRTtBQUFBLHFCQUFJLE1BQUksQ0FBQ0MsU0FBTCxDQUFlRCxJQUFJLENBQUNOLEVBQXBCLENBQUo7QUFBQSxhQUhWO0FBQUEsb0NBSUk7QUFBQSxzQ0FDQTtBQUFBLDJCQUNLTSxJQUFJLENBQUNFLFVBRFYsT0FDdUJGLElBQUksQ0FBQ0csU0FENUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURBLGVBSUE7QUFBQSxzQ0FDWUgsSUFBSSxDQUFDSSxLQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKLGVBWUk7QUFBSyxpQkFBRyxFQUFFSixJQUFJLENBQUNLLE1BQWY7QUFBdUIsaUJBQUcsRUFBQyxRQUEzQjtBQUNBLG1CQUFLLEVBQUU7QUFBQ0MsNEJBQVksRUFBQztBQUFkO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFaSjtBQUFBLGFBRU1OLElBQUksQ0FBQ04sRUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBO0FBQUEsU0FGTDtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQTJCQzs7OztFQXBDMEJhLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRkNmE4NzUyNjgyOTNjMTA2M2UzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICBSb3V0ZXIgIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vL0VsIGNvbXBvbmVudGUgcm91dGVyIG5vcyBwZXJtaXRlIHJlZGlyZWNjaW9uYXIgYSB1biBjb21wb25lbnRlIGRpbmFtaWNvXHJcbi8vRW4gZXN0ZSBjYXNvIGEgdXNlci9baWRdIHRvbWFuZG8gZW4gY3VlbnRhIGVsIGlkIHBvZGVtb3Mgb2J0ZW5lclxyXG4vL2VsIHVzdWFyaW8gc2VsZWNjaW9uYWRvIGRlIGxhIGxpc3RhIHkgZW4gW2lkXS5qcyBvYnRlbmVybG8geSBtb3N0cmFybG9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzIGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIG9uQ2xpY2tsaT0oaWQpPT5cclxuICAgIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi91c2VyL1tpZF1cIixcIi91c2VyL1wiK2lkKVxyXG4gICAgICAgIC8vcmVkaXJlY2Npb25vIFxyXG4gICAgfVxyXG4gICAgcmVuZGVyKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy51c2Vycy5tYXBcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgIHVzZXI9PlxyXG4gICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgIGtleT17dXNlci5pZH1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT50aGlzLm9uQ2xpY2tsaSh1c2VyLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDoge3VzZXIuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcn0gYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOlwiNTAlXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==