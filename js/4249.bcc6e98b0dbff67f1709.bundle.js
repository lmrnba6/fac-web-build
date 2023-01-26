"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[4249],{

/***/ 21058:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ sale_list; }
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
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/eye.js
var eye = __webpack_require__(12590);
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
;// CONCATENATED MODULE: ./src/views/apps/sale/list/columns.js
// ** React Imports
 // ** Custom Components
// ** Third Party Components









var columns = function columns(deleteOutcoming, editOutcoming, viewOutcoming, ability, intl) {
  return [{
    name: intl.formatMessage({
      id: "beneficiary"
    }),
    selector: "beneficiary",
    sortable: false,
    cell: function cell(row) {
      return row.beneficiary;
    }
  }, {
    name: intl.formatMessage({
      id: "date"
    }),
    selector: "date",
    sortable: false,
    cell: function cell(row) {
      return moment_default()(row.date).format("YYYY-MM-DD");
    }
  }, {
    name: intl.formatMessage({
      id: "docs"
    }),
    selector: "docs",
    // maxWidth: "100px",
    sortable: false,
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "position-relative",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
          className: "font-small-3",
          pill: true,
          color: Number(row.docs) ? "light-primary" : "light-dark",
          children: row.docs
        })
      });
    }
  }, {
    name: intl.formatMessage({
      id: "products"
    }),
    selector: "products",
    // maxWidth: "100px",
    sortable: false,
    cell: function cell(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "position-relative",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
          className: "font-small-3",
          pill: true,
          color: Number(row.products) ? "light-primary" : "light-dark",
          children: row.products
        })
      });
    }
  }, {
    name: intl.formatMessage({
      id: "responsible"
    }),
    selector: "responsible",
    sortable: true,
    cell: function cell(row) {
      return row.responsibleName;
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
          children: [ability.can(actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION, subjects/* SUBJECTS.OUTCOMING_SUBJECT */.k.OUTCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            tag: react_router_dom/* Link */.rU,
            to: "#",
            onClick: function onClick() {
              return viewOutcoming(row);
            },
            className: "w-100",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(eye/* default */.Z, {
              size: 14,
              className: "mr-50"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "align-middle",
              children: intl.formatMessage({
                id: "details"
              })
            })]
          }), ability.can(actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION, subjects/* SUBJECTS.OUTCOMING_SUBJECT */.k.OUTCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            tag: react_router_dom/* Link */.rU,
            to: "#",
            onClick: function onClick() {
              return editOutcoming(row);
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
          }), ability.can(actions/* ACTIONS.DELETE_ACTION */.a.DELETE_ACTION, subjects/* SUBJECTS.OUTCOMING_SUBJECT */.k.OUTCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            className: "w-100",
            onClick: function onClick() {
              return deleteOutcoming(row.id);
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
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/clipboard.js
var clipboard = __webpack_require__(70616);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/user.js
var user = __webpack_require__(73752);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/calendar.js
var calendar = __webpack_require__(91140);
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
// EXTERNAL MODULE: ./src/configs/api-urls.js
var api_urls = __webpack_require__(88295);
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
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Modal.js + 1 modules
var Modal = __webpack_require__(85677);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalHeader.js
var ModalHeader = __webpack_require__(32701);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalBody.js
var ModalBody = __webpack_require__(10684);
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
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Media.js
var Media = __webpack_require__(34726);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Table.js
var Table = __webpack_require__(36595);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalFooter.js
var ModalFooter = __webpack_require__(97985);
// EXTERNAL MODULE: ./src/@core/components/avatar/index.js
var avatar = __webpack_require__(68138);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/info.js
var info = __webpack_require__(73973);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/file.js
var file = __webpack_require__(36694);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/package.js
var icons_package = __webpack_require__(39397);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/download-cloud.js
var download_cloud = __webpack_require__(7708);
// EXTERNAL MODULE: ./node_modules/moment/locale/fr.js
var fr = __webpack_require__(94470);
// EXTERNAL MODULE: ./node_modules/moment/locale/ar-dz.js
var ar_dz = __webpack_require__(14130);
// EXTERNAL MODULE: ./src/utility/Utils.js
var Utils = __webpack_require__(16724);
;// CONCATENATED MODULE: ./src/views/apps/sale/list/OutcomingDetails.js




















var OutcomingDetailsModal = function OutcomingDetailsModal(props) {
  var dispatch = props.dispatch,
      openDetails = props.openDetails,
      toggleDetails = props.toggleDetails,
      outcoming = props.outcoming,
      setOutcoming = props.setOutcoming,
      toggleSidebar = props.toggleSidebar,
      refresh = props.refresh,
      onClosed = props.onClosed;
  var intl = (0,useIntl/* default */.Z)();

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      invoicesOpen = _useState2[0],
      setInvoicesOpen = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      productsOpen = _useState4[0],
      setProductsOpen = _useState4[1];

  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var _useState5 = (0,react.useState)(0),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      fileSize = _useState6[0],
      setFileSize = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      files = _useState8[0],
      setFiles = _useState8[1];

  var _useState9 = (0,react.useState)([]),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      products = _useState10[0],
      setProducts = _useState10[1];

  var _useState11 = (0,react.useState)({}),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      currentOutcoming = _useState12[0],
      setCurrentOutcoming = _useState12[1];

  var _useState13 = (0,react.useState)(false),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      isOnEdit = _useState14[0],
      setIsOnEdit = _useState14[1];

  var _useState15 = (0,react.useState)("1"),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      active = _useState16[0],
      setActive = _useState16[1];

  var toggle = function toggle(tab) {
    if (active !== tab) {
      setActive(tab);
    }
  };

  var onEdit = function onEdit() {
    setIsOnEdit(true);
    toggleDetails();
    toggleSidebar();
  };

  var onCancel = function onCancel() {
    setIsOnEdit(false);
    toggleDetails();
    refresh();
  };

  var onClose = function onClose() {
    setInvoicesOpen(false);
    setProductsOpen(false);
    setActive("1");

    if (!isOnEdit) {
      onClosed();
    }
  };

  var onDeleteSuccess = function onDeleteSuccess() {
    onCancel();
  };

  var onDelete = function onDelete() {
    (0,Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteOutcomingQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* remove */.Od, [api_urls/* OUTCOMING_URL */.Qg, outcoming.id], true, react_toastify_esm/* toast */.Am, dispatch, "outcomingDeletedSuccessfully", "somethingWrong", onDeleteSuccess, null);
      }
    });
  };

  var handleOutcomingFetched = function handleOutcomingFetched(res) {
    var size = (res.docs || []).reduce(function (a, b) {
      return a + Number(b.size);
    }, 0) / 1024;
    setFileSize(size.toFixed(2));
    setFiles(res.docs || []);
    setProducts(res.products || []);
    setCurrentOutcoming(res);
  };

  var initOutcoming = function initOutcoming() {
    if (outcoming.id) {
      (0,utlis/* apiCall */.k_)(utlis/* get */.U2, [api_urls/* OUTCOMING_URL */.Qg, outcoming.id], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", handleOutcomingFetched, null);
    }
  };

  (0,react.useEffect)(function () {
    moment_default().locale(intl.locale === "ar" ? "ar-dz" : intl.locale);

    if (openDetails) {
      initOutcoming();
    }
  }, [openDetails]);
  return outcoming ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
    scrollable: true,
    className: "modal-lg",
    isOpen: openDetails,
    toggle: toggleDetails,
    onClosed: onClose,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ModalHeader/* default */.Z, {
      toggle: toggleDetails
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalBody/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Nav/* default */.Z, {
        pills: true,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
            active: active === "1",
            onClick: function onClick() {
              toggle("1");
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(info/* default */.Z, {
              size: 14
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "details"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
            active: active === "2",
            onClick: function onClick() {
              toggle("2");
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(clipboard/* default */.Z, {
              size: 14
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "description"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
            active: active === "3",
            onClick: function onClick() {
              toggle("3");
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(file/* default */.Z, {
              size: 14
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "docs"
            }), " (", files ? files.length : 0, ")"]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink/* default */.Z, {
            active: active === "4",
            onClick: function onClick() {
              toggle("4");
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(icons_package/* default */.Z, {
              size: 14
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "products"
            }), " (", products ? products.length : 0, ")"]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TabContent/* default */.Z, {
        className: "py-50",
        activeTab: active,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TabPane/* default */.Z, {
          tabId: "1",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "card-transaction",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "transaction-item",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Media/* default */.Z, {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
                  className: "rounded",
                  color: "light-primary",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.Z, {
                    size: 18
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Media/* default */.Z, {
                  body: true,
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("h6", {
                    className: "transaction-title",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "beneficiary"
                    }), ":"]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "font-weight-bolder  ml-1",
                children: currentOutcoming.beneficiary
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "transaction-item",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Media/* default */.Z, {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
                  className: "rounded",
                  color: "light-primary",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(calendar/* default */.Z, {
                    size: 18
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Media/* default */.Z, {
                  body: true,
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("h6", {
                    className: "transaction-title",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "date"
                    }), ":"]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "font-weight-bolder  ml-1",
                children: moment_default()(currentOutcoming.date).format("dddd D MMMM  YYYY")
              })]
            }), products ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "transaction-item",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Media/* default */.Z, {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
                  color: "light-primary",
                  className: "rounded",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_package/* default */.Z, {
                    size: 18
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Media/* default */.Z, {
                  body: true,
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("h6", {
                    className: "transaction-title",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "products"
                    }), ":"]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "font-weight-bolder text-right ml-1",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "font-weight-bolder text-right",
                  id: "docs",
                  children: [products.length, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "products"
                  })]
                })
              })]
            }) : null, files ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "transaction-item",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Media/* default */.Z, {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
                  color: "light-primary",
                  className: "rounded",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(file/* default */.Z, {
                    size: 18
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Media/* default */.Z, {
                  body: true,
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("h6", {
                    className: "transaction-title",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "docs"
                    }), ":"]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "font-weight-bolder text-right  ml-1",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "font-weight-bolder text-right",
                  id: "invoices",
                  children: [files.length, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "docs"
                  })]
                })
              })]
            }) : null]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TabPane/* default */.Z, {
          tabId: "2",
          children: currentOutcoming.description ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: currentOutcoming.description
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
            className: "text-center text-muted my-1",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "noDescription"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TabPane/* default */.Z, {
          tabId: "3",
          children: files && files.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
            striped: true,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "#"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: intl.formatMessage({
                    id: "name"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: intl.formatMessage({
                    id: "size"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: intl.formatMessage({
                    id: "actions"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              style: {
                wordBreak: "break-word"
              },
              children: (files || []).map(function (item, k) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                    scope: "row",
                    children: k + 1
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      className: "text-dark",
                      children: item.name
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Badge/* default */.Z, {
                      color: "light-info",
                      pill: true,
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                        className: "text-dark",
                        children: "".concat((item.size / 1024).toFixed(2))
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                        className: "text-dark ml-50",
                        children: (0,useIntl/* default */.Z)().formatMessage({
                          id: "ko"
                        })
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(download_cloud/* default */.Z, {
                      size: 16,
                      className: "text-success cursor-pointer",
                      onClick: function onClick(e) {
                        e.preventDefault();
                        (0,Utils/* download */.LR)(item, dispatch, react_toastify_esm/* toast */.Am);
                      }
                    })
                  })]
                }, k);
              })
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("h4", {
            className: "text-center text-muted my-1",
            children: [files && files.length || 0, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "docs"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TabPane/* default */.Z, {
          tabId: "4",
          children: products && products.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
            striped: true,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "#"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: intl.formatMessage({
                    id: "name"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: intl.formatMessage({
                    id: "quantity"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              style: {
                wordBreak: "break-word"
              },
              children: products.map(function (p, k) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                    scope: "row",
                    children: k + 1
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: p.name
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                      color: "light-info",
                      pill: true,
                      children: p.quantity
                    })
                  })]
                }, k);
              })
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("h4", {
            className: "text-center text-muted my-1",
            children: [products && products.length || 0, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "products"
            })]
          })
        })]
      })]
    }), ability.can(actions/* ACTIONS.DELETE_ACTION */.a.DELETE_ACTION, subjects/* SUBJECTS.OUTCOMING_SUBJECT */.k.OUTCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalFooter/* default */.Z, {
      children: [ability.can(actions/* ACTIONS.DELETE_ACTION */.a.DELETE_ACTION, subjects/* SUBJECTS.OUTCOMING_SUBJECT */.k.OUTCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
        color: "danger",
        onClick: onDelete,
        outline: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "delete"
        })
      }), ability.can(actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION, subjects/* SUBJECTS.OUTCOMING_SUBJECT */.k.OUTCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
        color: "primary",
        onClick: onEdit,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "edit"
        })
      })]
    })]
  }) : null;
};

