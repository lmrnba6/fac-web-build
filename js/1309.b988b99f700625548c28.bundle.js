"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[1309],{

/***/ 78133:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45987);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78268);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85677);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32701);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10684);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);


var _excluded = ["onOpened", "onClosed", "width", "open", "toggleSidebar", "size", "bodyClassName", "contentClassName", "wrapperClassName", "headerClassName", "className", "title", "children", "closeBtn"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** Third Party Components







var Sidebar = function Sidebar(props) {
  var _classnames3;

  // ** Props
  var onOpened = props.onOpened,
      onClosed = props.onClosed,
      width = props.width,
      open = props.open,
      toggleSidebar = props.toggleSidebar,
      size = props.size,
      bodyClassName = props.bodyClassName,
      contentClassName = props.contentClassName,
      wrapperClassName = props.wrapperClassName,
      headerClassName = props.headerClassName,
      className = props.className,
      title = props.title,
      children = props.children,
      closeBtn = props.closeBtn,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(props, _excluded); // ** If user passes custom close btn render that else default close btn


  var renderCloseBtn = closeBtn ? closeBtn : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    className: "cursor-pointer",
    size: 15,
    onClick: toggleSidebar
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, onOpened ? {
    onOpened: onOpened
  } : {}), onClosed ? {
    onClosed: onClosed
  } : {}), {}, {
    isOpen: open,
    toggle: toggleSidebar,
    contentClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, contentClassName, contentClassName)),
    modalClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()('modal-slide-in', (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, wrapperClassName, wrapperClassName)),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classnames3 = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(_classnames3, className, className), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(_classnames3, 'sidebar-lg', size === 'lg'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(_classnames3, 'sidebar-sm', size === 'sm'), _classnames3))
    /*eslint-disable */

  }, width !== undefined ? {
    style: {
      width: String(width) + 'px'
    }
  } : {}), rest), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, headerClassName, headerClassName)),
      toggle: toggleSidebar,
      close: renderCloseBtn,
      tag: "div",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
        className: "modal-title",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "align-middle",
          children: title
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex-grow-1', (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, bodyClassName, bodyClassName)),
      children: children
    })]
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (Sidebar); // ** PropTypes

Sidebar.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string.isRequired),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool.isRequired),
  toggleSidebar: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func.isRequired),
  size: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(['sm', 'lg']),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  bodyClassName: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  contentClassName: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  wrapperClassName: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().any.isRequired),
  width: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)])
};

/***/ }),

/***/ 71107:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ ROLES_LIST; },
/* harmony export */   "K": function() { return /* binding */ ROLES; }
/* harmony export */ });
var ROLES = {
  ADMIN_ROLE: "admin",
  MANAGER_ROLE: "manager",
  OWNER_ROLE: "owner",
  TEACHER_ROLE: "teacher",
  ACCOUNTANT_ROLE: "accountant",
  OPERATOR_ROLE: "operator",
  STUDENT_ROLE: "student",
  STAFF_ROLE: "staff",
  DRIVER_ROLE: "driver",
  PARENT_ROLE: "parent"
};
var ROLES_LIST = Object.values(ROLES);

/***/ }),

/***/ 82433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ tableRowsPerPage; }
/* harmony export */ });
var tableRowsPerPage = [10, 20, 50, 100];

/***/ }),

