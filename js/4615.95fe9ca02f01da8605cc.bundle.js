"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[4615],{

/***/ 54615:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(42982);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45987);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55678);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(61896);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55654);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(45169);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(47418);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(61643);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(32655);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(91140);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(70616);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97975);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(17354);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(82669);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(67954);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(85677);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(32701);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(10684);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(17834);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(68959);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(97985);
/* harmony import */ var _core_scss_react_libs_react_select_react_select_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22299);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(44012);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48159);
/* harmony import */ var _api_utlis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16550);
/* harmony import */ var _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88295);
/* harmony import */ var _utility_context_Can__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6756);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16714);
/* harmony import */ var _configs_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56176);
/* harmony import */ var _configs_subjects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14322);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(39146);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(39544);
/* harmony import */ var _utility_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16724);
/* harmony import */ var _utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47201);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85893);




var _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





















var SessionSelect = function SessionSelect(_ref) {
  var refresh = _ref.refresh,
      dispatch = _ref.dispatch,
      acc = _ref.acc,
      onChange = _ref.onChange,
      requireStar = _ref.requireStar,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      edit = _ref.edit,
      add = _ref.add,
      label = _ref.label,
      disabled = _ref.disabled;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState, 2),
      submittedSession = _useState2[0],
      setSubmittedSession = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState3, 2),
      errorSession = _useState4[0],
      setErrorSession = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState5, 2),
      openSession = _useState6[0],
      setOpenSession = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState7, 2),
      sessions = _useState8[0],
      setSessions = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState9, 2),
      sessionFetched = _useState10[0],
      setSessionFetched = _useState10[1];

  var ability = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utility_context_Can__WEBPACK_IMPORTED_MODULE_7__/* .AbilityContext */ .v);

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState11, 2),
      sessionSelected = _useState12[0],
      setSessionSelected = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState13, 2),
      session = _useState14[0],
      setSession = _useState14[1];

  var _useSkin = (0,_utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_12__/* .useSkin */ .Q)(),
      _useSkin2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState15, 2),
      timer = _useState16[0],
      setTimer = _useState16[1];

  var onEditSession = function onEditSession() {
    var c = sessions.find(function (c) {
      return c.value === Number(sessionSelected.value);
    });

    if (c) {
      (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .get */ .U2, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SESSION_URL */ .Lb, c.value], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
        setSession(data);
        setOpenSession(true);
      }, null);
    }
  };

  var OptionComponent = function OptionComponent(_ref2) {
    var data = _ref2.data,
        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(_ref2, _excluded);

    if (data.type === "add-session") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return setOpenSession(true);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else if (data.type === "edit-session") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return onEditSession();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_21__.c.Option, _objectSpread(_objectSpread({}, props), {}, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("span", {
          className: "d-flex align-items-start flex-column justify-content-start  text-break",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("strong", {
            className: "mb-50",
            children: data.label
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            style: {
              fontSize: "100%"
            },
            pill: true,
            color: moment__WEBPACK_IMPORTED_MODULE_13___default()(data.end).isBefore(moment__WEBPACK_IMPORTED_MODULE_13___default()()) ? "light-danger" : "light-info" // className="ml-1"
            ,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              className: "d-flex align-items-center justify-content-center",
              children: [moment__WEBPACK_IMPORTED_MODULE_13___default()(data.start).format("YYYY-MM-DD"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                className: "mx-1"
              }), moment__WEBPACK_IMPORTED_MODULE_13___default()(data.end).format("YYYY-MM-DD")]
            })
          }), data.active && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            style: {
              fontSize: "100%",
              marginTop: "1rem"
            },
            pill: true,
            color: "light-success",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
              id: "actualSession"
            })
          })]
        })
      }));
    }
  };

  var onSessionClosed = function onSessionClosed() {
    setSubmittedSession(false);
    setOpenSession(false);
    setSession({});
    setErrorSession("");
  };

  function handleSessionsFetched(data, id) {
    setSessionFetched(data);
    var list = data.map(function (c) {
      return {
        value: c.id,
        label: c.name,
        description: c.description,
        start: c.start,
        end: c.end,
        active: c.active
      };
    });

    if (id && list.length > 0) {
      onSessionChange(list[0]);
    }

    if (edit && sessionSelected && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.EDIT_ACTION */ .a.EDIT_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.SESSION_SUBJECT */ .k.SESSION_SUBJECT)) {
      list = [{
        value: "edit-session",
        label: intl.formatMessage({
          id: "editSession"
        }),
        type: "edit-session",
        color: "flat-warning"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(list));
    }

    if (add && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.WRITE_ACTION */ .a.WRITE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.SESSION_SUBJECT */ .k.SESSION_SUBJECT)) {
      list = [{
        value: "add-session",
        label: intl.formatMessage({
          id: "addSession"
        }),
        type: "add-session",
        color: "flat-success"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(list));
    }

    setSessions(list);
  }

  var getSessions = function getSessions(id) {
    (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAll */ .go, [!id ? _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SESSIONS_URL */ .IP : _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SESSIONS_URL */ .IP + "?id=" + id], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (res) {
      return handleSessionsFetched(res, id);
    }, null);
  };

  var onSessionSuccess = function onSessionSuccess(_ref3) {
    var id = _ref3.id;
    setOpenSession(false);
    setSessionSelected(null);
    onChange(null);
    getSessions(id);
  };

  var deleteSession = function deleteSession() {
    (0,_Alert__WEBPACK_IMPORTED_MODULE_8__/* .SweetAlert */ .o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteSessionQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SESSION_URL */ .Lb, session.id, {
          deleted: true
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "sessionDeletedSuccessfully", "somethingWrong", onSessionSuccess, null);
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setSessionSelected(acc);
  }, [acc]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (refresh) {
      getSessions();
    }
  }, [refresh]);

  var onSessionChange = function onSessionChange(e) {
    setSessionSelected(e);
    onChange(e);
  };

  var onSessionFail = function onSessionFail(err) {
    if (err.code === 414) {
      setErrorSession("nameExist");
    } else if (err.code === 415) {
      setErrorSession("sessionDateOverlap");
    } else {
      setErrorSession("somethingWrong");
    }
  };

  var saveSession = function saveSession(e) {
    e.preventDefault();
    setErrorSession(false);
    setSubmittedSession(true);

    if (session.name && session.start && session.end) {
      if (moment__WEBPACK_IMPORTED_MODULE_13___default()(session.end).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_13___default()(session.start))) {
        setErrorSession("sessionDateError");
        return;
      }

      if (session.id) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SESSION_URL */ .Lb, session.id, session], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "sessionUpdatedSuccessfully", "", onSessionSuccess, onSessionFail);
      } else {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .insert */ .$T, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SESSION_URL */ .Lb, session], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "sessionCreatedSuccessfully", "", onSessionSuccess, onSessionFail);
      }
    }
  };

  var filter = function filter(val) {
    if (val) {
      clearTimeout(timer);
      setTimer(setTimeout(function () {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAllPaged */ .Ki, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SESSIONS_URL */ .IP, 0, Number.MAX_SAFE_INTEGER, [["name", "asc"]], {
          name: val
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
          return handleSessionsFetched(data);
        }, null);
      }, 700));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
      children: [label !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
        for: "session",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          id: "session"
        }), " ", requireStar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
          className: "text-danger h6",
          children: "*"
        }) : ""]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        style: {
          border: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid 1px"),
          borderRadius: "5px",
          display: "flex",
          alignItems: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
          className: "mx-1",
          size: 14
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            flexGrow: 1,
            borderLeft: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid ").concat(intl.locale === "ar" ? "0px" : "1px"),
            borderRight: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid ").concat(intl.locale === "ar" ? "1px" : "0px")
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP, {
            isDisabled: disabled,
            styles: {
              control: function control(provided) {
                return _objectSpread(_objectSpread({}, provided), {}, {
                  border: "none"
                });
              }
            },
            onMenuOpen: function onMenuOpen() {
              return handleSessionsFetched(sessionFetched);
            },
            id: "session",
            placeholder: intl.formatMessage({
              id: "selectSession"
            }),
            value: sessionSelected,
            components: {
              Option: OptionComponent
            },
            noOptionsMessage: function noOptionsMessage() {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                id: "noRecords"
              });
            },
            onChange: function onChange(e) {
              return onSessionChange(e);
            },
            isClearable: true,
            theme: _utility_Utils__WEBPACK_IMPORTED_MODULE_11__/* .selectThemeColors */ .ss,
            options: sessions,
            classNamePrefix: "select",
            onInputChange: function onInputChange(v) {
              return filter(v);
            }
          })
        })]
      }), invalid && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "customSelectError",
        children: invalidText
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
      autoFocus: false,
      isOpen: openSession,
      toggle: function toggle() {
        return setOpenSession(!openSession);
      },
      onClosed: onSessionClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
        toggle: function toggle() {
          return setOpenSession(!openSession);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          id: session.id ? "editSession" : "addSession"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
        children: [errorSession && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                  id: errorSession
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
            id: "login-tip",
            className: "mx-50",
            size: 18,
            style: {
              top: "10px",
              right: "10px"
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          autoFocus: true,
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "name"
          }),
          value: session.name,
          id: "name",
          name: "name",
          placeholder: "",
          requireStar: true,
          onChange: function onChange(e) {
            return setSession(_objectSpread(_objectSpread({}, session), {}, {
              name: e.target.value
            }));
          },
          invalid: submittedSession && !session.name,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
            type: "switch",
            id: "actualSession",
            name: "customSwitch",
            label: intl.formatMessage({
              id: "actualSession"
            }),
            checked: session.active,
            onChange: function onChange(e) {
              return setSession(_objectSpread(_objectSpread({}, session), {}, {
                active: e.target.checked
              }));
            },
            inline: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "startDate"
          }),
          id: "startDate1",
          name: "startDate1",
          className: "form-control",
          onChange: function onChange(date) {
            return setSession(_objectSpread(_objectSpread({}, session), {}, {
              start: date[0]
            }));
          },
          value: session.start,
          options: {
            enableTime: false,
            time_24hr: true // disable: [
            //   {
            //     from: new Date(-8640000000000000),
            //     to: new Date().setDate(new Date().getDate() - 1),
            //   },
            // ],

          },
          invalid: submittedSession && !session.start,
          requireStar: true,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
              size: 14
            })
          },
          type: "flatPicker"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "endDate"
          }),
          id: "endDate1",
          name: "endDate1",
          className: "form-control",
          onChange: function onChange(date) {
            return setSession(_objectSpread(_objectSpread({}, session), {}, {
              end: date[0]
            }));
          },
          value: session.end,
          options: {
            enableTime: false,
            time_24hr: true // disable: [
            //   {
            //     from: new Date(-8640000000000000),
            //     to: new Date(
            //       new Date(session.start).setDate(session.start.getDate() - 1)
            //     ),
            //   },
            // ],

          },
          invalid: submittedSession && !session.end,
          requireStar: true,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
              size: 14
            })
          },
          type: "flatPicker"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "description"
          }),
          value: session.description,
          id: "description",
          type: "textarea",
          name: "description",
          placeholder: "",
          onChange: function onChange(e) {
            return setSession(_objectSpread(_objectSpread({}, session), {}, {
              description: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
              size: 14
            })
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Ripple */ .Z.Ripple, {
          onClick: saveSession,
          color: "primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "save"
          })
        }), session.id && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.DELETE_ACTION */ .a.DELETE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.SESSION_SUBJECT */ .k.SESSION_SUBJECT) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Ripple */ .Z.Ripple, {
          color: "danger",
          type: "button",
          onClick: deleteSession,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "delete"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SessionSelect);

/***/ }),

/***/ 97985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23663);






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_2__/* .tagPropType */ .iC,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'div'
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, ["className", "cssModule", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'modal-footer'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, attributes, {
    className: classes
  }));
};

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (ModalFooter);

/***/ })

}]);