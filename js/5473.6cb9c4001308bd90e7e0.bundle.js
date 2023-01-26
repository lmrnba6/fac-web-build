"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[5473],{

/***/ 15473:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ student_StudentDashboard; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(85256);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Nav.js
var Nav = __webpack_require__(77243);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/NavItem.js
var NavItem = __webpack_require__(53999);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/NavLink.js
var NavLink = __webpack_require__(98008);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/TabContent.js
var TabContent = __webpack_require__(9393);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/TabPane.js
var TabPane = __webpack_require__(18829);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Card.js
var Card = __webpack_require__(56941);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/CardBody.js
var CardBody = __webpack_require__(91121);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Row.js
var Row = __webpack_require__(10267);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Col.js
var Col = __webpack_require__(51252);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/CardText.js
var CardText = __webpack_require__(26094);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Table.js
var Table = __webpack_require__(36595);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Badge.js
var Badge = __webpack_require__(17354);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Alert.js
var Alert = __webpack_require__(17834);
// EXTERNAL MODULE: ./src/@core/scss/react/apps/app-users.scss
var app_users = __webpack_require__(61360);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/user.js
var user = __webpack_require__(73752);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/clock.js
var clock = __webpack_require__(90791);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit-3.js
var edit_3 = __webpack_require__(62944);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/user-check.js
var user_check = __webpack_require__(28017);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/file-text.js
var file_text = __webpack_require__(34073);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/dollar-sign.js
var dollar_sign = __webpack_require__(83220);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/at-sign.js
var at_sign = __webpack_require__(29752);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/phone.js
var phone = __webpack_require__(60329);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/calendar.js
var calendar = __webpack_require__(91140);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/layers.js
var icons_layers = __webpack_require__(74515);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/map-pin.js
var map_pin = __webpack_require__(64856);
// EXTERNAL MODULE: ./src/api/utlis.js
var utlis = __webpack_require__(16550);
// EXTERNAL MODULE: ./src/configs/api-urls.js
var api_urls = __webpack_require__(88295);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(55678);
// EXTERNAL MODULE: ./src/utility/Utils.js
var Utils = __webpack_require__(16724);
// EXTERNAL MODULE: ./src/assets/images/avatars/avatar-blank.png
var avatar_blank = __webpack_require__(76930);
// EXTERNAL MODULE: ./src/views/customComponents/Toast.js
var Toast = __webpack_require__(25976);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/react-barcode/lib/react-barcode.js
var react_barcode = __webpack_require__(78566);
var react_barcode_default = /*#__PURE__*/__webpack_require__.n(react_barcode);
// EXTERNAL MODULE: ./src/views/apps/time/list/TimeTable.js
var TimeTable = __webpack_require__(61160);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-octagon.js
var alert_octagon = __webpack_require__(61643);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/clipboard.js
var clipboard = __webpack_require__(70616);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Modal.js + 1 modules
var Modal = __webpack_require__(85677);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalHeader.js
var ModalHeader = __webpack_require__(32701);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalBody.js
var ModalBody = __webpack_require__(10684);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalFooter.js
var ModalFooter = __webpack_require__(97985);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Button.js
var Button = __webpack_require__(97975);
// EXTERNAL MODULE: ./src/@core/scss/react/libs/react-select/_react-select.scss
var _react_select = __webpack_require__(22299);
// EXTERNAL MODULE: ./src/views/customComponents/Field.js
var Field = __webpack_require__(48159);
// EXTERNAL MODULE: ./src/utility/context/Can.js
var Can = __webpack_require__(6756);
// EXTERNAL MODULE: ./src/views/customComponents/InvoiceSelect.js
var InvoiceSelect = __webpack_require__(7590);
// EXTERNAL MODULE: ./src/views/customComponents/Alert.js
var customComponents_Alert = __webpack_require__(16714);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/views/dashboard/student/Payment.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


















