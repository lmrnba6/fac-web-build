"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[2241],{

/***/ 64584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ src_App; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/configs/themeConfig.js
var themeConfig = __webpack_require__(55735);
;// CONCATENATED MODULE: ./src/utility/hooks/useLayout.js

//** React Imports
 // ** Configs


var useLayout = function useLayout() {
  // ** States
  var _useState = (0,react.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      lastLayout = _useState2[0],
      setLastLayout = _useState2[1];

  var _useState3 = (0,react.useState)(function () {
    try {
      return themeConfig/* default.layout.type */.Z.layout.type;
    } catch (error) {
      // ** If error return initialValue
      console.log(error);
      return themeConfig/* default.layout.type */.Z.layout.type;
    }
  }),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      layout = _useState4[0],
      setLayout = _useState4[1]; // ** Return a wrapped version of useState's setter function


  var setValue = function setValue(value) {
    try {
      // ** Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(layout) : value; // ** Set state

      setLayout(valueToStore);
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  var handleLayout = function handleLayout() {
    // ** If layout is horizontal & screen size is equals to or below 1200
    if (layout === 'horizontal' && window.innerWidth <= 1200) {
      setLayout('vertical');
      setLastLayout('horizontal');
    } // ** If lastLayout is horizontal & screen size is equals to or above 1200


    if (lastLayout === 'horizontal' && window.innerWidth >= 1200) {
      setLayout('horizontal');
    }
  }; // ** ComponentDidMount


  (0,react.useEffect)(function () {
    handleLayout();
  }, []);
  (0,react.useEffect)(function () {
    // ** Window Resize Event
    window.addEventListener('resize', handleLayout);
  }, [layout, lastLayout]);
  return [layout, setValue];
};
// EXTERNAL MODULE: ./src/utility/context/Can.js
var Can = __webpack_require__(6756);
;// CONCATENATED MODULE: ./src/utility/hooks/useRouterTransition.js

//** React Imports
 // ** Configs


var useRouterTransition = function useRouterTransition() {
  // ** State
  var _useState = (0,react.useState)(function () {
    try {
      return themeConfig/* default.layout.routerTransition */.Z.layout.routerTransition;
    } catch (error) {
      // ** If error return initialValue
      console.log(error);
      return themeConfig/* default.layout.routerTransition */.Z.layout.routerTransition;
    }
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      transition = _useState2[0],
      setTransition = _useState2[1]; // ** Return a wrapped version of useState's setter function


  var setValue = function setValue(value) {
    try {
      // ** Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(transition) : value; // ** Set state

      setTransition(valueToStore);
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [transition, setValue];
};
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var node_modules_classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(node_modules_classnames);
// EXTERNAL MODULE: ./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(85256);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Breadcrumb.js
var Breadcrumb = __webpack_require__(23923);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/BreadcrumbItem.js
var BreadcrumbItem = __webpack_require__(65881);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/@core/components/breadcrumbs/index.js
// ** React Imports
 // ** Third Party Components








var BreadCrumbs = function BreadCrumbs(props) {
  var history = (0,react_router/* useHistory */.k6)(); // ** Props

  var breadCrumbTitle = props.breadCrumbTitle,
      breadCrumbParent = props.breadCrumbParent,
      breadCrumbParent2 = props.breadCrumbParent2,
      breadCrumbParent3 = props.breadCrumbParent3,
      breadCrumbActive = props.breadCrumbActive,
      breadCrumbParentRoute = props.breadCrumbParentRoute,
      breadCrumbParent2Route = props.breadCrumbParent2Route,
      breadCrumbParent3Route = props.breadCrumbParent3Route;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "content-header row",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "content-header-left col-md-9 col-12 mb-2",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "row breadcrumbs-top",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "col-12",
          children: [breadCrumbTitle ? /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
            className: "content-header-title float-left mb-0",
            children: breadCrumbTitle
          }) : "", /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Breadcrumb/* default */.Z, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbItem/* default */.Z, {
                tag: "li",
                className: "text-primary cursor-pointer",
                onClick: function onClick() {
                  return history.push("/");
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "home"
                })
              }), breadCrumbParent ? /*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbItem/* default */.Z, {
                tag: "li",
                className: "text-primary",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, {
                  to: breadCrumbParentRoute || "#",
                  children: breadCrumbParent
                })
              }) : "", breadCrumbParent2 ? /*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbItem/* default */.Z, {
                tag: "li",
                className: "text-primary",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, {
                  to: breadCrumbParent2Route || "#",
                  children: breadCrumbParent2
                })
              }) : "", breadCrumbParent3 ? /*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbItem/* default */.Z, {
                tag: "li",
                className: "text-primary",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, {
                  to: breadCrumbParent3Route || "#",
                  children: breadCrumbParent3
                })
              }) : "", /*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbItem/* default */.Z, {
                tag: "li",
                active: true,
                children: breadCrumbActive
              })]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ var breadcrumbs = (BreadCrumbs); // ** PropTypes

BreadCrumbs.propTypes = {
  breadCrumbTitle: (prop_types_default()).string.isRequired,
  breadCrumbActive: (prop_types_default()).string.isRequired
};
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/redux/actions/layout/index.js
var actions_layout = __webpack_require__(22974);
// EXTERNAL MODULE: ./node_modules/animate.css/animate.css
var animate = __webpack_require__(92399);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var components_useIntl = __webpack_require__(86896);
;// CONCATENATED MODULE: ./src/@core/layouts/components/layout-wrapper/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports
 // ** Third Party Components


 // ** Store & Actions


 // ** Styles






var LayoutWrapper = function LayoutWrapper(props) {
  var _classnames;

  // ** Props
  var layout = props.layout,
      children = props.children,
      appLayout = props.appLayout,
      wrapperClass = props.wrapperClass,
      transition = props.transition,
      routeMeta = props.routeMeta; // ** Store Vars

  var dispatch = (0,es/* useDispatch */.I0)();
  var store = (0,es/* useSelector */.v9)(function (state) {
    return state;
  });
  var navbarStore = store.navbar;
  var contentWidth = store.layout.contentWidth; //** Vars

  var Tag = layout === 'HorizontalLayout' && !appLayout ? 'div' : react.Fragment; // ** Clean Up Function

  var cleanUp = function cleanUp() {
    if (routeMeta) {
      if (routeMeta.contentWidth) {
        dispatch((0,actions_layout/* handleContentWidth */.eF)('full'));
      }

      if (routeMeta.menuCollapsed) {
        dispatch((0,actions_layout/* handleMenuCollapsed */.mB)(!routeMeta.menuCollapsed));
      }

      if (routeMeta.menuHidden) {
        dispatch((0,actions_layout/* handleMenuHidden */._r)(!routeMeta.menuHidden));
      }
    }
  }; // ** ComponentDidMount


  (0,react.useEffect)(function () {
    if (routeMeta) {
      if (routeMeta.contentWidth) {
        dispatch((0,actions_layout/* handleContentWidth */.eF)(routeMeta.contentWidth));
      }

      if (routeMeta.menuCollapsed) {
        dispatch((0,actions_layout/* handleMenuCollapsed */.mB)(routeMeta.menuCollapsed));
      }

      if (routeMeta.menuHidden) {
        dispatch((0,actions_layout/* handleMenuHidden */._r)(routeMeta.menuHidden));
      }
    }

    return function () {
      return cleanUp();
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()('app-content content overflow-hidden', (_classnames = {}, (0,defineProperty/* default */.Z)(_classnames, wrapperClass, wrapperClass), (0,defineProperty/* default */.Z)(_classnames, 'show-overlay', navbarStore.query.length), _classnames)),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "content-overlay"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "header-navbar-shadow"
    }), routeMeta && routeMeta.breadCrumbTitle && /*#__PURE__*/(0,jsx_runtime.jsx)(breadcrumbs, {
      breadCrumbTitle: (0,components_useIntl/* default */.Z)().formatMessage({
        id: routeMeta.breadCrumbTitle
      }),
      breadCrumbParentRoute: routeMeta.breadCrumbParentRoute || '',
      breadCrumbParent2Route: routeMeta.breadCrumbParent2Route || '',
      breadCrumbParent3Route: routeMeta.breadCrumbParent3Route || '',
      breadCrumbParent: routeMeta.breadCrumbParent ? (0,components_useIntl/* default */.Z)().formatMessage({
        id: routeMeta.breadCrumbParent
      }) : '',
      breadCrumbParent2: routeMeta.breadCrumbParent2 ? (0,components_useIntl/* default */.Z)().formatMessage({
        id: routeMeta.breadCrumbParent2
      }) : '',
      breadCrumbParent3: routeMeta.breadCrumbParent3 ? (0,components_useIntl/* default */.Z)().formatMessage({
        id: routeMeta.breadCrumbParent3
      }) : '',
      breadCrumbActive: (0,components_useIntl/* default */.Z)().formatMessage({
        id: routeMeta.breadCrumbTitle
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classnames_default()((0,defineProperty/* default */.Z)({
        'content-wrapper': !appLayout,
        'content-area-wrapper': appLayout,
        'container p-0': contentWidth === 'boxed'
      }, "animate__animated animate__".concat(transition), transition !== 'none' && transition.length)),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Tag
      /*eslint-disable */
      , _objectSpread(_objectSpread({}, layout === 'HorizontalLayout' && !appLayout ? {
        className: classnames_default()({
          'content-body': !appLayout
        })
      } : {}), {}, {
        children: children
      }))
    })]
  });
};

/* harmony default export */ var layout_wrapper = (LayoutWrapper);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
// EXTERNAL MODULE: ./src/configs/actions.js
var actions = __webpack_require__(56176);
// EXTERNAL MODULE: ./src/configs/subjects.js
var subjects = __webpack_require__(14322);
;// CONCATENATED MODULE: ./src/router/routes/Apps.js



var AppRoutes = [{
  path: "/apps/email/folder/:folder",
  exact: true,
  appLayout: true,
  className: "email-application",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(4711), __webpack_require__.e(4469), __webpack_require__.e(7856), __webpack_require__.e(9507), __webpack_require__.e(3151)]).then(__webpack_require__.bind(__webpack_require__, 93151));
  }),
  meta: {
    breadCrumbTitle: "emails",
    navLink: "/apps/email",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.EMAIL_SUBJECT */.k.EMAIL_SUBJECT
  }
}, {
  path: "/apps/email/label/:label",
  exact: true,
  appLayout: true,
  className: "email-application",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(4711), __webpack_require__.e(4469), __webpack_require__.e(7856), __webpack_require__.e(9507), __webpack_require__.e(3151)]).then(__webpack_require__.bind(__webpack_require__, 93151));
  }),
  meta: {
    navLink: "/apps/email",
    breadCrumbTitle: "emails",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.EMAIL_SUBJECT */.k.EMAIL_SUBJECT
  }
}, {
  path: "/apps/email/:filter",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(4711), __webpack_require__.e(4469), __webpack_require__.e(7856), __webpack_require__.e(9507), __webpack_require__.e(3151)]).then(__webpack_require__.bind(__webpack_require__, 93151));
  }),
  meta: {
    navLink: "/apps/email",
    breadCrumbTitle: "emails",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.EMAIL_SUBJECT */.k.EMAIL_SUBJECT
  }
}, {
  path: "/apps/annonce",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(4469), __webpack_require__.e(5798), __webpack_require__.e(473)]).then(__webpack_require__.bind(__webpack_require__, 31347));
  }),
  meta: {
    navLink: "/apps/annonce",
    breadCrumbTitle: "annonces",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.POST_SUBJECT */.k.POST_SUBJECT
  }
}, {
  path: "/apps/enrollment",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1746), __webpack_require__.e(7490), __webpack_require__.e(3363)]).then(__webpack_require__.bind(__webpack_require__, 40073));
  }),
  meta: {
    navLink: "/apps/enrollment",
    breadCrumbTitle: "enrollments",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.ENROLLMENT_SUBJECT */.k.ENROLLMENT_SUBJECT
  }
}, {
  path: "/apps/time",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(7171), __webpack_require__.e(8275), __webpack_require__.e(4615), __webpack_require__.e(4209), __webpack_require__.e(5194)]).then(__webpack_require__.bind(__webpack_require__, 55194));
  }),
  meta: {
    navLink: "/apps/time",
    breadCrumbTitle: "times",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.TIME_SUBJECT */.k.TIME_SUBJECT
  }
}, {
  path: "/apps/schedule",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(7171), __webpack_require__.e(8275), __webpack_require__.e(4615), __webpack_require__.e(6056), __webpack_require__.e(6966), __webpack_require__.e(381)]).then(__webpack_require__.bind(__webpack_require__, 90381));
  }),
  meta: {
    navLink: "/apps/schedule",
    breadCrumbTitle: "schedule",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.SCHEDULE_SUBJECT */.k.SCHEDULE_SUBJECT
  }
}, {
  path: "/apps/expense",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(8351), __webpack_require__.e(2718)]).then(__webpack_require__.bind(__webpack_require__, 92718));
  }),
  meta: {
    navLink: "/apps/expense",
    breadCrumbTitle: "expenses",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.EXPENSE_SUBJECT */.k.EXPENSE_SUBJECT
  }
}, {
  path: "/apps/outcomings",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(6862), __webpack_require__.e(2497), __webpack_require__.e(4249)]).then(__webpack_require__.bind(__webpack_require__, 21058));
  }),
  meta: {
    navLink: "/apps/outcomings",
    breadCrumbTitle: "outcomings",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.OUTCOMING_SUBJECT */.k.OUTCOMING_SUBJECT
  }
}, {
  path: "/apps/incomings",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(4615), __webpack_require__.e(6862), __webpack_require__.e(2497), __webpack_require__.e(5257)]).then(__webpack_require__.bind(__webpack_require__, 25257));
  }),
  meta: {
    navLink: "/apps/incomings",
    breadCrumbTitle: "incomings",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.INCOMING_SUBJECT */.k.INCOMING_SUBJECT
  }
}, {
  path: "/apps/inventory",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(4615), __webpack_require__.e(6862), __webpack_require__.e(7971)]).then(__webpack_require__.bind(__webpack_require__, 77971));
  }),
  meta: {
    navLink: "/apps/inventory",
    breadCrumbTitle: "inventory",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.INVENTORY_SUBJECT */.k.INVENTORY_SUBJECT
  }
}, {
  path: "/apps/supplier",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(8012)]).then(__webpack_require__.bind(__webpack_require__, 98012));
  }),
  meta: {
    navLink: "/apps/supplier",
    breadCrumbTitle: "suppliers",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.SUPPLIER_SUBJECT */.k.SUPPLIER_SUBJECT
  }
}, {
  path: "/apps/financialReport",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(2662), __webpack_require__.e(9146)]).then(__webpack_require__.bind(__webpack_require__, 49146));
  }),
  meta: {
    navLink: "/apps/financialReport",
    breadCrumbTitle: "financialReport",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.FINANCIAL_REPORT_SUBJECT */.k.FINANCIAL_REPORT_SUBJECT
  }
}, {
  path: "/apps/budget",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(6862), __webpack_require__.e(8351), __webpack_require__.e(2047)]).then(__webpack_require__.bind(__webpack_require__, 82047));
  }),
  meta: {
    navLink: "/apps/budget",
    breadCrumbTitle: "budget",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.BUDGET_SUBJECT */.k.BUDGET_SUBJECT
  }
}, {
  path: "/apps/calendar",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(4469), __webpack_require__.e(7856), __webpack_require__.e(6088), __webpack_require__.e(3639), __webpack_require__.e(4455)]).then(__webpack_require__.bind(__webpack_require__, 92383));
  }),
  meta: {
    navLink: "/apps/calendar",
    breadCrumbTitle: "calendar",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.CALENDAR_SUBJECT */.k.CALENDAR_SUBJECT
  }
}, {
  path: "/apps/messages",
  appLayout: true,
  className: "chat-application",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(4711), __webpack_require__.e(7856), __webpack_require__.e(6088), __webpack_require__.e(4789)]).then(__webpack_require__.bind(__webpack_require__, 84789));
  }),
  meta: {
    navLink: "/apps/messages",
    breadCrumbTitle: "messages",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.MESSAGE_SUBJECT */.k.MESSAGE_SUBJECT
  }
}, {
  path: "/apps/meet",
  appLayout: true,
  className: "chat-application",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return __webpack_require__.e(/* import() */ 3623).then(__webpack_require__.bind(__webpack_require__, 3623));
  }),
  meta: {
    navLink: "/apps/meet",
    breadCrumbTitle: "meet",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.MEET_SUBJECT */.k.MEET_SUBJECT
  }
}, {
  path: "/apps/receipt/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(8566), __webpack_require__.e(3685)]).then(__webpack_require__.bind(__webpack_require__, 3685));
  }),
  layout: "BlankLayout",
  meta: {
    navLink: "/apps/receipt",
    // breadCrumbTitle: 'meet',
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.PRINT_SUBJECT */.k.PRINT_SUBJECT
  }
}, {
  path: "/meet/:meetId",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5209), __webpack_require__.e(2083), __webpack_require__.e(6948)]).then(__webpack_require__.bind(__webpack_require__, 51715));
  }),
  layout: "BlankLayout",
  meta: {
    navLink: "/apps/meet",
    // breadCrumbTitle: 'meet',
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.MEET_SUBJECT */.k.MEET_SUBJECT
  }
}, {
  path: "/apps/message/:id",
  appLayout: true,
  className: "chat-application",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(4711), __webpack_require__.e(7856), __webpack_require__.e(6088), __webpack_require__.e(4789)]).then(__webpack_require__.bind(__webpack_require__, 84789));
  }),
  meta: {
    navLink: "/apps/messages",
    breadCrumbTitle: "messages",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.MESSAGE_SUBJECT */.k.MESSAGE_SUBJECT
  }
}, {
  path: "/apps/profile/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(4469), __webpack_require__.e(5798), __webpack_require__.e(473), __webpack_require__.e(3922)]).then(__webpack_require__.bind(__webpack_require__, 83922));
  }),
  meta: {
    breadCrumbTitle: "profile",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.DASHBOARD_SUBJECT */.k.DASHBOARD_SUBJECT
  }
}, // {
//   path: "/apps/my-profile/:id",
//   component: lazy(() => import("../../views/pages/profile")),
//   meta: {
//     breadCrumbTitle: "profile",
//     action: ACTIONS.SEE_ACTION,
//     resource: SUBJECTS.DASHBOARD_SUBJECT,
//   },
// },
{
  path: "/apps/user/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(1309)]).then(__webpack_require__.bind(__webpack_require__, 21309));
  }),
  meta: {
    navLink: "/apps/user/list",
    breadCrumbTitle: "userList",
    action: actions/* ACTIONS.MANAGE_ACTION */.a.MANAGE_ACTION,
    resource: subjects/* SUBJECTS.USER_SUBJECT */.k.USER_SUBJECT
  }
}, {
  path: "/apps/user/edit/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(799)]).then(__webpack_require__.bind(__webpack_require__, 40799));
  }),
  meta: {
    navLink: "/apps/user/edit",
    breadCrumbParent: "userList",
    breadCrumbParentRoute: "/apps/user/list",
    breadCrumbTitle: "edit",
    action: actions/* ACTIONS.MANAGE_ACTION */.a.MANAGE_ACTION,
    resource: subjects/* SUBJECTS.USER_SUBJECT */.k.USER_SUBJECT
  }
}, {
  path: "/apps/user/view/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(4711), __webpack_require__.e(7096)]).then(__webpack_require__.bind(__webpack_require__, 77096));
  }),
  meta: {
    navLink: "/apps/user/view",
    breadCrumbParent: "userList",
    breadCrumbParentRoute: "/apps/user/list",
    breadCrumbTitle: "details",
    action: actions/* ACTIONS.MANAGE_ACTION */.a.MANAGE_ACTION,
    resource: subjects/* SUBJECTS.USER_SUBJECT */.k.USER_SUBJECT
  }
}, {
  path: "/apps/groups",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(5840)]).then(__webpack_require__.bind(__webpack_require__, 65840));
  }),
  meta: {
    navLink: "/apps/groups",
    breadCrumbTitle: "groups",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.GROUP_SUBJECT */.k.GROUP_SUBJECT
  }
}, {
  path: "/apps/permission",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(4711), __webpack_require__.e(5209), __webpack_require__.e(2210)]).then(__webpack_require__.bind(__webpack_require__, 22210));
  }),
  meta: {
    navLink: "/apps/permission",
    breadCrumbTitle: "permission",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.PERMISSION_SUBJECT */.k.PERMISSION_SUBJECT
  }
}, {
  path: "/apps/student/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8350), __webpack_require__.e(8275), __webpack_require__.e(3057)]).then(__webpack_require__.bind(__webpack_require__, 93057));
  }),
  meta: {
    navLink: "/apps/student/list",
    breadCrumbTitle: "studentList",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.STUDENT_SUBJECT */.k.STUDENT_SUBJECT
  }
}, {
  path: "/apps/student/edit/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(3389), __webpack_require__.e(8350), __webpack_require__.e(8965)]).then(__webpack_require__.bind(__webpack_require__, 38965));
  }),
  meta: {
    navLink: "/apps/student/edit",
    breadCrumbParent: "studentList",
    breadCrumbParentRoute: "/apps/student/list",
    breadCrumbTitle: "edit",
    action: actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION,
    resource: subjects/* SUBJECTS.STUDENT_SUBJECT */.k.STUDENT_SUBJECT
  }
}, {
  path: "/apps/student/view/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(8566), __webpack_require__.e(6056), __webpack_require__.e(6459), __webpack_require__.e(580)]).then(__webpack_require__.bind(__webpack_require__, 30580));
  }),
  meta: {
    navLink: "/apps/student/list",
    breadCrumbParent: "studentList",
    breadCrumbParentRoute: "/apps/student/list",
    breadCrumbTitle: "details",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.STUDENT_SUBJECT */.k.STUDENT_SUBJECT
  }
}, {
  path: "/apps/teacher/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8350), __webpack_require__.e(8275), __webpack_require__.e(2405)]).then(__webpack_require__.bind(__webpack_require__, 42405));
  }),
  meta: {
    navLink: "/apps/teacher/list",
    breadCrumbTitle: "teacherList",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.TEACHER_SUBJECT */.k.TEACHER_SUBJECT
  }
}, {
  path: "/apps/teacher/edit/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(3389), __webpack_require__.e(8350), __webpack_require__.e(5870)]).then(__webpack_require__.bind(__webpack_require__, 15870));
  }),
  meta: {
    navLink: "/apps/teacher/edit",
    breadCrumbParent: "teacherList",
    breadCrumbParentRoute: "/apps/teacher/list",
    breadCrumbTitle: "edit",
    action: actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION,
    resource: subjects/* SUBJECTS.TEACHER_SUBJECT */.k.TEACHER_SUBJECT
  }
}, {
  path: "/apps/teacher/view/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(4711), __webpack_require__.e(8566), __webpack_require__.e(9086)]).then(__webpack_require__.bind(__webpack_require__, 39086));
  }),
  meta: {
    navLink: "/apps/teacher/view",
    breadCrumbParent: "teacherList",
    breadCrumbParentRoute: "/apps/teacher/list",
    breadCrumbTitle: "details",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.TEACHER_SUBJECT */.k.TEACHER_SUBJECT
  }
}, {
  path: "/apps/staff/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8350), __webpack_require__.e(8275), __webpack_require__.e(7467)]).then(__webpack_require__.bind(__webpack_require__, 47467));
  }),
  meta: {
    navLink: "/apps/staff/list",
    breadCrumbTitle: "staffList",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.STAFF_SUBJECT */.k.STAFF_SUBJECT
  }
}, {
  path: "/apps/staff/edit/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(3389), __webpack_require__.e(8350), __webpack_require__.e(8099)]).then(__webpack_require__.bind(__webpack_require__, 78099));
  }),
  meta: {
    navLink: "/apps/staff/edit",
    breadCrumbParent: "staffList",
    breadCrumbParentRoute: "/apps/staff/list",
    breadCrumbTitle: "edit",
    action: actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION,
    resource: subjects/* SUBJECTS.STAFF_SUBJECT */.k.STAFF_SUBJECT
  }
}, {
  path: "/apps/staff/view/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(4711), __webpack_require__.e(8566), __webpack_require__.e(9036)]).then(__webpack_require__.bind(__webpack_require__, 79036));
  }),
  meta: {
    navLink: "/apps/staff/view",
    breadCrumbParent: "staffList",
    breadCrumbParentRoute: "/apps/staff/list",
    breadCrumbTitle: "details",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.STAFF_SUBJECT */.k.STAFF_SUBJECT
  }
}, {
  path: "/apps/parent/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8350), __webpack_require__.e(8275), __webpack_require__.e(4078)]).then(__webpack_require__.bind(__webpack_require__, 94078));
  }),
  meta: {
    navLink: "/apps/parent/list",
    breadCrumbTitle: "parentList",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.PARENT_SUBJECT */.k.PARENT_SUBJECT
  }
}, {
  path: "/apps/parent/edit/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(3389), __webpack_require__.e(8350), __webpack_require__.e(3720)]).then(__webpack_require__.bind(__webpack_require__, 73720));
  }),
  meta: {
    navLink: "/apps/parent/edit",
    breadCrumbParent: "parentList",
    breadCrumbParentRoute: "/apps/parent/list",
    breadCrumbTitle: "edit",
    action: actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION,
    resource: subjects/* SUBJECTS.PARENT_SUBJECT */.k.PARENT_SUBJECT
  }
}, {
  path: "/apps/parent/view/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(4711), __webpack_require__.e(8566), __webpack_require__.e(3555)]).then(__webpack_require__.bind(__webpack_require__, 3555));
  }),
  meta: {
    navLink: "/apps/parent/view",
    breadCrumbParent: "parentList",
    breadCrumbParentRoute: "/apps/parent/list",
    breadCrumbTitle: "details",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.PARENT_SUBJECT */.k.PARENT_SUBJECT
  }
}, {
  path: "/apps/room/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(8952)]).then(__webpack_require__.bind(__webpack_require__, 28952));
  }),
  meta: {
    navLink: "/apps/room/list",
    breadCrumbTitle: "roomList",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.ROOM_SUBJECT */.k.ROOM_SUBJECT
  }
}, {
  path: "/apps/car/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(8596)]).then(__webpack_require__.bind(__webpack_require__, 88596));
  }),
  meta: {
    navLink: "/apps/car/list",
    breadCrumbTitle: "carList",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.CAR_SUBJECT */.k.CAR_SUBJECT
  }
}, {
  path: "/apps/section/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(4615), __webpack_require__.e(1513), __webpack_require__.e(7490), __webpack_require__.e(4209), __webpack_require__.e(8156)]).then(__webpack_require__.bind(__webpack_require__, 88156));
  }),
  meta: {
    navLink: "/apps/section/list",
    breadCrumbTitle: "sectionList",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.SECTION_SUBJECT */.k.SECTION_SUBJECT
  }
}, {
  path: "/apps/section/view/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(1513), __webpack_require__.e(8608)]).then(__webpack_require__.bind(__webpack_require__, 61513));
  }),
  meta: {
    navLink: "/apps/section/list",
    breadCrumbTitle: "section",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.SECTION_SUBJECT */.k.SECTION_SUBJECT
  }
}, {
  path: "/apps/session/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(2065)]).then(__webpack_require__.bind(__webpack_require__, 62065));
  }),
  meta: {
    navLink: "/apps/session/list",
    breadCrumbTitle: "sessionList",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.SESSION_SUBJECT */.k.SESSION_SUBJECT
  }
}, {
  path: "/apps/promotion/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(3096)]).then(__webpack_require__.bind(__webpack_require__, 83096));
  }),
  meta: {
    navLink: "/apps/promotion/list",
    breadCrumbTitle: "promotionList",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.PROMOTION_SUBJECT */.k.PROMOTION_SUBJECT
  }
}, {
  path: "/apps/training/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(1112)]).then(__webpack_require__.bind(__webpack_require__, 71112));
  }),
  meta: {
    navLink: "/apps/training/list",
    breadCrumbTitle: "trainingList",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.TRAINING_SUBJECT */.k.TRAINING_SUBJECT
  }
}, {
  path: "/apps/route/list",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8275), __webpack_require__.e(5396)]).then(__webpack_require__.bind(__webpack_require__, 85396));
  }),
  meta: {
    navLink: "/apps/route/list",
    breadCrumbTitle: "routeList",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.TRAINING_SUBJECT */.k.TRAINING_SUBJECT
  }
}];
/* harmony default export */ var Apps = (AppRoutes);
;// CONCATENATED MODULE: ./src/router/routes/Pages.js




