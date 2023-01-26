"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[5194],{

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

/***/ 61160:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70885);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10267);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51252);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17354);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44012);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _utility_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16724);
/* harmony import */ var _utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47201);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);









var TimeTable = function TimeTable(_ref) {
  var _times$sunday, _times$monday, _times$tuesday, _times$wednesday, _times$thursday, _times$friday, _times$saturday;

  var list = _ref.list,
      editTime = _ref.editTime;

  var _useSkin = (0,_utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_2__/* .useSkin */ .Q)(),
      _useSkin2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    saturday: [],
    sunday: [],
    monday: [],
    tuesday: [],
    thursday: [],
    wednesday: [],
    friday: []
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_useState, 2),
      times = _useState2[0],
      setTimes = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTimes((0,_utility_Utils__WEBPACK_IMPORTED_MODULE_1__/* .buildTimes */ .i_)(list));
  }, [list]);
  return list.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    className: "mt-1",
    id: "contentZ",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      md: "",
      className: "mb-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mx-50 ".concat(skin === "dark" ? "bg-dark" : "bg-light", " text-center text-dark  text-uppercase font-weight-bolder p-1 rounded-lg"),
        children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          id: "sunday"
        })]
      }), (_times$sunday = times.sunday) === null || _times$sunday === void 0 ? void 0 : _times$sunday.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          onClick: function onClick() {
            return editTime && editTime(s);
          },
          pill: true,
          color: skin === "dark" ? "dark" : "light",
          className: "rounded-lg mx-50 d-flex flex-column my-50 align-items-center justify-content-center cursor-pointer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("strong", {
            className: "my-50  text-danger font-medium-1 font-weight-bold",
            children: [s.start, " - ", s.end]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-info font-medium-1 font-weight-bold font-medium-1 font-weight-bold",
            children: s.sectionName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-success font-medium-1 font-weight-bold",
            children: s.roomName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-dark font-medium-1 font-weight-bold",
            children: s.teacherName
          })]
        });
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      md: "",
      className: "mb-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mx-50 ".concat(skin === "dark" ? "bg-dark" : "bg-light", " text-center text-dark  text-uppercase font-weight-bolder p-1 rounded-lg"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          id: "monday"
        })
      }), (_times$monday = times.monday) === null || _times$monday === void 0 ? void 0 : _times$monday.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          onClick: function onClick() {
            return editTime && editTime(s);
          },
          pill: true,
          color: skin === "dark" ? "dark" : "light",
          className: "rounded-lg mx-50 d-flex flex-column my-50 align-items-center justify-content-center cursor-pointer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "my-50 text-danger font-medium-1 font-weight-bold",
            children: [s.start, " - ", s.end]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-info font-medium-1 font-weight-bold",
            children: s.sectionName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-success font-medium-1 font-weight-bold",
            children: s.roomName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-dark font-medium-1 font-weight-bold",
            children: s.teacherName
          })]
        });
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      md: "",
      className: "mb-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mx-50 ".concat(skin === "dark" ? "bg-dark" : "bg-light", " text-center text-dark  text-uppercase font-weight-bolder p-1 rounded-lg"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          id: "tuesday"
        })
      }), (_times$tuesday = times.tuesday) === null || _times$tuesday === void 0 ? void 0 : _times$tuesday.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          onClick: function onClick() {
            return editTime && editTime(s);
          },
          pill: true,
          color: skin === "dark" ? "dark" : "light",
          className: "rounded-lg mx-50 d-flex flex-column my-50 align-items-center justify-content-center cursor-pointer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "my-50 text-danger font-medium-1 font-weight-bold",
            children: [s.start, " - ", s.end]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-info font-medium-1 font-weight-bold",
            children: s.sectionName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-success font-medium-1 font-weight-bold",
            children: s.roomName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-dark font-medium-1 font-weight-bold",
            children: s.teacherName
          })]
        });
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      md: "",
      className: "mb-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mx-50 ".concat(skin === "dark" ? "bg-dark" : "bg-light", " text-center text-dark  text-uppercase font-weight-bolder p-1 rounded-lg"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          id: "wednesday"
        })
      }), (_times$wednesday = times.wednesday) === null || _times$wednesday === void 0 ? void 0 : _times$wednesday.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          onClick: function onClick() {
            return editTime && editTime(s);
          },
          pill: true,
          color: skin === "dark" ? "dark" : "light",
          className: "rounded-lg mx-50 d-flex flex-column my-50 align-items-center justify-content-center cursor-pointer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "my-50 text-danger font-medium-1 font-weight-bold",
            children: [s.start, " - ", s.end]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-info font-medium-1 font-weight-bold",
            children: s.sectionName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-success font-medium-1 font-weight-bold",
            children: s.roomName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-dark font-medium-1 font-weight-bold",
            children: s.teacherName
          })]
        });
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      md: "",
      className: "mb-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mx-50 ".concat(skin === "dark" ? "bg-dark" : "bg-light", " text-center text-dark  text-uppercase font-weight-bolder p-1 rounded-lg"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          id: "thursday"
        })
      }), (_times$thursday = times.thursday) === null || _times$thursday === void 0 ? void 0 : _times$thursday.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          onClick: function onClick() {
            return editTime && editTime(s);
          },
          pill: true,
          color: skin === "dark" ? "dark" : "light",
          className: "rounded-lg mx-50 d-flex flex-column my-50 align-items-center justify-content-center cursor-pointer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "my-50 text-danger font-medium-1 font-weight-bold",
            children: [s.start, " - ", s.end]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-info font-medium-1 font-weight-bold",
            children: s.sectionName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-success font-medium-1 font-weight-bold",
            children: s.roomName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-dark font-medium-1 font-weight-bold",
            children: s.teacherName
          })]
        });
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      md: "",
      className: "mb-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mx-50 ".concat(skin === "dark" ? "bg-dark" : "bg-light", " text-center text-dark  text-uppercase font-weight-bolder p-1 rounded-lg"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          id: "friday"
        })
      }), (_times$friday = times.friday) === null || _times$friday === void 0 ? void 0 : _times$friday.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          onClick: function onClick() {
            return editTime && editTime(s);
          },
          pill: true,
          color: skin === "dark" ? "dark" : "light",
          className: "rounded-lg mx-50 d-flex flex-column my-50 align-items-center justify-content-center cursor-pointer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "my-50 text-danger font-medium-1 font-weight-bold",
            children: [s.start, " - ", s.end]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-info font-medium-1 font-weight-bold",
            children: s.sectionName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-success font-medium-1 font-weight-bold",
            children: s.roomName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-dark font-medium-1 font-weight-bold",
            children: s.teacherName
          })]
        });
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      md: "",
      className: "mb-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mx-50 ".concat(skin === "dark" ? "bg-dark" : "bg-light", " text-center text-dark  text-uppercase font-weight-bolder p-1 rounded-lg"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          id: "saturday"
        })
      }), (_times$saturday = times.saturday) === null || _times$saturday === void 0 ? void 0 : _times$saturday.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          onClick: function onClick() {
            return editTime && editTime(s);
          },
          pill: true,
          color: skin === "dark" ? "dark" : "light",
          className: "rounded-lg mx-50 d-flex flex-column my-50 align-items-center justify-content-center cursor-pointer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "my-50 text-danger font-medium-1 font-weight-bold",
            children: [s.start, " - ", s.end]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-info font-medium-1 font-weight-bold",
            children: s.sectionName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-success font-medium-1 font-weight-bold",
            children: s.roomName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "mb-50 text-dark font-medium-1 font-weight-bold",
            children: s.teacherName
          })]
        });
      })]
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
    className: "my-3 w-100 d-flex align-items-center justify-content-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      id: "noRecords"
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (TimeTable);