/***/ 21309:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ list; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(64687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/@core/components/sidebar/index.js
var sidebar = __webpack_require__(78133);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Form.js
var Form = __webpack_require__(15538);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Alert.js
var Alert = __webpack_require__(17834);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Button.js
var Button = __webpack_require__(97975);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/configs/api-urls.js
var api_urls = __webpack_require__(88295);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(55678);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-octagon.js
var alert_octagon = __webpack_require__(61643);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/user.js
var user = __webpack_require__(73752);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/briefcase.js
var briefcase = __webpack_require__(25213);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/at-sign.js
var at_sign = __webpack_require__(29752);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/calendar.js
var calendar = __webpack_require__(91140);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/lock.js
var lock = __webpack_require__(19589);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/eye-off.js
var eye_off = __webpack_require__(44309);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/eye.js
var eye = __webpack_require__(12590);
// EXTERNAL MODULE: ./src/views/customComponents/Field.js
var Field = __webpack_require__(48159);
// EXTERNAL MODULE: ./src/api/utlis.js
var utlis = __webpack_require__(16550);
// EXTERNAL MODULE: ./src/configs/acl/roles.js
var roles = __webpack_require__(71107);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/views/apps/user/list/Sidebar.js

// ** React Import
 // ** Custom Components

 // ** Utils
// ** Third Party Components

 // ** Store & Actions













var SidebarNewUsers = function SidebarNewUsers(_ref) {
  var open = _ref.open,
      toggleSidebar = _ref.toggleSidebar,
      refresh = _ref.refresh;

  // ** States
  var _useState = (0,react.useState)(roles/* ROLES.OWNER_ROLE */.K.OWNER_ROLE),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      role = _useState2[0],
      setRole = _useState2[1]; // const [username, setUsername] = useState("");


  var _useState3 = (0,react.useState)(""),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0,react.useState)(""),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      school = _useState6[0],
      setSchool = _useState6[1];

  var _useState7 = (0,react.useState)(""),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      email = _useState8[0],
      setEmail = _useState8[1];

  var _useState9 = (0,react.useState)(""),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      password = _useState10[0],
      setPassword = _useState10[1];

  var _useState11 = (0,react.useState)(moment_default()().add(1, "M").format("YYYY-MM-DD")),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      expiry = _useState12[0],
      setExpiry = _useState12[1];

  var _useState13 = (0,react.useState)(null),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      error = _useState14[0],
      setError = _useState14[1];

  var _useState15 = (0,react.useState)(false),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      passwordVisible = _useState16[0],
      setPasswordVisible = _useState16[1];

  var _useState17 = (0,react.useState)(false),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      submitted = _useState18[0],
      setSubmitted = _useState18[1];

  var _useState19 = (0,react.useState)(""),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      confirmPassword = _useState20[0],
      setConfirmPassword = _useState20[1];

  var _useState21 = (0,react.useState)(false),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      confirmPasswordVisible = _useState22[0],
      setConfirmPasswordVisible = _useState22[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var isSaveDisabled = !name || !email || !role || !password || !confirmPassword || role === roles/* ROLES.OWNER_ROLE */.K.OWNER_ROLE && !school;

  function resetForm() {
    setSubmitted(false);
    setError(false);
    setPasswordVisible(false);
    setConfirmPasswordVisible(false);
    setRole("");
    setExpiry("");
    setName(""); // setUsername("");

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setSchool("");
  }

  var closeAndClean = function closeAndClean(fetch) {
    toggleSidebar();
    resetForm();

    if (fetch) {
      refresh();
    }
  };

  var onSuccess = function onSuccess() {
    closeAndClean(true);
  };

  var onFail = function onFail(err) {
    if (err.code === 418) {
      setError("usernameExist");
    } else if (err.code === 416) {
      setError("invalidEmail");
    } else if (err.code === 414) {
      setError("emailExist");
    } else if (err.code === 422) {
      setError("passwordLengthError");
    } else if (err.code === 423) {
      setError("passwordsMatchError");
    } else if (err.code === 424) {
      setError("usernameLengthError");
    } else {
      setError("somethingWrong");
    }
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setError(false);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("invalidEmail");
      return;
    }

    if (password.length < 8) {
      setError("passwordLengthError");
      return;
    }

    if (password !== confirmPassword) {
      setError("passwordsMatchError");
      return;
    }

    if (isSaveDisabled) return;
    (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* REGISTER_URL */.jg, {
      password: password,
      confirmPassword: confirmPassword,
      email: email,
      name: name,
      role: role,
      school: school
    }], true, react_toastify_esm/* toast */.Am, dispatch, "userRegistered", "", onSuccess, onFail);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(sidebar/* default */.Z, {
    size: "lg",
    open: open,
    title: (0,useIntl/* default */.Z)().formatMessage({
      id: "newUser"
    }),
    headerClassName: "mb-1",
    contentClassName: "pt-0",
    onClosed: resetForm,
    toggleSidebar: toggleSidebar,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* default */.Z, {
        className: "mt-2",
        onSubmit: onSubmit,
        children: [error && /*#__PURE__*/(0,jsx_runtime.jsxs)(Alert/* default */.Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: error
                })
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(alert_octagon/* default */.Z, {
            id: "login-tip",
            className: "mx-50",
            size: 18,
            style: {
              top: "10px",
              right: "10px"
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "name"
          }),
          value: name,
          id: "name",
          name: "name",
          placeholder: "",
          onChange: function onChange(e) {
            return setName(e.target.value);
          },
          invalid: submitted && !name,
          requireStar: true,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.Z, {
              size: 14
            })
          }
        }), role === roles/* ROLES.OWNER_ROLE */.K.OWNER_ROLE && /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "schoolName"
          }),
          value: school,
          id: "schoolName",
          name: "schoolName",
          placeholder: "",
          onChange: function onChange(e) {
            return setSchool(e.target.value);
          },
          invalid: submitted && !school,
          requireStar: true,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(briefcase/* default */.Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "email"
          }),
          value: email,
          id: "email",
          name: "email",
          placeholder: "",
          invalid: submitted && !email,
          requireStar: true,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          onChange: function onChange(e) {
            return setEmail(e.target.value);
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(at_sign/* default */.Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "expiry"
          }),
          id: "expiry",
          name: "expiry",
          className: "form-control",
          onChange: function onChange(date) {
            return setExpiry(date[0]);
          },
          value: expiry,
          requireStar: true,
          invalid: submitted && !expiry,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(calendar/* default */.Z, {
              size: 14
            })
          },
          type: "flatPicker"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "password"
          }),
          type: passwordVisible ? "text" : "password",
          value: password,
          id: "login-password",
          placeholder: "",
          name: "login-password",
          className: "input-group-merge",
          onChange: function onChange(e) {
            return setPassword(e.target.value);
          },
          invalid: submitted && (!password || password.length < 8),
          requireStar: true,
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(lock/* default */.Z, {
              size: 14
            })
          },
          append: {
            icon: passwordVisible ? /*#__PURE__*/(0,jsx_runtime.jsx)(eye_off/* default */.Z, {
              size: 14
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(eye/* default */.Z, {
              size: 14
            }),
            onClick: function onClick() {
              return setPasswordVisible(!passwordVisible);
            }
          },
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: !password ? "required" : password.length < 8 ? "passwordLengthError" : ""
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "confirmPassword"
          }),
          type: confirmPasswordVisible ? "text" : "password",
          value: confirmPassword,
          id: "login-confirmPassword",
          placeholder: "",
          name: "login-confirmPassword",
          className: "input-group-merge",
          onChange: function onChange(e) {
            return setConfirmPassword(e.target.value);
          },
          invalid: submitted && !confirmPassword,
          requireStar: true,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(lock/* default */.Z, {
              size: 14
            })
          },
          append: {
            icon: confirmPasswordVisible ? /*#__PURE__*/(0,jsx_runtime.jsx)(eye_off/* default */.Z, {
              size: 14
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(eye/* default */.Z, {
              size: 14
            }),
            onClick: function onClick() {
              return setConfirmPasswordVisible(!confirmPasswordVisible);
            }
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
          type: "submit",
          className: "mr-1",
          color: "primary",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "save"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
          color: "danger",
          outline: true,
          onClick: closeAndClean,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "cancel"
          })
        })]
      })
    })
  });
};

