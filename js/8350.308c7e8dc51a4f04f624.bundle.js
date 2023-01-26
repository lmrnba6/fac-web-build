(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[8350],{

/***/ 64970:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(67294));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_620__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_620__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_620__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_620__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_620__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_620__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_620__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_620__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_620__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_620__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_620__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_620__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_620__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_620__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_620__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_620__(__nested_webpack_require_620__.s = "./src/react-webcam.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/react-webcam.tsx":
/*!******************************!*\
  !*** ./src/react-webcam.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_4284__) {

"use strict";
__nested_webpack_require_4284__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4284__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_4284__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = ( false) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = ( false) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ( false) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

// polyfill based on https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
(function polyfillGetUserMedia() {
    if (typeof window === 'undefined') {
        return;
    }
    // Older browsers might not implement mediaDevices at all, so we set an empty object first
    if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
    }
    // Some browsers partially implement mediaDevices. We can't just assign an object
    // with getUserMedia as it would overwrite existing properties.
    // Here, we will just add the getUserMedia property if it's missing.
    if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
            // First get ahold of the legacy getUserMedia, if present
            var getUserMedia = navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;
            // Some browsers just don't implement it - return a rejected promise with an error
            // to keep a consistent interface
            if (!getUserMedia) {
                return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
            }
            // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
            return new Promise(function (resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject);
            });
        };
    }
})();
function hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}
var Webcam = /** @class */ (function (_super) {
    __extends(Webcam, _super);
    function Webcam(props) {
        var _this = _super.call(this, props) || this;
        _this.canvas = null;
        _this.ctx = null;
        _this.requestUserMediaId = 0;
        _this.unmounted = false;
        _this.state = {
            hasUserMedia: false
        };
        return _this;
    }
    Webcam.prototype.componentDidMount = function () {
        var _a = this, state = _a.state, props = _a.props;
        this.unmounted = false;
        if (!hasGetUserMedia()) {
            props.onUserMediaError("getUserMedia not supported");
            return;
        }
        if (!state.hasUserMedia) {
            this.requestUserMedia();
        }
        if (props.children && typeof props.children != 'function') {
            console.warn("children must be a function");
        }
    };
    Webcam.prototype.componentDidUpdate = function (nextProps) {
        var props = this.props;
        if (!hasGetUserMedia()) {
            props.onUserMediaError("getUserMedia not supported");
            return;
        }
        var audioConstraintsChanged = JSON.stringify(nextProps.audioConstraints) !==
            JSON.stringify(props.audioConstraints);
        var videoConstraintsChanged = JSON.stringify(nextProps.videoConstraints) !==
            JSON.stringify(props.videoConstraints);
        var minScreenshotWidthChanged = nextProps.minScreenshotWidth !== props.minScreenshotWidth;
        var minScreenshotHeightChanged = nextProps.minScreenshotHeight !== props.minScreenshotHeight;
        if (videoConstraintsChanged ||
            minScreenshotWidthChanged ||
            minScreenshotHeightChanged) {
            this.canvas = null;
            this.ctx = null;
        }
        if (audioConstraintsChanged || videoConstraintsChanged) {
            this.stopAndCleanup();
            this.requestUserMedia();
        }
    };
    Webcam.prototype.componentWillUnmount = function () {
        this.unmounted = true;
        this.stopAndCleanup();
    };
    Webcam.stopMediaStream = function (stream) {
        if (stream) {
            if (stream.getVideoTracks && stream.getAudioTracks) {
                stream.getVideoTracks().map(function (track) {
                    stream.removeTrack(track);
                    track.stop();
                });
                stream.getAudioTracks().map(function (track) {
                    stream.removeTrack(track);
                    track.stop();
                });
            }
            else {
                stream.stop();
            }
        }
    };
    Webcam.prototype.stopAndCleanup = function () {
        var state = this.state;
        if (state.hasUserMedia) {
            Webcam.stopMediaStream(this.stream);
            if (state.src) {
                window.URL.revokeObjectURL(state.src);
            }
        }
    };
    Webcam.prototype.getScreenshot = function (screenshotDimensions) {
        var _a = this, state = _a.state, props = _a.props;
        if (!state.hasUserMedia)
            return null;
        var canvas = this.getCanvas(screenshotDimensions);
        return (canvas &&
            canvas.toDataURL(props.screenshotFormat, props.screenshotQuality));
    };
    Webcam.prototype.getCanvas = function (screenshotDimensions) {
        var _a = this, state = _a.state, props = _a.props;
        if (!this.video) {
            return null;
        }
        if (!state.hasUserMedia || !this.video.videoHeight)
            return null;
        if (!this.ctx) {
            var canvasWidth = this.video.videoWidth;
            var canvasHeight = this.video.videoHeight;
            if (!this.props.forceScreenshotSourceSize) {
                var aspectRatio = canvasWidth / canvasHeight;
                canvasWidth = props.minScreenshotWidth || this.video.clientWidth;
                canvasHeight = canvasWidth / aspectRatio;
                if (props.minScreenshotHeight &&
                    canvasHeight < props.minScreenshotHeight) {
                    canvasHeight = props.minScreenshotHeight;
                    canvasWidth = canvasHeight * aspectRatio;
                }
            }
            this.canvas = document.createElement("canvas");
            this.canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvasWidth;
            this.canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvasHeight;
            this.ctx = this.canvas.getContext("2d");
        }
        var _b = this, ctx = _b.ctx, canvas = _b.canvas;
        if (ctx && canvas) {
            // mirror the screenshot
            if (props.mirrored) {
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1);
            }
            ctx.imageSmoothingEnabled = props.imageSmoothing;
            ctx.drawImage(this.video, 0, 0, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height);
            // invert mirroring
            if (props.mirrored) {
                ctx.scale(-1, 1);
                ctx.translate(-canvas.width, 0);
            }
        }
        return canvas;
    };
    Webcam.prototype.requestUserMedia = function () {
        var _this = this;
        var props = this.props;
        var sourceSelected = function (audioConstraints, videoConstraints) {
            var constraints = {
                video: typeof videoConstraints !== "undefined" ? videoConstraints : true
            };
            if (props.audio) {
                constraints.audio =
                    typeof audioConstraints !== "undefined" ? audioConstraints : true;
            }
            _this.requestUserMediaId++;
            var myRequestUserMediaId = _this.requestUserMediaId;
            navigator.mediaDevices
                .getUserMedia(constraints)
                .then(function (stream) {
                if (_this.unmounted || myRequestUserMediaId !== _this.requestUserMediaId) {
                    Webcam.stopMediaStream(stream);
                }
                else {
                    _this.handleUserMedia(null, stream);
                }
            })
                .catch(function (e) {
                _this.handleUserMedia(e);
            });
        };
        if ("mediaDevices" in navigator) {
            sourceSelected(props.audioConstraints, props.videoConstraints);
        }
        else {
            var optionalSource_1 = function (id) { return ({ optional: [{ sourceId: id }] }); };
            var constraintToSourceId_1 = function (constraint) {
                var deviceId = constraint.deviceId;
                if (typeof deviceId === "string") {
                    return deviceId;
                }
                if (Array.isArray(deviceId) && deviceId.length > 0) {
                    return deviceId[0];
                }
                if (typeof deviceId === "object" && deviceId.ideal) {
                    return deviceId.ideal;
                }
                return null;
            };
            // @ts-ignore: deprecated api
            MediaStreamTrack.getSources(function (sources) {
                var audioSource = null;
                var videoSource = null;
                sources.forEach(function (source) {
                    if (source.kind === "audio") {
                        audioSource = source.id;
                    }
                    else if (source.kind === "video") {
                        videoSource = source.id;
                    }
                });
                var audioSourceId = constraintToSourceId_1(props.audioConstraints);
                if (audioSourceId) {
                    audioSource = audioSourceId;
                }
                var videoSourceId = constraintToSourceId_1(props.videoConstraints);
                if (videoSourceId) {
                    videoSource = videoSourceId;
                }
                sourceSelected(optionalSource_1(audioSource), optionalSource_1(videoSource));
            });
        }
    };
    Webcam.prototype.handleUserMedia = function (err, stream) {
        var props = this.props;
        if (err || !stream) {
            this.setState({ hasUserMedia: false });
            props.onUserMediaError(err);
            return;
        }
        this.stream = stream;
        try {
            if (this.video) {
                this.video.srcObject = stream;
            }
            this.setState({ hasUserMedia: true });
        }
        catch (error) {
            this.setState({
                hasUserMedia: true,
                src: window.URL.createObjectURL(stream)
            });
        }
        props.onUserMedia(stream);
    };
    Webcam.prototype.render = function () {
        var _this = this;
        var _a = this, state = _a.state, props = _a.props;
        var audio = props.audio, forceScreenshotSourceSize = props.forceScreenshotSourceSize, onUserMedia = props.onUserMedia, onUserMediaError = props.onUserMediaError, screenshotFormat = props.screenshotFormat, screenshotQuality = props.screenshotQuality, minScreenshotWidth = props.minScreenshotWidth, minScreenshotHeight = props.minScreenshotHeight, audioConstraints = props.audioConstraints, videoConstraints = props.videoConstraints, imageSmoothing = props.imageSmoothing, mirrored = props.mirrored, _b = props.style, style = _b === void 0 ? {} : _b, children = props.children, rest = __rest(props, ["audio", "forceScreenshotSourceSize", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]);
        var videoStyle = mirrored ? __assign(__assign({}, style), { transform: (style.transform || "") + " scaleX(-1)" }) : style;
        var childrenProps = {
            getScreenshot: this.getScreenshot.bind(this),
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("video", __assign({ autoPlay: true, src: state.src, muted: !audio, playsInline: true, ref: function (ref) {
                    _this.video = ref;
                }, style: videoStyle }, rest)),
            children && children(childrenProps)));
    };
    Webcam.defaultProps = {
        audio: false,
        forceScreenshotSourceSize: false,
        imageSmoothing: true,
        mirrored: false,
        onUserMedia: function () { return undefined; },
        onUserMediaError: function () { return undefined; },
        screenshotFormat: "image/webp",
        screenshotQuality: 0.92,
    };
    return Webcam;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Webcam);


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=react-webcam.js.map

/***/ }),

/***/ 15538:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ }),

/***/ 34726:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 97985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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