var PagesRoutes = [{
  path: "/login",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(9318)]).then(__webpack_require__.bind(__webpack_require__, 74716));
  }),
  layout: "BlankLayout",
  meta: {
    authRoute: true
  }
}, {
  path: "/linkedin",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return __webpack_require__.e(/* import() */ 5614).then(__webpack_require__.bind(__webpack_require__, 35614));
  }),
  layout: "BlankLayout",
  meta: {
    authRoute: true
  }
}, {
  path: "/reset-password/:accessToken",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(42)]).then(__webpack_require__.bind(__webpack_require__, 10042));
  }),
  layout: "BlankLayout",
  meta: {
    authRoute: true
  }
}, {
  path: "/register",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(1465)]).then(__webpack_require__.bind(__webpack_require__, 21465));
  }),
  layout: "BlankLayout",
  meta: {
    authRoute: true
  }
}, {
  path: "/privacy-policy",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return __webpack_require__.e(/* import() */ 2783).then(__webpack_require__.bind(__webpack_require__, 52783));
  }),
  layout: "BlankLayout",
  meta: {
    authRoute: true
  }
}, {
  path: "/forgot-password",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(6018)]).then(__webpack_require__.bind(__webpack_require__, 56018));
  }),
  layout: "BlankLayout",
  meta: {
    authRoute: true
  }
}, {
  path: "/activate-account/:accessToken",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return __webpack_require__.e(/* import() */ 2360).then(__webpack_require__.bind(__webpack_require__, 72360));
  }),
  layout: "BlankLayout",
  meta: {
    authRoute: true
  }
}, {
  path: "/pages/account-settings",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(4469), __webpack_require__.e(5798), __webpack_require__.e(473), __webpack_require__.e(6100)]).then(__webpack_require__.bind(__webpack_require__, 86100));
  }),
  meta: {
    action: actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION,
    resource: subjects/* SUBJECTS.USER_SUBJECT */.k.USER_SUBJECT,
    breadCrumbTitle: "accountSetting"
  }
}, {
  path: "/misc/coming-soon",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return __webpack_require__.e(/* import() */ 4965).then(__webpack_require__.bind(__webpack_require__, 34965));
  }),
  layout: "BlankLayout",
  meta: {
    publicRoute: true
  }
}, {
  path: "/misc/not-authorized",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return __webpack_require__.e(/* import() */ 9732).then(__webpack_require__.bind(__webpack_require__, 9732));
  }),
  layout: "BlankLayout",
  meta: {
    publicRoute: true
  }
}, {
  path: "/misc/maintenance",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return __webpack_require__.e(/* import() */ 4349).then(__webpack_require__.bind(__webpack_require__, 94349));
  }),
  layout: "BlankLayout",
  meta: {
    publicRoute: true
  }
}, {
  path: "/misc/error",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return __webpack_require__.e(/* import() */ 2249).then(__webpack_require__.bind(__webpack_require__, 42249));
  }),
  layout: "BlankLayout",
  meta: {
    publicRoute: true
  }
}];
/* harmony default export */ var Pages = (PagesRoutes);
;// CONCATENATED MODULE: ./src/router/routes/Dashboards.js



var DashboardRoutes = [// Dashboards
{
  path: "/app/dashboard",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(7171), __webpack_require__.e(4264), __webpack_require__.e(8566), __webpack_require__.e(8275), __webpack_require__.e(4615), __webpack_require__.e(6056), __webpack_require__.e(6459), __webpack_require__.e(5473), __webpack_require__.e(6966), __webpack_require__.e(3713)]).then(__webpack_require__.bind(__webpack_require__, 95475));
  }),
  meta: {
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.DASHBOARD_SUBJECT */.k.DASHBOARD_SUBJECT
  }
}, {
  path: "/dashboard/student/view/:id",
  component: /*#__PURE__*/(0,react.lazy)(function () {
    return Promise.all(/* import() */[__webpack_require__.e(5107), __webpack_require__.e(4711), __webpack_require__.e(3389), __webpack_require__.e(1358), __webpack_require__.e(8566), __webpack_require__.e(6056), __webpack_require__.e(6459), __webpack_require__.e(5473), __webpack_require__.e(5346)]).then(__webpack_require__.bind(__webpack_require__, 15473));
  }),
  meta: {
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.DASHBOARD_SUBJECT */.k.DASHBOARD_SUBJECT
  }
}];
/* harmony default export */ var Dashboards = (DashboardRoutes);
;// CONCATENATED MODULE: ./src/router/routes/index.js




var Routes = [].concat((0,toConsumableArray/* default */.Z)(Dashboards), (0,toConsumableArray/* default */.Z)(Apps), (0,toConsumableArray/* default */.Z)(Pages));

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./src/utility/hooks/useSkin.js
var useSkin = __webpack_require__(47201);
;// CONCATENATED MODULE: ./src/@core/layouts/BlankLayout.js


var _excluded = ["children"];
// ** React Imports
 // ** Custom Hooks




var BlankLayout = function BlankLayout(_ref) {
  var children = _ref.children,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  // ** Hooks
  var _useSkin = (0,useSkin/* useSkin */.Q)(),
      _useSkin2 = (0,slicedToArray/* default */.Z)(_useSkin, 2),
      skin = _useSkin2[0],
      setSkin = _useSkin2[1]; // ** States


  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isMounted = _useState2[0],
      setIsMounted = _useState2[1]; //** ComponentDidMount


  (0,react.useEffect)(function () {
    setIsMounted(true);
    return function () {
      return setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "blank-page",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "app-content content",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "content-wrapper",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "content-body",
          children: children
        })
      })
    })
  });
};

/* harmony default export */ var layouts_BlankLayout = (BlankLayout);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/arrow-up.js
var arrow_up = __webpack_require__(33657);
// EXTERNAL MODULE: ./node_modules/react-scroll-up/index.js
var react_scroll_up = __webpack_require__(80257);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Navbar.js
var Navbar = __webpack_require__(9544);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Button.js
var es_Button = __webpack_require__(97975);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.esm.js + 2 modules
var react_select_esm = __webpack_require__(39544);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/settings.js
var settings = __webpack_require__(77662);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x.js
var x = __webpack_require__(78268);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(68959);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/FormGroup.js
var FormGroup = __webpack_require__(82669);
// EXTERNAL MODULE: ./node_modules/react-perfect-scrollbar/lib/index.js
var lib = __webpack_require__(51964);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./src/utility/Utils.js
var Utils = __webpack_require__(16724);
// EXTERNAL MODULE: ./src/@core/scss/react/libs/react-select/_react-select.scss
var _react_select = __webpack_require__(22299);
;// CONCATENATED MODULE: ./src/@core/components/customizer/index.js

// ** React Imports
 // ** Third Party Components






 // ** Styles





var Customizer = function Customizer(props) {
  // ** Props
  var skin = props.skin,
      setSkin = props.setSkin,
      isRtl = props.isRtl,
      setIsRtl = props.setIsRtl,
      layout = props.layout,
      setLayout = props.setLayout,
      navbarType = props.navbarType,
      setNavbarType = props.setNavbarType,
      footerType = props.footerType,
      setFooterType = props.setFooterType,
      navbarColor = props.navbarColor,
      setNavbarColor = props.setNavbarColor,
      isHidden = props.isHidden,
      setIsHidden = props.setIsHidden,
      contentWidth = props.contentWidth,
      setContentWidth = props.setContentWidth,
      menuCollapsed = props.menuCollapsed,
      setMenuCollapsed = props.setMenuCollapsed,
      transition = props.transition,
      setTransition = props.setTransition; // ** State

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      openCustomizer = _useState2[0],
      setOpenCustomizer = _useState2[1]; // ** Toggles Customizer


  var handleToggle = function handleToggle(e) {
    e.preventDefault();
    setOpenCustomizer(!openCustomizer);
  }; // ** Render Layout Skin Options


  var renderSkinsRadio = function renderSkinsRadio() {
    var skinsArr = [{
      name: 'light',
      label: 'Light',
      checked: skin === 'light'
    }, {
      name: 'bordered',
      label: 'Bordered',
      checked: skin === 'bordered'
    }, {
      name: 'dark',
      label: 'Dark',
      checked: skin === 'dark'
    }, {
      name: 'semi-dark',
      label: 'Semi Dark',
      checked: skin === 'semi-dark'
    }];
    return skinsArr.map(function (radio, index) {
      var marginCondition = index !== skinsArr.length - 1;

      if (layout === 'HorizontalLayout' && radio.name === 'semi-dark') {
        return null;
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
        type: "radio",
        id: radio.name,
        label: radio.label,
        checked: radio.checked,
        onChange: function onChange() {
          return setSkin(radio.name);
        },
        className: classnames_default()({
          'mr-1': marginCondition
        })
      }, index);
    });
  }; // ** Render Navbar Colors Options


  var renderNavbarColors = function renderNavbarColors() {
    var colorsArr = ['white', 'primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark'];
    return colorsArr.map(function (color) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        className: classnames_default()("color-box bg-".concat(color), {
          selected: navbarColor === color,
          border: color === 'white'
        }),
        onClick: function onClick() {
          return setNavbarColor(color);
        }
      }, color);
    });
  }; // ** Render Navbar Type Options


  var renderNavbarTypeRadio = function renderNavbarTypeRadio() {
    var navbarTypeArr = [{
      name: 'floating',
      label: 'Floating',
      checked: navbarType === 'floating'
    }, {
      name: 'sticky',
      label: 'Sticky',
      checked: navbarType === 'sticky'
    }, {
      name: 'static',
      label: 'Static',
      checked: navbarType === 'static'
    }, {
      name: 'hidden',
      label: 'Hidden',
      checked: navbarType === 'hidden'
    }];
    return navbarTypeArr.map(function (radio, index) {
      var marginCondition = index !== navbarTypeArr.length - 1;

      if (layout === 'HorizontalLayout' && radio.name === 'hidden') {
        return null;
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
        type: "radio",
        id: radio.name,
        label: radio.label,
        checked: radio.checked,
        onChange: function onChange() {
          return setNavbarType(radio.name);
        },
        className: classnames_default()({
          'mr-1': marginCondition
        })
      }, index);
    });
  }; // ** Render Footer Type Options


  var renderFooterTypeRadio = function renderFooterTypeRadio() {
    var footerTypeArr = [{
      name: 'sticky',
      label: 'Sticky',
      checked: footerType === 'sticky'
    }, {
      name: 'static',
      label: 'Static',
      checked: footerType === 'static'
    }, {
      name: 'hidden',
      label: 'Hidden',
      checked: footerType === 'hidden'
    }];
    return footerTypeArr.map(function (radio, index) {
      var marginCondition = index !== footerTypeArr.length - 1;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
        type: "radio",
        id: "footer-".concat(radio.name),
        label: radio.label,
        checked: radio.checked,
        onChange: function onChange() {
          return setFooterType(radio.name);
        },
        className: classnames_default()({
          'mr-1': marginCondition
        })
      }, index);
    });
  }; // **  Router Transition Options


  var transitionOptions = [{
    value: 'fadeIn',
    label: 'Fade'
  }, {
    value: 'fadeInLeft',
    label: 'Fade In Left'
  }, {
    value: 'zoomIn',
    label: 'Zoom In'
  }, {
    value: 'none',
    label: 'None'
  }]; // ** Get Current Transition

  var transitionValue = transitionOptions.find(function (i) {
    return i.value === transition;
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()('customizer d-none d-md-block', {
      open: openCustomizer
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      href: "/",
      className: "customizer-toggle d-flex align-items-center justify-content-center",
      onClick: handleToggle,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(settings/* default */.Z, {
        size: 14,
        className: "spinner"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)((lib_default()), {
      className: "customizer-content",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "customizer-header px-2 pt-1 pb-0 position-relative",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
          className: "mb-0",
          children: "Theme Customizer"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          className: "m-0",
          children: "Customize & Preview in Real Time"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "/",
          className: "customizer-close",
          onClick: handleToggle,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.Z, {})
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "px-2",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.Z, {
          className: "mb-2",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: "font-weight-bold",
            children: "Skin"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "d-flex",
            children: renderSkinsRadio()
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.Z, {
          className: "mb-2",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: "font-weight-bold",
            children: "Content Width"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
              type: "radio",
              id: "full-width",
              className: "mr-1",
              label: "Full Width",
              checked: contentWidth === 'full',
              onChange: function onChange() {
                return setContentWidth('full');
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
              type: "radio",
              id: "boxes",
              label: "Boxed",
              checked: contentWidth === 'boxed',
              onChange: function onChange() {
                return setContentWidth('boxed');
              }
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.Z, {
          className: "mb-2",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              className: "font-weight-bold mr-auto mb-0",
              children: "RTL"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
              type: "switch",
              id: "rtl",
              name: "RTL",
              checked: isRtl,
              onChange: function onChange() {
                return setIsRtl(!isRtl);
              }
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.Z, {
          className: "mb-2",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              className: "font-weight-bold mb-0",
              children: "Router Transition"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_select_esm/* default */.ZP, {
              theme: Utils/* selectThemeColors */.ss,
              className: "react-select",
              classNamePrefix: "select",
              defaultValue: transitionOptions[0],
              value: transitionValue,
              options: transitionOptions,
              isClearable: false,
              onChange: function onChange(_ref) {
                var value = _ref.value;
                return setTransition(value);
              }
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "px-2",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          className: "font-weight-bold",
          children: "Menu Layout"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.Z, {
          className: "mb-2",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
              type: "radio",
              id: "vertical-layout",
              label: "Vertical",
              checked: layout === 'VerticalLayout',
              onChange: function onChange() {
                return setLayout('vertical');
              },
              className: "mr-1"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
              type: "radio",
              id: "horizontal-layout",
              label: "Horizontal",
              checked: layout === 'HorizontalLayout',
              onChange: function onChange() {
                return setLayout('horizontal');
              }
            })]
          })
        }), layout !== 'HorizontalLayout' ? /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.Z, {
          className: "mb-2",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              className: "font-weight-bold mr-auto mb-0",
              children: "Menu Collapsed"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
              type: "switch",
              id: "menu-collapsed",
              name: "menu-collapsed",
              checked: menuCollapsed,
              onChange: function onChange() {
                return setMenuCollapsed(!menuCollapsed);
              }
            })]
          })
        }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.Z, {
          className: "mb-2",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              className: "font-weight-bold mr-auto mb-0",
              children: "Menu Hidden"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(CustomInput/* default */.Z, {
              type: "switch",
              id: "menu-hidden",
              name: "menu-hidden",
              checked: isHidden,
              onChange: function onChange() {
                return setIsHidden(!isHidden);
              }
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "px-2",
        children: [layout !== 'HorizontalLayout' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.Z, {
          className: "mb-2",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: "font-weight-bold",
            children: "Navbar Color"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
            className: "list-inline unstyled-list",
            children: renderNavbarColors()
          })]
        }) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.Z, {
          className: "mb-2",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
            className: "font-weight-bold",
            children: [layout === 'HorizontalLayout' ? 'Menu' : 'Navbar', " Type"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "d-flex",
            children: renderNavbarTypeRadio()
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "px-2",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.Z, {
          className: "mb-2",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: "font-weight-bold",
            children: "Footer Type"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "d-flex",
            children: renderFooterTypeRadio()
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ var customizer = (Customizer);
;// CONCATENATED MODULE: ./src/@core/layouts/components/footer/index.js
// ** Icons Import




var Footer = function Footer() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
    className: "clearfix mb-0",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      className: "float-md-left d-block d-md-inline-block mt-25",
      children: ["COPYRIGHT \xA9 ", new Date().getFullYear(), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        href: "theschoolsys.com",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "The school Sys"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "d-none d-sm-inline-block",
        children: ", All rights Reserved"
      })]
    })
  });
};

/* harmony default export */ var components_footer = (Footer);
// EXTERNAL MODULE: ./node_modules/jwt-check-expiration/src/index.js
var src = __webpack_require__(58402);
// EXTERNAL MODULE: ./src/@core/components/avatar/index.js
var avatar = __webpack_require__(68138);
// EXTERNAL MODULE: ./src/redux/actions/auth/index.js
var auth = __webpack_require__(77765);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/UncontrolledDropdown.js
var es_UncontrolledDropdown = __webpack_require__(83823);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownToggle.js
var es_DropdownToggle = __webpack_require__(65497);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownMenu.js
var es_DropdownMenu = __webpack_require__(42365);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownItem.js
var es_DropdownItem = __webpack_require__(98227);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/power.js
var power = __webpack_require__(76135);
// EXTERNAL MODULE: ./src/assets/images/avatars/avatar-blank.png
var avatar_blank = __webpack_require__(76930);
// EXTERNAL MODULE: ./src/auth/utils.js
var utils = __webpack_require__(48817);
;// CONCATENATED MODULE: ./src/@core/layouts/components/navbar/UserDropdown.js


function UserDropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function UserDropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? UserDropdown_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : UserDropdown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports


 // ** Custom Components

 // ** Utils
// ** Store & Actions


 // ** Third Party Components


 // ** Default Avatar Image










var UserDropdown = function UserDropdown() {
  // ** Store Vars
  var dispatch = (0,es/* useDispatch */.I0)();
  var store = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  });
  var history = (0,react_router/* useHistory */.k6)(); // ** State

  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var verifyToken = function verifyToken() {
    console.log("Tab is active");

    if (!(0,utils/* getToken */.LP)() || (0,src/* isJwtExpired */.v)((0,utils/* getToken */.LP)())) {
      dispatch((0,auth/* handleLogout */.hY)());
      history.push("/login");
    }
  };

  (0,react.useEffect)(function () {
    window.addEventListener("focus", verifyToken);

    if ((0,utils/* isUserLoggedIn */.Pc)()) {
      var data = UserDropdown_objectSpread(UserDropdown_objectSpread({}, store.userData), {}, {
        accessToken: (0,utils/* getToken */.LP)()
      });

      dispatch((0,auth/* handleLogin */.jc)(data));
      ability.update(data.ability || []);
    }

    return function () {
      window.removeEventListener("focus", verifyToken);
    };
  }, []); //** Vars

  var userAvatar = store.userData && store.userData.avatar || avatar_blank;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_UncontrolledDropdown/* default */.Z, {
    tag: "li",
    className: "dropdown-user nav-item",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(es_DropdownToggle/* default */.Z, {
      href: "/",
      tag: "a",
      className: "nav-link dropdown-user-link",
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "user-nav d-sm-flex d-none",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "user-name font-weight-bold text-capitalize",
          children: store.userData && store.userData.name
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "user-name text-muted",
          children: store.userData && store.userData.username
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
        img: userAvatar,
        imgHeight: "40",
        imgWidth: "40"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_DropdownMenu/* default */.Z, {
      right: true,
      children: [ability.can(actions/* ACTIONS.EDIT_ACTION */.a.EDIT_ACTION, subjects/* SUBJECTS.USER_SUBJECT */.k.USER_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(es_DropdownItem/* default */.Z, {
        tag: react_router_dom/* Link */.rU,
        to: "/pages/account-settings",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(settings/* default */.Z, {
          size: 14,
          className: "mr-75 text-body"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "align-middle text-body",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "settings"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_DropdownItem/* default */.Z, {
        tag: react_router_dom/* Link */.rU,
        to: "/login",
        onClick: function onClick() {
          return dispatch((0,auth/* handleLogout */.hY)());
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(power/* default */.Z, {
          size: 14,
          className: "mr-75 text-body"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "align-middle text-body",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "logout"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var navbar_UserDropdown = (UserDropdown);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/index.js + 193 modules
var dist = __webpack_require__(93919);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__(27434);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/menu.js
var menu = __webpack_require__(90408);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/star.js
var star = __webpack_require__(12575);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/search.js
var search = __webpack_require__(83206);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-circle.js
var alert_circle = __webpack_require__(68973);
;// CONCATENATED MODULE: ./src/utility/hooks/useOnClickOutside.js
//** React Imports

var useOnClickOutside = function useOnClickOutside(ref, handler) {
  (0,react.useEffect)(function () {
    var listener = function listener(event) {
      // ** Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      } // ** Call passed function on click outside


      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, // ** Add ref and handler to effect dependencies
  // ** It's worth noting that because passed in handler is a new ...
  // ** ... function on every render that will cause this effect ...
  // ** ... callback/cleanup to run every render. It's not a big deal ...
  // ** ... but to optimize you can wrap handler in useCallback before ...
  // ** ... passing it into this hook.
  [ref, handler]);
};
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(93379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(90569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(19216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(44589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/@core/scss/base/bootstrap-extended/_include.scss
var _include = __webpack_require__(83333);
;// CONCATENATED MODULE: ./src/@core/scss/base/bootstrap-extended/_include.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(_include/* default */.Z, options);




       /* harmony default export */ var bootstrap_extended_include = (_include/* default */.Z && _include/* default.locals */.Z.locals ? _include/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/@core/components/autocomplete/autocomplete.scss
var autocomplete = __webpack_require__(17017);
;// CONCATENATED MODULE: ./src/@core/components/autocomplete/autocomplete.scss

      
      
      
      
      
      
      
      
      

var autocomplete_options = {};

autocomplete_options.styleTagTransform = (styleTagTransform_default());
autocomplete_options.setAttributes = (setAttributesWithoutAttributes_default());

      autocomplete_options.insert = insertBySelector_default().bind(null, "head");
    
autocomplete_options.domAPI = (styleDomAPI_default());
autocomplete_options.insertStyleElement = (insertStyleElement_default());

var autocomplete_update = injectStylesIntoStyleTag_default()(autocomplete/* default */.Z, autocomplete_options);




       /* harmony default export */ var autocomplete_autocomplete = (autocomplete/* default */.Z && autocomplete/* default.locals */.Z.locals ? autocomplete/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/@core/components/autocomplete/index.js



// ** React Imports


 // ** Third Party Components




 // ** Custom Hooks

 // ** Styles






var autocomplete_Autocomplete = function Autocomplete(props) {
  // ** Refs
  var container = (0,react.useRef)(null);
  var inputElRef = (0,react.useRef)(null);
  var suggestionsListRef = (0,react.useRef)(null); // ** States

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      activeSuggestion = _useState4[0],
      setActiveSuggestion = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      showSuggestions = _useState6[0],
      setShowSuggestions = _useState6[1];

  var _useState7 = (0,react.useState)(props.value ? props.value : ''),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      userInput = _useState8[0],
      setUserInput = _useState8[1]; // ** Vars


  var history = (0,react_router/* useHistory */.k6)();
  var filteredData = []; // ** Suggestion Item Click Event

  var onSuggestionItemClick = function onSuggestionItemClick(url, e) {
    setActiveSuggestion(0);
    setShowSuggestions(false);
    setUserInput(filteredData[activeSuggestion][props.filterKey]);

    if (url !== undefined && url !== null) {
      history.push(url);
    }

    if (props.onSuggestionClick) {
      props.onSuggestionClick(url, e);
    }
  }; // ** Suggestion Hover Event


  var onSuggestionItemHover = function onSuggestionItemHover(index) {
    setActiveSuggestion(index);
  }; // ** Input On Change Event


  var _onChange = function onChange(e) {
    var userInput = e.currentTarget.value;
    setActiveSuggestion(0);
    setShowSuggestions(true);
    setUserInput(userInput);

    if (e.target.value < 1) {
      setShowSuggestions(false);
    }
  }; // ** Input Click Event


  var onInputClick = function onInputClick(e) {
    e.stopPropagation();
  }; // ** Input's Keydown Event


  var _onKeyDown = function onKeyDown(e) {
    var filterKey = props.filterKey;
    var suggestionList = react_dom.findDOMNode(suggestionsListRef.current); // ** User pressed the up arrow

    if (e.keyCode === 38 && activeSuggestion !== 0) {
      setActiveSuggestion(activeSuggestion - 1);

      if (e.target.value.length > -1 && suggestionList !== null && activeSuggestion <= filteredData.length / 2) {
        suggestionList.scrollTop = 0;
      }
    } else if (e.keyCode === 40 && activeSuggestion < filteredData.length - 1) {
      // ** User pressed the down arrow
      setActiveSuggestion(activeSuggestion + 1);

      if (e.target.value.length > -1 && suggestionList !== null && activeSuggestion >= filteredData.length / 2) {
        suggestionList.scrollTop = suggestionList.scrollHeight;
      }
    } else if (e.keyCode === 27) {
      // ** User Pressed ESC
      setShowSuggestions(false);
      setUserInput('');
    } else if (e.keyCode === 13 && showSuggestions) {
      // ** User Pressed ENTER
      onSuggestionItemClick(filteredData[activeSuggestion].link, e);
      setUserInput(filteredData[activeSuggestion][filterKey]);
      setShowSuggestions(false);
    } else {
      return;
    } // ** Custom Keydown Event


    if (props.onKeyDown !== undefined && props.onKeyDown !== null) {
      props.onKeyDown(e, userInput);
    }
  }; // ** Function To Render Grouped Suggestions


  var renderGroupedSuggestion = function renderGroupedSuggestion(arr) {
    var filterKey = props.filterKey,
        customRender = props.customRender;

    var renderSuggestion = function renderSuggestion(item, i) {
      if (!customRender) {
        var suggestionURL = item.link !== undefined && item.link !== null ? item.link : null;
        return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: classnames_default()('suggestion-item', {
            active: filteredData.indexOf(item) === activeSuggestion
          }),
          onClick: function onClick(e) {
            return onSuggestionItemClick(suggestionURL, e);
          },
          onMouseEnter: function onMouseEnter() {
            onSuggestionItemHover(filteredData.indexOf(item));
          },
          children: item[filterKey]
        }, item[filterKey]);
      } else if (customRender) {
        return customRender(item, i, filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover, userInput);
      } else {
        return null;
      }
    };

    return arr.map(function (item, i) {
      return renderSuggestion(item, i);
    });
  }; // ** Function To Render Ungrouped Suggestions


  var renderUngroupedSuggestions = function renderUngroupedSuggestions() {
    var _filteredData;

    var filterKey = props.filterKey,
        suggestions = props.suggestions,
        customRender = props.customRender,
        suggestionLimit = props.suggestionLimit;
    filteredData = [];
    var sortSingleData = suggestions.filter(function (i) {
      var startCondition = i[filterKey].toLowerCase().startsWith(userInput.toLowerCase()),
          includeCondition = i[filterKey].toLowerCase().includes(userInput.toLowerCase());

      if (startCondition) {
        return startCondition;
      } else if (!startCondition && includeCondition) {
        return includeCondition;
      } else {
        return null;
      }
    }).slice(0, suggestionLimit);

    (_filteredData = filteredData).push.apply(_filteredData, (0,toConsumableArray/* default */.Z)(sortSingleData));

    if (sortSingleData.length) {
      return sortSingleData.map(function (suggestion, index) {
        var suggestionURL = suggestion.link !== undefined && suggestion.link !== null ? suggestion.link : null;

        if (!customRender) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: classnames_default()('suggestion-item', {
              active: filteredData.indexOf(suggestion) === activeSuggestion
            }),
            onClick: function onClick(e) {
              return onSuggestionItemClick(suggestionURL, e);
            },
            onMouseEnter: function onMouseEnter() {
              return onSuggestionItemHover(filteredData.indexOf(suggestion));
            },
            children: suggestion[filterKey]
          }, suggestion[filterKey]);
        } else if (customRender) {
          return customRender(suggestion, index, filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover, userInput);
        } else {
          return null;
        }
      });
    } else {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        className: "suggestion-item no-result",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(alert_circle/* default */.Z, {
          size: 15
        }), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "align-middle ml-50",
          children: "No Result"
        })]
      });
    }
  }; // ** Function To Render Suggestions


  var renderSuggestions = function renderSuggestions() {
    var filterKey = props.filterKey,
        grouped = props.grouped,
        filterHeaderKey = props.filterHeaderKey,
        suggestions = props.suggestions; // ** Checks if suggestions are grouped or not.

    if (grouped === undefined || grouped === null || !grouped) {
      return renderUngroupedSuggestions();
    } else {
      filteredData = [];
      return suggestions.map(function (suggestion) {
        var _filteredData2;

        var sortData = suggestion.data.filter(function (i) {
          var startCondition = i[filterKey].toLowerCase().startsWith(userInput.toLowerCase()),
              includeCondition = i[filterKey].toLowerCase().includes(userInput.toLowerCase());

          if (startCondition) {
            return startCondition;
          } else if (!startCondition && includeCondition) {
            return includeCondition;
          } else {
            return null;
          }
        }).slice(0, suggestion.searchLimit);

        (_filteredData2 = filteredData).push.apply(_filteredData2, (0,toConsumableArray/* default */.Z)(sortData));

        return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [suggestion[filterHeaderKey] ? /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            className: "suggestion-item suggestion-title-wrapper",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("h6", {
              className: "suggestion-title",
              children: suggestion[filterHeaderKey]
            })
          }) : null, sortData.length ? renderGroupedSuggestion(sortData) : /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            className: "suggestion-item no-result",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(alert_circle/* default */.Z, {
              size: 15
            }), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "align-middle ml-50",
              children: "No Result"
            })]
          })]
        }, suggestion[filterHeaderKey]);
      });
    }
  }; //** ComponentDidMount


  (0,react.useEffect)(function () {
    if (props.defaultSuggestions && focused) {
      setShowSuggestions(true);
    }
  }, [focused, props.defaultSuggestions]); //** ComponentDidUpdate

  (0,react.useEffect)(function () {
    var textInput = react_dom.findDOMNode(inputElRef.current); // ** For searchbar focus

    if (textInput !== null && props.autoFocus) {
      inputElRef.current.focus();
    } // ** If user has passed default suggestions & focus then show default suggestions


    if (props.defaultSuggestions && focused) {
      setShowSuggestions(true);
    } // ** Function to run on user passed Clear Input


    if (props.clearInput) {
      props.clearInput(userInput, setUserInput);
    } // ** Function on Suggestions Shown


    if (props.onSuggestionsShown && showSuggestions) {
      props.onSuggestionsShown(userInput);
    }
  }, [setShowSuggestions, focused, userInput, showSuggestions, props]); // ** On External Click Close The Search & Call Passed Function

  useOnClickOutside(container, function () {
    setShowSuggestions(false);

    if (props.externalClick) {
      props.externalClick();
    }
  });
  var suggestionsListComponent;

  if (showSuggestions) {
    suggestionsListComponent = /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
      className: classnames_default()('suggestions-list', (0,defineProperty/* default */.Z)({}, props.wrapperClass, props.wrapperClass)),
      ref: suggestionsListRef,
      component: "ul",
      options: {
        wheelPropagation: false
      },
      children: renderSuggestions()
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "autocomplete-container",
    ref: container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      type: "text",
      onChange: function onChange(e) {
        _onChange(e);

        if (props.onChange) {
          props.onChange(e);
        }
      },
      onKeyDown: function onKeyDown(e) {
        return _onKeyDown(e);
      },
      value: userInput,
      className: "autocomplete-search ".concat(props.className ? props.className : ''),
      placeholder: props.placeholder,
      onClick: onInputClick,
      ref: inputElRef,
      onFocus: function onFocus(e) {
        return setFocused(true);
      },
      autoFocus: props.autoFocus,
      onBlur: function onBlur(e) {
        if (props.onBlur) props.onBlur(e);
        setFocused(false);
      }
    }), suggestionsListComponent]
  });
};

