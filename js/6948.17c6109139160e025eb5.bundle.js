(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[6948],{

/***/ 51715:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Meet; }
});

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/CallPageFooter/CallPageFooter.module.css
var CallPageFooter_module = __webpack_require__(49176);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/CallPageFooter/CallPageFooter.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(CallPageFooter_module/* default */.Z, options);




       /* harmony default export */ var CallPageFooter_CallPageFooter_module = (CallPageFooter_module/* default */.Z && CallPageFooter_module/* default.locals */.Z.locals ? CallPageFooter_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/reactstrap/es/Row.js
var Row = __webpack_require__(10267);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Col.js
var Col = __webpack_require__(51252);
// EXTERNAL MODULE: ./node_modules/react-moment/dist/index.js
var dist = __webpack_require__(94803);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/views/apps/meet/utils/FormatDate.js






var FormateDate = function FormateDate(props) {
  var nowday = +new Date().toISOString().split('T')[0].split('-')[2];
  var nowyear = +new Date().toISOString().split('T')[0].split('-')[0];
  var nowhour = +new Date().toISOString().split('T')[1].split(':')[0];
  var day = +props.children.split('T')[0].split('-')[2];
  var year = +props.children.split('T')[0].split('-')[0];
  var hour = +props.children.split('T')[1].split(':')[0];

  if (year === nowyear) {
    if (day === nowday) {
      if (hour - nowhour > 12 || props.strict) {
        if (props.strict) return /*#__PURE__*/_jsx(Moment, {
          format: "HH:mm",
          children: props.children
        });else return /*#__PURE__*/_jsxs(React.Fragment, {
          children: ["Today", ', ', /*#__PURE__*/_jsx(Moment, {
            format: "HH:mm",
            children: props.children
          })]
        });
      } else return /*#__PURE__*/_jsx(Moment, {
        fromNow: true,
        children: props.children
      });
    } else if (day === nowday - 1) return /*#__PURE__*/_jsxs(React.Fragment, {
      children: ["Yesterday", ', ', /*#__PURE__*/_jsx(Moment, {
        format: "HH:mm",
        children: props.children
      })]
    });else return /*#__PURE__*/_jsx(Moment, {
      format: "DD MMMM, HH:mm",
      children: props.children
    });
  } else return /*#__PURE__*/_jsx(Moment, {
    format: "DD MMMM YYYY",
    children: props.children
  });
};

var formatDate = function formatDate(timestamp) {
  return moment_default()(timestamp).format("h:mm A");
};
/* harmony default export */ var FormatDate = ((/* unused pure expression or super */ null && (FormateDate)));
// EXTERNAL MODULE: ./src/assets/images/avatars/avatar-blank.png
var avatar_blank = __webpack_require__(76930);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/CallPageFooter/CallPageFooter.js









var CallPageFooter = function CallPageFooter(props) {
  var interval = react.useRef();

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      showReaction = _React$useState2[0],
      setShowReaction = _React$useState2[1];

  var _React$useState3 = react.useState(function () {
    return formatDate();
  }),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      currentTime = _React$useState4[0],
      setCurrentTime = _React$useState4[1];

  react.useEffect(function () {
    interval.current = setInterval(function () {
      return setCurrentTime(formatDate());
    }, 1000);
    document.addEventListener('click', function (e) {
      if (!e.target.className.includes('toggle')) {
        setShowReaction(false);
      }
    });
    return function () {
      clearInterval(interval.current);
    };
  }, []);

  var screenUnShareScreenHandler = function screenUnShareScreenHandler() {
    if (props.isPresenting) props.stopScreenShareFunction();else props.screenShareFunction();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
    className: CallPageFooter_CallPageFooter_module.footerItem,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
      className: CallPageFooter_CallPageFooter_module.centerItem,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: CallPageFooter_CallPageFooter_module.headerItems,
        onClick: function onClick() {
          return props.setOpenParticipants(1);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
          className: CallPageFooter_CallPageFooter_module.meetInfoText,
          children: "".concat(props.roomId, "  |  ").concat(currentTime)
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
      xs: "12",
      md: "6",
      lg: "4",
      className: CallPageFooter_CallPageFooter_module.centerItem,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
          xs: "4",
          md: "2",
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 0px'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "".concat(CallPageFooter_CallPageFooter_module.centerItemIconBlock, " ").concat(!props.isAudio ? CallPageFooter_CallPageFooter_module.redBg : null),
            onClick: function onClick() {
              return props.toggleAudioFunction(!props.isAudio);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "".concat(props.isAudio ? 'fas fa-microphone' : "fas fa-microphone-slash", " ").concat(CallPageFooter_CallPageFooter_module.centerItemIcon)
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
          xs: "4",
          md: "2",
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 0px'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "".concat(CallPageFooter_CallPageFooter_module.centerItemIconBlock, " ").concat(!props.isVideo ? CallPageFooter_CallPageFooter_module.redBg : null),
            onClick: function onClick() {
              return props.toggleVideoFunction(!props.isVideo);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: " ".concat(props.isVideo ? 'fas fa-video' : "fas fa-video-slash", " ").concat(CallPageFooter_CallPageFooter_module.centerItemIcon)
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
          xs: "4",
          md: "2",
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 0px'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              position: 'absolute',
              cursor: 'default'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: 'toggle ' + CallPageFooter_CallPageFooter_module.centerItemIconBlock,
              onClick: function onClick() {
                return setShowReaction(!showReaction);
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                className: "fa-solid fa-face-smile toggle ".concat(CallPageFooter_CallPageFooter_module.centerItemIcon)
              })
            }), showReaction && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: 'toggle ' + CallPageFooter_CallPageFooter_module.reactionContainer,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "toggle",
                style: {
                  display: 'flex',
                  paddingTop: '10px',
                  justifyContent: 'center'
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "toggle",
                  style: {
                    display: 'flex'
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
                    className: 'toggle ' + CallPageFooter_CallPageFooter_module.emojiText,
                    onClick: function onClick() {
                      return props.sendEmoji('thumb');
                    },
                    children: "\uD83D\uDC4D"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
                    className: 'toggle ' + CallPageFooter_CallPageFooter_module.emojiText,
                    onClick: function onClick() {
                      return props.sendEmoji('clap');
                    },
                    children: "\uD83D\uDC4F "
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
                    className: 'toggle ' + CallPageFooter_CallPageFooter_module.emojiText,
                    onClick: function onClick() {
                      return props.sendEmoji('laugh');
                    },
                    children: "\uD83D\uDE06"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
                    className: 'toggle ' + CallPageFooter_CallPageFooter_module.emojiText,
                    onClick: function onClick() {
                      return props.sendEmoji('heart');
                    },
                    children: "\u2764\uFE0F "
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
                    className: 'toggle ' + CallPageFooter_CallPageFooter_module.emojiText,
                    onClick: function onClick() {
                      return props.sendEmoji('open_mouth');
                    },
                    children: "\uD83D\uDE2E"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
                    className: 'toggle ' + CallPageFooter_CallPageFooter_module.emojiText,
                    onClick: function onClick() {
                      return props.sendEmoji('party');
                    },
                    children: "\uD83C\uDF89"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: 'toggle ' + CallPageFooter_CallPageFooter_module.raiseHandContainer,
                onClick: function onClick() {
                  return props.sendEmoji('raise_hand');
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
                  className: 'toggle ' + CallPageFooter_CallPageFooter_module.raiseHandText,
                  children: "\u270B Raise hand"
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
          xs: "4",
          md: "2",
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 0px'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "".concat(CallPageFooter_CallPageFooter_module.centerItemIconBlock, " ").concat(props.isPresenting ? CallPageFooter_CallPageFooter_module.activeBgIcon : null),
            onClick: screenUnShareScreenHandler,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: " ".concat(!props.isPresenting ? 'fas fa-desktop' : "fas fa-desktop ".concat(CallPageFooter_CallPageFooter_module.activeShare), " ").concat(CallPageFooter_CallPageFooter_module.centerItemIcon)
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
          xs: "4",
          md: "2",
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 0px'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: CallPageFooter_CallPageFooter_module.centerItemIconBlockPhone,
            onClick: props.disconnectCallFunction,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-phone ".concat(CallPageFooter_CallPageFooter_module.centerItemIcon)
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
          xs: "4",
          md: "2",
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 0px'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "".concat(CallPageFooter_CallPageFooter_module.centerItemIconBlock),
            onClick: props.toggleSettingsFunction,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-ellipsis-v ".concat(CallPageFooter_CallPageFooter_module.centerItemIcon)
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
      className: CallPageFooter_CallPageFooter_module.centerItem,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: CallPageFooter_CallPageFooter_module.headerItems,
        style: {
          position: 'relative'
        },
        onClick: function onClick() {
          return props.setOpenParticipants(1);
        },
        children: [props.participants.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: CallPageFooter_CallPageFooter_module.badgeContainer,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
            className: CallPageFooter_CallPageFooter_module.badgeText,
            children: props.participants.length
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-user-friends ".concat(CallPageFooter_CallPageFooter_module.icon, " ").concat(props.isOpenMessenger === 1 ? CallPageFooter_CallPageFooter_module.activeIcon : '')
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "".concat(CallPageFooter_CallPageFooter_module.headerItems, " ").concat(CallPageFooter_CallPageFooter_module.iconBlock),
        onClick: function onClick() {
          props.setIsOpenMessenger(2);
          props.setNotification(null);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-comment-alt ".concat(CallPageFooter_CallPageFooter_module.icon, " ").concat(props.isOpenMessenger === 2 ? CallPageFooter_CallPageFooter_module.activeIcon : '')
        }), !props.isOpenMessenger && props.notification && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: CallPageFooter_CallPageFooter_module.alertCircleIcon
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: CallPageFooter_CallPageFooter_module.headerItems,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: props.userImage || avatar_blank,
          alt: "participant",
          className: CallPageFooter_CallPageFooter_module.userImage
        })
      })]
    })]
  });
};

/* harmony default export */ var CallPageFooter_CallPageFooter = (CallPageFooter);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/MeetingInfo/MeetingInfo.module.css
var MeetingInfo_module = __webpack_require__(52311);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/MeetingInfo/MeetingInfo.module.css

      
      
      
      
      
      
      
      
      

var MeetingInfo_module_options = {};

MeetingInfo_module_options.styleTagTransform = (styleTagTransform_default());
MeetingInfo_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      MeetingInfo_module_options.insert = insertBySelector_default().bind(null, "head");
    
MeetingInfo_module_options.domAPI = (styleDomAPI_default());
MeetingInfo_module_options.insertStyleElement = (insertStyleElement_default());

var MeetingInfo_module_update = injectStylesIntoStyleTag_default()(MeetingInfo_module/* default */.Z, MeetingInfo_module_options);




       /* harmony default export */ var MeetingInfo_MeetingInfo_module = (MeetingInfo_module/* default */.Z && MeetingInfo_module/* default.locals */.Z.locals ? MeetingInfo_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js + 3 modules
var Tooltip = __webpack_require__(47744);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/MeetingInfo/MeetingInfo.js








var MeetingInfo = function MeetingInfo(props) {
  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      isOpenCopyToolTip = _React$useState2[0],
      setIsOpenTooltip = _React$useState2[1];

  var timeout = react.useRef(null);

  var copyUrlHandler = function copyUrlHandler() {
    navigator.clipboard.writeText(props.url);

    if (timeout) {
      clearInterval(timeout.current);
    }

    setIsOpenTooltip(true);
    timeout.current = setTimeout(function () {
      setIsOpenTooltip(false);
    }, 2000);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: MeetingInfo_MeetingInfo_module.meetingInfoBlock,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: MeetingInfo_MeetingInfo_module.meetingHeader,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: MeetingInfo_MeetingInfo_module.title,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "meetingReady"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fas fa-times ".concat(MeetingInfo_MeetingInfo_module.timesIcon),
        onClick: function onClick() {
          props.setMeetInfoPopup(false);
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      className: MeetingInfo_MeetingInfo_module.infoText,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "meetingReadyTitle"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: MeetingInfo_MeetingInfo_module.meetLink,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: MeetingInfo_MeetingInfo_module.urlText,
        children: props.url
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.ZP, {
        arrow: true,
        PopperProps: {
          disablePortal: true
        },
        open: isOpenCopyToolTip,
        disableFocusListener: true,
        disableHoverListener: true,
        disableTouchListener: true,
        title: "Copied",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-copy ".concat(MeetingInfo_MeetingInfo_module.copyIcon),
          onClick: copyUrlHandler
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: MeetingInfo_MeetingInfo_module.permissionText,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fas fa-shield-virus ".concat(MeetingInfo_MeetingInfo_module.permissionIcon, " ").concat(MeetingInfo_MeetingInfo_module.red)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        className: MeetingInfo_MeetingInfo_module.smallText,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "meetingReadyText"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
      className: MeetingInfo_MeetingInfo_module.smallText,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "joinedAs"
      }), " ", props.name]
    })]
  });
};

/* harmony default export */ var MeetingInfo_MeetingInfo = (MeetingInfo);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/NotificationMessage/NotificationMessage.module.css
var NotificationMessage_module = __webpack_require__(43974);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/NotificationMessage/NotificationMessage.module.css

      
      
      
      
      
      
      
      
      

var NotificationMessage_module_options = {};

NotificationMessage_module_options.styleTagTransform = (styleTagTransform_default());
NotificationMessage_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      NotificationMessage_module_options.insert = insertBySelector_default().bind(null, "head");
    
NotificationMessage_module_options.domAPI = (styleDomAPI_default());
NotificationMessage_module_options.insertStyleElement = (insertStyleElement_default());

var NotificationMessage_module_update = injectStylesIntoStyleTag_default()(NotificationMessage_module/* default */.Z, NotificationMessage_module_options);




       /* harmony default export */ var NotificationMessage_NotificationMessage_module = (NotificationMessage_module/* default */.Z && NotificationMessage_module/* default.locals */.Z.locals ? NotificationMessage_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/NotificationMessage/NotificationMessage.js





var NotificationMessage = function NotificationMessage(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: NotificationMessage_NotificationMessage_module.mainContainer,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: NotificationMessage_NotificationMessage_module.notificationHeader,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: 'fas fa-comment'.concat(" ", NotificationMessage_NotificationMessage_module.icon)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: NotificationMessage_NotificationMessage_module.userText,
        children: props.user.name
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      className: NotificationMessage_NotificationMessage_module.notificationMsg,
      children: props.message
    })]
  });
};

/* harmony default export */ var NotificationMessage_NotificationMessage = (NotificationMessage);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/PinnedUserCard/PinnedUserCard.module.css
var PinnedUserCard_module = __webpack_require__(20306);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/PinnedUserCard/PinnedUserCard.module.css

      
      
      
      
      
      
      
      
      

var PinnedUserCard_module_options = {};

PinnedUserCard_module_options.styleTagTransform = (styleTagTransform_default());
PinnedUserCard_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      PinnedUserCard_module_options.insert = insertBySelector_default().bind(null, "head");
    
PinnedUserCard_module_options.domAPI = (styleDomAPI_default());
PinnedUserCard_module_options.insertStyleElement = (insertStyleElement_default());

var PinnedUserCard_module_update = injectStylesIntoStyleTag_default()(PinnedUserCard_module/* default */.Z, PinnedUserCard_module_options);




       /* harmony default export */ var PinnedUserCard_PinnedUserCard_module = (PinnedUserCard_module/* default */.Z && PinnedUserCard_module/* default.locals */.Z.locals ? PinnedUserCard_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/voice-activity-detection/index.js
var voice_activity_detection = __webpack_require__(84168);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/WaveVisualizer/WaveVisualizer.module.css
var WaveVisualizer_module = __webpack_require__(87480);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/WaveVisualizer/WaveVisualizer.module.css

      
      
      
      
      
      
      
      
      

var WaveVisualizer_module_options = {};

WaveVisualizer_module_options.styleTagTransform = (styleTagTransform_default());
WaveVisualizer_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      WaveVisualizer_module_options.insert = insertBySelector_default().bind(null, "head");
    
WaveVisualizer_module_options.domAPI = (styleDomAPI_default());
WaveVisualizer_module_options.insertStyleElement = (insertStyleElement_default());

var WaveVisualizer_module_update = injectStylesIntoStyleTag_default()(WaveVisualizer_module/* default */.Z, WaveVisualizer_module_options);




       /* harmony default export */ var WaveVisualizer_WaveVisualizer_module = (WaveVisualizer_module/* default */.Z && WaveVisualizer_module/* default.locals */.Z.locals ? WaveVisualizer_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/WaveVisualizer/WaveVisualizer.js





var WaveVisualizer = function WaveVisualizer(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: WaveVisualizer_WaveVisualizer_module.mainContainer,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: WaveVisualizer_WaveVisualizer_module.waveItem,
      style: {
        height: "".concat(props.soundActivity > 0.5 ? 20 * props.soundActivity : 15 * props.soundActivity || 4, "px"),
        borderRadius: props.soundActivity ? '2px' : '50%'
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: WaveVisualizer_WaveVisualizer_module.waveItem,
      style: {
        height: "".concat(30 * props.soundActivity || 4, "px"),
        borderRadius: props.soundActivity ? '2px' : '50%',
        marginLeft: '3px',
        marginRight: '3px'
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: WaveVisualizer_WaveVisualizer_module.waveItem,
      style: {
        height: "".concat(props.soundActivity > 0.5 ? 20 * props.soundActivity : 15 * props.soundActivity || 4, "px"),
        borderRadius: props.soundActivity ? '2px' : '50%'
      }
    })]
  });
};

/* harmony default export */ var WaveVisualizer_WaveVisualizer = (WaveVisualizer);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/PinnedUserCard/PinnedUserCard.js









