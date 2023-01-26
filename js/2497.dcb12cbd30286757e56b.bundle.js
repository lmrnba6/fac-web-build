"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[2497],{

/***/ 79976:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(42982);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45987);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55678);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(61896);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55654);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(39397);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(61643);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(31109);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(70616);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97975);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(17354);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(82669);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(67954);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(85677);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(32701);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(10684);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(17834);
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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(39544);
/* harmony import */ var _utility_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16724);
/* harmony import */ var _CategorySelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43700);
/* harmony import */ var _utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47201);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85893);




var _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





















var InventorySelect = function InventorySelect(_ref) {
  var refresh = _ref.refresh,
      dispatch = _ref.dispatch,
      inv = _ref.inv,
      onChange = _ref.onChange,
      edit = _ref.edit,
      add = _ref.add,
      label = _ref.label,
      disabled = _ref.disabled;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState, 2),
      submittedInventory = _useState2[0],
      setSubmittedInventory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState3, 2),
      errorInventory = _useState4[0],
      setErrorInventory = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState5, 2),
      openInventory = _useState6[0],
      setOpenInventory = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState7, 2),
      Inventories = _useState8[0],
      setCategories = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState9, 2),
      InventoriesFetched = _useState10[0],
      setCategoriesFetched = _useState10[1];

  var ability = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utility_context_Can__WEBPACK_IMPORTED_MODULE_7__/* .AbilityContext */ .v);

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState11, 2),
      inventorySelected = _useState12[0],
      setInventorySelected = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState13, 2),
      inventory = _useState14[0],
      setInventory = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState15, 2),
      categorySelected = _useState16[0],
      setCategorySelected = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState18 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useState17, 2),
      timer = _useState18[0],
      setTimer = _useState18[1];

  var _useSkin = (0,_utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_13__/* .useSkin */ .Q)(),
      _useSkin2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();

  var onEditInventory = function onEditInventory() {
    var c = Inventories.find(function (c) {
      return c.value === Number(inventorySelected.value);
    });

    if (c) {
      (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .get */ .U2, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORY_URL */ .LJ, c.value], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
        setInventory(data);
        setOpenInventory(true);
        setCategorySelected({
          value: data.category,
          label: data.categoryName
        });
      }, null);
    }
  };

  var OptionComponent = function OptionComponent(_ref2) {
    var data = _ref2.data,
        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(_ref2, _excluded);

    if (data.type === "add-inventory") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return setOpenInventory(true);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else if (data.type === "edit-inventory") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return onEditInventory();
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
          className: "d-flex align-items-center justify-content-start text-break",
          children: [data.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            style: {
              fontSize: "100%"
            },
            pill: true,
            color: Number(data.quantity) === 0 ? "light-danger" : "light-success",
            className: "ml-1",
            children: data.quantity
          })]
        })
      }));
    }
  };

  var onInventoryClosed = function onInventoryClosed(id) {
    setSubmittedInventory(false);
    setOpenInventory(false);
    setInventory({});
    setErrorInventory("");
  };

  function handleCategoriesFetched(data, id) {
    setCategoriesFetched(data);
    var list = data.map(function (c) {
      return {
        value: c.id,
        label: c.name,
        description: c.description,
        quantity: c.quantity,
        category: c.category
      };
    });

    if (id && list.length > 0) {
      onInventoryChange(list[0]);
    }

    if (edit && inventorySelected && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.EDIT_ACTION */ .a.EDIT_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.INVENTORY_SUBJECT */ .k.INVENTORY_SUBJECT)) {
      list = [{
        value: "edit-inventory",
        label: intl.formatMessage({
          id: "editInventory"
        }),
        type: "edit-inventory",
        color: "flat-warning"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(list));
    }

    if (add && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.WRITE_ACTION */ .a.WRITE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.INVENTORY_SUBJECT */ .k.INVENTORY_SUBJECT)) {
      list = [{
        value: "add-inventory",
        label: intl.formatMessage({
          id: "addInventory"
        }),
        type: "add-inventory",
        color: "flat-success"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(list));
    }

    setCategories(list);
  }

  var getInventoriesFetched = function getInventoriesFetched(id) {
    (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAll */ .go, [!id ? _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORIES_URL */ .y3 : _configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORIES_URL */ .y3 + "?id=" + id], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (res) {
      return handleCategoriesFetched(res, id);
    }, null);
  };

  var onInventorySuccess = function onInventorySuccess(_ref3) {
    var id = _ref3.id;
    setOpenInventory(false);
    setInventorySelected(null);
    onChange(null);
    getInventoriesFetched(id);
  };

  var deleteInventory = function deleteInventory() {
    (0,_Alert__WEBPACK_IMPORTED_MODULE_8__/* .SweetAlert */ .o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteInventoryQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORY_URL */ .LJ, inventory.id, {
          deleted: true
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "inventoryDeletedSuccessfully", "somethingWrong", onInventorySuccess, null);
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (open) {
      setInventorySelected(inv);
    }
  }, [inv]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (refresh) {
      getInventoriesFetched();
    }
  }, [refresh]);

  var onInventoryChange = function onInventoryChange(e) {
    setInventorySelected(e);
    onChange(e);
  };

  var onInventoryFail = function onInventoryFail(err) {
    if (err.code === 414) {
      setErrorInventory("nameExist");
    } else {
      setErrorInventory("somethingWrong");
    }
  };

  var saveInventory = function saveInventory(e) {
    e.preventDefault();
    setErrorInventory(false);
    setSubmittedInventory(true);

    if (inventory.name && categorySelected) {
      if (inventory.id) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORY_URL */ .LJ, inventory.id, inventory], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "inventoryUpdatedSuccessfully", "", onInventorySuccess, onInventoryFail);
      } else {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .insert */ .$T, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORY_URL */ .LJ, inventory], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "inventoryCreatedSuccessfully", "", onInventorySuccess, onInventoryFail);
      }
    }
  };

  var getInventories = function getInventories(val) {
    if (val) {
      clearTimeout(timer);
      setTimer(setTimeout(function () {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAllPaged */ .Ki, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .INVENTORIES_URL */ .y3, 0, 20, [["name", "asc"]], {
          name: val
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
          return handleCategoriesFetched(data);
        }, null);
      }, 700));
    }
  };

  var onCategoryChange = function onCategoryChange(e) {
    setCategorySelected(e);
    setInventory(_objectSpread(_objectSpread({}, inventory), {}, {
      category: e ? e.value : null
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
      children: [label !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        for: "inventory",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          id: "inventory"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        style: {
          border: "".concat(skin === "dark" ? "#404656" : "#d8d6de", " solid 1px"),
          borderRadius: "5px",
          display: "flex",
          alignItems: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          className: "mx-1",
          size: 14
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            flexGrow: 1,
            borderLeft: "".concat(skin === "dark" ? "#404656" : "#d8d6de", " solid 1px")
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .ZP, {
            isDisabled: disabled,
            styles: {
              control: function control(provided) {
                return _objectSpread(_objectSpread({}, provided), {}, {
                  border: "none"
                });
              }
            },
            onMenuOpen: function onMenuOpen() {
              return handleCategoriesFetched(InventoriesFetched);
            },
            id: "inventory",
            placeholder: intl.formatMessage({
              id: "selectProduct"
            }),
            value: inventorySelected,
            components: {
              Option: OptionComponent
            },
            noOptionsMessage: function noOptionsMessage() {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                id: "noRecords"
              });
            },
            onChange: function onChange(e) {
              return onInventoryChange(e);
            },
            isClearable: true,
            theme: _utility_Utils__WEBPACK_IMPORTED_MODULE_11__/* .selectThemeColors */ .ss,
            options: Inventories,
            classNamePrefix: "select",
            onInputChange: function onInputChange(v) {
              return getInventories(v);
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
      isOpen: openInventory,
      toggle: function toggle() {
        return setOpenInventory(!openInventory);
      },
      onClosed: onInventoryClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
        toggle: function toggle() {
          return setOpenInventory(!openInventory);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          id: inventory.id ? "editInventory" : "addInventory"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
        children: [errorInventory && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                  id: errorInventory
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
            id: "login-tip",
            className: "mx-50",
            size: 18,
            style: {
              top: "10px",
              right: "10px"
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "name"
          }),
          value: inventory.name,
          id: "name",
          name: "name",
          placeholder: "",
          requireStar: true,
          onChange: function onChange(e) {
            return setInventory(_objectSpread(_objectSpread({}, inventory), {}, {
              name: e.target.value
            }));
          },
          invalid: submittedInventory && !inventory.name,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_CategorySelect__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          add: true,
          edit: true,
          refresh: openInventory,
          cat: categorySelected,
          dispatch: dispatch,
          requireStar: true,
          invalid: submittedInventory && !categorySelected,
          invalidText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "required"
          }),
          onChange: function onChange(e) {
            return onCategoryChange(e);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "description"
          }),
          value: inventory.description,
          id: "description",
          type: "textarea",
          name: "description",
          placeholder: "",
          onChange: function onChange(e) {
            return setInventory(_objectSpread(_objectSpread({}, inventory), {}, {
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
          onClick: saveInventory,
          color: "primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "save"
          })
        }), inventory.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Ripple */ .Z.Ripple, {
          color: "danger",
          type: "button",
          onClick: deleteInventory,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "delete"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (InventorySelect);

/***/ }),

/***/ 34726:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23663);






var propTypes = {
  body: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  bottom: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  left: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  list: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  middle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  object: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  right: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_3__/* .tagPropType */ .iC,
  top: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};

var Media = function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      cssModule = props.cssModule,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      tag = props.tag,
      top = props.top,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, ["body", "bottom", "className", "cssModule", "heading", "left", "list", "middle", "object", "right", "tag", "top"]);

  var defaultTag;

  if (heading) {
    defaultTag = 'h4';
  } else if (attributes.href) {
    defaultTag = 'a';
  } else if (attributes.src || object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }

  var Tag = tag || defaultTag;
  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'media-body': body,
    'media-heading': heading,
    'media-left': left,
    'media-right': right,
    'media-top': top,
    'media-bottom': bottom,
    'media-middle': middle,
    'media-object': object,
    'media-list': list,
    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
  }), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, attributes, {
    className: classes
  }));
};

