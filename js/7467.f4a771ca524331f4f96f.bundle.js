"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[7467],{

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

/***/ 82433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ tableRowsPerPage; }
/* harmony export */ });
var tableRowsPerPage = [10, 20, 50, 100];

/***/ }),

/***/ 47467:
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
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Media.js
var Media = __webpack_require__(34726);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Badge.js
var Badge = __webpack_require__(17354);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Form.js
var Form = __webpack_require__(15538);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Alert.js
var Alert = __webpack_require__(17834);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Button.js
var Button = __webpack_require__(97975);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Modal.js + 1 modules
var Modal = __webpack_require__(85677);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalHeader.js
var ModalHeader = __webpack_require__(32701);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalBody.js
var ModalBody = __webpack_require__(10684);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalFooter.js
var ModalFooter = __webpack_require__(97985);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Label.js
var Label = __webpack_require__(67954);
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
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/camera.js
var camera = __webpack_require__(52596);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-octagon.js
var alert_octagon = __webpack_require__(61643);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/user.js
var user = __webpack_require__(73752);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/phone.js
var icons_phone = __webpack_require__(60329);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/at-sign.js
var at_sign = __webpack_require__(29752);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/calendar.js
var calendar = __webpack_require__(91140);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/clock.js
var clock = __webpack_require__(90791);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/dollar-sign.js
var dollar_sign = __webpack_require__(83220);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/clipboard.js
var clipboard = __webpack_require__(70616);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/download.js
var download = __webpack_require__(72866);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x.js
var x = __webpack_require__(78268);
// EXTERNAL MODULE: ./src/views/customComponents/Field.js
var Field = __webpack_require__(48159);
// EXTERNAL MODULE: ./src/api/utlis.js
var utlis = __webpack_require__(16550);
// EXTERNAL MODULE: ./src/utility/Utils.js
var Utils = __webpack_require__(16724);
// EXTERNAL MODULE: ./src/assets/images/avatars/avatar-blank.png
var avatar_blank = __webpack_require__(76930);
// EXTERNAL MODULE: ./node_modules/react-webcam/dist/react-webcam.js
var react_webcam = __webpack_require__(64970);
var react_webcam_default = /*#__PURE__*/__webpack_require__.n(react_webcam);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/views/apps/staff/list/Sidebar.js

// ** React Import
 // ** Custom Components

 // ** Utils
// ** Third Party Components

 // ** Store & Actions














