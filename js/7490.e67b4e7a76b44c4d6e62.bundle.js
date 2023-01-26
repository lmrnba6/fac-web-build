"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[7490],{

/***/ 54464:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(42982);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45987);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55678);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(61896);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55654);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(61643);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(31109);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(39364);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(83220);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(90791);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(70616);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97975);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(17354);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(82669);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(67954);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(85677);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(32701);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(10684);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(17834);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(97985);
/* harmony import */ var _core_scss_react_libs_react_select_react_select_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22299);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(44012);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48159);
/* harmony import */ var _api_utlis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16550);
/* harmony import */ var _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88295);
/* harmony import */ var _utility_context_Can__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6756);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16714);
/* harmony import */ var _configs_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56176);
/* harmony import */ var _configs_subjects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14322);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39146);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(39544);
/* harmony import */ var _utility_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16724);
/* harmony import */ var _utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47201);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85893);




var _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















var CourseSelect = function CourseSelect(_ref) {
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
      disabled = _ref.disabled,
      training = _ref.training;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState, 2),
      submittedCourse = _useState2[0],
      setSubmittedCourse = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState3, 2),
      errorCourse = _useState4[0],
      setErrorCourse = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState5, 2),
      courseOpen = _useState6[0],
      setCourseOpen = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState7, 2),
      courses = _useState8[0],
      setCourses = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState9, 2),
      courseFetched = _useState10[0],
      setCourseFetched = _useState10[1];

  var ability = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utility_context_Can__WEBPACK_IMPORTED_MODULE_7__/* .AbilityContext */ .v);

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState11, 2),
      courseSelected = _useState12[0],
      setCourseSelected = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState13, 2),
      course = _useState14[0],
      setCourse = _useState14[1];

  var _useSkin = (0,_utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_12__/* .useSkin */ .Q)(),
      _useSkin2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState15, 2),
      timer = _useState16[0],
      setTimer = _useState16[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setCourse(_objectSpread(_objectSpread({}, course), {}, {
      training: training
    }));
  }, [training]);

  var onEditCourse = function onEditCourse() {
    var c = courses.find(function (c) {
      return c.value === Number(courseSelected.value);
    });

    if (c) {
      (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .get */ .U2, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .COURSE_URL */ .gO, c.value], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
        setCourse(data);
        setCourseOpen(true);
      }, null);
    }
  };

  var OptionComponent = function OptionComponent(_ref2) {
    var data = _ref2.data,
        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(_ref2, _excluded);

    if (data.type === "add-course") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return setCourseOpen(true);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else if (data.type === "edit-course") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return onEditCourse();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_20__.c.Option, _objectSpread(_objectSpread({}, props), {}, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
          className: "d-flex align-items-start flex-column justify-content-start  text-break",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("strong", {
            className: "mb-50",
            children: data.label
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
            color: data.type === "prepaid" ? "light-success" : data.type === "payAsYouGo" ? "light-warning" : "light-danger",
            pill: true,
            children: intl.formatMessage({
              id: data.type
            }, {
              X: data.x
            })
          })]
        })
      }));
    }
  };

  var onCourseClosed = function onCourseClosed() {
    setSubmittedCourse(false);
    setCourseOpen(false);
    setCourse({});
    setErrorCourse("");
  };

  function handleCoursesFetched(data, id) {
    setCourseFetched(data);
    var list = data.map(function (c) {
      return {
        value: c.id,
        label: c.name,
        description: c.description,
        cost: c.cost,
        duration: c.duration,
        type: c.type,
        x: c.x
      };
    });

    if (id && list.length > 0) {
      onCourseChange(list[0]);
    }

    if (edit && courseSelected && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.EDIT_ACTION */ .a.EDIT_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.COURSE_SUBJECT */ .k.COURSE_SUBJECT)) {
      list = [{
        value: "edit-course",
        label: intl.formatMessage({
          id: "editCourse"
        }),
        type: "edit-course",
        color: "flat-warning"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(list));
    }

    if (add && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.WRITE_ACTION */ .a.WRITE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.COURSE_SUBJECT */ .k.COURSE_SUBJECT)) {
      list = [{
        value: "add-course",
        label: intl.formatMessage({
          id: "addCourse"
        }),
        type: "add-course",
        color: "flat-success"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(list));
    }

    setCourses(list);

    if (id) {
      var t = list.find(function (s) {
        return s.value == id;
      });

      if (t) {
        onCourseChange(t);
      }
    }
  }

  var getCourses = function getCourses(id) {
    (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAll */ .go, ["".concat(_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .COURSES_URL */ .MC, "?filter={\"training\": \"").concat(training || "", "\"").concat(id ? ",\"id\": \"".concat(id, "\"") : "", "}")], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (res) {
      return handleCoursesFetched(res, id);
    }, null);
  };

  var onCourseSuccess = function onCourseSuccess(_ref3) {
    var id = _ref3.id;
    setCourseOpen(false);
    setCourseSelected(null);
    onChange(null);
    getCourses(id);
  };

  var deleteCourse = function deleteCourse() {
    (0,_Alert__WEBPACK_IMPORTED_MODULE_8__/* .SweetAlert */ .o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteCourseQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .COURSE_URL */ .gO, course.id, {
          deleted: true
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "courseDeletedSuccessfully", "somethingWrong", onCourseSuccess, null);
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setCourseSelected(acc);
  }, [acc]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (refresh) {
      getCourses();
    }
  }, [refresh]);

  var onCourseChange = function onCourseChange(e) {
    setCourseSelected(e);
    onChange(e);
  };

  var onCourseFail = function onCourseFail(err) {
    if (err.code === 414) {
      setErrorCourse("nameExist");
    } else if (err.code === 415) {
      setErrorCourse("courseDateOverlap");
    } else {
      setErrorCourse("somethingWrong");
    }
  };

  var saveCourse = function saveCourse(e) {
    e.preventDefault();
    setErrorCourse(false);
    setSubmittedCourse(true);
    course.training = training;

    if (course.name && course.cost && course.duration) {
      if (course.id) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .COURSE_URL */ .gO, course.id, course], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "courseUpdatedSuccessfully", "", onCourseSuccess, onCourseFail);
      } else {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .insert */ .$T, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .COURSE_URL */ .gO, course], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "courseCreatedSuccessfully", "", onCourseSuccess, onCourseFail);
      }
    }
  };

  var filter = function filter(val) {
    if (val) {
      clearTimeout(timer);
      setTimer(setTimeout(function () {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAllPaged */ .Ki, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .COURSES_URL */ .MC, 0, 20, [["name", "asc"]], {
          name: val
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
          return handleCoursesFetched(data);
        }, null);
      }, 700));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
      children: [label !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        for: "course",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
          id: "course"
        }), " ", requireStar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "text-danger h6",
          children: "*"
        }) : ""]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        style: {
          border: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid 1px"),
          borderRadius: "5px",
          display: "flex",
          alignItems: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("i", {
          className: "fa-solid fa-book-open mx-1"
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          style: {
            flexGrow: 1,
            borderLeft: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid ").concat(intl.locale === "ar" ? "0px" : "1px"),
            borderRight: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid ").concat(intl.locale === "ar" ? "1px" : "0px")
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .ZP, {
            isDisabled: disabled,
            styles: {
              control: function control(provided) {
                return _objectSpread(_objectSpread({}, provided), {}, {
                  border: "none"
                });
              }
            },
            onMenuOpen: function onMenuOpen() {
              return handleCoursesFetched(courseFetched);
            },
            id: "course",
            placeholder: intl.formatMessage({
              id: "selectCourse"
            }),
            value: courseSelected,
            components: {
              Option: OptionComponent
            },
            noOptionsMessage: function noOptionsMessage() {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                id: "noRecords"
              });
            },
            onChange: function onChange(e) {
              return onCourseChange(e);
            },
            isClearable: true,
            theme: _utility_Utils__WEBPACK_IMPORTED_MODULE_11__/* .selectThemeColors */ .ss,
            options: courses,
            classNamePrefix: "select",
            onInputChange: function onInputChange(v) {
              return filter(v);
            }
          })
        })]
      }), invalid && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "customSelectError",
        children: invalidText
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
      autoFocus: false,
      isOpen: courseOpen,
      toggle: function toggle() {
        return setCourseOpen(!courseOpen);
      },
      onClosed: onCourseClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
        toggle: function toggle() {
          return setCourseOpen(!courseOpen);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
          id: course.id ? "editCourse" : "addCourse"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
        children: [errorCourse && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                  id: errorCourse
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
            id: "login-tip",
            className: "mx-50",
            size: 18,
            style: {
              top: "10px",
              right: "10px"
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          autoFocus: true,
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "name"
          }),
          value: course.name,
          id: "name",
          name: "name",
          placeholder: "",
          onChange: function onChange(e) {
            return setCourse(_objectSpread(_objectSpread({}, course), {}, {
              name: e.target.value
            }));
          },
          requireStar: true,
          invalid: submittedCourse && !course.name,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "invoicingType"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("i", {
              className: "fa-solid fa-hand-holding-dollar"
            })
          },
          type: "select",
          isClearable: false,
          theme: _utility_Utils__WEBPACK_IMPORTED_MODULE_11__/* .selectThemeColors */ .ss,
          value: course.type,
          requireStar: true,
          invalid: submittedCourse && !course.type,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "required"
          }),
          onChange: function onChange(e) {
            return setCourse(_objectSpread(_objectSpread({}, course), {}, {
              type: e.target.value
            }));
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("option", {
            value: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("option", {
            value: "prepaid",
            children: [intl.formatMessage({
              id: "prepaid"
            }), " (", intl.formatMessage({
              id: "totalityInvoicing"
            }), ")"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("option", {
            value: "sessionX",
            children: [intl.formatMessage({
              id: "sessionCount"
            }), " (", intl.formatMessage({
              id: "invoicingPerSessionCount"
            }), ")"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("option", {
            value: "payAsYouGo",
            children: [intl.formatMessage({
              id: "payAsYouGo"
            }), " (", intl.formatMessage({
              id: "invoicingEachAttendance"
            }), ")"]
          })]
        }), course.type === "sessionX" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "seanceCount"
          }),
          value: course.x,
          id: "count",
          type: "number",
          name: "count",
          placeholder: "",
          requireStar: true,
          invalid: submittedCourse && !course.x,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "required"
          }),
          onChange: function onChange(e) {
            return setCourse(_objectSpread(_objectSpread({}, course), {}, {
              x: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
              size: 14
            })
          },
          append: {
            icon: intl.formatMessage({
              id: "seances"
            })
          }
        }), course.type && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            values: {
              X: course.x || "X"
            },
            id: course.type === "prepaid" ? "cost" : course.type === "sessionX" ? "seanceCountCost" : "seanceCost"
          }),
          value: course.cost,
          id: "cost",
          type: "number",
          name: "cost",
          placeholder: "",
          requireStar: true,
          invalid: submittedCourse && !course.cost,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "required"
          }),
          onChange: function onChange(e) {
            return setCourse(_objectSpread(_objectSpread({}, course), {}, {
              cost: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
              size: 14
            })
          },
          append: {
            icon: intl.formatMessage({
              id: "da"
            }) + " / " + intl.formatMessage({
              id: course.type === "prepaid" ? "training" : course.type === "sessionX" ? "countSeance" : "seance"
            }, {
              X: course.x || "X"
            })
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "seanceDuration"
          }),
          value: course.duration,
          id: "duration",
          type: "number",
          name: "duration",
          placeholder: "",
          requireStar: true,
          invalid: submittedCourse && !course.duration,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "required"
          }),
          onChange: function onChange(e) {
            return setCourse(_objectSpread(_objectSpread({}, course), {}, {
              duration: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
              size: 14
            })
          },
          append: {
            icon: intl.formatMessage({
              id: "minutes"
            })
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "description"
          }),
          value: course.description,
          id: "description",
          type: "textarea",
          name: "description",
          placeholder: "",
          onChange: function onChange(e) {
            return setCourse(_objectSpread(_objectSpread({}, course), {}, {
              description: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
              size: 14
            })
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Ripple */ .Z.Ripple, {
          onClick: saveCourse,
          color: "primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "save"
          })
        }), course.id && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.DELETE_ACTION */ .a.DELETE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.COURSE_SUBJECT */ .k.COURSE_SUBJECT) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Ripple */ .Z.Ripple, {
          color: "danger",
          type: "button",
          onClick: deleteCourse,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            id: "delete"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (CourseSelect);

/***/ }),

