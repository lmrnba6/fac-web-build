"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[5840],{

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

/***/ 65840:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ groups; }
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
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/plus.js
var plus = __webpack_require__(61896);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/user.js
var user = __webpack_require__(73752);
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
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./src/views/customComponents/Field.js
var Field = __webpack_require__(48159);
// EXTERNAL MODULE: ./src/configs/api-urls.js
var api_urls = __webpack_require__(88295);
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
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/more-vertical.js
var more_vertical = __webpack_require__(79366);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit-2.js
var edit_2 = __webpack_require__(55654);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__(30833);
// EXTERNAL MODULE: ./src/configs/actions.js
var actions = __webpack_require__(56176);
// EXTERNAL MODULE: ./src/configs/subjects.js
var subjects = __webpack_require__(14322);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/views/apps/user/groups/columns.js








var columns = function columns(deleteGroup, intl, editGroup, ability) {
  return [{
    name: intl.formatMessage({
      id: "name"
    }),
    minWidth: "297px",
    selector: "name",
    sortable: false,
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        onClick: function onClick() {
          return editGroup(row.id);
        },
        className: "d-flex justify-content-left align-items-center",
        children: [row.avatar ? /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
          img: row.avatar,
          className: "mr-1"
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
          color: "light-danger",
          className: "mr-1",
          content: row.name,
          initials: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "d-flex flex-column",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, {
            to: "#",
            className: "user-name text-truncate mb-0",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "text-dark font-weight-bold text-capitalize",
              children: intl.formatMessage({
                id: row.name
              })
            })
          })
        })]
      });
    }
  }, {
    name: intl.formatMessage({
      id: "members"
    }),
    // minWidth: '320px',
    selector: "members",
    sortable: false,
    cell: function cell(row) {
      return "".concat(row.members || 0, " ").concat(intl.formatMessage({
        id: "members"
      }));
    }
  }, {
    name: intl.formatMessage({
      id: "access"
    }),
    // minWidth: '172px',
    selector: "owner",
    sortable: false,
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
        pill: true,
        color: row.owner ? "light-danger" : "light-success",
        className: "mr-1 font-small-3",
        children: row.owner ? intl.formatMessage({
          id: "private"
        }) : intl.formatMessage({
          id: "public"
        })
      });
    }
  }, {
    name: intl.formatMessage({
      id: "description"
    }),
    // minWidth: '320px',
    selector: "description",
    sortable: false,
    cell: function cell(row) {
      return row.description;
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
          children: [ability.can(actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION, subjects/* SUBJECTS.GROUP_SUBJECT */.k.GROUP_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            onClick: function onClick() {
              return editGroup(row.id);
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
          }), ability.can(actions/* ACTIONS.DELETE_ACTION */.a.DELETE_ACTION, subjects/* SUBJECTS.GROUP_SUBJECT */.k.GROUP_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            className: "w-100",
            onClick: function onClick() {
              return deleteGroup(row.id);
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./src/@core/components/sidebar/index.js
var sidebar = __webpack_require__(78133);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Form.js
var Form = __webpack_require__(15538);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Alert.js
var Alert = __webpack_require__(17834);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/FormGroup.js
var FormGroup = __webpack_require__(82669);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/grid.js
var grid = __webpack_require__(25471);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-octagon.js
var alert_octagon = __webpack_require__(61643);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/clipboard.js
var clipboard = __webpack_require__(70616);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/users.js
var icons_users = __webpack_require__(39646);
// EXTERNAL MODULE: ./src/api/utlis.js
var utlis = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/react-select/dist/index-a7690a33.esm.js + 1 modules
var index_a7690a33_esm = __webpack_require__(39146);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.esm.js + 2 modules
var react_select_esm = __webpack_require__(39544);
// EXTERNAL MODULE: ./src/assets/images/avatars/avatar-blank.png
var avatar_blank = __webpack_require__(76930);
// EXTERNAL MODULE: ./src/utility/Utils.js
var Utils = __webpack_require__(16724);
;// CONCATENATED MODULE: ./src/views/apps/user/groups/Sidebar.js



var _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


















var GroupsSidebar = function GroupsSidebar(_ref) {
  var open = _ref.open,
      toggleSidebar = _ref.toggleSidebar,
      refresh = _ref.refresh,
      groupId = _ref.groupId;

  var _useState = (0,react.useState)(""),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = (0,react.useState)(null),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      owner = _useState6[0],
      setOwner = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      submitted = _useState8[0],
      setSubmitted = _useState8[1];

  var _useState9 = (0,react.useState)([]),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      members = _useState10[0],
      setMembers = _useState10[1];

  var _useState11 = (0,react.useState)([]),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      users = _useState12[0],
      setUsers = _useState12[1];

  var _useState13 = (0,react.useState)(0),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      timer = _useState14[0],
      setTimer = _useState14[1];

  var _useState15 = (0,react.useState)(""),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      error = _useState16[0],
      setError = _useState16[1];

  var intl = (0,useIntl/* default */.Z)();
  var store = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  var isSaveDisabled = !name;

  var clear = function clear(toggle, ref) {
    if (toggle) {
      toggleSidebar();
    }

    setError("");
    setUsers([]);
    setOwner(null);
    setDescription("");
    setMembers([]);
    setSubmitted(false);
    setName("");

    if (ref) {
      refresh();
    }
  };

  var onSuccess = function onSuccess() {
    clear(true, true);
  };

  var handleGroup = function handleGroup(data) {
    setName(data.group.name);
    setMembers(data.members);
    setDescription(data.group.description);
    setOwner(data.group.owner);
    setMembers((data.members || []).map(function (u) {
      return {
        value: u.id,
        label: u.name,
        avatar: u.avatar,
        email: u.email
      };
    }));
    toggleSidebar();
  };

  var getGroup = function getGroup() {
    if (!open && groupId) {
      (0,utlis/* apiCall */.k_)(utlis/* get */.U2, [api_urls/* GROUP_URL */.c8, groupId], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", function (data) {
        return handleGroup(data);
      }, null);
    } else {
      clear(false, false);
    }
  };

  (0,react.useEffect)(function () {
    return getGroup();
  }, [groupId]);

  var SelectComponent = function SelectComponent(_ref2) {
    var data = _ref2.data,
        props = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded);

    return /*#__PURE__*/(0,jsx_runtime.jsx)(index_a7690a33_esm.c.Option, _objectSpread(_objectSpread({}, props), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex flex-wrap align-items-center zindex-dropdown",
        children: [data.group ? /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
          className: "my-0 mr-50",
          size: "sm",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(grid/* default */.Z, {})
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
          className: "my-0 mr-50",
          size: "sm",
          img: data.avatar || avatar_blank
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "d-flex  flex-column justify-content-start",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: data.name
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
            className: "text-truncate mb-0",
            children: !data.group ? data.username : "".concat(data.members, " ").concat((0,useIntl/* default */.Z)().formatMessage({
              id: "members"
            }))
          })]
        })]
      })
    }));
  };

  var formatGroupLabel = function formatGroupLabel(data) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("strong", {
      className: "d-flex align-items-center text-warning",
      children: [data.label === "students" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-user-graduate fa-lg mx-50"
      }) : data.label === "teachers" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-person-chalkboard fa-lg mx-50"
      }) : data.label === "operators" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-chalkboard-user fa-lg mx-50"
      }) : data.label === "owners" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-school fa-lg mx-50"
      }) : data.label === "driver" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-bus-simple fa-lg mx-50"
      }) : data.label === "accountants" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-money-bill-transfer mx-50"
      }) : data.label === "managers" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-user-tie mx-50"
      }) : data.label === "staff" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-id-badge fa-lg mx-50"
      }) : data.label === "parents" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-house-chimney-user fa-lg mx-50"
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-people-group fa-lg mx-50"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: intl.formatMessage({
          id: data.label
        })
      })]
    });
  };

  var handleUsersOption = function handleUsersOption(data) {
    var list = [];

    if (data) {
      Object.keys(data).forEach(function (d) {
        if (d !== "groups") {
          list.push({
            label: d,
            options: data[d].map(function (u) {
              return {
                value: u.id,
                label: u.name,
                avatar: u.avatar,
                email: u.email,
                name: u.name,
                username: u.username
              };
            })
          });
        } else {
          list.push({
            label: "groups",
            options: data.groups.map(function (u) {
              return {
                value: u.id,
                label: intl.formatMessage({
                  id: u.name
                }),
                members: u.members,
                name: intl.formatMessage({
                  id: u.name
                }),
                group: true,
                description: u.description
              };
            })
          });
        }
      });
    }

    setUsers([].concat(list));
  };

  var getUsers = function getUsers(val) {
    if (val) {
      clearTimeout(timer);
      setTimer(setTimeout(function () {
        return (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* MEMBERS_URL */.BE, 0, 20, [["name", "asc"]], {
          name: val
        }], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", function (data) {
          return handleUsersOption(data);
        }, null);
      }, 700));
    }
  };

  var onFail = function onFail(err) {
    if (err.code === 414) {
      setError("nameExist");
    } else if (err.code === 415) {
      setError("groupEmptyError");
    } else {
      setError("somethingWrong");
    }
  };

  var onUpdate = function onUpdate(e) {
    e.preventDefault();
    setError("");
    setSubmitted(true);

    if (!isSaveDisabled) {
      (0,utlis/* apiCall */.k_)(utlis/* update */.Vx, [api_urls/* GROUP_URL */.c8, groupId, {
        name: name,
        members: members,
        description: description,
        owner: owner
      }], true, react_toastify_esm/* toast */.Am, dispatch, "groupUpdatedSuccessfully", "", onSuccess, onFail);
    }
  };

  var onCreate = function onCreate(e) {
    e.preventDefault();
    setError("");
    setSubmitted(true);

    if (!isSaveDisabled) {
      (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* GROUP_URL */.c8, {
        name: name,
        members: members,
        description: description,
        owner: owner
      }], true, react_toastify_esm/* toast */.Am, dispatch, "groupCreatedSuccessfully", "", onSuccess, onFail);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(sidebar/* default */.Z, {
    size: "lg",
    open: open,
    onClosed: function onClosed() {
      return clear(false, false);
    },
    title: intl.formatMessage({
      id: groupId ? "editGroup" : "newGroup"
    }),
    headerClassName: "mb-1",
    contentClassName: "pt-0",
    toggleSidebar: toggleSidebar,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* default */.Z, {
        className: "mt-2",
        onSubmit: groupId ? onUpdate : onCreate,
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
            id: "description"
          }),
          value: description,
          id: "description",
          name: "description",
          type: "textarea",
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
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
            type: "switch",
            id: "private",
            name: "private",
            label: intl.formatMessage({
              id: "private"
            }),
            checked: !!owner,
            onChange: function onChange(e) {
              return setOwner(e.target.checked ? store.userData.id : null);
            },
            inline: true
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* default */.Z, {
            for: "members",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "members"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              border: "#d8d6de solid 1px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center"
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(icons_users/* default */.Z, {
              className: "mx-1",
              size: 14
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "flex-grow-1",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_select_esm/* default */.ZP, {
                styles: {
                  menu: function menu(provided) {
                    return _objectSpread(_objectSpread({}, provided), {}, {
                      zIndex: 9999
                    });
                  }
                },
                formatGroupLabel: formatGroupLabel,
                placeholder: (0,useIntl/* default */.Z)().formatMessage({
                  id: "select"
                }),
                value: members,
                noOptionsMessage: function noOptionsMessage() {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "noRecords"
                  });
                },
                onChange: function onChange(e) {
                  return setMembers(e);
                },
                isMulti: true,
                id: "email-to",
                isClearable: false,
                theme: Utils/* selectThemeColors */.ss,
                options: users,
                className: "react-select select-borderless",
                classNamePrefix: "select",
                components: {
                  Option: SelectComponent
                },
                onInputChange: function onInputChange(v) {
                  return getUsers(v);
                },
                filterOption: function filterOption(c, i) {
                  var _c$data, _c$data$label, _c$data$label$toLower, _c$data2, _c$data3, _c$data3$email, _c$data3$email$toLowe, _c$data4, _c$data4$username, _c$data4$username$toL, _c$data5, _c$data5$description, _c$data5$description$;

                  return (c === null || c === void 0 ? void 0 : (_c$data = c.data) === null || _c$data === void 0 ? void 0 : (_c$data$label = _c$data.label) === null || _c$data$label === void 0 ? void 0 : (_c$data$label$toLower = _c$data$label.toLowerCase()) === null || _c$data$label$toLower === void 0 ? void 0 : _c$data$label$toLower.includes(i === null || i === void 0 ? void 0 : i.toLowerCase())) || !(c !== null && c !== void 0 && (_c$data2 = c.data) !== null && _c$data2 !== void 0 && _c$data2.email) && (c === null || c === void 0 ? void 0 : (_c$data3 = c.data) === null || _c$data3 === void 0 ? void 0 : (_c$data3$email = _c$data3.email) === null || _c$data3$email === void 0 ? void 0 : (_c$data3$email$toLowe = _c$data3$email.toLowerCase()) === null || _c$data3$email$toLowe === void 0 ? void 0 : _c$data3$email$toLowe.includes(i === null || i === void 0 ? void 0 : i.toLowerCase())) || (c === null || c === void 0 ? void 0 : (_c$data4 = c.data) === null || _c$data4 === void 0 ? void 0 : (_c$data4$username = _c$data4.username) === null || _c$data4$username === void 0 ? void 0 : (_c$data4$username$toL = _c$data4$username.toLowerCase()) === null || _c$data4$username$toL === void 0 ? void 0 : _c$data4$username$toL.includes(i === null || i === void 0 ? void 0 : i.toLowerCase())) || (c === null || c === void 0 ? void 0 : (_c$data5 = c.data) === null || _c$data5 === void 0 ? void 0 : (_c$data5$description = _c$data5.description) === null || _c$data5$description === void 0 ? void 0 : (_c$data5$description$ = _c$data5$description.toLowerCase()) === null || _c$data5$description$ === void 0 ? void 0 : _c$data5$description$.includes(i === null || i === void 0 ? void 0 : i.toLowerCase()));
                }
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
          type: "submit",
          className: "mr-1",
          color: "primary",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "save"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
          color: "secondary",
          outline: true,
          onClick: function onClick() {
            return clear(true, false);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "cancel"
          })
        })]
      })
    })
  });
};