var SidebarNewUsers = function SidebarNewUsers(_ref) {
  var open = _ref.open,
      toggleSidebar = _ref.toggleSidebar,
      refresh = _ref.refresh;

  var _useState = (0,react.useState)(""),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      note = _useState4[0],
      setNote = _useState4[1];

  var _useState5 = (0,react.useState)(""),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      role = _useState6[0],
      setRole = _useState6[1];

  var _useState7 = (0,react.useState)(""),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      phone = _useState8[0],
      setPhone = _useState8[1];

  var _useState9 = (0,react.useState)(""),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      salary = _useState10[0],
      setSalary = _useState10[1];

  var _useState11 = (0,react.useState)("male"),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      gender = _useState12[0],
      setGender = _useState12[1];

  var _useState13 = (0,react.useState)("fullTime"),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      regime = _useState14[0],
      setRegime = _useState14[1];

  var _useState15 = (0,react.useState)(""),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      email = _useState16[0],
      setEmail = _useState16[1];

  var _useState17 = (0,react.useState)(),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      dob = _useState18[0],
      setDob = _useState18[1];

  var _useState19 = (0,react.useState)(null),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      error = _useState20[0],
      setError = _useState20[1];

  var _useState21 = (0,react.useState)(false),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      submitted = _useState22[0],
      setSubmitted = _useState22[1];

  var intl = (0,useIntl/* default */.Z)();
  var dispatch = (0,es/* useDispatch */.I0)();

  var _useState23 = (0,react.useState)(""),
      _useState24 = (0,slicedToArray/* default */.Z)(_useState23, 2),
      avatar = _useState24[0],
      setAvatar = _useState24[1];

  var _useState25 = (0,react.useState)(false),
      _useState26 = (0,slicedToArray/* default */.Z)(_useState25, 2),
      cameraOpen = _useState26[0],
      setCameraOpen = _useState26[1];

  var _useState27 = (0,react.useState)(false),
      _useState28 = (0,slicedToArray/* default */.Z)(_useState27, 2),
      imageOpen = _useState28[0],
      setImageOpen = _useState28[1];

  var isSaveDisabled = !name || !dob || !role;

  function resetForm() {
    setSubmitted(false);
    setError(false);
    setDob("");
    setName("");
    setEmail("");
    setRegime("fullTime");
    setSalary("");
    setPhone("");
    setAvatar("");
    setNote("");
    setGender("male");
    setRole("");
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

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("invalidEmail");
      return;
    }

    if (isSaveDisabled) return;
    (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* STAFF_URL */.Z2, {
      avatar: avatar,
      gender: gender,
      role: role,
      salary: salary,
      note: note,
      email: email,
      regime: regime,
      name: name,
      dob: dob,
      phone: phone
    }], true, react_toastify_esm/* toast */.Am, dispatch, "staffCreatedSuccessfully", "", onSuccess, onFail);
  };

  var onChange = function onChange(e) {
    (0,Utils/* uploadFiles */.IL)(e, react_toastify_esm/* toast */.Am, dispatch).then(function (result) {
      setAvatar(result.files[0].data);
      setImageOpen(false);
    });
  };

  function handleTakePhoto(dataUri) {
    setAvatar(dataUri);
    setCameraOpen(false);
    setImageOpen(false);
  }

  function onDeleteImage() {
    setAvatar("");
    setImageOpen(false);
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(sidebar/* default */.Z, {
    size: "lg",
    open: open,
    title: (0,useIntl/* default */.Z)().formatMessage({
      id: "newStaff"
    }),
    headerClassName: "mb-1",
    contentClassName: "pt-0",
    onClosed: resetForm,
    toggleSidebar: toggleSidebar,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Media/* default */.Z, {
        className: "mb-2",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "w-100 d-flex align-items-center justify-content-center",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "position-relative",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              onClick: function onClick() {
                return setImageOpen(true);
              },
              className: "user-avatar rounded mr-2 my-25 cursor-pointer",
              src: avatar || avatar_blank,
              alt: "user profile avatar",
              height: "90",
              width: "90"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
              onClick: function onClick() {
                return setImageOpen(true);
              },
              pill: true,
              color: "dark",
              className: "badge-up cursor-pointer mr-2",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(camera/* default */.Z, {})
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Media/* default */.Z, {
          className: "mt-50",
          body: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "d-flex flex-wrap mt-1 px-0"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* default */.Z, {
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
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "phone"
          }),
          value: phone,
          id: "phone",
          name: "phone",
          placeholder: "",
          invalid: submitted && phone && phone.length !== 10,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "phoneLengthError"
          }),
          onChange: function onChange(e) {
            return setPhone(e.target.value.replace(/ /g, ""));
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_phone/* default */.Z, {
              size: 14
            })
          },
          mask: {
            blocks: [4, 2, 2, 2],
            numericOnly: true
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "email"
          }),
          value: email,
          id: "email",
          name: "email",
          placeholder: "",
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
            id: "dob"
          }),
          id: "dob",
          name: "dob",
          className: "form-control",
          onChange: function onChange(date) {
            return setDob(date[0]);
          },
          value: dob,
          requireStar: true,
          invalid: submitted && !dob,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(calendar/* default */.Z, {
              size: 14
            })
          },
          type: "flatPicker"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "role"
          }),
          type: "select",
          id: "select-role",
          name: "select-role",
          value: role,
          onChange: function onChange(e) {
            return setRole(e.target.value);
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fa-solid fa-user-tie"
            })
          },
          requireStar: true,
          invalid: submitted && !role,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "",
            children: intl.formatMessage({
              id: "selectRole"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "manager",
            children: intl.formatMessage({
              id: "manager"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "staff",
            children: intl.formatMessage({
              id: "staff"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "operator",
            children: intl.formatMessage({
              id: "operator"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "accountant",
            children: intl.formatMessage({
              id: "accountant"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "driver",
            children: intl.formatMessage({
              id: "driver"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "gender"
          }),
          type: "select",
          id: "select-plan",
          name: "select-plan",
          value: gender,
          onChange: function onChange(e) {
            return setGender(e.target.value);
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fa-solid fa-venus-mars"
            })
          },
          requireStar: true,
          invalid: submitted && !gender,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "male",
            children: intl.formatMessage({
              id: "male"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "female",
            children: intl.formatMessage({
              id: "female"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "jobType"
          }),
          type: "select",
          id: "select-plan",
          name: "select-plan",
          value: regime,
          onChange: function onChange(e) {
            return setRegime(e.target.value);
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(clock/* default */.Z, {
              size: 14
            })
          },
          requireStar: true,
          invalid: submitted && !regime,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "fullTime",
            children: intl.formatMessage({
              id: "fullTime"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "partTime",
            children: intl.formatMessage({
              id: "partTime"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "salary"
          }),
          id: "salary",
          name: "salary",
          className: "form-control",
          onChange: function onChange(e) {
            return setSalary(e.target.value);
          },
          value: salary,
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(dollar_sign/* default */.Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "note"
          }),
          id: "note",
          type: "textarea",
          name: "note",
          className: "form-control",
          onChange: function onChange(e) {
            return setNote(e.target.value);
          },
          value: note,
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(clipboard/* default */.Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
          type: "submit",
          className: "mr-1",
          color: "primary",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "save"
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z //
    , {
      isOpen: cameraOpen,
      toggle: function toggle() {
        return setCameraOpen(!cameraOpen);
      },
      onClosed: function onClosed() {
        return setCameraOpen(false);
      },
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ModalHeader/* default */.Z, {
        toggle: function toggle() {
          return setCameraOpen(!cameraOpen);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "camera"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ModalBody/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "d-flex align-items-center justify-content-center w-100 flex-column",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)((react_webcam_default()), {
            audio: false // height={720}
            ,
            width: 300,
            screenshotFormat: "image/jpeg",
            videoConstraints: {
              width: 300,
              // height: 720,
              facingMode: "user"
            },
            children: function children(_ref2) {
              var getScreenshot = _ref2.getScreenshot;
              return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "d-100 d-flex align-items-center justify-content-center my-1",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
                  color: "info",
                  onClick: function onClick() {
                    return handleTakePhoto(getScreenshot);
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(camera/* default */.Z, {
                    size: 22
                  })
                })
              });
            }
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
      isOpen: imageOpen,
      toggle: function toggle() {
        return setImageOpen(!imageOpen);
      },
      onClosed: function onClosed() {
        return setImageOpen(false);
      },
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ModalHeader/* default */.Z, {
        toggle: function toggle() {
          return setImageOpen(!imageOpen);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "uploadPhoto"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ModalBody/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          style: {
            width: "100%"
          },
          src: avatar || avatar_blank,
          alt: ""
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalFooter/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
          id: "change-img",
          tag: Label/* default */.Z,
          color: "warning",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "d-none d-sm-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "file"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "d-block d-sm-none",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(download/* default */.Z, {
              size: 14
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            type: "file",
            hidden: true,
            id: "change-img",
            onChange: onChange,
            onClick: function onClick(event) {
              event.target.value = null;
            },
            accept: "image/*"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
          color: "success",
          onClick: function onClick() {
            return setCameraOpen(true);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "d-none d-sm-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "camera"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "d-block d-sm-none",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(camera/* default */.Z, {
              size: 14
            })
          })]
        }), avatar && /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
          color: "danger",
          onClick: onDeleteImage,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "d-none d-sm-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "delete"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "d-block d-sm-none",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.Z, {
              size: 14
            })
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var Sidebar = (SidebarNewUsers);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./src/@core/components/avatar/index.js
var avatar = __webpack_require__(68138);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/UncontrolledDropdown.js
var UncontrolledDropdown = __webpack_require__(83823);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownToggle.js
var DropdownToggle = __webpack_require__(65497);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownMenu.js
var DropdownMenu = __webpack_require__(42365);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownItem.js
var DropdownItem = __webpack_require__(98227);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/monitor.js
var monitor = __webpack_require__(12610);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/truck.js
var truck = __webpack_require__(9026);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/pen-tool.js
var pen_tool = __webpack_require__(65712);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit-2.js
var edit_2 = __webpack_require__(55654);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/more-vertical.js
var more_vertical = __webpack_require__(79366);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/file-text.js
var file_text = __webpack_require__(34073);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__(30833);
// EXTERNAL MODULE: ./src/configs/actions.js
var actions = __webpack_require__(56176);
// EXTERNAL MODULE: ./src/configs/subjects.js
var subjects = __webpack_require__(14322);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/views/apps/staff/list/columns.js
// ** React Imports
 // ** Custom Components

 // ** Third Party Components










var renderRole = function renderRole(row, intl) {
  var roleObj = {
    operator: {
      class: "text-success",
      icon: monitor/* default */.Z
    },
    accountant: {
      class: "text-primary",
      icon: dollar_sign/* default */.Z
    },
    driver: {
      class: "text-info",
      icon: truck/* default */.Z
    },
    staff: {
      class: "text-warning",
      icon: user/* default */.Z
    },
    manager: {
      class: "text-danger",
      icon: pen_tool/* default */.Z
    }
  };
  var Icon = roleObj[row.role] ? roleObj[row.role].icon : edit_2/* default */.Z;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
    className: "text-truncate text-capitalize align-middle",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      size: 14,
      className: "".concat(roleObj[row.role] ? roleObj[row.role].class : "", " mr-50")
    }), intl.formatMessage({
      id: row.role
    })]
  });
};

var columns = function columns(deleteStaff, intl, ability, history) {
  return [{
    name: intl.formatMessage({
      id: "staff"
    }),
    minWidth: "297px",
    selector: "name",
    sortable: false,
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        onClick: function onClick() {
          return history.push("/apps/staff/view/".concat(row.id));
        },
        className: "d-flex justify-content-left align-items-center cursor-pointer",
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
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "font-weight-bold text-capitalize",
            children: row.name
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
            className: "text-truncate text-muted mb-0",
            children: row.username
          })]
        })]
      });
    }
  }, {
    name: intl.formatMessage({
      id: "email"
    }),
    // minWidth: '320px',
    selector: "email",
    sortable: false,
    cell: function cell(row) {
      return row.email;
    }
  }, {
    name: intl.formatMessage({
      id: "gender"
    }),
    // minWidth: '320px',
    selector: "gender",
    sortable: false,
    cell: function cell(row) {
      return intl.formatMessage({
        id: row.gender
      });
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
      id: "dob"
    }),
    // minWidth: '320px',
    selector: "dob",
    sortable: false,
    cell: function cell(row) {
      return moment_default()(row.dob).format("YYYY-MM-DD");
    }
  }, {
    name: intl.formatMessage({
      id: "role"
    }),
    // minWidth: '320px',
    selector: "role",
    sortable: false,
    cell: function cell(row) {
      return renderRole(row, intl);
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
      id: "jobType"
    }),
    // minWidth: '172px',
    selector: "status",
    sortable: false,
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
        pill: true,
        color: row.regime === "partTime" ? "light-warning" : "light-success",
        className: "mr-1 font-small-3",
        children: intl.formatMessage({
          id: row.regime || "fullTime"
        })
      });
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
            to: "/apps/staff/view/".concat(row.id),
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
          }), ability.can(actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION, subjects/* SUBJECTS.STAFF_SUBJECT */.k.STAFF_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            tag: react_router_dom/* Link */.rU,
            to: "/apps/staff/edit/".concat(row.id),
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
          }), ability.can(actions/* ACTIONS.DELETE_ACTION */.a.DELETE_ACTION, subjects/* SUBJECTS.STAFF_SUBJECT */.k.STAFF_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            className: "w-100",
            onClick: function onClick() {
              return deleteStaff(row.id);
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
;// CONCATENATED MODULE: ./src/views/apps/staff/list/Table.js




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
            title: "staffs",
            keys: ["name", "email", "phone"],
            displays: [null, null, function (row) {
              return (0,Utils/* formatPhone */.CN)(row.phone);
            }]
          })
        }), ability.can(actions/* ACTIONS.WRITE_ACTION */.a.WRITE_ACTION, subjects/* SUBJECTS.STAFF_SUBJECT */.k.STAFF_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
          color: "primary",
          onClick: toggleSidebar,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(plus/* default */.Z, {
            size: 15
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle ml-25",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "addStaff"
            })
          })]
        })]
      })]
    })
  });
};

