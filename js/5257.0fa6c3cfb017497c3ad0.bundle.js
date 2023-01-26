"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[5257],{

/***/ 25257:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ incoming_list; }
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
;// CONCATENATED MODULE: ./src/views/apps/incoming/list/columns.js
// ** React Imports
 // ** Custom Components
// ** Third Party Components









var columns = function columns(deleteIncoming, editIncoming, viewIncoming, ability, intl) {
  return [{
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
      id: "supplier"
    }),
    selector: "supplierName",
    sortable: false,
    cell: function cell(row) {
      return row.supplierName;
    }
  }, {
    name: intl.formatMessage({
      id: "docs"
    }),
    selector: "docs",
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
          children: [ability.can(actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION, subjects/* SUBJECTS.INCOMING_SUBJECT */.k.INCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            tag: react_router_dom/* Link */.rU,
            to: "#",
            onClick: function onClick() {
              return viewIncoming(row);
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
          }), ability.can(actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION, subjects/* SUBJECTS.INCOMING_SUBJECT */.k.INCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            tag: react_router_dom/* Link */.rU,
            to: "#",
            onClick: function onClick() {
              return editIncoming(row);
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
          }), ability.can(actions/* ACTIONS.DELETE_ACTION */.a.DELETE_ACTION, subjects/* SUBJECTS.INCOMING_SUBJECT */.k.INCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownItem/* default */.Z, {
            className: "w-100",
            onClick: function onClick() {
              return deleteIncoming(row.id);
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
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/user.js
var user = __webpack_require__(73752);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/download-cloud.js
var download_cloud = __webpack_require__(7708);
// EXTERNAL MODULE: ./node_modules/moment/locale/fr.js
var fr = __webpack_require__(94470);
// EXTERNAL MODULE: ./node_modules/moment/locale/ar-dz.js
var ar_dz = __webpack_require__(14130);
// EXTERNAL MODULE: ./src/utility/Utils.js
var Utils = __webpack_require__(16724);
// EXTERNAL MODULE: ./src/configs/api-urls.js
var api_urls = __webpack_require__(88295);
;// CONCATENATED MODULE: ./src/views/apps/incoming/list/IncomingDetails.js




















var IncomingDetailsModal = function IncomingDetailsModal(props) {
  var dispatch = props.dispatch,
      openDetails = props.openDetails,
      toggleDetails = props.toggleDetails,
      incoming = props.incoming,
      setIncoming = props.setIncoming,
      toggleSidebar = props.toggleSidebar,
      refresh = props.refresh,
      onClosed = props.onClosed;
  var intl = (0,useIntl/* default */.Z)();
  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var _useState = (0,react.useState)(0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      fileSize = _useState2[0],
      setFileSize = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      files = _useState4[0],
      setFiles = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      products = _useState6[0],
      setProducts = _useState6[1];

  var _useState7 = (0,react.useState)({}),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      currentIncoming = _useState8[0],
      setCurrentIncoming = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      isOnEdit = _useState10[0],
      setIsOnEdit = _useState10[1];

  var _useState11 = (0,react.useState)("1"),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      active = _useState12[0],
      setActive = _useState12[1];

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
      id: "deleteIncomingQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* remove */.Od, [api_urls/* INCOMING_URL */._F, incoming.id], true, react_toastify_esm/* toast */.Am, dispatch, "incomingDeletedSuccessfully", "somethingWrong", onDeleteSuccess, null);
      }
    });
  };

  var handleIncomingFetched = function handleIncomingFetched(res) {
    var size = (res.docs || []).reduce(function (a, b) {
      return a + Number(b.size);
    }, 0) / 1024;
    setFileSize(size.toFixed(2));
    setFiles(res.docs || []);
    setCurrentIncoming(res);
    setProducts(res.products || []);
  };

  var initIncoming = function initIncoming() {
    if (incoming.id) {
      (0,utlis/* apiCall */.k_)(utlis/* get */.U2, [api_urls/* INCOMING_URL */._F, incoming.id], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", handleIncomingFetched, null);
    }
  };

  (0,react.useEffect)(function () {
    moment_default().locale(intl.locale === "ar" ? "ar-dz" : intl.locale);

    if (openDetails) {
      initIncoming();
    }
  }, [openDetails]);
  return incoming ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
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
            children: [currentIncoming.company ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "transaction-item",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Media/* default */.Z, {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
                  color: "light-primary",
                  className: "rounded",
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.Z, {
                    size: 18
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Media/* default */.Z, {
                  body: true,
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("h6", {
                    className: "transaction-title",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "supplier"
                    }), ":"]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "font-weight-bolder d-flex flex-column text-right ml-1",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: currentIncoming.supplierName
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
                  children: currentIncoming.supplierEmail || currentIncoming.supplierPhone || ""
                })]
              })]
            }) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
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
                children: moment_default()(currentIncoming.date).format("dddd D MMMM  YYYY")
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
          children: currentIncoming.description ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: currentIncoming.description
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
    }), ability.can(actions/* ACTIONS.DELETE_ACTION */.a.DELETE_ACTION, subjects/* SUBJECTS.INCOMING_SUBJECT */.k.INCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalFooter/* default */.Z, {
      children: [ability.can(actions/* ACTIONS.DELETE_ACTION */.a.DELETE_ACTION, subjects/* SUBJECTS.INCOMING_SUBJECT */.k.INCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
        color: "danger",
        onClick: onDelete,
        outline: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "delete"
        })
      }), ability.can(actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION, subjects/* SUBJECTS.INCOMING_SUBJECT */.k.INCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
        color: "primary",
        onClick: onEdit,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "edit"
        })
      })]
    })]
  }) : null;
};

