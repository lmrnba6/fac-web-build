"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[5614],{

/***/ 35614:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85256);
/* harmony import */ var _api_utlis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16550);
/* harmony import */ var _configs_api_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88295);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95998);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77765);
/* harmony import */ var _utility_context_Can__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6756);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55678);
/* harmony import */ var _customComponents_Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25976);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












var LinkedinRedirect = function LinkedinRedirect() {
  var search = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .useLocation */ .TH)().search;
  var code = new URLSearchParams(search).get("code");
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .useHistory */ .k6)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
  var ability = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utility_context_Can__WEBPACK_IMPORTED_MODULE_6__/* .AbilityContext */ .v);

  var onSuccess = function onSuccess(res) {
    var data = _objectSpread(_objectSpread({}, res.userData), {}, {
      accessToken: res.accessToken
    });

    dispatch((0,_redux_actions_auth__WEBPACK_IMPORTED_MODULE_5__/* .handleLogin */ .jc)(data));
    ability.update(data.ability || []);
    history.push("/app/dashboard");
  };

  var onFail = function onFail(error) {
    var code = "";

    if (error.code === 414) {
      code = "emailExist";
    } else if (error.code === 420) {
      code = "userWithEmailNotFound";
    } else if (error.code === 412) {
      code = "userBlocked";
    } else if (error.code === 413) {
      code = "userUnverified";
    } else {
      code = "somethingWrong";
    }

    react_toastify__WEBPACK_IMPORTED_MODULE_7__/* .toast.error */ .Am.error( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_customComponents_Toast__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      type: "error",
      message: code
    }), {
      transition: react_toastify__WEBPACK_IMPORTED_MODULE_7__/* .Bounce */ .sm,
      hideProgressBar: false,
      autoClose: 6000
    });
    history.push("/login");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (code) {
      (0,_api_utlis__WEBPACK_IMPORTED_MODULE_2__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_2__/* .insert */ .$T, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_3__/* .LINKEDIN_AUTH_URL */ .T0, {
        code: code,
        role: localStorage.getItem("role"),
        type: localStorage.getItem("type")
      }], true, react_toastify__WEBPACK_IMPORTED_MODULE_7__/* .toast */ .Am, dispatch, "", "", onSuccess, onFail);
    } else {
      history.push("/login");
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {});
};

/* harmony default export */ __webpack_exports__["default"] = (LinkedinRedirect);

/***/ })

}]);