/* harmony default export */ var components_autocomplete = (autocomplete_Autocomplete); // ** PropTypes

autocomplete_Autocomplete.propTypes = {
  suggestions: (prop_types_default()).array.isRequired,
  filterKey: (prop_types_default()).string.isRequired,
  defaultValue: (prop_types_default()).string,
  wrapperClass: (prop_types_default()).string,
  filterHeaderKey: (prop_types_default()).string,
  placeholder: (prop_types_default()).string,
  suggestionLimit: (prop_types_default()).number,
  grouped: (prop_types_default()).bool,
  autoFocus: (prop_types_default()).bool,
  onKeyDown: (prop_types_default()).func,
  onChange: (prop_types_default()).func,
  onSuggestionsShown: (prop_types_default()).func,
  onSuggestionItemClick: (prop_types_default()).func,
  clearInput: (prop_types_default()).func,
  externalClick: (prop_types_default()).func
};
// EXTERNAL MODULE: ./node_modules/reactstrap/es/NavItem.js
var es_NavItem = __webpack_require__(53999);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/NavLink.js
var es_NavLink = __webpack_require__(98008);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/UncontrolledTooltip.js + 3 modules
var UncontrolledTooltip = __webpack_require__(55302);
;// CONCATENATED MODULE: ./src/@core/layouts/components/navbar/Bookmarks.js


var bookmarks = [{
  groupTitle: "Pages",
  searchLimit: 4,
  data: [{
    id: 1,
    keywords: "home",
    target: "home",
    isBookmarked: true,
    title: "home",
    icon: "Home",
    link: "/app/dashboard",
    resource: subjects/* SUBJECTS.DASHBOARD_SUBJECT */.k.DASHBOARD_SUBJECT,
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION
  }, {
    id: 2,
    keywords: "email e-mail الرسائل",
    target: "email",
    isBookmarked: false,
    title: "emails",
    icon: "Mail",
    link: "/apps/email/folder/inbox",
    resource: subjects/* SUBJECTS.EMAIL_SUBJECT */.k.EMAIL_SUBJECT,
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION
  }, {
    id: 3,
    keywords: "calendar",
    target: "calendar",
    isBookmarked: false,
    title: "calendar",
    icon: "Calendar",
    link: "/apps/calendar",
    resource: subjects/* SUBJECTS.CALENDAR_SUBJECT */.k.CALENDAR_SUBJECT,
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION
  }, {
    id: 4,
    keywords: "messages",
    target: "message",
    isBookmarked: false,
    title: "messages",
    icon: "MessageSquare",
    link: "/apps/calendar",
    resource: subjects/* SUBJECTS.MESSAGE_SUBJECT */.k.MESSAGE_SUBJECT,
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION
  }, {
    id: 6,
    keywords: "meet",
    target: "job",
    isBookmarked: false,
    title: "jobs",
    icon: "Briefcase",
    link: "/apps/jobs",
    resource: subjects/* SUBJECTS.JOB_SUBJECT */.k.JOB_SUBJECT,
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION
  }]
}];
var getBookmarks = function getBookmarks(ability, userData) {
  if (!localStorage.getItem("bookmarks".concat(userData === null || userData === void 0 ? void 0 : userData.id))) {
    localStorage.setItem("bookmarks".concat(userData === null || userData === void 0 ? void 0 : userData.id), JSON.stringify(bookmarks));
  }

  var marks = JSON.parse(localStorage.getItem("bookmarks".concat(userData === null || userData === void 0 ? void 0 : userData.id)))[0].data.filter(function (item) {
    return item.isBookmarked;
  });
  marks = marks.filter(function (i) {
    return ability.can(i.action, i.resource);
  });
  return marks;
};
var Bookmarks_getSuggestion = function getSuggestion(ability, userData) {
  if (!localStorage.getItem("bookmarks".concat(userData === null || userData === void 0 ? void 0 : userData.id))) {
    localStorage.setItem("bookmarks".concat(userData === null || userData === void 0 ? void 0 : userData.id), JSON.stringify(bookmarks));
  }

  var marks = JSON.parse(localStorage.getItem("bookmarks".concat(userData === null || userData === void 0 ? void 0 : userData.id)));
  marks[0].data = marks[0].data.filter(function (i) {
    return ability.can(i.action, i.resource);
  });
  return marks;
};
var updateBookmarks = function updateBookmarks(id, userData) {
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks".concat(userData === null || userData === void 0 ? void 0 : userData.id)));
  bookmarks[0].data.forEach(function (item) {
    if (item.id === id) {
      item.isBookmarked = !item.isBookmarked;
    }
  });
  localStorage.setItem("bookmarks".concat(userData === null || userData === void 0 ? void 0 : userData.id), JSON.stringify(bookmarks));
};
// EXTERNAL MODULE: ./node_modules/@casl/react/dist/es6m/index.mjs
var es6m = __webpack_require__(22490);
;// CONCATENATED MODULE: ./src/@core/layouts/components/navbar/NavbarBookmarks.js














var NavbarBookmarks = function NavbarBookmarks(props) {
  var ability = (0,es6m/* useAbility */.we)(Can/* AbilityContext */.v);
  var setMenuVisibility = props.setMenuVisibility;

  var _useState = (0,react.useState)(""),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      openSearch = _useState4[0],
      setOpenSearch = _useState4[1];

  var _useState5 = (0,react.useState)(getBookmarks(ability)),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      bookmarks = _useState6[0],
      setBookmarks = _useState6[1];

  var _useState7 = (0,react.useState)(Bookmarks_getSuggestion(ability)),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      suggestions = _useState8[0],
      setSuggestions = _useState8[1]; // ** Loops through Bookmarks Array to return Bookmarks


  var renderBookmarks = function renderBookmarks() {
    if (bookmarks.length) {
      return bookmarks.map(function (item) {
        var IconTag = dist[item.icon];
        return /*#__PURE__*/(0,jsx_runtime.jsx)(es_NavItem/* default */.Z, {
          className: "d-none d-lg-block",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_NavLink/* default */.Z, {
            tag: react_router_dom/* Link */.rU,
            to: item.link,
            id: item.target,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(IconTag, {
              className: "ficon"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(UncontrolledTooltip/* default */.Z, {
              target: item.target,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: item.title
              })
            })]
          })
        }, item.target);
      }).slice(0, 10);
    } else {
      return null;
    }
  }; // ** If user has more than 10 bookmarks then add the extra Bookmarks to a dropdown


  var renderExtraBookmarksDropdown = function renderExtraBookmarksDropdown() {
    if (bookmarks.length && bookmarks.length >= 11) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(es_NavItem/* default */.Z, {
        className: "d-none d-lg-block",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_NavLink/* default */.Z, {
          tag: "span",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_UncontrolledDropdown/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_DropdownToggle/* default */.Z, {
              tag: "span",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.Z, {
                className: "ficon"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_DropdownMenu/* default */.Z, {
              right: true,
              children: bookmarks.map(function (item) {
                var IconTag = dist[item.icon];
                return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_DropdownItem/* default */.Z, {
                  tag: react_router_dom/* Link */.rU,
                  to: item.link,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(IconTag, {
                    className: "mr-50",
                    size: 14
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    className: "align-middle",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: item.title
                    })
                  })]
                }, item.id);
              }).slice(10)
            })]
          })
        })
      });
    } else {
      return null;
    }
  }; // ** Loops through Bookmarks Array to return Bookmarks


  var onKeyDown = function onKeyDown(e) {
    if (e.keyCode === 27 || e.keyCode === 13) {
      setTimeout(function () {
        setOpenSearch(false);
      }, 1);
    }
  }; // ** Function to toggle Bookmarks


  var handleBookmarkUpdate = function handleBookmarkUpdate(id) {
    updateBookmarks(id);
    setBookmarks(getBookmarks(ability));
    setSuggestions(Bookmarks_getSuggestion(ability));
  }; // ** Function to handle Bookmarks visibility


  var handleBookmarkVisibility = function handleBookmarkVisibility() {
    setOpenSearch(!openSearch);
    setValue("");
  }; // ** Function to handle Input change


  var handleInputChange = function handleInputChange(e) {
    setValue(e.target.value); // dispatch(handleSearchQuery(e.target.value))
  }; // ** Function to handle external Input click


  var handleExternalClick = function handleExternalClick() {
    if (openSearch === true) {
      setOpenSearch(false);
      setValue("");
    }
  }; // ** Function to clear input value


  var handleClearInput = function handleClearInput(setUserInput) {
    if (!openSearch) {
      setUserInput("");
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: "navbar-nav d-xl-none",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_NavItem/* default */.Z, {
        className: "mobile-menu mr-auto",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_NavLink/* default */.Z, {
          className: "nav-menu-main menu-toggle hidden-xs is-active",
          onClick: function onClick() {
            return setMenuVisibility(true);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* default */.Z, {
            className: "ficon"
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
      className: "nav navbar-nav bookmark-icons d-none",
      children: [renderBookmarks(), renderExtraBookmarksDropdown(), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_NavItem/* default */.Z, {
        className: "nav-item d-none d-lg-block",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_NavLink/* default */.Z, {
          className: "bookmark-star",
          onClick: handleBookmarkVisibility,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(star/* default */.Z, {
            className: "ficon text-warning"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: classnames_default()("bookmark-input search-input", {
            show: openSearch
          }),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "bookmark-input-icon",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.Z, {
              size: 14
            })
          }), openSearch && suggestions[0].data.length ? /*#__PURE__*/(0,jsx_runtime.jsx)(components_autocomplete, {
            wrapperClass: classnames_default()("search-list search-list-bookmark", {
              show: openSearch
            }),
            className: "form-control",
            suggestions: !value.length ? bookmarks : suggestions[0].data,
            filterKey: "keywords",
            filterHeaderKey: "groupTitle",
            autoFocus: true,
            defaultSuggestions: true,
            suggestionLimit: !value.length ? bookmarks.length : 6,
            placeholder: (0,components_useIntl/* default */.Z)().formatMessage({
              id: "search"
            }),
            externalClick: handleExternalClick,
            clearInput: function clearInput(userInput, setUserInput) {
              return handleClearInput(setUserInput);
            },
            onKeyDown: onKeyDown,
            value: value,
            onChange: handleInputChange,
            customRender: function customRender(item, i, filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover) {
              var IconTag = dist[item.icon ? item.icon : "X"];
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                onMouseEnter: function onMouseEnter() {
                  return onSuggestionItemHover(filteredData.indexOf(item));
                },
                className: classnames_default()("suggestion-item d-flex align-items-center justify-content-between", {
                  active: filteredData.indexOf(item) === activeSuggestion
                }),
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, {
                  to: item.link,
                  className: "d-flex align-items-center justify-content-between p-0",
                  onClick: function onClick() {
                    setOpenSearch(false);
                    setValue("");
                  },
                  style: {
                    width: "calc(90%)"
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "d-flex justify-content-start align-items-center overflow-hidden",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(IconTag, {
                      size: 17.5,
                      className: "mr-75"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      className: "text-truncate",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: item.title
                      })
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(star/* default */.Z, {
                  size: 17.5,
                  className: classnames_default()("bookmark-icon float-right", {
                    "text-warning": item.isBookmarked
                  }),
                  onClick: function onClick() {
                    return handleBookmarkUpdate(item.id);
                  }
                })]
              }, i);
            }
          }) : null]
        })]
      })]
    })]
  });
};

/* harmony default export */ var navbar_NavbarBookmarks = (NavbarBookmarks);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/sun.js
var sun = __webpack_require__(68231);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/moon.js
var moon = __webpack_require__(2549);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/mail.js
var mail = __webpack_require__(22774);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/message-circle.js
var message_circle = __webpack_require__(10245);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/download.js
var download = __webpack_require__(72866);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Badge.js
var es_Badge = __webpack_require__(17354);
;// CONCATENATED MODULE: ./src/@core/layouts/components/navbar/NavbarSearch.js