/* harmony default export */ var IncomingDetails = (IncomingDetailsModal);
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
// EXTERNAL MODULE: ./src/views/customComponents/SupplierSelect.js
var SupplierSelect = __webpack_require__(99726);
// EXTERNAL MODULE: ./src/views/customComponents/Toast.js
var Toast = __webpack_require__(25976);
;// CONCATENATED MODULE: ./src/views/apps/incoming/list/Sidebar.js



















var Sidebar = function Sidebar(props) {
  var open = props.open,
      toggleSidebar = props.toggleSidebar,
      refresh = props.refresh,
      incoming = props.incoming,
      onClosed = props.onClosed,
      dispatch = props.dispatch;

  var _useState = (0,react.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      supplier = _useState2[0],
      setSupplier = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      submitted = _useState4[0],
      setSubmitted = _useState4[1];

  var _useState5 = (0,react.useState)(null),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0,react.useState)([]),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      inventories = _useState8[0],
      setInventories = _useState8[1];

  var _useState9 = (0,react.useState)(0),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      fileSize = _useState10[0],
      setFileSize = _useState10[1];

  var _useState11 = (0,react.useState)([]),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      files = _useState12[0],
      setFiles = _useState12[1];

  var _useState13 = (0,react.useState)(new Date()),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      date = _useState14[0],
      setDate = _useState14[1];

  var _useState15 = (0,react.useState)(""),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      description = _useState16[0],
      setDescription = _useState16[1];

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

  var _useState25 = (0,react.useState)(false),
      _useState26 = (0,slicedToArray/* default */.Z)(_useState25, 2),
      productOnEdit = _useState26[0],
      setProductOnEdit = _useState26[1];

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
    setSupplier(null);
    setSubmitted(false);
    setError("");
    setInventorySelected(null);
    setInventories([]);
    setProducts([]);
    onClosed();
    setFileSize(0);
    setFiles([]);
    setQuantity(null);
    setDate(new Date());
    setDescription("");
  };

  var handleInventoryOption = function handleInventoryOption(data) {
    setInventories(data.map(function (u) {
      return {
        value: u.id,
        label: u.name,
        quantity: u.quantity,
        description: u.description,
        company: u.company,
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

  var handleIncomingsFetched = function handleIncomingsFetched(res) {
    setDate(res.date);
    setProducts(res.products);
    setDescription(res.description);
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

    if (res.company) {
      setSupplier({
        label: res.supplierName,
        value: res.supplierId,
        email: res.supplierEmail,
        phone: res.supplierPhone
      });
    }
  };

  var initIncoming = function initIncoming() {
    if (incoming.id) {
      (0,utlis/* apiCall */.k_)(utlis/* get */.U2, [api_urls/* INCOMING_URL */._F, incoming.id], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", handleIncomingsFetched, toggleSidebar);
    }
  };

  (0,react.useEffect)(function () {
    if (open) {
      initIncoming();
      fetchInventories();
    }
  }, [open]);
  var isSaveButtonDisabled = !date;

  var onIncomingSuccess = function onIncomingSuccess() {
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
      (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* INCOMING_URL */._F, {
        date: moment_default()(date).format("YYYY-MM-DD"),
        products: products,
        company: supplier ? supplier.value : null,
        description: description,
        files: files
      }], true, react_toastify_esm/* toast */.Am, dispatch, "incomingCreatedSuccessfully", "", onIncomingSuccess, onFail);
    }
  };

  var onUpdate = function onUpdate(e) {
    e.preventDefault();
    setSubmitted(true);
    setError(false);

    if (!isSaveButtonDisabled) {
      (0,utlis/* apiCall */.k_)(utlis/* update */.Vx, [api_urls/* INCOMING_URL */._F, incoming.id, {
        date: moment_default()(date).format("YYYY-MM-DD"),
        products: products,
        description: description,
        company: supplier ? supplier.value : null,
        files: files
      }], true, react_toastify_esm/* toast */.Am, dispatch, "incomingUpdatedSuccessfully", "", onIncomingSuccess, onFail);
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
          id: "".concat(incoming.id ? "edit" : "add", "Incoming")
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ModalBody/* default */.Z, {
      className: "flex-grow-1 pb-sm-0 pb-3",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* default */.Z, {
        onSubmit: incoming.id ? onUpdate : onCreate,
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
        }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(SupplierSelect/* default */.Z, {
          add: true,
          edit: true,
          refresh: open,
          sup: supplier,
          dispatch: dispatch,
          onChange: function onChange(e) {
            return setSupplier(e);
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
          edit: true,
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
          disabled: Number(quantity) <= 0,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: " ok"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var list_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./src/views/customComponents/SessionSelect.js
var SessionSelect = __webpack_require__(54615);
;// CONCATENATED MODULE: ./src/views/apps/incoming/list/Table.js




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
            keys: ["date", "supplier", "responsible"],
            displays: [function (row) {
              return moment_default()(row.date).format("YYYY-MM-DD");
            }, function (row) {
              return row.supplierName;
            }, function (row) {
              return row.responsibleName;
            }]
          })
        }), ability.can(actions/* ACTIONS.WRITE_ACTION */.a.WRITE_ACTION, subjects/* SUBJECTS.INCOMING_SUBJECT */.k.INCOMING_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default.Ripple */.Z.Ripple, {
          color: "primary",
          onClick: onAdd,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(plus/* default */.Z, {
            size: 15
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "align-middle ml-25",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "addIncoming"
            })
          })]
        })]
      })]
    })
  });
};

