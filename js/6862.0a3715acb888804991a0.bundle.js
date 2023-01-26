"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[6862],{

/***/ 82433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ tableRowsPerPage; }
/* harmony export */ });
var tableRowsPerPage = [10, 20, 50, 100];

/***/ }),

/***/ 43700:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(42982);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45987);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55678);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(61896);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55654);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(39397);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(61643);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(31109);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(70616);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97975);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(82669);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(67954);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(85677);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(32701);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(10684);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(17834);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(97985);
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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(39544);
/* harmony import */ var _utility_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16724);
/* harmony import */ var _utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47201);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85893);




var _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















var CategorySelect = function CategorySelect(_ref) {
  var refresh = _ref.refresh,
      dispatch = _ref.dispatch,
      cat = _ref.cat,
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
      submittedCategory = _useState2[0],
      setSubmittedCategory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState3, 2),
      errorCategory = _useState4[0],
      setErrorCategory = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState5, 2),
      openCategory = _useState6[0],
      setOpenCategory = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState7, 2),
      categories = _useState8[0],
      setCategories = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState9, 2),
      categoriesFetched = _useState10[0],
      setCategoriesFetched = _useState10[1];

  var ability = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utility_context_Can__WEBPACK_IMPORTED_MODULE_7__/* .AbilityContext */ .v);

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState11, 2),
      categorySelected = _useState12[0],
      setCategorySelected = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState13, 2),
      category = _useState14[0],
      setCategory = _useState14[1];

  var _useSkin = (0,_utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_12__/* .useSkin */ .Q)(),
      _useSkin2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState15, 2),
      timer = _useState16[0],
      setTimer = _useState16[1];

  var onEditCategory = function onEditCategory() {
    var c = categories.find(function (c) {
      return c.value === Number(categorySelected.value);
    });

    if (c) {
      (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .get */ .U2, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORY_CATEGORY_URL */ .b$, c.value], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
        setCategory(data);
        setOpenCategory(true);
      }, null);
    }
  };

  var OptionComponent = function OptionComponent(_ref2) {
    var data = _ref2.data,
        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(_ref2, _excluded);

    if (data.type === "add-category") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return setOpenCategory(true);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else if (data.type === "edit-category") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return onEditCategory();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_select__WEBPACK_IMPORTED_MODULE_20__.c.Option, _objectSpread(_objectSpread({}, props), {}, {
        children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
          className: "text-break",
          children: [data.label, " "]
        })]
      }));
    }
  };

  var onCategoryClosed = function onCategoryClosed() {
    setSubmittedCategory(false);
    setOpenCategory(false);
    setCategory({});
    setErrorCategory("");
  };

  function handleCategoriesFetched(data, id) {
    setCategoriesFetched(data);
    var list = data.map(function (c) {
      return {
        value: c.id,
        label: c.name,
        description: c.description
      };
    });

    if (id && list.length > 0) {
      onCategoryChange(list[0]);
    }

    if (edit && categorySelected && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.EDIT_ACTION */ .a.EDIT_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.INVENTORY_CATEGORY_SUBJECT */ .k.INVENTORY_CATEGORY_SUBJECT)) {
      list = [{
        value: "edit-category",
        label: intl.formatMessage({
          id: "editCategory"
        }),
        type: "edit-category",
        color: "flat-warning"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(list));
    }

    if (add && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.WRITE_ACTION */ .a.WRITE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.INVENTORY_CATEGORY_SUBJECT */ .k.INVENTORY_CATEGORY_SUBJECT)) {
      list = [{
        value: "add-category",
        label: intl.formatMessage({
          id: "addCategory"
        }),
        type: "add-category",
        color: "flat-success"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(list));
    }

    setCategories(list);
  }

  var getCategories = function getCategories(id) {
    (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAll */ .go, [!id ? _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORY_CATEGORIES_URL */ ._C : _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORY_CATEGORIES_URL */ ._C + "?id=" + id], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (res) {
      return handleCategoriesFetched(res, id);
    }, null);
  };

  var onCategorySuccess = function onCategorySuccess(_ref3) {
    var id = _ref3.id;
    setOpenCategory(false);
    setCategorySelected(null);
    onChange(null);
    getCategories(id);
  };

  var deleteCategory = function deleteCategory() {
    (0,_Alert__WEBPACK_IMPORTED_MODULE_8__/* .SweetAlert */ .o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteCategoryQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORY_CATEGORY_URL */ .b$, category.id, {
          deleted: true
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "categoryDeletedSuccessfully", "somethingWrong", onCategorySuccess, null);
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setCategorySelected(cat);
  }, [cat]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (refresh) {
      getCategories();
    }
  }, [refresh]);

  var onCategoryChange = function onCategoryChange(e) {
    setCategorySelected(e);
    onChange(e);
  };

  var onCategoryFail = function onCategoryFail(err) {
    if (err.code === 414) {
      setErrorCategory("nameExist");
    } else {
      setErrorCategory("somethingWrong");
    }
  };

  var saveCategory = function saveCategory(e) {
    e.preventDefault();
    setErrorCategory(false);
    setSubmittedCategory(true);

    if (category.name) {
      if (category.id) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORY_CATEGORY_URL */ .b$, category.id, category], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "categoryUpdatedSuccessfully", "", onCategorySuccess, onCategoryFail);
      } else {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .insert */ .$T, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORY_CATEGORY_URL */ .b$, category], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "categoryCreatedSuccessfully", "", onCategorySuccess, onCategoryFail);
      }
    }
  };

  var filter = function filter(val) {
    if (val) {
      clearTimeout(timer);
      setTimer(setTimeout(function () {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAllPaged */ .Ki, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORY_CATEGORIES_URL */ ._C, 0, 20, [["name", "asc"]], {
          name: val
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
          return handleCategoriesFetched(data);
        }, null);
      }, 700));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
      children: [label !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        for: "category",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          id: "category"
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
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
          className: "mx-1",
          size: 14
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
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
              return handleCategoriesFetched(categoriesFetched);
            },
            id: "category",
            placeholder: intl.formatMessage({
              id: "selectCategory"
            }),
            value: categorySelected,
            components: {
              Option: OptionComponent
            },
            noOptionsMessage: function noOptionsMessage() {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                id: "noRecords"
              });
            },
            onChange: function onChange(e) {
              return onCategoryChange(e);
            },
            isClearable: true,
            theme: _utility_Utils__WEBPACK_IMPORTED_MODULE_11__/* .selectThemeColors */ .ss,
            options: categories,
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
      isOpen: openCategory,
      toggle: function toggle() {
        return setOpenCategory(!openCategory);
      },
      onClosed: onCategoryClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
        toggle: function toggle() {
          return setOpenCategory(!openCategory);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          id: category.id ? "editCategory" : "addCategory"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
        children: [errorCategory && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                  id: errorCategory
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
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "name"
          }),
          value: category.name,
          id: "name",
          name: "name",
          placeholder: "",
          requireStar: true,
          onChange: function onChange(e) {
            return setCategory(_objectSpread(_objectSpread({}, category), {}, {
              name: e.target.value
            }));
          },
          invalid: submittedCategory && !category.name,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "description"
          }),
          value: category.description,
          id: "description",
          type: "textarea",
          name: "description",
          placeholder: "",
          onChange: function onChange(e) {
            return setCategory(_objectSpread(_objectSpread({}, category), {}, {
              description: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
              size: 14
            })
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Ripple */ .Z.Ripple, {
          onClick: saveCategory,
          color: "primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "save"
          })
        }), category.id && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.DELETE_ACTION */ .a.DELETE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.INVENTORY_CATEGORY_SUBJECT */ .k.INVENTORY_CATEGORY_SUBJECT) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Ripple */ .Z.Ripple, {
          color: "danger",
          type: "button",
          onClick: deleteCategory,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "delete"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (CategorySelect);

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