var PinnedUserCard = function PinnedUserCard(props) {
  var ref = react.useRef();

  var _React$useState = react.useState(0),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      soundActivity = _React$useState2[0],
      setSoundActivity = _React$useState2[1];

  var _React$useState3 = react.useState(true),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      showmenuOptions = _React$useState4[0],
      setShowMenuOptions = _React$useState4[1];

  react.useEffect(function () {
    if (ref.current) ref.current.srcObject = props.stream;
  }, [props.stream, props.isAudioOn, props.isVideoOn]);
  react.useEffect(function () {
    var audioContext = new AudioContext();
    var voiceDectionOptions = {
      onUpdate: function onUpdate(activityValue) {
        setSoundActivity(activityValue);
      }
    };
    voice_activity_detection(audioContext, props.stream, voiceDectionOptions);
  }, [props]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    onDoubleClick: props.onClick,
    onMouseEnter: function onMouseEnter() {
      return setShowMenuOptions(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShowMenuOptions(false);
    },
    className: props.isVideoOn ? PinnedUserCard_PinnedUserCard_module.mainContainerVideoOn : PinnedUserCard_PinnedUserCard_module.mainContainerVideoOff,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: PinnedUserCard_PinnedUserCard_module.soundActivity,
      children: soundActivity
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        padding: '0'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: PinnedUserCard_PinnedUserCard_module.videoContainer,
        style: {
          display: !props.isVideoOn ? 'none' : 'inline-block'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("video", {
          className: PinnedUserCard_PinnedUserCard_module.video,
          muted: true,
          playsInline: true,
          autoPlay: true,
          ref: ref
        })
      }), !props.isVideoOn && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: PinnedUserCard_PinnedUserCard_module.mainUserContainer,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: PinnedUserCard_PinnedUserCard_module.userImageContainer,
          style: {
            borderWidth: "".concat(100 * soundActivity, "px")
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: PinnedUserCard_PinnedUserCard_module.userImage,
            style: {
              backgroundImage: "url(".concat(props.image, ")")
            }
          })
        })
      }), !props.isAudioOn ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: PinnedUserCard_PinnedUserCard_module.centerItemIconBlock,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-microphone-slash ".concat(PinnedUserCard_PinnedUserCard_module.microIcon)
        })
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: PinnedUserCard_PinnedUserCard_module.centerItemIconBlockVoice,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(WaveVisualizer_WaveVisualizer, {
          soundActivity: soundActivity
        })
      }), showmenuOptions && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: PinnedUserCard_PinnedUserCard_module.menuControlsContainer,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: PinnedUserCard_PinnedUserCard_module.menuControlItem,
          onClick: props.unPinUserFunction,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: PinnedUserCard_PinnedUserCard_module.pinIconSlash,
            children: "\\"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: PinnedUserCard_PinnedUserCard_module.pinIconSlashTwo,
            children: "\\"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fas fa-thumbtack ".concat(PinnedUserCard_PinnedUserCard_module.controlIcon)
          })]
        }), props.peerId !== 'current' && props.isAdmin && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [!props.isAudioOn ? /*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.ZP, {
            arrow: true,
            PopperProps: {
              disablePortal: true
            },
            disableFocusListener: true,
            disableTouchListener: true,
            title: "You cant reactive a user micro",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: PinnedUserCard_PinnedUserCard_module.menuControlItem,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                className: "fas fa-microphone-slash ".concat(PinnedUserCard_PinnedUserCard_module.controlIcon)
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: PinnedUserCard_PinnedUserCard_module.menuControlItem,
            onClick: props.muteUserFunction,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-microphone-slash ".concat(PinnedUserCard_PinnedUserCard_module.controlIcon)
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: PinnedUserCard_PinnedUserCard_module.menuControlItem,
            onClick: function onClick() {
              return props.excludeUserFunction(props.name);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-minus-circle ".concat(PinnedUserCard_PinnedUserCard_module.controlIcon)
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: PinnedUserCard_PinnedUserCard_module.userInfoContainer,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
          className: PinnedUserCard_PinnedUserCard_module.userNameText,
          children: props.name
        })
      })]
    })]
  });
};

/* harmony default export */ var PinnedUserCard_PinnedUserCard = (PinnedUserCard);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/MeetCall.module.css
var MeetCall_module = __webpack_require__(3670);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/MeetCall.module.css

      
      
      
      
      
      
      
      
      

var MeetCall_module_options = {};

MeetCall_module_options.styleTagTransform = (styleTagTransform_default());
MeetCall_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      MeetCall_module_options.insert = insertBySelector_default().bind(null, "head");
    
MeetCall_module_options.domAPI = (styleDomAPI_default());
MeetCall_module_options.insertStyleElement = (insertStyleElement_default());

var MeetCall_module_update = injectStylesIntoStyleTag_default()(MeetCall_module/* default */.Z, MeetCall_module_options);




       /* harmony default export */ var MeetCall_MeetCall_module = (MeetCall_module/* default */.Z && MeetCall_module/* default.locals */.Z.locals ? MeetCall_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/MeetDetails/MeetDetails.module.css
var MeetDetails_module = __webpack_require__(66318);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/MeetDetails/MeetDetails.module.css

      
      
      
      
      
      
      
      
      

var MeetDetails_module_options = {};

MeetDetails_module_options.styleTagTransform = (styleTagTransform_default());
MeetDetails_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      MeetDetails_module_options.insert = insertBySelector_default().bind(null, "head");
    
MeetDetails_module_options.domAPI = (styleDomAPI_default());
MeetDetails_module_options.insertStyleElement = (insertStyleElement_default());

var MeetDetails_module_update = injectStylesIntoStyleTag_default()(MeetDetails_module/* default */.Z, MeetDetails_module_options);




       /* harmony default export */ var MeetDetails_MeetDetails_module = (MeetDetails_module/* default */.Z && MeetDetails_module/* default.locals */.Z.locals ? MeetDetails_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/MeetDetails/Chat/Chat.module.css
var Chat_module = __webpack_require__(26075);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/MeetDetails/Chat/Chat.module.css

      
      
      
      
      
      
      
      
      

var Chat_module_options = {};

Chat_module_options.styleTagTransform = (styleTagTransform_default());
Chat_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Chat_module_options.insert = insertBySelector_default().bind(null, "head");
    
Chat_module_options.domAPI = (styleDomAPI_default());
Chat_module_options.insertStyleElement = (insertStyleElement_default());

var Chat_module_update = injectStylesIntoStyleTag_default()(Chat_module/* default */.Z, Chat_module_options);




       /* harmony default export */ var Chat_Chat_module = (Chat_module/* default */.Z && Chat_module/* default.locals */.Z.locals ? Chat_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js
var TextareaAutosize = __webpack_require__(87343);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/MeetDetails/Chat/Chat.js









var Chat = function Chat(props) {
  var _React$useState = react.useState(""),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      msg = _React$useState2[0],
      setMsg = _React$useState2[1];

  var _React$useState3 = react.useState(0),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      isShiftActivated = _React$useState4[0],
      setIsShiftActivated = _React$useState4[1];

  var intl = (0,useIntl/* default */.Z)();

  var keyPressedHandler = function keyPressedHandler(e) {
    if (e.key === "Enter" && msg.length > 0 && !isShiftActivated) {
      e.preventDefault();
      props.sendMessageFunction(msg);
      setMsg("");
    }
  };

  var messageInputChangeHandler = function messageInputChangeHandler(e) {
    setMsg(e.target.value);
  };

  var handleSendMsg = function handleSendMsg() {
    if (msg !== "") {
      props.sendMessageFunction(msg);
      setMsg("");
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: Chat_Chat_module.chatContainer,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: Chat_Chat_module.chatSection,
      children: props.messagesList.map(function (message) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: Chat_Chat_module.chatBlock,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: Chat_Chat_module.sender,
            children: [props.currentUserId === message.user.id ? intl.formatMessage({
              id: "you"
            }) : message.user.name, /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
              className: Chat_Chat_module.small,
              children: formatDate(message.time)
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: Chat_Chat_module.textMessage,
            children: message.content
          })]
        }, message.time);
      })
    }), props.canChat ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: Chat_Chat_module.sendMsgSection,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TextareaAutosize/* default */.Z, {
        className: Chat_Chat_module.inputMessage,
        style: {
          maxHeight: msg === "" ? "30px" : "200px"
        },
        maxRows: 10,
        onKeyDownCapture: function onKeyDownCapture(e) {
          e.key === "Shift" && setIsShiftActivated(true);
        },
        onKeyUpCapture: function onKeyUpCapture(e) {
          e.key === "Shift" && setIsShiftActivated(false);
        },
        onKeyPress: keyPressedHandler,
        onChange: messageInputChangeHandler,
        placeholder: intl.formatMessage({
          id: "sendMessageToEveryone"
        }),
        value: msg
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fas fa-paper-plane ".concat(Chat_Chat_module.icon),
        onClick: handleSendMsg
      })]
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: Chat_Chat_module.sendMsgSectionDisabled,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
        className: Chat_Chat_module.messageDisabledText,
        children: "Messaging is disabled by the admin of the room"
      })
    })]
  });
};

/* harmony default export */ var Chat_Chat = (Chat);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/MeetDetails/Participants/Participants.module.css
var Participants_module = __webpack_require__(53447);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/MeetDetails/Participants/Participants.module.css

      
      
      
      
      
      
      
      
      

var Participants_module_options = {};

Participants_module_options.styleTagTransform = (styleTagTransform_default());
Participants_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Participants_module_options.insert = insertBySelector_default().bind(null, "head");
    
Participants_module_options.domAPI = (styleDomAPI_default());
Participants_module_options.insertStyleElement = (insertStyleElement_default());

var Participants_module_update = injectStylesIntoStyleTag_default()(Participants_module/* default */.Z, Participants_module_options);




       /* harmony default export */ var Participants_Participants_module = (Participants_module/* default */.Z && Participants_module/* default.locals */.Z.locals ? Participants_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/MeetDetails/Participants/Participants.js







function Participants(props) {
  var isPinnedPeer = function isPinnedPeer(peerId) {
    return peerId === props.pinnedPeerId;
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: Participants_Participants_module.mainContainer,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: Participants_Participants_module.participantContainer,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: Participants_Participants_module.participantInfoContainer,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: Participants_Participants_module.participantImageContainer,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            className: Participants_Participants_module.participantImage,
            alt: "participant",
            src: props.currentUser.avatar || avatar_blank
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: Participants_Participants_module.participantNameContainer,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("h5", {
            className: Participants_Participants_module.nameText,
            children: ["(", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "you"
            }), ")", " ", props.currentUser.name || "".concat(props.currentUser.firstName, " ").concat(props.currentUser.lastName)]
          })
        })]
      }), !isPinnedPeer("current") ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return props.pinUserFunction("current");
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-thumbtack ".concat(Participants_Participants_module.pinIcon)
        })
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          position: "relative",
          cursor: "pointer"
        },
        onClick: function onClick() {
          return props.unPinUserFunction("current");
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: Participants_Participants_module.pinIconSlash,
          children: "/"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-thumbtack ".concat(Participants_Participants_module.pinIcon)
        })]
      })]
    }), props.participants.map(function (participant, index) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: Participants_Participants_module.participantContainer,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: Participants_Participants_module.participantInfoContainer,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: Participants_Participants_module.participantImageContainer,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              className: Participants_Participants_module.participantImage,
              alt: "participant",
              src: participant.user.avatar || avatar_blank
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: Participants_Participants_module.participantNameContainer,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
              className: Participants_Participants_module.nameText,
              children: participant.user.name || "".concat(participant.user.firstName, " ").concat(participant.user.lastName)
            })
          })]
        }), !isPinnedPeer(participant.peer.id) ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            cursor: "pointer"
          },
          onClick: function onClick() {
            return props.pinUserFunction(participant.peer.id);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fas fa-thumbtack ".concat(Participants_Participants_module.pinIcon)
          })
        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            position: "relative",
            cursor: "pointer"
          },
          onClick: function onClick() {
            return props.unPinUserFunction(participant.peer.id);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: Participants_Participants_module.pinIconSlash,
            children: "/"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fas fa-thumbtack ".concat(Participants_Participants_module.pinIcon)
          })]
        })]
      }, index);
    })]
  });
}

/* harmony default export */ var Participants_Participants = (Participants);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 2 modules
var Switch = __webpack_require__(53272);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/MeetDetails/MeetDetails.js










var MeetDetails = function MeetDetails(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
    className: MeetDetails_MeetDetails_module.mainContainer,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
      className: MeetDetails_MeetDetails_module.messengerContainer,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
          className: MeetDetails_MeetDetails_module.messengerHeader,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
            className: MeetDetails_MeetDetails_module.mainTitle,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "meetingDetails"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fas fa-times ".concat(MeetDetails_MeetDetails_module.icon),
            onClick: function onClick() {
              props.setIsOpenMessenger(0);
            }
          })]
        })
      }), props.isAdmin && /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
            className: MeetDetails_MeetDetails_module.messageInfoText,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "chatPermissionText"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Switch/* default */.Z, {
            checked: props.isMessagingOn,
            color: "primary",
            style: {
              color: "#FAB91A"
            },
            onChange: props.onChangeMessageStatus,
            inputProps: {
              "aria-label": "secondary checkbox"
            }
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
        className: MeetDetails_MeetDetails_module.messengerHeaderTabs,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
          className: MeetDetails_MeetDetails_module.tab,
          style: {
            borderBottom: props.isOpenMessenger === 1 ? "2px solid #FAB91A" : "none"
          },
          onClick: function onClick() {
            return props.setIsOpenMessenger(1);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fas fa-user-friends ".concat(MeetDetails_MeetDetails_module.icon)
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
            className: MeetDetails_MeetDetails_module.navHeaderItem,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "people"
            }), " (", props.participants.length + 1, ")"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
          className: MeetDetails_MeetDetails_module.tab,
          style: {
            borderBottom: props.isOpenMessenger === 2 ? "2px solid #FAB91A" : "none"
          },
          onClick: function onClick() {
            return props.setIsOpenMessenger(2);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fas fa-comment-alt ".concat(MeetDetails_MeetDetails_module.icon)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: MeetDetails_MeetDetails_module.navHeaderItem,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "chat"
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
        className: MeetDetails_MeetDetails_module.contentContainer,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
          style: {
            padding: 0
          },
          children: [props.isOpenMessenger === 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(Participants_Participants, {
            pinnedPeerId: props.pinnedPeerId,
            currentUser: props.currentUser,
            participants: props.participants,
            unPinUserFunction: props.unPinUserFunction,
            pinUserFunction: props.pinUserFunction
          }), props.isOpenMessenger === 2 && /*#__PURE__*/(0,jsx_runtime.jsx)(Chat_Chat, {
            canChat: props.isMessagingOn || props.isAdmin,
            messagesList: props.messagesList,
            currentUserId: props.currentUser.id,
            sendMessageFunction: props.sendMessageFunction
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var MeetDetails_MeetDetails = (MeetDetails);
// EXTERNAL MODULE: ./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(85256);
// EXTERNAL MODULE: ./node_modules/socket.io-client/build/esm/index.js + 28 modules
var esm = __webpack_require__(63992);
// EXTERNAL MODULE: ./node_modules/simple-peer/index.js
var simple_peer = __webpack_require__(38853);
var simple_peer_default = /*#__PURE__*/__webpack_require__.n(simple_peer);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Container.js
var Container = __webpack_require__(98595);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/UserPreviewCard/UserPreviewCard.module.css
var UserPreviewCard_module = __webpack_require__(5884);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/UserPreviewCard/UserPreviewCard.module.css

      
      
      
      
      
      
      
      
      

var UserPreviewCard_module_options = {};

UserPreviewCard_module_options.styleTagTransform = (styleTagTransform_default());
UserPreviewCard_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      UserPreviewCard_module_options.insert = insertBySelector_default().bind(null, "head");
    
UserPreviewCard_module_options.domAPI = (styleDomAPI_default());
UserPreviewCard_module_options.insertStyleElement = (insertStyleElement_default());

var UserPreviewCard_module_update = injectStylesIntoStyleTag_default()(UserPreviewCard_module/* default */.Z, UserPreviewCard_module_options);




       /* harmony default export */ var UserPreviewCard_UserPreviewCard_module = (UserPreviewCard_module/* default */.Z && UserPreviewCard_module/* default.locals */.Z.locals ? UserPreviewCard_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/UserPreviewCard/UserPreviewCard.js









var UserPreviewCard = function UserPreviewCard(props) {
  var ref = react.useRef();

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      hoverCard = _React$useState2[0],
      setHoverCard = _React$useState2[1];

  var _React$useState3 = react.useState(0),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      soundActivity = _React$useState4[0],
      setSoundActivity = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      minimizedCard = _React$useState6[0],
      setMinimizedCard = _React$useState6[1];

  react.useEffect(function () {
    if (ref.current) ref.current.srcObject = props.videoStream;
  }, [props.isAudioOn, props.videoStream]);
  react.useEffect(function () {
    var audioContext = new AudioContext();
    var voiceDectionOptions = {
      onUpdate: function onUpdate(activityValue) {
        setSoundActivity(activityValue);
      }
    };
    voice_activity_detection(audioContext, props.audioStream, voiceDectionOptions);
  }, [props]);
  if (minimizedCard) return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: UserPreviewCard_UserPreviewCard_module.minimizedMainContainer,
    children: hoverCard && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: UserPreviewCard_UserPreviewCard_module.minimizedControlContainer,
      children: [!props.isAudioOn ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: UserPreviewCard_UserPreviewCard_module.menuItem,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-microphone-slash ".concat(UserPreviewCard_UserPreviewCard_module.microIcon)
        })
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: UserPreviewCard_UserPreviewCard_module.menuItem,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(WaveVisualizer_WaveVisualizer, {
          soundActivity: soundActivity
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: UserPreviewCard_UserPreviewCard_module.menuItem,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: " ".concat(props.isVideo ? "fas fa-video" : "fas fa-video-slash", " ").concat(UserPreviewCard_UserPreviewCard_module.controlIcon)
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
          className: UserPreviewCard_UserPreviewCard_module.youText,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "you"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%"
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: UserPreviewCard_UserPreviewCard_module.menuControlItem,
          onClick: function onClick() {
            return setMinimizedCard(false);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fa-solid fa-arrows-up-down-left-right ".concat(UserPreviewCard_UserPreviewCard_module.controlIcon)
          })
        })
      })]
    })
  });else return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: UserPreviewCard_UserPreviewCard_module.mainContainer,
    onMouseEnter: function onMouseEnter() {
      return setHoverCard(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHoverCard(false);
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: UserPreviewCard_UserPreviewCard_module.videoContainer,
      style: {
        display: !props.isVideoOn ? "none" : "block"
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("video", {
        className: UserPreviewCard_UserPreviewCard_module.video,
        muted: true,
        playsInline: true,
        autoPlay: true,
        ref: ref
      })
    }), !props.isVideoOn && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: UserPreviewCard_UserPreviewCard_module.mainUserInfoContainer,
      children: [hoverCard && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: UserPreviewCard_UserPreviewCard_module.controlContainer,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: UserPreviewCard_UserPreviewCard_module.menuControlItem,
          onClick: function onClick() {
            return setMinimizedCard(true);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fa-solid fa-minimize ".concat(UserPreviewCard_UserPreviewCard_module.controlIcon)
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: UserPreviewCard_UserPreviewCard_module.menuControlItem,
          onClick: props.pinUserFunction,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fas fa-thumbtack ".concat(UserPreviewCard_UserPreviewCard_module.controlIcon)
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: UserPreviewCard_UserPreviewCard_module.menuControlItem,
          onClick: props.unPinUserFunction,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fa-solid fa-border-all ".concat(UserPreviewCard_UserPreviewCard_module.controlIcon)
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: props.image,
        className: UserPreviewCard_UserPreviewCard_module.userImage
      })]
    }), !props.isAudioOn && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: UserPreviewCard_UserPreviewCard_module.centerItemIconBlock,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fas fa-microphone-slash ".concat(UserPreviewCard_UserPreviewCard_module.microIcon)
      })
    })]
  });
};

/* harmony default export */ var UserPreviewCard_UserPreviewCard = (UserPreviewCard);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Modal.js + 1 modules
var Modal = __webpack_require__(85677);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Button.js
var Button = __webpack_require__(97975);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/InvitationModal/InvitationModal.module.css
var InvitationModal_module = __webpack_require__(83979);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/InvitationModal/InvitationModal.module.css

      
      
      
      
      
      
      
      
      

var InvitationModal_module_options = {};

InvitationModal_module_options.styleTagTransform = (styleTagTransform_default());
InvitationModal_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      InvitationModal_module_options.insert = insertBySelector_default().bind(null, "head");
    
InvitationModal_module_options.domAPI = (styleDomAPI_default());
InvitationModal_module_options.insertStyleElement = (insertStyleElement_default());

var InvitationModal_module_update = injectStylesIntoStyleTag_default()(InvitationModal_module/* default */.Z, InvitationModal_module_options);




       /* harmony default export */ var InvitationModal_InvitationModal_module = (InvitationModal_module/* default */.Z && InvitationModal_module/* default.locals */.Z.locals ? InvitationModal_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/InvitationModal/InvitationModal.js








var InvitationModal = function InvitationModal(props) {
  var toggle = function toggle() {
    return props.toggle(!props.isOpen);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
    isOpen: props.isOpen,
    toggle: function toggle() {},
    centered: true,
    contentClassName: InvitationModal_InvitationModal_module.contentClassName,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: InvitationModal_InvitationModal_module.headerContainer,
      children: [props.requestedUsers.length === 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)("h5", {
        className: InvitationModal_InvitationModal_module.modelHeader,
        children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "joinSingle"
        })]
      }), props.requestedUsers.length > 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)("h5", {
        className: InvitationModal_InvitationModal_module.modelHeader,
        children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "joinMultiple"
        }), " "]
      })]
    }), props.requestedUsers.length === 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: InvitationModal_InvitationModal_module.userInfoContainer,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        className: InvitationModal_InvitationModal_module.userImage,
        src: props.requestedUsers[0].avatar || avatar_blank
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        className: InvitationModal_InvitationModal_module.userNameText,
        children: props.requestedUsers[0].name
      })]
    }), props.requestedUsers.length > 1 && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: props.requestedUsers.map(function (user) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: InvitationModal_InvitationModal_module.mainUserItemContainer,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: InvitationModal_InvitationModal_module.userInfoContainer,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              className: InvitationModal_InvitationModal_module.userImage,
              src: user.photo || avatar_blank
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              className: InvitationModal_InvitationModal_module.userNameText,
              children: user.name
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: InvitationModal_InvitationModal_module.userInfoContainer,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
              className: InvitationModal_InvitationModal_module.modalButton,
              style: {
                fontSize: "13px"
              },
              color: "primary",
              onClick: function onClick() {
                return props.refusePerson(user.socketId);
              },
              children: "Refuse"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
              className: InvitationModal_InvitationModal_module.modalButton,
              style: {
                fontSize: "13px"
              },
              color: "primary",
              onClick: function onClick() {
                return props.onAcceptPerson(user.socketId);
              },
              children: "Accept"
            })]
          })]
        }, user.id);
      })
    }), props.requestedUsers.length === 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: InvitationModal_InvitationModal_module.modalFooter,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
        className: InvitationModal_InvitationModal_module.modalButton,
        color: "primary",
        onClick: props.refuseAll,
        children: "Refuse"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
        className: InvitationModal_InvitationModal_module.modalButton,
        color: "primary",
        onClick: props.onAcceptAll,
        children: "Accept"
      })]
    }), props.requestedUsers.length > 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: InvitationModal_InvitationModal_module.modalFooter,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
        className: InvitationModal_InvitationModal_module.modalButton,
        color: "primary",
        onClick: props.refuseAll,
        children: "Refuse all"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
        className: InvitationModal_InvitationModal_module.modalButton,
        color: "primary",
        onClick: props.onAcceptAll,
        children: "Accept all"
      })]
    })]
  });
};

/* harmony default export */ var InvitationModal_InvitationModal = (InvitationModal);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Spinner.js
var Spinner = __webpack_require__(36955);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/LoadingCall/LoadingCall.module.css
var LoadingCall_module = __webpack_require__(83394);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/LoadingCall/LoadingCall.module.css

      
      
      
      
      
      
      
      
      

var LoadingCall_module_options = {};

LoadingCall_module_options.styleTagTransform = (styleTagTransform_default());
LoadingCall_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      LoadingCall_module_options.insert = insertBySelector_default().bind(null, "head");
    
LoadingCall_module_options.domAPI = (styleDomAPI_default());
LoadingCall_module_options.insertStyleElement = (insertStyleElement_default());

var LoadingCall_module_update = injectStylesIntoStyleTag_default()(LoadingCall_module/* default */.Z, LoadingCall_module_options);




       /* harmony default export */ var LoadingCall_LoadingCall_module = (LoadingCall_module/* default */.Z && LoadingCall_module/* default.locals */.Z.locals ? LoadingCall_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/LoadingCall/LoadingCall.js






var LoadingCall = function LoadingCall() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
    fluid: true,
    className: LoadingCall_LoadingCall_module.mainContainer,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
      className: LoadingCall_LoadingCall_module.loadingContainer,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
        className: LoadingCall_LoadingCall_module.loadingContentContainer,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Spinner/* default */.Z, {
          color: "primary"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
          className: LoadingCall_LoadingCall_module.loadingText,
          children: "Loading..."
        })]
      })
    })
  });
};