/***/ 10525:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(42982);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45987);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55678);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(61896);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55654);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(61643);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(31109);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(70616);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97975);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(82669);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(67954);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(85677);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(32701);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(10684);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(17834);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(97985);
/* harmony import */ var _core_scss_react_libs_react_select_react_select_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22299);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(44012);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48159);
/* harmony import */ var _api_utlis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16550);
/* harmony import */ var _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88295);
/* harmony import */ var _utility_context_Can__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6756);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16714);
/* harmony import */ var _configs_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56176);
/* harmony import */ var _configs_subjects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14322);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39146);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(39544);
/* harmony import */ var _utility_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16724);
/* harmony import */ var _utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47201);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85893);




var _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















var TrainingSelect = function TrainingSelect(_ref) {
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
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState, 2),
      submittedTraining = _useState2[0],
      setSubmittedTraining = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState3, 2),
      errorTraining = _useState4[0],
      setErrorTraining = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState5, 2),
      openTraining = _useState6[0],
      setOpenTraining = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState7, 2),
      trainings = _useState8[0],
      setTrainings = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState9, 2),
      trainingFetched = _useState10[0],
      setTrainingFetched = _useState10[1];

  var ability = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utility_context_Can__WEBPACK_IMPORTED_MODULE_7__/* .AbilityContext */ .v);

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState11, 2),
      trainingSelected = _useState12[0],
      setTrainingSelected = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState13, 2),
      training = _useState14[0],
      setTraining = _useState14[1];

  var _useSkin = (0,_utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_12__/* .useSkin */ .Q)(),
      _useSkin2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState15, 2),
      timer = _useState16[0],
      setTimer = _useState16[1];

  var onEditTraining = function onEditTraining() {
    var c = trainings.find(function (c) {
      return c.value === Number(trainingSelected.value);
    });

    if (c) {
      (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .get */ .U2, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .TRAINING_URL */ .C5, c.value], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
        setTraining(data);
        setOpenTraining(true);
      }, null);
    }
  };

  var OptionComponent = function OptionComponent(_ref2) {
    var data = _ref2.data,
        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(_ref2, _excluded);

    if (data.type === "add-training") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return setOpenTraining(true);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else if (data.type === "edit-training") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return onEditTraining();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_20__.c.Option, _objectSpread(_objectSpread({}, props), {}, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "d-flex align-items-start flex-column justify-content-start  text-break",
          children: data.label
        })
      }));
    }
  };

  var onTrainingClosed = function onTrainingClosed() {
    setSubmittedTraining(false);
    setOpenTraining(false);
    setTraining({});
    setErrorTraining("");
  };

  function handleTrainingsFetched(data, id) {
    setTrainingFetched(data);
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
      onTrainingChange(list[0]);
    }

    if (edit && trainingSelected && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.EDIT_ACTION */ .a.EDIT_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.TRAINING_SUBJECT */ .k.TRAINING_SUBJECT)) {
      list = [{
        value: "edit-training",
        label: intl.formatMessage({
          id: "editTraining"
        }),
        type: "edit-training",
        color: "flat-warning"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(list));
    }

    if (add && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.WRITE_ACTION */ .a.WRITE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.TRAINING_SUBJECT */ .k.TRAINING_SUBJECT)) {
      list = [{
        value: "add-training",
        label: intl.formatMessage({
          id: "addTraining"
        }),
        type: "add-training",
        color: "flat-success"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(list));
    }

    setTrainings(list);
  }

  var getTrainings = function getTrainings(id) {
    (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAll */ .go, [!id ? _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .TRAININGS_URL */ .LA : _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .TRAININGS_URL */ .LA + "?id=" + id], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (res) {
      return handleTrainingsFetched(res, id);
    }, null);
  };

  var onTrainingSuccess = function onTrainingSuccess(_ref3) {
    var id = _ref3.id;
    setOpenTraining(false);
    setTrainingSelected(null);
    onChange(null);
    getTrainings(id);
  };

  var deleteTraining = function deleteTraining() {
    (0,_Alert__WEBPACK_IMPORTED_MODULE_8__/* .SweetAlert */ .o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteTrainingQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .TRAINING_URL */ .C5, training.id, {
          deleted: true
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "trainingDeletedSuccessfully", "somethingWrong", onTrainingSuccess, null);
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setTrainingSelected(acc);
  }, [acc]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (refresh) {
      getTrainings();
    }
  }, [refresh]);

  var onTrainingChange = function onTrainingChange(e) {
    setTrainingSelected(e);
    onChange(e);
  };

  var onTrainingFail = function onTrainingFail(err) {
    if (err.code === 414) {
      setErrorTraining("nameExist");
    } else if (err.code === 415) {
      setErrorTraining("trainingDateOverlap");
    } else {
      setErrorTraining("somethingWrong");
    }
  };

  var saveTraining = function saveTraining(e) {
    e.preventDefault();
    setErrorTraining(false);
    setSubmittedTraining(true);

    if (training.name) {
      if (training.id) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .TRAINING_URL */ .C5, training.id, training], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "trainingUpdatedSuccessfully", "", onTrainingSuccess, onTrainingFail);
      } else {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .insert */ .$T, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .TRAINING_URL */ .C5, training], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "trainingCreatedSuccessfully", "", onTrainingSuccess, onTrainingFail);
      }
    }
  };

  var filter = function filter(val) {
    if (val) {
      clearTimeout(timer);
      setTimer(setTimeout(function () {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAllPaged */ .Ki, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .TRAININGS_URL */ .LA, 0, 20, [["name", "asc"]], {
          name: val
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
          return handleTrainingsFetched(data);
        }, null);
      }, 700));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
      children: [label !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        for: "training",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          id: "training"
        }), " ", requireStar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "text-danger h6",
          children: "*"
        }) : ""]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        style: {
          border: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid 1px"),
          borderRadius: "5px",
          display: "flex",
          alignItems: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("i", {
          className: "fa-brands fa-react mx-1"
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          style: {
            flexGrow: 1,
            borderLeft: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid ").concat(intl.locale === "ar" ? "0px" : "1px"),
            borderRight: "".concat(invalid ? "#dc3545" : skin === "dark" ? "#404656" : "#d8d6de", " solid ").concat(intl.locale === "ar" ? "1px" : "0px")
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP, {
            isDisabled: disabled,
            styles: {
              control: function control(provided) {
                return _objectSpread(_objectSpread({}, provided), {}, {
                  border: "none"
                });
              }
            },
            onMenuOpen: function onMenuOpen() {
              return handleTrainingsFetched(trainingFetched);
            },
            id: "training",
            placeholder: intl.formatMessage({
              id: "selectTraining"
            }),
            value: trainingSelected,
            components: {
              Option: OptionComponent
            },
            noOptionsMessage: function noOptionsMessage() {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                id: "noRecords"
              });
            },
            onChange: function onChange(e) {
              return onTrainingChange(e);
            },
            isClearable: true,
            theme: _utility_Utils__WEBPACK_IMPORTED_MODULE_11__/* .selectThemeColors */ .ss,
            options: trainings,
            classNamePrefix: "select",
            onInputChange: function onInputChange(v) {
              return filter(v);
            }
          })
        })]
      }), invalid && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "customSelectError",
        children: invalidText
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
      autoFocus: false,
      isOpen: openTraining,
      toggle: function toggle() {
        return setOpenTraining(!openTraining);
      },
      onClosed: onTrainingClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
        toggle: function toggle() {
          return setOpenTraining(!openTraining);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          id: training.id ? "editTraining" : "addTraining"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
        children: [errorTraining && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                  id: errorTraining
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
            id: "login-tip",
            className: "mx-50",
            size: 18,
            style: {
              top: "10px",
              right: "10px"
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          autoFocus: true,
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "name"
          }),
          value: training.name,
          id: "name",
          name: "name",
          placeholder: "",
          requireStar: true,
          onChange: function onChange(e) {
            return setTraining(_objectSpread(_objectSpread({}, training), {}, {
              name: e.target.value
            }));
          },
          invalid: submittedTraining && !training.name,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "description"
          }),
          value: training.description,
          id: "description",
          type: "textarea",
          name: "description",
          placeholder: "",
          onChange: function onChange(e) {
            return setTraining(_objectSpread(_objectSpread({}, training), {}, {
              description: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
              size: 14
            })
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Ripple */ .Z.Ripple, {
          onClick: saveTraining,
          color: "primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "save"
          })
        }), training.id && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.DELETE_ACTION */ .a.DELETE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.TRAINING_SUBJECT */ .k.TRAINING_SUBJECT) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Ripple */ .Z.Ripple, {
          color: "danger",
          type: "button",
          onClick: deleteTraining,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "delete"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (TrainingSelect);

/***/ })

}]);