/***/ }),

/***/ 55194:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ list; }
});

// EXTERNAL MODULE: ./src/@core/scss/react/apps/app-users.scss
var app_users = __webpack_require__(61360);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(64687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/printer.js
var printer = __webpack_require__(60216);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/plus.js
var plus = __webpack_require__(61896);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/filter.js
var icons_filter = __webpack_require__(64811);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__(27434);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-up.js
var chevron_up = __webpack_require__(82802);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Row.js
var Row = __webpack_require__(10267);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Col.js
var Col = __webpack_require__(51252);
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
// EXTERNAL MODULE: ./src/api/utlis.js
var utlis = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x.js
var x = __webpack_require__(78268);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-octagon.js
var alert_octagon = __webpack_require__(61643);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/clock.js
var clock = __webpack_require__(90791);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/calendar.js
var calendar = __webpack_require__(91140);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x-circle.js
var x_circle = __webpack_require__(13777);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Modal.js + 1 modules
var Modal = __webpack_require__(85677);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalHeader.js
var ModalHeader = __webpack_require__(32701);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalBody.js
var ModalBody = __webpack_require__(10684);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Alert.js
var Alert = __webpack_require__(17834);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Form.js
var Form = __webpack_require__(15538);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/FormGroup.js
var FormGroup = __webpack_require__(82669);
// EXTERNAL MODULE: ./src/views/customComponents/Field.js
var Field = __webpack_require__(48159);
// EXTERNAL MODULE: ./src/configs/api-urls.js
var api_urls = __webpack_require__(88295);
// EXTERNAL MODULE: ./src/redux/actions/layout/index.js
var layout = __webpack_require__(22974);
// EXTERNAL MODULE: ./src/views/customComponents/SectionSelect.js
var SectionSelect = __webpack_require__(16437);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit-2.js
var edit_2 = __webpack_require__(55654);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/tag.js
var tag = __webpack_require__(31109);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/clipboard.js
var clipboard = __webpack_require__(70616);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Label.js
var Label = __webpack_require__(67954);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalFooter.js
var ModalFooter = __webpack_require__(97985);
// EXTERNAL MODULE: ./src/utility/context/Can.js
var Can = __webpack_require__(6756);
// EXTERNAL MODULE: ./src/views/customComponents/Alert.js
var customComponents_Alert = __webpack_require__(16714);
// EXTERNAL MODULE: ./src/configs/actions.js
var actions = __webpack_require__(56176);
// EXTERNAL MODULE: ./src/configs/subjects.js
var subjects = __webpack_require__(14322);
// EXTERNAL MODULE: ./node_modules/react-select/dist/index-a7690a33.esm.js + 1 modules
var index_a7690a33_esm = __webpack_require__(39146);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.esm.js + 2 modules
var react_select_esm = __webpack_require__(39544);
// EXTERNAL MODULE: ./src/utility/Utils.js
var Utils = __webpack_require__(16724);
// EXTERNAL MODULE: ./src/utility/hooks/useSkin.js
var useSkin = __webpack_require__(47201);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/views/customComponents/RoomSelect.js




var _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





















var RoomSelect = function RoomSelect(_ref) {
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

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      submittedRoom = _useState2[0],
      setSubmittedRoom = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      errorRoom = _useState4[0],
      setErrorRoom = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      openRoom = _useState6[0],
      setOpenRoom = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      rooms = _useState8[0],
      setRooms = _useState8[1];

  var _useState9 = (0,react.useState)([]),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      roomFetched = _useState10[0],
      setRoomFetched = _useState10[1];

  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var _useState11 = (0,react.useState)(null),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      roomSelected = _useState12[0],
      setRoomSelected = _useState12[1];

  var _useState13 = (0,react.useState)({}),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      room = _useState14[0],
      setRoom = _useState14[1];

  var _useSkin = (0,useSkin/* useSkin */.Q)(),
      _useSkin2 = (0,slicedToArray/* default */.Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var intl = (0,useIntl/* default */.Z)();

  var _useState15 = (0,react.useState)(0),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      timer = _useState16[0],
      setTimer = _useState16[1];

  var onEditRoom = function onEditRoom() {
    var c = rooms.find(function (c) {
      return c.value === Number(roomSelected.value);
    });

    if (c) {
      (0,utlis/* apiCall */.k_)(utlis/* get */.U2, [api_urls/* ROOM_URL */.fl, c.value], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", function (data) {
        setRoom(data);
        setOpenRoom(true);
      }, null);
    }
  };

  var OptionComponent = function OptionComponent(_ref2) {
    var data = _ref2.data,
        props = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded);

    if (data.type === "add-room") {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default */.Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return setOpenRoom(true);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(plus/* default */.Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else if (data.type === "edit-room") {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default */.Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return onEditRoom();
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(edit_2/* default */.Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(index_a7690a33_esm.c.Option, _objectSpread(_objectSpread({}, props), {}, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: data.label
        })
      }));
    }
  };

  var onRoomClosed = function onRoomClosed() {
    setSubmittedRoom(false);
    setOpenRoom(false);
    setRoom({});
    setErrorRoom("");
  };

  function handleRoomsFetched(data, id) {
    setRoomFetched(data);
    var list = data.map(function (c) {
      return {
        value: c.id,
        label: c.name,
        description: c.description,
        start: c.start,
        end: c.end
      };
    });

    if (id && list.length > 0) {
      onRoomChange(list[0]);
    }

    if (edit && roomSelected && ability.can(actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION, subjects/* SUBJECTS.ROOM_SUBJECT */.k.ROOM_SUBJECT)) {
      list = [{
        value: "edit-room",
        label: intl.formatMessage({
          id: "editRoom"
        }),
        type: "edit-room",
        color: "flat-warning"
      }].concat((0,toConsumableArray/* default */.Z)(list));
    }

    if (add && ability.can(actions/* ACTIONS.WRITE_ACTION */.a.WRITE_ACTION, subjects/* SUBJECTS.ROOM_SUBJECT */.k.ROOM_SUBJECT)) {
      list = [{
        value: "add-room",
        label: intl.formatMessage({
          id: "addRoom"
        }),
        type: "add-room",
        color: "flat-success"
      }].concat((0,toConsumableArray/* default */.Z)(list));
    }

    setRooms(list);
  }

  var getRooms = function getRooms(id) {
    (0,utlis/* apiCall */.k_)(utlis/* getAll */.go, [!id ? api_urls/* ROOMS_URL */.Xc : api_urls/* ROOMS_URL */.Xc + "?id=" + id], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", function (res) {
      return handleRoomsFetched(res, id);
    }, null);
  };

  var onRoomSuccess = function onRoomSuccess(_ref3) {
    var id = _ref3.id;
    setOpenRoom(false);
    setRoomSelected(null);
    onChange(null);
    getRooms(id);
  };

  var deleteRoom = function deleteRoom() {
    (0,customComponents_Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteRoomQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* update */.Vx, [api_urls/* ROOM_URL */.fl, room.id, {
          deleted: true
        }], true, react_toastify_esm/* toast */.Am, dispatch, "roomDeletedSuccessfully", "somethingWrong", onRoomSuccess, null);
      }
    });
  };

  (0,react.useEffect)(function () {
    setRoomSelected(acc);
  }, [acc]);
  (0,react.useEffect)(function () {
    if (refresh) {
      getRooms();
    }
  }, [refresh]);

  var onRoomChange = function onRoomChange(e) {
    setRoomSelected(e);
    onChange(e);
  };

  var onRoomFail = function onRoomFail(err) {
    if (err.code === 414) {
      setErrorRoom("nameExist");
    } else if (err.code === 415) {
      setErrorRoom("roomDateOverlap");
    } else {
      setErrorRoom("somethingWrong");
    }
  };

  var saveRoom = function saveRoom(e) {
    e.preventDefault();
    setErrorRoom(false);
    setSubmittedRoom(true);

    if (room.name) {
      if (room.id) {
        (0,utlis/* apiCall */.k_)(utlis/* update */.Vx, [api_urls/* ROOM_URL */.fl, room.id, room], true, react_toastify_esm/* toast */.Am, dispatch, "roomUpdatedSuccessfully", "", onRoomSuccess, onRoomFail);
      } else {
        (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* ROOM_URL */.fl, room], true, react_toastify_esm/* toast */.Am, dispatch, "roomCreatedSuccessfully", "", onRoomSuccess, onRoomFail);
      }
    }
  };

  var filter = function filter(val) {
    if (val) {
      clearTimeout(timer);
      setTimer(setTimeout(function () {
        (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* ROOMS_URL */.Xc, 0, 20, [["name", "asc"]], {
          name: val
        }], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", function (data) {
          return handleRoomsFetched(data);
        }, null);
      }, 700));
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.Z, {
      children: [label !== false && /*#__PURE__*/(0,jsx_runtime.jsxs)(Label/* default */.Z, {
        for: "room",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "room"
        }), " ", requireStar ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "text-danger h6",
          children: "*"
        }) : ""]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          border: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid 1px"),
          borderRadius: "5px",
          display: "flex",
          alignItems: "center"
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fa-solid fa-chalkboard mx-1"
        }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            flexGrow: 1,
            borderLeft: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid ").concat(intl.locale === "ar" ? "0px" : "1px"),
            borderRight: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid ").concat(intl.locale === "ar" ? "1px" : "0px")
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_select_esm/* default */.ZP, {
            isDisabled: disabled,
            styles: {
              control: function control(provided) {
                return _objectSpread(_objectSpread({}, provided), {}, {
                  border: "none"
                });
              }
            },
            onMenuOpen: function onMenuOpen() {
              return handleRoomsFetched(roomFetched);
            },
            id: "room",
            placeholder: intl.formatMessage({
              id: "selectRoom"
            }),
            value: roomSelected,
            components: {
              Option: OptionComponent
            },
            noOptionsMessage: function noOptionsMessage() {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "noRecords"
              });
            },
            onChange: function onChange(e) {
              return onRoomChange(e);
            },
            isClearable: true,
            theme: Utils/* selectThemeColors */.ss,
            options: rooms,
            classNamePrefix: "select",
            onInputChange: function onInputChange(v) {
              return filter(v);
            }
          })
        })]
      }), invalid && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "customSelectError",
        children: invalidText
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
      autoFocus: false,
      isOpen: openRoom,
      toggle: function toggle() {
        return setOpenRoom(!openRoom);
      },
      onClosed: onRoomClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ModalHeader/* default */.Z, {
        toggle: function toggle() {
          return setOpenRoom(!openRoom);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: room.id ? "editRoom" : "addRoom"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalBody/* default */.Z, {
        children: [errorRoom && /*#__PURE__*/(0,jsx_runtime.jsxs)(Alert/* default */.Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: errorRoom
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
          autoFocus: true,
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "name"
          }),
          value: room.name,
          id: "name",
          name: "name",
          placeholder: "",
          requireStar: true,
          onChange: function onChange(e) {
            return setRoom(_objectSpread(_objectSpread({}, room), {}, {
              name: e.target.value
            }));
          },
          invalid: submittedRoom && !room.name,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "description"
          }),
          value: room.description,
          id: "description",
          type: "textarea",
          name: "description",
          placeholder: "",
          onChange: function onChange(e) {
            return setRoom(_objectSpread(_objectSpread({}, room), {}, {
              description: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(clipboard/* default */.Z, {
              size: 14
            })
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalFooter/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
          onClick: saveRoom,
          color: "primary",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "save"
          })
        }), room.id && ability.can(actions/* ACTIONS.DELETE_ACTION */.a.DELETE_ACTION, subjects/* SUBJECTS.ROOM_SUBJECT */.k.ROOM_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
          color: "danger",
          type: "button",
          onClick: deleteRoom,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "delete"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var customComponents_RoomSelect = (RoomSelect);
// EXTERNAL MODULE: ./node_modules/@casl/react/dist/es6m/index.mjs
var es6m = __webpack_require__(22490);
;// CONCATENATED MODULE: ./src/views/apps/time/list/Sidebar.js
























var Sidebar = function Sidebar(props) {
  var open = props.open,
      toggleSidebar = props.toggleSidebar,
      refresh = props.refresh,
      time = props.time,
      onClosed = props.onClosed,
      dispatch = props.dispatch;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      submitted = _useState2[0],
      setSubmitted = _useState2[1];

  var _useState3 = (0,react.useState)(time.section || null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      section = _useState4[0],
      setSection = _useState4[1];

  var _useState5 = (0,react.useState)(time.duration || 0),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      duration = _useState6[0],
      setDuration = _useState6[1];

  var _useState7 = (0,react.useState)(time.trining || 0),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      training = _useState8[0],
      setTraining = _useState8[1];

  var _useState9 = (0,react.useState)(time.times || []),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      times = _useState10[0],
      setTimes = _useState10[1];

  var intl = (0,useIntl/* default */.Z)();

  var _useState11 = (0,react.useState)(null),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      error = _useState12[0],
      setError = _useState12[1];

  var _useState13 = (0,react.useState)([]),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      slots = _useState14[0],
      setSlots = _useState14[1];

  var ability = (0,es6m/* useAbility */.we)(Can/* AbilityContext */.v);

  var onClose = function onClose() {
    setSubmitted(false);
    onClosed();
    setSection(null);
    setError(null);
    setTimes([]);
  };

  var handleTimesFetched = function handleTimesFetched(res) {
    setSection(res.section);
    setTimes([{
      time: res.start,
      day: res.day,
      room: res.room,
      roomName: res.roomName
    }]);
    setDuration(res.duration);
  };

  var initTime = function initTime() {
    if (time.id) {
      (0,utlis/* apiCall */.k_)(utlis/* get */.U2, [api_urls/* TIME_URL */.Hv, time.id], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", handleTimesFetched, toggleSidebar);
    }
  };

  (0,react.useEffect)(function () {
    if (open) {
      setSlots((0,Utils/* getTimeSlots */.aN)("00:00", "23:45", 15));
      initTime();
    }
  }, [open]);
  var isSaveButtonDisabled = !section;

  var onTimeSuccess = function onTimeSuccess() {
    toggleSidebar();
    refresh();
  };

  var onCreate = function onCreate(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!isSaveButtonDisabled) {
      if (!times.length || times.some(function (t) {
        return !t.day || !t.time;
      })) {
        setError("timesMissing");
        return;
      }

      (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* TIME_URL */.Hv, {
        section: section,
        times: times
      }], true, react_toastify_esm/* toast */.Am, dispatch, "timeCreatedSuccessfully", "", onTimeSuccess, onFail);
    }
  };

  var onUpdate = function onUpdate(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!isSaveButtonDisabled) {
      if (!times.length || times.some(function (t) {
        return !t.day || !t.time;
      })) {
        setError("timesMissing");
        return;
      }

      (0,utlis/* apiCall */.k_)(utlis/* update */.Vx, [api_urls/* TIME_URL */.Hv, time.id, {
        section: section,
        room: times[0].room,
        start: times[0].time,
        day: times[0].day
      }], true, react_toastify_esm/* toast */.Am, dispatch, "timeUpdatedSuccessfully", "", onTimeSuccess, onFail);
    }
  };

  var onFail = function onFail(err) {
    dispatch((0,layout/* handleLoader */.EV)(false));

    if (err.code === 414) {
      setError("timeExist");
    } else {
      setError("somethingWrong");
    }
  };

  var isAvailable = function isAvailable(t, day, room, i) {
    var query = time.id ? "?id=" + time.id : "";
    (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* TIME_AVAILABLE_URL */.te + query, {
      day: day,
      time: t,
      room: room,
      section: section
    }], true, react_toastify_esm/* toast */.Am, dispatch, null, "", function () {
      times[i].time = t;
      times[i].day = day;
      times[i].room = room;
      setTimes(function () {
        return (0,toConsumableArray/* default */.Z)(times);
      });
    }, function (e) {
      setError(e.code === 414 ? "timeExist" : "somethingWrong");
      times[i].time = "";
      setTimes(function () {
        return (0,toConsumableArray/* default */.Z)(times);
      });
    });
  };

  function getIntervals(v, i) {
    return times.reduce(function (a, b, j) {
      if (b.day && b.day === v && b.time && i !== j) {
        var hour = b.time.split(":")[0];
        var minutes = b.time.split(":")[1];
        var to = moment_default()().set({
          hours: hour,
          minutes: minutes,
          seconds: 0
        }).add(duration, "minutes").format("HH:mm");
        a.push([b.time, to]);
      }

      return a;
    }, []);
  }

  function getTo(time) {
    var hour = time.split(":")[0];
    var minutes = time.split(":")[1];
    return moment_default()().set({
      hours: hour,
      minutes: minutes,
      seconds: 0
    }).add(duration, "minutes").format("HH:mm");
  }

  var handleDay = function handleDay(i, v) {
    var intervals = getIntervals(v, i);
    var to = getTo(times[i].time);
    var exist = times.find(function (t) {
      return t.id !== times[i].id && t.room === times[i].room && t.day === v && (0,Utils/* isOverlapping */.dI)(intervals, [times[i].time, to]);
    });
    setError("");
    times[i].day = v;
    setTimes(function () {
      return (0,toConsumableArray/* default */.Z)(times);
    });

    if (v && times[i].time && times[i].room) {
      if (exist) {
        setError("timeExist");
        times[i].day = "";
        setTimes(function () {
          return (0,toConsumableArray/* default */.Z)(times);
        });
      } else {
        isAvailable(times[i].time, v, times[i].room, i);
      }
    }
  };

  var handleRoom = function handleRoom(i, v, label) {
    var intervals = getIntervals(v, i);
    var to = getTo(times[i].time);
    var exist = times.find(function (t) {
      return t.id !== times[i].id && t.day === v && t.room === times[i].room && (0,Utils/* isOverlapping */.dI)(intervals, [times[i].time, to]);
    });
    setError("");
    times[i].room = v;
    times[i].roomName = label;
    setTimes(function () {
      return (0,toConsumableArray/* default */.Z)(times);
    });

    if (v && times[i].time && times[i].room) {
      if (exist) {
        setError("timeExist");
        times[i].room = "";
        times[i].roomName = null;
        setTimes(function () {
          return (0,toConsumableArray/* default */.Z)(times);
        });
      } else {
        isAvailable(times[i].time, times[i].day, v, i);
      }
    }
  };

  var handleTime = function handleTime(i, v) {
    var intervals = getIntervals(times[i].day, i);
    var to = getTo(v);
    var exist = times.find(function (t) {
      return t.id !== times[i].id && t.room === times[i].room && t.day === times[i].day && (0,Utils/* isOverlapping */.dI)(intervals, [v, to]);
    });
    setError("");
    times[i].time = v;
    setTimes(function () {
      return (0,toConsumableArray/* default */.Z)(times);
    });

    if (v && times[i].day && times[i].room) {
      if (exist) {
        setError("timeExist");
        times[i].time = "";
        setTimes(function () {
          return (0,toConsumableArray/* default */.Z)(times);
        });
      } else {
        isAvailable(v, times[i].day, times[i].room, i);
      }
    }
  };

  var deleteTime = function deleteTime(i) {
    times.splice(i, 1);
    setTimes(function () {
      return (0,toConsumableArray/* default */.Z)(times);
    });
  };

  var getTimeSlot = function getTimeSlot(s) {
    var hour = s.split(":")[0];
    var minutes = s.split(":")[1];
    var to = moment_default()().set({
      hours: hour,
      minutes: minutes,
      seconds: 0
    }).add(duration, "minutes").format("HH:mm");
    return "".concat(s, " - ").concat(to);
  };

  var onSectionChange = function onSectionChange(e) {
    setSection(e === null || e === void 0 ? void 0 : e.value);
    setDuration(e === null || e === void 0 ? void 0 : e.duration);
    setTraining(e === null || e === void 0 ? void 0 : e.training);
  };

  var onDeleteTime = function onDeleteTime() {
    (0,customComponents_Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteTimeQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* remove */.Od, [api_urls/* TIME_URL */.Hv, time.id], true, react_toastify_esm/* toast */.Am, dispatch, "timeDeletedSuccessfully", "somethingWrong", onTimeSuccess, null);
      }
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
    isOpen: open,
    toggle: toggleSidebar,
    contentClassName: "p-0",
    onClosed: onClose,
    className: "modal-lg modal-dialog-centered",
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
          id: "".concat(time.id ? "edit" : "add", "Time")
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalBody/* default */.Z, {
      className: "flex-grow-1 pb-sm-0 pb-3",
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
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* default */.Z, {
        onSubmit: time.id ? onUpdate : onCreate,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionSelect/* default */.Z, {
          acc: time.id ? {
            value: time.section,
            label: time.sectionName
          } : null,
          disabled: !!time.id,
          requireStar: true,
          invalid: submitted && !section,
          invalidText: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          refresh: true,
          dispatch: dispatch,
          onChange: function onChange(e) {
            return onSectionChange(e);
          }
        }), section && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "divider",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "divider-text",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "full-width d-flex align-items-center justify-content-center my-1",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(clock/* default */.Z, {
                  size: 14
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  className: "align-middle mx-25",
                  children: intl.formatMessage({
                    id: "times"
                  })
                })]
              })
            })
          }), (times || []).map(function (t, i) {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(customComponents_RoomSelect, {
                  add: true,
                  acc: {
                    value: times[i].room,
                    label: times[i].roomName
                  },
                  requireStar: true,
                  invalid: submitted && !times[i].room,
                  invalidText: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "required"
                  }),
                  refresh: true,
                  dispatch: dispatch,
                  onChange: function onChange(e) {
                    return handleRoom(i, e === null || e === void 0 ? void 0 : e.value, e === null || e === void 0 ? void 0 : e.label);
                  }
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                className: "px-50",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Field/* default */.Z, {
                  prepend: {
                    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(calendar/* default */.Z, {
                      size: 14
                    })
                  },
                  type: "select",
                  isClearable: false,
                  requireStar: true,
                  invalid: submitted && !times[i].day,
                  invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "required"
                  }),
                  label: intl.formatMessage({
                    id: "day"
                  }),
                  theme: Utils/* selectThemeColors */.ss,
                  value: times[i].day,
                  onChange: function onChange(e) {
                    return handleDay(i, e.target.value);
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                    value: ""
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                    value: "sunday",
                    children: intl.formatMessage({
                      id: "sunday"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                    value: "monday",
                    children: intl.formatMessage({
                      id: "monday"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                    value: "tuesday",
                    children: intl.formatMessage({
                      id: "tuesday"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                    value: "wednesday",
                    children: intl.formatMessage({
                      id: "wednesday"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                    value: "thursday",
                    children: intl.formatMessage({
                      id: "thursday"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                    value: "friday",
                    children: intl.formatMessage({
                      id: "friday"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                    value: "saturday",
                    children: intl.formatMessage({
                      id: "saturday"
                    })
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                className: "px-50",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "d-flex align-items-center justify-content-start",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: "flex-grow-1",
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Field/* default */.Z, {
                      prepend: {
                        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(clock/* default */.Z, {
                          size: 14
                        })
                      },
                      type: "select",
                      isClearable: false,
                      label: intl.formatMessage({
                        id: "stopTime"
                      }),
                      requireStar: true,
                      invalid: submitted && !times[i].time,
                      invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "required"
                      }),
                      theme: Utils/* selectThemeColors */.ss,
                      value: times[i].time,
                      onChange: function onChange(e) {
                        return handleTime(i, e.target.value);
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                        value: ""
                      }), slots.map(function (s, i) {
                        return /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
                          value: s,
                          children: getTimeSlot(s)
                        }, i);
                      })]
                    })
                  }), !time.id && /*#__PURE__*/(0,jsx_runtime.jsx)(x_circle/* default */.Z, {
                    onClick: function onClick() {
                      return deleteTime(i);
                    },
                    className: "ml-50 text-danger cursor-pointer",
                    size: 24
                  })]
                })
              })]
            }, i);
          }), !time.id && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "full-width d-flex align-items-center justify-content-center my-1",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
              className: "round center mr-50",
              color: "success",
              onClick: function onClick() {
                return setTimes([].concat((0,toConsumableArray/* default */.Z)(times), [{
                  id: new Date().getTime(),
                  day: "",
                  time: ""
                }]));
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "align-middle mx-25",
                children: intl.formatMessage({
                  id: "addTime"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(plus/* default */.Z, {
                size: 14
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.Z, {
          className: "d-flex align-items-center",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [(ability.can(actions/* ACTIONS.WRITE_ACTION */.a.WRITE_ACTION, subjects/* SUBJECTS.TIME_SUBJECT */.k.TIME_SUBJECT) || ability.can(actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION, subjects/* SUBJECTS.TIME_SUBJECT */.k.TIME_SUBJECT)) && /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
              className: "mt-2",
              type: "submit",
              color: "primary",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "save"
              })
            }), time.id && ability.can(actions/* ACTIONS.DELETE_ACTION */.a.DELETE_ACTION, subjects/* SUBJECTS.TIME_SUBJECT */.k.TIME_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
              onClick: onDeleteTime,
              className: "mt-2 mx-1",
              outline: true,
              color: "danger",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "delete"
              })
            })]
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var list_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./src/views/customComponents/SessionSelect.js
var SessionSelect = __webpack_require__(54615);
// EXTERNAL MODULE: ./src/views/customComponents/TeacherSelect.js
var TeacherSelect = __webpack_require__(41757);
// EXTERNAL MODULE: ./node_modules/react-to-print/lib/index.js
var lib = __webpack_require__(47116);
// EXTERNAL MODULE: ./src/views/apps/time/list/TimeTable.js
var TimeTable = __webpack_require__(61160);
// EXTERNAL MODULE: ./src/configs/acl/roles.js
var roles = __webpack_require__(71107);
;// CONCATENATED MODULE: ./src/views/apps/time/list/Table.js





