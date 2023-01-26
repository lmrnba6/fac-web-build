"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[2065],{

/***/ 82433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ tableRowsPerPage; }
/* harmony export */ });
var tableRowsPerPage = [10, 20, 50, 100];

/***/ }),

/***/ 62065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ list; }
});

// EXTERNAL MODULE: ./src/@core/scss/react/apps/app-users.scss
var app_users = __webpack_require__(61360);
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
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
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
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/more-vertical.js
var more_vertical = __webpack_require__(79366);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit-2.js
var edit_2 = __webpack_require__(55654);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__(30833);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/configs/actions.js
var actions = __webpack_require__(56176);
// EXTERNAL MODULE: ./src/configs/subjects.js
var subjects = __webpack_require__(14322);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/views/apps/session/list/columns.js
// ** React Imports
 // ** Custom Components
// ** Third Party Components









var columns = function columns(deleteSession, editSession, viewSession, ability, intl) {
  return [{
    name: intl.formatMessage({
      id: "name"
    }),
    selector: "name",
    sortable: false,
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "cursor-pointer",
        onClick: function onClick() {
          return viewSession(row);
        },
        children: row.name
      });
    }
  }, {
    name: intl.formatMessage({
      id: "startDate"
    }),
    selector: "start",
    sortable: false,
    cell: function cell(row) {
      return moment_default()(row.start).format("YYYY-MM-DD");
    }
  }, {
    name: intl.formatMessage({
      id: "endDate"
    }),
    selector: "end",
    sortable: false,
    cell: function cell(row) {
      return moment_default()(row.end).format("YYYY-MM-DD");
    }
  }, {
    name: intl.formatMessage({
      id: "actualSession"
    }),
    // minWidth: '172px',
    selector: "active",
    sortable: false,
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
        pill: true,
        color: !row.active ? "light-danger" : "light-success",
        className: "mr-1 font-small-3",
        children: row.active ? intl.formatMessage({
          id: "actualSession"
        }) : ""
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
          children: [ability.can(actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION, subjects/* SUBJECTS.SESSION_SUBJECT */.k.SESSION_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            tag: react_router_dom/* Link */.rU,
            to: "#",
            onClick: function onClick() {
              return editSession(row);
            },
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
          }), ability.can(actions/* ACTIONS.DELETE_ACTION */.a.DELETE_ACTION, subjects/* SUBJECTS.SESSION_SUBJECT */.k.SESSION_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            className: "w-100",
            onClick: function onClick() {
              return deleteSession(row.id);
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
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/plus.js
var plus = __webpack_require__(61896);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/filter.js
var icons_filter = __webpack_require__(64811);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__(27434);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-up.js
var chevron_up = __webpack_require__(82802);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/search.js
var search = __webpack_require__(83206);
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
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Button.js
var Button = __webpack_require__(97975);
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
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(55678);
// EXTERNAL MODULE: ./src/views/customComponents/Alert.js
var Alert = __webpack_require__(16714);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./src/views/customComponents/Field.js
var Field = __webpack_require__(48159);
// EXTERNAL MODULE: ./src/views/customComponents/Pagination.js
var Pagination = __webpack_require__(4248);
// EXTERNAL MODULE: ./src/api/utlis.js
var utlis = __webpack_require__(16550);
// EXTERNAL MODULE: ./src/utility/context/Can.js
var Can = __webpack_require__(6756);
// EXTERNAL MODULE: ./src/configs/tableConstants.js
var tableConstants = __webpack_require__(82433);
// EXTERNAL MODULE: ./src/views/customComponents/ExportTable.js
var ExportTable = __webpack_require__(82475);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x.js
var x = __webpack_require__(78268);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-octagon.js
var alert_octagon = __webpack_require__(61643);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/calendar.js
var calendar = __webpack_require__(91140);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/clipboard.js
var clipboard = __webpack_require__(70616);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Modal.js + 1 modules
var Modal = __webpack_require__(85677);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalHeader.js
var ModalHeader = __webpack_require__(32701);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalBody.js
var ModalBody = __webpack_require__(10684);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Alert.js
var es_Alert = __webpack_require__(17834);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Form.js
var Form = __webpack_require__(15538);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/FormGroup.js
var FormGroup = __webpack_require__(82669);
// EXTERNAL MODULE: ./src/configs/api-urls.js
var api_urls = __webpack_require__(88295);
;// CONCATENATED MODULE: ./src/views/apps/session/list/Sidebar.js














var Sidebar = function Sidebar(props) {
  var open = props.open,
      toggleSidebar = props.toggleSidebar,
      refresh = props.refresh,
      session = props.session,
      onClosed = props.onClosed,
      dispatch = props.dispatch;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      submitted = _useState2[0],
      setSubmitted = _useState2[1];

  var _useState3 = (0,react.useState)(session.active || false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      active = _useState4[0],
      setActive = _useState4[1];

  var _useState5 = (0,react.useState)(session.start || new Date()),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      start = _useState6[0],
      setStart = _useState6[1];

  var _useState7 = (0,react.useState)(session.end || new Date()),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      end = _useState8[0],
      setEnd = _useState8[1];

  var _useState9 = (0,react.useState)(session.name || ""),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      name = _useState10[0],
      setName = _useState10[1];

  var _useState11 = (0,react.useState)(session.description || ""),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      description = _useState12[0],
      setDescription = _useState12[1];

  var intl = (0,useIntl/* default */.Z)();

  var _useState13 = (0,react.useState)(null),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      error = _useState14[0],
      setError = _useState14[1];

  var onClose = function onClose() {
    setSubmitted(false);
    onClosed();
    setActive(false);
    setStart(null);
    setEnd(null);
    setName("");
    setError(null);
    setDescription("");
  };

  var handleSessionsFetched = function handleSessionsFetched(res) {
    setActive(res.active);
    setName(res.name);
    setStart(res.start);
    setEnd(res.end);
    setDescription(res.description);
  };

  var initSession = function initSession() {
    if (session.id) {
      (0,utlis/* apiCall */.k_)(utlis/* get */.U2, [api_urls/* SESSION_URL */.Lb, session.id], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", handleSessionsFetched, toggleSidebar);
    }
  };

  (0,react.useEffect)(function () {
    initSession();
  }, [open]);
  var isSaveButtonDisabled = !start || !end || !name;

  var onSessionSuccess = function onSessionSuccess() {
    toggleSidebar();
    refresh();
  };

  var onCreate = function onCreate(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!isSaveButtonDisabled) {
      if (moment_default()(end).isSameOrBefore(moment_default()(start))) {
        setError("sessionDateError");
        return;
      }

      (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* SESSION_URL */.Lb, {
        start: start,
        end: end,
        description: description,
        name: name,
        active: active
      }], true, react_toastify_esm/* toast */.Am, dispatch, "sessionCreatedSuccessfully", "", onSessionSuccess, onFail);
    }
  };

  var onUpdate = function onUpdate(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!isSaveButtonDisabled) {
      if (moment_default()(end).isSameOrBefore(moment_default()(start))) {
        setError("sessionDateError");
        return;
      }

      (0,utlis/* apiCall */.k_)(utlis/* update */.Vx, [api_urls/* SESSION_URL */.Lb, session.id, {
        start: start,
        end: end,
        description: description,
        name: name,
        active: active
      }], true, react_toastify_esm/* toast */.Am, dispatch, "sessionUpdatedSuccessfully", "", onSessionSuccess, onFail);
    }
  };

  var onFail = function onFail(err) {
    if (err.code === 414) {
      setError("nameExist");
    } else if (err.code === 415) {
      setError("sessionDateOverlap");
    } else {
      setError("somethingWrong");
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
    isOpen: open,
    toggle: toggleSidebar,
    className: "sidebar-lg",
    contentClassName: "p-0",
    onClosed: onClose,
    modalClassName: "modal-slide-in transaction-sidebar",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ModalHeader/* default */.Z, {
      className: "mb-1",
      toggle: toggleSidebar,
      close: /*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.Z, {
        className: "cursor-pointer",
        size: 15,
        onClick: toggleSidebar
      }),
      tag: "div",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
        className: "modal-title",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "".concat(session.id ? "edit" : "add", "Session")
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalBody/* default */.Z, {
      className: "flex-grow-1 pb-sm-0 pb-3",
      children: [error && /*#__PURE__*/(0,jsx_runtime.jsxs)(es_Alert/* default */.Z, {
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
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* default */.Z, {
        onSubmit: session.id ? onUpdate : onCreate,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "name"
          }),
          value: name,
          id: "name",
          name: "name",
          placeholder: "",
          requireStar: true,
          invalid: submitted && !name,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          onChange: function onChange(e) {
            return setName(e.target.value);
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fa-solid fa-pen-to-square"
            })
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
            type: "switch",
            id: "actualSession",
            name: "customSwitch",
            label: intl.formatMessage({
              id: "actualSession"
            }),
            checked: active,
            onChange: function onChange(e) {
              return setActive(e.target.checked);
            },
            inline: true
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "startDate"
          }),
          id: "startDate1",
          name: "startDate1",
          className: "form-control",
          onChange: function onChange(date) {
            return setStart(date[0]);
          },
          value: start,
          options: {
            enableTime: false,
            time_24hr: true // disable: [
            //   {
            //     from: new Date(-8640000000000000),
            //     to: new Date().setDate(new Date().getDate() - 1),
            //   },
            // ],

          },
          invalid: submitted && !start,
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
            id: "endDate"
          }),
          id: "endDate1",
          name: "endDate1",
          className: "form-control",
          onChange: function onChange(date) {
            return setEnd(date[0]);
          },
          value: end,
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
          invalid: submitted && !end,
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
          value: description,
          id: "description",
          type: "textarea",
          name: "description",
          placeholder: "",
          onChange: function onChange(e) {
            return setDescription(e.target.value);
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(clipboard/* default */.Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.Z, {
          className: "d-flex align-items-center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
              type: "submit",
              color: "primary",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "save"
              })
            })
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var list_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./src/redux/actions/auth/index.js
var auth = __webpack_require__(77765);
;// CONCATENATED MODULE: ./src/views/apps/session/list/Table.js




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
  var onAdd = _ref.onAdd,
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
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Label/* default */.Z, {
            for: "rows-per-page",
            children: [data.count ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [(pageIndex - 1) * rowsPerPage + 1, "-", pageIndex * rowsPerPage > data.count ? data.count : pageIndex * rowsPerPage, " ", intl.formatMessage({
                id: "of"
              }), " ", data.count]
            }) : null, " "]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
        xl: "6",
        className: "d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "mr-1",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExportTable/* ExportTable */._, {
            data: data.rows,
            title: "sessions",
            keys: ["name", "capacity"]
          })
        }), ability.can(actions/* ACTIONS.WRITE_ACTION */.a.WRITE_ACTION, subjects/* SUBJECTS.SESSION_SUBJECT */.k.SESSION_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
          color: "primary",
          onClick: onAdd,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(plus/* default */.Z, {
            size: 15
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle ml-25",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "addSession"
            })
          })]
        })]
      })]
    })
  });
};