/* harmony default export */ var Sidebar = (GroupsSidebar);
// EXTERNAL MODULE: ./src/views/customComponents/Pagination.js
var Pagination = __webpack_require__(4248);
// EXTERNAL MODULE: ./src/views/customComponents/Alert.js
var customComponents_Alert = __webpack_require__(16714);
// EXTERNAL MODULE: ./src/configs/tableConstants.js
var tableConstants = __webpack_require__(82433);
// EXTERNAL MODULE: ./src/utility/context/Can.js
var Can = __webpack_require__(6756);
// EXTERNAL MODULE: ./src/views/customComponents/ExportTable.js
var ExportTable = __webpack_require__(82475);
;// CONCATENATED MODULE: ./src/views/apps/user/groups/GroupTable.js




function GroupTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function GroupTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? GroupTable_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : GroupTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




























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
            title: "group",
            headers: ["name", "members", "access"],
            keys: ["name", "members", "owner"],
            displays: [null, function (row) {
              return "".concat(row.members, " ").concat(intl.formatMessage({
                id: "members"
              }));
            }, function (row) {
              return intl.formatMessage({
                id: row.owner ? "private" : "public"
              });
            }]
          })
        }), ability.can(actions/* ACTIONS.WRITE_ACTION */.a.WRITE_ACTION, subjects/* SUBJECTS.GROUP_SUBJECT */.k.GROUP_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
          color: "primary",
          onClick: toggleSidebar,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(plus/* default */.Z, {
            size: 15
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle ml-25",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "addGroup"
            })
          })]
        })]
      })]
    })
  });
};