/* harmony default export */ var Sidebar = (SidebarNewUsers);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./src/@core/components/avatar/index.js
var avatar = __webpack_require__(68138);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Badge.js
var Badge = __webpack_require__(17354);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/UncontrolledDropdown.js
var UncontrolledDropdown = __webpack_require__(83823);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownToggle.js
var DropdownToggle = __webpack_require__(65497);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownMenu.js
var DropdownMenu = __webpack_require__(42365);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownItem.js
var DropdownItem = __webpack_require__(98227);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/database.js
var database = __webpack_require__(39046);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/bookmark.js
var bookmark = __webpack_require__(10980);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit.js
var edit = __webpack_require__(32655);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/dollar-sign.js
var dollar_sign = __webpack_require__(83220);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/command.js
var command = __webpack_require__(61752);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit-2.js
var edit_2 = __webpack_require__(55654);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/more-vertical.js
var more_vertical = __webpack_require__(79366);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/file-text.js
var file_text = __webpack_require__(34073);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__(30833);
// EXTERNAL MODULE: ./src/utility/Utils.js
var Utils = __webpack_require__(16724);
// EXTERNAL MODULE: ./src/configs/actions.js
var actions = __webpack_require__(56176);
// EXTERNAL MODULE: ./src/configs/subjects.js
var subjects = __webpack_require__(14322);
;// CONCATENATED MODULE: ./src/views/apps/user/list/columns.js
// ** React Imports
 // ** Custom Components

 // ** Third Party Components






 // ** Renders Role Columns