var NavbarSearch = function NavbarSearch() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      navbarSearch = _useState2[0],
      setNavbarSearch = _useState2[1];

  var ability = useAbility(AbilityContext); // ** Function to handle external Input click

  var handleExternalClick = function handleExternalClick() {
    if (navbarSearch === true) {
      setNavbarSearch(false);
    }
  }; // ** Function to clear input value


  var handleClearInput = function handleClearInput(setUserInput) {
    if (!navbarSearch) {
      setUserInput('');
    }
  }; // ** Function to close search on ESC & ENTER Click


  var onKeyDown = function onKeyDown(e) {
    if (e.keyCode === 27 || e.keyCode === 13) {
      setTimeout(function () {
        setNavbarSearch(false);
      }, 1);
    }
  }; // ** Function to handle search suggestion Click


  var handleSuggestionItemClick = function handleSuggestionItemClick() {
    setNavbarSearch(false);
  }; // ** Function to handle search list Click


  var handleListItemClick = function handleListItemClick(func, link, e) {
    func(link, e);
    setTimeout(function () {
      setNavbarSearch(false);
    }, 1);
  };

  return /*#__PURE__*/_jsxs(NavItem, {
    className: "nav-search",
    onClick: function onClick() {
      return setNavbarSearch(true);
    },
    children: [/*#__PURE__*/_jsx(NavLink, {
      className: "nav-link-search",
      children: /*#__PURE__*/_jsx(Icon.Search, {
        className: "ficon"
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: classnames('search-input', {
        open: navbarSearch === true
      }),
      children: [/*#__PURE__*/_jsx("div", {
        className: "search-input-icon",
        children: /*#__PURE__*/_jsx(Icon.Search, {})
      }), navbarSearch ? /*#__PURE__*/_jsx(Autocomplete, {
        className: "form-control",
        suggestions: getSuggestion(ability),
        filterKey: "keywords",
        filterHeaderKey: "groupTitle",
        grouped: true,
        placeholder: useIntl().formatMessage({
          id: 'search'
        }),
        autoFocus: true,
        onSuggestionItemClick: handleSuggestionItemClick,
        externalClick: handleExternalClick,
        clearInput: function clearInput(userInput, setUserInput) {
          return handleClearInput(setUserInput);
        },
        onKeyDown: onKeyDown // onChange={(e) => handleSearchQuery(e.target.value)}
        ,
        customRender: function customRender(item, i, filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover) {
          var IconTag = Icon[item.icon ? item.icon : 'X'];
          return /*#__PURE__*/_jsx("li", {
            className: classnames('suggestion-item', {
              active: filteredData.indexOf(item) === activeSuggestion
            }),
            onClick: function onClick(e) {
              return handleListItemClick(onSuggestionItemClick, item.link, e);
            },
            onMouseEnter: function onMouseEnter() {
              return onSuggestionItemHover(filteredData.indexOf(item));
            },
            children: /*#__PURE__*/_jsxs("div", {
              className: classnames({
                'd-flex justify-content-between align-items-center': item.file || item.img
              }),
              children: [/*#__PURE__*/_jsxs("div", {
                className: "item-container d-flex align-items-center",
                children: [item.icon ? /*#__PURE__*/_jsx(IconTag, {
                  size: 17
                }) : item.file ? /*#__PURE__*/_jsx("img", {
                  src: item.file,
                  height: "36",
                  width: "28",
                  alt: useIntl().formatMessage({
                    id: item.title
                  })
                }) : item.img ? /*#__PURE__*/_jsx("img", {
                  className: "rounded-circle mt-25",
                  src: item.img,
                  height: "28",
                  width: "28",
                  alt: item.title
                }) : null, /*#__PURE__*/_jsxs("div", {
                  className: "item-info ml-1",
                  children: [/*#__PURE__*/_jsx("p", {
                    className: "align-middle mb-0",
                    children: useIntl().formatMessage({
                      id: item.title
                    })
                  }), item.by || item.email ? /*#__PURE__*/_jsx("small", {
                    className: "text-muted",
                    children: item.by ? item.by : item.email ? item.email : null
                  }) : null]
                })]
              }), item.size || item.date ? /*#__PURE__*/_jsx("div", {
                className: "meta-container",
                children: /*#__PURE__*/_jsx("small", {
                  className: "text-muted",
                  children: item.size ? item.size : item.date ? item.date : null
                })
              }) : null]
            })
          }, i);
        }
      }) : null, /*#__PURE__*/_jsx("div", {
        className: "search-input-close",
        children: /*#__PURE__*/_jsx(Icon.X, {
          className: "ficon",
          onClick: function onClick(e) {
            e.stopPropagation();
            setNavbarSearch(false);
          }
        })
      })]
    })]
  });
};

/* harmony default export */ var navbar_NavbarSearch = ((/* unused pure expression or super */ null && (NavbarSearch)));
;// CONCATENATED MODULE: ./src/views/UseAddToHomeScreenPrompt.js



function UseAddToHomeScreenPrompt() {
  var _useState = (0,react.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      prompt = _useState2[0],
      setState = _useState2[1];

  var promptToInstall = function promptToInstall() {
    if (prompt) {
      return prompt.prompt();
    }

    return Promise.reject(new Error('Tried installing before browser sent "beforeinstallprompt" event'));
  };

  react.useEffect(function () {
    var ready = function ready(e) {
      e.preventDefault();
      setState(e);
    };

    window.addEventListener('appinstalled', function (evt) {});
    window.addEventListener('beforeinstallprompt', ready);
    return function () {
      window.removeEventListener('beforeinstallprompt', ready);
    };
  }, []);
  return [prompt, promptToInstall];
}
// EXTERNAL MODULE: ./src/utility/context/Socket.js
var Socket = __webpack_require__(6607);
// EXTERNAL MODULE: ./node_modules/react-country-flag/dist/react-country-flag.esm.js
var react_country_flag_esm = __webpack_require__(99318);
// EXTERNAL MODULE: ./src/utility/context/Internationalization.js + 12 modules
var Internationalization = __webpack_require__(20537);
// EXTERNAL MODULE: ./src/utility/hooks/useRTL.js
var useRTL = __webpack_require__(50944);
;// CONCATENATED MODULE: ./src/@core/layouts/components/navbar/IntlDropdown.js

// ** React Imports
 // ** Third Party Components


 // ** Internationalization Context






var IntlDropdown = function IntlDropdown() {
  // ** Context
  var intlContext = (0,react.useContext)(Internationalization/* IntlContext */.f);

  var _useRTL = (0,useRTL/* useRTL */.S)(),
      _useRTL2 = (0,slicedToArray/* default */.Z)(_useRTL, 2),
      isRtl = _useRTL2[0],
      setIsRtl = _useRTL2[1]; // ** Vars


  var langObj = {
    en: 'English',
    ar: 'العربية',
    fr: 'Français'
  }; // ** Function to switch Language

  var handleLangUpdate = function handleLangUpdate(e, lang) {
    e.preventDefault();
    setIsRtl(lang === 'ar');
    intlContext.switchLanguage(lang);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_UncontrolledDropdown/* default */.Z, {
    href: "/",
    tag: "li",
    className: "dropdown-language nav-item",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(es_DropdownToggle/* default */.Z, {
      href: "/",
      tag: "a",
      className: "nav-link",
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_country_flag_esm/* default */.Z, {
        className: "country-flag flag-icon",
        countryCode: intlContext.locale === 'en' ? 'us' : intlContext.locale === 'ar' ? 'dz' : intlContext.locale,
        svg: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "selected-language",
        children: langObj[intlContext.locale]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_DropdownMenu/* default */.Z, {
      className: "mt-0",
      right: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(es_DropdownItem/* default */.Z, {
        href: "/",
        tag: "a",
        onClick: function onClick(e) {
          return handleLangUpdate(e, 'fr');
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_country_flag_esm/* default */.Z, {
          className: "country-flag",
          countryCode: "fr",
          svg: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "ml-1 text-body",
          children: "Fran\xE7aise"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_DropdownItem/* default */.Z, {
        href: "/",
        tag: "a",
        onClick: function onClick(e) {
          return handleLangUpdate(e, 'en');
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_country_flag_esm/* default */.Z, {
          className: "country-flag",
          countryCode: "us",
          svg: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "ml-1 text-body",
          children: "English"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_DropdownItem/* default */.Z, {
        href: "/",
        tag: "a",
        onClick: function onClick(e) {
          return handleLangUpdate(e, 'ar');
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_country_flag_esm/* default */.Z, {
          className: "country-flag",
          countryCode: "dz",
          svg: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "ml-1 text-body",
          children: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
        })]
      })]
    })]
  });
};

/* harmony default export */ var navbar_IntlDropdown = (IntlDropdown);
;// CONCATENATED MODULE: ./src/@core/layouts/components/navbar/NotificationDropdown.js


// ** React Imports
 // ** Custom Components

 // ** Third Party Components











var NotificationDropdown = function NotificationDropdown() {
  var intl = useIntl();
  var store = useSelector(function (state) {
    return state.auth;
  });
  var notificationKey = "".concat(String((store.userData || {}).id), "notifications");
  /*eslint-disable */

  var renderNotificationItems = function renderNotificationItems() {
    return /*#__PURE__*/_jsx(PerfectScrollbar, {
      component: "li",
      className: "media-list scrollable-container",
      options: {
        wheelPropagation: false
      },
      children: notifications.map(function (item, index) {
        return /*#__PURE__*/_jsx("a", {
          className: "d-flex",
          href: "/",
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          children: /*#__PURE__*/_jsx(Media, {
            className: 'd-flex align-items-start',
            children: /*#__PURE__*/_jsxs(Fragment, {
              children: [/*#__PURE__*/_jsx(Media, {
                left: true,
                children: /*#__PURE__*/_jsx(Avatar, {
                  icon: /*#__PURE__*/_jsx(Bell, {
                    size: 14
                  }),
                  color: 'light-primary'
                })
              }), /*#__PURE__*/_jsxs(Media, {
                body: true,
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-body",
                  children: item.title
                }), /*#__PURE__*/_jsx("small", {
                  className: "notification-text",
                  children: item.date
                })]
              })]
            })
          })
        }, index);
      })
    });
  };
  /*eslint-enable */


  useEffect(function () {
    var OneSignal = window.OneSignal || {};
    OneSignal.push(function () {
      OneSignal.on('notificationDisplay', function (event) {
        console.log('notification received', event);
        var key = "".concat(String((store.userData || {}).id), "notifications");
        var notifications = JSON.parse(localStorage.getItem(key)) || [];
        notifications = [{
          title: event.content,
          date: formatDateToMonthShort(new Date())
        }].concat(_toConsumableArray(notifications));
        localStorage.setItem(key, JSON.stringify(notifications));
        setNotifications(notifications);
      });
    });
  }, []);

  var _useState = useState(JSON.parse(localStorage.getItem(notificationKey)) || []),
      _useState2 = _slicedToArray(_useState, 2),
      notifications = _useState2[0],
      setNotifications = _useState2[1];

  var onToggle = function onToggle(e) {
    e.preventDefault();
  };

  var clearNotifications = function clearNotifications(e) {
    localStorage.removeItem(notificationKey);
    setNotifications([]);
    onToggle(e);
  };

  return /*#__PURE__*/_jsxs(UncontrolledDropdown, {
    tag: "li",
    className: "dropdown-notification nav-item mr-25",
    children: [/*#__PURE__*/_jsxs(DropdownToggle, {
      tag: "a",
      className: "nav-link",
      href: "/",
      onClick: function onClick(e) {
        return onToggle(e);
      },
      children: [/*#__PURE__*/_jsx(Bell, {
        size: 21
      }), !!notifications.length && /*#__PURE__*/_jsx(Badge, {
        pill: true,
        color: "danger",
        className: "badge-up",
        children: notifications.length
      })]
    }), /*#__PURE__*/_jsxs(DropdownMenu, {
      tag: "ul",
      right: true,
      className: "dropdown-menu-media mt-0",
      children: [/*#__PURE__*/_jsx("li", {
        className: "dropdown-menu-header",
        children: /*#__PURE__*/_jsxs(DropdownItem, {
          className: "d-flex",
          tag: "div",
          header: true,
          children: [/*#__PURE__*/_jsx("h4", {
            className: "notification-title mb-0 mr-auto",
            children: intl.formatMessage({
              id: 'notifications'
            })
          }), /*#__PURE__*/_jsx(Badge, {
            tag: "div",
            color: "light-primary",
            pill: true,
            children: notifications.length
          })]
        })
      }), renderNotificationItems(), !!notifications.length && /*#__PURE__*/_jsx("li", {
        className: "dropdown-menu-footer",
        children: /*#__PURE__*/_jsx(Button.Ripple, {
          color: "primary",
          block: true,
          onClick: function onClick(e) {
            return clearNotifications(e);
          },
          children: intl.formatMessage({
            id: 'markAsRead'
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var navbar_NotificationDropdown = ((/* unused pure expression or super */ null && (NotificationDropdown)));
;// CONCATENATED MODULE: ./src/@core/layouts/components/navbar/index.js

// ** React Imports
 // ** Dropdowns Imports

 // ** Custom Components

 // ** Third Party Components


















var ThemeNavbar = function ThemeNavbar(props) {
  // ** Props
  var ability = (0,es6m/* useAbility */.we)(Can/* AbilityContext */.v);
  var skin = props.skin,
      setSkin = props.setSkin,
      setMenuVisibility = props.setMenuVisibility;
  var history = (0,react_router/* useHistory */.k6)();

  var _UseAddToHomeScreenPr = UseAddToHomeScreenPrompt(),
      _UseAddToHomeScreenPr2 = (0,slicedToArray/* default */.Z)(_UseAddToHomeScreenPr, 2),
      prompt = _UseAddToHomeScreenPr2[0],
      promptToInstall = _UseAddToHomeScreenPr2[1];

  var socket = (0,react.useContext)(Socket/* SocketContext */.J);

  var _useState = (0,react.useState)(0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      emails = _useState4[0],
      setEmails = _useState4[1]; // ** Function to toggle Theme (Light/Dark)


  var ThemeToggler = function ThemeToggler() {
    if (skin === "dark") {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(sun/* default */.Z, {
        className: "ficon",
        onClick: function onClick() {
          return setSkin("light");
        }
      });
    } else {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(moon/* default */.Z, {
        className: "ficon",
        onClick: function onClick() {
          return setSkin("dark");
        }
      });
    }
  };

  (0,react.useEffect)(function () {
    socket.on("chat-message-received-navbar", function (_ref) {
      var unread = _ref.unread;
      setMessages(unread || 0);
    });
    socket.on("email-message-received-navbar", function (_ref2) {
      var unread = _ref2.unread;
      setEmails(unread || 0);
    });
    socket.on("read-message-received-navbar", function (_ref3) {
      var unread = _ref3.unread;
      setMessages(unread || 0);
    });
    socket.on("read-email-received-navbar", function (_ref4) {
      var unread = _ref4.unread;
      setEmails(unread || 0);
    });
    return function () {// socket.off('chat-message-received-navbar')
      // socket.off('email-message-received-navbar')
      // socket.off('read-message-received-navbar')
      // socket.off('read-email-received-navbar')
      // socket.close()
    };
  }, [emails, messages]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "bookmark-wrapper d-flex align-items-center",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(navbar_NavbarBookmarks, {
        setMenuVisibility: setMenuVisibility
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
      className: "nav navbar-nav align-items-center ml-auto",
      children: [ability.can(actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION, subjects/* SUBJECTS.EMAIL_SUBJECT */.k.EMAIL_SUBJECT) ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "position-relative cursor-pointer mx-50",
        onClick: function onClick() {
          return history.push("/apps/email/folder/inbox");
        },
        children: [!!Number(emails) && /*#__PURE__*/(0,jsx_runtime.jsx)(es_Badge/* default */.Z, {
          pill: true,
          color: "danger",
          className: "badge-up",
          children: emails || 0
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(mail/* default */.Z, {
          size: 21
        })]
      }) : null, ability.can(actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION, subjects/* SUBJECTS.MESSAGE_SUBJECT */.k.MESSAGE_SUBJECT) ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "position-relative cursor-pointer mx-50",
        onClick: function onClick() {
          return history.push("/apps/messages");
        },
        children: [!!Number(messages) && /*#__PURE__*/(0,jsx_runtime.jsx)(es_Badge/* default */.Z, {
          pill: true,
          color: "danger",
          className: "badge-up",
          children: messages || "0"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(message_circle/* default */.Z, {
          size: 21
        })]
      }) : null, prompt && /*#__PURE__*/(0,jsx_runtime.jsx)(es_NavItem/* default */.Z, {
        className: "nav-search",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_NavLink/* default */.Z, {
          className: "nav-link-style",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(download/* default */.Z, {
            className: "cursor-pointer ficon",
            size: 21,
            onClick: promptToInstall
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(navbar_IntlDropdown, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(es_NavItem/* default */.Z, {
        className: "nav-search",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_NavLink/* default */.Z, {
          className: "nav-link-style",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ThemeToggler, {})
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(navbar_UserDropdown, {})]
    })]
  });
};

/* harmony default export */ var components_navbar = (ThemeNavbar);
;// CONCATENATED MODULE: ./src/assets/images/navigation/business-report.png
var business_report_namespaceObject = __webpack_require__.p + "3f605d7cd1d2dbd11b7b.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/networking.png
var networking_namespaceObject = __webpack_require__.p + "8bafce98d85ea76f9b3c.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/loudspeaker.png
var loudspeaker_namespaceObject = __webpack_require__.p + "fec8de486b1ef1cc0503.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/gmail.png
var gmail_namespaceObject = __webpack_require__.p + "a2f2146f929409405da0.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/calendar.png
var calendar_namespaceObject = __webpack_require__.p + "cb75eba4d2db42b4bb32.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/chat (1).png
var chat_1_namespaceObject = __webpack_require__.p + "3dd3ed9e8e43ee8cceb8.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/video-conference.png
var video_conference_namespaceObject = __webpack_require__.p + "bec286afe45ec092bc06.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/group.png
var group_namespaceObject = __webpack_require__.p + "9aee1b6bfc2ea7229f60.png";
// EXTERNAL MODULE: ./src/assets/images/navigation/graduated.png
var graduated = __webpack_require__(2049);
// EXTERNAL MODULE: ./src/assets/images/navigation/teacher.png
var teacher = __webpack_require__(10737);
;// CONCATENATED MODULE: ./src/assets/images/navigation/employee.png
var employee_namespaceObject = __webpack_require__.p + "6ae3a3639be62f12e1e7.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/family.png
var family_namespaceObject = __webpack_require__.p + "1de99fefe7daad111440.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/molecule.png
var molecule_namespaceObject = __webpack_require__.p + "96fc57d7eb2df83c00ac.png";
// EXTERNAL MODULE: ./src/assets/images/navigation/session.png
var session = __webpack_require__(33159);
// EXTERNAL MODULE: ./src/assets/images/navigation/ebook.png
var ebook = __webpack_require__(83236);
;// CONCATENATED MODULE: ./src/assets/images/navigation/classroom.png
var classroom_namespaceObject = __webpack_require__.p + "97c9ac42900b751bde77.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/gift-box.png
var gift_box_namespaceObject = __webpack_require__.p + "49a32318e7d86eca6001.png";
// EXTERNAL MODULE: ./src/assets/images/navigation/copywriting.png
var copywriting = __webpack_require__(97253);
;// CONCATENATED MODULE: ./src/assets/images/navigation/schedule.png
var schedule_namespaceObject = __webpack_require__.p + "08574752ed9e1ce7fa6e.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/school-bus.png
var school_bus_namespaceObject = __webpack_require__.p + "e551e8658c44d098bc1c.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/route.png
var route_namespaceObject = __webpack_require__.p + "82e75a776d90fef2b468.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/public-transport.png
var public_transport_namespaceObject = __webpack_require__.p + "f5c99fa3269f6d1ba60a.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/bus-schedule.png
var bus_schedule_namespaceObject = __webpack_require__.p + "d2f2aee897abbbebdb53.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/money.png
var money_namespaceObject = __webpack_require__.p + "392fb135d8279f2808ae.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/income.png
var income_namespaceObject = __webpack_require__.p + "b54bacc46131a63a96d4.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/exppenses.png
var exppenses_namespaceObject = __webpack_require__.p + "31a22de1359612bb52e9.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/seo-report.png
var seo_report_namespaceObject = __webpack_require__.p + "6af8efd54f93ae954c4e.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/inventory-management.png
var inventory_management_namespaceObject = __webpack_require__.p + "1aa2107b83aa4e65e425.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/import.png
var import_namespaceObject = __webpack_require__.p + "78d121792a1f2ba34972.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/product.png
var product_namespaceObject = __webpack_require__.p + "a02d419fab963959e771.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/inventory.png
var inventory_namespaceObject = __webpack_require__.p + "491c3383263e84bcd4a4.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/team.png
var team_namespaceObject = __webpack_require__.p + "551e43d797117d5c8b2c.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/contact-list.png
var contact_list_namespaceObject = __webpack_require__.p + "7ebb9287d36fa843b5e8.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/meeting.png
var meeting_namespaceObject = __webpack_require__.p + "543d3f2061d89657cbcc.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/profile.png
var profile_namespaceObject = __webpack_require__.p + "4c218738f3ac4342e480.png";
;// CONCATENATED MODULE: ./src/assets/images/navigation/document.png
var document_namespaceObject = __webpack_require__.p + "050188cdecb000f9d754.png";
;// CONCATENATED MODULE: ./src/navigation/vertical/index.js






































 // ** Merge & Export


/* harmony default export */ var vertical = ([{
  id: "home",
  title: "dashboard",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 30,
    className: "mr-1",
    src: business_report_namespaceObject
  }),
  navLink: "/app/dashboard",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.DASHBOARD_SUBJECT */.k.DASHBOARD_SUBJECT
}, {
  id: "communication",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: [subjects/* SUBJECTS.POST_SUBJECT */.k.POST_SUBJECT, subjects/* SUBJECTS.EMAIL_SUBJECT */.k.EMAIL_SUBJECT, subjects/* SUBJECTS.CALENDAR_SUBJECT */.k.CALENDAR_SUBJECT, subjects/* SUBJECTS.MESSAGE_SUBJECT */.k.MESSAGE_SUBJECT, subjects/* SUBJECTS.MEET_SUBJECT */.k.MEET_SUBJECT],
  divider: "communication"
}, {
  id: "annonce",
  title: "annonces",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: loudspeaker_namespaceObject
  }),
  navLink: "/apps/annonce",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.POST_SUBJECT */.k.POST_SUBJECT
}, {
  id: "email",
  title: "emails",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: gmail_namespaceObject
  }),
  navLink: "/apps/email/folder/inbox",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.EMAIL_SUBJECT */.k.EMAIL_SUBJECT
}, {
  id: "calendar",
  title: "calendar",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: calendar_namespaceObject
  }),
  navLink: "/apps/calendar",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.CALENDAR_SUBJECT */.k.CALENDAR_SUBJECT
}, {
  id: "message",
  title: "messages",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: chat_1_namespaceObject
  }),
  navLink: "/apps/messages",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.MESSAGE_SUBJECT */.k.MESSAGE_SUBJECT
}, {
  id: "meet",
  title: "meet",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: video_conference_namespaceObject
  }),
  navLink: "/apps/meet",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.MEET_SUBJECT */.k.MEET_SUBJECT
}, {
  id: "school",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: [subjects/* SUBJECTS.ENROLLMENT_SUBJECT */.k.ENROLLMENT_SUBJECT, subjects/* SUBJECTS.SECTION_SUBJECT */.k.SECTION_SUBJECT, subjects/* SUBJECTS.TIME_SUBJECT */.k.TIME_SUBJECT, subjects/* SUBJECTS.TRANSPORT_SUBJECT */.k.TRANSPORT_SUBJECT, subjects/* SUBJECTS.SESSION_SUBJECT */.k.SESSION_SUBJECT, subjects/* SUBJECTS.TRAINING_SUBJECT */.k.TRAINING_SUBJECT, subjects/* SUBJECTS.ROOM_SUBJECT */.k.ROOM_SUBJECT, subjects/* SUBJECTS.PROMOTION_SUBJECT */.k.PROMOTION_SUBJECT],
  divider: "school"
}, {
  id: "enrollment",
  title: "enrollment",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 30,
    className: "mr-1",
    src: document_namespaceObject
  }),
  navLink: "/apps/enrollment",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.ENROLLMENT_SUBJECT */.k.ENROLLMENT_SUBJECT
}, {
  id: "section",
  title: "sections",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 30,
    className: "mr-1",
    src: copywriting
  }),
  navLink: "/apps/section/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.SECTION_SUBJECT */.k.SECTION_SUBJECT
}, {
  id: "time",
  title: "times",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 30,
    className: "mr-1",
    src: schedule_namespaceObject
  }),
  navLink: "/apps/time/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.TIME_SUBJECT */.k.TIME_SUBJECT
}, {
  id: "transport",
  title: "transport",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 30,
    className: "mr-1",
    src: school_bus_namespaceObject
  }),
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.TRANSPORT_SUBJECT */.k.TRANSPORT_SUBJECT,
  children: [{
    id: "route",
    title: "routes",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: route_namespaceObject
    }),
    navLink: "/apps/route/list",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.ROUTE_SUBJECT */.k.ROUTE_SUBJECT
  }, {
    id: "car",
    title: "cars",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: public_transport_namespaceObject
    }),
    navLink: "/apps/car/list",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.CAR_SUBJECT */.k.CAR_SUBJECT
  }, {
    id: "schedule",
    title: "schedule",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: bus_schedule_namespaceObject
    }),
    navLink: "/apps/schedule/list",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.SCHEDULE_SUBJECT */.k.SCHEDULE_SUBJECT
  }]
}, {
  id: "session",
  title: "sessions",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: session
  }),
  navLink: "/apps/session/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.SESSION_SUBJECT */.k.SESSION_SUBJECT
}, {
  id: "training",
  title: "trainings",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: ebook
  }),
  navLink: "/apps/training/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.TRAINING_SUBJECT */.k.TRAINING_SUBJECT
}, {
  id: "room",
  title: "rooms",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: classroom_namespaceObject
  }),
  navLink: "/apps/room/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.ROOM_SUBJECT */.k.ROOM_SUBJECT
}, {
  id: "promotion",
  title: "promotions",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: gift_box_namespaceObject
  }),
  navLink: "/apps/promotion/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.PROMOTION_SUBJECT */.k.PROMOTION_SUBJECT
}, {
  id: "people",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: [subjects/* SUBJECTS.STUDENT_SUBJECT */.k.STUDENT_SUBJECT, subjects/* SUBJECTS.STAFF_SUBJECT */.k.STAFF_SUBJECT, subjects/* SUBJECTS.TEACHER_SUBJECT */.k.TEACHER_SUBJECT, subjects/* SUBJECTS.PARENT_SUBJECT */.k.PARENT_SUBJECT],
  divider: "people"
}, {
  id: "student",
  title: "students",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: graduated
  }),
  navLink: "/apps/student/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.STUDENT_SUBJECT */.k.STUDENT_SUBJECT
}, {
  id: "teacher",
  title: "teachers",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: teacher
  }),
  navLink: "/apps/teacher/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.TEACHER_SUBJECT */.k.TEACHER_SUBJECT
}, {
  id: "staff",
  title: "staffs",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: employee_namespaceObject
  }),
  navLink: "/apps/staff/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.STAFF_SUBJECT */.k.STAFF_SUBJECT
}, {
  id: "parent",
  title: "parents",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 25,
    className: "mr-1",
    src: family_namespaceObject
  }),
  navLink: "/apps/parent/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.PARENT_SUBJECT */.k.PARENT_SUBJECT
}, {
  id: "management",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: [subjects/* SUBJECTS.BUDGET_SUBJECT */.k.BUDGET_SUBJECT, subjects/* SUBJECTS.EXPENSE_SUBJECT */.k.EXPENSE_SUBJECT, subjects/* SUBJECTS.FINANCIAL_REPORT_SUBJECT */.k.FINANCIAL_REPORT_SUBJECT, subjects/* SUBJECTS.INCOMING_SUBJECT */.k.INCOMING_SUBJECT, subjects/* SUBJECTS.OUTCOMING_SUBJECT */.k.OUTCOMING_SUBJECT, subjects/* SUBJECTS.INVENTORY_SUBJECT */.k.INVENTORY_SUBJECT, subjects/* SUBJECTS.USER_SUBJECT */.k.USER_SUBJECT, subjects/* SUBJECTS.GROUP_SUBJECT */.k.GROUP_SUBJECT, subjects/* SUBJECTS.PERMISSION_SUBJECT */.k.PERMISSION_SUBJECT],
  divider: "management"
}, {
  id: "invoiceApp",
  title: "finance",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 30,
    className: "mr-1",
    src: money_namespaceObject
  }),
  children: [{
    id: "budget",
    title: "budget",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: income_namespaceObject
    }),
    navLink: "/apps/budget",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.BUDGET_SUBJECT */.k.BUDGET_SUBJECT
  }, {
    id: "expenses",
    title: "expenses",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: exppenses_namespaceObject
    }),
    navLink: "/apps/expense",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.EXPENSE_SUBJECT */.k.EXPENSE_SUBJECT
  }, {
    id: "financialReport",
    title: "financialReport",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: seo_report_namespaceObject
    }),
    navLink: "/apps/financialReport",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.FINANCIAL_REPORT_SUBJECT */.k.FINANCIAL_REPORT_SUBJECT
  }]
}, {
  id: "inventory",
  title: "inventory",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 30,
    className: "mr-1",
    src: inventory_management_namespaceObject
  }),
  children: [{
    id: "incomings",
    title: "incomings",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: import_namespaceObject
    }),
    navLink: "/apps/incomings",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.INCOMING_SUBJECT */.k.INCOMING_SUBJECT
  }, {
    id: "outcomings",
    title: "outcomings",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: product_namespaceObject
    }),
    navLink: "/apps/outcomings",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.OUTCOMING_SUBJECT */.k.OUTCOMING_SUBJECT
  }, {
    id: "inv",
    title: "store",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: inventory_namespaceObject
    }),
    navLink: "/apps/inventory",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.INVENTORY_SUBJECT */.k.INVENTORY_SUBJECT
  }]
}, {
  id: "users",
  title: "users",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    width: 30,
    className: "mr-1",
    src: team_namespaceObject
  }),
  children: [{
    id: "list",
    title: "userList",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: contact_list_namespaceObject
    }),
    navLink: "/apps/user/list",
    action: actions/* ACTIONS.MANAGE_ACTION */.a.MANAGE_ACTION,
    resource: subjects/* SUBJECTS.USER_SUBJECT */.k.USER_SUBJECT
  }, {
    id: "groups",
    title: "groups",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: meeting_namespaceObject
    }),
    navLink: "/apps/groups",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.GROUP_SUBJECT */.k.GROUP_SUBJECT
  }, {
    id: "permission",
    title: "permission",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: 25,
      className: "mr-1",
      src: profile_namespaceObject
    }),
    navLink: "/apps/permission",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.PERMISSION_SUBJECT */.k.PERMISSION_SUBJECT
  }]
}]);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/disc.js
var disc = __webpack_require__(52423);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/circle.js
var circle = __webpack_require__(79888);
;// CONCATENATED MODULE: ./src/@core/layouts/components/menu/vertical-menu/VerticalMenuHeader.js
// ** React Imports

 // ** Third Party Components

 // ** Config





var VerticalMenuHeader = function VerticalMenuHeader(props) {
  // ** Props
  var menuCollapsed = props.menuCollapsed,
      setMenuCollapsed = props.setMenuCollapsed,
      setMenuVisibility = props.setMenuVisibility,
      setGroupOpen = props.setGroupOpen,
      menuHover = props.menuHover; // ** Reset open group

  (0,react.useEffect)(function () {
    if (!menuHover && menuCollapsed) setGroupOpen([]);
  }, [menuHover, menuCollapsed]); // ** Menu toggler component

  var Toggler = function Toggler() {
    if (!menuCollapsed) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(disc/* default */.Z, {
        size: 20,
        "data-tour": "toggle-icon",
        className: "text-primary toggle-icon d-none d-xl-block",
        onClick: function onClick() {
          return setMenuCollapsed(true);
        }
      });
    } else {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(circle/* default */.Z, {
        size: 20,
        "data-tour": "toggle-icon",
        className: "text-primary toggle-icon d-none d-xl-block",
        onClick: function onClick() {
          return setMenuCollapsed(false);
        }
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "navbar-header",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
      className: "nav navbar-nav flex-row",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        className: "nav-item mr-auto",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom/* NavLink */.OL, {
          to: "/",
          className: "navbar-brand",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "brand-logo",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              style: {
                width: "100px"
              },
              src: "../../../../../assets/images/logo/favicon.ico",
              alt: "logo"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
            className: "brand-text text-primary mb-0",
            children: themeConfig/* default.app.appName */.Z.app.appName
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        className: "nav-item nav-toggle",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "nav-link modern-nav-toggle cursor-pointer",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Toggler, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.Z, {
            onClick: function onClick() {
              return setMenuVisibility(false);
            },
            className: "toggle-icon icon-x d-block d-xl-none",
            size: 20
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var vertical_menu_VerticalMenuHeader = (VerticalMenuHeader);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
;// CONCATENATED MODULE: ./src/@core/layouts/utils.js

// ** React Imports



/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */

var resolveVerticalNavMenuItemComponent = function resolveVerticalNavMenuItemComponent(item) {
  var intl = (0,components_useIntl/* default */.Z)();
  if (item.divider) return "MenuDivider";
  if (item.header) return "VerticalNavMenuSectionHeader";
  if (item.children) return "VerticalNavMenuGroup";
  return "VerticalNavMenuLink";
};
/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */

var resolveHorizontalNavMenuItemComponent = function resolveHorizontalNavMenuItemComponent(item) {
  if (item.children) return "HorizontalNavMenuGroup";
  return "HorizontalNavMenuLink";
};
/**
 * Check if nav-link is active
 * @param {Object} link nav-link object
 */
// export const isNavLinkActive = (link, currentURL, match) => {
//   // return currentURL === link || (URLParams && Object.keys(URLParams).length && currentURLFilter === item.navLink)
//   const getFirstObjProp = obj => obj[Object.keys(obj)[0]]
//   return (
//     currentURL === link ||
//     (match !== null && match !== undefined && match.url === `${link}/${getFirstObjProp(match.params)}`)
//   )
// }

var isNavLinkActive = function isNavLinkActive(link, currentURL, routerProps) {
  return currentURL === link || routerProps && routerProps.meta && routerProps.meta.navLink && routerProps.meta.navLink === link; // return currentURL === link
};
/**
 * Check if nav group is
 * @param {Array} children Group children
 */
// export const isNavGroupActive = (children, currentURL, match) => {
//   return children.some(child => {
//     // If child have children => It's group => Go deeper(recursive)
//     if (child.children) {
//       return isNavGroupActive(child.children, currentURL, match)
//     }
//     // else it's link => Check for matched Route
//     return isNavLinkActive(child.navLink, currentURL, match)
//   })
// }

var isNavGroupActive = function isNavGroupActive(children, currentURL, routerProps) {
  return children.some(function (child) {
    // If child have children => It's group => Go deeper(recursive)
    if (child.children) {
      return isNavGroupActive(child.children, currentURL, routerProps);
    } // else it's link => Check for matched Route


    return isNavLinkActive(child.navLink, currentURL, routerProps);
  });
};
/**
 * Search for parent object
 * @param {Array} navigation Group children
 * @param {string} currentURL current URL
 */
// export const search = (navigation, currentURL, match) => {
//   let result
//   navigation.some(child => {
//     let children
//     // If child have children => It's group => Go deeper(recursive)
//     if (child.children && (children = search(child.children, currentURL, match))) {
//       return (result = {
//         id: child.id,
//         children
//       })
//     }
//     // else it's link => Check for matched Route
//     if (isNavLinkActive(child.navLink, currentURL, match)) {
//       return (result = {
//         id: child.id
//       })
//     }
//   })
//   return result
// }

var utils_search = function search(navigation, currentURL, routerProps) {
  var result;
  navigation.some(function (child) {
    var children; // If child have children => It's group => Go deeper(recursive)

    if (child.children && (children = search(child.children, currentURL, routerProps))) {
      return result = {
        id: child.id,
        children: children
      };
    } // else it's link => Check for matched Route


    if (isNavLinkActive(child.navLink, currentURL, routerProps)) {
      return result = {
        id: child.id
      };
    }
  });
  return result;
};
/**
 * Loop through nested object
 * @param {object} obj nested object
 */

var getAllParents = function getAllParents(obj, match) {
  var res = [];

  var recurse = function recurse(obj, current) {
    for (var key in obj) {
      var value = obj[key];

      if (value !== undefined) {
        if (value && (0,esm_typeof/* default */.Z)(value) === "object") {
          recurse(value, key);
        } else {
          if (key === match) {
            res.push(value);
          }
        }
      }
    }
  };

  recurse(obj);
  return res;
};
var canViewMenuGroup = function canViewMenuGroup(item) {
  var ability = (0,react.useContext)(Can/* AbilityContext */.v); // ! This same logic is used in canViewHorizontalNavMenuGroup and canViewHorizontalNavMenuHeaderGroup. So make sure to update logic in them as well

  var hasAnyVisibleChild = item.children && item.children.some(function (i) {
    return ability.can(i.action, i.resource);
  }); // ** If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // ** Else check for ability using provided resource and action along with checking if has any visible child

  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }

  return ability.can(item.action, item.resource) && hasAnyVisibleChild;
};
var canViewMenuItem = function canViewMenuItem(item) {
  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  if ((0,esm_typeof/* default */.Z)(item.resource) === "object") {
    return item.resource.some(function (r) {
      return ability.can(item.action, r);
    });
  } else {
    return ability.can(item.action, item.resource);
  }
};
;// CONCATENATED MODULE: ./src/@core/layouts/components/menu/vertical-menu/VerticalNavMenuLink.js



function VerticalNavMenuLink_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function VerticalNavMenuLink_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? VerticalNavMenuLink_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : VerticalNavMenuLink_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports

 // ** Third Party Components



 // ** Vertical Menu Array Of Items

 // ** Utils





var VerticalNavMenuLink = function VerticalNavMenuLink(_ref) {
  var item = _ref.item,
      groupActive = _ref.groupActive,
      setGroupActive = _ref.setGroupActive,
      activeItem = _ref.activeItem,
      setActiveItem = _ref.setActiveItem,
      groupOpen = _ref.groupOpen,
      setGroupOpen = _ref.setGroupOpen,
      toggleActiveGroup = _ref.toggleActiveGroup,
      parentItem = _ref.parentItem,
      routerProps = _ref.routerProps,
      currentActiveItem = _ref.currentActiveItem;
  // ** Conditional Link Tag, if item has newTab or externalLink props use <a> tag else use NavLink
  var LinkTag = item.externalLink ? "a" : react_router_dom/* NavLink */.OL;
  var intl = (0,components_useIntl/* default */.Z)(); // ** URL Vars

  var location = (0,react_router/* useLocation */.TH)();
  var currentURL = location.pathname; // ** To match path

  var match = (0,react_router/* matchPath */.LX)(currentURL, {
    path: "".concat(item.navLink, "/:param"),
    exact: true,
    strict: false
  }); // ** Search for current item parents

  var searchParents = function searchParents(navigation, currentURL) {
    var parents = utils_search(navigation, currentURL, routerProps); // Search for parent object

    var allParents = getAllParents(parents, "id"); // Parents Object to Parents Array

    return allParents;
  }; // ** URL Vars


  var resetActiveGroup = function resetActiveGroup(navLink) {
    var parents = utils_search(vertical, navLink, match);
    toggleActiveGroup(item.id, parents);
  }; // ** Reset Active & Open Group Arrays


  var resetActiveAndOpenGroups = function resetActiveAndOpenGroups() {
    setGroupActive([]);
    setGroupOpen([]);
  }; // ** Checks url & updates active item


  (0,react.useEffect)(function () {
    if (currentActiveItem !== null) {
      setActiveItem(currentActiveItem);
      var arr = searchParents(vertical, currentURL);
      setGroupActive((0,toConsumableArray/* default */.Z)(arr));
    }
  }, [location]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
    className: classnames_default()({
      "nav-item": !item.children,
      disabled: item.disabled,
      active: window.location.href.includes(item.navLink.split("/")[2])
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(LinkTag, VerticalNavMenuLink_objectSpread(VerticalNavMenuLink_objectSpread({
      className: "d-flex align-items-center",
      target: item.newTab ? "_blank" : undefined
      /*eslint-disable */

    }, item.externalLink === true ? {
      href: item.navLink || "/"
    } : {
      to: item.navLink || "/",
      isActive: function isActive(match, location) {
        if (!match) {
          return false;
        }

        if (match.url && match.url !== "" && match.url === item.navLink) {
          currentActiveItem = item.navLink;
        }
      }
    }), {}, {
      /*eslint-enable */
      onClick: function onClick(e) {
        if (!item.navLink.length) {
          e.preventDefault();
        }

        parentItem ? resetActiveGroup(item.navLink) : resetActiveAndOpenGroups();
      },
      children: [item.icon, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "menu-item text-truncate font-weight-bold",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: item.title
        })
      }), item.badge && item.badgeText ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_Badge/* default */.Z, {
        className: "ml-auto mr-1",
        color: item.badge,
        pill: true,
        children: item.badgeText
      }) : null]
    }))
  });
};

/* harmony default export */ var vertical_menu_VerticalNavMenuLink = (VerticalNavMenuLink);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Collapse.js
var Collapse = __webpack_require__(20627);
;// CONCATENATED MODULE: ./src/@core/layouts/components/menu/vertical-menu/VerticalNavMenuGroup.js

// ** React Imports
 // ** Third Party Components



 // ** Vertical Menu Items Component

 // ** Utils





var VerticalNavMenuGroup = function VerticalNavMenuGroup(_ref) {
  var item = _ref.item,
      groupActive = _ref.groupActive,
      setGroupActive = _ref.setGroupActive,
      activeItem = _ref.activeItem,
      setActiveItem = _ref.setActiveItem,
      groupOpen = _ref.groupOpen,
      setGroupOpen = _ref.setGroupOpen,
      parentItem = _ref.parentItem,
      menuCollapsed = _ref.menuCollapsed,
      menuHover = _ref.menuHover,
      routerProps = _ref.routerProps,
      currentActiveItem = _ref.currentActiveItem;
  // ** Current Val
  var currentURL = (0,react_router/* useLocation */.TH)().pathname;
  var intl = (0,components_useIntl/* default */.Z)(); // ** Toggles Open Group

  var toggleOpenGroup = function toggleOpenGroup(item, parentItem) {
    var openArr = groupOpen;
    var allParents;

    if (parentItem) {
      allParents = getAllParents(parentItem, "id");
      allParents.pop();
    } // ** If user clicked on menu group inside already opened group i.g. when user click on blog group inside pages group


    if (groupOpen && allParents && groupOpen[0] === allParents[0]) {
      groupOpen.includes(item) ? openArr.splice(openArr.indexOf(item), 1) : openArr.push(item);
    } else {
      openArr = [];

      if (!groupOpen.includes(item)) {
        openArr.push(item);
      }
    } // ** Set Open Group


    setGroupOpen((0,toConsumableArray/* default */.Z)(openArr));
  }; // ** Toggle Active Group


  var toggleActiveGroup = function toggleActiveGroup(item, parentItem) {
    var activeArr = groupActive;
    var allParents;

    if (parentItem) {
      allParents = getAllParents(parentItem, "id");
      activeArr = allParents;
    } else {
      activeArr.includes(item) ? activeArr.splice(activeArr.indexOf(item), 1) : activeArr.push(item);
    } // ** Set open group removing any activegroup item present in opengroup state


    var openArr = groupOpen.filter(function (val) {
      return !activeArr.includes(val);
    });
    setGroupOpen((0,toConsumableArray/* default */.Z)(openArr)); // **  Set Active Group

    setGroupActive((0,toConsumableArray/* default */.Z)(activeArr));
  }; // ** On Group Item Click


  var onCollapseClick = function onCollapseClick(e, item) {
    if (groupActive && groupActive.includes(item.id) || isNavGroupActive(item.children, currentURL, routerProps)) {
      toggleActiveGroup(item.id);
    } else {
      toggleOpenGroup(item.id, parentItem);
    }

    e.preventDefault();
  }; // ** Returns condition to add open class


  var openClassCondition = function openClassCondition(id) {
    if (menuCollapsed && menuHover || menuCollapsed === false) {
      if (groupActive.includes(id) || groupOpen.includes(item.id)) {
        return true;
      }
    } else if (groupActive.includes(id) && menuCollapsed && menuHover === false) {
      return false;
    } else {
      return null;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
    className: classnames_default()("nav-item has-sub", {
      open: openClassCondition(item.id),
      "menu-collapsed-open": groupActive.includes(item.id),
      "sidebar-group-active": groupActive.includes(item.id) || groupOpen.includes(item.id)
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom/* Link */.rU, {
      className: "d-flex align-items-center",
      to: "/",
      onClick: function onClick(e) {
        return onCollapseClick(e, item);
      },
      children: [item.icon, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "menu-title text-truncate font-weight-bold",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: item.title
        })
      }), item.badge && item.badgeText ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_Badge/* default */.Z, {
        className: "ml-auto mr-1",
        color: item.badge,
        pill: true,
        children: item.badgeText
      }) : null]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: "menu-content",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Collapse/* default */.Z, {
        isOpen: groupActive && groupActive.includes(item.id) || groupOpen && groupOpen.includes(item.id),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(VerticalNavMenuItems, {
          items: item.children,
          groupActive: groupActive,
          setGroupActive: setGroupActive,
          groupOpen: groupOpen,
          setGroupOpen: setGroupOpen,
          toggleActiveGroup: toggleActiveGroup,
          parentItem: item,
          menuCollapsed: menuCollapsed,
          menuHover: menuHover,
          routerProps: routerProps,
          currentActiveItem: currentActiveItem,
          activeItem: activeItem,
          setActiveItem: setActiveItem
        })
      })
    })]
  });
};