function Table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Table_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports
 // ** Invoice List Sidebar
// ** Columns
// ** Store & Actions

 // ** Third Party Components


 // ** Styles






















var CustomHeader = function CustomHeader(_ref) {
  var onAdd = _ref.onAdd,
      print = _ref.print,
      ability = _ref.ability;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "list-table-header w-90 mr-1 ml-50 mt-2 mb-75",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
        xl: "3",
        className: "d-flex align-items-center p-0"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
        xl: "9",
        className: "d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",
        children: [ability.can(actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION, subjects/* SUBJECTS.PRINT_SUBJECT */.k.PRINT_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "mr-1",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
            outline: true,
            color: "dark",
            onClick: print,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(printer/* default */.Z, {
              size: 15
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "align-middle ml-25",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "print"
              })
            })]
          })
        }), ability.can(actions/* ACTIONS.WRITE_ACTION */.a.WRITE_ACTION, subjects/* SUBJECTS.TIME_SUBJECT */.k.TIME_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
          color: "primary",
          onClick: onAdd,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(plus/* default */.Z, {
            size: 15
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle ml-25",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "addTime"
            })
          })]
        })]
      })]
    })
  });
};

var TimeList = function TimeList() {
  var _store$userData, _store$userData2, _store$userData2$prof;

  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var _useState = (0,react.useState)(Number.MAX_SAFE_INTEGER),
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
      time = _useState10[0],
      setTime = _useState10[1];

  var dispatch = (0,es/* useDispatch */.I0)();

  var _useState11 = (0,react.useState)(false),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      sidebarOpen = _useState12[0],
      setSidebarOpen = _useState12[1];

  var _useState13 = (0,react.useState)(false),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      detailsOpen = _useState14[0],
      setDetailsOpen = _useState14[1];

  var _useState15 = (0,react.useState)(0),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      timer = _useState16[0],
      setTimer = _useState16[1];

  var intl = (0,useIntl/* default */.Z)();

  var _useState17 = (0,react.useState)({}),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      filter = _useState18[0],
      setFilter = _useState18[1];

  var _useState19 = (0,react.useState)(null),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      session = _useState20[0],
      setSession = _useState20[1];

  var _useState21 = (0,react.useState)(false),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      filterOpen = _useState22[0],
      setFilterOpen = _useState22[1];

  var store = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  });
  var role = (_store$userData = store.userData) === null || _store$userData === void 0 ? void 0 : _store$userData.role;
  var id = (_store$userData2 = store.userData) === null || _store$userData2 === void 0 ? void 0 : (_store$userData2$prof = _store$userData2.profile) === null || _store$userData2$prof === void 0 ? void 0 : _store$userData2$prof.id;
  var student = role === roles/* ROLES.STUDENT_ROLE */.K.STUDENT_ROLE ? id : "";
  var teacher = role === roles/* ROLES.TEACHER_ROLE */.K.TEACHER_ROLE ? id : "";
  var handlePrint = (0,lib.useReactToPrint)({
    content: function content() {
      return document.getElementById("contentZ");
    }
  });

  var handleData = function handleData(res) {
    setData({
      rows: res || [],
      count: res.length ? res[0].count : 0
    });
  };

  var getData = function getData(pageIndex, pageSize, order, filter) {
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* TIMES_URL */.nM, pageIndex, pageSize, order, Table_objectSpread(Table_objectSpread({}, filter), {}, {
      student: student,
      teacher: teacher
    })], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", handleData, null);
  };

  var getCurrentSession = function getCurrentSession() {
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* SESSIONS_URL */.IP, pageIndex, pageSize, order, {
      active: true
    }], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", onCurrentSessionSuccess, null);
  };

  var onCurrentSessionSuccess = function onCurrentSessionSuccess(res) {
    var currentSession = res.length ? res[0] : null;

    if (currentSession) {
      setSession({
        value: currentSession.id,
        label: currentSession.name
      });
    }

    var f = currentSession ? {
      session: currentSession.id
    } : {};
    getData(pageIndex, pageSize, order, f);
  };

  (0,react.useEffect)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getCurrentSession();

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
  };

  var handleTeacher = function handleTeacher(val) {
    setPageIndex(1);
    setFilter(Table_objectSpread(Table_objectSpread({}, filter), {}, {
      teacher: val
    }));
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, Table_objectSpread(Table_objectSpread({}, filter), {}, {
        teacher: val
      }));
    }, 700));
  };

  var handleStudent = function handleStudent(val) {
    setPageIndex(1);
    setFilter(Table_objectSpread(Table_objectSpread({}, filter), {}, {
      student: val
    }));
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, Table_objectSpread(Table_objectSpread({}, filter), {}, {
        student: val
      }));
    }, 700));
  };

  var handleRoom = function handleRoom(val) {
    setPageIndex(1);
    setStudent(val);
    setFilter(Table_objectSpread(Table_objectSpread({}, filter), {}, {
      room: val
    }));
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, Table_objectSpread(Table_objectSpread({}, filter), {}, {
        room: val
      }));
    }, 700));
  };

  var handleSection = function handleSection(val) {
    setPageIndex(1);
    setSection(val);
    setFilter(Table_objectSpread(Table_objectSpread({}, filter), {}, {
      section: val === null || val === void 0 ? void 0 : val.value
    }));
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, Table_objectSpread(Table_objectSpread({}, filter), {}, {
        section: val
      }));
    }, 700));
  };

  var handleSession = function handleSession(val) {
    setPageIndex(1);
    setSession(val);
    setFilter(Table_objectSpread(Table_objectSpread({}, filter), {}, {
      session: val === null || val === void 0 ? void 0 : val.value
    }));
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, Table_objectSpread(Table_objectSpread({}, filter), {}, {
        session: val === null || val === void 0 ? void 0 : val.value
      }));
    }, 700));
  };

  var editTime = function editTime(s) {
    setTime(s);
    toggleSidebar();
  };

  var viewTime = function viewTime(s) {
    setTime(s);
    toggleDetails();
  };

  var onSideClosed = function onSideClosed() {
    return setTime({});
  };

  var onAdd = function onAdd() {
    setSidebarOpen(true);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "app-expense-list",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [student || teacher ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}) : /*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* default */.Z, {
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
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SessionSelect/* default */.Z, {
                acc: session,
                refresh: true,
                label: false,
                dispatch: dispatch,
                onChange: function onChange(e) {
                  return handleSession(e);
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "3",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(TeacherSelect/* default */.Z, {
                refresh: true,
                label: false,
                dispatch: dispatch,
                onChange: function onChange(e) {
                  return handleTeacher(e === null || e === void 0 ? void 0 : e.value);
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "3",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SectionSelect/* default */.Z, {
                refresh: true,
                label: false,
                dispatch: dispatch,
                onChange: function onChange(e) {
                  return handleSection(e === null || e === void 0 ? void 0 : e.value);
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "3",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(customComponents_RoomSelect, {
                refresh: true,
                label: false,
                dispatch: dispatch,
                onChange: function onChange(e) {
                  return handleRoom(e === null || e === void 0 ? void 0 : e.value);
                }
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CustomHeader, {
          ability: ability,
          pageIndex: pageIndex,
          onAdd: onAdd,
          print: handlePrint // handlePerPage={handlePerPage}
          ,
          rowsPerPage: pageSize // handleFilter={handleFilter}
          ,
          data: data,
          intl: intl
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TimeTable/* default */.Z, {
          editTime: editTime,
          list: data.rows || []
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(list_Sidebar, {
        dispatch: dispatch,
        open: sidebarOpen,
        toggleSidebar: toggleSidebar,
        onClosed: onSideClosed,
        refresh: getCurrentSession,
        time: time
      })]
    })
  });
};

/* harmony default export */ var Table = (TimeList);
;// CONCATENATED MODULE: ./src/views/apps/time/list/index.js
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

/***/ 16437:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(42982);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45987);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55678);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(61896);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55654);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(61643);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(31109);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(91140);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(70616);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97975);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(17354);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(82669);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(67954);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(85677);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(32701);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(10684);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(17834);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(97985);
/* harmony import */ var _core_scss_react_libs_react_select_react_select_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22299);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(44012);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48159);
/* harmony import */ var _api_utlis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16550);
/* harmony import */ var _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88295);
/* harmony import */ var _utility_context_Can__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6756);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16714);
/* harmony import */ var _configs_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56176);
/* harmony import */ var _configs_subjects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14322);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(39146);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(39544);
/* harmony import */ var _utility_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16724);
/* harmony import */ var _utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47201);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85893);