var renderRole = function renderRole(row, intl) {
  var roleObj = {
    admin: {
      class: "text-danger",
      icon: database/* default */.Z
    },
    owner: {
      class: "text-warning",
      icon: bookmark/* default */.Z
    },
    student: {
      class: "text-primary",
      icon: briefcase/* default */.Z
    },
    teacher: {
      class: "text-info",
      icon: edit/* default */.Z
    },
    finance: {
      class: "text-success",
      icon: dollar_sign/* default */.Z
    },
    driver: {
      class: "text-info",
      icon: command/* default */.Z
    },
    staff: {
      class: "text-info",
      icon: user/* default */.Z
    }
  };
  var Icon = roleObj[row.role] ? roleObj[row.role].icon : edit_2/* default */.Z;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: "text-truncate text-capitalize align-middle",
    children: intl.formatMessage({
      id: row.role
    })
  });
};

var columns = function columns(deleteUser, intl, ability) {
  return [{
    name: intl.formatMessage({
      id: "user"
    }),
    minWidth: "297px",
    selector: "name",
    sortable: false,
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex justify-content-left align-items-center",
        children: [row.avatar ? /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
          img: row.avatar,
          className: "mr-1"
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
          color: "light-danger",
          className: "mr-1",
          content: row.name,
          initials: true
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "d-flex flex-column",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, {
            to: "/apps/user/view/".concat(row.id),
            className: "user-name text-truncate mb-0",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "font-weight-bold text-capitalize",
              children: row.name
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
            className: "text-truncate text-muted mb-0",
            children: row.username
          })]
        })]
      });
    }
  }, // {
  //   name: intl.formatMessage({ id: 'email' }),
  //   // minWidth: '320px',
  //   selector: 'email',
  //   sortable: false,
  //   cell: (row) => row.email,
  // },
  {
    name: intl.formatMessage({
      id: "school"
    }),
    // minWidth: '320px',
    selector: "schoolName",
    sortable: false,
    cell: function cell(row) {
      return row.schoolName;
    }
  }, {
    name: intl.formatMessage({
      id: "phone"
    }),
    // minWidth: '320px',
    selector: "phone",
    sortable: false,
    cell: function cell(row) {
      return (0,Utils/* formatPhone */.CN)(row.phone);
    }
  }, {
    name: intl.formatMessage({
      id: "role"
    }),
    // minWidth: '172px',
    selector: "role",
    sortable: false,
    cell: function cell(row) {
      return renderRole(row, intl);
    }
  }, {
    name: intl.formatMessage({
      id: "expiry"
    }),
    // minWidth: '172px',
    selector: "expiry",
    sortable: false,
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
        pill: true,
        color: moment_default()(row.expiry).isBefore(moment_default()()) ? "light-danger" : "light-success",
        className: "mr-1 font-small-3",
        children: moment_default()(row.expiry).format("YYYY-MM-DD")
      });
    }
  }, {
    name: intl.formatMessage({
      id: "status"
    }),
    // minWidth: '172px',
    selector: "status",
    sortable: false,
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
        pill: true,
        color: row.blocked ? "light-danger" : !row.accountVerified ? "light-warning" : "light-success",
        className: "mr-1 font-small-3",
        children: row.blocked ? intl.formatMessage({
          id: "blocked"
        }) : !row.accountVerified ? intl.formatMessage({
          id: "unverified"
        }) : intl.formatMessage({
          id: "active"
        })
      });
    }
  }, {
    name: intl.formatMessage({
      id: "createdAt"
    }),
    // minWidth: '320px',
    selector: "date",
    sortable: false,
    cell: function cell(row) {
      return moment_default()(row.createdAt).format("YYYY-MM-DD");
    }
  }, {
    name: intl.formatMessage({
      id: "actions"
    }),
    minWidth: "100px",
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(UncontrolledDropdown/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DropdownToggle/* default */.Z, {
          tag: "div",
          className: "btn btn-sm",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(more_vertical/* default */.Z, {
            size: 14,
            className: "cursor-pointer"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownMenu/* default */.Z, {
          right: true,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            tag: react_router_dom/* Link */.rU,
            to: "/apps/user/view/".concat(row.id),
            className: "w-100",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(file_text/* default */.Z, {
              size: 14,
              className: "mr-50"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "align-middle",
              children: intl.formatMessage({
                id: "details"
              })
            })]
          }), ability.can(actions/* ACTIONS.MANAGE_ACTION */.a.MANAGE_ACTION, subjects/* SUBJECTS.USER_SUBJECT */.k.USER_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            tag: react_router_dom/* Link */.rU,
            to: "/apps/user/edit/".concat(row.id),
            className: "w-100",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(edit_2/* default */.Z, {
              size: 14,
              className: "mr-50"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "align-middle",
              children: intl.formatMessage({
                id: "edit"
              })
            })]
          }), ability.can(actions/* ACTIONS.MANAGE_ACTION */.a.MANAGE_ACTION, subjects/* SUBJECTS.USER_SUBJECT */.k.USER_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            className: "w-100",
            onClick: function onClick() {
              return deleteUser(row.id);
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(trash_2/* default */.Z, {
              size: 14,
              className: "mr-50"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "align-middle",
              children: intl.formatMessage({
                id: "delete"
              })
            })]
          })]
        })]
      });
    }
  }];
};
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/plus.js
var plus = __webpack_require__(61896);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/filter.js
var icons_filter = __webpack_require__(64811);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__(27434);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-up.js
var chevron_up = __webpack_require__(82802);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/star.js
var star = __webpack_require__(12575);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/check.js
var check = __webpack_require__(46445);
// EXTERNAL MODULE: ./src/utility/hooks/useSkin.js
var useSkin = __webpack_require__(47201);
// EXTERNAL MODULE: ./node_modules/react-data-table-component/dist/index.cjs.js
var index_cjs = __webpack_require__(90044);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Row.js
var Row = __webpack_require__(10267);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Col.js
var Col = __webpack_require__(51252);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Label.js
var Label = __webpack_require__(67954);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(68959);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Card.js
var Card = __webpack_require__(56941);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/CardHeader.js
var CardHeader = __webpack_require__(38089);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/CardTitle.js
var CardTitle = __webpack_require__(75351);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/CardBody.js
var CardBody = __webpack_require__(91121);
// EXTERNAL MODULE: ./src/@core/scss/react/libs/react-select/_react-select.scss
var _react_select = __webpack_require__(22299);
// EXTERNAL MODULE: ./src/@core/scss/react/libs/tables/react-dataTable-component.scss
var react_dataTable_component = __webpack_require__(73732);
// EXTERNAL MODULE: ./src/views/customComponents/Alert.js
var customComponents_Alert = __webpack_require__(16714);
// EXTERNAL MODULE: ./src/views/customComponents/Pagination.js
var Pagination = __webpack_require__(4248);
// EXTERNAL MODULE: ./src/configs/tableConstants.js
var tableConstants = __webpack_require__(82433);
// EXTERNAL MODULE: ./src/utility/context/Can.js
var Can = __webpack_require__(6756);
// EXTERNAL MODULE: ./src/views/customComponents/ExportTable.js
var ExportTable = __webpack_require__(82475);
// EXTERNAL MODULE: ./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(85256);
;// CONCATENATED MODULE: ./src/views/apps/user/list/Table.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


