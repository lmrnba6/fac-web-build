"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[3389],{

/***/ 17834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63366);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23663);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69638);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  closeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  closeAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  fade: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__/* .tagPropType */ .iC,
  transition: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape(_Fade__WEBPACK_IMPORTED_MODULE_5__/* ["default"].propTypes */ .Z.propTypes),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)])
};
var defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_5__/* ["default"].defaultProps */ .Z.defaultProps), {}, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(props, ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'alert', "alert-" + color, {
    'alert-dismissible': toggle
  }), cssModule);
  var closeClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_2___default()('close', closeClassName), cssModule);

  var alertTransition = _objectSpread(_objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_5__/* ["default"].defaultProps */ .Z.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Fade__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    in: isOpen,
    role: "alert",
    innerRef: innerRef
  }), toggle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null, children);
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (Alert);

/***/ }),

/***/ 85677:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_Modal; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(94578);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/utils.js
var utils = __webpack_require__(23663);
;// CONCATENATED MODULE: ./node_modules/reactstrap/es/Portal.js





var propTypes = {
  children: (prop_types_default()).node.isRequired,
  node: (prop_types_default()).any
};

var Portal = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  };

  _proto.render = function render() {
    if (!utils/* canUseDOM */.Nq) {
      return null;
    }

    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return /*#__PURE__*/react_dom.createPortal(this.props.children, this.props.node || this.defaultNode);
  };

  return Portal;
}(react.Component);

Portal.propTypes = propTypes;
/* harmony default export */ var es_Portal = (Portal);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Fade.js
var Fade = __webpack_require__(69638);
;// CONCATENATED MODULE: ./node_modules/reactstrap/es/Modal.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function noop() {}

var FadePropTypes = prop_types_default().shape(Fade/* default.propTypes */.Z.propTypes);
var Modal_propTypes = {
  isOpen: (prop_types_default()).bool,
  autoFocus: (prop_types_default()).bool,
  centered: (prop_types_default()).bool,
  scrollable: (prop_types_default()).bool,
  size: (prop_types_default()).string,
  toggle: (prop_types_default()).func,
  keyboard: (prop_types_default()).bool,
  role: (prop_types_default()).string,
  labelledBy: (prop_types_default()).string,
  backdrop: prop_types_default().oneOfType([(prop_types_default()).bool, prop_types_default().oneOf(['static'])]),
  onEnter: (prop_types_default()).func,
  onExit: (prop_types_default()).func,
  onOpened: (prop_types_default()).func,
  onClosed: (prop_types_default()).func,
  children: (prop_types_default()).node,
  className: (prop_types_default()).string,
  wrapClassName: (prop_types_default()).string,
  modalClassName: (prop_types_default()).string,
  backdropClassName: (prop_types_default()).string,
  contentClassName: (prop_types_default()).string,
  external: (prop_types_default()).node,
  fade: (prop_types_default()).bool,
  cssModule: (prop_types_default()).object,
  zIndex: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).string, (prop_types_default()).func]),
  unmountOnClose: (prop_types_default()).bool,
  returnFocusAfterClose: (prop_types_default()).bool,
  container: utils/* targetPropType */.qW,
  trapFocus: (prop_types_default()).bool
};
var propsToOmit = Object.keys(Modal_propTypes);
var defaultProps = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: utils/* TransitionTimeouts.Modal */.wF.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: utils/* TransitionTimeouts.Fade */.wF.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false
};