var IncomingList = function IncomingList() {
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
      incoming = _useState12[0],
      setIncoming = _useState12[1];

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

  var _useState19 = (0,react.useState)(null),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      from = _useState20[0],
      setFrom = _useState20[1];

  var _useState21 = (0,react.useState)(null),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      to = _useState22[0],
      setTo = _useState22[1];

  var _useState23 = (0,react.useState)(false),
      _useState24 = (0,slicedToArray/* default */.Z)(_useState23, 2),
      sidebarOpen = _useState24[0],
      setSidebarOpen = _useState24[1];

  var _useState25 = (0,react.useState)(false),
      _useState26 = (0,slicedToArray/* default */.Z)(_useState25, 2),
      detailsOpen = _useState26[0],
      setDetailsOpen = _useState26[1];

  var _useState27 = (0,react.useState)(0),
      _useState28 = (0,slicedToArray/* default */.Z)(_useState27, 2),
      timer = _useState28[0],
      setTimer = _useState28[1];

  var intl = (0,useIntl/* default */.Z)();
  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var _useState29 = (0,react.useState)(false),
      _useState30 = (0,slicedToArray/* default */.Z)(_useState29, 2),
      filterOpen = _useState30[0],
      setFilterOpen = _useState30[1];

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
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* INCOMINGS_URL */.FX, pageIndex, pageSize, order, filter], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", handleData, null);
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

  var deleteIncoming = function deleteIncoming(id) {
    (0,Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteIncomingQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* remove */.Od, [api_urls/* INCOMING_URL */._F, id], true, react_toastify_esm/* toast */.Am, dispatch, "incomingDeletedSuccessfully", "somethingWrong", function () {
          return getData(pageIndex, pageSize, order, filter);
        }, null);
      }
    });
  };

  var editIncoming = function editIncoming(s) {
    setIncoming(s);
    toggleSidebar();
  };

  var viewIncoming = function viewIncoming(s) {
    setIncoming(s);
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
    return setIncoming({});
  };

  var onAdd = function onAdd() {
    setSidebarOpen(true);
  };

  var handleSupplier = function handleSupplier(val) {
    setPageIndex(1);
    setSupplier(val);
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      company: val
    }));
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      return getData(1, pageSize, order, _objectSpread(_objectSpread({}, filter), {}, {
        company: val
      }));
    }, 700));
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
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SupplierSelect/* default */.Z // sup={supplier}
              , {
                refresh: true,
                label: false,
                dispatch: dispatch,
                onChange: function onChange(e) {
                  return handleSupplier(e ? e.value : null);
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
            return viewIncoming(row);
          },
          highlightOnHover: true,
          pointerOnHover: true,
          noHeader: true,
          pagination: true,
          subHeader: true,
          responsive: true,
          paginationServer: true,
          columns: columns(deleteIncoming, editIncoming, viewIncoming, ability, intl),
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
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(IncomingDetails, {
        dispatch: dispatch,
        setIncoming: setIncoming,
        toggleSidebar: toggleSidebar,
        openDetails: detailsOpen,
        toggleDetails: toggleDetails,
        onClosed: onSideClosed,
        refresh: function refresh() {
          return getData(pageIndex, pageSize, order, filter);
        },
        incoming: incoming
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(list_Sidebar, {
        dispatch: dispatch,
        open: sidebarOpen,
        toggleSidebar: toggleSidebar,
        onClosed: onSideClosed,
        refresh: function refresh() {
          return getData(pageIndex, pageSize, order, filter);
        },
        incoming: incoming
      })]
    })
  });
};