// ** React Imports
 // ** Invoice List Sidebar

 // ** Columns

 // ** Store & Actions

 // ** Third Party Components





 // ** Styles

















 // ** Table Header





var CustomHeader = function CustomHeader(_ref) {
  var toggleSidebar = _ref.toggleSidebar,
      handlePerPage = _ref.handlePerPage,
      rowsPerPage = _ref.rowsPerPage,
      pageIndex = _ref.pageIndex,
      data = _ref.data,
      intl = _ref.intl,
      ability = _ref.ability;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "list-table-header w-100 mr-1 ml-50 mt-2 mb-75",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
        xl: "6",
        className: "d-flex align-items-center p-0",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "d-flex align-items-center w-100",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* default */.Z, {
            for: "rows-per-page",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "rowsPerPage"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
            className: "form-control mx-50",
            type: "select",
            value: rowsPerPage,
            onChange: handlePerPage,
            style: {
              width: "4rem",
              padding: "0 0.8rem",
              backgroundPosition: "calc(100% - 3px) 7px, calc(100% - 20px) 13px, 100% 0"
            },
            bsSize: "sm",
            children: tableConstants/* tableRowsPerPage.map */.m.map(function (r, k) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                value: r,
                children: r
              }, k);
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Label/* default */.Z, {
            for: "rows-per-page",
            children: data.count ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [(pageIndex - 1) * rowsPerPage + 1, "-", pageIndex * rowsPerPage > data.count ? data.count : pageIndex * rowsPerPage, " ", intl.formatMessage({
                id: "of"
              }), " ", data.count]
            }) : null
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
        xl: "6",
        className: "d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "mr-1",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExportTable/* ExportTable */._, {
            data: data.rows,
            title: "users",
            keys: ["name", "email", "phone", "role"],
            displays: [null, null, function (row) {
              return (0,Utils/* formatPhone */.CN)(row.phone);
            }]
          })
        }), ability.can(actions/* ACTIONS.MANAGE_ACTION */.a.MANAGE_ACTION, subjects/* SUBJECTS.USER_SUBJECT */.k.USER_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
          color: "primary",
          onClick: toggleSidebar,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(plus/* default */.Z, {
            size: 15
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle ml-25",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "addUser"
            })
          })]
        })]
      })]
    })
  });
};