/* harmony default export */ var LoadingCall_LoadingCall = (LoadingCall);
// EXTERNAL MODULE: ./node_modules/react-howler/lib/index.js
var lib = __webpack_require__(88913);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/views/apps/meet/assets/audio/join-call.mp3
/* harmony default export */ var join_call = (__webpack_require__.p + "12e2a0ab8cb537d6088d4988cb9c4e46.mp3");
;// CONCATENATED MODULE: ./src/views/apps/meet/assets/audio/ask-to-join.mp3
/* harmony default export */ var ask_to_join = (__webpack_require__.p + "9f32f5a7e125179b26107931650a7561.mp3");
;// CONCATENATED MODULE: ./src/views/apps/meet/assets/audio/meet-message.mp3
/* harmony default export */ var meet_message = (__webpack_require__.p + "7b23ddf9f693af1abe5cc15e7e6c1715.mp3");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/Notification/Notification.module.css
var Notification_module = __webpack_require__(43808);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/Notification/Notification.module.css

      
      
      
      
      
      
      
      
      

var Notification_module_options = {};

Notification_module_options.styleTagTransform = (styleTagTransform_default());
Notification_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Notification_module_options.insert = insertBySelector_default().bind(null, "head");
    
Notification_module_options.domAPI = (styleDomAPI_default());
Notification_module_options.insertStyleElement = (insertStyleElement_default());

var Notification_module_update = injectStylesIntoStyleTag_default()(Notification_module/* default */.Z, Notification_module_options);




       /* harmony default export */ var Notification_Notification_module = (Notification_module/* default */.Z && Notification_module/* default.locals */.Z.locals ? Notification_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/Notification/Notification.js




var Notification = function Notification(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: Notification_Notification_module.mainContainer,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: Notification_Notification_module.notificationContentContainer,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
        className: Notification_Notification_module.notificationContentText,
        children: props.content
      })
    })
  });
};

/* harmony default export */ var Notification_Notification = (Notification);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetCall/UserCard/UserCard.module.css
var UserCard_module = __webpack_require__(80730);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/UserCard/UserCard.module.css

      
      
      
      
      
      
      
      
      

var UserCard_module_options = {};

UserCard_module_options.styleTagTransform = (styleTagTransform_default());
UserCard_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      UserCard_module_options.insert = insertBySelector_default().bind(null, "head");
    
UserCard_module_options.domAPI = (styleDomAPI_default());
UserCard_module_options.insertStyleElement = (insertStyleElement_default());