var _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





















var SectionSelect = function SectionSelect(_ref) {
  var refresh = _ref.refresh,
      dispatch = _ref.dispatch,
      acc = _ref.acc,
      onChange = _ref.onChange,
      requireStar = _ref.requireStar,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      edit = _ref.edit,
      add = _ref.add,
      left = _ref.left,
      verifyMax = _ref.verifyMax,
      label = _ref.label,
      disabled = _ref.disabled,
      course = _ref.course;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState, 2),
      submittedSection = _useState2[0],
      setSubmittedSection = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState3, 2),
      errorSection = _useState4[0],
      setErrorSection = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState5, 2),
      openSection = _useState6[0],
      setOpenSection = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState7, 2),
      sections = _useState8[0],
      setSections = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState9, 2),
      sectionFetched = _useState10[0],
      setSectionFetched = _useState10[1];

  var ability = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utility_context_Can__WEBPACK_IMPORTED_MODULE_7__/* .AbilityContext */ .v);

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState11, 2),
      sectionSelected = _useState12[0],
      setSectionSelected = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState13, 2),
      section = _useState14[0],
      setSection = _useState14[1];

  var _useSkin = (0,_utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_12__/* .useSkin */ .Q)(),
      _useSkin2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState15, 2),
      timer = _useState16[0],
      setTimer = _useState16[1];

  var onEditSection = function onEditSection() {
    var c = sections.find(function (c) {
      return c.value === Number(sectionSelected.value);
    });

    if (c) {
      (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .get */ .U2, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SECTION_URL */ .Yc, c.value], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
        setSection(data);
        setOpenSection(true);
      }, null);
    }
  };

  var OptionComponent = function OptionComponent(_ref2) {
    var data = _ref2.data,
        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(_ref2, _excluded);

    if (data.type === "add-section") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return setOpenSection(true);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else if (data.type === "edit-section") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return onEditSection();
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("span", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("i", {
              className: "fa-brands fa-react mr-1"
            }), data.training, " - ", data.course]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("span", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("i", {
              className: "fa-solid fa-person-chalkboard mr-1"
            }), data.teacher]
          }), left && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            color: data.left > 0 ? "light-success" : "light-danger",
            pill: true,
            className: "mt-50",
            children: [data.left || 0, " ", intl.formatMessage({
              id: "hasLeft"
            })]
          })]
        })
      }));
    }
  };

  var onSectionClosed = function onSectionClosed() {
    setSubmittedSection(false);
    setOpenSection(false);
    setSection({});
    setErrorSection("");
  };

  var maxReached = function maxReached(e) {
    (0,_Alert__WEBPACK_IMPORTED_MODULE_8__/* .SweetAlert */ .o)(intl.formatMessage({
      id: "maxStudent"
    }), intl.formatMessage({
      id: "maxStudentReachedQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        setSectionSelected(e);
        onChange(e);
      }
    });
  };

  function handleSectionsFetched(data) {
    setSectionFetched(data);
    var list = data.map(function (c) {
      return {
        value: c.id,
        label: c.name,
        duration: c.duration,
        training: c.trainingName,
        teacher: c.teacherName,
        course: c.courseName,
        capacity: c.capacity,
        students: c.students,
        left: c.left,
        start: c.start,
        end: c.end
      };
    });

    if (edit && sectionSelected && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.EDIT_ACTION */ .a.EDIT_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.SECTION_SUBJECT */ .k.SECTION_SUBJECT)) {
      list = [{
        value: "edit-section",
        label: intl.formatMessage({
          id: "editSection"
        }),
        type: "edit-section",
        color: "flat-warning"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(list));
    }

    if (add && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.WRITE_ACTION */ .a.WRITE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.SECTION_SUBJECT */ .k.SECTION_SUBJECT)) {
      list = [{
        value: "add-section",
        label: intl.formatMessage({
          id: "addSection"
        }),
        type: "add-section",
        color: "flat-success"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(list));
    }

    setSections(list);
  }

  var getSections = function getSections() {
    (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAllPaged */ .Ki, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SECTIONS_URL */ .WR, 0, 20, [], {
      course: course || ""
    }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", handleSectionsFetched, null);
  };

  var onSectionSuccess = function onSectionSuccess() {
    setOpenSection(false);
    setSectionSelected(null);
    onChange(null);
    getSections();
  };

  var deleteSection = function deleteSection() {
    (0,_Alert__WEBPACK_IMPORTED_MODULE_8__/* .SweetAlert */ .o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteSectionQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SECTION_URL */ .Yc, section.id, {
          deleted: true
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "sectionDeletedSuccessfully", "somethingWrong", onSectionSuccess, null);
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setSectionSelected(acc);
  }, [acc]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (refresh) {
      getSections();
    }
  }, [refresh]);

  var onSectionChange = function onSectionChange(e) {
    if (e && Number(e.left) < 1 && verifyMax) {
      maxReached(e);
    } else {
      setSectionSelected(e);
      onChange(e);
    }
  };

  var onSectionFail = function onSectionFail(err) {
    if (err.code === 414) {
      setErrorSection("nameExist");
    } else if (err.code === 415) {
      setErrorSection("sectionDateOverlap");
    } else {
      setErrorSection("somethingWrong");
    }
  };

  var saveSection = function saveSection(e) {
    e.preventDefault();
    setErrorSection(false);
    setSubmittedSection(true);

    if (section.name && section.start && section.end) {
      if (moment__WEBPACK_IMPORTED_MODULE_13___default()(section.end).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_13___default()(section.start))) {
        setErrorSection("sectionDateError");
        return;
      }

      if (section.id) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SECTION_URL */ .Yc, section.id, section], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "sectionUpdatedSuccessfully", "", onSectionSuccess, onSectionFail);
      } else {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .insert */ .$T, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SECTION_URL */ .Yc, section], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "sectionCreatedSuccessfully", "", onSectionSuccess, onSectionFail);
      }
    }
  };

  var filter = function filter(val) {
    if (val) {
      clearTimeout(timer);
      setTimer(setTimeout(function () {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAllPaged */ .Ki, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SECTIONS_URL */ .WR, 0, 20, [["name", "asc"]], {
          name: val,
          course: course || ""
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
          return handleSectionsFetched(data);
        }, null);
      }, 700));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
      children: [label !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        for: "section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          id: "section"
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
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("i", {
          className: "fa-solid fa-users-rectangle px-1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            flexGrow: 1,
            borderLeft: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid ").concat(intl.locale === "ar" ? "0px" : "1px"),
            borderRight: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid ").concat(intl.locale === "ar" ? "1px" : "0px")
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .ZP, {
            isDisabled: disabled,
            styles: {
              control: function control(provided) {
                return _objectSpread(_objectSpread({}, provided), {}, {
                  border: "none"
                });
              }
            },
            onMenuOpen: function onMenuOpen() {
              return handleSectionsFetched(sectionFetched);
            },
            id: "section",
            placeholder: intl.formatMessage({
              id: "selectSection"
            }),
            value: sectionSelected,
            components: {
              Option: OptionComponent
            },
            noOptionsMessage: function noOptionsMessage() {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                id: "noRecords"
              });
            },
            onChange: function onChange(e) {
              return onSectionChange(e);
            },
            isClearable: true,
            theme: _utility_Utils__WEBPACK_IMPORTED_MODULE_11__/* .selectThemeColors */ .ss,
            options: sections,
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
      autoFocus: false,
      isOpen: openSection,
      toggle: function toggle() {
        return setOpenSection(!openSection);
      },
      onClosed: onSectionClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
        toggle: function toggle() {
          return setOpenSection(!openSection);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          id: section.id ? "editSection" : "addSection"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
        children: [errorSection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                  id: errorSection
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
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
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "name"
          }),
          value: section.name,
          id: "name",
          name: "name",
          placeholder: "",
          requireStar: true,
          onChange: function onChange(e) {
            return setSection(_objectSpread(_objectSpread({}, section), {}, {
              name: e.target.value
            }));
          },
          invalid: submittedSection && !section.name,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "startDate"
          }),
          id: "startDate1",
          name: "startDate1",
          className: "form-control",
          onChange: function onChange(date) {
            return setSection(_objectSpread(_objectSpread({}, section), {}, {
              start: date[0]
            }));
          },
          value: section.start,
          options: {
            enableTime: false,
            time_24hr: true // disable: [
            //   {
            //     from: new Date(-8640000000000000),
            //     to: new Date().setDate(new Date().getDate() - 1),
            //   },
            // ],

          },
          invalid: submittedSection && !section.start,
          requireStar: true,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
              size: 14
            })
          },
          type: "flatPicker"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "endDate"
          }),
          id: "endDate1",
          name: "endDate1",
          className: "form-control",
          onChange: function onChange(date) {
            return setSection(_objectSpread(_objectSpread({}, section), {}, {
              end: date[0]
            }));
          },
          value: section.end,
          options: {
            enableTime: false,
            time_24hr: true // disable: [
            //   {
            //     from: new Date(-8640000000000000),
            //     to: new Date(
            //       new Date(section.start).setDate(section.start.getDate() - 1)
            //     ),
            //   },
            // ],

          },
          invalid: submittedSection && !section.end,
          requireStar: true,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
              size: 14
            })
          },
          type: "flatPicker"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "description"
          }),
          value: section.description,
          id: "description",
          type: "textarea",
          name: "description",
          placeholder: "",
          onChange: function onChange(e) {
            return setSection(_objectSpread(_objectSpread({}, section), {}, {
              description: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
              size: 14
            })
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Ripple */ .Z.Ripple, {
          onClick: saveSection,
          color: "primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "save"
          })
        }), section.id && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.DELETE_ACTION */ .a.DELETE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.SECTION_SUBJECT */ .k.SECTION_SUBJECT) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Ripple */ .Z.Ripple, {
          color: "danger",
          type: "button",
          onClick: deleteSection,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "delete"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SectionSelect);

/***/ })

}]);