var UsersList = function UsersList() {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      filterOpen = _useState2[0],
      setFilterOpen = _useState2[1];

  var _useState3 = (0,react.useState)(tableConstants/* tableRowsPerPage.0 */.m[0]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      pageSize = _useState4[0],
      setPageSize = _useState4[1];

  var _useState5 = (0,react.useState)(1),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      pageIndex = _useState6[0],
      setPageIndex = _useState6[1];

  var _useState7 = (0,react.useState)([["createdAt", "DESC"]]),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      order = _useState8[0],
      setOrder = _useState8[1];

  var _useState9 = (0,react.useState)({
    count: 0,
    rows: []
  }),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      data = _useState10[0],
      setData = _useState10[1];

  var _useState11 = (0,react.useState)({
    role: roles/* ROLES.OWNER_ROLE */.K.OWNER_ROLE
  }),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      filter = _useState12[0],
      setFilter = _useState12[1];

  var dispatch = (0,es/* useDispatch */.I0)();

  var _useState13 = (0,react.useState)(""),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      searchTerm = _useState14[0],
      setSearchTerm = _useState14[1];

  var _useState15 = (0,react.useState)(false),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      sidebarOpen = _useState16[0],
      setSidebarOpen = _useState16[1];

  var _useState17 = (0,react.useState)(""),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      currentRole = _useState18[0],
      setCurrentRole = _useState18[1];

  var _useState19 = (0,react.useState)(""),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      status = _useState20[0],
      setStatus = _useState20[1];

  var _useState21 = (0,react.useState)(0),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      timer = _useState22[0],
      setTimer = _useState22[1];

  var intl = (0,useIntl/* default */.Z)();
  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var _useState23 = (0,react.useState)(null),
      _useState24 = (0,slicedToArray/* default */.Z)(_useState23, 2),
      from = _useState24[0],
      setFrom = _useState24[1];

  var _useState25 = (0,react.useState)(null),
      _useState26 = (0,slicedToArray/* default */.Z)(_useState25, 2),
      to = _useState26[0],
      setTo = _useState26[1];

  var _useSkin = (0,useSkin/* useSkin */.Q)(),
      _useSkin2 = (0,slicedToArray/* default */.Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var history = (0,react_router/* useHistory */.k6)();

  var getData = function getData(i, s, o, f) {
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* USERS_URL */.Gm, i, s, o, f], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", function (res) {
      return setData(res);
    }, null);
  };

  (0,react.useEffect)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getData(pageIndex, pageSize, order, filter);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var toggleSidebar = function toggleSidebar() {
    return setSidebarOpen(!sidebarOpen);
  }; // ** Function in get data on page change


  var handlePagination = function handlePagination(page) {
    setPageIndex(page.selected + 1);
    getData(page.selected + 1, pageSize, order, filter);
  }; // ** Function in get data on rows per page


  var handlePerPage = function handlePerPage(e) {
    setPageIndex(1);
    setPageSize(parseInt(e.currentTarget.value));
    getData(1, parseInt(e.currentTarget.value), order, filter);
  };

  var handleDate = function handleDate(val) {
    setPageIndex(1);
    var f = val && val.length ? val[0] : "";
    var t = val && val.length > 1 ? val[1] : "";

    var fl = _objectSpread(_objectSpread({}, filter), {}, {
      from: f ? moment_default()(f).format("YYYY-MM-DD") : "",
      to: t ? moment_default()(t).format("YYYY-MM-DD") : ""
    });

    setFrom(f);
    setTo(t);
    setFilter(fl);
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, fl);
    }, 700));
  }; // ** Function in get data on search query change


  var handleFilter = function handleFilter(val) {
    setPageIndex(1);
    setSearchTerm(val);
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      name: val
    }));
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, _objectSpread(_objectSpread({}, filter), {}, {
        name: val
      }));
    }, 700));
  };

  var onRoleChange = function onRoleChange(role) {
    setPageIndex(1);
    setCurrentRole(role);
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      role: role
    }));
    getData(1, pageSize, order, _objectSpread(_objectSpread({}, filter), {}, {
      role: role
    }));
  };

  var onStatusChange = function onStatusChange(s) {
    setPageIndex(1);
    setStatus(s);
    var filters = {};

    if (s === "blocked") {
      filters = {
        blocked: true
      };
    } else if (s === "unverified") {
      filters = {
        accountVerified: false
      };
    } else if (s === "active") {
      filters = {
        blocked: false,
        accountVerified: true
      };
    }

    setFilter(_objectSpread(_objectSpread({}, filters), filters));
    getData(1, pageSize, order, _objectSpread(_objectSpread({}, filters), filters));
  };

  var deleteUser = function deleteUser(id) {
    (0,customComponents_Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteUserQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* update */.Vx, [api_urls/* USER_URL */.uh, id, {
          deleted: true
        }], true, react_toastify_esm/* toast */.Am, dispatch, "userDeletedSuccessfully", "somethingWrong", function () {
          return getData(pageIndex, pageSize, order, filter);
        }, null);
      }
    });
  }; // ** Table data to render


  var dataToRender = function dataToRender() {
    var _data$rows, _data$rows2;

    var filters = {
      name: searchTerm,
      role: currentRole
    };
    var isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0;
    });

    if (((_data$rows = data.rows) === null || _data$rows === void 0 ? void 0 : _data$rows.length) > 0) {
      return data.rows;
    } else if (((_data$rows2 = data.rows) === null || _data$rows2 === void 0 ? void 0 : _data$rows2.length) === 0 && isFiltered) {
      return [];
    } else {
      var _data$rows3;

      return (_data$rows3 = data.rows) === null || _data$rows3 === void 0 ? void 0 : _data$rows3.slice(0, pageSize);
    }
  };

  var onSort = function onSort(row, direction) {
    var sort = [[row.selector, direction]];
    setOrder(sort);
    getData(pageIndex, pageSize, sort, filter);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "app-user-list",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(CardHeader/* default */.Z, {
          className: "cursor-pointer",
          onClick: function onClick() {
            return setFilterOpen(!filterOpen);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(CardTitle/* default */.Z, {
            tag: "h4",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(icons_filter/* default */.Z, {
              className: "mr-1 text-dark"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "searchFilter"
            })]
          }), !filterOpen ? /*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(chevron_up/* default */.Z, {})]
        }), filterOpen && /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "3",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
                prepend: {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.Z, {
                    size: 14
                  })
                },
                placeholder: intl.formatMessage({
                  id: "searchByName"
                }),
                id: "search",
                type: "text",
                value: searchTerm,
                onChange: function onChange(e) {
                  return handleFilter(e.target.value);
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "3",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Field/* default */.Z, {
                prepend: {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(star/* default */.Z, {
                    size: 14
                  })
                },
                type: "select",
                isClearable: false,
                theme: Utils/* selectThemeColors */.ss,
                value: currentRole,
                onChange: function onChange(e) {
                  return onRoleChange(e.target.value);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "",
                  children: (0,useIntl/* default */.Z)().formatMessage({
                    id: "selectRole"
                  })
                }), roles/* ROLES_LIST.map */.F.map(function (r, k) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                    value: r,
                    children: (0,useIntl/* default */.Z)().formatMessage({
                      id: r
                    })
                  }, k);
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "3",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
                className: "form-control",
                options: {
                  mode: "range"
                },
                type: "flatPicker",
                prepend: {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(calendar/* default */.Z, {
                    size: 14
                  })
                },
                placeholder: intl.formatMessage({
                  id: "expiry"
                }),
                id: "from",
                value: [from, to],
                onChange: function onChange(e) {
                  return handleDate(e);
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "3",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Field/* default */.Z, {
                prepend: {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.Z, {
                    size: 14
                  })
                },
                type: "select",
                isClearable: false,
                theme: Utils/* selectThemeColors */.ss,
                value: status,
                onChange: function onChange(e) {
                  return onStatusChange(e.target.value);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "",
                  children: intl.formatMessage({
                    id: "selectStatus"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "active",
                  children: intl.formatMessage({
                    id: "active"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "unverified",
                  children: intl.formatMessage({
                    id: "unverified"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "blocked",
                  children: intl.formatMessage({
                    id: "blocked"
                  })
                })]
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_cjs/* default */.ZP, {
          theme: skin,
          onRowClicked: function onRowClicked(row) {
            return history.push("/apps/user/view/".concat(row.id));
          },
          highlightOnHover: true,
          pointerOnHover: true,
          noHeader: true,
          pagination: true,
          subHeader: true,
          responsive: true,
          paginationServer: true,
          columns: columns(deleteUser, intl, ability),
          sortIcon: /*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.Z, {}),
          className: "react-dataTable",
          paginationComponent: function paginationComponent() {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
              pageIndex: pageIndex,
              pageSize: pageSize,
              total: data.count,
              handlePagination: handlePagination
            });
          },
          data: dataToRender(),
          onSort: onSort,
          noDataComponent: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "my-3",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "noRecords"
            })
          }),
          subHeaderComponent: /*#__PURE__*/(0,jsx_runtime.jsx)(CustomHeader, {
            ability: ability,
            pageIndex: pageIndex,
            toggleSidebar: toggleSidebar,
            handlePerPage: handlePerPage,
            rowsPerPage: pageSize,
            searchTerm: searchTerm,
            handleFilter: handleFilter,
            data: data,
            intl: intl
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Sidebar, {
        open: sidebarOpen,
        toggleSidebar: toggleSidebar,
        refresh: function refresh() {
          return getData(pageIndex, pageSize, order, filter);
        }
      })]
    })
  });
};

/* harmony default export */ var Table = (UsersList);
// EXTERNAL MODULE: ./src/@core/scss/react/apps/app-users.scss
var app_users = __webpack_require__(61360);
;// CONCATENATED MODULE: ./src/views/apps/user/list/index.js
// ** User List Component
 // ** Styles




var list_UsersList = function UsersList() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "app-user-list",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Table, {})
  });
};