/* harmony default export */ var vertical_menu_VerticalNavMenuGroup = (VerticalNavMenuGroup);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/more-horizontal.js
var more_horizontal = __webpack_require__(24984);
;// CONCATENATED MODULE: ./src/@core/layouts/components/menu/vertical-menu/VerticalNavMenuSectionHeader.js
// ** Third Party Components





var VerticalNavMenuSectionHeader = function VerticalNavMenuSectionHeader(_ref) {
  var item = _ref.item,
      index = _ref.index;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
    className: "navigation-header",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: item.header
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(more_horizontal/* default */.Z, {
      className: "feather-more-horizontal"
    })]
  });
};

/* harmony default export */ var vertical_menu_VerticalNavMenuSectionHeader = (VerticalNavMenuSectionHeader);
;// CONCATENATED MODULE: ./src/@core/layouts/components/menu/vertical-menu/MenuDivider.js




var MenuDivider = function MenuDivider(_ref) {
  var item = _ref.item;
  var intl = (0,components_useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "divider",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "divider-text",
      children: intl.formatMessage({
        id: item.divider
      })
    })
  });
};

/* harmony default export */ var vertical_menu_MenuDivider = (MenuDivider);
;// CONCATENATED MODULE: ./src/@core/layouts/components/menu/vertical-menu/VerticalNavMenuItems.js


function VerticalNavMenuItems_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function VerticalNavMenuItems_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? VerticalNavMenuItems_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : VerticalNavMenuItems_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports
 // ** Vertical Menu Components



 // ** Ability Context

 // ** Utils






var VerticalMenuNavItems = function VerticalMenuNavItems(props) {
  var intl = (0,components_useIntl/* default */.Z)(); // ** Components Object

  var Components = {
    MenuDivider: vertical_menu_MenuDivider,
    VerticalNavMenuSectionHeader: vertical_menu_VerticalNavMenuSectionHeader,
    VerticalNavMenuGroup: vertical_menu_VerticalNavMenuGroup,
    VerticalNavMenuLink: vertical_menu_VerticalNavMenuLink
  }; // ** Render Nav Menu Items

  var RenderNavItems = props.items.map(function (item, index) {
    var TagName = Components[resolveVerticalNavMenuItemComponent(item)];

    if (item.children) {
      return canViewMenuGroup(item) && /*#__PURE__*/(0,jsx_runtime.jsx)(TagName, VerticalNavMenuItems_objectSpread({
        item: item,
        index: index
      }, props), item.id);
    }

    return canViewMenuItem(item) && /*#__PURE__*/(0,jsx_runtime.jsx)(TagName, VerticalNavMenuItems_objectSpread({
      item: item
    }, props), item.id || item.header);
  });
  return RenderNavItems;
};

/* harmony default export */ var VerticalNavMenuItems = (VerticalMenuNavItems);
;// CONCATENATED MODULE: ./src/@core/layouts/components/menu/vertical-menu/index.js



function vertical_menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function vertical_menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? vertical_menu_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : vertical_menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports
 // ** Vertical Menu Items Array

 // ** Third Party Components


 // ** Vertical Menu Components






var Sidebar = function Sidebar(props) {
  // ** Props
  var menuCollapsed = props.menuCollapsed,
      routerProps = props.routerProps,
      menu = props.menu,
      currentActiveItem = props.currentActiveItem,
      skin = props.skin; // ** States

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      groupOpen = _useState2[0],
      setGroupOpen = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      groupActive = _useState4[0],
      setGroupActive = _useState4[1];

  var _useState5 = (0,react.useState)(null),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      activeItem = _useState6[0],
      setActiveItem = _useState6[1]; // ** Menu Hover State


  var _useState7 = (0,react.useState)(false),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      menuHover = _useState8[0],
      setMenuHover = _useState8[1]; // ** Ref


  var shadowRef = (0,react.useRef)(null); // ** Function to handle Mouse Enter

  var onMouseEnter = function onMouseEnter() {
    if (menuCollapsed) {
      setMenuHover(true);
    }
  }; // ** Scroll Menu


  var scrollMenu = function scrollMenu(container) {
    if (shadowRef && container.scrollTop > 0) {
      if (!shadowRef.current.classList.contains("d-block")) {
        shadowRef.current.classList.add("d-block");
      }
    } else {
      if (shadowRef.current.classList.contains("d-block")) {
        shadowRef.current.classList.remove("d-block");
      }
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classnames_default()("main-menu menu-fixed menu-accordion menu-shadow", {
        expanded: menuHover || menuCollapsed === false,
        "menu-light": skin !== "semi-dark" && skin !== "dark",
        "menu-dark": skin === "semi-dark" || skin === "dark"
      }),
      onMouseEnter: onMouseEnter,
      onMouseLeave: function onMouseLeave() {
        return setMenuHover(false);
      },
      children: menu ? menu(props) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(vertical_menu_VerticalMenuHeader, vertical_menu_objectSpread({
          setGroupOpen: setGroupOpen,
          menuHover: menuHover
        }, props)), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "shadow-bottom",
          ref: shadowRef
        }), /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
          className: "main-menu-content",
          options: {
            wheelPropagation: false
          },
          onScrollY: function onScrollY(container) {
            return scrollMenu(container);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
            className: "navigation navigation-main",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(VerticalNavMenuItems, {
              items: vertical,
              groupActive: groupActive,
              setGroupActive: setGroupActive,
              activeItem: activeItem,
              setActiveItem: setActiveItem,
              groupOpen: groupOpen,
              setGroupOpen: setGroupOpen,
              routerProps: routerProps,
              menuCollapsed: menuCollapsed,
              menuHover: menuHover,
              currentActiveItem: currentActiveItem
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ var vertical_menu = (Sidebar);
;// CONCATENATED MODULE: ./src/utility/hooks/useNavbarType.js

//** React Imports
 // ** Configs


var useNavbarType = function useNavbarType() {
  // ** State
  var _useState = (0,react.useState)(function () {
    try {
      return themeConfig/* default.layout.navbar.type */.Z.layout.navbar.type;
    } catch (error) {
      // ** If error return initialValue
      console.log(error);
      return themeConfig/* default.layout.navbar.type */.Z.layout.navbar.type;
    }
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      navbarType = _useState2[0],
      setNavbarType = _useState2[1]; // ** Return a wrapped version of useState's setter function


  var setValue = function setValue(value) {
    try {
      // ** Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(navbarType) : value; // ** Set state

      setNavbarType(valueToStore);
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [navbarType, setValue];
};
;// CONCATENATED MODULE: ./src/utility/hooks/useFooterType.js

// ** React Imports
 // ** Configs


var useFooterType = function useFooterType() {
  // ** State
  var _useState = (0,react.useState)(function () {
    try {
      return themeConfig/* default.layout.footer.type */.Z.layout.footer.type;
    } catch (error) {
      // ** If error also initialValue
      console.log(error);
      return themeConfig/* default.layout.footer.type */.Z.layout.footer.type;
    }
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      footerType = _useState2[0],
      setFooterType = _useState2[1]; // ** Return a wrapped version of useState's setter function


  var setValue = function setValue(value) {
    try {
      // ** Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(footerType) : value; // ** Set state

      setFooterType(valueToStore);
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [footerType, setValue];
};
;// CONCATENATED MODULE: ./src/utility/hooks/useNavbarColor.js

//** React Imports
 // ** Configs


var useNavbarColor = function useNavbarColor() {
  // ** State
  var _useState = (0,react.useState)(function () {
    try {
      return themeConfig/* default.layout.navbar.backgroundColor */.Z.layout.navbar.backgroundColor;
    } catch (error) {
      // ** If error return initialValue
      console.log(error);
      return themeConfig/* default.layout.navbar.backgroundColor */.Z.layout.navbar.backgroundColor;
    }
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      navbarColor = _useState2[0],
      setNavbarColor = _useState2[1]; // ** Return a wrapped version of useState's setter function


  var setValue = function setValue(value) {
    try {
      // ** Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(navbarColor) : value; // ** Set state

      setNavbarColor(valueToStore);
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [navbarColor, setValue];
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/@core/scss/base/core/menu/menu-types/vertical-menu.scss
var menu_types_vertical_menu = __webpack_require__(77972);
;// CONCATENATED MODULE: ./src/@core/scss/base/core/menu/menu-types/vertical-menu.scss

      
      
      
      
      
      
      
      
      

var vertical_menu_options = {};

vertical_menu_options.styleTagTransform = (styleTagTransform_default());
vertical_menu_options.setAttributes = (setAttributesWithoutAttributes_default());

      vertical_menu_options.insert = insertBySelector_default().bind(null, "head");
    
vertical_menu_options.domAPI = (styleDomAPI_default());
vertical_menu_options.insertStyleElement = (insertStyleElement_default());

var vertical_menu_update = injectStylesIntoStyleTag_default()(menu_types_vertical_menu/* default */.Z, vertical_menu_options);




       /* harmony default export */ var menu_menu_types_vertical_menu = (menu_types_vertical_menu/* default */.Z && menu_types_vertical_menu/* default.locals */.Z.locals ? menu_types_vertical_menu/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/@core/scss/base/core/menu/menu-types/vertical-overlay-menu.scss
var vertical_overlay_menu = __webpack_require__(64849);
;// CONCATENATED MODULE: ./src/@core/scss/base/core/menu/menu-types/vertical-overlay-menu.scss

      
      
      
      
      
      
      
      
      

var vertical_overlay_menu_options = {};

vertical_overlay_menu_options.styleTagTransform = (styleTagTransform_default());
vertical_overlay_menu_options.setAttributes = (setAttributesWithoutAttributes_default());

      vertical_overlay_menu_options.insert = insertBySelector_default().bind(null, "head");
    
vertical_overlay_menu_options.domAPI = (styleDomAPI_default());
vertical_overlay_menu_options.insertStyleElement = (insertStyleElement_default());

var vertical_overlay_menu_update = injectStylesIntoStyleTag_default()(vertical_overlay_menu/* default */.Z, vertical_overlay_menu_options);




       /* harmony default export */ var menu_types_vertical_overlay_menu = (vertical_overlay_menu/* default */.Z && vertical_overlay_menu/* default.locals */.Z.locals ? vertical_overlay_menu/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/@core/layouts/VerticalLayout.js



function VerticalLayout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function VerticalLayout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? VerticalLayout_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : VerticalLayout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports

 // ** Store & Actions


 // ** Third Party Components




 // ** Configs

 // ** Custom Components




 // ** Custom Hooks





 // ** Styles






var VerticalLayout = function VerticalLayout(props) {
  // ** Props
  var children = props.children,
      navbar = props.navbar,
      footer = props.footer,
      menu = props.menu,
      routerProps = props.routerProps,
      currentActiveItem = props.currentActiveItem; // ** Hooks

  var _useSkin = (0,useSkin/* useSkin */.Q)(),
      _useSkin2 = (0,slicedToArray/* default */.Z)(_useSkin, 2),
      skin = _useSkin2[0],
      setSkin = _useSkin2[1];

  var _useRTL = (0,useRTL/* useRTL */.S)(),
      _useRTL2 = (0,slicedToArray/* default */.Z)(_useRTL, 2),
      isRtl = _useRTL2[0],
      setIsRtl = _useRTL2[1];

  var _useNavbarType = useNavbarType(),
      _useNavbarType2 = (0,slicedToArray/* default */.Z)(_useNavbarType, 2),
      navbarType = _useNavbarType2[0],
      setNavbarType = _useNavbarType2[1];

  var _useFooterType = useFooterType(),
      _useFooterType2 = (0,slicedToArray/* default */.Z)(_useFooterType, 2),
      footerType = _useFooterType2[0],
      setFooterType = _useFooterType2[1];

  var _useNavbarColor = useNavbarColor(),
      _useNavbarColor2 = (0,slicedToArray/* default */.Z)(_useNavbarColor, 2),
      navbarColor = _useNavbarColor2[0],
      setNavbarColor = _useNavbarColor2[1]; // ** States


  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isMounted = _useState2[0],
      setIsMounted = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      menuVisibility = _useState4[0],
      setMenuVisibility = _useState4[1];

  var _useState5 = (0,react.useState)(window.innerWidth),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      windowWidth = _useState6[0],
      setWindowWidth = _useState6[1]; // ** Store Vars


  var dispatch = (0,es/* useDispatch */.I0)();
  var layoutStore = (0,es/* useSelector */.v9)(function (state) {
    return state.layout;
  }); // ** Update Window Width

  var handleWindowWidth = function handleWindowWidth() {
    setWindowWidth(window.innerWidth);
  }; // ** Vars


  var location = (0,react_router/* useLocation */.TH)();
  var contentWidth = layoutStore.contentWidth;
  var menuCollapsed = layoutStore.menuCollapsed;
  var isHidden = layoutStore.menuHidden; // ** Toggles Menu Collapsed

  var setMenuCollapsed = function setMenuCollapsed(val) {
    return dispatch((0,actions_layout/* handleMenuCollapsed */.mB)(val));
  }; // ** Handles Content Width


  var setContentWidth = function setContentWidth(val) {
    return dispatch((0,actions_layout/* handleContentWidth */.eF)(val));
  }; // ** Handles Content Width


  var setIsHidden = function setIsHidden(val) {
    return dispatch((0,actions_layout/* handleMenuHidden */._r)(val));
  }; //** This function will detect the Route Change and will hide the menu on menu item click


  (0,react.useEffect)(function () {
    if (menuVisibility && windowWidth < 1200) {
      setMenuVisibility(false);
    }
  }, [location]); //** Sets Window Size & Layout Props

  (0,react.useEffect)(function () {
    if (window !== undefined) {
      window.addEventListener('resize', handleWindowWidth);
    }
  }, [windowWidth]); //** ComponentDidMount

  (0,react.useEffect)(function () {
    setIsMounted(true);
    return function () {
      return setIsMounted(false);
    };
  }, []); // ** Vars

  var footerClasses = {
    static: 'footer-static',
    sticky: 'footer-fixed',
    hidden: 'footer-hidden'
  };
  var navbarWrapperClasses = {
    floating: 'navbar-floating',
    sticky: 'navbar-sticky',
    static: 'navbar-static',
    hidden: 'navbar-hidden'
  };
  var navbarClasses = {
    floating: 'floating-nav',
    sticky: 'fixed-top',
    static: 'navbar-static-top',
    hidden: 'd-none'
  };
  var bgColorCondition = navbarColor !== '' && navbarColor !== 'light' && navbarColor !== 'white';

  if (!isMounted) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", VerticalLayout_objectSpread(VerticalLayout_objectSpread({
    className: classnames_default()("wrapper vertical-layout ".concat(navbarWrapperClasses[navbarType] || 'navbar-floating', " ").concat(footerClasses[footerType] || 'footer-static'), {
      // Modern Menu
      'vertical-menu-modern': windowWidth >= 1200,
      'menu-collapsed': menuCollapsed && windowWidth >= 1200,
      'menu-expanded': !menuCollapsed && windowWidth > 1200,
      // Overlay Menu
      'vertical-overlay-menu': windowWidth < 1200,
      'menu-hide': !menuVisibility && windowWidth < 1200,
      'menu-open': menuVisibility && windowWidth < 1200
    })
  }, isHidden ? {
    'data-col': '1-column'
  } : {}), {}, {
    children: [!isHidden ? /*#__PURE__*/(0,jsx_runtime.jsx)(vertical_menu, {
      skin: skin,
      menu: menu,
      menuCollapsed: menuCollapsed,
      menuVisibility: menuVisibility,
      setMenuCollapsed: setMenuCollapsed,
      setMenuVisibility: setMenuVisibility,
      routerProps: routerProps,
      currentActiveItem: currentActiveItem
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(Navbar/* default */.Z, {
      expand: "lg",
      light: skin !== 'dark',
      dark: skin === 'dark' || bgColorCondition,
      color: bgColorCondition ? navbarColor : undefined,
      className: classnames_default()("header-navbar navbar align-items-center ".concat(navbarClasses[navbarType] || 'floating-nav', " navbar-shadow")),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "navbar-container d-flex content",
        children: navbar ? navbar({
          setMenuVisibility: setMenuVisibility,
          skin: skin,
          setSkin: setSkin
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_navbar, {
          setMenuVisibility: setMenuVisibility,
          skin: skin,
          setSkin: setSkin
        })
      })
    }), children, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classnames_default()('sidenav-overlay', {
        show: menuVisibility
      }),
      onClick: function onClick() {
        return setMenuVisibility(false);
      }
    }), themeConfig/* default.layout.customizer */.Z.layout.customizer === true ? /*#__PURE__*/(0,jsx_runtime.jsx)(customizer, {
      skin: skin,
      setSkin: setSkin,
      footerType: footerType,
      setFooterType: setFooterType,
      navbarType: navbarType,
      setNavbarType: setNavbarType,
      navbarColor: navbarColor,
      setNavbarColor: setNavbarColor,
      isRtl: isRtl,
      setIsRtl: setIsRtl,
      layout: props.layout,
      setLayout: props.setLayout,
      isHidden: isHidden,
      setIsHidden: setIsHidden,
      contentWidth: contentWidth,
      setContentWidth: setContentWidth,
      menuCollapsed: menuCollapsed,
      setMenuCollapsed: setMenuCollapsed,
      transition: props.transition,
      setTransition: props.setTransition,
      themeConfig: themeConfig/* default */.Z
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)("footer", {
      className: classnames_default()("footer footer-light ".concat(footerClasses[footerType] || 'footer-static'), {
        'd-none': footerType === 'hidden'
      }),
      children: footer ? footer({
        footerType: footerType,
        footerClasses: footerClasses
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_footer, {
        footerType: footerType,
        footerClasses: footerClasses
      })
    }), themeConfig/* default.layout.scrollTop */.Z.layout.scrollTop === true ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "scroll-to-top",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_scroll_up/* default */.Z, {
        showUnder: 300,
        style: {
          bottom: '5%'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_Button/* default */.Z, {
          className: "btn-icon",
          color: "primary",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(arrow_up/* default */.Z, {
            size: 14
          })
        })
      })
    }) : null]
  }));
};

/* harmony default export */ var layouts_VerticalLayout = (VerticalLayout);
;// CONCATENATED MODULE: ./src/layouts/VerticalLayout.js


function layouts_VerticalLayout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function layouts_VerticalLayout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? layouts_VerticalLayout_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : layouts_VerticalLayout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// !Do not remove the Layout import
 // ** Components
// import CustomMenu from './components/Menu'
// import CustomNavbar from './components/Navbar'
// import CustomFooter from './components/Footer'



var VerticalLayout_VerticalLayout = function VerticalLayout(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(layouts_VerticalLayout // menu={props => <CustomMenu {...props} />}
  // navbar={props => <CustomNavbar {...props} />}
  // footer={props => <CustomFooter {...props} />}
  , layouts_VerticalLayout_objectSpread(layouts_VerticalLayout_objectSpread({}, props), {}, {
    children: props.children
  }));
};

/* harmony default export */ var src_layouts_VerticalLayout = (VerticalLayout_VerticalLayout);
;// CONCATENATED MODULE: ./src/navigation/horizontal/index.js


 // ** Merge & Export


/* harmony default export */ var horizontal = ([{
  id: "home",
  title: "dashboard",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-home"
  }),
  navLink: "/app/dashboard",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.DASHBOARD_SUBJECT */.k.DASHBOARD_SUBJECT
}, {
  id: "enrollment",
  title: "enrollment",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-pen"
  }),
  navLink: "/apps/enrollment",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.ENROLLMENT_SUBJECT */.k.ENROLLMENT_SUBJECT
}, {
  id: "annonce",
  title: "annonce",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-bullhorn"
  }),
  navLink: "/apps/annonce",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.POST_SUBJECT */.k.POST_SUBJECT
}, {
  id: "student",
  title: "students",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-graduation-cap"
  }),
  navLink: "/apps/student/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.STUDENT_SUBJECT */.k.STUDENT_SUBJECT
}, {
  id: "teacher",
  title: "teacher",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-chalkboard-user"
  }),
  navLink: "/apps/teacher/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.TEACHER_SUBJECT */.k.TEACHER_SUBJECT
}, {
  id: "staff",
  title: "staff",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-clipboard-user"
  }),
  navLink: "/apps/staff/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.STAFF_SUBJECT */.k.STAFF_SUBJECT
}, {
  id: "parent",
  title: "parent",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-people-roof"
  }),
  navLink: "/apps/parent/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.PARENT_SUBJECT */.k.PARENT_SUBJECT
}, {
  id: "section",
  title: "sections",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-users-rectangle"
  }),
  navLink: "/apps/section/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.SECTION_SUBJECT */.k.SECTION_SUBJECT
}, {
  id: "session",
  title: "sessions",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-table-columns"
  }),
  navLink: "/apps/session/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.SESSION_SUBJECT */.k.SESSION_SUBJECT
}, {
  id: "time",
  title: "times",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-regular fa-clock"
  }),
  navLink: "/apps/time/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.TIME_SUBJECT */.k.TIME_SUBJECT
}, {
  id: "training",
  title: "trainings",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-brands fa-react"
  }),
  navLink: "/apps/training/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.TRAINING_SUBJECT */.k.TRAINING_SUBJECT
}, {
  id: "transport",
  title: "transport",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-bus"
  }),
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.TRANSPORT_SUBJECT */.k.TRANSPORT_SUBJECT,
  children: [{
    id: "route",
    title: "routes",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-solid fa-route"
    }),
    navLink: "/apps/route/list",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.ROUTE_SUBJECT */.k.ROUTE_SUBJECT
  }, {
    id: "car",
    title: "cars",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-solid fa-van-shuttle"
    }),
    navLink: "/apps/car/list",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.CAR_SUBJECT */.k.CAR_SUBJECT
  }, {
    id: "schedule",
    title: "schedule",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-solid fa-business-time"
    }),
    navLink: "/apps/schedule/list",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.SCHEDULE_SUBJECT */.k.SCHEDULE_SUBJECT
  }]
}, {
  id: "room",
  title: "rooms",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-chalkboard"
  }),
  navLink: "/apps/room/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.ROOM_SUBJECT */.k.ROOM_SUBJECT
}, {
  id: "promotion",
  title: "promotions",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-tags"
  }),
  navLink: "/apps/promotion/list",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.PROMOTION_SUBJECT */.k.PROMOTION_SUBJECT
}, {
  id: "email",
  title: "emails",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-envelope"
  }),
  navLink: "/apps/email/folder/inbox",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.EMAIL_SUBJECT */.k.EMAIL_SUBJECT
}, {
  id: "calendar",
  title: "calendar",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-calendar-days"
  }),
  navLink: "/apps/calendar",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.CALENDAR_SUBJECT */.k.CALENDAR_SUBJECT
}, {
  id: "message",
  title: "messages",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-comments"
  }),
  navLink: "/apps/messages",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.MESSAGE_SUBJECT */.k.MESSAGE_SUBJECT
}, {
  id: "meet",
  title: "meet",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-video"
  }),
  navLink: "/apps/meet",
  action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
  resource: subjects/* SUBJECTS.MEET_SUBJECT */.k.MEET_SUBJECT
}, {
  id: "invoiceApp",
  title: "finance",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-file-invoice-dollar"
  }),
  children: [{
    id: "budget",
    title: "budget",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-solid fa-circle-down"
    }),
    navLink: "/apps/budget",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.BUDGET_SUBJECT */.k.BUDGET_SUBJECT
  }, {
    id: "expenses",
    title: "expenses",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-solid fa-circle-up"
    }),
    navLink: "/apps/expense",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.EXPENSE_SUBJECT */.k.EXPENSE_SUBJECT
  }, {
    id: "financialReport",
    title: "financialReport",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-solid fa-chart-pie"
    }),
    navLink: "/apps/financialReport",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.FINANCIAL_REPORT_SUBJECT */.k.FINANCIAL_REPORT_SUBJECT
  }]
}, {
  id: "inventory",
  title: "inventory",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-boxes-stacked"
  }),
  children: [{
    id: "incomings",
    title: "incomings",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-solid fa-circle-down"
    }),
    navLink: "/apps/incomings",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.INCOMING_SUBJECT */.k.INCOMING_SUBJECT
  }, {
    id: "outcomings",
    title: "outcomings",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-solid fa-circle-up"
    }),
    navLink: "/apps/outcomings",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.OUTCOMING_SUBJECT */.k.OUTCOMING_SUBJECT
  }, {
    id: "inv",
    title: "store",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-solid fa-warehouse"
    }),
    navLink: "/apps/inventory",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.INVENTORY_SUBJECT */.k.INVENTORY_SUBJECT
  }]
}, {
  id: "users",
  title: "users",
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: "fa-solid fa-users"
  }),
  children: [{
    id: "list",
    title: "userList",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-regular fa-rectangle-list"
    }),
    navLink: "/apps/user/list",
    action: actions/* ACTIONS.MANAGE_ACTION */.a.MANAGE_ACTION,
    resource: subjects/* SUBJECTS.USER_SUBJECT */.k.USER_SUBJECT
  }, {
    id: "groups",
    title: "groups",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-solid fa-users-rectangle"
    }),
    navLink: "/apps/user/groups",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.GROUP_SUBJECT */.k.GROUP_SUBJECT
  }, {
    id: "permission",
    title: "permission",
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "fa-solid fa-shield-halved"
    }),
    navLink: "/apps/permission",
    action: actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION,
    resource: subjects/* SUBJECTS.PERMISSION_SUBJECT */.k.PERMISSION_SUBJECT
  }]
}]);
;// CONCATENATED MODULE: ./src/@core/layouts/components/menu/horizontal-menu/HorizontalNavMenuLink.js



function HorizontalNavMenuLink_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function HorizontalNavMenuLink_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? HorizontalNavMenuLink_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : HorizontalNavMenuLink_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports

 // ** Horizontal menu items array

 // ** Third Party Components



 // ** Utils