/* harmony default export */ var list_Table = (IncomingList);
;// CONCATENATED MODULE: ./src/views/apps/incoming/list/index.js
// ** User List Component
// ** Styles





var List = function List() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "app-user-list",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(list_Table, {})
  });
};

/* harmony default export */ var incoming_list = (List);

/***/ }),

/***/ 99726:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(42982);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45987);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55678);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(61896);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55654);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(73752);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(61643);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(29752);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(60329);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(64856);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97975);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(82669);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(67954);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(85677);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(32701);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(10684);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(17834);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(97985);
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




















var SupplierSelect = function SupplierSelect(_ref) {
  var refresh = _ref.refresh,
      dispatch = _ref.dispatch,
      sup = _ref.sup,
      onChange = _ref.onChange,
      edit = _ref.edit,
      add = _ref.add,
      label = _ref.label,
      disabled = _ref.disabled;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState, 2),
      submittedSupplier = _useState2[0],
      setSubmittedSupplier = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState3, 2),
      errorSupplier = _useState4[0],
      setErrorSupplier = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState5, 2),
      openSupplier = _useState6[0],
      setOpenSupplier = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState7, 2),
      suppliers = _useState8[0],
      setSuppliers = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState9, 2),
      suppliersFetched = _useState10[0],
      setSuppliersFetched = _useState10[1];

  var ability = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utility_context_Can__WEBPACK_IMPORTED_MODULE_7__/* .AbilityContext */ .v);

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState11, 2),
      supplierSelected = _useState12[0],
      setSupplierSelected = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState13, 2),
      supplier = _useState14[0],
      setSupplier = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useState15, 2),
      timer = _useState16[0],
      setTimer = _useState16[1];

  var _useSkin = (0,_utility_hooks_useSkin__WEBPACK_IMPORTED_MODULE_12__/* .useSkin */ .Q)(),
      _useSkin2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(_useSkin, 1),
      skin = _useSkin2[0];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();

  var onEditSupplier = function onEditSupplier() {
    var c = suppliers.find(function (c) {
      return c.value === Number(supplierSelected.value);
    });

    if (c) {
      (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .get */ .U2, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SUPPLIER_URL */ .Nw, c.value], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
        setSupplier(data);
        setOpenSupplier(true);
      }, null);
    }
  };

  var OptionComponent = function OptionComponent(_ref2) {
    var data = _ref2.data,
        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(_ref2, _excluded);

    if (data.type === "add-supplier") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return setOpenSupplier(true);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          size: 14
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "align-middle ml-50",
          children: data.label
        })]
      });
    } else if (data.type === "edit-supplier") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        className: "text-left rounded-0",
        color: data.color,
        block: true,
        onClick: function onClick() {
          return onEditSupplier();
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
        children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "text-break",
          children: data.label
        }), " "]
      }));
    }
  };

  var onSupplierClosed = function onSupplierClosed() {
    setSubmittedSupplier(false);
    setOpenSupplier(false);
    setSupplier({});
    setErrorSupplier("");
  };

  function handleSuppliersFetched(data, id) {
    setSuppliersFetched(data);
    var list = data.map(function (c) {
      return {
        value: c.id,
        label: c.name,
        description: c.description
      };
    });

    if (id && list.length > 0) {
      onSupplierChange(list[0]);
    }

    if (edit && supplierSelected && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.EDIT_ACTION */ .a.EDIT_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.SUPPLIER_SUBJECT */ .k.SUPPLIER_SUBJECT)) {
      list = [{
        value: "edit-supplier",
        label: intl.formatMessage({
          id: "editSupplier"
        }),
        type: "edit-supplier",
        color: "flat-warning"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(list));
    }

    if (add && ability.can(_configs_actions__WEBPACK_IMPORTED_MODULE_9__/* .ACTIONS.WRITE_ACTION */ .a.WRITE_ACTION, _configs_subjects__WEBPACK_IMPORTED_MODULE_10__/* .SUBJECTS.SUPPLIER_SUBJECT */ .k.SUPPLIER_SUBJECT)) {
      list = [{
        value: "add-supplier",
        label: intl.formatMessage({
          id: "addSupplier"
        }),
        type: "add-supplier",
        color: "flat-success"
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(list));
    }

    setSuppliers(list);
  }

  var getSuppliers = function getSuppliers(id) {
    (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAllPaged */ .Ki, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SUPPLIERS_URL */ .i, 0, 20, [["name", "asc"]], id ? {
      id: id
    } : {}], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
      return handleSuppliersFetched(data.rows, id);
    }, null);
  };

  var onSupplierSuccess = function onSupplierSuccess(_ref3) {
    var id = _ref3.id;
    setOpenSupplier(false);
    setSupplierSelected(null);
    onChange(null);
    getSuppliers(id);
  };

  var filterSuppliers = function filterSuppliers(val) {
    if (val) {
      clearTimeout(timer);
      setTimer(setTimeout(function () {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .getAllPaged */ .Ki, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SUPPLIERS_URL */ .i, 0, 20, [["name", "asc"]], {
          name: val
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "", "somethingWrong", function (data) {
          return handleSuppliersFetched(data.rows);
        }, null);
      }, 700));
    }
  };

  var deleteSupplier = function deleteSupplier() {
    (0,_Alert__WEBPACK_IMPORTED_MODULE_8__/* .SweetAlert */ .o)(intl.formatMessage({
      id: "delete"
    }), intl.formatMessage({
      id: "deleteSupplierQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SUPPLIER_URL */ .Nw, supplier.id, {
          deleted: true
        }], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "supplierDeletedSuccessfully", "somethingWrong", onSupplierSuccess, null);
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setSupplierSelected(sup);
  }, [sup]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (refresh) {
      getSuppliers();
    }
  }, [refresh]);

  var onSupplierChange = function onSupplierChange(e) {
    setSupplierSelected(e);
    onChange(e);
  };

  var onSupplierFail = function onSupplierFail(err) {
    if (err.code === 414) {
      setErrorSupplier("nameExist");
    } else {
      setErrorSupplier("somethingWrong");
    }
  };

  var saveSupplier = function saveSupplier(e) {
    e.preventDefault();
    setErrorSupplier(false);
    setSubmittedSupplier(true);

    if (supplier.name) {
      if (supplier.id) {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .update */ .Vx, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SUPPLIER_URL */ .Nw, supplier.id, supplier], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "supplierUpdatedSuccessfully", "", onSupplierSuccess, onSupplierFail);
      } else {
        (0,_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .apiCall */ .k_)(_api_utlis__WEBPACK_IMPORTED_MODULE_5__/* .insert */ .$T, [_configs_api_urls__WEBPACK_IMPORTED_MODULE_6__/* .SUPPLIER_URL */ .Nw, supplier], true, react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am, dispatch, "supplierCreatedSuccessfully", "", onSupplierSuccess, onSupplierFail);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
      children: [label !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        for: "supplier",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          id: "supplier"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        style: {
          border: "".concat(skin === "dark" ? "#404656" : "#d8d6de", " solid 1px"),
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
            borderLeft: "".concat(skin === "dark" ? "#404656" : "#d8d6de", " solid 1px")
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
              return handleSuppliersFetched(suppliersFetched);
            },
            id: "supplier",
            placeholder: intl.formatMessage({
              id: "selectSupplier"
            }),
            value: supplierSelected,
            components: {
              Option: OptionComponent
            },
            noOptionsMessage: function noOptionsMessage() {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                id: "noRecords"
              });
            },
            onChange: function onChange(e) {
              return onSupplierChange(e);
            },
            isClearable: true,
            theme: _utility_Utils__WEBPACK_IMPORTED_MODULE_11__/* .selectThemeColors */ .ss,
            options: suppliers,
            classNamePrefix: "select",
            onInputChange: function onInputChange(v) {
              return filterSuppliers(v);
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
      isOpen: openSupplier,
      toggle: function toggle() {
        return setOpenSupplier(!openSupplier);
      },
      onClosed: onSupplierClosed,
      className: "modal-dialog-centered",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
        toggle: function toggle() {
          return setOpenSupplier(!openSupplier);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          id: supplier.id ? "editSupplier" : "addSupplier"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
        children: [errorSupplier && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
          color: "danger",
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "alert-body font-small-2 flex-grow-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("small", {
                className: "mr-50",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                  id: errorSupplier
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
          value: supplier.name,
          id: "name",
          name: "name",
          requireStar: true,
          placeholder: "",
          onChange: function onChange(e) {
            return setSupplier(_objectSpread(_objectSpread({}, supplier), {}, {
              name: e.target.value
            }));
          },
          invalid: submittedSupplier && !supplier.name,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "required"
          }),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
              size: 14
            })
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "email"
          }),
          value: supplier.email,
          id: "email",
          name: "email",
          placeholder: "",
          onChange: function onChange(e) {
            return setSupplier(_objectSpread(_objectSpread({}, supplier), {}, {
              email: e.target.value
            }));
          },
          invalid: submittedSupplier && supplier.email && !(0,_utility_Utils__WEBPACK_IMPORTED_MODULE_11__/* .validateEmail */ .oH)(supplier.email),
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
              size: 14
            })
          },
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "invalidEmail"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "phone"
          }),
          value: supplier.phone,
          id: "phone",
          name: "phone",
          placeholder: "",
          invalid: submittedSupplier && supplier.phone && supplier.phone.length !== 10,
          invalidtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "phoneLengthError"
          }),
          onChange: function onChange(e) {
            return setSupplier(_objectSpread(_objectSpread({}, supplier), {}, {
              phone: e.target.value.replace(/ /g, "")
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
              size: 14
            })
          },
          mask: {
            blocks: [4, 2, 2, 2],
            numericOnly: true
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "address"
          }),
          type: "textarea",
          value: supplier.address,
          id: "address",
          placeholder: "",
          name: "address",
          className: "input-group-merge",
          onChange: function onChange(e) {
            return setSupplier(_objectSpread(_objectSpread({}, supplier), {}, {
              address: e.target.value
            }));
          },
          prepend: {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
              size: 14
            })
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Ripple */ .Z.Ripple, {
          onClick: saveSupplier,
          color: "primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "save"
          })
        }), supplier.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Ripple */ .Z.Ripple, {
          color: "danger",
          type: "button",
          onClick: deleteSupplier,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "delete"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SupplierSelect);

/***/ })

}]);