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
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/user/[id]", "/user/" + id);
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
                lineNumber: 26,
                columnNumber: 23
              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["Email: ", user.email]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 23
              }, _this2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 23
            }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: user.avatar,
              alt: "Avatar",
              style: {
                borderRadius: "50%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 23
            }, _this2)]
          }, user.id, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 19
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vycy5qcyJdLCJuYW1lcyI6WyJVc2VycyIsImlkIiwiUm91dGVyIiwicHVzaCIsInByb3BzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwib25DbGlja2xpIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiYm9yZGVyUmFkaXVzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7a1lBRVAsVUFBQ0MsRUFBRCxFQUNWO0FBQ0lDLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxZQUFaLEVBQXlCLFdBQVNGLEVBQWxDO0FBQ0gsSzs7Ozs7Ozs2QkFFRDtBQUFBOztBQUNJLDBCQUNJO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsa0JBQ0MsS0FBS0csS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUVDLFVBQUFDLElBQUk7QUFBQSw4QkFFQTtBQUFJLHFCQUFTLEVBQUMsNkZBQWQ7QUFHQyxtQkFBTyxFQUFFO0FBQUEscUJBQUksTUFBSSxDQUFDQyxTQUFMLENBQWVELElBQUksQ0FBQ04sRUFBcEIsQ0FBSjtBQUFBLGFBSFY7QUFBQSxvQ0FJSTtBQUFBLHNDQUNBO0FBQUEsMkJBQ0tNLElBQUksQ0FBQ0UsVUFEVixPQUN1QkYsSUFBSSxDQUFDRyxTQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREEsZUFJQTtBQUFBLHNDQUNZSCxJQUFJLENBQUNJLEtBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFZSTtBQUFLLGlCQUFHLEVBQUVKLElBQUksQ0FBQ0ssTUFBZjtBQUF1QixpQkFBRyxFQUFDLFFBQTNCO0FBQ0EsbUJBQUssRUFBRTtBQUFDQyw0QkFBWSxFQUFDO0FBQWQ7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVpKO0FBQUEsYUFFTU4sSUFBSSxDQUFDTixFQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkE7QUFBQSxTQUZMO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBMkJDOzs7O0VBbkMwQmEsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWNlOGNiZTQyMTFjNTU5NTkzMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgIFJvdXRlciAgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vRWwgY29tcG9uZW50ZSByb3V0ZXIgbm9zIHBlcm1pdGUgcmVkaXJlY2Npb25hciBhIHVuIGNvbXBvbmVudGUgZGluYW1pY29cclxuLy9FbiBlc3RlIGNhc28gYSB1c2VyL1tpZF0gdG9tYW5kbyBlbiBjdWVudGEgZWwgaWQgcG9kZW1vcyBvYnRlbmVyXHJcbi8vZWwgdXN1YXJpbyBzZWxlY2Npb25hZG8gZGUgbGEgbGlzdGEgeSBlbiBbaWRdLmpzIG9idGVuZXJsbyB5IG1vc3RyYXJsb1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnMgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG4gICAgb25DbGlja2xpPShpZCk9PlxyXG4gICAge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL3VzZXIvW2lkXVwiLFwiL3VzZXIvXCIraWQpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJzLm1hcFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgdXNlcj0+XHJcbiAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAga2V5PXt1c2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PnRoaXMub25DbGlja2xpKHVzZXIuaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIuZmlyc3RfbmFtZX0ge3VzZXIubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOiB7dXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfSBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXJSYWRpdXM6XCI1MCVcIn19Lz5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9