var HorizontalNavMenuLink = function HorizontalNavMenuLink(_ref) {
  var item = _ref.item,
      setOpenDropdown = _ref.setOpenDropdown,
      setGroupActive = _ref.setGroupActive,
      activeItem = _ref.activeItem,
      setActiveItem = _ref.setActiveItem,
      routerProps = _ref.routerProps,
      currentActiveItem = _ref.currentActiveItem,
      isChild = _ref.isChild;
  // ** Conditional Link Tag, if item has newTab or externalLink props use <a> tag else use NavLink
  var LinkTag = item.externalLink ? "a" : react_router_dom/* NavLink */.OL; // ** URL Vars

  var location = (0,react_router/* useLocation */.TH)();
  var currentURL = location.pathname;
  var navLinkActive = isNavLinkActive(item.navLink, currentURL, routerProps); // ** Get parents of current items

  var searchParents = function searchParents(navigation, currentURL) {
    var parents = utils_search(navigation, currentURL, routerProps); // Search for parent object

    var allParents = getAllParents(parents, "id"); // Parents Object to Parents Array

    allParents.pop();
    return allParents;
  }; // ** Remove all items from OpenDropdown array


  var resetOpenDropdowns = function resetOpenDropdowns() {
    return setOpenDropdown([]);
  }; // ** On mount update active group array


  (0,react.useEffect)(function () {
    if (currentActiveItem !== null) {
      setActiveItem(currentActiveItem);
      var arr = searchParents(horizontal, currentURL);
      setGroupActive((0,toConsumableArray/* default */.Z)(arr));
    }
  }, [location]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
    className: classnames_default()("nav-item", {
      active: item.navLink === activeItem,
      disabled: item.disabled
    }),
    onClick: resetOpenDropdowns,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(LinkTag, HorizontalNavMenuLink_objectSpread(HorizontalNavMenuLink_objectSpread({
      className: classnames_default()("d-flex align-items-center", {
        "dropdown-item": isChild,
        "nav-link": !isChild
      }),
      tag: LinkTag,
      target: item.newTab ? "_blank" : undefined
      /*eslint-disable */

    }, item.externalLink === true ? {
      href: item.navLink || "/"
    } : {
      to: item.navLink || "/",
      isActive: function isActive(match, location) {
        if (!match) {
          return false;
        }

        if (match.url && match.url !== "" && match.url === item.navLink) {
          currentActiveItem = item.navLink;
        }
      }
    }), {}, {
      children: [item.icon, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: item.title
        })
      })]
    }))
  });
};

/* harmony default export */ var horizontal_menu_HorizontalNavMenuLink = (HorizontalNavMenuLink);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Dropdown.js
var Dropdown = __webpack_require__(86704);
;// CONCATENATED MODULE: ./src/@core/layouts/components/menu/horizontal-menu/HorizontalNavMenuGroup.js


function HorizontalNavMenuGroup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function HorizontalNavMenuGroup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? HorizontalNavMenuGroup_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : HorizontalNavMenuGroup_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports
 // ** Third Party Components



 // ** Utils

 // ** Horizontal Menu Items Component





var HorizontalNavMenuGroup = function HorizontalNavMenuGroup(props) {
  // ** Props
  var item = props.item,
      submenu = props.submenu,
      groupActive = props.groupActive,
      _onMouseEnter = props.onMouseEnter,
      _onMouseLeave = props.onMouseLeave,
      openDropdown = props.openDropdown,
      setGroupActive = props.setGroupActive,
      activeItem = props.activeItem,
      setActiveItem = props.setActiveItem,
      routerProps = props.routerProps,
      setOpenDropdown = props.setOpenDropdown,
      currentActiveItem = props.currentActiveItem; // ** URL Var

  var currentURL = (0,react_router/* useLocation */.TH)().pathname; // ** Dropdown menu modifiers

  var menuModifiers = {
    setMaxHeight: {
      enabled: true,
      fn: function fn(data) {
        var pageHeight = window.innerHeight,
            ddTop = data.instance.reference.getBoundingClientRect().top,
            ddHeight = data.popper.height;
        var maxHeight, stylesObj; // ** Calculate and set height

        if (pageHeight - ddTop - ddHeight - 28 < 1) {
          maxHeight = pageHeight - ddTop - 25;
          stylesObj = {
            maxHeight: maxHeight,
            overflowY: 'auto'
          };
        }

        var ddRef = data.instance.popper.getBoundingClientRect(); // ** If there is not space left to open sub menu open it to the right

        if (ddRef.left + ddRef.width - (window.innerWidth - 16) >= 0) {
          data.instance.popper.closest('.dropdown').classList.add('openLeft');
        }

        return HorizontalNavMenuGroup_objectSpread(HorizontalNavMenuGroup_objectSpread({}, data), {}, {
          styles: HorizontalNavMenuGroup_objectSpread({}, stylesObj)
        });
      }
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Dropdown/* default */.Z, {
    tag: "li",
    className: classnames_default()({
      'nav-item': submenu === false,
      'dropdown-submenu': submenu === true,
      'sidebar-group-active active': isNavGroupActive(item.children, currentURL, routerProps) || groupActive.includes(item.id)
    }),
    isOpen: openDropdown.includes(item.id),
    toggle: function toggle() {
      return _onMouseEnter(item.id);
    },
    onMouseEnter: function onMouseEnter() {
      return _onMouseEnter(item.id);
    },
    onMouseLeave: function onMouseLeave() {
      return _onMouseLeave(item.id);
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(es_DropdownToggle/* default */.Z, {
      to: "/",
      tag: react_router_dom/* Link */.rU,
      className: classnames_default()('dropdown-toggle d-flex align-items-center', {
        'dropdown-item': submenu === true,
        'nav-link': submenu === false
      }),
      onClick: function onClick(e) {
        _onMouseLeave(item.id);

        e.preventDefault();
      },
      children: [item.icon, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: item.title
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_DropdownMenu/* default */.Z, {
      tag: "ul",
      modifiers: menuModifiers,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(horizontal_menu_HorizontalNavMenuItems, {
        submenu: true,
        parentItem: item,
        items: item.children,
        activeItem: activeItem,
        groupActive: groupActive,
        routerProps: routerProps,
        openDropdown: openDropdown,
        onMouseEnter: _onMouseEnter,
        onMouseLeave: _onMouseLeave,
        setActiveItem: setActiveItem,
        setGroupActive: setGroupActive,
        isChild: true,
        setOpenDropdown: setOpenDropdown,
        currentActiveItem: currentActiveItem
      })
    })]
  });
};

/* harmony default export */ var horizontal_menu_HorizontalNavMenuGroup = (HorizontalNavMenuGroup);
;// CONCATENATED MODULE: ./src/@core/layouts/components/menu/horizontal-menu/HorizontalNavMenuItems.js


function HorizontalNavMenuItems_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function HorizontalNavMenuItems_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? HorizontalNavMenuItems_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : HorizontalNavMenuItems_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports
 // ** Ability Context

 // ** Menu Components Imports






var HorizontalNavMenuItems = function HorizontalNavMenuItems(props) {
  // ** Context
  var ability = (0,react.useContext)(Can/* AbilityContext */.v); // ** Components Object

  var Components = {
    HorizontalNavMenuGroup: horizontal_menu_HorizontalNavMenuGroup,
    HorizontalNavMenuLink: horizontal_menu_HorizontalNavMenuLink
  }; // ** Render Nav Items

  var RenderNavItems = props.items.map(function (item, index) {
    var TagName = Components[resolveHorizontalNavMenuItemComponent(item)];

    if (item.children) {
      return canViewMenuGroup(item) && /*#__PURE__*/(0,jsx_runtime.jsx)(TagName, HorizontalNavMenuItems_objectSpread({
        item: item,
        index: index
      }, props), item.id);
    }

    return canViewMenuItem(item) && /*#__PURE__*/(0,jsx_runtime.jsx)(TagName, HorizontalNavMenuItems_objectSpread({
      item: item,
      index: index
    }, props), item.id);
  });
  return RenderNavItems;
};

/* harmony default export */ var horizontal_menu_HorizontalNavMenuItems = (HorizontalNavMenuItems);
;// CONCATENATED MODULE: ./src/@core/layouts/components/menu/horizontal-menu/index.js


// ** React Imports
 // ** Horizontal Menu Array

 // ** Horizontal Menu Components




var HorizontalMenu = function HorizontalMenu(_ref) {
  var currentActiveItem = _ref.currentActiveItem,
      routerProps = _ref.routerProps;

  // ** States
  var _useState = (0,react.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      activeItem = _useState2[0],
      setActiveItem = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      groupActive = _useState4[0],
      setGroupActive = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      openDropdown = _useState6[0],
      setOpenDropdown = _useState6[1]; // ** On mouse enter push the ID to openDropdown array


  var onMouseEnter = function onMouseEnter(id) {
    var arr = openDropdown;
    arr.push(id);
    setOpenDropdown((0,toConsumableArray/* default */.Z)(arr));
  }; // ** On mouse leave remove the ID to openDropdown array


  var onMouseLeave = function onMouseLeave(id) {
    var arr = openDropdown;
    arr.splice(arr.indexOf(id), 1);
    setOpenDropdown((0,toConsumableArray/* default */.Z)(arr));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "navbar-container main-menu-content",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: "nav navbar-nav",
      id: "main-menu-navigation",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(horizontal_menu_HorizontalNavMenuItems, {
        submenu: false,
        items: horizontal,
        activeItem: activeItem,
        groupActive: groupActive,
        routerProps: routerProps,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        openDropdown: openDropdown,
        setActiveItem: setActiveItem,
        setGroupActive: setGroupActive,
        setOpenDropdown: setOpenDropdown,
        currentActiveItem: currentActiveItem
      })
    })
  });
};

/* harmony default export */ var horizontal_menu = (HorizontalMenu);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/@core/scss/base/core/menu/menu-types/horizontal-menu.scss
var menu_types_horizontal_menu = __webpack_require__(89364);
;// CONCATENATED MODULE: ./src/@core/scss/base/core/menu/menu-types/horizontal-menu.scss

      
      
      
      
      
      
      
      
      

var horizontal_menu_options = {};

horizontal_menu_options.styleTagTransform = (styleTagTransform_default());
horizontal_menu_options.setAttributes = (setAttributesWithoutAttributes_default());

      horizontal_menu_options.insert = insertBySelector_default().bind(null, "head");
    
horizontal_menu_options.domAPI = (styleDomAPI_default());
horizontal_menu_options.insertStyleElement = (insertStyleElement_default());

var horizontal_menu_update = injectStylesIntoStyleTag_default()(menu_types_horizontal_menu/* default */.Z, horizontal_menu_options);




       /* harmony default export */ var menu_menu_types_horizontal_menu = (menu_types_horizontal_menu/* default */.Z && menu_types_horizontal_menu/* default.locals */.Z.locals ? menu_types_horizontal_menu/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/@core/layouts/HorizontalLayout.js



function HorizontalLayout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function HorizontalLayout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? HorizontalLayout_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : HorizontalLayout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports

 // ** Store & Actions


 // ** Third Party Components




 // ** Configs

 // ** Custom Components




 // ** Custom Hooks





 // ** Styles





var HorizontalLayout = function HorizontalLayout(props) {
  var _classnames;

  // ** Props
  var children = props.children,
      navbar = props.navbar,
      footer = props.footer,
      menu = props.menu,
      currentActiveItem = props.currentActiveItem,
      routerProps = props.routerProps; // ** Hooks

  var _useSkin = (0,useSkin/* useSkin */.Q)(),
      _useSkin2 = (0,slicedToArray/* default */.Z)(_useSkin, 2),
      skin = _useSkin2[0],
      setSkin = _useSkin2[1];

  var _useRTL = (0,useRTL/* useRTL */.S)(),
      _useRTL2 = (0,slicedToArray/* default */.Z)(_useRTL, 2),
      isRtl = _useRTL2[0],
      setIsRtl = _useRTL2[1];

  var _useNavbarType = useNavbarType(),
      _useNavbarType2 = (0,slicedToArray/* default */.Z)(_useNavbarType, 2),
      navbarType = _useNavbarType2[0],
      setNavbarType = _useNavbarType2[1];

  var _useFooterType = useFooterType(),
      _useFooterType2 = (0,slicedToArray/* default */.Z)(_useFooterType, 2),
      footerType = _useFooterType2[0],
      setFooterType = _useFooterType2[1];

  var _useNavbarColor = useNavbarColor(),
      _useNavbarColor2 = (0,slicedToArray/* default */.Z)(_useNavbarColor, 2),
      navbarColor = _useNavbarColor2[0],
      setNavbarColor = _useNavbarColor2[1]; // ** States


  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isMounted = _useState2[0],
      setIsMounted = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      navbarScrolled = _useState4[0],
      setNavbarScrolled = _useState4[1]; // ** Store Vars


  var dispatch = (0,es/* useDispatch */.I0)();
  var layoutStore = (0,es/* useSelector */.v9)(function (state) {
    return state.layout;
  }); // ** Vars

  var contentWidth = layoutStore.contentWidth;
  var isHidden = layoutStore.menuHidden; // ** Handles Content Width

  var setContentWidth = function setContentWidth(val) {
    return dispatch((0,actions_layout/* handleContentWidth */.eF)(val));
  }; // ** Handles Content Width


  var setIsHidden = function setIsHidden(val) {
    return dispatch((0,actions_layout/* handleMenuHidden */._r)(val));
  }; // ** UseEffect Cleanup


  var cleanup = function cleanup() {
    setIsMounted(false);
    setNavbarScrolled(false);
  }; //** ComponentDidMount


  (0,react.useEffect)(function () {
    setIsMounted(true);
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 65 && navbarScrolled === false) {
        setNavbarScrolled(true);
      }

      if (window.pageYOffset < 65) {
        setNavbarScrolled(false);
      }
    });
    return function () {
      return cleanup();
    };
  }, []); // ** Vars

  var footerClasses = {
    static: "footer-static",
    sticky: "footer-fixed",
    hidden: "footer-hidden"
  };
  var navbarWrapperClasses = {
    floating: "navbar-floating",
    sticky: "navbar-sticky",
    static: "navbar-static"
  };
  var navbarClasses = {
    floating: "floating-nav",
    sticky: "fixed-top"
  };
  var bgColorCondition = navbarColor !== "" && navbarColor !== "light" && navbarColor !== "white";

  if (!isMounted) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", HorizontalLayout_objectSpread(HorizontalLayout_objectSpread({
    className: classnames_default()("wrapper horizontal-layout horizontal-menu ".concat(navbarWrapperClasses[navbarType] || "navbar-floating", " ").concat(footerClasses[footerType] || "footer-static", " menu-expanded"))
  }, isHidden ? {
    "data-col": "1-column"
  } : {}), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Navbar/* default */.Z, {
      expand: "lg",
      className: classnames_default()("header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center", {
        "navbar-scrolled": navbarScrolled
      }),
      children: [!navbar && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "navbar-header d-xl-block d-none",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
          className: "nav navbar-nav",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_NavItem/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom/* Link */.rU, {
              to: "/",
              className: "navbar-brand",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: "brand-logo",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: "../../../../../assets/images/logo/logo.png",
                  alt: "logo"
                }), " "]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
                className: "brand-text text-primary mb-0",
                children: themeConfig/* default.app.appName */.Z.app.appName
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "navbar-container d-flex content",
        children: navbar ? navbar({
          skin: skin,
          setSkin: setSkin
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_navbar, {
          skin: skin,
          setSkin: setSkin
        })
      })]
    }), !isHidden ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "horizontal-menu-wrapper",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Navbar/* default */.Z, {
        tag: "div",
        expand: "sm",
        light: skin !== "dark",
        dark: skin === "dark" || bgColorCondition,
        className: classnames_default()("header-navbar navbar-horizontal navbar-shadow menu-border", (_classnames = {}, (0,defineProperty/* default */.Z)(_classnames, navbarClasses[navbarType], navbarType !== "static"), (0,defineProperty/* default */.Z)(_classnames, "floating-nav", !navbarClasses[navbarType] && navbarType !== "static" || navbarType === "floating"), _classnames)),
        children: menu ? menu({
          routerProps: routerProps,
          currentActiveItem: currentActiveItem
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(horizontal_menu, {
          routerProps: routerProps,
          currentActiveItem: currentActiveItem
        })
      })
    }) : null, children, themeConfig/* default.layout.customizer */.Z.layout.customizer === true ? /*#__PURE__*/(0,jsx_runtime.jsx)(customizer, {
      skin: skin,
      setSkin: setSkin,
      footerType: footerType,
      setFooterType: setFooterType,
      navbarType: navbarType,
      setNavbarType: setNavbarType,
      navbarColor: navbarColor,
      setNavbarColor: setNavbarColor,
      isRtl: isRtl,
      setIsRtl: setIsRtl,
      layout: props.layout,
      setLayout: props.setLayout,
      isHidden: isHidden,
      setIsHidden: setIsHidden,
      contentWidth: contentWidth,
      setContentWidth: setContentWidth,
      transition: props.transition,
      setTransition: props.setTransition,
      themeConfig: themeConfig/* default */.Z
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)("footer", {
      className: classnames_default()("footer footer-light ".concat(footerClasses[footerType] || "footer-static"), {
        "d-none": footerType === "hidden"
      }),
      children: footer ? footer({
        footerType: footerType,
        footerClasses: footerClasses
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_footer, {
        footerType: footerType,
        footerClasses: footerClasses
      })
    }), themeConfig/* default.layout.scrollTop */.Z.layout.scrollTop === true ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "scroll-to-top",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_scroll_up/* default */.Z, {
        showUnder: 300,
        style: {
          bottom: "5%"
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_Button/* default */.Z, {
          className: "btn-icon",
          color: "primary",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(arrow_up/* default */.Z, {
            size: 14
          })
        })
      })
    }) : null]
  }));
};

/* harmony default export */ var layouts_HorizontalLayout = (HorizontalLayout);
;// CONCATENATED MODULE: ./src/layouts/HorizontalLayout.js


function layouts_HorizontalLayout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function layouts_HorizontalLayout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? layouts_HorizontalLayout_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : layouts_HorizontalLayout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// !Do not remove the Layout import
 // ** Components
// import CustomMenu from './components/Menu'
// import CustomNavbar from './components/Navbar'
// import CustomFooter from './components/Footer'



var HorizontalLayout_HorizontalLayout = function HorizontalLayout(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(layouts_HorizontalLayout // menu={props => <CustomMenu {...props} />}
  // navbar={props => <CustomNavbar {...props} />}
  // footer={props => <CustomFooter {...props} />}
  , layouts_HorizontalLayout_objectSpread(layouts_HorizontalLayout_objectSpread({}, props), {}, {
    children: props.children
  }));
};

/* harmony default export */ var src_layouts_HorizontalLayout = (HorizontalLayout_HorizontalLayout);
// EXTERNAL MODULE: ./src/api/utlis.js
var utlis = __webpack_require__(16550);
// EXTERNAL MODULE: ./src/configs/api-urls.js
var api_urls = __webpack_require__(88295);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(55678);
// EXTERNAL MODULE: ./src/views/apps/meet/utils/localStorageService.js
var localStorageService = __webpack_require__(20366);
;// CONCATENATED MODULE: ./src/router/Router.js



function Router_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Router_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Router_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Router_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports
 // ** Utils



 // ** Custom Components

 // ** Router Components

 // ** Routes & Default Routes

 // ** Layouts
















var Router = function Router() {
  // ** Hooks
  var _useLayout = useLayout(),
      _useLayout2 = (0,slicedToArray/* default */.Z)(_useLayout, 2),
      layout = _useLayout2[0],
      setLayout = _useLayout2[1];

  var _useRouterTransition = useRouterTransition(),
      _useRouterTransition2 = (0,slicedToArray/* default */.Z)(_useRouterTransition, 2),
      transition = _useRouterTransition2[0],
      setTransition = _useRouterTransition2[1];

  var _useState = (0,react.useState)(true),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var ability = (0,react.useContext)(Can/* AbilityContext */.v);
  (0,react.useEffect)(function () {
    if (localStorageService/* default.getAccessToken */.Z.getAccessToken()) {
      Socket/* socket.emit */.W.emit("connectuser", JSON.parse(localStorageService/* default.getAccessToken */.Z.getAccessToken()));
    }

    (0,utlis/* apiCall */.k_)(utlis/* getAll */.go, [api_urls/* CONNECT_URL */.dk], true, react_toastify_esm/* toast */.Am, dispatch, null, null, function (data) {
      dispatch((0,auth/* handleUserUpdate */._O)(data));
      ability.update(data.ability || []);
      setLoading(false);
    }, function () {
      setLoading(false);
    });
  }, []); // ** Default Layout

  var DefaultLayout = layout === "horizontal" ? "HorizontalLayout" : "VerticalLayout"; // ** All of the available layouts

  var Layouts = {
    BlankLayout: layouts_BlankLayout,
    VerticalLayout: src_layouts_VerticalLayout,
    HorizontalLayout: src_layouts_HorizontalLayout
  }; // ** Current Active Item

  var currentActiveItem = null; // ** Return Filtered Array of Routes & Paths

  var LayoutRoutesAndPaths = function LayoutRoutesAndPaths(layout) {
    var LayoutRoutes = [];
    var LayoutPaths = [];

    if (Routes) {
      Routes.filter(function (route) {
        // ** Checks if Route layout or Default layout matches current layout
        if (route.layout === layout || route.layout === undefined && DefaultLayout === layout) {
          LayoutRoutes.push(route);
          LayoutPaths.push(route.path);
        }
      });
    }

    return {
      LayoutRoutes: LayoutRoutes,
      LayoutPaths: LayoutPaths
    };
  };

  var NotAuthorized = /*#__PURE__*/(0,react.lazy)(function () {
    return __webpack_require__.e(/* import() */ 9732).then(__webpack_require__.bind(__webpack_require__, 9732));
  }); // ** Init Error Component

  var Error = /*#__PURE__*/(0,react.lazy)(function () {
    return __webpack_require__.e(/* import() */ 2249).then(__webpack_require__.bind(__webpack_require__, 42249));
  });
  /**
   ** Final Route Component Checks for Login & User Role and then redirects to the route
   */

  var FinalRoute = function FinalRoute(props) {
    var route = props.route;
    var action, resource; // ** Assign vars based on route meta

    if (route.meta) {
      action = route.meta.action ? route.meta.action : null;
      resource = route.meta.resource ? route.meta.resource : null;
    }

    if (!(0,utils/* isUserLoggedIn */.Pc)() && route.meta === undefined || !(0,utils/* isUserLoggedIn */.Pc)() && route.meta && !route.meta.authRoute && !route.meta.publicRoute) {
      /**
       ** If user is not Logged in & route meta is undefined
       ** OR
       ** If user is not Logged in & route.meta.authRoute, !route.meta.publicRoute are undefined
       ** Then redirect user to login
       */
      return /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
        to: "/login"
      });
    } else if (route.meta && route.meta.authRoute && (0,utils/* isUserLoggedIn */.Pc)()) {
      // ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)
      return /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
        to: "/app/dashboard"
      });
    } else if ((0,utils/* isUserLoggedIn */.Pc)() && !ability.can(action || actions/* ACTIONS.SEE_ACTION */.a.SEE_ACTION, resource)) {
      // ** If user is Logged in and doesn't have ability to visit the page redirect the user to Not Authorized
      return /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
        to: "/misc/not-authorized"
      });
    } else {
      // ** If none of the above render component
      return /*#__PURE__*/(0,jsx_runtime.jsx)(route.component, Router_objectSpread({}, props));
    }
  }; // ** Return Route to Render


  var ResolveRoutes = function ResolveRoutes() {
    return Object.keys(Layouts).map(function (layout, index) {
      // ** Convert Layout parameter to Layout Component
      // ? Note: make sure to keep layout and component name equal
      var LayoutTag = Layouts[layout]; // ** Get Routes and Paths of the Layout

      var _LayoutRoutesAndPaths = LayoutRoutesAndPaths(layout),
          LayoutRoutes = _LayoutRoutesAndPaths.LayoutRoutes,
          LayoutPaths = _LayoutRoutesAndPaths.LayoutPaths; // ** We have freedom to display different layout for different route
      // ** We have made LayoutTag dynamic based on layout, we can also replace it with the only layout component,
      // ** that we want to implement like VerticalLayout or HorizontalLayout
      // ** We segregated all the routes based on the layouts and Resolved all those routes inside layouts
      // ** RouterProps to pass them to Layouts


      var routerProps = {};
      return /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: LayoutPaths,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(LayoutTag, {
          routerProps: routerProps,
          layout: layout,
          setLayout: setLayout,
          transition: transition,
          setTransition: setTransition,
          currentActiveItem: currentActiveItem,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Switch */.rs, {
            children: LayoutRoutes.map(function (route) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                path: route.path,
                exact: route.exact === true,
                render: function render(props) {
                  // ** Assign props to routerProps
                  Object.assign(routerProps, Router_objectSpread(Router_objectSpread({}, props), {}, {
                    meta: route.meta
                  }));
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Suspense, {
                    fallback: null,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(layout_wrapper, Router_objectSpread(Router_objectSpread(Router_objectSpread(Router_objectSpread({
                      layout: DefaultLayout,
                      transition: transition,
                      setTransition: setTransition
                      /* Conditional props */

                      /*eslint-disable */

                    }, route.appLayout ? {
                      appLayout: route.appLayout
                    } : {}), route.meta ? {
                      routeMeta: route.meta
                    } : {}), route.className ? {
                      wrapperClass: route.className
                    } : {}), {}, {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(FinalRoute, Router_objectSpread({
                        route: route
                      }, props))
                    }))
                  });
                }
              }, route.path);
            })
          })
        })
      }, index);
    });
  };

  return !loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* BrowserRouter */.VK, {
    basename: "MISSING_ENV_VAR".REACT_APP_BASENAME,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/",
        render: function render() {
          return (0,utils/* isUserLoggedIn */.Pc)() ? /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
            to: "/app/dashboard"
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
            to: "/login"
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/misc/not-authorized",
        render: function render(props) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Layouts.BlankLayout, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NotAuthorized, {})
          });
        }
      }), ResolveRoutes(), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: "*",
        component: Error
      })]
    })
  }) : null;
};

/* harmony default export */ var router_Router = (Router);
;// CONCATENATED MODULE: ./src/App.js
// ** Router Import




var App = function App() {
  window.OneSignal = window.OneSignal || [];
  var OneSignal = window.OneSignal;
  (0,react.useEffect)(function () {
    OneSignal.push(function () {
      OneSignal.init({
        appId: '0ef8f5ad-cd44-4249-a456-1e59515148d0'
      });
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(router_Router, {});
};

/* harmony default export */ var src_App = (App);

/***/ }),

/***/ 16550:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$T": function() { return /* binding */ insert; },
/* harmony export */   "Ki": function() { return /* binding */ getAllPaged; },
/* harmony export */   "Od": function() { return /* binding */ remove; },
/* harmony export */   "U2": function() { return /* binding */ get; },
/* harmony export */   "Vx": function() { return /* binding */ update; },
/* harmony export */   "go": function() { return /* binding */ getAll; },
/* harmony export */   "k_": function() { return /* binding */ apiCall; },
/* harmony export */   "yg": function() { return /* binding */ updateWithBody; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64687);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22974);
/* harmony import */ var _views_customComponents_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25976);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55678);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59898);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);








var apiCall = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(call, params, loader, toast, dispatch, successMessage, failMessage, then, error) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch((0,_redux_actions_layout__WEBPACK_IMPORTED_MODULE_7__/* .handleLoader */ .EV)(loader));
            _context.next = 4;
            return call.apply(apiCall, params);

          case 4:
            response = _context.sent;
            dispatch((0,_redux_actions_layout__WEBPACK_IMPORTED_MODULE_7__/* .handleLoader */ .EV)(false));

            if (then) {
              then.apply(apiCall, [response]);
            }

            if (successMessage) {
              toast.success( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_views_customComponents_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                type: "success",
                message: successMessage
              }), {
                transition: react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .Bounce */ .sm,
                hideProgressBar: false,
                autoClose: 6000
              });
            }

            _context.next = 16;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            dispatch((0,_redux_actions_layout__WEBPACK_IMPORTED_MODULE_7__/* .handleLoader */ .EV)(false));

            if (error) {
              error.apply(apiCall, [_context.t0]);
            }

            console.log(_context.t0);

            if (failMessage) {
              toast.error( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_views_customComponents_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                type: "error",
                message: failMessage
              }), {
                transition: react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .Bounce */ .sm,
                hideProgressBar: false,
                autoClose: 6000
              });
            }

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function apiCall(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9) {
    return _ref.apply(this, arguments);
  };
}();
var getAllPaged = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(url, pageIndex, pageSize, order, filter) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pageIndex = pageIndex !== 0 ? pageIndex - 1 : pageIndex;
            return _context2.abrupt("return", _http__WEBPACK_IMPORTED_MODULE_4__/* .http.get */ .d.get("".concat(url, "?offset=").concat(pageIndex * pageSize, "&limit=").concat(pageSize, "&order=").concat(JSON.stringify(order)).concat(filter ? "&filter=".concat(JSON.stringify(filter)) : "")));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllPaged(_x10, _x11, _x12, _x13, _x14) {
    return _ref2.apply(this, arguments);
  };
}();
var getAll = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(url) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _http__WEBPACK_IMPORTED_MODULE_4__/* .http.get */ .d.get(url));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getAll(_x15) {
    return _ref3.apply(this, arguments);
  };
}();
var get = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(url, id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _http__WEBPACK_IMPORTED_MODULE_4__/* .http.get */ .d.get("".concat(url, "?id=").concat(id)));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function get(_x16, _x17) {
    return _ref4.apply(this, arguments);
  };
}();
var insert = /*#__PURE__*/function () {
  var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(url, body) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _http__WEBPACK_IMPORTED_MODULE_4__/* .http.post */ .d.post(url, body));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function insert(_x18, _x19) {
    return _ref5.apply(this, arguments);
  };
}();
var remove = /*#__PURE__*/function () {
  var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(url, id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", _http__WEBPACK_IMPORTED_MODULE_4__/* .http["delete"] */ .d["delete"]("".concat(url, "?id=").concat(id)));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function remove(_x20, _x21) {
    return _ref6.apply(this, arguments);
  };
}();
var update = /*#__PURE__*/function () {
  var _ref7 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(url, id, body) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", _http__WEBPACK_IMPORTED_MODULE_4__/* .http.put */ .d.put("".concat(url, "?id=").concat(id), body));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function update(_x22, _x23, _x24) {
    return _ref7.apply(this, arguments);
  };
}();
var updateWithBody = /*#__PURE__*/function () {
  var _ref8 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(url, body) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", _http__WEBPACK_IMPORTED_MODULE_4__/* .http.put */ .d.put("".concat(url), body));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function updateWithBody(_x25, _x26) {
    return _ref8.apply(this, arguments);
  };
}();