var StaffsList = function StaffsList() {
  var _useState = (0,react.useState)(tableConstants/* tableRowsPerPage.0 */.m[0]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      pageSize = _useState2[0],
      setPageSize = _useState2[1];

  var _useState3 = (0,react.useState)(1),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      pageIndex = _useState4[0],
      setPageIndex = _useState4[1];

  var _useState5 = (0,react.useState)([["createdAt", "DESC"]]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      order = _useState6[0],
      setOrder = _useState6[1];

  var _useState7 = (0,react.useState)({
    count: 0,
    rows: []
  }),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  var _useState9 = (0,react.useState)({}),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      filter = _useState10[0],
      setFilter = _useState10[1];

  var dispatch = (0,es/* useDispatch */.I0)();

  var _useState11 = (0,react.useState)(""),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      searchTerm = _useState12[0],
      setSearchTerm = _useState12[1];

  var _useState13 = (0,react.useState)(""),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      phone = _useState14[0],
      setPhone = _useState14[1];

  var _useState15 = (0,react.useState)(false),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      sidebarOpen = _useState16[0],
      setSidebarOpen = _useState16[1];

  var _useState17 = (0,react.useState)(false),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      filterOpen = _useState18[0],
      setFilterOpen = _useState18[1];

  var _useSkin = (0,useSkin/* useSkin */.Q)(),
      _useSkin2 = (0,slicedToArray/* default */.Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var _useState19 = (0,react.useState)(""),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      gender = _useState20[0],
      setGender = _useState20[1];

  var _useState21 = (0,react.useState)(""),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      role = _useState22[0],
      setRole = _useState22[1];

  var _useState23 = (0,react.useState)(""),
      _useState24 = (0,slicedToArray/* default */.Z)(_useState23, 2),
      status = _useState24[0],
      setStatus = _useState24[1];

  var _useState25 = (0,react.useState)(0),
      _useState26 = (0,slicedToArray/* default */.Z)(_useState25, 2),
      timer = _useState26[0],
      setTimer = _useState26[1];

  var intl = (0,useIntl/* default */.Z)();
  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var _useState27 = (0,react.useState)(null),
      _useState28 = (0,slicedToArray/* default */.Z)(_useState27, 2),
      from = _useState28[0],
      setFrom = _useState28[1];

  var _useState29 = (0,react.useState)(null),
      _useState30 = (0,slicedToArray/* default */.Z)(_useState29, 2),
      to = _useState30[0],
      setTo = _useState30[1];

  var history = (0,react_router/* useHistory */.k6)();

  var getData = function getData(i, s, o, f) {
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* STAFFS_URL */.ZZ, i, s, o, f], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", function (res) {
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

  var handleFilterPhone = function handleFilterPhone(val) {
    setPageIndex(1);
    setPhone(val);
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      phone: val
    }));
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, _objectSpread(_objectSpread({}, filter), {}, {
        phone: val
      }));
    }, 700));
  };

  var onRoleChange = function onRoleChange(role) {
    setPageIndex(1);
    setRole(role);
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      role: role
    }));
    getData(1, pageSize, order, _objectSpread(_objectSpread({}, filter), {}, {
      role: role
    }));
  };

  var onGenderChange = function onGenderChange(gender) {
    setPageIndex(1);
    setGender(gender);
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      gender: gender
    }));
    getData(1, pageSize, order, _objectSpread(_objectSpread({}, filter), {}, {
      gender: gender
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

  var deleteStaff = function deleteStaff(id) {
    (0,customComponents_Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteStaffQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* remove */.Od, [api_urls/* STAFF_URL */.Z2, id], true, react_toastify_esm/* toast */.Am, dispatch, "staffDeletedSuccessfully", "somethingWrong", function () {
          return getData(pageIndex, pageSize, order, filter);
        }, null);
      }
    });
  }; // ** Table data to render


  var dataToRender = function dataToRender() {
    var _data$rows, _data$rows2;

    var filters = {
      name: searchTerm,
      gender: gender
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
    className: "app-staff-list",
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
        }), filterOpen && /*#__PURE__*/(0,jsx_runtime.jsxs)(CardBody/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "4",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
                prepend: {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.Z, {
                    size: 14
                  })
                },
                placeholder: intl.formatMessage({
                  id: "name"
                }),
                id: "search",
                type: "text",
                value: searchTerm,
                onChange: function onChange(e) {
                  return handleFilter(e.target.value);
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "4",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Field/* default */.Z, {
                prepend: {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                    className: "fa-solid fa-venus-mars"
                  })
                },
                type: "select",
                isClearable: false,
                theme: Utils/* selectThemeColors */.ss,
                value: gender,
                onChange: function onChange(e) {
                  return onGenderChange(e.target.value);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "",
                  children: intl.formatMessage({
                    id: "selectGender"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "male",
                  children: intl.formatMessage({
                    id: "male"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "female",
                  children: intl.formatMessage({
                    id: "female"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "4",
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
                  id: "dob"
                }),
                id: "from",
                value: [from, to],
                onChange: function onChange(e) {
                  return handleDate(e);
                }
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "4",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
                prepend: {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_phone/* default */.Z, {
                    size: 14
                  })
                },
                placeholder: intl.formatMessage({
                  id: "phone"
                }),
                id: "phone",
                type: "text",
                value: phone,
                onChange: function onChange(e) {
                  return handleFilterPhone(e.target.value);
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "4",
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
                  value: "blocked",
                  children: intl.formatMessage({
                    id: "blocked"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "4",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Field/* default */.Z, {
                prepend: {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                    className: "fa-solid fa-user-tie"
                  })
                },
                type: "select",
                isClearable: false,
                theme: Utils/* selectThemeColors */.ss,
                value: role,
                onChange: function onChange(e) {
                  return onRoleChange(e.target.value);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "",
                  children: intl.formatMessage({
                    id: "selectRole"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "manager",
                  children: intl.formatMessage({
                    id: "manager"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "staff",
                  children: intl.formatMessage({
                    id: "staff"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "operator",
                  children: intl.formatMessage({
                    id: "operator"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "accountant",
                  children: intl.formatMessage({
                    id: "accountant"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                  value: "driver",
                  children: intl.formatMessage({
                    id: "driver"
                  })
                })]
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_cjs/* default */.ZP, {
          theme: skin,
          onRowClicked: function onRowClicked(row) {
            return history.push("/apps/staff/view/".concat(row.id));
          },
          highlightOnHover: true,
          pointerOnHover: true,
          noHeader: true,
          pagination: true,
          subHeader: true,
          responsive: true,
          paginationServer: true,
          columns: columns(deleteStaff, intl, ability, history),
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

/* harmony default export */ var Table = (StaffsList);
// EXTERNAL MODULE: ./src/@core/scss/react/apps/app-users.scss
var app_users = __webpack_require__(61360);
;// CONCATENATED MODULE: ./src/views/apps/staff/list/index.js
// ** User List Component
 // ** Styles




var UsersList = function UsersList() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "app-user-list",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Table, {})
  });
};

/* harmony default export */ var list = (UsersList);

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

/***/ })

}]);