webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");









var _jsxFileName = "C:\\Users\\Waldemar\\Desktop\\Guias y Cosas Analista de Sistemas\\TutorialNextJS\\pages\\user\\[id].js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 //localhost:3000/user/id
//Con withrouter puedo obtener el id del componente dinamico
//[id].js   

var UserProfile = /*#__PURE__*/function (_Component) {
  Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(UserProfile, _Component);

  var _super = _createSuper(UserProfile);

  function UserProfile() {
    Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, UserProfile);

    return _super.apply(this, arguments);
  }

  Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(UserProfile, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "col-md-6 offset-md-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "card-header text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                  src: this.props.user.avatar,
                  alt: "",
                  style: {
                    borderRadius: "50%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 34
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "card-body"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 22
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 18
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 19
      }, this);
    }
  }]);

  return UserProfile;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(UserProfile, "getInitialProps", /*#__PURE__*/function () {
  var _ref = Object(C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var rest, resjson;
    return C_Users_Waldemar_Desktop_Guias_y_Cosas_Analista_de_Sistemas_TutorialNextJS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://reqres.in/api/users/" + ctx.query.id);

          case 2:
            rest = _context.sent;
            _context.next = 5;
            return rest.json();

          case 5:
            resjson = _context.sent;
            console.log(resjson.data);
            return _context.abrupt("return", {
              user: resjson.data
            });

          case 8:
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

/* harmony default export */ __webpack_exports__["default"] = (_c = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(UserProfile)); //   const router=useRouter();
//    const obj=router.query;
//    console.log(obj);

var _c;

$RefreshReg$(_c, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanMiXSwibmFtZXMiOlsiVXNlclByb2ZpbGUiLCJwcm9wcyIsInVzZXIiLCJhdmF0YXIiLCJib3JkZXJSYWRpdXMiLCJDb21wb25lbnQiLCJjdHgiLCJmZXRjaCIsInF1ZXJ5IiwiaWQiLCJyZXN0IiwianNvbiIsInJlc2pzb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDO0FBQ0E7Q0FFRztBQUNBO0FBQ0E7O0lBRUdBLFc7Ozs7Ozs7Ozs7Ozs7NkJBZUc7QUFFSSwwQkFDSSxxRUFBQyw4REFBRDtBQUFBLCtCQUNEO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQUMseUJBQWY7QUFBQSx1Q0FDSTtBQUFLLHFCQUFHLEVBQUUsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxNQUExQjtBQUFrQyxxQkFBRyxFQUFDLEVBQXRDO0FBQ0MsdUJBQUssRUFBRTtBQUFDQyxnQ0FBWSxFQUFDO0FBQWQ7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUtJO0FBQUsseUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFpQkg7Ozs7RUFsQ2dCQywrQzs7aUxBQXBCTCxXOzRXQUV3QixpQkFBT00sR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNEQyxLQUFLLENBQ25CLGlDQUErQkQsR0FBRyxDQUFDRSxLQUFKLENBQVVDLEVBRHRCLENBREo7O0FBQUE7QUFDYkMsZ0JBRGE7QUFBQTtBQUFBLG1CQUdFQSxJQUFJLENBQUNDLElBQUwsRUFIRjs7QUFBQTtBQUdiQyxtQkFIYTtBQUluQkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUNHLElBQXBCO0FBSm1CLDZDQUtaO0FBQUViLGtCQUFJLEVBQUVVLE9BQU8sQ0FBQ0c7QUFBaEIsYUFMWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7O0FBbUNoQixvRUFBQUMsK0RBQVUsQ0FBQ2hCLFdBQUQsQ0FBekIsRSxDQUVJO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL1tpZF0uOTViMmQ4N2UyNGFhNjAxMDZjNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbiBpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyXCI7XHJcbiAgICAvL2xvY2FsaG9zdDozMDAwL3VzZXIvaWRcclxuICAgIC8vQ29uIHdpdGhyb3V0ZXIgcHVlZG8gb2J0ZW5lciBlbCBpZCBkZWwgY29tcG9uZW50ZSBkaW5hbWljb1xyXG4gICAgLy9baWRdLmpzICAgXHJcbiAgICBcclxuIGNsYXNzIFVzZXJQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50XHJcbiAgICAgIHsgXHJcbiAgICAgICAgc3RhdGljIGdldEluaXRpYWxQcm9wcz1hc3luYyAoY3R4KT0+e1xyXG4gICAgICAgICAgICBjb25zdCByZXN0PSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9yZXFyZXMuaW4vYXBpL3VzZXJzL1wiK2N0eC5xdWVyeS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2pzb24gPWF3YWl0IHJlc3QuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNqc29uLmRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHVzZXI6IHJlc2pzb24uZGF0YSB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN0eC5xdWVyeS5pZCkgXHJcbiAgICAgICAgICAgIC8vcmV0b3JuYSBlbCBpZCBxdWUgbWUgZXN0YW4gcGFzYW5kbyBlbiBsYSB1cmxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgLy9FbCBtZXRvZG8gZ2V0SW5pdGlhbFByb3BzIHNpIG8gc2kgdGVuZ28gcmV0b3JuYXIgdW4gb2JqZXRvXHJcbiAgICAgICAgICAgLy9wYXJhIHF1ZSBubyBtZSBkZSBycm9yXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgcmVuZGVyKClcclxuICAgICAgICAgIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy51c2VyLmF2YXRhcn0gYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOlwiNTAlXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgfVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFVzZXJQcm9maWxlKVxyXG4gICAgICBcclxuICAgIC8vICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gICAgLy8gICAgY29uc3Qgb2JqPXJvdXRlci5xdWVyeTtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKG9iaik7Il0sInNvdXJjZVJvb3QiOiIifQ==