var UserCard_module_update = injectStylesIntoStyleTag_default()(UserCard_module/* default */.Z, UserCard_module_options);




       /* harmony default export */ var UserCard_UserCard_module = (UserCard_module/* default */.Z && UserCard_module/* default.locals */.Z.locals ? UserCard_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/UserCard/UserCard.js










var UserCard = function UserCard(props) {
  var ref = react.useRef();

  var _React$useState = react.useState(0),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      soundActivity = _React$useState2[0],
      setSoundActivity = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      showmenuOptions = _React$useState4[0],
      setShowMenuOptions = _React$useState4[1];

  react.useEffect(function () {
    if (ref.current) ref.current.srcObject = props.stream;
  }, [props.streamVideo, props.isAudioOn, props.isVideoOn]);
  react.useEffect(function () {
    var audioContext = new AudioContext();
    var voiceDectionOptions = {
      onUpdate: function onUpdate(activityValue) {
        setSoundActivity(activityValue);
        props.registerSoundActivity(activityValue);
      }
    };
    voice_activity_detection(audioContext, props.stream, voiceDectionOptions);
  }, [props.peerId]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
    style: {
      borderColor: "".concat(props.isLastSpeaker ? '#FAB91A' : 'transparent')
    },
    onMouseEnter: function onMouseEnter() {
      return setShowMenuOptions(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShowMenuOptions(false);
    },
    onDoubleClick: props.onClick,
    className: props.isVideoOn ? UserCard_UserCard_module.mainContainerVideoOn : UserCard_UserCard_module.mainContainerVideoOff,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
      style: {
        padding: '0'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: UserCard_UserCard_module.soundActivity,
        children: soundActivity
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: UserCard_UserCard_module.videoContainer,
        style: {
          display: !props.isVideoOn ? 'none' : 'block'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("video", {
          className: UserCard_UserCard_module.video,
          muted: true,
          playsInline: true,
          autoPlay: true,
          ref: ref
        })
      }), !props.isVideoOn && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: UserCard_UserCard_module.mainUserContainer,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: UserCard_UserCard_module.userImageContainer,
          style: {
            borderWidth: "".concat(100 * +soundActivity, "px")
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: UserCard_UserCard_module.userImage,
            style: {
              backgroundImage: "url(".concat(props.image, ")")
            }
          })
        })
      }), !props.isAudioOn ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: UserCard_UserCard_module.centerItemIconBlock,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "fas fa-microphone-slash ".concat(UserCard_UserCard_module.microIcon)
        })
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: UserCard_UserCard_module.centerItemIconBlockVoice,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(WaveVisualizer_WaveVisualizer, {
          soundActivity: soundActivity
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: UserCard_UserCard_module.userInfoContainer,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
          className: UserCard_UserCard_module.userNameText,
          children: props.name
        })
      }), showmenuOptions && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: UserCard_UserCard_module.menuControlsContainer,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: UserCard_UserCard_module.menuControlItem,
          onClick: props.pinUserFunction,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "fas fa-thumbtack ".concat(UserCard_UserCard_module.controlIcon)
          })
        }), props.peerId !== 'current' && props.isAdmin && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [!props.isAudioOn ? /*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.ZP, {
            arrow: true,
            PopperProps: {
              disablePortal: true
            },
            disableFocusListener: true,
            disableTouchListener: true,
            title: "You cant reactive a user micro",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: UserCard_UserCard_module.menuControlItem,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                className: "fas fa-microphone-slash ".concat(UserCard_UserCard_module.controlIcon)
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: UserCard_UserCard_module.menuControlItem,
            onClick: props.muteUserFunction,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-microphone-slash ".concat(UserCard_UserCard_module.controlIcon)
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: UserCard_UserCard_module.menuControlItem,
            onClick: function onClick() {
              return props.excludeUserFunction(props.name);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "fas fa-minus-circle ".concat(UserCard_UserCard_module.controlIcon)
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ var UserCard_UserCard = (UserCard);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/utility/context/Socket.js
var Socket = __webpack_require__(6607);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetCall/MeetCall.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



























var MeetCall = function MeetCall(props) {
  var _props$selectedDevice9;

  var store = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  });
  var peersRef = react.useRef([]);

  var _React$useState = react.useState(),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      streamObj = _React$useState2[0],
      setStreamObj = _React$useState2[1];

  var _React$useState3 = react.useState(null),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      screenCastStream = _React$useState4[0],
      setScreenCastStream = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      isPresenting = _React$useState6[0],
      setIsPresenting = _React$useState6[1];

  var history = (0,react_router/* useHistory */.k6)();
  var url = "".concat(window.location.origin).concat(window.location.pathname);

  var _React$useState7 = react.useState(false),
      _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
      meetInfoPopup = _React$useState8[0],
      setMeetInfoPopup = _React$useState8[1];

  var _React$useState9 = react.useState([]),
      _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
      messagesList = _React$useState10[0],
      setListMessages = _React$useState10[1];

  var _React$useState11 = react.useState([]),
      _React$useState12 = (0,slicedToArray/* default */.Z)(_React$useState11, 2),
      participants = _React$useState12[0],
      setParticipants = _React$useState12[1];

  var _React$useState13 = react.useState(false),
      _React$useState14 = (0,slicedToArray/* default */.Z)(_React$useState13, 2),
      isOpenMessenger = _React$useState14[0],
      setIsOpenMessenger = _React$useState14[1];

  var _React$useState15 = react.useState(null),
      _React$useState16 = (0,slicedToArray/* default */.Z)(_React$useState15, 2),
      notificationMessage = _React$useState16[0],
      setNotificationMessage = _React$useState16[1];

  var _React$useState17 = react.useState(props.settings.isAudio),
      _React$useState18 = (0,slicedToArray/* default */.Z)(_React$useState17, 2),
      isAudio = _React$useState18[0],
      setIsAudio = _React$useState18[1];

  var _React$useState19 = react.useState(props.settings.isVideo),
      _React$useState20 = (0,slicedToArray/* default */.Z)(_React$useState19, 2),
      isVideo = _React$useState20[0],
      setIsVideo = _React$useState20[1];

  var _React$useState21 = react.useState('current'),
      _React$useState22 = (0,slicedToArray/* default */.Z)(_React$useState21, 2),
      pinnedUser = _React$useState22[0],
      setPinnedUser = _React$useState22[1];

  var _React$useState23 = react.useState([]),
      _React$useState24 = (0,slicedToArray/* default */.Z)(_React$useState23, 2),
      requestedUsers = _React$useState24[0],
      setRequestedUsers = _React$useState24[1];

  var _React$useState25 = react.useState(true),
      _React$useState26 = (0,slicedToArray/* default */.Z)(_React$useState25, 2),
      loadingPeers = _React$useState26[0],
      setLoadingPeers = _React$useState26[1];

  var _React$useState27 = react.useState(false),
      _React$useState28 = (0,slicedToArray/* default */.Z)(_React$useState27, 2),
      isOpenInvitationModal = _React$useState28[0],
      setIsOpenInvitationModal = _React$useState28[1];

  var _React$useState29 = react.useState(false),
      _React$useState30 = (0,slicedToArray/* default */.Z)(_React$useState29, 2),
      playingSoundUserRequest = _React$useState30[0],
      setPlayingSoundUserRequest = _React$useState30[1];

  var _React$useState31 = react.useState(false),
      _React$useState32 = (0,slicedToArray/* default */.Z)(_React$useState31, 2),
      playingSoundUserJoined = _React$useState32[0],
      setPlayingSoundUserJoined = _React$useState32[1];

  var _React$useState33 = react.useState(null),
      _React$useState34 = (0,slicedToArray/* default */.Z)(_React$useState33, 2),
      notification = _React$useState34[0],
      setNotification = _React$useState34[1];

  var notificationTimer = react.useRef(null);
  var notificationMessageTimer = react.useRef(null);

  var _React$useState35 = react.useState(false),
      _React$useState36 = (0,slicedToArray/* default */.Z)(_React$useState35, 2),
      isOpenSideBar = _React$useState36[0],
      setIsOpenSideBar = _React$useState36[1];

  var _React$useState37 = react.useState(false),
      _React$useState38 = (0,slicedToArray/* default */.Z)(_React$useState37, 2),
      playingMessageReceived = _React$useState38[0],
      setPlayingMessageReceived = _React$useState38[1];

  var firstLaunch = react.useRef(true);

  var _React$useState39 = react.useState(null),
      _React$useState40 = (0,slicedToArray/* default */.Z)(_React$useState39, 2),
      lastSpeaker = _React$useState40[0],
      setLastSpeaker = _React$useState40[1];

  var speakerInterval = react.useRef(null);

  var _React$useState41 = react.useState(null),
      _React$useState42 = (0,slicedToArray/* default */.Z)(_React$useState41, 2),
      isMessagingOn = _React$useState42[0],
      setIsMessagingOn = _React$useState42[1];

  var timeOutReaction = react.useRef(null);

  var _React$useState43 = react.useState(null),
      _React$useState44 = (0,slicedToArray/* default */.Z)(_React$useState43, 2),
      showReaction = _React$useState44[0],
      setShowReaction = _React$useState44[1];

  var socketRef = (0,react.useContext)(Socket/* SocketContext */.J);
  react.useEffect(function () {
    if (props.selectedDevices && streamObj) {
      var _props$selectedDevice, _props$selectedDevice2, _props$selectedDevice3, _props$selectedDevice4, _props$selectedDevice5, _props$selectedDevice6, _props$selectedDevice7, _props$selectedDevice8;

      var constraints = {
        audio: {
          deviceId: props !== null && props !== void 0 && (_props$selectedDevice = props.selectedDevices) !== null && _props$selectedDevice !== void 0 && (_props$selectedDevice2 = _props$selectedDevice.audioInput) !== null && _props$selectedDevice2 !== void 0 && _props$selectedDevice2.deviceId ? {
            exact: (_props$selectedDevice3 = props.selectedDevices) === null || _props$selectedDevice3 === void 0 ? void 0 : (_props$selectedDevice4 = _props$selectedDevice3.audioInput) === null || _props$selectedDevice4 === void 0 ? void 0 : _props$selectedDevice4.deviceId
          } : undefined
        },
        video: {
          deviceId: props !== null && props !== void 0 && (_props$selectedDevice5 = props.selectedDevices) !== null && _props$selectedDevice5 !== void 0 && (_props$selectedDevice6 = _props$selectedDevice5.videoInput) !== null && _props$selectedDevice6 !== void 0 && _props$selectedDevice6.deviceId ? {
            exact: (_props$selectedDevice7 = props.selectedDevices) === null || _props$selectedDevice7 === void 0 ? void 0 : (_props$selectedDevice8 = _props$selectedDevice7.videoInput) === null || _props$selectedDevice8 === void 0 ? void 0 : _props$selectedDevice8.deviceId
          } : undefined
        }
      };
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        setIsAudio(function (audio) {
          if (!audio) {
            stream.getAudioTracks().forEach(function (track) {
              return track.stop();
            });
          }

          return audio;
        });
        setIsVideo(function (video) {
          if (!video) {
            stream.getVideoTracks().forEach(function (track) {
              return track.stop();
            });
            return video;
          }
        });
        setParticipants(function (_participants) {
          _participants.map(function (p) {
            return p.peer;
          }).forEach(function (peer) {
            peer.replaceTrack(streamObj.getAudioTracks()[0], stream.getAudioTracks()[0], streamObj);
            setIsPresenting(function (_presenting) {
              if (!_presenting) peer.replaceTrack(streamObj.getVideoTracks()[0], stream.getVideoTracks()[0], streamObj);
              return _presenting;
            });
          });

          return _participants;
        });
        setStreamObj(function (_streamObj) {
          var streamObjCopy = _streamObj;
          streamObjCopy.removeTrack(_streamObj.getAudioTracks()[0]);
          streamObjCopy.addTrack(stream.getAudioTracks()[0]);
          streamObjCopy.removeTrack(_streamObj.getVideoTracks()[0]);
          streamObjCopy.addTrack(stream.getVideoTracks()[0]);
          return streamObjCopy;
        });
      });
    } // eslint-disable-next-line

  }, [props.selectedDevices]);
  react.useEffect(function () {
    if (props.selectedDevices) {
      var audiosElements = document.querySelectorAll('.audio-meet');
      audiosElements.forEach( /*#__PURE__*/function () {
        var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(audioElement) {
          return regenerator_default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return audioElement.setSinkId(props.selectedDevices.audioOutput.deviceId);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    } // eslint-disable-next-line

  }, [(_props$selectedDevice9 = props.selectedDevices) === null || _props$selectedDevice9 === void 0 ? void 0 : _props$selectedDevice9.audioOutput]);
  react.useEffect(function () {
    var _props$selectedDevice10, _props$selectedDevice11, _props$selectedDevice12, _props$selectedDevice13;

    firstLaunch.current = false;
    setIsMessagingOn(props.isMessagingOn);

    if (props.isAdmin) {
      setMeetInfoPopup(true);
      socketRef.on('request-received', function (_ref2) {
        var user = _ref2.user,
            socketId = _ref2.socketId;
        setPlayingSoundUserRequest(true);
        var name = user.name || "".concat(user.firstName, " ").concat(user.lastName);
        setRequestedUsers(function (_requestedUsers) {
          return [].concat((0,toConsumableArray/* default */.Z)(_requestedUsers), [{
            name: name,
            socketId: socketId,
            photo: user.avatar
          }]);
        });
        setIsOpenInvitationModal(true);
      });
    }

    var constraints = {
      audio: {
        deviceId: (_props$selectedDevice10 = props.selectedDevices) === null || _props$selectedDevice10 === void 0 ? void 0 : (_props$selectedDevice11 = _props$selectedDevice10.audioInput) === null || _props$selectedDevice11 === void 0 ? void 0 : _props$selectedDevice11.deviceId
      },
      video: {
        deviceId: (_props$selectedDevice12 = props.selectedDevices) === null || _props$selectedDevice12 === void 0 ? void 0 : (_props$selectedDevice13 = _props$selectedDevice12.videoInput) === null || _props$selectedDevice13 === void 0 ? void 0 : _props$selectedDevice13.deviceId
      }
    };
    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
      if (!props.settings.isAudio) {
        stream.getAudioTracks().forEach(function (track) {
          return track.enabled = false;
        });
      }

      if (!props.settings.isVideo) {
        stream.getVideoTracks().forEach(function (track) {
          return track.stop();
        });
      }

      setStreamObj(stream);
      socketRef.emit("join room", {
        roomID: props.roomID,
        user: store.userData,
        state: props.settings
      });
      socketRef.on("all users", function (users) {
        if (users.length === 0) {
          setLoadingPeers(false);
          setPlayingSoundUserJoined(true);
        }

        users.forEach(function (userObj, userIndex) {
          var peer = createPeer(userObj.socketId, socketRef.id, stream);
          peersRef.current.push({
            peerID: userObj.socketId,
            peer: peer
          });
          peer.on('stream', /*#__PURE__*/function () {
            var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(stream) {
              var audiosContainer, newAudioElement;
              return regenerator_default().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      setParticipants(function (_participants) {
                        var newParticipants = [].concat((0,toConsumableArray/* default */.Z)(_participants), [{
                          peer: peer,
                          user: userObj.user,
                          state: userObj.state,
                          stream: stream,
                          socketId: userObj.socketId
                        }]);

                        if (users.length > 0) {
                          setPinnedUser({
                            peer: peer,
                            user: userObj.user,
                            state: userObj.state,
                            stream: stream,
                            socketId: userObj.socketId
                          });
                        }

                        if (users.length - 1 === userIndex) {
                          setLoadingPeers(false);
                          setPlayingSoundUserJoined(true);
                        }

                        return newParticipants;
                      });
                      audiosContainer = document.getElementById('audios');
                      newAudioElement = document.createElement('audio');
                      newAudioElement.classList.add("audio-meet");
                      newAudioElement.srcObject = stream;
                      _context2.next = 7;
                      return newAudioElement.setSinkId(props.selectedDevices.audioOutput.deviceId);

                    case 7:
                      newAudioElement.play();
                      audiosContainer.appendChild(newAudioElement);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }());
        });
      });
      socketRef.on("user joined", function (payload) {
        var peer = addPeer(payload.signal, payload.callerID, stream, payload.user, payload.state);
        peersRef.current.push({
          peerID: payload.callerID,
          peer: peer
        });
        peer.on('stream', function (stream) {
          var audiosContainer = document.getElementById('audios');
          var newAudioElement = document.createElement('audio');
          newAudioElement.classList.add("audio-meet");
          newAudioElement.srcObject = stream;
          newAudioElement.play();
          audiosContainer.appendChild(newAudioElement);
          setPlayingSoundUserJoined(true);
          setParticipants(function (_participants) {
            var newParticipants = [].concat((0,toConsumableArray/* default */.Z)(_participants), [{
              peer: peer,
              user: payload.user,
              stream: stream,
              state: payload.state,
              socketId: payload.callerID
            }]);
            if (_participants.length === 0) setPinnedUser({
              peer: peer,
              user: payload.user,
              stream: stream,
              state: payload.state,
              socketId: payload.callerID
            });
            return newParticipants;
          });
        });
      });
      socketRef.on('user-disconnect', function (socketId) {
        peersRef.current = peersRef.current.filter(function (peerRef) {
          return peerRef.peerID !== socketId;
        });
        setParticipants(function (_participants) {
          var participantIndex = _participants.findIndex(function (_participant) {
            return _participant.socketId === socketId;
          });

          var participantCopy = (0,toConsumableArray/* default */.Z)(_participants);

          if (participantIndex >= 0) {
            var disconnectedUser = participantCopy[participantIndex].user;
            setNotification("".concat(disconnectedUser.name || "".concat(disconnectedUser.firstName, " ").concat(disconnectedUser.lastName), " has left the meeting"));
            participantCopy[participantIndex].peer.destroy();
            participantCopy.splice(participantIndex, 1);
            setPinnedUser(function (_pinnedUser) {
              if (participantCopy.length === 0) return 'current';

              if (_pinnedUser && _pinnedUser !== 'current' && _pinnedUser.socketId === socketId) {
                return null;
              } else {
                return _pinnedUser;
              }
            });
          }

          return participantCopy;
        });
      });
      socketRef.on('muted-user-micro', function () {
        setStreamObj(function (_stream) {
          _stream.getAudioTracks().forEach(function (track) {
            return track.enabled = false;
          });

          return _stream;
        });
        socketRef.emit('user-disable-audio', {
          value: false
        });
        setIsAudio(false);
      });
      socketRef.on('user-shared-screen', function () {
        setPlayingSoundUserJoined(true);
      });
      socketRef.on('user-sended-emoji', function (_ref4) {
        var username = _ref4.username,
            emoji = _ref4.emoji;
        var reaction;

        switch (emoji) {
          case 'thumb':
            reaction = "".concat(username, " Reacted \uD83D\uDC4D");
            break;

          case 'clap':
            reaction = "".concat(username, " Reacted \uD83D\uDC4F");
            break;

          case 'laugh':
            reaction = "".concat(username, " Reacted \uD83D\uDE06");
            break;

          case 'heart':
            reaction = "".concat(username, " Reacted \u2764\uFE0F");
            break;

          case 'open_mouth':
            reaction = "".concat(username, " Reacted \uD83D\uDE2E");
            break;

          case 'party':
            reaction = "".concat(username, " Reacted \uD83C\uDF89");
            break;

          case 'raise_hand':
            reaction = "\u270B ".concat(username, " Raised his hand");
            break;

          default:
            break;
        }

        setShowReaction(reaction);

        if (timeOutReaction !== null && timeOutReaction !== void 0 && timeOutReaction.current) {
          clearInterval(timeOutReaction.current);
        }

        timeOutReaction.current = setTimeout(function () {
          setShowReaction(null);
        }, 4000);
      });
      socketRef.on('user-excluded', function () {
        socketRef.close();
        peersRef.current.forEach(function (peerObj) {
          return peerObj.peer.destroy();
        });
        peersRef.current = [];
        setParticipants(function (_participants) {
          _participants.forEach(function (part) {
            return part.peer.destroy();
          });

          return [];
        });
        props.userExcludedFunction();
      });
      socketRef.on('disable-user-video', function (_ref5) {
        var userId = _ref5.userId,
            value = _ref5.value;
        setParticipants(function (_participants) {
          var _participantsCopy = (0,toConsumableArray/* default */.Z)(_participants);

          var participantIndex = _participantsCopy.findIndex(function (part) {
            return part.socketId === userId;
          });

          if (participantIndex >= 0) _participantsCopy[participantIndex].state.isVideo = value;
          return _participantsCopy;
        });
      });
      socketRef.on('disable-user-audio', function (_ref6) {
        var userId = _ref6.userId,
            value = _ref6.value;
        setParticipants(function (_participants) {
          var _participantsCopy = (0,toConsumableArray/* default */.Z)(_participants);

          var participantIndex = _participantsCopy.findIndex(function (part) {
            return part.socketId === userId;
          });

          if (participantIndex >= 0) _participantsCopy[participantIndex].state.isAudio = value;
          return _participantsCopy;
        });
      });
      socketRef.on('messagin-state-changed', function (_ref7) {
        var value = _ref7.value;
        setIsMessagingOn(value);
      });
      socketRef.on("receiving returned signal", function (payload) {
        var item = peersRef.current.find(function (p) {
          return p.peerID === payload.id;
        });
        item.peer.signal(payload.signal);
      });
      socketRef.on("receive-message-meet", function (_ref8) {
        var message = _ref8.message;
        setListMessages(function (messagesList) {
          return [].concat((0,toConsumableArray/* default */.Z)(messagesList), [message]);
        });
        if (!isOpenMessenger) setNotificationMessage(message);
        setPlayingMessageReceived(true);
      });
    });
    return function () {
      socketRef.close();
      peersRef.current.forEach(function (peerObj) {
        return peerObj.peer.destroy();
      });
      peersRef.current = [];
      setParticipants(function (_participants) {
        _participants.forEach(function (part) {
          return part.peer.destroy();
        });

        return [];
      });
    }; // eslint-disable-next-line
  }, []);
  react.useEffect(function () {
    return function () {
      if (streamObj) {
        streamObj.getTracks().forEach(function (track) {
          return track.stop();
        });
      }
    };
  }, [streamObj]);
  react.useEffect(function () {
    return function () {
      if (screenCastStream) {
        screenCastStream.getTracks().forEach(function (track) {
          return track.stop();
        });
      }
    };
  }, [screenCastStream]);
  react.useEffect(function () {
    if (notification) {
      if (notificationTimer.current) clearInterval(notificationTimer.current);
      notificationTimer.current = setTimeout(function () {
        setNotification(null);
      }, 4000);
    }
  }, [notification]);
  react.useEffect(function () {
    if (notificationMessage) {
      if (notificationMessageTimer.current) clearInterval(notificationMessageTimer.current);
      notificationMessageTimer.current = setTimeout(function () {
        setNotificationMessage(null);
      }, 4000);
    }
  }, [notificationMessage]);

  var createPeer = function createPeer(userToSignal, callerID, stream) {
    var peer = new (simple_peer_default())({
      initiator: true,
      trickle: false,
      stream: stream
    });
    peer.on("signal", function (signal) {
      socketRef.emit("sending signal", {
        userToSignal: userToSignal,
        callerID: callerID,
        signal: signal,
        user: store.userData,
        state: props.settings
      });
    });
    return peer;
  };

  var addPeer = function addPeer(incomingSignal, callerID, stream, user, state) {
    var peer = new (simple_peer_default())({
      initiator: false,
      trickle: false,
      stream: stream
    });
    peer.on("signal", function (signal) {
      socketRef.emit("returning signal", {
        signal: signal,
        callerID: callerID,
        user: user,
        state: state
      });
    });
    peer.signal(incomingSignal);
    return peer;
  };

  var shareScreenHandler = function shareScreenHandler() {
    navigator.mediaDevices.getDisplayMedia({
      cursor: true
    }).then(function (screenStream) {
      setScreenCastStream(screenStream);

      screenStream.getTracks()[0].onended = function () {
        participants.map(function (p) {
          return p.peer;
        }).forEach(function (peer) {
          peer.replaceTrack(screenStream.getVideoTracks()[0], streamObj.getVideoTracks()[0], streamObj);
        });
        if (!isVideo) socketRef.emit('user-disable-video', {
          value: false
        });
        setIsPresenting(false);
      };

      participants.map(function (p) {
        return p.peer;
      }).forEach(function (peer) {
        peer.replaceTrack(streamObj.getVideoTracks()[0], screenStream.getVideoTracks()[0], streamObj);
      });
      socketRef.emit('user-disable-video', {
        value: true
      });
      socketRef.emit('user-share-screen');
      setIsPresenting(true);
    });
  };

  var stopScreenShareHandler = function stopScreenShareHandler() {
    setIsPresenting(false);
    if (!isVideo) socketRef.emit('user-disable-video', {
      value: false
    });
    screenCastStream.getVideoTracks().forEach(function (track) {
      track.stop();
    });
    participants.map(function (p) {
      return p.peer;
    }).forEach(function (peer) {
      peer.replaceTrack(screenCastStream.getVideoTracks()[0], streamObj.getVideoTracks()[0], streamObj);
    });
  };

  var disconnectCallHandler = function disconnectCallHandler() {
    window.location.href = "http://localhost:3000";
    window.close();
  };

  var toggleAudioHandler = function toggleAudioHandler(value) {
    streamObj.getAudioTracks().forEach(function (track) {
      return track.enabled = value;
    });
    socketRef.emit('user-disable-audio', {
      value: value
    });
    setIsAudio(value);
  };

  var toggleVideoHandler = function toggleVideoHandler(value) {
    if (!value) streamObj.getVideoTracks().forEach(function (track) {
      return track.stop();
    });else {
      var _props$selectedDevice14, _props$selectedDevice15, _props$selectedDevice16, _props$selectedDevice17, _props$selectedDevice18, _props$selectedDevice19, _props$selectedDevice20, _props$selectedDevice21;

      var constraints = {
        audio: {
          deviceId: (_props$selectedDevice14 = props.selectedDevices) !== null && _props$selectedDevice14 !== void 0 && (_props$selectedDevice15 = _props$selectedDevice14.audioInput) !== null && _props$selectedDevice15 !== void 0 && _props$selectedDevice15.deviceId ? {
            exact: (_props$selectedDevice16 = props.selectedDevices) === null || _props$selectedDevice16 === void 0 ? void 0 : (_props$selectedDevice17 = _props$selectedDevice16.audioInput) === null || _props$selectedDevice17 === void 0 ? void 0 : _props$selectedDevice17.deviceId
          } : undefined
        },
        video: {
          deviceId: (_props$selectedDevice18 = props.selectedDevices) !== null && _props$selectedDevice18 !== void 0 && (_props$selectedDevice19 = _props$selectedDevice18.videoInput) !== null && _props$selectedDevice19 !== void 0 && _props$selectedDevice19.deviceId ? {
            exact: (_props$selectedDevice20 = props.selectedDevices) === null || _props$selectedDevice20 === void 0 ? void 0 : (_props$selectedDevice21 = _props$selectedDevice20.videoInput) === null || _props$selectedDevice21 === void 0 ? void 0 : _props$selectedDevice21.deviceId
          } : undefined
        }
      };
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        participants.map(function (p) {
          return p.peer;
        }).forEach(function (peer) {
          peer.replaceTrack(streamObj.getVideoTracks()[0], stream.getVideoTracks()[0], streamObj);
        });
        setStreamObj(function (_streamObj) {
          var streamObjCopy = _streamObj;
          streamObjCopy.removeTrack(_streamObj.getVideoTracks()[0]);
          streamObjCopy.addTrack(stream.getVideoTracks()[0]);
          return streamObjCopy;
        });
      });
    }
    socketRef.emit('user-disable-video', {
      value: value
    });
    setIsVideo(value);
  };

  var showHideMeetingDetailsHandler = function showHideMeetingDetailsHandler() {
    setMeetInfoPopup(function (info) {
      return !info;
    });
  };

  var pinUserHandler = function pinUserHandler(peerId) {
    if (peerId === 'current') return setPinnedUser(peerId);
    var participantIndex = participants.findIndex(function (participant) {
      return participant.peer.id === peerId;
    });
    setPinnedUser(_objectSpread({}, participants[participantIndex]));
  };

  var unPinUserHandler = function unPinUserHandler() {
    setPinnedUser(null);
  };

  var onAcceptAllHandler = function onAcceptAllHandler() {
    setIsOpenInvitationModal(false);
    setRequestedUsers(function (_requestUsers) {
      _requestUsers.forEach(function (requestUser) {
        socketRef.emit('accept-user-request', {
          socketId: requestUser.socketId
        });
      });

      return [];
    });
  };

  var onRefusePersonHandler = function onRefusePersonHandler(socketId) {
    setRequestedUsers(function (_requestUsers) {
      var requestUsers = (0,toConsumableArray/* default */.Z)(_requestUsers);

      var requestedUserIndex = requestUsers.findIndex(function (user) {
        return user.socketId === socketId;
      });
      requestUsers.splice(requestedUserIndex, 1);
      if (requestedUsers.length === 0) setIsOpenInvitationModal(false);
      return requestUsers;
    });
  };

  var onRefuseAllHandler = function onRefuseAllHandler() {
    setIsOpenInvitationModal(false);
    setRequestedUsers([]);
  };

  var onAcceptPersonHandler = function onAcceptPersonHandler(socketId) {
    setRequestedUsers(function (_requestUsers) {
      var requestUsers = (0,toConsumableArray/* default */.Z)(_requestUsers);

      var requestedUserIndex = requestUsers.findIndex(function (user) {
        return user.socketId === socketId;
      });
      socketRef.emit('accept-user-request', {
        socketId: _requestUsers[requestedUserIndex].socketId
      });
      requestUsers.splice(requestedUserIndex, 1);
      if (requestedUsers.length === 0) setIsOpenInvitationModal(false);
      return requestUsers;
    });
  };

  var setIsOpenMessengerHandler = function setIsOpenMessengerHandler(valueOpen) {
    setIsOpenSideBar(valueOpen !== 0);
    if (valueOpen > 0) setIsOpenMessenger(valueOpen);else setTimeout(function () {
      setIsOpenMessenger(valueOpen);
    }, 100);
  };

  var sendMessageHandler = function sendMessageHandler(message) {
    var newMessage = {
      content: message,
      user: {
        id: store.userData.id,
        name: store.userData.name || "".concat(store.userData.firstName, " ").concat(store.userData.lastName)
      },
      time: new Date().toISOString()
    };
    setListMessages([].concat((0,toConsumableArray/* default */.Z)(messagesList), [newMessage]));
    socketRef.emit('send-message-meet', {
      message: newMessage
    });
  };

  var setFullScreenHandler = /*#__PURE__*/function () {
    var _ref9 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      var mainContainer;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              mainContainer = document.getElementById('mainContainer');
              _context3.next = 3;
              return mainContainer.requestFullscreen();

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function setFullScreenHandler() {
      return _ref9.apply(this, arguments);
    };
  }();

  var getTemplateGrid = function getTemplateGrid() {
    var participantsLength = participants.length + 1;
    var grid = "";
    if (participantsLength === 2) grid = "repeat(2, auto)";else {
      if (participantsLength % 2 === 0) grid = "repeat(".concat(participantsLength / 2, ", auto)");else grid = "repeat(".concat((participantsLength - 1) / 2 + 1, ", auto)");
    }
    return grid;
  };

  var getGridItemStyles = function getGridItemStyles() {
    var participantsLength = participants.length + 1;
    if (participantsLength % 2 !== 0) return {
      gridColumn: "".concat((participantsLength - 1) / 2, "/").concat((participantsLength - 1) / 2 + 2)
    };
    return null;
  };

  var registerSoundActivityHandler = function registerSoundActivityHandler(socketId, value) {
    if (value > 0) {
      if (speakerInterval.current) clearInterval(speakerInterval.current);
      setLastSpeaker(socketId);
      speakerInterval.current = setTimeout(function () {
        setLastSpeaker(null);
      }, 2000);
    }
  };

  var muteUserHandler = function muteUserHandler(userSocketId) {
    socketRef.emit('mute-user-micro', {
      socketId: userSocketId
    });
  };

  var excludeUserHandler = function excludeUserHandler(userSocketId, userName) {
    socketRef.emit('exclude-user', {
      socketId: userSocketId,
      userName: userName
    });
  };

  var onChangeMessageStatusHandler = function onChangeMessageStatusHandler() {
    setIsMessagingOn(!isMessagingOn);
    socketRef.emit('change-messagin-state', {
      value: !isMessagingOn
    });
  };

  var sendEmojiHandler = function sendEmojiHandler(emoji) {
    var username = store.userData.name || "".concat(store.userData.firstName, " ").concat(store.userData.lastName);
    socketRef.emit('send-emoji-reaction', {
      username: username,
      emoji: emoji
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        display: 'none'
      },
      id: "audios"
    }), loadingPeers ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingCall_LoadingCall, {}) : /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      id: "mainContainer",
      fluid: true,
      className: MeetCall_MeetCall_module.mainComponentContainer,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
        style: {
          height: '100%'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
            className: MeetCall_MeetCall_module.mainRowContainer,
            style: {
              overflow: 'hidden'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
              className: MeetCall_MeetCall_module.mainContainer,
              style: {
                position: 'relative'
              },
              children: [showReaction && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: MeetCall_MeetCall_module.reactionContainer,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
                  className: MeetCall_MeetCall_module.reactionText,
                  children: showReaction
                })
              }), participants.length === 1 && pinnedUser && /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                  style: {
                    height: '100%'
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(UserPreviewCard_UserPreviewCard, {
                    isAudioOn: isAudio,
                    isVideoOn: isVideo,
                    image: store.userData.avatar,
                    audioStream: streamObj,
                    unPinUserFunction: function unPinUserFunction() {
                      return setPinnedUser(null);
                    },
                    pinUserFunction: function pinUserFunction() {
                      return setPinnedUser('current');
                    },
                    videoStream: isPresenting ? screenCastStream : streamObj
                  })
                })
              }), pinnedUser !== null ? /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
                children: pinnedUser === 'current' ? /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                  style: {
                    height: '100%',
                    position: 'relative'
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                    style: {
                      height: '100%',
                      position: 'relative'
                    },
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(PinnedUserCard_PinnedUserCard, {
                      isVideoOn: isVideo,
                      isAudioOn: isAudio,
                      onClick: setFullScreenHandler,
                      name: "You",
                      isAdmin: props.isAdmin,
                      peerId: 'current',
                      unPinUserFunction: function unPinUserFunction() {
                        return setPinnedUser(null);
                      },
                      image: store.userData.avatar,
                      stream: streamObj,
                      videoStream: isPresenting ? screenCastStream : streamObj
                    })
                  })
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                  style: {
                    height: '100%',
                    position: 'relative'
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                    style: {
                      height: '100%',
                      position: 'relative'
                    },
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(PinnedUserCard_PinnedUserCard, {
                      isVideoOn: pinnedUser.state.isVideo,
                      isAudioOn: pinnedUser.state.isAudio,
                      onClick: setFullScreenHandler,
                      isAdmin: props.isAdmin,
                      muteUserFunction: function muteUserFunction() {
                        muteUserHandler(pinnedUser.socketId);
                      },
                      excludeUserFunction: function excludeUserFunction(userName) {
                        excludeUserHandler(pinnedUser.socketId, userName);
                      },
                      unPinUserFunction: function unPinUserFunction() {
                        return setPinnedUser(null);
                      },
                      peerId: pinnedUser.socketId,
                      videoStream: pinnedUser.stream,
                      image: pinnedUser.user.avatar,
                      stream: pinnedUser.stream,
                      name: pinnedUser.user.name || "".concat(pinnedUser.user.firstName, " ").concat(pinnedUser.user.lastName)
                    }, pinnedUser.socketId)
                  })
                })
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: MeetCall_MeetCall_module.gridContainer,
                  style: {
                    gridTemplateColumns: getTemplateGrid()
                  },
                  children: [participants.map(function (participant) {
                    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                      className: MeetCall_MeetCall_module.gridItem,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(UserCard_UserCard, {
                        isVideoOn: participant.state.isVideo,
                        isLastSpeaker: lastSpeaker === participant.socketId,
                        isAudioOn: participant.state.isAudio,
                        image: participant.user.avatar,
                        stream: participant.stream,
                        isAdmin: props.isAdmin,
                        muteUserFunction: function muteUserFunction() {
                          muteUserHandler(participant.socketId);
                        },
                        excludeUserFunction: function excludeUserFunction(userName) {
                          excludeUserHandler(participant.socketId, userName);
                        },
                        isPinned: (pinnedUser === null || pinnedUser === void 0 ? void 0 : pinnedUser.peer.id) === participant.peer.id,
                        pinUserFunction: function pinUserFunction() {
                          return setPinnedUser(participant);
                        },
                        unPinUserFunction: function unPinUserFunction() {
                          return setPinnedUser(null);
                        },
                        peerId: participant.socketId,
                        videoStream: participant.stream,
                        registerSoundActivity: function registerSoundActivity(value) {
                          return registerSoundActivityHandler(participant.socketId, value);
                        },
                        name: participant.user.name || "".concat(participant.user.firstName, " ").concat(participant.user.lastName)
                      })
                    }, participant.socketId);
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: MeetCall_MeetCall_module.gridItem,
                    style: getGridItemStyles(),
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(UserCard_UserCard, {
                      isCurrentUser: true,
                      isVideoOn: isVideo,
                      isAudioOn: isAudio,
                      name: "You",
                      isAdmin: props.isAdmin,
                      peerId: 'current',
                      isPinned: pinnedUser === 'current',
                      isLastSpeaker: lastSpeaker === 'current',
                      pinUserFunction: function pinUserFunction() {
                        return setPinnedUser('current');
                      },
                      unPinUserFunction: function unPinUserFunction() {
                        return setPinnedUser(null);
                      },
                      registerSoundActivity: function registerSoundActivity(value) {
                        return registerSoundActivityHandler('current', value);
                      },
                      image: store.userData.avatar,
                      stream: streamObj,
                      streamVideo: isPresenting ? screenCastStream : streamObj
                    })
                  })]
                })
              }), notification && /*#__PURE__*/(0,jsx_runtime.jsx)(Notification_Notification, {
                content: notification
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              xs: "3",
              className: MeetCall_MeetCall_module.mainSideBarContainer,
              style: {
                transform: "translateX(".concat(isOpenSideBar ? '0' : '+50vh', ")"),
                maxWidth: isOpenSideBar ? '400px' : '0px',
                padding: isOpenMessenger ? '20px' : '0'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(MeetDetails_MeetDetails, {
                setIsOpenMessenger: setIsOpenMessengerHandler,
                sendMessageFunction: sendMessageHandler,
                isOpenMessenger: isOpenMessenger,
                participants: participants,
                isAdmin: props.isAdmin,
                isMessagingOn: isMessagingOn,
                onChangeMessageStatus: onChangeMessageStatusHandler,
                pinnedPeerId: pinnedUser && pinnedUser !== 'current' ? pinnedUser.peer.id : pinnedUser ? 'current' : null,
                currentUser: store.userData,
                messagesList: messagesList,
                unPinUserFunction: unPinUserHandler,
                pinUserFunction: pinUserHandler
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              style: {
                padding: '0'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(CallPageFooter_CallPageFooter, {
                isOpenMessenger: isOpenMessenger,
                setIsOpenMessenger: setIsOpenMessengerHandler,
                notification: notificationMessage,
                sendEmoji: sendEmojiHandler,
                setOpenParticipants: setIsOpenMessengerHandler,
                setNotification: setNotificationMessage,
                userImage: store.userData.avatar,
                isPresenting: isPresenting,
                participants: participants,
                roomId: props.roomID,
                stopScreenShareFunction: stopScreenShareHandler,
                screenShareFunction: shareScreenHandler,
                isAudio: isAudio,
                isVideo: isVideo,
                toggleSettingsFunction: props.showSettingsModal,
                toggleAudioFunction: toggleAudioHandler,
                toggleVideoFunction: toggleVideoHandler,
                showHideMeetingDetailsFunction: showHideMeetingDetailsHandler,
                disconnectCallFunction: disconnectCallHandler
              })
            })
          })]
        })
      }), !isOpenMessenger && notificationMessage && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: MeetCall_MeetCall_module.notificationsContainer,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(NotificationMessage_NotificationMessage, {
          user: notificationMessage.user,
          message: notificationMessage.content
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(InvitationModal_InvitationModal, {
        requestedUsers: requestedUsers,
        isOpen: isOpenInvitationModal,
        onAcceptPerson: onAcceptPersonHandler,
        refusePerson: onRefusePersonHandler,
        refuseAll: onRefuseAllHandler,
        onAcceptAll: onAcceptAllHandler,
        toggle: setIsOpenInvitationModal
      }), meetInfoPopup && /*#__PURE__*/(0,jsx_runtime.jsx)(MeetingInfo_MeetingInfo, {
        url: url,
        setMeetInfoPopup: setMeetInfoPopup,
        name: store.userData.name || "".concat(store.userData.firstName, " ").concat(store.userData.lastName)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
        onEnd: function onEnd() {
          return setPlayingSoundUserRequest(false);
        },
        src: ask_to_join,
        playing: playingSoundUserRequest
      }), /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
        onEnd: function onEnd() {
          return setPlayingSoundUserJoined(false);
        },
        src: join_call,
        playing: playingSoundUserJoined
      }), /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
        onEnd: function onEnd() {
          return setPlayingMessageReceived(false);
        },
        src: meet_message,
        playing: playingMessageReceived
      })]
    })]
  });
};