var GroupTable = function GroupTable() {
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

  var _useState13 = (0,react.useState)(false),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      sidebarOpen = _useState14[0],
      setSidebarOpen = _useState14[1];

  var _useState15 = (0,react.useState)(""),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      currentRole = _useState16[0],
      setCurrentRole = _useState16[1];

  var _useState17 = (0,react.useState)(""),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      status = _useState18[0],
      setStatus = _useState18[1];

  var _useState19 = (0,react.useState)(0),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      timer = _useState20[0],
      setTimer = _useState20[1];

  var _useState21 = (0,react.useState)(null),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      groupId = _useState22[0],
      setGroupId = _useState22[1];

  var intl = (0,useIntl/* default */.Z)();
  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var _useSkin = (0,useSkin/* useSkin */.Q)(),
      _useSkin2 = (0,slicedToArray/* default */.Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var getData = function getData(pageIndex, pageSize, order, filter) {
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* GROUPS_URL */.qM, pageIndex, pageSize, order, filter], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", function (res) {
      return setData({
        rows: res,
        count: res && res.length ? res[0].count : 0
      });
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
    if (sidebarOpen) {
      setGroupId(null);
    }

    setSidebarOpen(!sidebarOpen);
  }; // ** Function in get data on page change


  var handlePagination = function handlePagination(page) {
    setPageIndex(page.selected + 1);
    getData(page.selected + 1, pageSize, order, filter);
  }; // ** Function in get data on rows per page


  var handlePerPage = function handlePerPage(e) {
    setPageIndex(1);
    setPageSize(parseInt(e.currentTarget.value));
    getData(1, parseInt(e.currentTarget.value), order, filter);
  }; // ** Function in get data on search query change


  var handleFilter = function handleFilter(val) {
    setPageIndex(1);
    setSearchTerm(val);
    setFilter(GroupTable_objectSpread(GroupTable_objectSpread({}, filter), {}, {
      name: val
    }));
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, GroupTable_objectSpread(GroupTable_objectSpread({}, filter), {}, {
        name: val
      }));
    }, 700));
  };

  var deleteGroup = function deleteGroup(id) {
    (0,customComponents_Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteGroupQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* remove */.Od, [api_urls/* GROUP_URL */.c8, id], true, react_toastify_esm/* toast */.Am, dispatch, "groupDeletedSuccessfully", "somethingWrong", function () {
          return getData(pageIndex, pageSize, order, filter);
        }, null);
      }
    });
  };

  var editGroup = function editGroup(id) {
    setGroupId(id);
  };

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

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "app-user-list",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(CardTitle/* default */.Z, {
            tag: "h4",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "searchFilter"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "4",
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
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_cjs/* default */.ZP, {
          onRowClicked: function onRowClicked(row) {
            return !row.private && editGroup(row.id);
          },
          theme: skin,
          noHeader: true,
          pagination: true,
          subHeader: true,
          responsive: true,
          paginationServer: true,
          sortServer: false,
          columns: columns(deleteGroup, intl, editGroup, ability) // sortIcon={<ChevronDown />}
          ,
          className: "react-dataTable",
          paginationComponent: function paginationComponent() {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* Pagination */.t, {
              pageIndex: pageIndex,
              pageSize: pageSize,
              total: data.count,
              handlePagination: handlePagination
            });
          },
          data: dataToRender() // onSort={onSort}
          ,
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
        groupId: groupId,
        toggleSidebar: toggleSidebar,
        refresh: function refresh() {
          return getData(pageIndex, pageSize, order, filter);
        }
      })]
    })
  });
};

/* harmony default export */ var groups_GroupTable = (GroupTable);
;// CONCATENATED MODULE: ./src/views/apps/user/groups/index.js





var Groups = function Groups() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "app-user-list",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(groups_GroupTable, {})
  });
};

/* harmony default export */ var groups = (Groups);

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