Media.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["Z"] = (Media);

/***/ }),

/***/ 77243:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23663);






var propTypes = {
  tabs: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  pills: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  horizontal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  justified: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  navbar: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  card: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_3__/* .tagPropType */ .iC,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
var defaultProps = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return "flex-" + vertical + "-column";
};

var Nav = function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, attributes, {
    className: classes
  }));
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (Nav);

/***/ }),

/***/ 9393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94578);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70635);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23663);







var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_2__/* .tagPropType */ .iC,
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'div'
};

var TabContent = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(TabContent, _Component);

  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  };

  function TabContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag;
    var attributes = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .omit */ .CE)(this.props, Object.keys(propTypes));
    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()('tab-content', className), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_5__/* .TabContext.Provider */ .q.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, attributes, {
      className: classes
    })));
  };

  return TabContent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["Z"] = (TabContent);
TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;

/***/ }),

/***/ 70635:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": function() { return /* binding */ TabContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

var TabContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ 18829:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ TabPane; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70635);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23663);







var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_2__/* .tagPropType */ .iC,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  tabId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
};
var defaultProps = {
  tag: 'div'
};
function TabPane(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, ["className", "cssModule", "tabId", "tag"]);

  var getClasses = function getClasses(activeTabId) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()('tab-pane', className, {
      active: tabId === activeTabId
    }), cssModule);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_5__/* .TabContext.Consumer */ .q.Consumer, null, function (_ref) {
    var activeTabId = _ref.activeTabId;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, attributes, {
      className: getClasses(activeTabId)
    }));
  });
}
TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

/***/ }),

/***/ 36595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23663);






var propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  bordered: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  borderless: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  striped: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  dark: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  hover: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  tag: _utils__WEBPACK_IMPORTED_MODULE_3__/* .tagPropType */ .iC,
  responsiveTag: _utils__WEBPACK_IMPORTED_MODULE_3__/* .tagPropType */ .iC,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)])
};
var defaultProps = {
  tag: 'table',
  responsiveTag: 'div'
};

var Table = function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
  var table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, attributes, {
    ref: innerRef,
    className: classes
  }));

  if (responsive) {
    var responsiveClassName = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .mx)(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }

  return table;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (Table);

/***/ })

}]);