var Modal = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleEscape = _this.handleEscape.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleTab = _this.handleTab.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.onOpened = _this.onOpened.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.onClosed = _this.onClosed.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.trapFocus = _this.trapFocus.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    } // traps focus inside the Modal, even if the browser address bar is focused


    document.addEventListener('focus', this.trapFocus, true);
    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      }); // let render() renders Modal Dialog first

      return;
    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  };

  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) //element is not attached
      return;
    if (this._dialog && this._dialog.parentNode === ev.target) // initial focus when the Modal is opened
      return;
    if (this.modalIndex < Modal.openCount - 1) // last opened modal
      return;
    var children = this.getFocusableChildren();

    for (var i = 0; i < children.length; i++) {
      // focus is already inside the Modal
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Modal
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.modalTransition.onExited || noop)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(utils/* focusableElements.join */.ku.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._dialog ? this._dialog.parentNode : null;

      if (backdrop && e.target === backdrop && this.props.backdrop === 'static') {
        this.handleStaticBackdropAnimation();
      }

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    if (this.modalIndex < Modal.openCount - 1) return; // last opened modal

    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === utils/* keyCodes.esc */.Do.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      } else if (this.props.backdrop === 'static') {
        e.preventDefault();
        e.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  };

  _proto.handleStaticBackdropAnimation = function handleStaticBackdropAnimation() {
    var _this2 = this;

    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(function () {
      _this2.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = (0,utils/* getTarget */.U9)(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = (0,utils/* getOriginalBodyPadding */.X9)();
    (0,utils/* conditionallyUpdateScrollbar */.Rf)();

    if (Modal.openCount === 0) {
      document.body.className = classnames_default()(document.body.className, (0,utils/* mapToCssModules */.mx)('modal-open', this.props.cssModule));
    }

    this.modalIndex = Modal.openCount;
    Modal.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    if (Modal.openCount <= 1) {
      var modalOpenClassName = (0,utils/* mapToCssModules */.mx)('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
    }

    this.manageFocusAfterClose();
    Modal.openCount = Math.max(0, Modal.openCount - 1);
    (0,utils/* setScrollbarWidth */.pp)(this._originalBodyPadding);
  };

  _proto.renderModalDialog = function renderModalDialog() {
    var _classNames,
        _this3 = this;

    var attributes = (0,utils/* omit */.CE)(this.props, propsToOmit);
    var dialogBaseClass = 'modal-dialog';
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, attributes, {
      className: (0,utils/* mapToCssModules */.mx)(classnames_default()(dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames)), this.props.cssModule),
      role: "document",
      ref: function ref(c) {
        _this3._dialog = c;
      }
    }), /*#__PURE__*/react.createElement("div", {
      className: (0,utils/* mapToCssModules */.mx)(classnames_default()('modal-content', this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  };

  _proto.render = function render() {
    var unmountOnClose = this.props.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? 'none' : 'block';
      var _this$props2 = this.props,
          wrapClassName = _this$props2.wrapClassName,
          modalClassName = _this$props2.modalClassName,
          backdropClassName = _this$props2.backdropClassName,
          cssModule = _this$props2.cssModule,
          isOpen = _this$props2.isOpen,
          backdrop = _this$props2.backdrop,
          role = _this$props2.role,
          labelledBy = _this$props2.labelledBy,
          external = _this$props2.external,
          innerRef = _this$props2.innerRef;
      var modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: 'block'
        },
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var modalTransition = _objectSpread(_objectSpread(_objectSpread({}, Fade/* default.defaultProps */.Z.defaultProps), this.props.modalTransition), {}, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });

      var backdropTransition = _objectSpread(_objectSpread(_objectSpread({}, Fade/* default.defaultProps */.Z.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/react.createElement(Fade/* default */.Z, (0,esm_extends/* default */.Z)({}, backdropTransition, {
        in: isOpen && !!backdrop,
        cssModule: cssModule,
        className: (0,utils/* mapToCssModules */.mx)(classnames_default()('modal-backdrop', backdropClassName), cssModule)
      })) : /*#__PURE__*/react.createElement("div", {
        className: (0,utils/* mapToCssModules */.mx)(classnames_default()('modal-backdrop', 'show', backdropClassName), cssModule)
      }));
      return /*#__PURE__*/react.createElement(es_Portal, {
        node: this._element
      }, /*#__PURE__*/react.createElement("div", {
        className: (0,utils/* mapToCssModules */.mx)(wrapClassName)
      }, /*#__PURE__*/react.createElement(Fade/* default */.Z, (0,esm_extends/* default */.Z)({}, modalAttributes, modalTransition, {
        in: isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: (0,utils/* mapToCssModules */.mx)(classnames_default()('modal', modalClassName, this.state.showStaticBackdropAnimation && 'modal-static'), cssModule),
        innerRef: innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }

    return null;
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  return Modal;
}(react.Component);

Modal.propTypes = Modal_propTypes;
Modal.defaultProps = defaultProps;
Modal.openCount = 0;
/* harmony default export */ var es_Modal = (Modal);

/***/ }),

/***/ 10684:
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

var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, ["className", "cssModule", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'modal-body'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, attributes, {
    className: classes
  }));
};

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (ModalBody);

/***/ }),

/***/ 32701:
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
  wrapTag: _utils__WEBPACK_IMPORTED_MODULE_2__/* .tagPropType */ .iC,
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  closeAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  charCode: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]),
  close: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
  charCode: 215
};

var ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      charCode = props.charCode,
      close = props.close,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'modal-header'), cssModule);

  if (!close && toggle) {
    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    closeButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      onClick: toggle,
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapToCssModules */ .mx)('close', cssModule),
      "aria-label": closeAriaLabel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "aria-hidden": "true"
    }, closeIcon));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrapTag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, attributes, {
    className: classes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, {
    className: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapToCssModules */ .mx)('modal-title', cssModule)
  }, children), close || closeButton);
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (ModalHeader);

/***/ })

}]);