var Payment = function Payment(_ref) {
  var p = _ref.p,
      toggle = _ref.toggle,
      student = _ref.student,
      onClose = _ref.onClose,
      refresh = _ref.refresh;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      submittedPayment = _useState2[0],
      setSubmittedPayment = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      errorPayment = _useState4[0],
      setErrorPayment = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      openPayment = _useState6[0],
      setOpenPayment = _useState6[1];

  var ability = (0,react.useContext)(Can/* AbilityContext */.v);
  var intl = (0,useIntl/* default */.Z)();

  var _useState7 = (0,react.useState)(p || {}),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      payment = _useState8[0],
      setPayment = _useState8[1];

  var _useState9 = (0,react.useState)("invoice"),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      type = _useState10[0],
      setType = _useState10[1];

  var _useState11 = (0,react.useState)(null),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      invoice = _useState12[0],
      setInvoice = _useState12[1];

  var dispatch = (0,es/* useDispatch */.I0)();

  var onPaymentClosed = function onPaymentClosed() {
    setSubmittedPayment(false);
    setOpenPayment(false);
    setInvoice(null);
    setPayment({
      amount: ""
    });
    setErrorPayment("");
    setType("invoice");
    onClose();
  };

  var onPayInvoice = function onPayInvoice(e) {
    e.preventDefault();
    (0,customComponents_Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "pay"
    }), intl.formatMessage({
      id: "payInvoiceQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      payment.student = student;
      payment.description = invoice === null || invoice === void 0 ? void 0 : invoice.description;
      payment.invoice = invoice === null || invoice === void 0 ? void 0 : invoice.value;

      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* PAYMENT_URL */.bS, payment], true, react_toastify_esm/* toast */.Am, dispatch, "paymentCreatedSuccessfully", "somethingWrong", onPaymentSuccess, null);
      }
    });
  };

  (0,react.useEffect)(function () {
    if (toggle) {
      setOpenPayment(true);
    }
  }, [toggle]);

  var onPaymentSuccess = function onPaymentSuccess() {
    setOpenPayment(false);
    onClose();
    refresh();
  };

  var onPaymentFail = function onPaymentFail(err) {
    if (err.code === 414) {
      setErrorPayment("nameExist");
    } else if (err.code === 415) {
      setErrorPayment("paymentDateOverlap");
    } else {
      setErrorPayment("somethingWrong");
    }
  };

  var savePayment = function savePayment(e) {
    e.preventDefault();
    setErrorPayment(false);
    setSubmittedPayment(true);
    payment.student = student;

    if (payment.amount) {
      if (payment.id) {
        (0,utlis/* apiCall */.k_)(utlis/* update */.Vx, [api_urls/* PAYMENT_URL */.bS, payment.id, payment], true, react_toastify_esm/* toast */.Am, dispatch, "paymentUpdatedSuccessfully", "", onPaymentSuccess, onPaymentFail);
      } else {
        (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* PAYMENT_URL */.bS, payment], true, react_toastify_esm/* toast */.Am, dispatch, "paymentCreatedSuccessfully", "", onPaymentSuccess, onPaymentFail);
      }
    }
  };

  var typeOnChange = function typeOnChange(e) {
    setType(e.target.value);
    setInvoice(null);
    setPayment(_objectSpread(_objectSpread({}, payment), {}, {
      amount: ""
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
      autoFocus: false,
      isOpen: openPayment,
      toggle: function toggle() {
        return setOpenPayment(!openPayment);
      },
      onClosed: onPaymentClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ModalHeader/* default */.Z, {
        toggle: function toggle() {
          return setOpenPayment(!openPayment);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: payment.id ? "editPayment" : "addPayment"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalBody/* default */.Z, {
        children: [errorPayment && /*#__PURE__*/(0,jsx_runtime.jsxs)(Alert/* default */.Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: errorPayment
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
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "type"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fa-solid fa-file-invoice-dollar"
            })
          },
          type: "select",
          isClearable: false,
          theme: Utils/* selectThemeColors */.ss,
          value: type,
          onChange: function onChange(e) {
            return typeOnChange(e);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "invoice",
            children: intl.formatMessage({
              id: "existingInvoice"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "other",
            children: intl.formatMessage({
              id: "withoutInvoice"
            })
          })]
        }), type === "invoice" && /*#__PURE__*/(0,jsx_runtime.jsx)(InvoiceSelect/* default */.Z, {
          refresh: true,
          student: student,
          acc: invoice,
          dispatch: dispatch,
          requireStar: true,
          invalid: submittedPayment && type === "invoice" && !invoice,
          invalidText: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          onChange: function onChange(e) {
            setInvoice(e);
            setPayment(_objectSpread(_objectSpread({}, payment), {}, {
              amount: (e === null || e === void 0 ? void 0 : e.label) || ""
            }));
          }
        }), type !== "invoice" && /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          disabled: type === "invoice",
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "amount"
          }),
          value: payment.amount,
          id: "amount",
          name: "amount",
          placeholder: "",
          requireStar: true,
          onChange: function onChange(e) {
            return setPayment(_objectSpread(_objectSpread({}, payment), {}, {
              amount: e.target.value
            }));
          },
          invalid: submittedPayment && !payment.amount,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(dollar_sign/* default */.Z, {
              size: 14
            })
          },
          append: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "da"
            })
          },
          mask: {
            numeral: true,
            numeralThousandsGroupStyle: "thousand"
          }
        }), type !== "invoice" && /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "description"
          }),
          value: payment.description,
          id: "description",
          type: "textarea",
          name: "description",
          placeholder: "",
          onChange: function onChange(e) {
            return setPayment(_objectSpread(_objectSpread({}, payment), {}, {
              description: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(clipboard/* default */.Z, {
              size: 14
            })
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ModalFooter/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
          onClick: function onClick(e) {
            return invoice ? onPayInvoice(e) : savePayment(e);
          },
          color: "primary",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "save"
          })
        })
      })]
    })
  });
};

/* harmony default export */ var student_Payment = (Payment);
// EXTERNAL MODULE: ./src/views/customComponents/Pagination.js
var Pagination = __webpack_require__(4248);
// EXTERNAL MODULE: ./src/configs/tableConstants.js
var tableConstants = __webpack_require__(82433);
// EXTERNAL MODULE: ./src/views/customComponents/RouteSelect.js
var RouteSelect = __webpack_require__(77054);
// EXTERNAL MODULE: ./src/views/customComponents/StopSelect.js
var StopSelect = __webpack_require__(86632);
// EXTERNAL MODULE: ./src/views/customComponents/ScheduleSelect.js
var ScheduleSelect = __webpack_require__(91527);
;// CONCATENATED MODULE: ./src/views/dashboard/student/Transport.js