/* harmony default export */ var MeetCall_MeetCall = (MeetCall);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/MeetSettings/MeetSettings.module.css
var MeetSettings_module = __webpack_require__(89511);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetSettings/MeetSettings.module.css

      
      
      
      
      
      
      
      
      

var MeetSettings_module_options = {};

MeetSettings_module_options.styleTagTransform = (styleTagTransform_default());
MeetSettings_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      MeetSettings_module_options.insert = insertBySelector_default().bind(null, "head");
    
MeetSettings_module_options.domAPI = (styleDomAPI_default());
MeetSettings_module_options.insertStyleElement = (insertStyleElement_default());

var MeetSettings_module_update = injectStylesIntoStyleTag_default()(MeetSettings_module/* default */.Z, MeetSettings_module_options);




       /* harmony default export */ var MeetSettings_MeetSettings_module = (MeetSettings_module/* default */.Z && MeetSettings_module/* default.locals */.Z.locals ? MeetSettings_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/views/apps/meet/assets/img/avatar-blank.png
var img_avatar_blank_namespaceObject = __webpack_require__.p + "ecb788ffecf588044036.png";
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/MeetSettings/MeetSettings.js













var MeetSettings = function MeetSettings(props) {
  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      isOpenCopyToolTip = _React$useState2[0],
      setIsOpenTooltip = _React$useState2[1];

  var videoRef = react.useRef(null);
  var timeout = react.useRef(null);

  var _React$useState3 = react.useState(0),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      soundActivity = _React$useState4[0],
      setSoundActivity = _React$useState4[1];

  var intl = (0,useIntl/* default */.Z)();
  react.useEffect(function () {
    if (props.userVideoStream) {
      videoRef.current.srcObject = props.userVideoStream;
    }
  }, [props.userVideoStream]);
  react.useEffect(function () {
    if (props.userAudioStream) {
      var audioContext = new AudioContext();
      var voiceDectionOptions = {
        onUpdate: function onUpdate(activityValue) {
          setSoundActivity(activityValue);
        }
      };
      voice_activity_detection(audioContext, props.userAudioStream, voiceDectionOptions);
      return function () {
        voiceDectionOptions = {};
      };
    }
  }, [props.userAudioStream]);

  var copyUrlHandler = function copyUrlHandler() {
    navigator.clipboard.writeText(window.location.href);

    if (timeout) {
      clearInterval(timeout.current);
    }

    setIsOpenTooltip(true);
    timeout.current = setTimeout(function () {
      setIsOpenTooltip(false);
    }, 2000);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
    fluid: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
      className: MeetSettings_MeetSettings_module.mainContainer,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
        className: MeetSettings_MeetSettings_module.mainVideoContainer,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
          style: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
            xs: "12",
            sm: "8",
            md: "8",
            lg: "9",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: MeetSettings_MeetSettings_module.videoContainer,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("video", {
                ref: videoRef,
                muted: true,
                playsInline: true,
                autoPlay: true,
                className: MeetSettings_MeetSettings_module.video
              }), props.mediaDevices && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: MeetSettings_MeetSettings_module.settingsContainer,
                onClick: function onClick() {
                  return props.setIsOpenSettingsModal(true);
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                  className: "fas fa-cog ".concat(MeetSettings_MeetSettings_module.settingsIcon)
                })
              }), props.userAudioStream && props.userVideoStream && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: MeetSettings_MeetSettings_module.controlsContainer,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "".concat(MeetSettings_MeetSettings_module.centerItemIconBlock, " ").concat(!props.settings.isAudio ? MeetSettings_MeetSettings_module.redBg : null),
                  onClick: props.toggleAudioHandler,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                    className: "".concat(props.settings.isAudio ? "fas fa-microphone ".concat(MeetSettings_MeetSettings_module.centerItemIcon) : "fas fa-microphone-slash ".concat(MeetSettings_MeetSettings_module.activeIcon))
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "".concat(MeetSettings_MeetSettings_module.centerItemIconBlock, " ").concat(!props.settings.isVideo ? MeetSettings_MeetSettings_module.redBg : null),
                  onClick: props.toggleVideoHandler,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                    className: " ".concat(props.settings.isVideo ? "fas fa-video ".concat(MeetSettings_MeetSettings_module.centerItemIcon) : "fas fa-video-slash ".concat(MeetSettings_MeetSettings_module.activeIcon))
                  })
                })]
              }), !props.settings.isAudio ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: MeetSettings_MeetSettings_module.centerItemIconBlockVoiceOff,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                  className: "fas fa-microphone-slash ".concat(MeetSettings_MeetSettings_module.microIcon)
                })
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: MeetSettings_MeetSettings_module.centerItemIconBlockVoiceOn,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(WaveVisualizer_WaveVisualizer, {
                  soundActivity: soundActivity
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
        xs: "12",
        lg: "4",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
            className: MeetSettings_MeetSettings_module.participateTitle,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "readyToParticipate"
            })
          }), props.participants ? props.participants.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: MeetSettings_MeetSettings_module.participantsPicturesContainer,
              children: props.participants.map(function (participant, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  alt: "participant",
                  className: MeetSettings_MeetSettings_module.participantImage,
                  src: participant.avatar || img_avatar_blank_namespaceObject
                }, "".concat(participant.id, " ").concat(index));
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
              className: MeetSettings_MeetSettings_module.participantsText,
              children: "".concat(props.participants.map(function (p, index) {
                if (index < p.length - 2) return "".concat(p.name || "".concat(p.firstName, " ").concat(p.lastName), ", ");
                if (index === p.length - 2) return "".concat(p.name || "".concat(p.firstName, " ").concat(p.lastName), "and ");
                return "".concat(p.name || "".concat(p.firstName, " ").concat(p.lastName), " ");
              }), " ").concat(props.participants.length > 1 ? "are" : "is", " in this meeting")
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
            className: MeetSettings_MeetSettings_module.participantsText,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "noParticipants"
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Spinner/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: MeetSettings_MeetSettings_module.buttonContainer,
            children: !props.loading ? !props.error ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default */.Z, {
                color: "primary",
                className: MeetSettings_MeetSettings_module.copyLinkButton,
                onClick: copyUrlHandler,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "copyLink"
                }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.ZP, {
                  arrow: true,
                  PopperProps: {
                    disablePortal: true
                  },
                  open: isOpenCopyToolTip,
                  disableFocusListener: true,
                  disableHoverListener: true,
                  disableTouchListener: true,
                  title: intl.formatMessage({
                    id: "copied"
                  }),
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                    className: "fa-regular fa-copy ".concat(MeetSettings_MeetSettings_module.copyIcon),
                    onClick: copyUrlHandler
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default */.Z, {
                color: "success",
                className: MeetSettings_MeetSettings_module.participateButton,
                onClick: props.participateFunction,
                children: ["Participate", " ", /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                  className: "fa-solid fa-arrow-right-to-bracket"
                })]
              })]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
              children: props.error
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
              children: "loading..."
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var MeetSettings_MeetSettings = (MeetSettings);
// EXTERNAL MODULE: ./node_modules/query-parse/index.js
var query_parse = __webpack_require__(60724);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/ModalBody.js
var ModalBody = __webpack_require__(10684);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/SettingsModal/SettingsModal.module.css
var SettingsModal_module = __webpack_require__(75155);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/SettingsModal/SettingsModal.module.css

      
      
      
      
      
      
      
      
      

var SettingsModal_module_options = {};

SettingsModal_module_options.styleTagTransform = (styleTagTransform_default());
SettingsModal_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      SettingsModal_module_options.insert = insertBySelector_default().bind(null, "head");
    
SettingsModal_module_options.domAPI = (styleDomAPI_default());
SettingsModal_module_options.insertStyleElement = (insertStyleElement_default());

var SettingsModal_module_update = injectStylesIntoStyleTag_default()(SettingsModal_module/* default */.Z, SettingsModal_module_options);




       /* harmony default export */ var SettingsModal_SettingsModal_module = (SettingsModal_module/* default */.Z && SettingsModal_module/* default.locals */.Z.locals ? SettingsModal_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js + 2 modules
var MenuItem = __webpack_require__(71581);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 23 modules
var Select = __webpack_require__(92245);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/SettingsModal/SettingsModal.js









var SettingsModal = function SettingsModal(props) {
  var _props$selectedDevice, _props$selectedDevice2, _props$devices, _props$selectedDevice3, _props$selectedDevice4, _props$devices2, _props$devices2$audio, _props$selectedDevice5, _props$selectedDevice6, _props$devices3;

  var toggle = function toggle() {
    return props.toggle(!props.isOpen);
  };

  var _React$useState = react.useState(0),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      tab = _React$useState2[0],
      setTab = _React$useState2[1];

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Modal/* default */.Z, {
    isOpen: props.isOpen,
    toggle: function toggle() {},
    style: {
      maxWidth: '500px'
    },
    centered: true,
    className: SettingsModal_SettingsModal_module.className,
    contentClassName: SettingsModal_SettingsModal_module.contentClassName,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ModalBody/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* default */.Z, {
        style: {
          minHeight: '500px'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
          md: "4",
          className: SettingsModal_SettingsModal_module.sidebarContainer,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
              style: {
                padding: '0px 10px 0px 0px'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: SettingsModal_SettingsModal_module.headerContainer,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
                  className: SettingsModal_SettingsModal_module.settingTitle,
                  children: "Settings"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "".concat(tab === 0 ? SettingsModal_SettingsModal_module.menuItemContainerActive : SettingsModal_SettingsModal_module.menuItemContainer),
                onClick: function onClick() {
                  return setTab(0);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                  className: "fas fa-volume-up ".concat(tab === 0 ? SettingsModal_SettingsModal_module.menuIconActive : SettingsModal_SettingsModal_module.menuIcon)
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
                  className: "".concat(tab === 0 ? SettingsModal_SettingsModal_module.menuTextActive : SettingsModal_SettingsModal_module.menuText),
                  children: "Audio"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "".concat(tab === 1 ? SettingsModal_SettingsModal_module.menuItemContainerActive : SettingsModal_SettingsModal_module.menuItemContainer),
                onClick: function onClick() {
                  return setTab(1);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                  className: "fas fa-video ".concat(tab === 1 ? SettingsModal_SettingsModal_module.menuIconActive : SettingsModal_SettingsModal_module.menuIcon)
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
                  className: "".concat(tab === 1 ? SettingsModal_SettingsModal_module.menuTextActive : SettingsModal_SettingsModal_module.menuText),
                  children: "Video"
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
          style: {
            padding: '0px 20px 10px 20px'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
              className: SettingsModal_SettingsModal_module.toggleModalHeader,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
                onClick: toggle,
                className: "fas fa-times ".concat(SettingsModal_SettingsModal_module.iconTimes)
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
              children: [tab === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                    className: SettingsModal_SettingsModal_module.mainItemContainer,
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                        className: SettingsModal_SettingsModal_module.itemContainer,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
                            className: SettingsModal_SettingsModal_module.categoryTitle,
                            children: "Micro"
                          })
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                        className: SettingsModal_SettingsModal_module.itemContainer,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.Z, {
                            style: {
                              width: 'min-content',
                              minWidth: '200px',
                              maxWidth: '350px'
                            },
                            labelId: "demo-simple-select-label",
                            id: "demo-simple-select",
                            value: (_props$selectedDevice = props.selectedDevices) === null || _props$selectedDevice === void 0 ? void 0 : (_props$selectedDevice2 = _props$selectedDevice.audioInput) === null || _props$selectedDevice2 === void 0 ? void 0 : _props$selectedDevice2.deviceId,
                            onChange: function onChange(e) {
                              return props.setSelectedAudioInput(e.target.value);
                            },
                            children: (_props$devices = props.devices) === null || _props$devices === void 0 ? void 0 : _props$devices.audioInput.map(function (device) {
                              return /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                value: device.deviceId,
                                children: device.label
                              }, device.deviceId);
                            })
                          })
                        })
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                    className: SettingsModal_SettingsModal_module.mainItemContainer,
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                        className: SettingsModal_SettingsModal_module.itemContainer,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
                            className: SettingsModal_SettingsModal_module.categoryTitle,
                            children: "Haut parleurs"
                          })
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                        className: SettingsModal_SettingsModal_module.itemContainer,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.Z, {
                            style: {
                              width: 'min-content',
                              minWidth: '200px',
                              maxWidth: '350px'
                            },
                            labelId: "demo-simple-select-label",
                            id: "demo-simple-select",
                            value: (_props$selectedDevice3 = props.selectedDevices) === null || _props$selectedDevice3 === void 0 ? void 0 : (_props$selectedDevice4 = _props$selectedDevice3.audioOutput) === null || _props$selectedDevice4 === void 0 ? void 0 : _props$selectedDevice4.deviceId,
                            onChange: function onChange(e) {
                              return props.setSelectedAudioOutput(e.target.value);
                            },
                            children: (_props$devices2 = props.devices) === null || _props$devices2 === void 0 ? void 0 : (_props$devices2$audio = _props$devices2.audioOutput) === null || _props$devices2$audio === void 0 ? void 0 : _props$devices2$audio.map(function (device) {
                              return /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                value: device.deviceId,
                                children: device.label
                              }, device.deviceId);
                            })
                          })
                        })
                      })]
                    })
                  })]
                })
              }), tab === 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                    className: SettingsModal_SettingsModal_module.mainItemContainer,
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Col/* default */.Z, {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                        className: SettingsModal_SettingsModal_module.itemContainer,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
                            className: SettingsModal_SettingsModal_module.categoryTitle,
                            children: "Camera"
                          })
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
                        className: SettingsModal_SettingsModal_module.itemContainer,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.Z, {
                            style: {
                              width: 'min-content',
                              minWidth: '200px',
                              maxWidth: '350px'
                            },
                            labelId: "demo-simple-select-label",
                            id: "demo-simple-select",
                            value: (_props$selectedDevice5 = props.selectedDevices) === null || _props$selectedDevice5 === void 0 ? void 0 : (_props$selectedDevice6 = _props$selectedDevice5.videoInput) === null || _props$selectedDevice6 === void 0 ? void 0 : _props$selectedDevice6.deviceId,
                            onChange: function onChange(e) {
                              return props.setSelectedVideoInput(e.target.value);
                            },
                            children: (_props$devices3 = props.devices) === null || _props$devices3 === void 0 ? void 0 : _props$devices3.videoInput.map(function (device) {
                              return /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                value: device.deviceId,
                                children: device.label
                              }, device.deviceId);
                            })
                          })
                        })
                      })]
                    })
                  })
                })
              })]
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var SettingsModal_SettingsModal = (SettingsModal);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/views/apps/meet/Meet/ExcludedPage/ExcludedPage.module.css
var ExcludedPage_module = __webpack_require__(21022);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/ExcludedPage/ExcludedPage.module.css

      
      
      
      
      
      
      
      
      

var ExcludedPage_module_options = {};

ExcludedPage_module_options.styleTagTransform = (styleTagTransform_default());
ExcludedPage_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      ExcludedPage_module_options.insert = insertBySelector_default().bind(null, "head");
    
ExcludedPage_module_options.domAPI = (styleDomAPI_default());
ExcludedPage_module_options.insertStyleElement = (insertStyleElement_default());

var ExcludedPage_module_update = injectStylesIntoStyleTag_default()(ExcludedPage_module/* default */.Z, ExcludedPage_module_options);




       /* harmony default export */ var ExcludedPage_ExcludedPage_module = (ExcludedPage_module/* default */.Z && ExcludedPage_module/* default.locals */.Z.locals ? ExcludedPage_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/ExcludedPage/ExcludedPage.js








var ExcludedPage = function ExcludedPage() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
    className: ExcludedPage_ExcludedPage_module.mainContainer,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
        className: ExcludedPage_ExcludedPage_module.mainInfoContainer,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: ExcludedPage_ExcludedPage_module.titleContainer,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
              className: ExcludedPage_ExcludedPage_module.titleText,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "meetingExcluded"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: ExcludedPage_ExcludedPage_module.buttonContainer,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
              tag: react_router_dom/* Link */.rU,
              to: "/meet",
              color: "primary",
              className: ExcludedPage_ExcludedPage_module.returnButton,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "backToHomePage"
              })
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ var ExcludedPage_ExcludedPage = (ExcludedPage);
// EXTERNAL MODULE: ./src/api/utlis.js
var utlis = __webpack_require__(16550);
// EXTERNAL MODULE: ./src/configs/api-urls.js
var api_urls = __webpack_require__(88295);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(55678);
;// CONCATENATED MODULE: ./src/views/apps/meet/Meet/index.js




function Meet_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Meet_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Meet_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Meet_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















window.AudioContext = window.AudioContext || window.webkitAudioContext;