/* harmony default export */ var OutcomingDetails = (OutcomingDetailsModal);
// EXTERNAL MODULE: ./src/configs/tableConstants.js
var tableConstants = __webpack_require__(82433);
// EXTERNAL MODULE: ./src/views/customComponents/ExportTable.js
var ExportTable = __webpack_require__(82475);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-octagon.js
var alert_octagon = __webpack_require__(61643);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x.js
var x = __webpack_require__(78268);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x-circle.js
var x_circle = __webpack_require__(13777);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit.js
var edit = __webpack_require__(32655);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/list.js
var list = __webpack_require__(60357);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Alert.js
var es_Alert = __webpack_require__(17834);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Form.js
var Form = __webpack_require__(15538);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/FormGroup.js
var FormGroup = __webpack_require__(82669);
// EXTERNAL MODULE: ./src/views/customComponents/InventorySelect.js
var InventorySelect = __webpack_require__(79976);
// EXTERNAL MODULE: ./src/views/customComponents/Toast.js
var Toast = __webpack_require__(25976);
;// CONCATENATED MODULE: ./src/views/apps/sale/list/Sidebar.js


















var Sidebar = function Sidebar(props) {
  var open = props.open,
      toggleSidebar = props.toggleSidebar,
      refresh = props.refresh,
      outcoming = props.outcoming,
      onClosed = props.onClosed,
      dispatch = props.dispatch;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      submitted = _useState2[0],
      setSubmitted = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      inventories = _useState6[0],
      setInventories = _useState6[1];

  var _useState7 = (0,react.useState)(0),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      fileSize = _useState8[0],
      setFileSize = _useState8[1];

  var _useState9 = (0,react.useState)([]),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      files = _useState10[0],
      setFiles = _useState10[1];

  var _useState11 = (0,react.useState)(new Date()),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      date = _useState12[0],
      setDate = _useState12[1];

  var _useState13 = (0,react.useState)(""),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      description = _useState14[0],
      setDescription = _useState14[1];

  var _useState15 = (0,react.useState)(""),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      beneficiary = _useState16[0],
      setBeneficiary = _useState16[1];

  var _useState17 = (0,react.useState)(null),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      quantity = _useState18[0],
      setQuantity = _useState18[1];

  var _useState19 = (0,react.useState)(null),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      inventorySelected = _useState20[0],
      setInventorySelected = _useState20[1];

  var _useState21 = (0,react.useState)(null),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      openQuantity = _useState22[0],
      setOpenQuantity = _useState22[1];

  var _useState23 = (0,react.useState)([]),
      _useState24 = (0,slicedToArray/* default */.Z)(_useState23, 2),
      products = _useState24[0],
      setProducts = _useState24[1];

  var _useState25 = (0,react.useState)([]),
      _useState26 = (0,slicedToArray/* default */.Z)(_useState25, 2),
      oldProducts = _useState26[0],
      setOldProducts = _useState26[1];

  var _useState27 = (0,react.useState)(null),
      _useState28 = (0,slicedToArray/* default */.Z)(_useState27, 2),
      maxQuantity = _useState28[0],
      setMaxQuantity = _useState28[1];

  var _useState29 = (0,react.useState)(false),
      _useState30 = (0,slicedToArray/* default */.Z)(_useState29, 2),
      productOnEdit = _useState30[0],
      setProductOnEdit = _useState30[1];

  var fileUploadRef = (0,react.useRef)();

  var handleQuantity = function handleQuantity() {
    var p = products.find(function (i) {
      return i.product === inventorySelected.value;
    });

    if (p) {
      p.quantity = quantity;
    } else {
      products.push({
        product: inventorySelected.value,
        name: inventorySelected.label,
        quantity: quantity
      });
    }

    setOpenQuantity(false);
    setQuantity(null);
    setInventorySelected(null);
  };

  var onQuantityClosed = function onQuantityClosed() {
    setQuantity(null);
    setInventorySelected(null);
    setProductOnEdit(false);
  };

  var intl = (0,useIntl/* default */.Z)();

  var onClose = function onClose() {
    setSubmitted(false);
    setError("");
    setInventorySelected(null);
    setInventories([]);
    setOldProducts([]);
    setProducts([]);
    onClosed();
    setFileSize(0);
    setFiles([]);
    setQuantity(null);
    setDate(new Date());
    setDescription("");
    setBeneficiary("");
  };

  var handleInventoryOption = function handleInventoryOption(data) {
    setInventories(data.map(function (u) {
      return {
        value: u.id,
        label: u.name,
        quantity: u.quantity,
        description: u.description,
        beneficiary: u.beneficiary,
        category: u.category
      };
    }));
  };

  var fetchInventories = function fetchInventories() {
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* INVENTORIES_URL */.y3, 0, Number.MAX_SAFE_INTEGER, [["name", "asc"]], {}], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", function (data) {
      return handleInventoryOption(data);
    }, null);
  };

  var onFileChange = function onFileChange(e) {
    (0,Utils/* uploadFiles */.IL)(e, react_toastify_esm/* toast */.Am, dispatch).then(function (result) {
      if (Number(result.size) + fileSize > 10000) {
        react_toastify_esm/* toast.error */.Am.error( /*#__PURE__*/(0,jsx_runtime.jsx)(Toast/* default */.Z, {
          type: "error",
          message: "fileMaxSizeError"
        }), {
          transition: react_toastify_esm/* Bounce */.sm,
          hideProgressBar: false,
          autoClose: 6000
        });
      } else {
        setFileSize(Number(result.size) + fileSize);
        setFiles([].concat((0,toConsumableArray/* default */.Z)(files), (0,toConsumableArray/* default */.Z)(result.files)));
      }
    });
  };

  var deleteFile = function deleteFile(k) {
    var docs = files.filter(function (y) {
      return y.id !== k.id;
    });
    var size = docs.reduce(function (a, b) {
      return a + b.size;
    }, 0) / 1024;
    setFiles(docs);
    setFileSize(size.toFixed(2));
  };

  var deleteProduct = function deleteProduct(k) {
    setProducts(products.filter(function (y) {
      return y.product !== k.product;
    }));
  };

  var editQuantity = function editQuantity(k) {
    setProductOnEdit(true);
    var p = products.find(function (i) {
      return i.product === k.product;
    });
    setInventorySelected({
      value: k.product,
      quantity: k.quantity,
      label: k.name
    });

    if (p) {
      setQuantity(p.quantity);
      setOpenQuantity(true);
    }
  };

  var onInventoryChange = function onInventoryChange(e) {
    setQuantity(null);
    setInventorySelected(null);
    setTimeout(function () {
      return setInventorySelected(e);
    });

    if (e && e.value) {
      var p = products.find(function (i) {
        return i.product === e.value;
      });

      if (p) {
        setQuantity(p.quantity);
      }
    }
  };

  var handleOutcomingsFetched = function handleOutcomingsFetched(res) {
    setDate(res.date);
    setProducts(res.products);
    setOldProducts(res.products);
    setDescription(res.description);
    setBeneficiary(res.beneficiary);
    var size = (res.docs || []).reduce(function (a, b) {
      return a + Number(b.size);
    }, 0) / 1024;
    setFileSize(size.toFixed(2));
    setFiles(res.docs || []);

    if (res.products) {
      setProducts(res.products.map(function (p) {
        return {
          product: p.id,
          name: p.name,
          quantity: p.quantity
        };
      }));
    }
  };

  var initOutcoming = function initOutcoming() {
    if (outcoming.id) {
      (0,utlis/* apiCall */.k_)(utlis/* get */.U2, [api_urls/* OUTCOMING_URL */.Qg, outcoming.id], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", handleOutcomingsFetched, toggleSidebar);
    }
  };

  (0,react.useEffect)(function () {
    var product = inventorySelected && inventories.find(function (p) {
      return p.value === inventorySelected.value;
    });
    var productSelected = inventorySelected && oldProducts && oldProducts.find(function (p) {
      return p.id === inventorySelected.value;
    });
    var qt = outcoming.id ? product ? Number(product.quantity) + Number(productSelected ? productSelected.quantity : 0) : 0 : productSelected ? Number(productSelected.quantity) : product ? Number(product.quantity) : 0;
    setMaxQuantity(qt);
  }, [inventorySelected]);
  (0,react.useEffect)(function () {
    if (open) {
      initOutcoming();
      fetchInventories();
    }
  }, [open]);
  var isSaveButtonDisabled = !date || !beneficiary;

  var onOutcomingSuccess = function onOutcomingSuccess() {
    toggleSidebar();
    refresh();
  };

  var onFail = function onFail(err) {
    if (err.code === 420) {
      setError("quantityError");
    } else {
      setError("somethingWrong");
    }
  };

  var onCreate = function onCreate(e) {
    e.preventDefault();
    setSubmitted(true);
    setError(false);

    if (!isSaveButtonDisabled) {
      (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* OUTCOMING_URL */.Qg, {
        date: moment_default()(date).format("YYYY-MM-DD"),
        products: products,
        description: description,
        beneficiary: beneficiary,
        files: files
      }], true, react_toastify_esm/* toast */.Am, dispatch, "outcomingCreatedSuccessfully", "", onOutcomingSuccess, onFail);
    }
  };

  var onUpdate = function onUpdate(e) {
    e.preventDefault();
    setSubmitted(true);
    setError(false);

    if (!isSaveButtonDisabled) {
      (0,utlis/* apiCall */.k_)(utlis/* update */.Vx, [api_urls/* OUTCOMING_URL */.Qg, outcoming.id, {
        date: moment_default()(date).format("YYYY-MM-DD"),
        products: products,
        description: description,
        beneficiary: beneficiary,
        files: files
      }], true, react_toastify_esm/* toast */.Am, dispatch, "outcomingUpdatedSuccessfully", "", onOutcomingSuccess, onFail);
    }
  };

  var ErrorComponent = function ErrorComponent() {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: error && /*#__PURE__*/(0,jsx_runtime.jsxs)(es_Alert/* default */.Z, {
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
      })
    });
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
          id: "".concat(outcoming.id ? "edit" : "add", "Outcoming")
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ModalBody/* default */.Z, {
      className: "flex-grow-1 pb-sm-0 pb-3",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* default */.Z, {
        onSubmit: outcoming.id ? onUpdate : onCreate,
        children: [ErrorComponent(), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "divider",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "divider-text",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "full-width d-flex align-items-center justify-content-center my-1",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
                className: "round center mr-50",
                color: "primary",
                onClick: function onClick() {
                  return setOpenQuantity(true);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(icons_package/* default */.Z, {
                  size: 14
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  className: "align-middle mx-25",
                  children: intl.formatMessage({
                    id: "selectProduct"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(plus/* default */.Z, {
                  size: 14
                })]
              })
            })
          })
        }), products && products.length ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "d-flex flex-column mb-2",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "sm",
            striped: true,
            responsive: true,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "#"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: intl.formatMessage({
                    id: "name"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: intl.formatMessage({
                    id: "quantity"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: intl.formatMessage({
                    id: "actions"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              style: {
                wordBreak: "break-word"
              },
              children: products.map(function (p, k) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                    scope: "row",
                    children: k + 1
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: p.name
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
                      color: "light-info",
                      pill: true,
                      children: p.quantity
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(x_circle/* default */.Z, {
                        size: 16,
                        className: "text-danger cursor-pointer ml-50",
                        onClick: function onClick() {
                          return deleteProduct(p);
                        }
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(edit/* default */.Z, {
                        size: 16,
                        className: "text-warning cursor-pointer ml-50",
                        onClick: function onClick() {
                          return editQuantity(p);
                        }
                      })]
                    })
                  })]
                }, k);
              })
            })]
          })
        }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "beneficiary"
          }),
          value: beneficiary,
          id: "beneficiary",
          name: "beneficiary",
          placeholder: "",
          requireStar: true,
          invalid: submitted && !beneficiary,
          invalidtext: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "required"
          }),
          onChange: function onChange(e) {
            return setBeneficiary(e.target.value);
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "date"
          }),
          required: true,
          id: "date",
          name: "date",
          className: "form-control",
          onChange: function onChange(date) {
            return setDate(date[0]);
          },
          value: date,
          requireStar: true,
          invalid: submitted && !date,
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
          name: "description",
          placeholder: "",
          type: "textarea",
          rows: "3",
          onChange: function onChange(e) {
            return setDescription(e.target.value);
          },
          prepend: {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(clipboard/* default */.Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "divider",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "divider-text",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "full-width d-flex align-items-center justify-content-center my-1",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
                className: "round center mr-50",
                color: "dark",
                onClick: function onClick() {
                  return fileUploadRef.current && fileUploadRef.current.click();
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(file/* default */.Z, {
                  size: 14
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  className: "align-middle mx-25",
                  children: intl.formatMessage({
                    id: "addDocument"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(plus/* default */.Z, {
                  size: 14
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
                  type: "file",
                  multiple: true,
                  onChange: onFileChange,
                  onClick: function onClick(event) {
                    event.target.value = null;
                  },
                  name: "attach-email-item",
                  id: "attach-email-item",
                  ref: fileUploadRef,
                  hidden: true
                })]
              }), fileSize > 0 ? /*#__PURE__*/(0,jsx_runtime.jsxs)("h6", {
                className: "mx-1 left",
                children: [fileSize, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "ko"
                })]
              }) : null]
            })
          })
        }), files && files.length ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "d-flex flex-column mb-2",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "sm",
            striped: true,
            responsive: true,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "#"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: intl.formatMessage({
                    id: "name"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: intl.formatMessage({
                    id: "size"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: intl.formatMessage({
                    id: "actions"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              style: {
                wordBreak: "break-word"
              },
              children: (files || []).map(function (item, k) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                    scope: "row",
                    children: k + 1
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      className: "text-dark",
                      children: item.name
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Badge/* default */.Z, {
                      color: "light-info",
                      pill: true,
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                        className: "text-dark",
                        children: "".concat((item.size / 1024).toFixed(2))
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                        className: "text-dark ml-50",
                        children: intl.formatMessage({
                          id: "ko"
                        })
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(x_circle/* default */.Z, {
                      size: 16,
                      className: "text-danger cursor-pointer",
                      onClick: function onClick() {
                        return deleteFile(item);
                      }
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(download_cloud/* default */.Z, {
                      size: 16,
                      className: "text-success cursor-pointer ml-50",
                      onClick: function onClick(e) {
                        e.preventDefault();
                        (0,Utils/* download */.LR)(item, dispatch, react_toastify_esm/* toast */.Am);
                      }
                    })]
                  })]
                }, k);
              })
            })]
          })
        }) : null, ErrorComponent(), /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.Z, {
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
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
      isOpen: openQuantity,
      toggle: function toggle() {
        return setOpenQuantity(!openQuantity);
      },
      onClosed: onQuantityClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ModalHeader/* default */.Z, {
        toggle: function toggle() {
          return setOpenQuantity(!openQuantity);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: productOnEdit ? "editProduct" : "addProduct"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalBody/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InventorySelect/* default */.Z, {
          disabled: productOnEdit,
          add: true,
          refresh: open,
          inv: inventorySelected,
          dispatch: dispatch,
          onChange: function onChange(e) {
            return onInventoryChange(e);
          }
        }), inventorySelected ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* default */.Z, {
            for: "rows-per-page",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "quantity"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
            prepend: {
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
                size: 14
              })
            },
            disabled: !inventorySelected,
            min: 0,
            max: maxQuantity,
            type: "number",
            step: "1",
            value: quantity,
            onChange: function onChange(e) {
              return setQuantity(Number(e.target.value));
            }
          })]
        }) : null]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ModalFooter/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default.Ripple */.Z.Ripple, {
          onClick: handleQuantity,
          color: "primary",
          disabled: Number(quantity) <= 0 || Number(quantity) > Number(maxQuantity),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: " ok"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var list_Sidebar = (Sidebar);
;// CONCATENATED MODULE: ./src/views/apps/sale/list/Table.js




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
            title: "spent",
            keys: ["date", "beneficiary", "responsible"],
            displays: [function (row) {
              return moment_default()(row.date).format("YYYY-MM-DD");
            }, null, function (row) {
              return row.responsibleName;
            }]
          })
        }), ability.can(actions/* ACTIONS.WRITE_ACTION */.a.WRITE_ACTION, subjects/* SUBJECTS.OUTCOMING_SUBJECT */.k.OUTCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
          color: "primary",
          onClick: onAdd,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(plus/* default */.Z, {
            size: 15
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle ml-25",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "addOutcoming"
            })
          })]
        })]
      })]
    })
  });
};

