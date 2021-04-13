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
                className: "card-body text-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
                  children: [this.props.user.id, "   ", this.props.user.first_name, " ", this.props.user.last_name]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                  children: ["Email: ", this.props.user.email, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanMiXSwibmFtZXMiOlsiVXNlclByb2ZpbGUiLCJwcm9wcyIsInVzZXIiLCJhdmF0YXIiLCJib3JkZXJSYWRpdXMiLCJpZCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsIkNvbXBvbmVudCIsImN0eCIsImZldGNoIiwicXVlcnkiLCJyZXN0IiwianNvbiIsInJlc2pzb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDO0FBQ0E7Q0FFRztBQUNBO0FBQ0E7O0lBRUdBLFc7Ozs7Ozs7Ozs7Ozs7NkJBZUc7QUFFSSwwQkFDSSxxRUFBQyw4REFBRDtBQUFBLCtCQUNEO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQUMseUJBQWY7QUFBQSx1Q0FDSTtBQUFLLHFCQUFHLEVBQUUsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxNQUExQjtBQUFrQyxxQkFBRyxFQUFDLEVBQXRDO0FBQ0MsdUJBQUssRUFBRTtBQUFDQyxnQ0FBWSxFQUFDO0FBQWQ7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUtJO0FBQUsseUJBQVMsRUFBQyx1QkFBZjtBQUFBLHdDQUNHO0FBQUEsNkJBQ0MsS0FBS0gsS0FBTCxDQUFXQyxJQUFYLENBQWdCRyxFQURqQixTQUN3QixLQUFLSixLQUFMLENBQVdDLElBQVgsQ0FBZ0JJLFVBRHhDLE9BQ3FELEtBQUtMLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkssU0FEckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURILGVBS0c7QUFBQSx3Q0FBVyxLQUFLTixLQUFMLENBQVdDLElBQVgsQ0FBZ0JNLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFxQkg7Ozs7RUF0Q2dCQywrQzs7aUxBQXBCVCxXOzRXQUV3QixpQkFBT1UsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNEQyxLQUFLLENBQ25CLGlDQUErQkQsR0FBRyxDQUFDRSxLQUFKLENBQVVQLEVBRHRCLENBREo7O0FBQUE7QUFDYlEsZ0JBRGE7QUFBQTtBQUFBLG1CQUdFQSxJQUFJLENBQUNDLElBQUwsRUFIRjs7QUFBQTtBQUdiQyxtQkFIYTtBQUluQkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUNHLElBQXBCO0FBSm1CLDZDQUtaO0FBQUVoQixrQkFBSSxFQUFFYSxPQUFPLENBQUNHO0FBQWhCLGFBTFk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7OztBQXVDaEIsb0VBQUFDLCtEQUFVLENBQUNuQixXQUFELENBQXpCLEUsQ0FFSTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLjQyZDNkZDhlZjI3MzE2OTFmNTUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4gaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lclwiO1xyXG4gICAgLy9sb2NhbGhvc3Q6MzAwMC91c2VyL2lkXHJcbiAgICAvL0NvbiB3aXRocm91dGVyIHB1ZWRvIG9idGVuZXIgZWwgaWQgZGVsIGNvbXBvbmVudGUgZGluYW1pY29cclxuICAgIC8vW2lkXS5qcyAgIFxyXG4gICAgXHJcbiBjbGFzcyBVc2VyUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudFxyXG4gICAgICB7IFxyXG4gICAgICAgIHN0YXRpYyBnZXRJbml0aWFsUHJvcHM9YXN5bmMgKGN0eCk9PntcclxuICAgICAgICAgICAgY29uc3QgcmVzdD0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycy9cIitjdHgucXVlcnkuaWQpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNqc29uID1hd2FpdCByZXN0Lmpzb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzanNvbi5kYXRhKVxyXG4gICAgICAgICAgICByZXR1cm4geyB1c2VyOiByZXNqc29uLmRhdGEgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdHgucXVlcnkuaWQpIFxyXG4gICAgICAgICAgICAvL3JldG9ybmEgZWwgaWQgcXVlIG1lIGVzdGFuIHBhc2FuZG8gZW4gbGEgdXJsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIC8vRWwgbWV0b2RvIGdldEluaXRpYWxQcm9wcyBzaSBvIHNpIHRlbmdvIHJldG9ybmFyIHVuIG9iamV0b1xyXG4gICAgICAgICAgIC8vcGFyYSBxdWUgbm8gbWUgZGUgcnJvclxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIHJlbmRlcigpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMudXNlci5hdmF0YXJ9IGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlclJhZGl1czpcIjUwJVwifX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXIuaWR9ICAge3RoaXMucHJvcHMudXNlci5maXJzdF9uYW1lfSB7dGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsOiB7dGhpcy5wcm9wcy51c2VyLmVtYWlsfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgfVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFVzZXJQcm9maWxlKVxyXG4gICAgICBcclxuICAgIC8vICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gICAgLy8gICAgY29uc3Qgb2JqPXJvdXRlci5xdWVyeTtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKG9iaik7Il0sInNvdXJjZVJvb3QiOiIifQ==