var Index = function Index(props) {
  var socketRef = (0,react.useContext)(Socket/* SocketContext */.J);

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      participate = _React$useState2[0],
      setParticipate = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      isExcludedUser = _React$useState4[0],
      setIsExcludedUser = _React$useState4[1];

  var store = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  });

  var _React$useState5 = react.useState([]),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      participants = _React$useState6[0],
      setParticipants = _React$useState6[1];

  var _React$useState7 = react.useState(true),
      _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
      loadingParticipations = _React$useState8[0],
      setLoadingParticipation = _React$useState8[1];

  var _React$useState9 = react.useState(null),
      _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
      errorParticipate = _React$useState10[0],
      _setErrorParticipate = _React$useState10[1];

  var _React$useState11 = react.useState({
    isVideo: true,
    isAudio: true
  }),
      _React$useState12 = (0,slicedToArray/* default */.Z)(_React$useState11, 2),
      settings = _React$useState12[0],
      setSettings = _React$useState12[1];

  var _React$useState13 = react.useState(null),
      _React$useState14 = (0,slicedToArray/* default */.Z)(_React$useState13, 2),
      mediaDevices = _React$useState14[0],
      setMediaDevices = _React$useState14[1];

  var _React$useState15 = react.useState(null),
      _React$useState16 = (0,slicedToArray/* default */.Z)(_React$useState15, 2),
      selectedDevices = _React$useState16[0],
      setSelectedDevices = _React$useState16[1];

  var _React$useState17 = react.useState(null),
      _React$useState18 = (0,slicedToArray/* default */.Z)(_React$useState17, 2),
      meetAdmin = _React$useState18[0],
      setMeetAdmin = _React$useState18[1];

  var history = (0,react_router/* useHistory */.k6)();

  var _React$useState19 = react.useState(null),
      _React$useState20 = (0,slicedToArray/* default */.Z)(_React$useState19, 2),
      isNewMeeting = _React$useState20[0],
      setIsNewMeeting = _React$useState20[1];

  var _React$useState21 = react.useState(false),
      _React$useState22 = (0,slicedToArray/* default */.Z)(_React$useState21, 2),
      isOpenSettingsModal = _React$useState22[0],
      setIsOpenSettingsModal = _React$useState22[1];

  var _React$useState23 = react.useState(null),
      _React$useState24 = (0,slicedToArray/* default */.Z)(_React$useState23, 2),
      userAudioStream = _React$useState24[0],
      setUserAudioStream = _React$useState24[1];

  var _React$useState25 = react.useState(null),
      _React$useState26 = (0,slicedToArray/* default */.Z)(_React$useState25, 2),
      userVideoStream = _React$useState26[0],
      setUserVideoStream = _React$useState26[1];

  var _React$useState27 = react.useState(null),
      _React$useState28 = (0,slicedToArray/* default */.Z)(_React$useState27, 2),
      isMessagingOn = _React$useState28[0],
      setIsMessagingOn = _React$useState28[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  react.useEffect(function () {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(function (stream) {
      stream.getVideoTracks().forEach(function (track) {
        return track.stop();
      });
      stream.getAudioTracks().forEach(function (track) {
        return track.stop();
      });
      setupDevices();
    }).catch(function (e) {
      setLoadingParticipation(false);

      _setErrorParticipate("Camera or microphone blocked!");
    });

    navigator.mediaDevices.ondevicechange = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(event) {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setupDevices();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return function () {
      navigator.mediaDevices.ondevicechange = null;
    };
  }, []);
  react.useEffect(function () {
    if (selectedDevices && !participate) {
      navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: selectedDevices.videoInput.deviceId ? {
            exact: selectedDevices.videoInput.deviceId
          } : undefined
        }
      }).then(function (stream) {
        if (!settings.isVideo) {
          stream.getVideoTracks().forEach(function (track) {
            return track.stop();
          });
        }

        setUserVideoStream(function (_stream) {
          if (_stream) _stream.getVideoTracks().forEach(function (track) {
            return track.stop();
          });
          return stream;
        });
      }).catch(function (err) {
        setLoadingParticipation(false);
        console.log({
          err: err
        });

        _setErrorParticipate("Camera or microphone blocked!");
      });
    }

    if (participate) {
      setUserAudioStream(function (audioStream) {
        if (audioStream) audioStream.getAudioTracks().forEach(function (track) {
          return track.stop();
        });
        return null;
      });
      setUserVideoStream(function (videoStream) {
        if (videoStream) videoStream.getVideoTracks().forEach(function (track) {
          return track.stop();
        });
        return null;
      });
    }
  }, [selectedDevices === null || selectedDevices === void 0 ? void 0 : selectedDevices.videoInput, settings.isVideo, participate]);
  react.useEffect(function () {
    if (selectedDevices && !participate) {
      navigator.mediaDevices.getUserMedia({
        audio: {
          deviceId: selectedDevices.audioInput.deviceId ? {
            exact: selectedDevices.audioInput.deviceId
          } : undefined
        }
      }).then(function (stream) {
        if (!settings.isAudio) {
          stream.getAudioTracks().forEach(function (track) {
            return track.enabled = false;
          });
        }

        setUserAudioStream(function (_stream) {
          if (_stream) _stream.getAudioTracks().forEach(function (track) {
            return track.stop();
          });
          return stream;
        });
      }).catch(function (err) {
        setLoadingParticipation(false);
        console.log({
          err: err
        });

        _setErrorParticipate("Camera or microphone blocked!");
      });
    }
  }, [selectedDevices === null || selectedDevices === void 0 ? void 0 : selectedDevices.audioInput, settings.isAudio]);
  react.useEffect(function () {
    var paramObj = query_parse.toObject(props.location.search.slice(1, props.location.search.length));
    if (!store.userData) return history.replace('/login');
    setIsNewMeeting(paramObj.new === 'true');
    if (!paramObj.new) (0,utlis/* apiCall */.k_)(utlis/* getAll */.go, ["".concat(api_urls/* MEET_URL */.Qu, "/").concat(props.match.params.meetId)], true, react_toastify_esm/* toast */.Am, dispatch, null, '', function (res) {
      if (res.meet) {
        setParticipants(res.meet.users.map(function (userObj) {
          return userObj.user;
        }));
        setMeetAdmin(res.meet.admin);
        setIsMessagingOn(res.meet.messagingState);
        setLoadingParticipation(false);
      } else history.replace('/meet');
    }, null);else {
      setParticipants([]);
      setIsMessagingOn(true);
      history.push("/meet/".concat(props.match.params.meetId));
      setLoadingParticipation(false);
    } // eslint-disable-next-line 
  }, []);

  var participateHandler = function participateHandler() {
    if (!isNewMeeting && meetAdmin !== store.userData.id) {
      socketRef.emit("request-join-room", {
        roomId: props.match.params.meetId,
        user: store.userData
      });
      socketRef.on("request-accepted", function () {
        setLoadingParticipation(false);
        setParticipate(true);
      });
      setLoadingParticipation(true);
    } else setParticipate(true);
  };

  var setupDevices = function setupDevices() {
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
      var _mediaDevices = {
        audioInput: [],
        audioOutput: [],
        videoInput: []
      };
      var _selectedDevices = {};
      var noDevices = true;
      devices.forEach(function (device) {
        if (device.deviceId !== "") noDevices = false;
      });

      if (!noDevices) {
        devices.forEach(function (device) {
          if (device.kind === 'audioinput') {
            _mediaDevices.audioInput.push(device);

            if (device.deviceId === "default") _selectedDevices.audioInput = device;
          } else if (device.kind === 'audiooutput') {
            _mediaDevices.audioOutput.push(device);

            if (device.deviceId === "default") _selectedDevices.audioOutput = device;
          } else if (device.kind === 'videoinput') {
            _mediaDevices.videoInput.push(device);

            if (!_selectedDevices.videoInput) _selectedDevices.videoInput = device;
          }
        });
        setMediaDevices(Meet_objectSpread({}, _mediaDevices));
        setSelectedDevices(Meet_objectSpread({}, _selectedDevices));
      }
    });
  };

  var setSelectedVideoInputHandler = function setSelectedVideoInputHandler(deviceId) {
    var deviceIndex = mediaDevices.videoInput.findIndex(function (v) {
      return v.deviceId === deviceId;
    });
    setSelectedDevices(Meet_objectSpread(Meet_objectSpread({}, selectedDevices), {}, {
      videoInput: mediaDevices.videoInput[deviceIndex]
    }));
  };

  var setSelectedAudioInputHandler = function setSelectedAudioInputHandler(deviceId) {
    var deviceIndex = mediaDevices.audioInput.findIndex(function (v) {
      return v.deviceId === deviceId;
    });
    setSelectedDevices(Meet_objectSpread(Meet_objectSpread({}, selectedDevices), {}, {
      audioInput: mediaDevices.audioInput[deviceIndex]
    }));
  };

  var setSelectedAudioOutputHandler = function setSelectedAudioOutputHandler(deviceId) {
    var deviceIndex = mediaDevices.audioOutput.findIndex(function (v) {
      return v.deviceId === deviceId;
    });
    setSelectedDevices(Meet_objectSpread(Meet_objectSpread({}, selectedDevices), {}, {
      audioOutput: mediaDevices.audioOutput[deviceIndex]
    }));
  };

  var toggleAudioHandler = function toggleAudioHandler(value) {
    setSettings(Meet_objectSpread(Meet_objectSpread({}, settings), {}, {
      isAudio: !settings.isAudio
    }));
  };

  var toggleVideoHandler = function toggleVideoHandler() {
    setSettings(Meet_objectSpread(Meet_objectSpread({}, settings), {}, {
      isVideo: !settings.isVideo
    }));
  };

  if (store.userData) if (!isExcludedUser) return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SettingsModal_SettingsModal, {
      setSelectedVideoInput: setSelectedVideoInputHandler,
      setSelectedAudioInput: setSelectedAudioInputHandler,
      setSelectedAudioOutput: setSelectedAudioOutputHandler,
      toggle: setIsOpenSettingsModal,
      isOpen: isOpenSettingsModal,
      selectedDevices: selectedDevices,
      devices: mediaDevices
    }), !participate ? /*#__PURE__*/(0,jsx_runtime.jsx)(MeetSettings_MeetSettings, {
      isAdmin: store.userData.id === meetAdmin || isNewMeeting,
      settings: settings,
      userAudioStream: userAudioStream,
      userVideoStream: userVideoStream,
      toggleAudioHandler: toggleAudioHandler,
      toggleVideoHandler: toggleVideoHandler,
      participants: participants,
      loading: loadingParticipations,
      error: errorParticipate,
      mediaDevices: mediaDevices,
      selectedDevices: selectedDevices,
      setupDevices: setupDevices,
      setMediaDevices: setMediaDevices,
      setSelectedDevices: setSelectedDevices,
      setSettings: setSettings,
      setIsOpenSettingsModal: setIsOpenSettingsModal,
      setLoading: function setLoading(val) {
        return setLoadingParticipation(val);
      },
      setErrorParticipate: function setErrorParticipate(err) {
        return _setErrorParticipate(err);
      },
      participateFunction: participateHandler
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(MeetCall_MeetCall, {
      isAdmin: store.userData.id === meetAdmin || isNewMeeting,
      roomID: props.match.params.meetId,
      userExcludedFunction: function userExcludedFunction() {
        return setIsExcludedUser(true);
      },
      selectedDevices: selectedDevices,
      isMessagingOn: isMessagingOn,
      showSettingsModal: function showSettingsModal() {
        return setIsOpenSettingsModal(true);
      },
      settings: settings
    })]
  });else return /*#__PURE__*/(0,jsx_runtime.jsx)(ExcludedPage_ExcludedPage, {});
  return null;
};

/* harmony default export */ var Meet = (Index);

/***/ }),