var OutcomingList = function OutcomingList() {
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
      outcoming = _useState12[0],
      setOutcoming = _useState12[1];

  var dispatch = (0,es/* useDispatch */.I0)();

  var _useState13 = (0,react.useState)(""),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      searchTerm = _useState14[0],
      setSearchTerm = _useState14[1];

  var _useState15 = (0,react.useState)(""),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      beneficiary = _useState16[0],
      setBeneficiary = _useState16[1];

  var _useState17 = (0,react.useState)(""),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      supplier = _useState18[0],
      setSupplier = _useState18[1];

  var _useState19 = (0,react.useState)(""),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      method = _useState20[0],
      setMethod = _useState20[1];

  var _useState21 = (0,react.useState)(null),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      from = _useState22[0],
      setFrom = _useState22[1];

  var _useState23 = (0,react.useState)(null),
      _useState24 = (0,slicedToArray/* default */.Z)(_useState23, 2),
      to = _useState24[0],
      setTo = _useState24[1];

  var _useState25 = (0,react.useState)(""),
      _useState26 = (0,slicedToArray/* default */.Z)(_useState25, 2),
      status = _useState26[0],
      setStatus = _useState26[1];

  var _useState27 = (0,react.useState)(false),
      _useState28 = (0,slicedToArray/* default */.Z)(_useState27, 2),
      sidebarOpen = _useState28[0],
      setSidebarOpen = _useState28[1];

  var _useState29 = (0,react.useState)(false),
      _useState30 = (0,slicedToArray/* default */.Z)(_useState29, 2),
      detailsOpen = _useState30[0],
      setDetailsOpen = _useState30[1];

  var _useState31 = (0,react.useState)(0),
      _useState32 = (0,slicedToArray/* default */.Z)(_useState31, 2),
      timer = _useState32[0],
      setTimer = _useState32[1];

  var intl = (0,useIntl/* default */.Z)();
  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var _useState33 = (0,react.useState)(false),
      _useState34 = (0,slicedToArray/* default */.Z)(_useState33, 2),
      filterOpen = _useState34[0],
      setFilterOpen = _useState34[1];

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
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* OUTCOMINGS_URL */.W, pageIndex, pageSize, order, filter], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", handleData, null);
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

  var handleBeneficiary = function handleBeneficiary(val) {
    setPageIndex(1);
    setBeneficiary(val);
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      beneficiary: val
    }));
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, _objectSpread(_objectSpread({}, filter), {}, {
        beneficiary: val
      }));
    }, 700));
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
  };

  var deleteOutcoming = function deleteOutcoming(id) {
    (0,Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteOutcomingQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* remove */.Od, [api_urls/* OUTCOMING_URL */.Qg, id], true, react_toastify_esm/* toast */.Am, dispatch, "outcomingDeletedSuccessfully", "somethingWrong", function () {
          return getData(pageIndex, pageSize, order, filter);
        }, null);
      }
    });
  };

  var editOutcoming = function editOutcoming(s) {
    setOutcoming(s);
    toggleSidebar();
  };

  var viewOutcoming = function viewOutcoming(s) {
    setOutcoming(s);
    toggleDetails();
  }; // ** Table data to render


  var dataToRender = function dataToRender() {
    var _data$rows, _data$rows2;

    var filters = {
      name: searchTerm,
      beneficiary: beneficiary
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
    return setOutcoming({});
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
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              md: "4",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
                prepend: {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(clipboard/* default */.Z, {
                    size: 14
                  })
                },
                placeholder: intl.formatMessage({
                  id: "searchByDescription"
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
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, {
                prepend: {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.Z, {
                    size: 14
                  })
                },
                placeholder: intl.formatMessage({
                  id: "searchByBeneficiary"
                }),
                id: "beneficiary",
                type: "text",
                value: beneficiary,
                onChange: function onChange(e) {
                  return handleBeneficiary(e.target.value);
                }
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
                  id: "date"
                }),
                id: "from",
                value: [from, to],
                onChange: function onChange(e) {
                  return handleDate(e);
                }
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_cjs/* default */.ZP, {
          theme: skin,
          onRowClicked: function onRowClicked(row) {
            return viewOutcoming(row);
          },
          highlightOnHover: true,
          pointerOnHover: true,
          noHeader: true,
          pagination: true,
          subHeader: true,
          responsive: true,
          paginationServer: true,
          columns: columns(deleteOutcoming, editOutcoming, viewOutcoming, ability, intl),
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
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(OutcomingDetails, {
        dispatch: dispatch,
        setOutcoming: setOutcoming,
        toggleSidebar: toggleSidebar,
        openDetails: detailsOpen,
        toggleDetails: toggleDetails,
        onClosed: onSideClosed,
        refresh: function refresh() {
          return getData(pageIndex, pageSize, order, filter);
        },
        outcoming: outcoming
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(list_Sidebar, {
        dispatch: dispatch,
        open: sidebarOpen,
        toggleSidebar: toggleSidebar,
        onClosed: onSideClosed,
        refresh: function refresh() {
          return getData(pageIndex, pageSize, order, filter);
        },
        outcoming: outcoming
      })]
    })
  });
};

/* harmony default export */ var list_Table = (OutcomingList);
;// CONCATENATED MODULE: ./src/views/apps/sale/list/index.js
// ** User List Component
// ** Styles





var List = function List() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "app-user-list",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(list_Table, {})
  });
};

/* harmony default export */ var sale_list = (List);

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