/***/ }),

/***/ 56176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ ACTIONS; }
/* harmony export */ });
/* unused harmony export ACTIONS_LIST */
var ACTIONS = {
  MANAGE_ACTION: 'manage',
  SEE_ACTION: 'see',
  WRITE_ACTION: 'write',
  EDIT_ACTION: 'edit',
  DELETE_ACTION: 'delete'
};
var ACTIONS_LIST = Object.values(ACTIONS);

/***/ }),

/***/ 88295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ DELETE_EXAM_URL; },
/* harmony export */   "B$": function() { return /* binding */ EXPENSE_REPORT_URL; },
/* harmony export */   "BE": function() { return /* binding */ MEMBERS_URL; },
/* harmony export */   "Bj": function() { return /* binding */ EMAILS_URL; },
/* harmony export */   "C3": function() { return /* binding */ BUDGETS_URL; },
/* harmony export */   "C5": function() { return /* binding */ TRAINING_URL; },
/* harmony export */   "Ck": function() { return /* binding */ CALENDAR_URL; },
/* harmony export */   "DA": function() { return /* binding */ SCHEDULE_AVAILABLE_URL; },
/* harmony export */   "FX": function() { return /* binding */ INCOMINGS_URL; },
/* harmony export */   "Fg": function() { return /* binding */ TRANSPORTS_URL; },
/* harmony export */   "GJ": function() { return /* binding */ CHAPTER_URL; },
/* harmony export */   "GV": function() { return /* binding */ NOTES_URL; },
/* harmony export */   "Gm": function() { return /* binding */ USERS_URL; },
/* harmony export */   "Hb": function() { return /* binding */ ATTENDANCE_URL; },
/* harmony export */   "Hr": function() { return /* binding */ STUDENTS_URL; },
/* harmony export */   "Hv": function() { return /* binding */ TIME_URL; },
/* harmony export */   "IP": function() { return /* binding */ SESSIONS_URL; },
/* harmony export */   "LA": function() { return /* binding */ TRAININGS_URL; },
/* harmony export */   "LJ": function() { return /* binding */ INVENTORY_URL; },
/* harmony export */   "Lb": function() { return /* binding */ SESSION_URL; },
/* harmony export */   "MC": function() { return /* binding */ COURSES_URL; },
/* harmony export */   "N_": function() { return /* binding */ ABILITY_URL; },
/* harmony export */   "Nm": function() { return /* binding */ EXAMS_LIST_URL; },
/* harmony export */   "Nw": function() { return /* binding */ SUPPLIER_URL; },
/* harmony export */   "OA": function() { return /* binding */ PROMOTION_URL; },
/* harmony export */   "OK": function() { return /* binding */ COMMENT_URL; },
/* harmony export */   "OS": function() { return /* binding */ BUDGET_URL; },
/* harmony export */   "PH": function() { return /* binding */ ENROLLMENT_URL; },
/* harmony export */   "PJ": function() { return /* binding */ USERS_GROUPS_URL; },
/* harmony export */   "QE": function() { return /* binding */ CARS_URL; },
/* harmony export */   "Qg": function() { return /* binding */ OUTCOMING_URL; },
/* harmony export */   "Qu": function() { return /* binding */ MEET_URL; },
/* harmony export */   "RW": function() { return /* binding */ STUDENTS_BY_SECTION_URL; },
/* harmony export */   "Sy": function() { return /* binding */ SAVE_POST_URL; },
/* harmony export */   "T0": function() { return /* binding */ LINKEDIN_AUTH_URL; },
/* harmony export */   "Vq": function() { return /* binding */ ACCOUNTS_URL; },
/* harmony export */   "W": function() { return /* binding */ OUTCOMINGS_URL; },
/* harmony export */   "WR": function() { return /* binding */ SECTIONS_URL; },
/* harmony export */   "Wb": function() { return /* binding */ ATTENDANCES_URL; },
/* harmony export */   "X5": function() { return /* binding */ UPDATE_EXAM_URL; },
/* harmony export */   "Xc": function() { return /* binding */ ROOMS_URL; },
/* harmony export */   "Yc": function() { return /* binding */ SECTION_URL; },
/* harmony export */   "Ye": function() { return /* binding */ MESSAGE_BLOCK_URL; },
/* harmony export */   "Z2": function() { return /* binding */ STAFF_URL; },
/* harmony export */   "Z5": function() { return /* binding */ LIKE_URL; },
/* harmony export */   "ZE": function() { return /* binding */ LOGIN_URL; },
/* harmony export */   "ZZ": function() { return /* binding */ STAFFS_URL; },
/* harmony export */   "_C": function() { return /* binding */ INVENTORY_CATEGORIES_URL; },
/* harmony export */   "_F": function() { return /* binding */ INCOMING_URL; },
/* harmony export */   "_l": function() { return /* binding */ NOTE_URL; },
/* harmony export */   "b$": function() { return /* binding */ INVENTORY_CATEGORY_URL; },
/* harmony export */   "bB": function() { return /* binding */ CALENDARS_URL; },
/* harmony export */   "bS": function() { return /* binding */ PAYMENT_URL; },
/* harmony export */   "bc": function() { return /* binding */ SCHEDULE_URL; },
/* harmony export */   "c8": function() { return /* binding */ GROUP_URL; },
/* harmony export */   "cd": function() { return /* binding */ CHANGE_STUDENT_PASSWORD_URL; },
/* harmony export */   "cm": function() { return /* binding */ DELETE_ATTENDANCE_URL; },
/* harmony export */   "dK": function() { return /* binding */ INVOICES_URL; },
/* harmony export */   "dT": function() { return /* binding */ TEACHERS_URL; },
/* harmony export */   "dk": function() { return /* binding */ CONNECT_URL; },
/* harmony export */   "fl": function() { return /* binding */ ROOM_URL; },
/* harmony export */   "fo": function() { return /* binding */ POSTS_URL; },
/* harmony export */   "g1": function() { return /* binding */ SCHEDULES_URL; },
/* harmony export */   "gJ": function() { return /* binding */ UPDATE_ATTENDANCE_URL; },
/* harmony export */   "gO": function() { return /* binding */ COURSE_URL; },
/* harmony export */   "gV": function() { return /* binding */ PARENT_URL; },
/* harmony export */   "hW": function() { return /* binding */ ACTIVATE_ACCOUNT_URL; },
/* harmony export */   "hs": function() { return /* binding */ EMAIL_URL; },
/* harmony export */   "hv": function() { return /* binding */ EXPENSE_URL; },
/* harmony export */   "i": function() { return /* binding */ SUPPLIERS_URL; },
/* harmony export */   "iJ": function() { return /* binding */ ROUTES_URL; },
/* harmony export */   "ij": function() { return /* binding */ COMMENTS_URL; },
/* harmony export */   "jJ": function() { return /* binding */ INVOICE_URL; },
/* harmony export */   "jg": function() { return /* binding */ REGISTER_URL; },
/* harmony export */   "jh": function() { return /* binding */ PARENTS_URL; },
/* harmony export */   "js": function() { return /* binding */ ACCOUNT_URL; },
/* harmony export */   "k6": function() { return /* binding */ PROMOTIONS_URL; },
/* harmony export */   "ko": function() { return /* binding */ CAR_URL; },
/* harmony export */   "l0": function() { return /* binding */ CHANGE_TEACHER_PASSWORD_URL; },
/* harmony export */   "lf": function() { return /* binding */ PASSWORD_RESET_URL; },
/* harmony export */   "lv": function() { return /* binding */ MESSAGE_URL; },
/* harmony export */   "lw": function() { return /* binding */ CHANGE_PASSWORD_URL; },
/* harmony export */   "m7": function() { return /* binding */ DASHBOARD_URL; },
/* harmony export */   "mS": function() { return /* binding */ POST_URL; },
/* harmony export */   "mb": function() { return /* binding */ PASSWORD_FORGOT_URL; },
/* harmony export */   "mt": function() { return /* binding */ EXAMS_URL; },
/* harmony export */   "nM": function() { return /* binding */ TIMES_URL; },
/* harmony export */   "ni": function() { return /* binding */ CHAPTERS_URL; },
/* harmony export */   "p5": function() { return /* binding */ EXAM_URL; },
/* harmony export */   "pu": function() { return /* binding */ ENROLLMENTS_URL; },
/* harmony export */   "qM": function() { return /* binding */ GROUPS_URL; },
/* harmony export */   "r": function() { return /* binding */ SCHEDULE_LIVE_URL; },
/* harmony export */   "rS": function() { return /* binding */ PAYMENTS_URL; },
/* harmony export */   "sR": function() { return /* binding */ STOP_URL; },
/* harmony export */   "sp": function() { return /* binding */ TRANSPORT_URL; },
/* harmony export */   "tZ": function() { return /* binding */ STUDENT_URL; },
/* harmony export */   "te": function() { return /* binding */ TIME_AVAILABLE_URL; },
/* harmony export */   "u6": function() { return /* binding */ STOPS_URL; },
/* harmony export */   "u7": function() { return /* binding */ MESSAGES_URL; },
/* harmony export */   "uP": function() { return /* binding */ TEACHER_URL; },
/* harmony export */   "uh": function() { return /* binding */ USER_URL; },
/* harmony export */   "wN": function() { return /* binding */ ROUTE_URL; },
/* harmony export */   "wq": function() { return /* binding */ EXPENSES_URL; },
/* harmony export */   "wr": function() { return /* binding */ SEND_ACTIVATION_LINK_URL; },
/* harmony export */   "y3": function() { return /* binding */ INVENTORIES_URL; },
/* harmony export */   "z7": function() { return /* binding */ ATTENDANCES_LIST_URL; },
/* harmony export */   "ze": function() { return /* binding */ GET_ALL_MESSAGES_BY_SENDER_URL; }
/* harmony export */ });
/* unused harmony exports CHANGE_PARENT_PASSWORD_URL, CHANGE_STAFF_PASSWORD_URL, GIFT_URL, GIFTS_URL, BOOK_URL, BOOKS_URL */
var API_ROOT = "http://localhost:5000";
var LOGIN_URL = "".concat(API_ROOT, "/public/api/v1/login");
var MEET_URL = "".concat(API_ROOT, "/private/api/v1/meet");
var LINKEDIN_AUTH_URL = "".concat(API_ROOT, "/public/api/v1/linkedin");
var CONNECT_URL = "".concat(API_ROOT, "/private/api/v1/connect");
var CHANGE_PASSWORD_URL = "".concat(API_ROOT, "/private/api/v1/change-password");
var CHANGE_STUDENT_PASSWORD_URL = "".concat(API_ROOT, "/private/api/v1/change-student-password");
var CHANGE_PARENT_PASSWORD_URL = "".concat(API_ROOT, "/private/api/v1/change-parent-password");
var CHANGE_STAFF_PASSWORD_URL = "".concat(API_ROOT, "/private/api/v1/change-staff-password");
var CHANGE_TEACHER_PASSWORD_URL = "".concat(API_ROOT, "/private/api/v1/change-teacher-password");
var REGISTER_URL = "".concat(API_ROOT, "/public/api/v1/register");
var USERS_URL = "".concat(API_ROOT, "/private/api/v1/users");
var MEMBERS_URL = "".concat(API_ROOT, "/private/api/v1/members");
var USERS_GROUPS_URL = "".concat(API_ROOT, "/private/api/v1/users-groups");
var USER_URL = "".concat(API_ROOT, "/private/api/v1/user");
var GROUP_URL = "".concat(API_ROOT, "/private/api/v1/group");
var GROUPS_URL = "".concat(API_ROOT, "/private/api/v1/groups");
var PASSWORD_FORGOT_URL = "".concat(API_ROOT, "/public/api/v1/password-forgot");
var ACTIVATE_ACCOUNT_URL = "".concat(API_ROOT, "/public/api/v1/activate-account");
var SEND_ACTIVATION_LINK_URL = "".concat(API_ROOT, "/public/api/v1/send-activation-link");
var PASSWORD_RESET_URL = "".concat(API_ROOT, "/public/api/v1/password-reset");
var ABILITY_URL = "".concat(API_ROOT, "/private/api/v1/ability");
var EMAIL_URL = "".concat(API_ROOT, "/private/api/v1/email");
var EMAILS_URL = "".concat(API_ROOT, "/private/api/v1/emails");
var CALENDAR_URL = "".concat(API_ROOT, "/private/api/v1/calendar");
var CALENDARS_URL = "".concat(API_ROOT, "/private/api/v1/calendars");
var MESSAGES_URL = "".concat(API_ROOT, "/private/api/v1/messages");
var MESSAGE_URL = "".concat(API_ROOT, "/private/api/v1/message");
var MESSAGE_BLOCK_URL = "".concat(API_ROOT, "/private/api/v1/message-block");
var GET_ALL_MESSAGES_BY_SENDER_URL = "".concat(API_ROOT, "/private/api/v1/get-all-messages-by-sender");
var COMMENTS_URL = "".concat(API_ROOT, "/private/api/v1/comments");
var COMMENT_URL = "".concat(API_ROOT, "/private/api/v1/comment");
var LIKE_URL = "".concat(API_ROOT, "/private/api/v1/like");
var SAVE_POST_URL = "".concat(API_ROOT, "/private/api/v1/save-post");
var POSTS_URL = "".concat(API_ROOT, "/private/api/v1/posts");
var POST_URL = "".concat(API_ROOT, "/private/api/v1/post");
var SUPPLIER_URL = "".concat(API_ROOT, "/private/api/v1/supplier");
var SUPPLIERS_URL = "".concat(API_ROOT, "/private/api/v1/suppliers");
var EXPENSE_URL = "".concat(API_ROOT, "/private/api/v1/expense");
var EXPENSES_URL = "".concat(API_ROOT, "/private/api/v1/expenses");
var EXPENSE_REPORT_URL = "".concat(API_ROOT, "/private/api/v1/expense-report");
var BUDGET_URL = "".concat(API_ROOT, "/private/api/v1/budget");
var BUDGETS_URL = "".concat(API_ROOT, "/private/api/v1/budgets");
var INVENTORY_CATEGORY_URL = "".concat(API_ROOT, "/private/api/v1/inventory-category");
var INVENTORY_CATEGORIES_URL = "".concat(API_ROOT, "/private/api/v1/inventory-categories");
var INVENTORY_URL = "".concat(API_ROOT, "/private/api/v1/inventory");
var INVENTORIES_URL = "".concat(API_ROOT, "/private/api/v1/inventories");
var ACCOUNTS_URL = "".concat(API_ROOT, "/private/api/v1/accounts");
var ACCOUNT_URL = "".concat(API_ROOT, "/private/api/v1/account");
var CHAPTERS_URL = "".concat(API_ROOT, "/private/api/v1/chapters");
var CHAPTER_URL = "".concat(API_ROOT, "/private/api/v1/chapter");
var OUTCOMING_URL = "".concat(API_ROOT, "/private/api/v1/outcoming");
var OUTCOMINGS_URL = "".concat(API_ROOT, "/private/api/v1/outcomings");
var INCOMING_URL = "".concat(API_ROOT, "/private/api/v1/incoming");
var INCOMINGS_URL = "".concat(API_ROOT, "/private/api/v1/incomings");
var STUDENTS_URL = "".concat(API_ROOT, "/private/api/v1/students");
var STUDENTS_BY_SECTION_URL = "".concat(API_ROOT, "/private/api/v1/students-by-section");
var STUDENT_URL = "".concat(API_ROOT, "/private/api/v1/student");
var TEACHERS_URL = "".concat(API_ROOT, "/private/api/v1/teachers");
var TEACHER_URL = "".concat(API_ROOT, "/private/api/v1/teacher");
var STAFFS_URL = "".concat(API_ROOT, "/private/api/v1/staffs");
var STAFF_URL = "".concat(API_ROOT, "/private/api/v1/staff");
var PARENTS_URL = "".concat(API_ROOT, "/private/api/v1/parents");
var PARENT_URL = "".concat(API_ROOT, "/private/api/v1/parent");
var ROOMS_URL = "".concat(API_ROOT, "/private/api/v1/rooms");
var ROOM_URL = "".concat(API_ROOT, "/private/api/v1/room");
var SESSIONS_URL = "".concat(API_ROOT, "/private/api/v1/sessions");
var SESSION_URL = "".concat(API_ROOT, "/private/api/v1/session");
var TRAINING_URL = "".concat(API_ROOT, "/private/api/v1/training");
var TRAININGS_URL = "".concat(API_ROOT, "/private/api/v1/trainings");
var COURSE_URL = "".concat(API_ROOT, "/private/api/v1/course");
var COURSES_URL = "".concat(API_ROOT, "/private/api/v1/courses");
var PROMOTION_URL = "".concat(API_ROOT, "/private/api/v1/promotion");
var PROMOTIONS_URL = "".concat(API_ROOT, "/private/api/v1/promotions");
var GIFT_URL = "".concat(API_ROOT, "/private/api/v1/gift");
var GIFTS_URL = "".concat(API_ROOT, "/private/api/v1/gifts");
var BOOK_URL = "".concat(API_ROOT, "/private/api/v1/book");
var BOOKS_URL = "".concat(API_ROOT, "/private/api/v1/books");
var SECTIONS_URL = "".concat(API_ROOT, "/private/api/v1/sections");
var SECTION_URL = "".concat(API_ROOT, "/private/api/v1/section");
var ENROLLMENTS_URL = "".concat(API_ROOT, "/private/api/v1/enrollments");
var ENROLLMENT_URL = "".concat(API_ROOT, "/private/api/v1/enrollment");
var TIME_URL = "".concat(API_ROOT, "/private/api/v1/time");
var TIMES_URL = "".concat(API_ROOT, "/private/api/v1/times");
var TIME_AVAILABLE_URL = "".concat(API_ROOT, "/private/api/v1/time-available");
var INVOICE_URL = "".concat(API_ROOT, "/private/api/v1/invoice");
var INVOICES_URL = "".concat(API_ROOT, "/private/api/v1/invoices");
var PAYMENT_URL = "".concat(API_ROOT, "/private/api/v1/payment");
var PAYMENTS_URL = "".concat(API_ROOT, "/private/api/v1/payments");
var NOTES_URL = "".concat(API_ROOT, "/private/api/v1/notes");
var NOTE_URL = "".concat(API_ROOT, "/private/api/v1/note");
var ATTENDANCE_URL = "".concat(API_ROOT, "/private/api/v1/attendance");
var ATTENDANCES_LIST_URL = "".concat(API_ROOT, "/private/api/v1/attendances-list");
var DELETE_ATTENDANCE_URL = "".concat(API_ROOT, "/private/api/v1/delete-attendance");
var UPDATE_ATTENDANCE_URL = "".concat(API_ROOT, "/private/api/v1/update-attendance");
var ATTENDANCES_URL = "".concat(API_ROOT, "/private/api/v1/attendances");
var DASHBOARD_URL = "".concat(API_ROOT, "/private/api/v1/dashboard");
var EXAM_URL = "".concat(API_ROOT, "/private/api/v1/exam");
var DELETE_EXAM_URL = "".concat(API_ROOT, "/private/api/v1/delete-exam");
var UPDATE_EXAM_URL = "".concat(API_ROOT, "/private/api/v1/update-exam");
var EXAMS_URL = "".concat(API_ROOT, "/private/api/v1/exams");
var EXAMS_LIST_URL = "".concat(API_ROOT, "/private/api/v1/exams-list");
var ROUTES_URL = "".concat(API_ROOT, "/private/api/v1/routes");
var ROUTE_URL = "".concat(API_ROOT, "/private/api/v1/route");
var TRANSPORTS_URL = "".concat(API_ROOT, "/private/api/v1/transports");
var TRANSPORT_URL = "".concat(API_ROOT, "/private/api/v1/transport");
var CAR_URL = "".concat(API_ROOT, "/private/api/v1/car");
var CARS_URL = "".concat(API_ROOT, "/private/api/v1/cars");
var SCHEDULE_URL = "".concat(API_ROOT, "/private/api/v1/schedule");
var SCHEDULE_LIVE_URL = "".concat(API_ROOT, "/private/api/v1/update-live-schedule");
var SCHEDULE_AVAILABLE_URL = "".concat(API_ROOT, "/private/api/v1/schedule-available");
var SCHEDULES_URL = "".concat(API_ROOT, "/private/api/v1/schedules");
var STOPS_URL = "".concat(API_ROOT, "/private/api/v1/stops");
var STOP_URL = "".concat(API_ROOT, "/private/api/v1/stop");

/***/ }),

/***/ 14322:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ SUBJECTS; }
/* harmony export */ });
/* unused harmony export SUBJECTS_LIST */
var SUBJECTS = {
  DASHBOARD_SUBJECT: "dashboard",
  ORGANIZATION_SUBJECT: "organisation",
  USER_SUBJECT: "user",
  ALL_SUBJECT: "all",
  EMAIL_SUBJECT: "email",
  CALENDAR_SUBJECT: "calendar",
  POST_SUBJECT: "post",
  TEACHER_SUBJECT: "teacher",
  MESSAGE_SUBJECT: "message",
  COMMENT_SUBJECT: "comment",
  PERMISSION_SUBJECT: "permission",
  MEET_SUBJECT: "meet",
  EXPENSE_SUBJECT: "expense",
  SUPPLIER_SUBJECT: "supplier",
  INVENTORY_CATEGORY_SUBJECT: "inventoryCategory",
  INVENTORY_SUBJECT: "inventory",
  INCOMING_SUBJECT: "incoming",
  BUDGET_SUBJECT: "budget",
  FINANCIAL_REPORT_SUBJECT: "financialReport",
  OUTCOMING_SUBJECT: "outcoming",
  CHAPTER_SUBJECT: "chapter",
  ACCOUNT_SUBJECT: "account",
  GROUP_SUBJECT: "group",
  PRINT_SUBJECT: "print",
  STUDENT_SUBJECT: "student",
  PARENT_SUBJECT: "parent",
  STAFF_SUBJECT: "staff",
  SESSION_SUBJECT: "session",
  ROOM_SUBJECT: "room",
  TRAINING_SUBJECT: "training",
  COURSE_SUBJECT: "course",
  PROMOTION_SUBJECT: "promotion",
  GIFT_SUBJECT: "gift",
  BOOK_SUBJECT: "book",
  SECTION_SUBJECT: "section",
  ENROLLMENT_SUBJECT: "enrollment",
  TIME_SUBJECT: "time",
  INVOICE_SUBJECT: "invoice",
  PAYMENT_SUBJECT: "payment",
  NOTE_SUBJECT: "note",
  ATTENDANCE_SUBJECT: "attendance",
  EXAM_SUBJECT: "exam",
  ROUTE_SUBJECT: "route",
  STOP_SUBJECT: "stop",
  TRANSPORT_SUBJECT: "transport",
  CAR_SUBJECT: "car",
  SCHEDULE_SUBJECT: "schedule"
};
var SUBJECTS_LIST = Object.values(SUBJECTS);

/***/ }),

/***/ 77765:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_O": function() { return /* binding */ handleUserUpdate; },
/* harmony export */   "hY": function() { return /* binding */ handleLogout; },
/* harmony export */   "jc": function() { return /* binding */ handleLogin; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64687);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59898);




var handleUserUpdate = function handleUserUpdate(data) {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE',
      data: data
    });
  };
};

var handleOneSignalToken = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {
    var OneSignal;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            OneSignal = window.OneSignal || {};
            OneSignal.push(function () {
              return OneSignal.setExternalUserId(id);
            });
            OneSignal.push(function () {
              return OneSignal.getExternalUserId().then(function (e) {
                return console.log(e);
              });
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleOneSignalToken(_x) {
    return _ref.apply(this, arguments);
  };
}(); // ** Handle User Login


var handleLogin = function handleLogin(data) {
  return function (dispatch) {
    dispatch((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
      type: 'LOGIN',
      data: data
    }, _api_http__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN */ .L, data[_api_http__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN */ .L]));
    localStorage.setItem(_api_http__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN */ .L, JSON.stringify(data.accessToken));
    handleOneSignalToken(data.id);
  };
}; // ** Handle User Logout

var handleLogout = function handleLogout() {
  return function (dispatch) {
    dispatch((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
      type: 'LOGOUT'
    }, _api_http__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN */ .L, null));
    localStorage.removeItem(_api_http__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN */ .L);
  };
};

/***/ }),

/***/ 50944:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ useRTL; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _redux_actions_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22974);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95998);
//** React Imports
 // ** Store & Actions



var useRTL = function useRTL() {
  // ** Store Vars
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useDispatch */ .I0)();
  var isRtl = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)(function (state) {
    return state.layout.isRTL;
  }); // ** Return a wrapped version of useState's setter function

  var setValue = function setValue(value) {
    try {
      // ** Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(isRtl) : value;
      dispatch((0,_redux_actions_layout__WEBPACK_IMPORTED_MODULE_2__/* .handleRTL */ .Q1)(valueToStore));
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // ** Get HTML Tag
    var element = document.getElementsByTagName('html')[0]; // ** If isRTL then add attr dir='rtl' with HTML else attr dir='ltr'

    if (isRtl) {
      element.setAttribute('dir', 'rtl');
    } else {
      element.setAttribute('dir', 'ltr');
    }
  }, [isRtl]);
  return [isRtl, setValue];
};

/***/ }),

/***/ 47201:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": function() { return /* binding */ useSkin; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42982);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _redux_actions_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22974);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95998);

//** React Imports
 // ** Actions & Store



var useSkin = function useSkin() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useDispatch */ .I0)();
  var skin = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)(function (state) {
    return state.layout.skin;
  }); // ** Return a wrapped version of useState's setter function

  var setValue = function setValue(value) {
    try {
      // ** Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(skin) : value; // ** Save to store & local storage

      dispatch((0,_redux_actions_layout__WEBPACK_IMPORTED_MODULE_2__/* .handleSkin */ .vh)(value));
      window.localStorage.setItem('skin', JSON.stringify(valueToStore));
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _element$classList;

    // ** Get Body Tag
    var element = window.document.body; // ** Define classnames for skins

    var classNames = {
      dark: 'dark-layout',
      bordered: 'bordered-layout',
      'semi-dark': 'semi-dark-layout'
    }; // ** Remove all classes from Body on mount

    (_element$classList = element.classList).remove.apply(_element$classList, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(element.classList)); // ** If skin is not light add skin class


    if (skin !== 'light') {
      element.classList.add(classNames[skin]);
    }
  }, [skin]);
  return [skin, setValue];
};

/***/ }),