function Transport_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Transport_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Transport_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Transport_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var Transport = function Transport(_ref) {
  var p = _ref.p,
      toggle = _ref.toggle,
      student = _ref.student,
      onClose = _ref.onClose,
      refresh = _ref.refresh;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      submittedTransport = _useState2[0],
      setSubmittedTransport = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      errorTransport = _useState4[0],
      setErrorTransport = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      openTransport = _useState6[0],
      setOpenTransport = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      scheduleChanged = _useState8[0],
      setScheduleChanged = _useState8[1];

  var _useState9 = (0,react.useState)(p || {}),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      transport = _useState10[0],
      setTransport = _useState10[1];

  var intl = (0,useIntl/* default */.Z)();
  var dispatch = (0,es/* useDispatch */.I0)();

  var onTransportClosed = function onTransportClosed() {
    setSubmittedTransport(false);
    setOpenTransport(false);
    setTransport({});
    setErrorTransport("");
    onClose();
    setScheduleChanged(false);
  };

  (0,react.useEffect)(function () {
    if (toggle) {
      setTransport(p || {});
      setOpenTransport(true);
    }
  }, [toggle]);

  var onTransportSuccess = function onTransportSuccess() {
    setOpenTransport(false);
    onClose();
    refresh();
  };

  var onTransportFail = function onTransportFail(err) {
    if (err.code === 414) {
      setErrorTransport("scheduleExist");
    } else {
      setErrorTransport("somethingWrong");
    }
  };

  var saveTransport = function saveTransport(e) {
    e.preventDefault();
    setErrorTransport(false);
    setSubmittedTransport(true);
    transport.student = student;

    if (transport.schedule) {
      if (transport.id) {
        (0,utlis/* apiCall */.k_)(utlis/* update */.Vx, [api_urls/* TRANSPORT_URL */.sp, transport.id, transport], true, react_toastify_esm/* toast */.Am, dispatch, "transportUpdatedSuccessfully", "", onTransportSuccess, onTransportFail);
      } else {
        (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* TRANSPORT_URL */.sp, transport], true, react_toastify_esm/* toast */.Am, dispatch, "transportCreatedSuccessfully", "", onTransportSuccess, onTransportFail);
      }
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
      autoFocus: false,
      isOpen: openTransport,
      toggle: function toggle() {
        return setOpenTransport(!openTransport);
      },
      onClosed: onTransportClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ModalHeader/* default */.Z, {
        toggle: function toggle() {
          return setOpenTransport(!openTransport);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: transport.id ? "editTransport" : "addTransport"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalBody/* default */.Z, {
        children: [errorTransport && /*#__PURE__*/(0,jsx_runtime.jsxs)(Alert/* default */.Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: errorTransport
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
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(RouteSelect/* default */.Z, {
          acc: {
            label: transport.routeName,
            value: transport.route
          },
          refresh: p,
          dispatch: dispatch,
          onChange: function onChange(e) {
            setTransport(Transport_objectSpread(Transport_objectSpread({}, transport), {}, {
              route: e === null || e === void 0 ? void 0 : e.value,
              routeName: e === null || e === void 0 ? void 0 : e.label,
              schedule: null,
              day: null,
              stop: null,
              stopName: null
            }));
          },
          requireStar: true,
          invalid: submittedTransport && !transport.route,
          invalidText: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScheduleSelect/* default */.Z, {
          verifyMax: true,
          route: transport.route,
          acc: {
            label: transport.day ? intl.formatMessage({
              id: transport.day
            }) + (p && !scheduleChanged ? " - " + transport.time : "") : "",
            value: transport.schedule
          },
          refresh: transport === null || transport === void 0 ? void 0 : transport.route,
          dispatch: dispatch,
          onChange: function onChange(e) {
            setTransport(Transport_objectSpread(Transport_objectSpread({}, transport), {}, {
              schedule: e === null || e === void 0 ? void 0 : e.value,
              day: e === null || e === void 0 ? void 0 : e.label,
              time: e === null || e === void 0 ? void 0 : e.time
            }));
            setScheduleChanged(true);
          },
          requireStar: true,
          invalid: submittedTransport && !transport.schedule,
          invalidText: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StopSelect/* default */.Z, {
          acc: {
            label: transport.stopName,
            value: transport.stop
          },
          refresh: transport === null || transport === void 0 ? void 0 : transport.route,
          dispatch: dispatch,
          onChange: function onChange(e) {
            setTransport(Transport_objectSpread(Transport_objectSpread({}, transport), {}, {
              stop: e === null || e === void 0 ? void 0 : e.value,
              stopName: e === null || e === void 0 ? void 0 : e.label
            }));
          },
          route: transport.route // requireStar
          // invalid={submittedTransport && !transport.stop}
          // invalidText={<FormattedMessage id="required" />}

        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ModalFooter/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
          onClick: function onClick(e) {
            return saveTransport(e);
          },
          color: "primary",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "save"
          })
        })
      })]
    })
  });
};

/* harmony default export */ var student_Transport = (Transport);
;// CONCATENATED MODULE: ./src/views/dashboard/student/Invoice.js



function Invoice_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Invoice_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Invoice_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Invoice_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }














var Invoice = function Invoice(_ref) {
  var p = _ref.p,
      toggle = _ref.toggle,
      student = _ref.student,
      onClose = _ref.onClose,
      refresh = _ref.refresh;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      submittedInvoice = _useState2[0],
      setSubmittedInvoice = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      errorInvoice = _useState4[0],
      setErrorInvoice = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      openInvoice = _useState6[0],
      setOpenInvoice = _useState6[1];

  var _useState7 = (0,react.useState)(p || {}),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      invoice = _useState8[0],
      setInvoice = _useState8[1];

  var dispatch = (0,es/* useDispatch */.I0)();

  var onInvoiceClosed = function onInvoiceClosed() {
    setSubmittedInvoice(false);
    setOpenInvoice(false);
    setInvoice(null);
    setInvoice({
      amount: "",
      due: new Date()
    });
    setErrorInvoice("");
    onClose();
  };

  (0,react.useEffect)(function () {
    if (toggle) {
      setInvoice(p || {});
      setOpenInvoice(true);
    }
  }, [toggle]);

  var onInvoiceSuccess = function onInvoiceSuccess() {
    setOpenInvoice(false);
    onClose();
    refresh();
  };

  var onInvoiceFail = function onInvoiceFail(err) {
    if (err.code === 414) {
      setErrorInvoice("nameExist");
    } else if (err.code === 415) {
      setErrorInvoice("invoiceDateOverlap");
    } else {
      setErrorInvoice("somethingWrong");
    }
  };

  var saveInvoice = function saveInvoice(e) {
    e.preventDefault();
    setErrorInvoice(false);
    setSubmittedInvoice(true);
    invoice.student = student;

    if (invoice.amount) {
      if (invoice.id) {
        (0,utlis/* apiCall */.k_)(utlis/* update */.Vx, [api_urls/* INVOICE_URL */.jJ, invoice.id, invoice], true, react_toastify_esm/* toast */.Am, dispatch, "invoiceUpdatedSuccessfully", "", onInvoiceSuccess, onInvoiceFail);
      } else {
        (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* INVOICE_URL */.jJ, invoice], true, react_toastify_esm/* toast */.Am, dispatch, "invoiceCreatedSuccessfully", "", onInvoiceSuccess, onInvoiceFail);
      }
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
      autoFocus: false,
      isOpen: openInvoice,
      toggle: function toggle() {
        return setOpenInvoice(!openInvoice);
      },
      onClosed: onInvoiceClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ModalHeader/* default */.Z, {
        toggle: function toggle() {
          return setOpenInvoice(!openInvoice);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: invoice.id ? "editInvoice" : "addInvoice"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalBody/* default */.Z, {
        children: [errorInvoice && /*#__PURE__*/(0,jsx_runtime.jsxs)(Alert/* default */.Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: errorInvoice
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
            id: "amount"
          }),
          id: "amount",
          name: "amount",
          placeholder: "",
          requireStar: true,
          value: invoice.amount,
          onChange: function onChange(e) {
            return setInvoice(Invoice_objectSpread(Invoice_objectSpread({}, invoice), {}, {
              amount: e.target.value
            }));
          },
          invalid: submittedInvoice && !invoice.amount,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(dollar_sign/* default */.Z, {
              size: 14
            })
          },
          append: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "da"
            })
          },
          mask: {
            numeral: true,
            numeralThousandsGroupStyle: "thousand"
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "dueDate"
          }),
          id: "date",
          name: "date",
          className: "form-control",
          value: invoice.due,
          onChange: function onChange(e) {
            return setInvoice(Invoice_objectSpread(Invoice_objectSpread({}, invoice), {}, {
              due: e[0]
            }));
          },
          invalid: submittedInvoice && !invoice.due,
          requireStar: true,
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
            id: "description"
          }),
          value: invoice.description,
          id: "description",
          type: "textarea",
          name: "description",
          placeholder: "",
          onChange: function onChange(e) {
            return setInvoice(Invoice_objectSpread(Invoice_objectSpread({}, invoice), {}, {
              description: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(clipboard/* default */.Z, {
              size: 14
            })
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ModalFooter/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
          onClick: function onClick(e) {
            return saveInvoice(e);
          },
          color: "primary",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "save"
          })
        })
      })]
    })
  });
};