/* harmony default export */ var list = (list_UsersList);

/***/ }),

/***/ 82475:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ ExportTable; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44012);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75939);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97975);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60216);
/* harmony import */ var _utility_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16724);
/* harmony import */ var _utility_context_Can__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6756);
/* harmony import */ var _configs_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56176);
/* harmony import */ var _configs_subjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14322);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47116);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);

// ** Custom Pagination











var ExportTable = function ExportTable(_ref) {
  var data = _ref.data,
      keys = _ref.keys,
      headers = _ref.headers,
      title = _ref.title,
      displays = _ref.displays,
      id = _ref.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(headers),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(_useState, 2),
      heads = _useState2[0],
      setHeads = _useState2[1];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
  var ability = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_utility_context_Can__WEBPACK_IMPORTED_MODULE_2__/* .AbilityContext */ .v);
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_5__.useReactToPrint)({
    content: function content() {
      return document.getElementsByClassName("rdt_Table")[0];
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!headers) {
      setHeads((keys || []).map(function (h) {
        return intl.formatMessage({
          id: h
        });
      }));
    }
  }, []);
  return ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_3__/* .ACTIONS.SEE_ACTION */ .a.SEE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_4__/* .SUBJECTS.PRINT_SUBJECT */ .k.PRINT_SUBJECT) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    onClick: handlePrint,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Ripple */ .Z.Ripple, {
      color: "dark",
      outline: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        size: 15
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: "align-middle ml-50",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          id: "print"
        })
      })]
    })
  }) : null;
};