/***/ 21022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".kefM3TF6zRlBJy2NugjY{height:100vh}\n\n.KM281VZlSikLsEzPuflL{display:flex;align-items:center;justify-content:center;padding-top:70px}\n\n.fAD4uT5Soh7F6nm9yTCK{margin:20px 0px 20px 0px}\n\n.nOIgDGHVVny340KW7IEU{font-size:25px;font-weight:400;color:#000}\n\n.GkCMPwWwspesCbOfrYgi{display:flex;align-items:center;justify-content:center}\n\n.FcIBtHukh2_hf6OeYBct{font-size:14px;color:#fff !important;font-weight:400}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainContainer": "kefM3TF6zRlBJy2NugjY",
	"mainInfoContainer": "KM281VZlSikLsEzPuflL",
	"titleContainer": "fAD4uT5Soh7F6nm9yTCK",
	"titleText": "nOIgDGHVVny340KW7IEU",
	"buttonContainer": "GkCMPwWwspesCbOfrYgi",
	"returnButton": "FcIBtHukh2_hf6OeYBct"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 49176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".RnYZL99CBaT7RBUyeBif{width:100%;padding:10px;height:fit-content;display:flex !important;background-color:#202124;flex-direction:row !important;margin:0 !important}\n\n.KnydLxmmTDut9P6rHZ4q{display:flex;align-items:center;justify-content:center;padding:10px 20px 10px 20px}\n\n.mLQL7R9EvWoem_kLXiVw{font-size:20px;display:flex;align-items:center;justify-content:center}\n\n[dir=\"ltr\"] .mLQL7R9EvWoem_kLXiVw{margin-left:10px}\n\n[dir=\"rtl\"] .mLQL7R9EvWoem_kLXiVw{margin-right:10px}\n\n.KnydLxmmTDut9P6rHZ4q:hover{cursor:pointer;background:#eee}\n\n.HKF0A5fyfsjKOkR32tPP{display:flex;align-items:center;border-radius:50px;padding:10px;justify-content:center}\n\n.F37AYf9kI1zFlz7MV9JZ{margin-left:10px;margin-right:10px;cursor:pointer;border-radius:50%;height:35px;width:35px;text-align:center;display:flex;justify-content:center;align-items:center;margin-bottom:0;font-size:20px}\n\n[dir=\"ltr\"] .F37AYf9kI1zFlz7MV9JZ{padding-right:0px}\n\n[dir=\"rtl\"] .F37AYf9kI1zFlz7MV9JZ{padding-left:0px}\n\n.I4z2DssJo99o10Qm48rp{padding:10px;cursor:pointer;background-color:#202124;border-radius:10px;margin:10px;display:flex;align-items:center;justify-content:center}\n\n.W_m2naAkr06_7iw9EHQq{font-size:12px;color:#fff;font-weight:600;margin:0}\n\n.WYUX1zWMjMYk0O74aLl4{position:absolute;bottom:80px;border-radius:10px;background-color:#000;z-index:99999;height:100px;width:330px}\n\n[dir=\"ltr\"] .WYUX1zWMjMYk0O74aLl4{left:-120px}\n\n[dir=\"rtl\"] .WYUX1zWMjMYk0O74aLl4{right:-120px}\n\n.P4NPwifnbmrPer4ZKzTq{background:#36373a;border:1px solid #36373a;width:45px;height:45px;border-radius:50%;display:flex;align-items:center;justify-content:center}\n\n.F37AYf9kI1zFlz7MV9JZ:hover{background:#36373a}\n\n.R6t0n294XbpP6z_ZTTpv{background:#36373a;border:1px solid #36373a;min-width:45px;min-height:45px;border-radius:50%;display:flex;align-items:center;justify-content:center}\n\n.fR978sD7KDkVI2SbWjUL{background:#d93025;border:1px solid #d93025;min-width:45px;min-height:45px;border-radius:50%;display:flex;align-items:center;justify-content:center}\n\n.d6_115aWOV_P4Kfkjok0{color:#fff;font-size:17px}\n\n.kzMpvDmOrti4RlM0GeVB{color:#d93025}\n\n.R6t0n294XbpP6z_ZTTpv:hover{cursor:pointer;box-shadow:0 0 10px #ddd}\n\n.HAwkuGT_Th2S0vGIZtcD{background:#d93025}\n\n.n2iVujUNJZYByrsJbezg{position:absolute;top:-20px;background-color:#5e5e5e;height:20px;width:20px;border-radius:50%;justify-content:center;align-items:center;display:flex}\n\n[dir=\"ltr\"] .n2iVujUNJZYByrsJbezg{right:-5px}\n\n[dir=\"rtl\"] .n2iVujUNJZYByrsJbezg{left:-5px}\n\n.VemSKLRYrzHSVZQ1qVn3{color:#fff;font-size:13px;margin:0}\n\n.F1otXrM_y5VK5PR9MdYt{color:#fab91a !important}\n\n.Byg1XVXIfegM_b4FKCut{background-color:#1f2144}\n\n.lZteD3hzoWkD5TR5tk9T{display:flex;align-items:center;justify-content:center;padding:20px}\n\n.Am7aA5qkt_CIBJEtbLzk{display:flex;align-items:center;justify-content:center;padding:10px 20px 10px 20px}\n\n.abmR2bIgcbdkhWk70Wq1{font-size:20px}\n\n[dir=\"ltr\"] .abmR2bIgcbdkhWk70Wq1{margin-right:10px}\n\n[dir=\"rtl\"] .abmR2bIgcbdkhWk70Wq1{margin-left:10px}\n\n.ZKlNZP3n9ZpzB6xhgcGZ{margin:0;font-size:14px;font-weight:500}\n\n.Am7aA5qkt_CIBJEtbLzk:hover{cursor:pointer;background:#eee}\n\n.vtIfrtOCcRBHxUFtPw86{display:flex;align-items:center;justify-content:center;margin:0px 10px}\n\n.OD4JsSW7as4idXz2nbgY{position:absolute;background:#fab91a;width:10px;height:10px;border-radius:50%;top:10px}\n\n[dir=\"ltr\"] .OD4JsSW7as4idXz2nbgY{right:20px}\n\n[dir=\"rtl\"] .OD4JsSW7as4idXz2nbgY{left:20px}\n\n.PT0i08cADs0Z4BfqJlpP{font-size:20px;color:#999;font-weight:400;margin:0;font-weight:400}\n\n.C0Zal0kWrkkMf5Hf1UD6{font-size:32px;color:#1f2144}\n\n.W13FskTLYFkhSfEmijHj{color:#fff;font-size:22px;cursor:pointer}\n\n.i4kq_VQTYibBsE7YBoxf{height:30px;width:30px;object-fit:cover;border-radius:50%}\n\n.YisxyzEJcVgxIup7xC2L{color:#fff;font-weight:400;font-size:14px;margin:0}\n\n@media screen and (max-width: 767px){\n.RnYZL99CBaT7RBUyeBif{justify-content:flex-start !important;align-items:flex-start !important;flex-direction:column !important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footerItem": "RnYZL99CBaT7RBUyeBif",
	"leftItemIconBlock": "KnydLxmmTDut9P6rHZ4q",
	"leftItemIcon": "mLQL7R9EvWoem_kLXiVw",
	"centerItem": "HKF0A5fyfsjKOkR32tPP",
	"emojiText": "F37AYf9kI1zFlz7MV9JZ",
	"raiseHandContainer": "I4z2DssJo99o10Qm48rp",
	"raiseHandText": "W_m2naAkr06_7iw9EHQq",
	"reactionContainer": "WYUX1zWMjMYk0O74aLl4",
	"reactIconBlock": "P4NPwifnbmrPer4ZKzTq",
	"centerItemIconBlock": "R6t0n294XbpP6z_ZTTpv",
	"centerItemIconBlockPhone": "fR978sD7KDkVI2SbWjUL",
	"centerItemIcon": "d6_115aWOV_P4Kfkjok0",
	"red": "kzMpvDmOrti4RlM0GeVB",
	"redBg": "HAwkuGT_Th2S0vGIZtcD",
	"badgeContainer": "n2iVujUNJZYByrsJbezg",
	"badgeText": "VemSKLRYrzHSVZQ1qVn3",
	"activeIcon": "F1otXrM_y5VK5PR9MdYt",
	"activeBgIcon": "Byg1XVXIfegM_b4FKCut",
	"rightItem": "lZteD3hzoWkD5TR5tk9T",
	"rightItemIconBlock": "Am7aA5qkt_CIBJEtbLzk",
	"rightItemIcon": "abmR2bIgcbdkhWk70Wq1",
	"title": "ZKlNZP3n9ZpzB6xhgcGZ",
	"headerItems": "vtIfrtOCcRBHxUFtPw86",
	"alertCircleIcon": "OD4JsSW7as4idXz2nbgY",
	"dateBlock": "PT0i08cADs0Z4BfqJlpP",
	"profile": "C0Zal0kWrkkMf5Hf1UD6",
	"icon": "W13FskTLYFkhSfEmijHj",
	"userImage": "i4kq_VQTYibBsE7YBoxf",
	"meetInfoText": "YisxyzEJcVgxIup7xC2L"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 83979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".E7CEYVG6QJXbcKl2uCGX{border-radius:20px !important;padding:20px}\n\n.Ib6lLYIMqx6xutkJN7Vl{margin-bottom:20px}\n\n.qCdLQx7jyYT7Yq9aTEgQ{font-size:15px;font-weight:600;color:#000;margin:0}\n\n.xHm8kp2ajwuaZDCWz0wG{display:flex;align-items:center;margin:10px 0px 10px 0px;justify-content:space-between}\n\n.vkrdJNaLeQBODJc5iYs9{display:flex;align-items:center;justify-content:flex-start}\n\n.RABxcF_EQeS2F0Xbof78{height:40px;width:40px;border-radius:50%;object-fit:cover}\n\n[dir=\"ltr\"] .RABxcF_EQeS2F0Xbof78{margin-right:10px}\n\n[dir=\"rtl\"] .RABxcF_EQeS2F0Xbof78{margin-left:10px}\n\n.Yh_N41WTuxZVIO0RV6ka{font-size:14px;color:#000;font-size:500}\n\n.gsIeKL_L855ebJc3KYjJ{display:flex;align-items:center;margin-top:20px;justify-content:flex-end}\n\n.xQPMwZTkH3DGNxfGkjSF{margin:0px 5px 0px 5px;background-color:rgba(0,0,0,0) !important;color:#1f2144 !important;transition:all linear .2s !important;border-radius:0 !important;border:none !important;border-bottom:2px solid rgba(0,0,0,0) !important}\n\n.xQPMwZTkH3DGNxfGkjSF:hover{background-color:rgba(0,0,0,0) !important;border-bottom:2px solid #1f2144 !important;color:#1f2144 !important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contentClassName": "E7CEYVG6QJXbcKl2uCGX",
	"headerContainer": "Ib6lLYIMqx6xutkJN7Vl",
	"modelHeader": "qCdLQx7jyYT7Yq9aTEgQ",
	"mainUserItemContainer": "xHm8kp2ajwuaZDCWz0wG",
	"userInfoContainer": "vkrdJNaLeQBODJc5iYs9",
	"userImage": "RABxcF_EQeS2F0Xbof78",
	"userNameText": "Yh_N41WTuxZVIO0RV6ka",
	"modalFooter": "gsIeKL_L855ebJc3KYjJ",
	"modalButton": "xQPMwZTkH3DGNxfGkjSF"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 83394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".w19PZxrgL6zVFivuVCpC{height:100vh;background-color:#202124;width:100%}\n\n.R46Xf_AHNg89lQIdaq5s{display:flex;align-content:center;justify-content:center;height:100%}\n\n.taVpoDImBcKSLx3Qd9z3{display:flex;align-items:center;justify-content:center}\n\n.MsRQ9zP4Vg21_zoT_fKo{font-size:26px;margin:0px 10px;color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainContainer": "w19PZxrgL6zVFivuVCpC",
	"loadingContainer": "R46Xf_AHNg89lQIdaq5s",
	"loadingContentContainer": "taVpoDImBcKSLx3Qd9z3",
	"loadingText": "MsRQ9zP4Vg21_zoT_fKo"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".qZRC5fNKZM5lb6aRhSu8{background-color:#202124;height:100vh;overflow:hidden}\n\n.cfrmTJcW9HLueRb_8tNj{height:calc(100vh - 80px)}\n\n.uLZ4nwFkOxaPQLfZ0X8u{width:calc(100% - 20px);height:calc(100% - 20px);margin:20px !important;background-color:#202124;position:relative}\n\n.ZySNa2WmYLas5V6Unaet{font-size:14px;font-weight:700;color:#fff;margin:0}\n\n.PPkwaEIhtl8rIRMkQE53{height:50px;min-width:150px;background-color:#202124;border-radius:10px;padding:5px 10px 5px 10px;z-index:999999;top:40px;display:flex;align-items:center;justify-content:center;position:absolute}\n\n[dir=\"ltr\"] .PPkwaEIhtl8rIRMkQE53{left:40px}\n\n[dir=\"rtl\"] .PPkwaEIhtl8rIRMkQE53{right:40px}\n\n.ilM4GbsLg7xhK4wACVAS{position:absolute;bottom:80px;z-index:999;border-radius:5px}\n\n[dir=\"ltr\"] .ilM4GbsLg7xhK4wACVAS{right:20px}\n\n[dir=\"rtl\"] .ilM4GbsLg7xhK4wACVAS{left:20px}\n\n.WgUjdn5oOukldSBCYCjw{transition:all linear .3s}\n\n.ZTWFK9wcs6DlPRhVrD7B{display:grid;padding:10px;height:100%}\n\n.FFO96rQpjM5uI7bnulNt{padding:20px;display:flex;width:100%;flex-grow:1 !important;align-items:center;justify-content:center;font-size:30px}\n\n@media screen and (max-width: 768px){\n.WgUjdn5oOukldSBCYCjw{position:absolute !important;height:calc(100vh - 60px) !important;overflow:hidden !important;top:0 !important;width:100vw !important}\n\n[dir=\"ltr\"] .WgUjdn5oOukldSBCYCjw{right:0 !important}\n\n[dir=\"rtl\"] .WgUjdn5oOukldSBCYCjw{left:0 !important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainComponentContainer": "qZRC5fNKZM5lb6aRhSu8",
	"mainRowContainer": "cfrmTJcW9HLueRb_8tNj",
	"mainContainer": "uLZ4nwFkOxaPQLfZ0X8u",
	"reactionText": "ZySNa2WmYLas5V6Unaet",
	"reactionContainer": "PPkwaEIhtl8rIRMkQE53",
	"notificationsContainer": "ilM4GbsLg7xhK4wACVAS",
	"mainSideBarContainer": "WgUjdn5oOukldSBCYCjw",
	"gridContainer": "ZTWFK9wcs6DlPRhVrD7B",
	"gridItem": "FFO96rQpjM5uI7bnulNt"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 26075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ZzECIrSiEmD03zGcPgrE{display:flex;justify-content:space-between;box-sizing:border-box;height:calc(100vh - 260px);flex-direction:column}\n\n.RUNba9WsmhAtOnhIhAr0{padding:20px;flex:1;height:100%;overflow-y:scroll}\n\n.aTZQsRqQIngHIf5uDzLp{font-size:12px;color:#aca8a8;font-size:400;margin:0}\n\n.RUNba9WsmhAtOnhIhAr0::-webkit-scrollbar{width:16px}\n\n.RUNba9WsmhAtOnhIhAr0::-webkit-scrollbar-track{background:rgba(0,0,0,0)}\n\n.RUNba9WsmhAtOnhIhAr0::-webkit-scrollbar-thumb{height:6px;border:4px solid rgba(0,0,0,0);background-clip:padding-box;border-radius:10px;background-color:#ced0d4}\n\n.RUNba9WsmhAtOnhIhAr0::-webkit-scrollbar-thumb:hover{background-color:#ced0d4}\n\n.qSLtqYZu3Dpt22ob4nxz{margin-bottom:30px}\n\n.XvoJ_Os70pDiJYOAB4Mb{font-weight:500;font-size:14px;color:#bdbdbd}\n\nh3{margin:0;font-weight:400}\n\n.ezuLeg49EwCo2YFv6Auy{cursor:pointer;font-size:20px;color:#fab91a}\n\n[dir=\"ltr\"] .ezuLeg49EwCo2YFv6Auy{margin-left:10px}\n\n[dir=\"rtl\"] .ezuLeg49EwCo2YFv6Auy{margin-right:10px}\n\n.cAm6pFBVPTV2Y6pBpdSU{padding:5px 10px 5px 10px;border:none !important;outline:none !important;border-bottom:1px solid #eee;width:100%;font-size:13px;overflow-y:auto !important;background-color:rgba(0,0,0,0);resize:none;color:#fff;overflow-y:scroll}\n\n.uF7z9IHQu2NTR6LhHDb0{border-top:1px solid #616161;display:flex;padding:10px;align-items:center;justify-content:space-between}\n\n.ZP8EBkmOyjKaZpGHY2UU{color:#bdbdbd;font-weight:300}\n\n[dir=\"ltr\"] .ZP8EBkmOyjKaZpGHY2UU{margin-left:5px}\n\n[dir=\"rtl\"] .ZP8EBkmOyjKaZpGHY2UU{margin-right:5px}\n\n.wjo85yG_UByRRDT0ShLn{white-space:pre-wrap;word-wrap:break-word;padding-top:5px;color:#fff;font-size:14px}\n\n[dir=\"ltr\"] .wjo85yG_UByRRDT0ShLn{margin-left:10px}\n\n[dir=\"rtl\"] .wjo85yG_UByRRDT0ShLn{margin-right:10px}\n\n[dir] .wjo85yG_UByRRDT0ShLn{margin:0}\n\n.uF7z9IHQu2NTR6LhHDb0{padding:4px 5px 24px 5px;border-top:1px solid #6b6767;display:flex;align-items:center;justify-content:space-between;color:#555}\n\n.SrwVvHA8MztWKD3dX6f_{padding:4px 5px 24px 5px;border-top:1px solid #6b6767;display:flex;align-items:center;justify-content:space-between;color:#555}\n\n.wjo85yG_UByRRDT0ShLn:active{border-bottom:2px solid #fab91a;color:#fab91a}\n\n.wjo85yG_UByRRDT0ShLn:hover{cursor:pointer;background:rgba(0,121,107,.039)}\n\n@media screen and (max-width: 932px){\n.ZzECIrSiEmD03zGcPgrE{height:calc(100vh - 320px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"chatContainer": "ZzECIrSiEmD03zGcPgrE",
	"chatSection": "RUNba9WsmhAtOnhIhAr0",
	"messageDisabledText": "aTZQsRqQIngHIf5uDzLp",
	"chatBlock": "qSLtqYZu3Dpt22ob4nxz",
	"sender": "XvoJ_Os70pDiJYOAB4Mb",
	"icon": "ezuLeg49EwCo2YFv6Auy",
	"inputMessage": "cAm6pFBVPTV2Y6pBpdSU",
	"sendMsgSection": "uF7z9IHQu2NTR6LhHDb0",
	"small": "ZP8EBkmOyjKaZpGHY2UU",
	"textMessage": "wjo85yG_UByRRDT0ShLn",
	"sendMsgSectionDisabled": "SrwVvHA8MztWKD3dX6f_"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 66318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".HzoKcKjAn5hIGSrsypV3{height:calc(100% - 20px)}\n\n.AmjjR5aPAPTYmcptAqYs{position:relative;background-color:#36373a;border-radius:10px}\n\n.smULslgxtQxOjJjzh5no{height:calc(100vh - 270px)}\n\n.D13xOOWOZjfWMTtLplCM{font-size:20px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff;height:25px}\n\n.rY2O5KcvKC636rN4XL1N{padding:20px;display:flex;align-items:center;justify-content:space-between;margin:10px 0}\n\n.pXyvdhu_HHYxqTVXY_4n{display:flex;align-items:center}\n\n.hfYv5YLTPbl5kEUWH2YU{font-size:13px;color:#aca8a8;font-weight:400;margin:0}\n\n.ckh3nHTvo08zgDApRywh{display:flex;align-items:center;justify-content:center;width:100%;padding:10px;color:#555;cursor:pointer}\n\n.tSJ0qF1p3bzA0cuEA3GV{padding:20px;flex:1;overflow-y:scroll}\n\n.bxqHIPruoQr1PHYuSCWa{margin-bottom:30px}\n\n.TYhzR8a734FoiPSM0jmj{font-weight:500;font-size:14px}\n\nh3{margin:0;font-weight:400;color:#fff}\n\n.csu7_vpK6bqrnhdzHnoJ{cursor:pointer;color:#fff;font-size:17px}\n\n[dir=\"ltr\"] .csu7_vpK6bqrnhdzHnoJ{margin-right:10px}\n\n[dir=\"rtl\"] .csu7_vpK6bqrnhdzHnoJ{margin-left:10px}\n\ninput{padding:5px;border:none;outline:none;border-bottom:1px solid #eee}\n\n.zb3RntagXYRIkvtKgtjy{font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff}\n\n.bM2pptW5522BrXWGFOJU{font-weight:300}\n\n[dir=\"ltr\"] .bM2pptW5522BrXWGFOJU{margin-left:5px}\n\n[dir=\"rtl\"] .bM2pptW5522BrXWGFOJU{margin-right:5px}\n\n.jV9yLazbYANHPPai4NXR{padding-top:5px;color:#555;font-size:14px}\n\n[dir=\"ltr\"] .jV9yLazbYANHPPai4NXR{margin-left:10px}\n\n[dir=\"rtl\"] .jV9yLazbYANHPPai4NXR{margin-right:10px}\n\n[dir] .jV9yLazbYANHPPai4NXR{margin:0}\n\n.jV9yLazbYANHPPai4NXR:active{border-bottom:2px solid #1f2144;color:#fab91a}\n\n.jV9yLazbYANHPPai4NXR:hover{cursor:pointer;background:rgba(0,121,107,.039)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainContainer": "HzoKcKjAn5hIGSrsypV3",
	"messengerContainer": "AmjjR5aPAPTYmcptAqYs",
	"contentContainer": "smULslgxtQxOjJjzh5no",
	"mainTitle": "D13xOOWOZjfWMTtLplCM",
	"messengerHeader": "rY2O5KcvKC636rN4XL1N",
	"messengerHeaderTabs": "pXyvdhu_HHYxqTVXY_4n",
	"messageInfoText": "hfYv5YLTPbl5kEUWH2YU",
	"tab": "ckh3nHTvo08zgDApRywh",
	"chatSection": "tSJ0qF1p3bzA0cuEA3GV",
	"chatBlock": "bxqHIPruoQr1PHYuSCWa",
	"sender": "TYhzR8a734FoiPSM0jmj",
	"icon": "csu7_vpK6bqrnhdzHnoJ",
	"navHeaderItem": "zb3RntagXYRIkvtKgtjy",
	"small": "bM2pptW5522BrXWGFOJU",
	"textMessage": "jV9yLazbYANHPPai4NXR"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 53447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".aZ3SrDgjPmiZv5OicpSJ{margin-top:10px;margin-bottom:10px}\n\n.cSq90dWcFev3PcdTd81Z{display:flex;padding:10px;align-items:center;justify-content:space-between}\n\n.diEgWwPYnbKdYWn8cu3W{display:flex;align-items:center}\n\n.VINcLftGSQv017iZSHDJ{height:30px;width:30px;margin-right:10px;margin-left:10px;border-radius:30px;object-fit:cover}\n\n.ky4rEIeNBDORzw3vBL97{width:25px;height:25px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 10px}\n\n.gvuznQq1WyykJYRqc94P{font-size:14px;font-weight:500;color:#fff}\n\n.tupRVJTaOqRKGittfEgL{font-size:18px;color:#fff;cursor:pointer}\n\n[dir=\"ltr\"] .tupRVJTaOqRKGittfEgL{margin-right:15px}\n\n[dir=\"rtl\"] .tupRVJTaOqRKGittfEgL{margin-left:15px}\n\n.tTWOrZ1jw5aIUjG1rU9O{position:absolute;top:-5px;color:#fff;font-size:20px}\n\n[dir=\"ltr\"] .tTWOrZ1jw5aIUjG1rU9O{transform:rotate(20deg);left:calc(50% - 12px)}\n\n[dir=\"rtl\"] .tTWOrZ1jw5aIUjG1rU9O{transform:rotate(-20deg);right:calc(50% - 12px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainContainer": "aZ3SrDgjPmiZv5OicpSJ",
	"participantContainer": "cSq90dWcFev3PcdTd81Z",
	"participantInfoContainer": "diEgWwPYnbKdYWn8cu3W",
	"participantImage": "VINcLftGSQv017iZSHDJ",
	"centerItemIconBlock": "ky4rEIeNBDORzw3vBL97",
	"nameText": "gvuznQq1WyykJYRqc94P",
	"pinIcon": "tupRVJTaOqRKGittfEgL",
	"pinIconSlash": "tTWOrZ1jw5aIUjG1rU9O"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 52311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".orde9jGoE3WgAAQpi4rA{position:absolute;top:50px;background:#fff;border-radius:10px;padding:25px;z-index:999;width:min-content}\n\n[dir=\"ltr\"] .orde9jGoE3WgAAQpi4rA{left:50px}\n\n[dir=\"rtl\"] .orde9jGoE3WgAAQpi4rA{right:50px}\n\n.WobJlwwz0LaDAWXkjdLQ{display:flex;align-items:center;justify-content:space-between;color:#222}\n\n.VGlPGl_HQDt0DUWeBsK5{font-size:13px;color:#222}\n\n.LcsiWvQfUdFmK_ca8EgN{cursor:pointer;color:#555;margin:0 10px}\n\n.lzq8MlOXgTwgJ5XI152Z{cursor:pointer;font-size:20px}\n\n.nG7uFXcTuuftSvhNARXq{color:#4385f4;font-size:20px}\n\n[dir=\"ltr\"] .nG7uFXcTuuftSvhNARXq{margin-right:10px}\n\n[dir=\"rtl\"] .nG7uFXcTuuftSvhNARXq{margin-left:10px}\n\n.pG4UT0d2L2rfs0uDnAuG{font-size:12px}\n\n[dir=\"ltr\"] .pG4UT0d2L2rfs0uDnAuG{margin-right:10px}\n\n[dir=\"rtl\"] .pG4UT0d2L2rfs0uDnAuG{margin-left:10px}\n\n.yEfHLJg7UQ_k95BLEqFZ{display:flex;align-items:center;justify-content:center}\n\n.CvZV_aYP3YmeuDSAEs2w{font-size:14px;font-weight:600;border:none;outline:none;background:none;flex:1;color:#555}\n\n.zcs75TONX6gwdEBEfnxA{display:flex;align-items:center;justify-content:space-between;background:#f1f3f5;padding:15px;border-radius:5px}\n\n.lLL7iR_J_sOiB336m3PM{color:#222;font-size:14px}\n\n.NHL9GEZY4chqxSnbOubt{margin-bottom:1rem;font-size:18px;font-weight:400;color:#000}\n\n.OV1cqOUEjbTwSuqIHYK5{display:flex;align-items:center;justify-content:center;background:#1f2144;color:#fff;font-size:16px;padding:10px;border-radius:5px;outline:none;border:none;margin-top:20px}\n\n@media screen and (max-width: 768px){\n.orde9jGoE3WgAAQpi4rA{top:10px !important;background:#fff !important;border-radius:10px !important;padding:10px !important;width:calc(100vw - 20px) !important}\n\n[dir=\"ltr\"] .orde9jGoE3WgAAQpi4rA{left:10px !important}\n\n[dir=\"rtl\"] .orde9jGoE3WgAAQpi4rA{right:10px !important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"meetingInfoBlock": "orde9jGoE3WgAAQpi4rA",
	"meetingHeader": "WobJlwwz0LaDAWXkjdLQ",
	"smallText": "VGlPGl_HQDt0DUWeBsK5",
	"copyIcon": "LcsiWvQfUdFmK_ca8EgN",
	"timesIcon": "lzq8MlOXgTwgJ5XI152Z",
	"permissionIcon": "nG7uFXcTuuftSvhNARXq",
	"personIcon": "pG4UT0d2L2rfs0uDnAuG",
	"permissionText": "yEfHLJg7UQ_k95BLEqFZ",
	"urlText": "CvZV_aYP3YmeuDSAEs2w",
	"meetLink": "zcs75TONX6gwdEBEfnxA",
	"infoText": "lLL7iR_J_sOiB336m3PM",
	"title": "NHL9GEZY4chqxSnbOubt",
	"addPeopleBtn": "OV1cqOUEjbTwSuqIHYK5"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 43974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pw8TQkQdGHDrw4YOG5eY{background:#fff;border-radius:5px;padding:15px;min-width:250px;max-width:250px;margin-top:10px;margin-bottom:10px}\n\n.WdQVMV3B2DxgxHn9zfJf{display:flex;align-items:center;margin-bottom:5px;color:#fab91a}\n\n[dir=\"ltr\"] .gCAzseMJiULSWeAo0ppD{margin-right:10px}\n\n[dir=\"rtl\"] .gCAzseMJiULSWeAo0ppD{margin-left:10px}\n\n.vuzOwpbh02W7tAAcxKXd{font-size:16px;font-weight:500;margin:0;color:#1f2144}\n\n.mKH_m6NxpwRypn6nfoOr{font-size:14px;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainContainer": "pw8TQkQdGHDrw4YOG5eY",
	"notificationHeader": "WdQVMV3B2DxgxHn9zfJf",
	"icon": "gCAzseMJiULSWeAo0ppD",
	"userText": "vuzOwpbh02W7tAAcxKXd",
	"notificationMsg": "mKH_m6NxpwRypn6nfoOr"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 43808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hwbc41H7h_nyNwANb8l1{position:absolute;bottom:60px;background-color:#000;min-width:200px;z-index:999;padding:20px 15px 20px 15px;border-radius:5px}\n\n[dir=\"ltr\"] .hwbc41H7h_nyNwANb8l1{left:40px}\n\n[dir=\"rtl\"] .hwbc41H7h_nyNwANb8l1{right:40px}\n\n.iv3_lCFDdDaKHfbM93Dn{font-size:15px;font-weight:500;color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainContainer": "hwbc41H7h_nyNwANb8l1",
	"notificationContentText": "iv3_lCFDdDaKHfbM93Dn"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 20306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".TDiy6WPlmzG38DRXOWG4{height:calc(100% - 40px);width:100%;border-radius:10px;padding:0;z-index:998;position:relative;cursor:pointer;margin:0 !important}\n\n.e4nKvOuq0DNVoca5wqUQ{height:calc(100% - 40px);margin:0 !important;width:100%;border-radius:10px;padding:30px;z-index:998;background-color:#36373a;position:relative;display:flex;align-items:center;justify-content:center}\n\n.s7MmSG0kKJvyPtqt3Ckn{position:absolute;top:10px;display:none}\n\n[dir=\"ltr\"] .s7MmSG0kKJvyPtqt3Ckn{left:10px}\n\n[dir=\"rtl\"] .s7MmSG0kKJvyPtqt3Ckn{right:10px}\n\n.bRuPVJN5LJVLxEx_Py4j{border-style:solid;border-color:#7e8285;position:relative;transition:border-width linear .1s;border-width:50px;border-radius:50%;display:flex;align-items:center}\n\n.BL8ulHglyJkfJ84ou0wF{position:absolute;bottom:20px}\n\n[dir=\"ltr\"] .BL8ulHglyJkfJ84ou0wF{left:20px}\n\n[dir=\"rtl\"] .BL8ulHglyJkfJ84ou0wF{right:20px}\n\n.Mi9qIlZOXCqasUUL1c2g{display:flex;align-items:center;justify-content:center}\n\n.hRFF6FSyGyAJejHwU2sw{height:120px;width:120px;border-radius:50%;background-position:50% 50%;margin:auto;background-repeat:no-repeat;background-size:cover}\n\n.Pp27H3HRb6izZ4cwMPBv{height:88vh;width:100%;overflow:hidden}\n\n.kMIfzAUcf9WkfpQ8Ocfk{object-fit:fill;width:100%;height:100%}\n\n.Y1SiP2CbT15KZiiIPdMM{color:#fff;font-weight:500;width:100%;text-align:center;margin:0;font-size:13px}\n\n.oqDBcng7qDTPh95Msh3w{background-color:#202124;z-index:99;width:25px;height:25px;position:absolute;top:10px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 10px}\n\n[dir=\"ltr\"] .oqDBcng7qDTPh95Msh3w{right:0px}\n\n[dir=\"rtl\"] .oqDBcng7qDTPh95Msh3w{left:0px}\n\n.vyyuKVTBcI2v5yA620Z7{z-index:99;position:absolute;top:10px;margin:0 10px}\n\n[dir=\"ltr\"] .vyyuKVTBcI2v5yA620Z7{right:0px}\n\n[dir=\"rtl\"] .vyyuKVTBcI2v5yA620Z7{left:0px}\n\n.g3wXifQVdhFKpMfgs5Rf{color:#fff;font-size:13px}\n\n.JwMHUrlh6OZSXZYHnbu1{position:absolute !important;display:flex;align-items:center;justify-content:space-around;height:40px;border-radius:50px;width:120px;background-color:rgba(0,0,0,.6);top:calc(50% - 20px);z-index:999}\n\n[dir=\"ltr\"] .JwMHUrlh6OZSXZYHnbu1{left:calc(50% - 60px)}\n\n[dir=\"rtl\"] .JwMHUrlh6OZSXZYHnbu1{right:calc(50% - 60px)}\n\n.mTMdhrzdU9Fzkx08fOZR{height:35px;width:35px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative}\n\n.mTMdhrzdU9Fzkx08fOZR:hover{background-color:rgba(48,44,44,.8)}\n\n.CO8NIK5h1LzHnkFr1A25{font-size:17px;color:#d1d1d1;cursor:pointer}\n\n.bMQFveS3FrqhFPSH23VK{position:absolute;top:2px;color:#d1d1d1;font-size:20px}\n\n[dir=\"ltr\"] .bMQFveS3FrqhFPSH23VK{transform:rotate(-40deg);left:calc(50% - 5px)}\n\n[dir=\"rtl\"] .bMQFveS3FrqhFPSH23VK{transform:rotate(40deg);right:calc(50% - 5px)}\n\n.uSdXLXAl1b2jaP7__0wO{position:absolute;top:5px;color:#153731;font-size:20px}\n\n[dir=\"ltr\"] .uSdXLXAl1b2jaP7__0wO{transform:rotate(-40deg);left:calc(50% - 5px)}\n\n[dir=\"rtl\"] .uSdXLXAl1b2jaP7__0wO{transform:rotate(40deg);right:calc(50% - 5px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainContainerVideoOn": "TDiy6WPlmzG38DRXOWG4",
	"mainContainerVideoOff": "e4nKvOuq0DNVoca5wqUQ",
	"soundActivity": "s7MmSG0kKJvyPtqt3Ckn",
	"userImageContainer": "bRuPVJN5LJVLxEx_Py4j",
	"userInfoContainer": "BL8ulHglyJkfJ84ou0wF",
	"mainUserContainer": "Mi9qIlZOXCqasUUL1c2g",
	"userImage": "hRFF6FSyGyAJejHwU2sw",
	"videoContainer": "Pp27H3HRb6izZ4cwMPBv",
	"video": "kMIfzAUcf9WkfpQ8Ocfk",
	"userNameText": "Y1SiP2CbT15KZiiIPdMM",
	"centerItemIconBlock": "oqDBcng7qDTPh95Msh3w",
	"centerItemIconBlockVoice": "vyyuKVTBcI2v5yA620Z7",
	"microIcon": "g3wXifQVdhFKpMfgs5Rf",
	"menuControlsContainer": "JwMHUrlh6OZSXZYHnbu1",
	"menuControlItem": "mTMdhrzdU9Fzkx08fOZR",
	"controlIcon": "CO8NIK5h1LzHnkFr1A25",
	"pinIconSlash": "bMQFveS3FrqhFPSH23VK",
	"pinIconSlashTwo": "uSdXLXAl1b2jaP7__0wO"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 80730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".d9N5UkY9VoF_yRIi0_xM{width:100%;height:100%;border-radius:10px;padding:0;z-index:999;background-color:#36373a;position:relative;cursor:pointer;border:4px solid rgba(0,0,0,0);margin:0 !important}\n\n.e4eH9UPACr_gO19JwmZK{width:100%;height:100%;border:4px solid rgba(0,0,0,0);margin:auto !important;border-radius:10px;padding:30px;z-index:998;background-color:#36373a;position:relative;display:flex;align-items:center;justify-content:center}\n\n.BeXNtNsn9Oef07ywQuyi{display:flex;align-items:center;justify-content:center}\n\n.Vg_WeS_fJkxX4b75uBDE{position:absolute;top:10px;display:none}\n\n[dir=\"ltr\"] .Vg_WeS_fJkxX4b75uBDE{left:10px}\n\n[dir=\"rtl\"] .Vg_WeS_fJkxX4b75uBDE{right:10px}\n\n._PyDdofGvIF1BSjtfB7x{border-style:solid;border-color:#7e8285;position:absolute;transition:border-width linear .1s;border-width:30px;border-radius:50%;display:flex;align-items:center}\n\n._2gdp4P8GwbXdV8_UiFQ{position:absolute;bottom:20px}\n\n[dir=\"ltr\"] ._2gdp4P8GwbXdV8_UiFQ{left:20px}\n\n[dir=\"rtl\"] ._2gdp4P8GwbXdV8_UiFQ{right:20px}\n\n.OqWtDnQe6XK8aL9NE0od{height:120px;width:120px;border-radius:50%;background-position:50% 50%;margin:auto;background-repeat:no-repeat;background-size:cover}\n\n.cjFTQoKzq4I98jSq7vws{width:100%;height:100%;top:0;border-radius:10px;position:absolute;overflow:hidden}\n\n[dir=\"ltr\"] .cjFTQoKzq4I98jSq7vws{left:0}\n\n[dir=\"rtl\"] .cjFTQoKzq4I98jSq7vws{right:0}\n\n.wjOT66HBkrRY8DVFRoaX{top:0;object-fit:fill;width:100%}\n\n[dir=\"ltr\"] .wjOT66HBkrRY8DVFRoaX{left:0}\n\n[dir=\"rtl\"] .wjOT66HBkrRY8DVFRoaX{right:0}\n\n.MVkcdehpeATCis76tp_2{color:#fff;font-weight:500;width:100%;text-align:center;margin:0;font-size:13px}\n\n.poxamZj2lcNJUWtKG_B5{background-color:#202124;z-index:99;width:25px;height:25px;position:absolute;top:10px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 10px}\n\n[dir=\"ltr\"] .poxamZj2lcNJUWtKG_B5{right:0px}\n\n[dir=\"rtl\"] .poxamZj2lcNJUWtKG_B5{left:0px}\n\n.KxpgSwv9GTMp7qJiEwMv{z-index:99;position:absolute;top:10px;margin:0 10px}\n\n[dir=\"ltr\"] .KxpgSwv9GTMp7qJiEwMv{right:0px}\n\n[dir=\"rtl\"] .KxpgSwv9GTMp7qJiEwMv{left:0px}\n\n.JshIlE3SBRWGvSbOslQA{color:#fff;font-size:13px}\n\n.tJFMR97QyJFAejpkN2W1{position:absolute !important;display:flex;align-items:center;justify-content:space-around;height:40px;border-radius:50px;width:120px;background-color:rgba(0,0,0,.6);top:calc(50% - 20px);z-index:999}\n\n[dir=\"ltr\"] .tJFMR97QyJFAejpkN2W1{left:calc(50% - 60px)}\n\n[dir=\"rtl\"] .tJFMR97QyJFAejpkN2W1{right:calc(50% - 60px)}\n\n.AdAQbIBv9N2QKvMrRg0f{height:35px;width:35px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative}\n\n.AdAQbIBv9N2QKvMrRg0f:hover{background-color:rgba(48,44,44,.8)}\n\n.FOU6LwH3wQnuLMwniSBJ{font-size:17px;color:#d1d1d1;cursor:pointer}\n\n.L7sWXmlrvbuDtyD8NBDA{position:absolute;top:2px;color:#d1d1d1;font-size:20px}\n\n[dir=\"ltr\"] .L7sWXmlrvbuDtyD8NBDA{transform:rotate(-40deg);left:calc(50% - 5px)}\n\n[dir=\"rtl\"] .L7sWXmlrvbuDtyD8NBDA{transform:rotate(40deg);right:calc(50% - 5px)}\n\n.HUAai_YOC9nCaEF9FTAp{position:absolute;top:5px;color:#153731;font-size:20px}\n\n[dir=\"ltr\"] .HUAai_YOC9nCaEF9FTAp{transform:rotate(-40deg);left:calc(50% - 5px)}\n\n[dir=\"rtl\"] .HUAai_YOC9nCaEF9FTAp{transform:rotate(40deg);right:calc(50% - 5px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainContainerVideoOn": "d9N5UkY9VoF_yRIi0_xM",
	"mainContainerVideoOff": "e4eH9UPACr_gO19JwmZK",
	"mainUserContainer": "BeXNtNsn9Oef07ywQuyi",
	"soundActivity": "Vg_WeS_fJkxX4b75uBDE",
	"userImageContainer": "_PyDdofGvIF1BSjtfB7x",
	"userInfoContainer": "_2gdp4P8GwbXdV8_UiFQ",
	"userImage": "OqWtDnQe6XK8aL9NE0od",
	"videoContainer": "cjFTQoKzq4I98jSq7vws",
	"video": "wjOT66HBkrRY8DVFRoaX",
	"userNameText": "MVkcdehpeATCis76tp_2",
	"centerItemIconBlock": "poxamZj2lcNJUWtKG_B5",
	"centerItemIconBlockVoice": "KxpgSwv9GTMp7qJiEwMv",
	"microIcon": "JshIlE3SBRWGvSbOslQA",
	"menuControlsContainer": "tJFMR97QyJFAejpkN2W1",
	"menuControlItem": "AdAQbIBv9N2QKvMrRg0f",
	"controlIcon": "FOU6LwH3wQnuLMwniSBJ",
	"pinIconSlash": "L7sWXmlrvbuDtyD8NBDA",
	"pinIconSlashTwo": "HUAai_YOC9nCaEF9FTAp"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".PIj6y6O8IT16y8CuoeqT{height:150px;width:250px;border-radius:10px;bottom:60px;z-index:999;position:absolute;background-color:#4a4e51}\n\n[dir=\"ltr\"] .PIj6y6O8IT16y8CuoeqT{right:60px}\n\n[dir=\"rtl\"] .PIj6y6O8IT16y8CuoeqT{left:60px}\n\n.R7AC32YN45osDfdCFigN{height:50px;width:250px;border-radius:10px;bottom:60px;z-index:999;position:absolute;background-color:#4a4e51}\n\n[dir=\"ltr\"] .R7AC32YN45osDfdCFigN{right:60px}\n\n[dir=\"rtl\"] .R7AC32YN45osDfdCFigN{left:60px}\n\n.V5aN6muScfnT7vaRyy2Q{position:absolute;top:0;height:100%;width:100%;display:flex;align-items:center;justify-content:flex-start}\n\n[dir=\"ltr\"] .V5aN6muScfnT7vaRyy2Q{left:0}\n\n[dir=\"rtl\"] .V5aN6muScfnT7vaRyy2Q{right:0}\n\n.FQMhnfnRBA6z6UgxbBjC{font-size:13px;color:#fff;margin:0;font-weight:600;margin-left:5px;margin-right:5px}\n\n.sl9gQaCTtudoTN1DMUVq{position:absolute;top:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center}\n\n[dir=\"ltr\"] .sl9gQaCTtudoTN1DMUVq{left:0}\n\n[dir=\"rtl\"] .sl9gQaCTtudoTN1DMUVq{right:0}\n\n.NrVkRCD99yyYK9vOHOKh{display:flex;position:relative;align-items:center;justify-content:center;height:100%}\n\n.GRDRSuCwS7evjf1sMQJE{height:35px;width:35px;border-radius:50%;cursor:pointer;display:flex;align-items:center;background-color:rgba(48,44,44,.7);justify-content:center;position:relative;margin-left:5px;margin-right:5px}\n\n.JMlthSS9uImx_Ep9yXct{height:35px;width:35px;border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;margin-left:5px;margin-right:5px}\n\n.GRDRSuCwS7evjf1sMQJE:hover{background-color:#302c2c}\n\n.KZTKHaPmLGjjpQKJPRzz{font-size:17px;color:#d1d1d1;cursor:pointer}\n\n.jYN61yfqY2u1AuQQntFm{height:60px;width:60px;border-radius:50%}\n\n.lQJOivozjSmwtOrxXvlX{height:100%;width:100%;border-radius:10px;overflow:hidden}\n\n.PY6m4UwaWYkEC5YGOXYl{top:0;object-fit:fill;width:100%;height:100%}\n\n[dir=\"ltr\"] .PY6m4UwaWYkEC5YGOXYl{left:0}\n\n[dir=\"rtl\"] .PY6m4UwaWYkEC5YGOXYl{right:0}\n\n.OWkBbv8Jt4tAjeJSfpzm{background-color:#000;z-index:99;width:25px;height:25px;position:absolute;top:10px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 10px}\n\n[dir=\"ltr\"] .OWkBbv8Jt4tAjeJSfpzm{right:0px}\n\n[dir=\"rtl\"] .OWkBbv8Jt4tAjeJSfpzm{left:0px}\n\n.OrkFyOrfuvyxJxLUKB2A{color:#fff;font-size:13px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainContainer": "PIj6y6O8IT16y8CuoeqT",
	"minimizedMainContainer": "R7AC32YN45osDfdCFigN",
	"minimizedControlContainer": "V5aN6muScfnT7vaRyy2Q",
	"youText": "FQMhnfnRBA6z6UgxbBjC",
	"controlContainer": "sl9gQaCTtudoTN1DMUVq",
	"mainUserInfoContainer": "NrVkRCD99yyYK9vOHOKh",
	"menuControlItem": "GRDRSuCwS7evjf1sMQJE",
	"menuItem": "JMlthSS9uImx_Ep9yXct",
	"controlIcon": "KZTKHaPmLGjjpQKJPRzz",
	"userImage": "jYN61yfqY2u1AuQQntFm",
	"videoContainer": "lQJOivozjSmwtOrxXvlX",
	"video": "PY6m4UwaWYkEC5YGOXYl",
	"centerItemIconBlock": "OWkBbv8Jt4tAjeJSfpzm",
	"microIcon": "OrkFyOrfuvyxJxLUKB2A"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 87480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".eut_IliEPnKpe5Qix0K4{background-color:#fab91a;width:25px;height:25px;border-radius:50%;display:flex;align-items:center;justify-content:center}\n\n.nw_PsCn2zprgnGxRACK0{background-color:#000;width:4px;transition:all linear .1s}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainContainer": "eut_IliEPnKpe5Qix0K4",
	"waveItem": "nw_PsCn2zprgnGxRACK0"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 89511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".LEMf4u_2cOjkMBui24IE{height:100vh}\n\n.KfQfhxbU1CAHoAk1Xc3f{background:#fff;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;margin:0 10px}\n\n.m6u6G85qO2TWotK1JOy1{display:flex;align-items:center;justify-content:center}\n\n.R8xAWbrH8JhZ6VvabEs8{background:#d93025;color:#fff}\n\n.OmdP5qnO8a97ubeCZA5p{color:#fff}\n\n.Tz9q1X1ISLAKbvC60xbg{color:#555;font-size:20px}\n\n.NdpE034NYAFhe4eJ4xnU{width:100%;height:400px;border-radius:10px;position:relative;background-color:#000;overflow:hidden;box-shadow:0 1px 2px 0 rgba(60,64,67,.302),0 2px 6px 2px rgba(60,64,67,.149)}\n\n.gN_Uz2me3LKlWfniwPt3{top:0;object-fit:fill;width:100%;height:100%}\n\n[dir=\"ltr\"] .gN_Uz2me3LKlWfniwPt3{left:0}\n\n[dir=\"rtl\"] .gN_Uz2me3LKlWfniwPt3{right:0}\n\n.M3zLUuOsZBOWi3jQBFq9{position:absolute;bottom:0px;display:flex;justify-content:center;width:100%;padding:20px;align-items:center}\n\n[dir=\"ltr\"] .M3zLUuOsZBOWi3jQBFq9{left:0px}\n\n[dir=\"rtl\"] .M3zLUuOsZBOWi3jQBFq9{right:0px}\n\n.a0SDdmM1XNleCKW1ezNl{text-align:center;font-size:28px}\n\n.ziEwg12glIuvJPY9fQE9{display:flex;align-items:center;justify-content:flex-start;margin:10px 0}\n\n.JhLIb0vSoQmlTRsfZErx{height:30px;width:30px;border-radius:50%;object-fit:cover}\n\n[dir=\"ltr\"] .JhLIb0vSoQmlTRsfZErx{margin-right:10px}\n\n[dir=\"rtl\"] .JhLIb0vSoQmlTRsfZErx{margin-left:10px}\n\n.Vmpz5OqMAwR82c4lS8Jm{font-size:13px;text-align:center;margin:10px 0;color:#000}\n\n.jD8rYCO74OGX97BtfwN4{display:flex;align-items:center;justify-content:center;margin:20px 0}\n\n.N7Kfj7v2bXbHsrC6_OaL{font-size:1.2rem;font-weight:normal;border-radius:30px !important;color:#fff !important;padding:10px 20px 10px 20px !important;border:none !important}\n\n.fcCi1UFvTIx_d0oJ2_Nn{font-size:1.2rem;font-weight:normal;border-radius:30px !important;color:#fff !important;padding:10px 20px 10px 20px !important;border:none !important}\n\n[dir=\"ltr\"] .fcCi1UFvTIx_d0oJ2_Nn{margin-right:1rem}\n\n[dir=\"rtl\"] .fcCi1UFvTIx_d0oJ2_Nn{margin-left:1rem}\n\n.pZbI7eSnPemBuE7LstWu{z-index:99;position:absolute;bottom:30px}\n\n[dir=\"ltr\"] .pZbI7eSnPemBuE7LstWu{left:30px}\n\n[dir=\"rtl\"] .pZbI7eSnPemBuE7LstWu{right:30px}\n\n.uQcTFGv9EEs4moic6TYg{z-index:99;background-color:#555;padding:10px;color:#fff;border-radius:50%;position:absolute;bottom:20px;margin:0;height:44px;width:44px;display:flex;align-items:center;justify-content:center}\n\n[dir=\"ltr\"] .uQcTFGv9EEs4moic6TYg{left:20px}\n\n[dir=\"rtl\"] .uQcTFGv9EEs4moic6TYg{right:20px}\n\n.pZnRR0ulO5RVYM7tKrAv{position:absolute;top:20px;background-color:rgba(0,0,0,0);border-radius:50%;height:40px;width:40px;display:flex;color:#fff;align-items:center;justify-content:center}\n\n[dir=\"ltr\"] .pZnRR0ulO5RVYM7tKrAv{right:20px}\n\n[dir=\"rtl\"] .pZnRR0ulO5RVYM7tKrAv{left:20px}\n\n.eBBkchgfRRulNK9Bwsql{color:inherit}\n\n.pZnRR0ulO5RVYM7tKrAv:hover{background-color:#555}\n\n@media screen and (max-width: 768px){\n.NdpE034NYAFhe4eJ4xnU{height:300px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainContainer": "LEMf4u_2cOjkMBui24IE",
	"centerItemIconBlock": "KfQfhxbU1CAHoAk1Xc3f",
	"mainVideoContainer": "m6u6G85qO2TWotK1JOy1",
	"redBg": "R8xAWbrH8JhZ6VvabEs8",
	"activeIcon": "OmdP5qnO8a97ubeCZA5p",
	"centerItemIcon": "Tz9q1X1ISLAKbvC60xbg",
	"videoContainer": "NdpE034NYAFhe4eJ4xnU",
	"video": "gN_Uz2me3LKlWfniwPt3",
	"controlsContainer": "M3zLUuOsZBOWi3jQBFq9",
	"participateTitle": "a0SDdmM1XNleCKW1ezNl",
	"participantsPicturesContainer": "ziEwg12glIuvJPY9fQE9",
	"participantImage": "JhLIb0vSoQmlTRsfZErx",
	"participantsText": "Vmpz5OqMAwR82c4lS8Jm",
	"buttonContainer": "jD8rYCO74OGX97BtfwN4",
	"participateButton": "N7Kfj7v2bXbHsrC6_OaL",
	"copyLinkButton": "fcCi1UFvTIx_d0oJ2_Nn",
	"centerItemIconBlockVoiceOn": "pZbI7eSnPemBuE7LstWu",
	"centerItemIconBlockVoiceOff": "uQcTFGv9EEs4moic6TYg",
	"settingsContainer": "pZnRR0ulO5RVYM7tKrAv",
	"settingsIcon": "eBBkchgfRRulNK9Bwsql"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 75155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".CNyU01NFLenVr_CZBoUs{border-radius:20px !important;min-height:500px;z-index:99999999999 !important}\n\n.E6_kEsyAKsgxXLmh_g5B{font-size:20px;font-weight:400;color:#34373a}\n\n._ZncJ_QrBLLrGOWwmhla{max-width:800px !important;z-index:999999999 !important}\n\n.QLvAf8ExDlf7bFkzqM5w{padding:5px 10px 5px 10px;margin-bottom:20px}\n\n.UlmuNjaU4PX9IoFLmXaP{font-size:15px;font-weight:600;color:#000;margin:0}\n\n.IUmbgNDKF4TfIsdrejvA{display:flex;align-items:center;justify-content:flex-end;padding:10px 20px 10px 20px}\n\n.K0vvKXQTxDDHhX8mv8bv{margin:10px 0px 10px 0px}\n\n.bljn81SQhf_hDmh6wGTo{margin:10px 0px}\n\n.L5GB_VbfEqme_zlTnZpO{font-size:20px;color:#999}\n\n.NSJaOjOtxOvGHdSNVCxj{padding:0px 20px 20px 20px}\n\n[dir=\"ltr\"] .NSJaOjOtxOvGHdSNVCxj{border-right:1px solid #999}\n\n[dir=\"rtl\"] .NSJaOjOtxOvGHdSNVCxj{border-left:1px solid #999}\n\n.mAz9JVHN6tJ_4rBa4y0J{color:#1f2144;font-size:14px;font-weight:500}\n\n.Wrk5VyVO6G5pDL2nLT8h{display:flex;align-items:center;justify-content:flex-start;padding:10px 15px 10px 15px;background-color:#fff;margin-top:5px;margin-bottom:5px;cursor:pointer}\n\n[dir=\"ltr\"] .Wrk5VyVO6G5pDL2nLT8h{border-radius:0px 20px 20px 0px}\n\n[dir=\"rtl\"] .Wrk5VyVO6G5pDL2nLT8h{border-radius:20px 0px 0px 20px}\n\n.oFCo4rgNtDcUh2A9TImM{display:flex;align-items:center;justify-content:flex-start;padding:10px 15px 10px 15px;background-color:#e8f0fe;cursor:pointer;margin-top:5px;margin-bottom:5px}\n\n[dir=\"ltr\"] .oFCo4rgNtDcUh2A9TImM{border-radius:0px 20px 20px 0px}\n\n[dir=\"rtl\"] .oFCo4rgNtDcUh2A9TImM{border-radius:20px 0px 0px 20px}\n\n.Wrk5VyVO6G5pDL2nLT8h:hover{background-color:#e9e9e9}\n\n._uhCFQLTZUf2niSEzl7A{font-size:18px;color:#1967d2}\n\n[dir=\"ltr\"] ._uhCFQLTZUf2niSEzl7A{margin-right:10px}\n\n[dir=\"rtl\"] ._uhCFQLTZUf2niSEzl7A{margin-left:10px}\n\n.VRZBsnISgM0jaSjwslMJ{font-size:18px;color:#5f6368}\n\n[dir=\"ltr\"] .VRZBsnISgM0jaSjwslMJ{margin-right:10px}\n\n[dir=\"rtl\"] .VRZBsnISgM0jaSjwslMJ{margin-left:10px}\n\n.JrHOGqqpDfMFQ6n4LH9l{font-size:13px;color:#5f6368}\n\n.OXifPuyzVLXtEVXg19yC{font-size:13px;color:#1967d2}\n\n._1PbOGJLMKRBgv1bXvZPQ{margin:0px 5px 0px 5px;background-color:rgba(0,0,0,0) !important;color:#1f2144 !important;transition:all linear .2s !important;border-radius:0 !important;border:none !important;border-bottom:2px solid rgba(0,0,0,0) !important}\n\n._1PbOGJLMKRBgv1bXvZPQ:hover{background-color:rgba(0,0,0,0) !important;border-bottom:2px solid #1f2144 !important;color:#1f2144 !important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contentClassName": "CNyU01NFLenVr_CZBoUs",
	"settingTitle": "E6_kEsyAKsgxXLmh_g5B",
	"className": "_ZncJ_QrBLLrGOWwmhla",
	"headerContainer": "QLvAf8ExDlf7bFkzqM5w",
	"modelHeader": "UlmuNjaU4PX9IoFLmXaP",
	"toggleModalHeader": "IUmbgNDKF4TfIsdrejvA",
	"mainItemContainer": "K0vvKXQTxDDHhX8mv8bv",
	"itemContainer": "bljn81SQhf_hDmh6wGTo",
	"iconTimes": "L5GB_VbfEqme_zlTnZpO",
	"sidebarContainer": "NSJaOjOtxOvGHdSNVCxj",
	"categoryTitle": "mAz9JVHN6tJ_4rBa4y0J",
	"menuItemContainer": "Wrk5VyVO6G5pDL2nLT8h",
	"menuItemContainerActive": "oFCo4rgNtDcUh2A9TImM",
	"menuIconActive": "_uhCFQLTZUf2niSEzl7A",
	"menuIcon": "VRZBsnISgM0jaSjwslMJ",
	"menuText": "JrHOGqqpDfMFQ6n4LH9l",
	"menuTextActive": "OXifPuyzVLXtEVXg19yC",
	"modalButton": "_1PbOGJLMKRBgv1bXvZPQ"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 52361:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 94616:
/***/ (function() {

/* (ignored) */

/***/ })

}]);