/* harmony default export */ var student_Invoice = (Invoice);
// EXTERNAL MODULE: ./node_modules/is-mobile/index.js
var is_mobile = __webpack_require__(63805);
var is_mobile_default = /*#__PURE__*/__webpack_require__.n(is_mobile);
// EXTERNAL MODULE: ./src/views/dashboard/student/Route.js + 1 modules
var Route = __webpack_require__(6832);
;// CONCATENATED MODULE: ./src/views/dashboard/student/StudentDashboard.js



function StudentDashboard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function StudentDashboard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? StudentDashboard_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : StudentDashboard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




























var StudentDashboard = function StudentDashboard() {
  var _s$userData, _s$userData$profile;

  // ** Vars
  var pageSize = tableConstants/* tableRowsPerPage.0 */.m[0];

  var _useState = (0,react.useState)({}),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var s = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  });
  var id = (0,react_router/* useParams */.UO)().id || ((_s$userData = s.userData) === null || _s$userData === void 0 ? void 0 : (_s$userData$profile = _s$userData.profile) === null || _s$userData$profile === void 0 ? void 0 : _s$userData$profile.id);
  var dispatch = (0,es/* useDispatch */.I0)();
  var intl = (0,useIntl/* default */.Z)();
  var store = (0,es/* useSelector */.v9)(function (state) {
    return state.layout;
  });

  var _useState3 = (0,react.useState)("1"),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      activeTab = _useState4[0],
      setActiveTab = _useState4[1];

  var toggle = function toggle(tab) {
    return setActiveTab(tab);
  };

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      times = _useState6[0],
      setTimes = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      invoices = _useState8[0],
      setInvoices = _useState8[1];

  var _useState9 = (0,react.useState)([]),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      payments = _useState10[0],
      setPayments = _useState10[1];

  var _useState11 = (0,react.useState)([]),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      attendances = _useState12[0],
      setAttendances = _useState12[1];

  var _useState13 = (0,react.useState)([]),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      exams = _useState14[0],
      setExams = _useState14[1];

  var _useState15 = (0,react.useState)([]),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      enrollments = _useState16[0],
      setEnrollments = _useState16[1];

  var _useState17 = (0,react.useState)(null),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      invoice = _useState18[0],
      setInvoice = _useState18[1];

  var _useState19 = (0,react.useState)(false),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      paymentOpen = _useState20[0],
      setPaymentOpen = _useState20[1];

  var _useState21 = (0,react.useState)(false),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      invoiceOpen = _useState22[0],
      setInvoiceOpen = _useState22[1];

  var _useState23 = (0,react.useState)([]),
      _useState24 = (0,slicedToArray/* default */.Z)(_useState23, 2),
      transports = _useState24[0],
      setTransports = _useState24[1];

  var _useState25 = (0,react.useState)(null),
      _useState26 = (0,slicedToArray/* default */.Z)(_useState25, 2),
      transport = _useState26[0],
      setTransport = _useState26[1];

  var _useState27 = (0,react.useState)(false),
      _useState28 = (0,slicedToArray/* default */.Z)(_useState27, 2),
      transportOpen = _useState28[0],
      setTransportOpen = _useState28[1];

  var _useState29 = (0,react.useState)(false),
      _useState30 = (0,slicedToArray/* default */.Z)(_useState29, 2),
      routeOpen = _useState30[0],
      setRouteOpen = _useState30[1];

  var _useState31 = (0,react.useState)(null),
      _useState32 = (0,slicedToArray/* default */.Z)(_useState31, 2),
      schedule = _useState32[0],
      setSchedule = _useState32[1];

  var _useState33 = (0,react.useState)({
    payments: false,
    invoices: false,
    times: false,
    enrollments: false,
    attendances: false,
    exams: false,
    transports: false
  }),
      _useState34 = (0,slicedToArray/* default */.Z)(_useState33, 2),
      fetch = _useState34[0],
      setFetch = _useState34[1];

  var _useState35 = (0,react.useState)({
    payments: 0,
    invoices: 0,
    times: 0,
    enrollments: 0,
    attendances: 0,
    exams: 0,
    transports: 0
  }),
      _useState36 = (0,slicedToArray/* default */.Z)(_useState35, 2),
      count = _useState36[0],
      setCount = _useState36[1];

  var getTimes = function getTimes() {
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* TIMES_URL */.nM, 0, Number.MAX_SAFE_INTEGER, {}, {
      student: id
    }], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", function (res) {
      return setTimes(res);
    }, null);
  };

  var getInvoices = function getInvoices() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* INVOICES_URL */.dK, p, pageSize, {}, {
      student: id
    }], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", function (res) {
      return setInvoices(res);
    }, null);
  };

  var getPayments = function getPayments() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* PAYMENTS_URL */.rS, p, pageSize, {}, {
      student: id
    }], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", function (res) {
      return setPayments(res);
    }, null);
  };

  var getEnrollments = function getEnrollments() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* ENROLLMENTS_URL */.pu, p, pageSize, {}, {
      student: id
    }], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", function (res) {
      return setEnrollments(res);
    }, null);
  };

  var getTransports = function getTransports() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* TRANSPORTS_URL */.Fg, p, pageSize, {}, {
      student: id
    }], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", function (res) {
      return setTransports(res);
    }, null);
  };

  var getAttendances = function getAttendances() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* ATTENDANCES_URL */.Wb, p, pageSize, {}, {
      student: id
    }], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", function (res) {
      return setAttendances(res);
    }, null);
  };

  var getExams = function getExams() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* EXAMS_URL */.mt, p, pageSize, {}, {
      student: id
    }], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", function (res) {
      return setExams(res);
    }, null);
  };

  var onFail = function onFail(err) {
    if (err.code !== 411) {
      react_toastify_esm/* toast.error */.Am.error( /*#__PURE__*/(0,jsx_runtime.jsx)(Toast/* default */.Z, {
        type: "error",
        message: "somethingWrong"
      }), {
        transition: react_toastify_esm/* Bounce */.sm,
        hideProgressBar: false,
        autoClose: 6000
      });
    }
  };

  var getData = function getData() {
    (0,utlis/* apiCall */.k_)(utlis/* get */.U2, [api_urls/* STUDENT_URL */.tZ, id], true, react_toastify_esm/* toast */.Am, dispatch, "", "", function (data) {
      return setData(data);
    }, function (err) {
      return onFail(err);
    });
  };

  (0,react.useEffect)(function () {
    if (activeTab === "2" && !fetch.times) {
      getTimes();
      setFetch(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, fetch), {}, {
        times: true
      }));
    } else if (activeTab === "3" && !fetch.enrollments) {
      getEnrollments();
      setFetch(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, fetch), {}, {
        enrollments: true
      }));
    } else if (activeTab === "4" && !fetch.attendances) {
      getAttendances();
      setFetch(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, fetch), {}, {
        attendances: true
      }));
    } else if (activeTab === "5" && !fetch.invoices) {
      getInvoices();
      setFetch(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, fetch), {}, {
        invoices: true
      }));
    } else if (activeTab === "6" && !fetch.payments) {
      getPayments();
      setFetch(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, fetch), {}, {
        payments: true
      }));
    } else if (activeTab === "7" && !fetch.transports) {
      getTransports();
      setFetch(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, fetch), {}, {
        transports: true
      }));
    } else if (activeTab === "8" && !fetch.exams) {
      getExams();
      setFetch(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, fetch), {}, {
        exams: true
      }));
    }
  }, [activeTab]);
  (0,react.useEffect)(function () {
    getData();
  }, []);
  return data.id ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "app-user-view",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "divider",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "divider-text font-medium-3 font-weight-bold",
        children: data.name
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Nav/* default */.Z, {
      pills: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
          active: activeTab === "1",
          onClick: function onClick() {
            return toggle("1");
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.Z, {
            size: 14
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle d-none d-sm-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "info"
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
          className: "border-primary",
          active: activeTab === "2",
          onClick: function onClick() {
            return toggle("2");
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(clock/* default */.Z, {
            size: 14
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle d-none d-sm-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "time"
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
          className: "border-primary",
          active: activeTab === "3",
          onClick: function onClick() {
            return toggle("3");
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(edit_3/* default */.Z, {
            size: 14
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle d-none d-sm-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "enrollments"
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
          className: "border-primary",
          active: activeTab === "4",
          onClick: function onClick() {
            return toggle("4");
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(user_check/* default */.Z, {
            size: 14
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle d-none d-sm-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "attendances"
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
          className: "border-primary",
          active: activeTab === "5",
          onClick: function onClick() {
            return toggle("5");
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(file_text/* default */.Z, {
            size: 14
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle d-none d-sm-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "invoices"
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
          className: "border-primary",
          active: activeTab === "6",
          onClick: function onClick() {
            return toggle("6");
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dollar_sign/* default */.Z, {
            size: 14
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle d-none d-sm-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "payments"
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
          className: "border-primary",
          active: activeTab === "7",
          onClick: function onClick() {
            return toggle("7");
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fa-solid fa-bus"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle d-none d-sm-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "transport"
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
          className: "border-primary",
          active: activeTab === "8",
          onClick: function onClick() {
            return toggle("8");
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fa-solid fa-person-booth"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle d-none d-sm-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "exams"
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TabContent/* default */.Z, {
      activeTab: activeTab,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(TabPane/* default */.Z, {
        tabId: "1",
        children: [is_mobile_default()() && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "divider",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "divider-text font-medium-3 font-weight-bold",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "info"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                xl: "6",
                lg: "12",
                className: "d-flex flex-column justify-content-between border-container-lg",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "user-avatar-section",
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                      src: data.avatar || avatar_blank,
                      alt: "user-avatar",
                      className: "img-fluid rounded",
                      height: "104",
                      width: "104"
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "d-flex flex-column ml-1",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                        className: "user-info mb-1 text-capitalize",
                        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("h4", {
                          className: "mb-0",
                          children: [data.name, " (", data.username, ")"]
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                        className: "mt-50",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)((react_barcode_default()), {
                          displayValue: false,
                          value: data.username,
                          width: 1.5,
                          height: 50
                        })
                      })]
                    })]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                xl: "6",
                lg: "12",
                className: "mt-2 mt-xl-0",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "user-info-wrapper",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "d-flex flex-wrap align-items-center my-50",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "user-info-title",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(at_sign/* default */.Z, {
                        className: "mr-1",
                        size: 14
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardText/* default */.Z, {
                        tag: "span",
                        className: "user-info-title font-weight-bold mb-0",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "email"
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardText/* default */.Z, {
                      className: "mb-0",
                      children: data.email
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "d-flex flex-wrap align-items-center my-50",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "user-info-title",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(phone/* default */.Z, {
                        className: "mr-1",
                        size: 14
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardText/* default */.Z, {
                        tag: "span",
                        className: "user-info-title font-weight-bold mb-0",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "phone"
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardText/* default */.Z, {
                      className: "mb-0",
                      children: (0,Utils/* formatPhone */.CN)(data.phone)
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "d-flex flex-wrap align-items-center my-50",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "user-info-title",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(calendar/* default */.Z, {
                        className: "mr-1",
                        size: 14
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardText/* default */.Z, {
                        tag: "span",
                        className: "user-info-title font-weight-bold mb-0",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "dob"
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardText/* default */.Z, {
                      className: "mb-0",
                      children: moment_default()(data.dob).format("YYYY-MM-DD")
                    })]
                  }), data.level && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "d-flex flex-wrap align-items-center my-50",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "user-info-title",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(icons_layers/* default */.Z, {
                        className: "mr-1",
                        size: 14
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardText/* default */.Z, {
                        tag: "span",
                        className: "user-info-title font-weight-bold mb-0",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "level"
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardText/* default */.Z, {
                      className: "mb-0",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: data.level
                      })
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "d-flex flex-wrap align-items-center my-50",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "user-info-title",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(map_pin/* default */.Z, {
                        className: "mr-1",
                        size: 14
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardText/* default */.Z, {
                        tag: "span",
                        className: "user-info-title font-weight-bold mb-0",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "address"
                        })
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardText/* default */.Z, {
                      style: {
                        whiteSpace: "break-spaces"
                      },
                      className: "mb-0 text-break",
                      children: data.address
                    })]
                  })]
                })
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TabPane/* default */.Z, {
        tabId: "2",
        children: [is_mobile_default()() && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "divider",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "divider-text font-medium-3 font-weight-bold",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "time"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(TimeTable/* default */.Z, {
              list: times
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TabPane/* default */.Z, {
        tabId: "3",
        children: [is_mobile_default()() && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "divider",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "divider-text font-medium-3 font-weight-bold",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "enrollments"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: is_mobile_default()() ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: enrollments !== null && enrollments !== void 0 && enrollments.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [(enrollments || []).map(function (p, k) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "font-weight-bold",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "date"
                        }), ":", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: moment_default()(p.createdAt).format("YYYY-MM-DD")
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "section"
                          }), ":", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.sectionName
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "training"
                          }), ":", " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.trainingName
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "course"
                          }), ":", " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.courseName
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "promotion"
                          }), ":", " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.promotionName
                          })]
                        })]
                      })]
                    })
                  })
                }, k);
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                pageIndex: count.enrollments,
                pageSize: pageSize,
                total: enrollments.length ? enrollments[0].count : 0,
                handlePagination: function handlePagination(page) {
                  setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                    enrollments: page.selected + 1
                  }));
                  getEnrollments(page.selected + 1);
                }
              })]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "my-3 w-100 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "noRecords"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
              children: enrollments !== null && enrollments !== void 0 && enrollments.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                children: [!is_mobile_default()() && /*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
                  size: "md",
                  striped: true,
                  responsive: true,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "section"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "training"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "course"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "date"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "promotion"
                        })
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
                    style: {
                      wordBreak: "break-word"
                    },
                    children: (enrollments || []).map(function (p, k) {
                      return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.sectionName
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.trainingName
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.courseName
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: moment_default()(p.createdAt).format("YYYY-MM-DD")
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.promotionName
                        })]
                      }, k);
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                  pageIndex: count.enrollments,
                  pageSize: pageSize,
                  total: enrollments.length ? enrollments[0].count : 0,
                  handlePagination: function handlePagination(page) {
                    setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                      enrollments: page.selected + 1
                    }));
                    getEnrollments(page.selected + 1);
                  }
                })]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "my-3 w-100 d-flex align-items-center justify-content-center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "noRecords"
                })
              })
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TabPane/* default */.Z, {
        tabId: "4",
        children: [is_mobile_default()() && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "divider",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "divider-text font-medium-3 font-weight-bold",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "attendances"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: is_mobile_default()() ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: attendances !== null && attendances !== void 0 && attendances.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [(attendances || []).map(function (p, k) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "date"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: moment_default()(p.date).format("YYYY-MM-DD hh:mm")
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "font-weight-bold",
                            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "section"
                            }), ":"]
                          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.sectionName
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "font-weight-bold",
                            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "attendance"
                            }), ":"]
                          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                            className: "float-right",
                            children: p.status === "present" ? /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                              pill: true,
                              color: "light-success",
                              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                                id: "present"
                              })
                            }) : p.status === "absent" ? /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                              pill: true,
                              color: "light-danger",
                              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                                id: "absent"
                              })
                            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                              pill: true,
                              color: "light-primary",
                              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                                id: "notEnrolled"
                              })
                            })
                          })]
                        })]
                      })]
                    })
                  })
                }, k);
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                pageIndex: count.attendances,
                pageSize: pageSize,
                total: attendances.length ? attendances[0].count : 0,
                handlePagination: function handlePagination(page) {
                  setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                    attendances: page.selected + 1
                  }));
                  getAttendances(page.selected + 1);
                }
              })]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "my-3 w-100 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "noRecords"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
              children: attendances !== null && attendances !== void 0 && attendances.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
                  size: "md",
                  striped: true,
                  responsive: true,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "date"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "section"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "attendance"
                        })
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
                    style: {
                      wordBreak: "break-word"
                    },
                    children: (attendances || []).map(function (p, k) {
                      return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: moment_default()(p.date).format("YYYY-MM-DD hh:mm")
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.sectionName
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.status === "present" ? /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                            pill: true,
                            color: "light-success",
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "present"
                            })
                          }) : p.status === "absent" ? /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                            pill: true,
                            color: "light-danger",
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "absent"
                            })
                          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                            pill: true,
                            color: "light-primary",
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "notEnrolled"
                            })
                          })
                        })]
                      }, k);
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                  pageIndex: count.attendances,
                  pageSize: pageSize,
                  total: attendances.length ? attendances[0].count : 0,
                  handlePagination: function handlePagination(page) {
                    setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                      attendances: page.selected + 1
                    }));
                    getAttendances(page.selected + 1);
                  }
                })]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "my-3 w-100 d-flex align-items-center justify-content-center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "noRecords"
                })
              })
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TabPane/* default */.Z, {
        tabId: "5",
        children: [is_mobile_default()() && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "divider",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "divider-text font-medium-3 font-weight-bold",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "invoices"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: is_mobile_default()() ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: invoices !== null && invoices !== void 0 && invoices.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [(invoices || []).map(function (p, k) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "date"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: moment_default()(p.date).format("YYYY-MM-DD")
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "font-weight-bold",
                            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "code"
                            }), ":"]
                          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.code
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "font-weight-bold",
                            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "section"
                            }), ":"]
                          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.sectionName
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "font-weight-bold",
                            children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "amount"
                            }), ":"]
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: [p.amount, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "da"
                            })]
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "font-weight-bold",
                            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "due"
                            }), ":"]
                          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "".concat(moment_default()(p.due).isAfter(moment_default()()) || p.paid ? "text-success" : "text-danger", " float-right"),
                            children: moment_default()(p.due).format("YYYY-MM-DD")
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "font-weight-bold",
                            children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "status"
                            }), ":"]
                          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                            pill: true,
                            color: p.paid ? "light-success" : "light-danger",
                            className: "float-right",
                            children: p.paid ? intl.formatMessage({
                              id: "paid"
                            }) : intl.formatMessage({
                              id: "unpaid"
                            })
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "mb-25",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "font-weight-bold",
                            children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "description"
                            }), ":"]
                          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.description
                          })]
                        })]
                      })]
                    })
                  })
                }, k);
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                pageIndex: count.invoices,
                pageSize: pageSize,
                total: invoices.length ? invoices[0].count : 0,
                handlePagination: function handlePagination(page) {
                  setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                    invoices: page.selected + 1
                  }));
                  getInvoices(page.selected + 1);
                }
              })]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "my-3 w-100 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "noRecords"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
              children: invoices !== null && invoices !== void 0 && invoices.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
                  size: "md",
                  striped: true,
                  responsive: true,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "code"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "date"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "enrollment"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "amount"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "dueDate"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "status"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "description"
                        })
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
                    style: {
                      wordBreak: "break-word"
                    },
                    children: (invoices || []).map(function (p, k) {
                      return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.code
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: moment_default()(p.createdAt).format("YYYY-MM-DD")
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.sectionName
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                          children: [p.amount, " ", intl.formatMessage({
                            id: "da"
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          className: "".concat(moment_default()(p.due).isAfter(moment_default()()) ? "text-success" : "text-danger"),
                          children: moment_default()(p.due).format("YYYY-MM-DD")
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                            pill: true,
                            color: p.paid ? "light-success" : "light-danger",
                            className: "mr-1",
                            children: p.paid ? intl.formatMessage({
                              id: "paid"
                            }) : intl.formatMessage({
                              id: "unpaid"
                            })
                          })
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.description
                        })]
                      }, k);
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                  pageIndex: count.invoices,
                  pageSize: pageSize,
                  total: invoices.length ? invoices[0].count : 0,
                  handlePagination: function handlePagination(page) {
                    setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                      invoices: page.selected + 1
                    }));
                    getInvoices(page.selected + 1);
                  }
                })]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "my-3 w-100 d-flex align-items-center justify-content-center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "noRecords"
                })
              })
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TabPane/* default */.Z, {
        tabId: "6",
        children: [is_mobile_default()() && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "divider",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "divider-text font-medium-3 font-weight-bold",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "payments"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: is_mobile_default()() ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: payments !== null && payments !== void 0 && payments.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [(payments || []).map(function (p, k) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "date"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: moment_default()(p.createdAt).format("YYYY-MM-DD")
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "code"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: p.invoiceCode
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "amount"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: [p.amount, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "da"
                          })]
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "description"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: p.description
                        })]
                      })]
                    })
                  })
                }, k);
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                pageIndex: count.payments,
                pageSize: pageSize,
                total: payments.length ? payments[0].count : 0,
                handlePagination: function handlePagination(page) {
                  setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                    payments: page.selected + 1
                  }));
                  getPayments(page.selected + 1);
                }
              })]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "my-3 w-100 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "noRecords"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
              children: payments !== null && payments !== void 0 && payments.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
                  size: "md",
                  striped: true,
                  responsive: true,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "invoice"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "date"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "amount"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "description"
                        })
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
                    style: {
                      wordBreak: "break-word"
                    },
                    children: (payments || []).map(function (p, k) {
                      return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.invoiceCode
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: moment_default()(p.createdAt).format("YYYY-MM-DD")
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                          children: [p.amount, " ", intl.formatMessage({
                            id: "da"
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.description
                        })]
                      }, k);
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                  pageIndex: count.payments,
                  pageSize: pageSize,
                  total: payments.length ? payments[0].count : 0,
                  handlePagination: function handlePagination(page) {
                    setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                      payments: page.selected + 1
                    }));
                    getPayments(page.selected + 1);
                  }
                })]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "my-3 w-100 d-flex align-items-center justify-content-center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "noRecords"
                })
              })
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TabPane/* default */.Z, {
        tabId: "7",
        children: [is_mobile_default()() && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "divider",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "divider-text font-medium-3 font-weight-bold",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "transport"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: is_mobile_default()() ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: transports !== null && transports !== void 0 && transports.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [(transports || []).map(function (p, k) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
                  onClick: function onClick() {
                    setSchedule(p.schedule);
                    setRouteOpen(true);
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "day"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: intl.formatMessage({
                            id: p.day
                          })
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "stopTime"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: p.time
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "route"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: p.routeName
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "direction"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: intl.formatMessage({
                            id: p.direction
                          })
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "stop"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: p.stopName
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mb-25",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "font-weight-bold",
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "onTheWay"
                          }), ":"]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                            pill: true,
                            color: p.live ? "light-success" : "light-danger",
                            className: "float-right",
                            children: intl.formatMessage({
                              id: p.live ? "yes" : "no"
                            })
                          })
                        })]
                      })]
                    })
                  })
                }, k);
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                pageIndex: count.transports,
                pageSize: pageSize,
                total: transports.length ? transports[0].count : 0,
                handlePagination: function handlePagination(page) {
                  setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                    transports: page.selected + 1
                  }));
                  getTransports(page.selected + 1);
                }
              })]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "my-3 w-100 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "noRecords"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
              children: transports !== null && transports !== void 0 && transports.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
                  size: "md",
                  striped: true,
                  responsive: true,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "day"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "stopTime"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "route"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "direction"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "stop"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "onTheWay"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "stops"
                        })
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
                    style: {
                      wordBreak: "break-word"
                    },
                    children: (transports || []).map(function (p, k) {
                      return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: intl.formatMessage({
                            id: p.day
                          })
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.time
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.routeName
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: intl.formatMessage({
                            id: p.direction
                          })
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.stopName
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                            pill: true,
                            color: p.live ? "light-success" : "light-danger",
                            children: intl.formatMessage({
                              id: p.live ? "yes" : "no"
                            })
                          })
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                            class: "fa-solid fa-route text-info fa-lg mr-50 cursor-pointer",
                            onClick: function onClick() {
                              setSchedule(p.schedule);
                              setRouteOpen(true);
                            }
                          })
                        })]
                      }, k);
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                  pageIndex: count.transports,
                  pageSize: pageSize,
                  total: transports.length ? transports[0].count : 0,
                  handlePagination: function handlePagination(page) {
                    setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                      transports: page.selected + 1
                    }));
                    getTransports(page.selected + 1);
                  }
                })]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "my-3 w-100 d-flex align-items-center justify-content-center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "noRecords"
                })
              })
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TabPane/* default */.Z, {
        tabId: "8",
        children: [is_mobile_default()() && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "divider",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "divider-text font-medium-3 font-weight-bold",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "exams"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: is_mobile_default()() ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: exams !== null && exams !== void 0 && exams.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [(exams || []).map(function (p, k) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "font-weight-bold",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "date"
                        }), ":", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "float-right font-weight-bolder text-muted",
                          children: moment_default()(p.date).format("YYYY-MM-DD")
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "title"
                          }), ":", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.name
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "training"
                          }), ":", " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.trainingName
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "course"
                          }), ":", " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.courseName
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "score"
                          }), ":", " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                              className: "font-small-3",
                              pill: true,
                              color: "light-primary",
                              children: p.score
                            })
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                            id: "note"
                          }), ":", " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                            className: "float-right font-weight-bolder text-muted",
                            children: p.note
                          })]
                        })]
                      })]
                    })
                  })
                }, k);
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                pageIndex: count.exams,
                pageSize: pageSize,
                total: exams.length ? exams[0].count : 0,
                handlePagination: function handlePagination(page) {
                  setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                    exams: page.selected + 1
                  }));
                  getExams(page.selected + 1);
                }
              })]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "my-3 w-100 d-flex align-items-center justify-content-center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "noRecords"
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
              children: exams !== null && exams !== void 0 && exams.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
                  size: "md",
                  striped: true,
                  responsive: true,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "title"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "section"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "training"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "course"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "date"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "score"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                        children: intl.formatMessage({
                          id: "note"
                        })
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
                    style: {
                      wordBreak: "break-word"
                    },
                    children: (exams || []).map(function (p, k) {
                      var _jsx2;

                      return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.name
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.sectionName
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.trainingName
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.courseName
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: moment_default()(p.date).format("YYYY-MM-DD HH:mm")
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, (_jsx2 = {
                            className: "font-small-3",
                            pill: true,
                            color: "primary"
                          }, (0,defineProperty/* default */.Z)(_jsx2, "color", "primary"), (0,defineProperty/* default */.Z)(_jsx2, "children", p.score), _jsx2))
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                          children: p.note
                        })]
                      }, k);
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
                  pageIndex: count.exams,
                  pageSize: pageSize,
                  total: exams.length ? exams[0].count : 0,
                  handlePagination: function handlePagination(page) {
                    setCount(StudentDashboard_objectSpread(StudentDashboard_objectSpread({}, count), {}, {
                      exams: page.selected + 1
                    }));
                    getExams(page.selected + 1);
                  }
                })]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "my-3 w-100 d-flex align-items-center justify-content-center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "noRecords"
                })
              })
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(student_Payment, {
      refresh: function refresh() {
        getPayments();
        getInvoices();
      },
      toggle: paymentOpen,
      student: id,
      onClose: function onClose() {
        return setPaymentOpen(false);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(student_Invoice, {
      refresh: function refresh() {
        getInvoices();
      },
      toggle: invoiceOpen,
      p: invoice,
      student: id,
      onClose: function onClose() {
        setInvoiceOpen(false);
        setInvoice({});
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Route/* default */.Z, {
      open: routeOpen,
      setOpen: setRouteOpen,
      schedule: schedule,
      onClosed: function onClosed() {
        return setSchedule(null);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(student_Transport, {
      refresh: function refresh() {
        getTransports();
      },
      toggle: transportOpen,
      p: transport,
      student: id,
      onClose: function onClose() {
        setTransport({});
        setTransportOpen(false);
      }
    })]
  }) : !store.loader && /*#__PURE__*/(0,jsx_runtime.jsx)(Alert/* default */.Z, {
    color: "danger",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "alert-body",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "userWithIdNotFound",
        values: {
          id: id
        }
      }), ":"]
    })
  });
};

/* harmony default export */ var student_StudentDashboard = (StudentDashboard);

/***/ }),

/***/ 63805:
/***/ (function(module) {



module.exports = isMobile
module.exports.isMobile = isMobile
module.exports["default"] = isMobile

const mobileRE = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
const notMobileRE = /CrOS/

const tabletRE = /android|ipad|playbook|silk/i

function isMobile (opts) {
  if (!opts) opts = {}
  let ua = opts.ua
  if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent
  if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
    ua = ua.headers['user-agent']
  }
  if (typeof ua !== 'string') return false

  let result =
    (mobileRE.test(ua) && !notMobileRE.test(ua)) ||
    (!!opts.tablet && tabletRE.test(ua))

  if (
    !result &&
    opts.tablet &&
    opts.featureDetect &&
    navigator &&
    navigator.maxTouchPoints > 1 &&
    ua.indexOf('Macintosh') !== -1 &&
    ua.indexOf('Safari') !== -1
  ) {
    result = true
  }

  return result
}


/***/ })

}]);