/***/ }),

/***/ 4248:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11358);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82371);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45169);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);
// ** Custom Pagination




var Pagination = function Pagination(_ref) {
  var pageIndex = _ref.pageIndex,
      pageSize = _ref.pageSize,
      total = _ref.total,
      handlePagination = _ref.handlePagination,
      className = _ref.className,
      marginPagesDisplayed = _ref.marginPagesDisplayed;
  var count = Number(Math.ceil(total / pageSize));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_paginate__WEBPACK_IMPORTED_MODULE_0___default()), {
    previousLabel: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
    nextLabel: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
    pageCount: count || 1,
    marginPagesDisplayed: marginPagesDisplayed || 3,
    activeClassName: "active",
    forcePage: pageIndex !== 0 ? pageIndex - 1 : 0,
    onPageChange: function onPageChange(page) {
      return handlePagination(page);
    },
    pageClassName: "page-item",
    nextLinkClassName: "page-link",
    nextClassName: "page-item next",
    previousClassName: "page-item prev",
    previousLinkClassName: "page-link",
    pageLinkClassName: "page-link",
    containerClassName: "pagination react-paginate justify-content-end mt-1 pr-1 ".concat(className)
  });
};

/***/ }),

/***/ 15538:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63366);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97326);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94578);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23663);








var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_3__/* .tagPropType */ .iC,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
var defaultProps = {
  tag: 'form'
};

var Form = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_this));
    _this.submit = _this.submit.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        inline = _this$props.inline,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_this$props, ["className", "cssModule", "inline", "tag", "innerRef"]);

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, inline ? 'form-inline' : false), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (Form);

/***/ })

}]);