/***/ 17017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".autocomplete-container{position:relative}\n\n.autocomplete-container .autocomplete-search{height:100%;width:100%;background-color:#fff}\n\n.autocomplete-container .autocomplete-search:focus{box-shadow:none}\n\n.autocomplete-container .suggestions-list{z-index:998;list-style:none;border-radius:.5rem;max-height:450px;height:auto;width:100%;position:absolute;margin-top:.5rem;list-style-type:none;background-color:#fff;box-shadow:0 15px 30px 0 rgba(0,0,0,.11),0 5px 15px 0 rgba(0,0,0,.08)}\n\n[dir=\"ltr\"] .autocomplete-container .suggestions-list{padding-left:0}\n\n[dir=\"rtl\"] .autocomplete-container .suggestions-list{padding-right:0}\n\n.autocomplete-container .suggestions-list .suggestion-item{padding:.9rem 1rem;color:#545b64;line-height:1 !important}\n\n.autocomplete-container .suggestions-list .suggestion-item a{color:#545b64}\n\n.autocomplete-container .suggestions-list .suggestion-item.suggestion-title{font-size:.85rem;color:#b9b9c3;text-transform:uppercase;letter-spacing:.6px;margin-top:.75rem;margin-bottom:0}\n\n.autocomplete-container .suggestions-list .suggestion-item.active,.autocomplete-container .suggestions-list .suggestion-item:hover:not(.suggestion-title-wrapper):not(.no-result){background-color:#f1f1f1;color:#000 !important}\n\n.autocomplete-container .suggestions-list .suggestion-item:hover:not(.suggestion-title-wrapper):not(.no-result){cursor:pointer}\n\n.autocomplete-container .suggestions-list.open-up{top:auto;bottom:100%;margin-top:0;margin-bottom:.5rem}\n\n.dark-layout .autocomplete-container .suggestions-list{background-color:#283046}\n\n.dark-layout .autocomplete-container .suggestions-list .suggestion-item{color:#b4b7bd !important}\n\n.dark-layout .autocomplete-container .suggestions-list .suggestion-item.suggestion-title-wrapper{color:#676d7d}\n\n.dark-layout .autocomplete-container .suggestions-list .suggestion-item:not(.suggestion-title-wrapper).active,.dark-layout .autocomplete-container .suggestions-list .suggestion-item:not(.suggestion-title-wrapper):hover{background-color:#161d31 !important;color:#545b64 !important}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 83333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 89364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(20196), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(66766), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(15530), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[dir=\"ltr\"] .horizontal-menu .content{margin-left:0}\n\n[dir=\"rtl\"] .horizontal-menu .content{margin-right:0}\n\n.horizontal-menu .content.show-overlay .content-overlay{z-index:998 !important}\n\n.horizontal-menu .navbar.header-navbar .navbar-container{padding:.8rem 2rem}\n\n.horizontal-menu .horizontal-menu-wrapper .header-navbar{min-height:4.45rem}\n\n.horizontal-menu footer{position:static}\n\n.horizontal-menu .horizontal-menu-wrapper{position:fixed;top:62px;z-index:990;width:100%}\n\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-container{padding:0 1rem;width:100%}\n\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-header{display:none}\n\n.horizontal-menu .header-navbar{background:#fff;z-index:999 !important;line-height:1;min-height:auto}\n\n.horizontal-menu .header-navbar.navbar-light{background:#fff}\n\n.horizontal-menu .header-navbar.navbar-horizontal.floating-nav{top:62px;width:calc(100vw - (100vw - 100%) - (2rem * 2));background:#fff}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-horizontal.floating-nav{left:0}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-horizontal.floating-nav{right:0}\n\n.horizontal-menu .header-navbar .navbar-container{border-radius:.357rem}\n\n.horizontal-menu .header-navbar.navbar-fixed{position:fixed;width:100%}\n\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header{position:absolute;padding:0;z-index:1000}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header{left:calc(50% - 56px)}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header{right:calc(50% - 56px)}\n\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand{display:flex;align-items:center;font-size:inherit}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand{margin-right:0}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand{margin-left:0}\n\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-logo img{max-width:36px}\n\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text{color:#1f2144;margin-bottom:0;font-weight:600;letter-spacing:.01rem;font-size:1.45rem}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text{padding-left:1rem}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text{padding-right:1rem}\n\n.horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after{left:.4rem}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after{right:.4rem}\n\n.horizontal-menu .header-navbar.navbar-horizontal .sidebar-group-active .dropdown-toggle::after{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}\n\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu::before{display:none}\n\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu{min-width:215px;border:none;margin-top:0;min-height:52px}\n\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled{pointer-events:none !important}\n\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled a{color:#b8c2cc}\n\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after{position:absolute;top:50%;margin-top:-7px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after{left:auto;right:1rem}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after{right:auto;left:1rem}\n\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-item{font-size:1rem;padding-top:.68rem;padding-bottom:.68rem;display:flex;align-items:center}\n\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu{position:relative}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.openLeft .dropdown-menu{left:auto !important;right:100% !important}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.openLeft .dropdown-menu{right:auto !important;left:100% !important}\n\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.sidebar-group-active{background:#f8f8f8}\n\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu>.dropdown-menu{position:absolute;top:0 !important}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu>.dropdown-menu{left:100% !important}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu>.dropdown-menu{right:100% !important}\n\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu>.dropdown-menu i,.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu>.dropdown-menu svg{height:11px !important;width:11px !important;font-size:11px !important}\n\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li{padding-top:.857rem;padding-bottom:.857rem}\n\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li>.dropdown-menu a>*{transition:all .2s ease}\n\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li>.dropdown-menu a:hover{background-color:rgba(0,0,0,0);color:#545b64}\n\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li>.dropdown-menu a:hover>*{transition:transform .2s ease}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li>.dropdown-menu a:hover>*{transform:translateX(5px)}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li>.dropdown-menu a:hover>*{transform:translateX(-5px)}\n\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li>.dropdown-menu .active>a{background:#f8f8f8;color:#1f2144;font-weight:500}\n\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li>.dropdown-menu .open.active>a{color:#545b64;font-weight:normal}\n\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li i,.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li svg{height:17px;width:17px;font-size:1.2rem}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li i,[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li svg{margin-right:.5rem}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li i,[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li svg{margin-left:.5rem}\n\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li>a{padding:.715rem 1.25rem;display:flex}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li>a{margin-right:.715rem}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li>a{margin-left:.715rem}\n\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li:hover>a{background:#f8f8f8;border-radius:4px}\n\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li.active>a{box-shadow:0px 0px 6px 1px rgba(31,33,68,.6);color:#fff;border-radius:4px}\n\n[dir=\"ltr\"] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li.active>a{background:linear-gradient(118deg, #1f2144, rgba(31, 33, 68, 0.7))}\n\n[dir=\"rtl\"] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation>li.active>a{background:linear-gradient(-118deg, #1f2144, rgba(31, 33, 68, 0.7))}\n\n.horizontal-menu .navigation-header{font-family:inherit;color:#929292;padding:8px 20px;font-size:1rem;text-transform:uppercase}\n\n.horizontal-menu .navbar-dark .nav-item.active>a{border-bottom:2px solid #1f2144;background-color:#313c50}\n\n.horizontal-layout.navbar-floating .header-navbar-shadow{height:80px}\n\n@media(min-width: 1200px){\n.horizontal-layout.navbar-floating .header-navbar-shadow{top:45px}}\n\n.horizontal-layout.navbar-floating:not(.blank-page) .app-content{padding:calc(\n            2rem + 4.45rem* 2 + 1.3rem\n          ) 2rem 0 2rem}\n\n.horizontal-layout.navbar-floating .horizontal-menu-wrapper{background:linear-gradient(to bottom, rgba(248, 248, 248, 0.95) 44%, rgba(248, 248, 248, 0.46) 73%, rgba(255, 255, 255, 0) 100%);background-repeat:repeat-x}\n\n.horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 1) + 4.45rem + 3.35rem +\n          1.3rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 1) + 4.45rem +\n              3.35rem\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 1) + 4.45rem +\n              3.35rem\n          ))}}\n\n.horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 3) + 4.45rem + 0rem +\n          1.3rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 3) + 4.45rem +\n              0rem\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 3) + 4.45rem +\n              0rem\n          ))}}\n\n.horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem +\n          1.3rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 2) + 4.45rem +\n              3.35rem\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 2) + 4.45rem +\n              3.35rem\n          ))}}\n\n.horizontal-layout.navbar-sticky .app-content{padding:calc(2rem + 4.45rem* 2) 2rem 0 2rem}\n\n.horizontal-layout.navbar-sticky .header-navbar{background-color:#f8f8f8;box-shadow:none}\n\n.horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top{top:62px;background-color:#fff;box-shadow:0 4px 24px 0 rgba(34,41,47,.1)}\n\n[dir=\"ltr\"] .horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top{left:0}\n\n[dir=\"rtl\"] .horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top{right:0}\n\n.horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 1) + 4.45rem + 3.35rem +\n          0rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 1) + 4.45rem +\n              3.35rem\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 1) + 4.45rem +\n              3.35rem\n          ))}}\n\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 0rem +\n          0rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 2) + 4.45rem +\n              0rem\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 2) + 4.45rem +\n              0rem\n          ))}}\n\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem +\n          0rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 2) + 4.45rem +\n              3.35rem\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 2) + 4.45rem +\n              3.35rem\n          ))}}\n\n.horizontal-layout.navbar-static .app-content{padding:calc(2rem + 4.45rem) 2rem 0 2rem}\n\n.horizontal-layout.navbar-static .content{min-height:calc(100% - (4.45rem + calc(3.35rem + 0.2rem)))}\n\n.horizontal-layout.navbar-static .header-navbar{background-color:#f8f8f8;box-shadow:none}\n\n.horizontal-layout.navbar-static .horizontal-menu-wrapper{position:relative}\n\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar{background:#fff}\n\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top{width:100%}\n\n[dir=\"ltr\"] .horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top{left:0}\n\n[dir=\"rtl\"] .horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top{right:0}\n\n.horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) +\n          0rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 1) + 4.45rem +\n              calc(3.35rem + 0.2rem)\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 1) + 4.45rem +\n              calc(3.35rem + 0.2rem)\n          ))}}\n\n.horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 0rem +\n          0rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 2) + 4.45rem +\n              0rem\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 2) + 4.45rem +\n              0rem\n          ))}}\n\n.horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem +\n          0rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 2) + 4.45rem +\n              3.35rem\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 2) + 4.45rem +\n              3.35rem\n          ))}}\n\n.horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 1) + 0rem + 3.35rem +\n          0rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 1) + 0rem +\n              3.35rem\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 1) + 0rem +\n              3.35rem\n          ))}}\n\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 2) + 0rem + 0rem +\n          0rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 2) + 0rem +\n              0rem\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 2) + 0rem +\n              0rem\n          ))}}\n\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper{height:calc(100vh - (\n        calc(2rem * 2) + 0rem + 3.35rem +\n          0rem + 4.45rem\n      ))}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper{height:calc(100vh - (\n            calc(calc(2rem - 0.8rem) * 2) + 0rem +\n              3.35rem\n          ));height:calc(var(--vh, 1vh)*100 - (\n            calc(calc(2rem - 0.8rem) * 2) + 0rem +\n              3.35rem\n          ))}}\n\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation>li>ul>li>a i,.horizontal-layout.vertical-overlay-menu #main-menu-navigation>li>ul>li>a svg{height:1rem;width:1rem;font-size:1rem}\n\n@media(max-width: 1199.98px){\n.horizontal-layout.horizontal-menu .horizontal-menu-wrapper .header-navbar{display:none}\n\n.horizontal-layout .header-navbar{background:#fff}\n\n.horizontal-layout .app-content{padding:calc(4.45rem + calc(2rem - 0.8rem)) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important}}\n\n@media(max-width: 575.98px){\nhtml body.horizontal-layout.navbar-static .app-content{padding:calc(2rem - 0.8rem + 4.45rem) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important}}\n\n[dir=\"ltr\"] .vertical-overlay-menu .content{margin-left:0}\n\n[dir=\"rtl\"] .vertical-overlay-menu .content{margin-right:0}\n\n.vertical-overlay-menu .navbar .navbar-header{width:260px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .navbar .navbar-header{float:left}\n\n[dir=\"rtl\"] .vertical-overlay-menu .navbar .navbar-header{float:right}\n\n.vertical-overlay-menu .main-menu,.vertical-overlay-menu.menu-hide .main-menu{opacity:0;transform:translate3d(0, 0, 0);transition:width .25s,opacity .25s,transform .25s;width:260px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu,[dir=\"ltr\"] .vertical-overlay-menu.menu-hide .main-menu{left:-260px}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu,[dir=\"rtl\"] .vertical-overlay-menu.menu-hide .main-menu{right:-260px}\n\n.vertical-overlay-menu .main-menu .navigation>li>a>svg,.vertical-overlay-menu .main-menu .navigation>li>a>i{transition:200ms ease all;height:20px;width:20px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation>li>a>svg,[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation>li>a>i{margin-right:14px;float:left}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation>li>a>svg,[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation>li>a>i{margin-left:14px;float:right}\n\n.vertical-overlay-menu .main-menu .navigation>li>a>svg:before,.vertical-overlay-menu .main-menu .navigation>li>a>i:before{transition:200ms ease all;font-size:1.429rem}\n\n.vertical-overlay-menu .main-menu .navigation li.has-sub>a:after{content:\"\";background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-repeat:no-repeat;background-position:center;background-size:1rem;height:1rem;width:1rem;display:inline-block;position:absolute;top:14px;transform:rotate(0deg);transition:all .2s ease-out}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation li.has-sub>a:after{right:20px}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation li.has-sub>a:after{left:20px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing)>a:after{transform:rotate(90deg)}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing)>a:after{transform:rotate(-90deg)}\n\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal{display:none}\n\n.vertical-overlay-menu.menu-open .main-menu{opacity:1;transition:width .25s,opacity .25s,transform .25s}\n\n[dir=\"ltr\"] .vertical-overlay-menu.menu-open .main-menu{transform:translate3d(260px, 0, 0)}\n\n[dir=\"rtl\"] .vertical-overlay-menu.menu-open .main-menu{transform:translate3d(-260px, 0, 0)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 77972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(15530), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vertical-layout.vertical-menu-modern .main-menu{transition:.4s cubic-bezier(0.25, 0.8, 0.25, 1),background 0s;transform:translate3d(0, 0, 0);backface-visibility:hidden}\n\n.vertical-layout.vertical-menu-modern .main-menu .navigation li a{align-items:center}\n\n.vertical-layout.vertical-menu-modern .main-menu .navigation>li>a svg,.vertical-layout.vertical-menu-modern .main-menu .navigation>li>a i{height:20px;width:20px;font-size:1.45rem;flex-shrink:0}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern .main-menu .navigation>li>a svg,[dir=\"ltr\"] .vertical-layout.vertical-menu-modern .main-menu .navigation>li>a i{margin-right:1.1rem}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern .main-menu .navigation>li>a svg,[dir=\"rtl\"] .vertical-layout.vertical-menu-modern .main-menu .navigation>li>a i{margin-left:1.1rem}\n\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content>li>a svg,.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content>li>a i{font-size:11px;height:11px;width:11px}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content>li>a svg,[dir=\"ltr\"] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content>li>a i{margin-right:1.45rem}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content>li>a svg,[dir=\"rtl\"] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content>li>a i{margin-left:1.45rem}\n\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu{width:260px}\n\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation .navigation-header .feather-more-horizontal{display:none}\n\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation>li>a>i:before,.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation>li>a>svg:before{height:20px;width:20px;font-size:1.45rem}\n\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub>a:after{content:\"\";background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-position:center;background-size:1.1rem;height:1.1rem;width:1.1rem;display:inline-block;position:absolute;top:14px;transform:rotate(0deg);transition:all .2s ease-out}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub>a:after{right:20px}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub>a:after{left:20px}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing)>a:after{transform:rotate(90deg)}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing)>a:after{transform:rotate(-90deg)}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-expanded .footer{margin-left:260px}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-expanded .footer{margin-right:260px}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header{width:80px}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header{float:left}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header{float:right}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header .modern-nav-toggle{display:none}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded{width:260px;z-index:1000}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded .modern-nav-toggle{display:block}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top,[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.floating-nav{left:80px}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top,[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.floating-nav{right:80px}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu{width:80px}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navbar-header .brand-text,.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .modern-nav-toggle{display:none}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header{margin-left:2.2rem}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header{margin-right:2.2rem}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header span{display:none}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header .feather-more-horizontal{display:block;font-size:1.285rem;width:18px;height:18px}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li:last-child{margin-bottom:1.25rem !important}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a{background:#f5f5f5;box-shadow:none;color:#565656}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded{width:260px}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation>li.navigation-header span{display:block}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation>li.navigation-header .feather-more-horizontal{display:none}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub>a:after{content:\"\";background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-position:center;background-size:1rem;height:1rem;width:1rem;display:inline-block;position:absolute;top:14px;transform:rotate(0deg);transition:all .2s ease-out}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub>a:after{right:20px}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub>a:after{left:20px}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing)>a:after{transform:rotate(90deg)}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing)>a:after{transform:rotate(-90deg)}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navbar-header .brand-text{display:inline}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .modern-nav-toggle{display:block}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation{overflow:visible}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation>li.navigation-header span{display:none}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation>li>a{text-overflow:inherit}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content,[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-collapsed .footer{margin-left:80px}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content,[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-collapsed .footer{margin-right:80px}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.floating-nav{width:calc(100vw - (100vw - 100%) - 4.4rem - 74px)}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top{width:calc(100vw - (100vw - 100%) - 74px)}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top{left:74px}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top{right:74px}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern .toggle-icon,[dir=\"ltr\"] .vertical-layout.vertical-menu-modern .collapse-toggle-icon{margin-right:.425rem}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern .toggle-icon,[dir=\"rtl\"] .vertical-layout.vertical-menu-modern .collapse-toggle-icon{margin-left:.425rem}\n\n.vertical-layout.vertical-menu-modern .toggle-icon:focus,.vertical-layout.vertical-menu-modern .collapse-toggle-icon:focus{outline:none}\n\n@media(min-width: 992px){\n.vertical-layout.vertical-menu-modern .main-menu{width:260px}}\n\n@media(max-width: 1199.98px){\n.vertical-layout.vertical-menu-modern .main-menu{width:0}\n\n.vertical-layout.vertical-menu-modern .navbar .navbar-header{width:0}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern .content,[dir=\"ltr\"] .vertical-layout.vertical-menu-modern .footer{margin-left:0}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern .content,[dir=\"rtl\"] .vertical-layout.vertical-menu-modern .footer{margin-right:0}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content,[dir=\"ltr\"] .vertical-layout.vertical-menu-modern.menu-collapsed .footer{margin-left:0}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content,[dir=\"rtl\"] .vertical-layout.vertical-menu-modern.menu-collapsed .footer{margin-right:0}\n\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu{width:0}}\n\n@media(max-width: 767.98px){\n.vertical-layout.vertical-menu-modern .main-menu{width:0}\n\n.vertical-layout.vertical-menu-modern .navbar .navbar-header{width:0}\n\n[dir=\"ltr\"] .vertical-layout.vertical-menu-modern .content,[dir=\"ltr\"] .vertical-layout.vertical-menu-modern .footer{margin-left:0}\n\n[dir=\"rtl\"] .vertical-layout.vertical-menu-modern .content,[dir=\"rtl\"] .vertical-layout.vertical-menu-modern .footer{margin-right:0}}\n\n@keyframes fadein{\nfrom{opacity:0}\n\nto{opacity:1}}\n\n@keyframes fadeout{\nfrom{opacity:1}\n\nto{opacity:0}}\n\n@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){\n.vertical-menu-modern.vertical-layout .main-menu .navigation>li>a>span{animation:none}}\n\n[dir=\"ltr\"] .vertical-overlay-menu .content{margin-left:0}\n\n[dir=\"rtl\"] .vertical-overlay-menu .content{margin-right:0}\n\n.vertical-overlay-menu .navbar .navbar-header{width:260px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .navbar .navbar-header{float:left}\n\n[dir=\"rtl\"] .vertical-overlay-menu .navbar .navbar-header{float:right}\n\n.vertical-overlay-menu .main-menu,.vertical-overlay-menu.menu-hide .main-menu{opacity:0;transform:translate3d(0, 0, 0);transition:width .25s,opacity .25s,transform .25s;width:260px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu,[dir=\"ltr\"] .vertical-overlay-menu.menu-hide .main-menu{left:-260px}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu,[dir=\"rtl\"] .vertical-overlay-menu.menu-hide .main-menu{right:-260px}\n\n.vertical-overlay-menu .main-menu .navigation>li>a>svg,.vertical-overlay-menu .main-menu .navigation>li>a>i{transition:200ms ease all;height:20px;width:20px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation>li>a>svg,[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation>li>a>i{margin-right:14px;float:left}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation>li>a>svg,[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation>li>a>i{margin-left:14px;float:right}\n\n.vertical-overlay-menu .main-menu .navigation>li>a>svg:before,.vertical-overlay-menu .main-menu .navigation>li>a>i:before{transition:200ms ease all;font-size:1.429rem}\n\n.vertical-overlay-menu .main-menu .navigation li.has-sub>a:after{content:\"\";background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-position:center;background-size:1rem;height:1rem;width:1rem;display:inline-block;position:absolute;top:14px;transform:rotate(0deg);transition:all .2s ease-out}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation li.has-sub>a:after{right:20px}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation li.has-sub>a:after{left:20px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing)>a:after{transform:rotate(90deg)}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing)>a:after{transform:rotate(-90deg)}\n\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal{display:none}\n\n.vertical-overlay-menu.menu-open .main-menu{opacity:1;transition:width .25s,opacity .25s,transform .25s}\n\n[dir=\"ltr\"] .vertical-overlay-menu.menu-open .main-menu{transform:translate3d(260px, 0, 0)}\n\n[dir=\"rtl\"] .vertical-overlay-menu.menu-open .main-menu{transform:translate3d(-260px, 0, 0)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 64849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(15530), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[dir=\"ltr\"] .vertical-overlay-menu .content{margin-left:0}\n\n[dir=\"rtl\"] .vertical-overlay-menu .content{margin-right:0}\n\n.vertical-overlay-menu .navbar .navbar-header{width:260px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .navbar .navbar-header{float:left}\n\n[dir=\"rtl\"] .vertical-overlay-menu .navbar .navbar-header{float:right}\n\n.vertical-overlay-menu .main-menu,.vertical-overlay-menu.menu-hide .main-menu{opacity:0;transform:translate3d(0, 0, 0);transition:width .25s,opacity .25s,transform .25s;width:260px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu,[dir=\"ltr\"] .vertical-overlay-menu.menu-hide .main-menu{left:-260px}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu,[dir=\"rtl\"] .vertical-overlay-menu.menu-hide .main-menu{right:-260px}\n\n.vertical-overlay-menu .main-menu .navigation>li>a>svg,.vertical-overlay-menu .main-menu .navigation>li>a>i{transition:200ms ease all;height:20px;width:20px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation>li>a>svg,[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation>li>a>i{margin-right:14px;float:left}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation>li>a>svg,[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation>li>a>i{margin-left:14px;float:right}\n\n.vertical-overlay-menu .main-menu .navigation>li>a>svg:before,.vertical-overlay-menu .main-menu .navigation>li>a>i:before{transition:200ms ease all;font-size:1.429rem}\n\n.vertical-overlay-menu .main-menu .navigation li.has-sub>a:after{content:\"\";background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-position:center;background-size:1rem;height:1rem;width:1rem;display:inline-block;position:absolute;top:14px;transform:rotate(0deg);transition:all .2s ease-out}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation li.has-sub>a:after{right:20px}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation li.has-sub>a:after{left:20px}\n\n[dir=\"ltr\"] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing)>a:after{transform:rotate(90deg)}\n\n[dir=\"rtl\"] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing)>a:after{transform:rotate(-90deg)}\n\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal{display:none}\n\n.vertical-overlay-menu.menu-open .main-menu{opacity:1;transition:width .25s,opacity .25s,transform .25s}\n\n[dir=\"ltr\"] .vertical-overlay-menu.menu-open .main-menu{transform:translate3d(260px, 0, 0)}\n\n[dir=\"rtl\"] .vertical-overlay-menu.menu-open .main-menu{transform:translate3d(-260px, 0, 0)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 17436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".react-select.is-invalid .select__control{border-color:#ea5455}\n\n.select__control.select__control--is-disabled,.react-select__control.select__control--is-disabled{border-color:#ebe9f1}\n\n.select__control.select__control--is-disabled .select__indicator-separator,.react-select__control.select__control--is-disabled .select__indicator-separator{background-color:#ebe9f1}\n\n.select__control.select__control--is-focused,.select__control.react-select__control--is-focused,.react-select__control.select__control--is-focused,.react-select__control.react-select__control--is-focused{box-shadow:none;border-color:#1f2144}\n\n.select__control .select__indicator svg,.react-select__control .select__indicator svg{cursor:pointer}\n\n.select__control .select__indicator-separator,.react-select__control .select__indicator-separator{display:none}\n\n.select__control .select__single-value,.react-select__control .select__single-value{color:#545b64}\n\n.select__control .select__placeholder,.react-select__control .select__placeholder{color:#545b64}\n\n.select__menu .select__menu-list .select__option,.select__menu .select__menu-list .react-select__option,.select__menu .react-select__menu-list .select__option,.select__menu .react-select__menu-list .react-select__option,.react-select__menu .select__menu-list .select__option,.react-select__menu .select__menu-list .react-select__option,.react-select__menu .react-select__menu-list .select__option,.react-select__menu .react-select__menu-list .react-select__option{cursor:pointer}\n\n.select__menu .select__menu-list .select__option.select__option--is-focused,.select__menu .select__menu-list .react-select__option.select__option--is-focused,.select__menu .react-select__menu-list .select__option.select__option--is-focused,.select__menu .react-select__menu-list .react-select__option.select__option--is-focused,.react-select__menu .select__menu-list .select__option.select__option--is-focused,.react-select__menu .select__menu-list .react-select__option.select__option--is-focused,.react-select__menu .react-select__menu-list .select__option.select__option--is-focused,.react-select__menu .react-select__menu-list .react-select__option.select__option--is-focused{background-color:rgba(31,33,68,.12);color:#1f2144}\n\n.select__menu .select__menu-list .select__option.select__option--is-selected,.select__menu .select__menu-list .react-select__option.select__option--is-selected,.select__menu .react-select__menu-list .select__option.select__option--is-selected,.select__menu .react-select__menu-list .react-select__option.select__option--is-selected,.react-select__menu .select__menu-list .select__option.select__option--is-selected,.react-select__menu .select__menu-list .react-select__option.select__option--is-selected,.react-select__menu .react-select__menu-list .select__option.select__option--is-selected,.react-select__menu .react-select__menu-list .react-select__option.select__option--is-selected{background-color:#1f2144;color:#fff !important}\n\n.select__menu .select__menu-list .select__group .select__group-heading,.select__menu .react-select__menu-list .select__group .select__group-heading,.react-select__menu .select__menu-list .select__group .select__group-heading,.react-select__menu .react-select__menu-list .select__group .select__group-heading{margin-bottom:.5rem;color:#5e5873;font-weight:bolder;font-size:inherit}\n\n.select__multi-value,.react-select__multi-value{color:#fff;border-radius:3px;background-color:#1f2144 !important}\n\n[dir=\"ltr\"] .select__multi-value,[dir=\"ltr\"] .react-select__multi-value{margin:0 .7rem 0 0}\n\n[dir=\"rtl\"] .select__multi-value,[dir=\"rtl\"] .react-select__multi-value{margin:0 0 0 .7rem}\n\n.select__multi-value .select__multi-value__label,.react-select__multi-value .select__multi-value__label{color:#fff;font-size:.85rem;border-radius:.357rem;padding:.26rem .6rem}\n\n[dir=\"ltr\"] .select__multi-value .select__multi-value__remove,[dir=\"ltr\"] .react-select__multi-value .select__multi-value__remove{padding-left:0;padding-right:.5rem}\n\n[dir=\"rtl\"] .select__multi-value .select__multi-value__remove,[dir=\"rtl\"] .react-select__multi-value .select__multi-value__remove{padding-right:0;padding-left:.5rem}\n\n.select__multi-value .select__multi-value__remove:hover,.react-select__multi-value .select__multi-value__remove:hover{background-color:inherit;color:inherit}\n\n.select__multi-value .select__multi-value__remove svg,.react-select__multi-value .select__multi-value__remove svg{height:.85rem;width:.85rem}\n\n.select__multi-value .select__multi-value__remove svg:hover,.react-select__multi-value .select__multi-value__remove svg:hover{cursor:pointer}\n\n.select-borderless .select__control{border:0}\n\n.select-borderless .select__control .select__indicators{display:none}\n\n.dark-layout .select__control{background-color:#283046;border-color:#3b4253}\n\n.dark-layout .select__control .select__indicator svg{fill:#b4b7bd}\n\n.dark-layout .select__control .select__indicator span,.dark-layout .select__control .select__single-value{color:#b4b7bd}\n\n.dark-layout .select__control .select__multi-value{background-color:rgba(31,33,68,.12)}\n\n.dark-layout .select__control .select__multi-value .select__multi-value__label{color:#1f2144}\n\n.dark-layout .select__control .select__multi-value__remove svg{fill:#1f2144}\n\n.dark-layout .select__control .select__multi-value__remove:hover{background-color:rgba(0,0,0,0) !important}\n\n.dark-layout .select__control .select__placeholder{color:#676d7d}\n\n.dark-layout .select__control .select__input{color:#676d7d !important}\n\n.dark-layout .select__control.select__control--is-disabled{opacity:.5}\n\n.dark-layout .select__menu{background-color:#283046}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 22299:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_react_select_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17436);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_react_select_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_react_select_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_react_select_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_react_select_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 76930:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ecb788ffecf588044036.png";

/***/ }),

/***/ 97253:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "846e5a4a5465c2b9c77c.png";

/***/ }),

/***/ 83236:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "427466ce2d8a954ca353.png";

/***/ }),

/***/ 2049:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b9ff4a41b77f3fad7742.png";

/***/ }),

/***/ 33159:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "404ef8b9d7678f4ae8cc.png";

/***/ }),

/***/ 10737:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5bbd6eec01fc71dadfc7.png";

/***/ })

}]);