var SessionList = function SessionList() {
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

  var _useState11 = (0,react.useState)({}),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      session = _useState12[0],
      setSession = _useState12[1];

  var dispatch = (0,es/* useDispatch */.I0)();

  var _useState13 = (0,react.useState)(""),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      searchTerm = _useState14[0],
      setSearchTerm = _useState14[1];

  var _useState15 = (0,react.useState)(false),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      sidebarOpen = _useState16[0],
      setSidebarOpen = _useState16[1];

  var _useState17 = (0,react.useState)(false),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      detailsOpen = _useState18[0],
      setDetailsOpen = _useState18[1];

  var _useState19 = (0,react.useState)(0),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      timer = _useState20[0],
      setTimer = _useState20[1];

  var intl = (0,useIntl/* default */.Z)();
  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var _useState21 = (0,react.useState)(false),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      filterOpen = _useState22[0],
      setFilterOpen = _useState22[1];

  var _useSkin = (0,useSkin/* useSkin */.Q)(),
      _useSkin2 = (0,slicedToArray/* default */.Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var handleData = function handleData(res) {
    setData({
      rows: res || [],
      count: res.length ? res[0].count : 0
    });
  };

  var getData = function getData(pageIndex, pageSize, order, filter) {
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* SESSIONS_URL */.IP, pageIndex, pageSize, order, filter], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", handleData, null);
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
  };

  var toggleDetails = function toggleDetails() {
    return setDetailsOpen(!detailsOpen);
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

  var handleFilter = function handleFilter(val) {
    setPageIndex(1);
    setSearchTerm(val);
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      search: val
    }));
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, _objectSpread(_objectSpread({}, filter), {}, {
        search: val
      }));
    }, 700));
  };

  var deleteSession = function deleteSession(id) {
    (0,Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteSessionQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* remove */.Od, [api_urls/* SESSION_URL */.Lb, id], true, react_toastify_esm/* toast */.Am, dispatch, "sessionDeletedSuccessfully", "somethingWrong", function () {
          return getData(pageIndex, pageSize, order, filter);
        }, null);
      }
    });
  };

  var editSession = function editSession(s) {
    setSession(s);
    toggleSidebar();
  };

  var viewSession = function viewSession(s) {
    setSession(s);
    toggleSidebar();
  }; // ** Table data to render


  var dataToRender = function dataToRender() {
    var _data$rows, _data$rows2;

    var filters = {
      name: searchTerm
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

  var onSideClosed = function onSideClosed() {
    return setSession({});
  };

  var onAdd = function onAdd() {
    setSidebarOpen(true);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "app-expense-list",
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
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "4",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
                prepend: {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.Z, {
                    size: 14
                  })
                },
                placeholder: intl.formatMessage({
                  id: "search"
                }),
                id: "search",
                type: "text",
                value: searchTerm,
                onChange: function onChange(e) {
                  return handleFilter(e.target.value);
                }
              })
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_cjs/* default */.ZP, {
          theme: skin,
          onRowClicked: function onRowClicked(row) {
            return viewSession(row);
          },
          highlightOnHover: true,
          pointerOnHover: true,
          noHeader: true,
          pagination: true,
          subHeader: true,
          responsive: true,
          paginationServer: true,
          columns: columns(deleteSession, editSession, viewSession, ability, intl),
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
            onAdd: onAdd,
            handlePerPage: handlePerPage,
            rowsPerPage: pageSize,
            searchTerm: searchTerm,
            handleFilter: handleFilter,
            data: data,
            intl: intl
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(list_Sidebar, {
        dispatch: dispatch,
        open: sidebarOpen,
        toggleSidebar: toggleSidebar,
        onClosed: onSideClosed,
        refresh: function refresh() {
          return getData(pageIndex, pageSize, order, filter);
        },
        session: session
      })]
    })
  });
};

/* harmony default export */ var Table = (SessionList);
;// CONCATENATED MODULE: ./src/views/apps/session/list/index.js
// ** User List Component
// ** Styles





var List = function List() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "app-user-list",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Table, {})
  });
};

/* harmony default export */ var list = (List);

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